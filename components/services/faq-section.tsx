import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import Reveal from "@/components/motion/reveal";

type FAQ = { question: string; answer: string };

export default function FAQSection({ faqs }: { faqs: readonly FAQ[] }) {
  return (
    <section id="faqs" aria-labelledby="services-faq-title" className="typography-surface scroll-mt-28 border-t border-[#e6edf6] bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-7 sm:py-16">
        <Reveal className="mb-7">
          <h2 id="services-faq-title" className="text-section text-ink">Frequently Asked Questions</h2>
          <span aria-hidden="true" className="my-5 block h-0.75 w-12 bg-[#ff1534]" />
        </Reveal>

        <Reveal delay={0.1} className="min-w-0 space-y-3">
          {faqs.map(({ question, answer }, index) => (
            <details key={question} name="services-faq" open={index === 0} className="group overflow-hidden rounded-xl border border-[#dce6f2] bg-[#fbfdff] transition-[border-color,background-color,box-shadow] duration-200 open:border-[#bacce6] open:bg-[#f5f8fd] open:shadow-[0_4px_18px_#183b6b08] hover:border-[#a6bcda] motion-reduce:transition-none">
              <summary className="flex min-h-18 cursor-pointer list-none items-center gap-3 px-4 py-5 text-body font-semibold text-ink focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-[#2E357E] [&::-webkit-details-marker]:hidden sm:gap-4 sm:px-6">
                <span aria-hidden="true" className="shrink-0 text-caption font-medium tabular-nums text-copy">{String(index + 1).padStart(2, "0")}</span>
                <span className="min-w-0 flex-1">{question}</span>
                <span className="grid size-8 shrink-0 place-items-center rounded-full border border-[#dce6f2] bg-white text-brand transition-[background-color,color] duration-200 group-open:border-[#2E357E] group-open:bg-[#2E357E] group-open:text-white motion-reduce:transition-none"><Plus size={18} aria-hidden="true" className="transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none" /></span>
              </summary>
              <div className="mx-4 border-t border-[#dce6f2] py-5 sm:mx-6">
                <p className="text-body text-copy">{answer}</p>
              </div>
            </details>
          ))}
          <Link href="/#contact" className="inline-flex min-h-11 items-center gap-2 pt-3 text-body text-brand hover:underline">Have another question? <ArrowRight size={16} aria-hidden="true" /></Link>
        </Reveal>
      </div>
    </section>
  );
}
