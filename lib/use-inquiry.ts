"use client";

import { useRef, useState, type FormEvent } from "react";

export function useInquiry(kind: "inquiry" | "consultation" = "inquiry", onSuccess?: () => void) {
  const [status, setStatus] = useState("");
  const [pending, setPending] = useState(false);
  const submitting = useRef(false);
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) ?? "").trim();
    submitting.current = true;
    setPending(true);
    setStatus("");
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind, name: value("name") || value("fullName"), email: value("email"), phone: value("phone"), organization: value("organization") || value("company"), subject: value("service") || value("subject"), message: value("message") || value("goals"), contactMethod: value("contactMethod"), timing: value("timing") }),
        signal: AbortSignal.timeout(20000),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Your message could not be sent. Please try again.");
      form.reset();
      onSuccess?.();
      setStatus(kind === "consultation" ? "Your consultation request has been submitted. Our team will contact you to discuss availability; an appointment is not yet confirmed." : "Your inquiry has been submitted. Our team will contact you using the details you provided.");
    } catch (error) {
      setStatus(error instanceof Error && error.name === "Error" ? error.message : "We could not confirm your submission. Please try again or use the contact details below.");
    } finally {
      submitting.current = false;
      setPending(false);
    }
  }
  return { handleSubmit, status, pending };
}
