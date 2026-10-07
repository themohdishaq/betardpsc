import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HelpCta() {
  return <section className="typography-inverse bg-[var(--indigo-800)] px-5 py-10 text-white sm:px-7" aria-labelledby="next-step-title"><div className="mx-auto flex max-w-6xl flex-col items-start gap-6 md:flex-row md:items-center md:justify-between"><div><h2 id="next-step-title" className="text-section">Let’s plan your next step.</h2><p className="mt-3 max-w-150 text-body text-inverse-copy">Tell us about your goals and explore support that fits your needs.</p></div><Link href="/consultation" className="button-primary inline-flex min-h-12 items-center gap-3 rounded-lg bg-[var(--indigo-800)] px-6 py-3 text-body font-semibold hover:bg-[var(--indigo-800)] focus-visible:outline-2 focus-visible:outline-offset-4">Book a consultation <ArrowRight size={20} aria-hidden="true" /></Link></div></section>;
}
