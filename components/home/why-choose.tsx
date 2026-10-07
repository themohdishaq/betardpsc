import Link from "next/link";
import { ArrowRight, BadgeCheck, ChartNoAxesCombined, Cpu, Handshake, HeartHandshake, Quote, WalletCards } from "lucide-react";
import Reveal from "@/components/motion/reveal";

const reasons = [
  { icon: WalletCards, title: "Affordable Support", description: "Affordable solutions tailored to your budget" },
  { icon: Handshake, title: "Personalized Service", description: "Personalized service and long-term relationships" },
  { icon: BadgeCheck, title: "Practical Expertise", description: "Experienced professionals with practical business expertise" },
  { icon: ChartNoAxesCombined, title: "Room to Grow", description: "Scalable solutions that grow with your needs" },
  { icon: Cpu, title: "Looking Ahead", description: "Technology-driven and future-focused approach" },
  { icon: HeartHandshake, title: "Your Success Matters", description: "Commitment to helping businesses and individuals succeed" },
] as const;

export default function WhyChoose() {
  return (
    <section id="why-choose" aria-labelledby="why-choose-heading" className="scroll-mt-28 border-t border-[#e6edf6] bg-white text-[#112744]">
      <div className="mx-auto max-w-360 px-5 py-12 sm:px-7 sm:py-16 lg:px-[clamp(24px,5vw,72px)]">
        <Reveal className="mx-auto mb-9 max-w-170 text-center">
          <p className="mb-3 text-caption font-semibold uppercase tracking-[.14em] text-[#2E357E]">A partner for your progress</p>
          <h2 id="why-choose-heading" className="text-section">Why Choose <span className="text-[#2E357E]">RDPSC?</span></h2>
          <span aria-hidden="true" className="mx-auto my-5 block h-0.75 w-13 bg-[#ff233b]" />
          <p className="text-body text-[#52617f]">Practical expertise, personal service, and support that grows with you.</p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, description }, index) => (
            <Reveal as="article" key={title} delay={index * 0.055}>
              <div className="group flex h-full min-w-0 items-start gap-4 rounded-2xl border border-[#dce6f2] bg-[#fbfdff] p-6 shadow-[0_4px_18px_#183b6b05] transition-[transform,border-color,box-shadow] duration-300 [@media(hover:hover)]:hover:-translate-y-1 [@media(hover:hover)]:hover:border-[#93b7e1] [@media(hover:hover)]:hover:shadow-[0_12px_28px_#183b6b0f] motion-reduce:transform-none motion-reduce:transition-none sm:gap-5 sm:p-7">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-[#d7e4f6] bg-[#edf4ff] text-[#2E357E] transition-colors duration-300 [@media(hover:hover)]:group-hover:bg-[#2E357E] [@media(hover:hover)]:group-hover:text-white motion-reduce:transition-none"><Icon size={24} strokeWidth={1.8} aria-hidden="true" /></span>
                <div className="min-w-0">
                  <h3 className="mb-2 text-card-heading font-semibold">{title}</h3>
                  <p className="text-body text-[#52617f]">{description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <div className="relative isolate overflow-hidden rounded-2xl bg-[radial-gradient(ellipse_at_top_right,#337eb84d,transparent_65%),linear-gradient(120deg,#2E357E,#061f3b)] p-6 text-white sm:p-8 lg:p-10">
            <Quote size={120} strokeWidth={1} aria-hidden="true" className="pointer-events-none absolute -right-2 -top-4 -z-10 text-white/10" />
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
              <p className="max-w-[65ch] text-subheading font-medium">At RDPSC, we do more than provide services. We become a trusted partner in your financial and business success.</p>
              <Link href="/consultation" className="inline-flex min-h-12 w-fit shrink-0 items-center justify-center gap-3 rounded-lg border border-white/40 bg-white/10 px-5 py-3 text-small font-semibold transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4 motion-reduce:transition-none">Let’s work together <ArrowRight size={18} aria-hidden="true" /></Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
