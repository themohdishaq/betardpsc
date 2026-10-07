import Image from "next/image";
import Link from "next/link";
import { ArrowRight, House, RotateCcw } from "lucide-react";
import { company } from "@/lib/company";

export default function StatusPage({ code, title, description, onRetry }: { code: string; title: string; description: string; onRetry?: () => void }) {
  return (
    <main className="flex flex-1 items-center bg-[radial-gradient(ellipse_at_top_right,#e1efff,transparent_55%),linear-gradient(120deg,#fff,#f3f7fc)] px-5 py-12 font-body text-ink sm:px-8 sm:py-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-[1.2fr_.8fr]">
        <div className="min-w-0">
          <p className="text-caption font-semibold uppercase tracking-[.14em] text-brand">RD Prestige Services Corp.</p>
          <p className="mt-4 text-[clamp(3.5rem,10vw,7rem)] font-bold leading-none tracking-tight text-brand" aria-hidden="true">{code}</p>
          <h1 className="mt-5 text-title">{title}</h1>
          <span className="my-5 block h-0.75 w-13 bg-[#ff233b]" aria-hidden="true" />
          <p className="max-w-145 text-body text-copy">{description}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            {onRetry && <button type="button" onClick={onRetry} className="typography-inverse inline-flex min-h-12 items-center gap-2 rounded-lg bg-[#2E357E] px-5 py-3 font-semibold text-white hover:bg-[#252d6b] focus-visible:outline-2 focus-visible:outline-offset-4"><RotateCcw size={18} aria-hidden="true" />Try again</button>}
            <Link href="/" className="typography-inverse inline-flex min-h-12 items-center gap-2 rounded-lg bg-[#2E357E] px-5 py-3 font-semibold text-white hover:bg-[#252d6b] focus-visible:outline-2 focus-visible:outline-offset-4"><House size={18} aria-hidden="true" />Back to Home</Link>
            <Link href="/services" className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-[#2E357E] px-5 py-3 font-semibold text-brand hover:bg-[#eaf2fc] focus-visible:outline-2 focus-visible:outline-offset-4">Explore Services <ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
          <p className="mt-6 text-small text-copy">Need help? <a href={company.emailHref} className="text-brand underline underline-offset-4">{company.email}</a></p>
        </div>
        <div className="typography-surface mx-auto w-full max-w-80 rounded-2xl border border-[#dce6f2] bg-white p-6 shadow-sm"><Image src="/logo/rdcsp_logo.png" alt="RD Prestige Services Corp." width={2000} height={1302} sizes="(max-width: 768px) 272px, 320px" className="h-auto w-full" /></div>
      </div>
    </main>
  );
}
