import { company } from "@/lib/company";
import { serviceOfferings } from "@/lib/services";

export const runtime = "nodejs";
const unavailable = "Your message has not been sent. Please email services@rdpsc.ca or call +1-613-668-6848 or +1-873-353-5905.";
// Best-effort per-process protection; deployment-wide limits belong at the host.
const attempts = new Map<string, { count: number; expires: number }>();

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return Response.json({ error: "Please submit this form from our website." }, { status: 403 });
  let data: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (raw.length > 12000) return Response.json({ error: "Your message is too long." }, { status: 413 });
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("Invalid body");
    data = parsed;
  } catch {
    return Response.json({ error: "Please check your form details and try again." }, { status: 400 });
  }
  const field = (key: string) => typeof data[key] === "string" ? data[key].trim() : "";
  const name = field("name"), email = field("email"), subject = field("subject"), message = field("message");
  const kind = field("kind"), phone = field("phone"), organization = field("organization"), method = field("contactMethod"), timing = field("timing");
  const subjects: readonly string[] = [...serviceOfferings.map(service => service.title), "General Inquiry", "Request a Consultation", "Partnership Opportunities", "Not sure — help me decide"];
  if (!name || name.length > 120 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || !subjects.includes(subject) || !message || message.length > 5000 || phone.length > 40 || organization.length > 120 || timing.length > 160 || !["inquiry", "consultation"].includes(kind) || (kind === "consultation" && !["Email", "Phone"].includes(method)) || (method === "Phone" && !phone)) {
    return Response.json({ error: "Please check your name, email, service, and message, then try again." }, { status: 400 });
  }
  const apiKey = process.env.RESEND_API_KEY, from = process.env.INQUIRY_FROM_EMAIL;
  if (!apiKey || !from) return Response.json({ error: unavailable }, { status: 503 });
  const now = Date.now();
  for (const [key, attempt] of attempts) if (attempt.expires <= now) attempts.delete(key);
  const key = email.toLowerCase();
  const attempt = attempts.get(key);
  if ((attempt?.count ?? 0) >= 5) return Response.json({ error: "Too many submission attempts. Please wait ten minutes or contact our team by phone." }, { status: 429 });
  if (attempts.size >= 5000 && !attempt) return Response.json({ error: unavailable }, { status: 503 });
  attempts.set(key, { count: (attempt?.count ?? 0) + 1, expires: attempt?.expires ?? now + 600000 });
  const text = [`${kind === "consultation" ? "Consultation request" : "Website inquiry"}`, `Name: ${name}`, `Email: ${email}`, `Phone: ${phone || "Not provided"}`, `Organization: ${organization || "Not provided"}`, `Service / subject: ${subject}`, `Preferred contact: ${method || "Email"}`, `Preferred timing: ${timing || "Flexible"}`, "", message].join("\n");
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [company.email], reply_to: email, subject: `${kind === "consultation" ? "Consultation request" : "Website inquiry"}: ${subject}`, text }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) return Response.json({ error: unavailable }, { status: 502 });
    const result = await response.json();
    if (!result.id) return Response.json({ error: unavailable }, { status: 502 });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "We could not confirm your submission. Please contact services@rdpsc.ca or call +1-613-668-6848." }, { status: 502 });
  }
}
