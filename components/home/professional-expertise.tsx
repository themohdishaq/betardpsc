import Link from "next/link";
import { ArrowRight, Award, Building2, ChartNoAxesCombined } from "lucide-react";
import Reveal from "@/components/motion/reveal";

const evidence = [
  { icon: ChartNoAxesCombined, title: "40+ years of collective experience", description: "Our professionals have supported organizations from start-ups to some of the world's largest corporations." },
  { icon: Award, title: "A qualified professional network", description: "Our network includes CPAs, CTPs, CMAs, insurance professionals, and other finance specialists." },
  { icon: Building2, title: "Experience across sectors", description: "Nonprofits, public companies, government entities, and small to medium-sized businesses." },
];

export default function ProfessionalExpertise() {
  return (
    <section aria-labelledby="expertise-heading" className="typography-surface border-t border-[#e6edf6] bg-[#f5f8fd]">
      <div className="mx-auto max-w-360 px-5 py-12 sm:px-7 sm:py-16 lg:px-[clamp(24px,5vw,72px)]">
        <Reveal className="mb-8">
          <h2 id="expertise-heading" className="text-section text-ink">Experienced Finance Professionals</h2>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {evidence.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={index * 0.06} className="rounded-2xl border border-[#dce6f2] bg-white p-6">
              <Icon size={28} strokeWidth={1.8} className="mb-4 text-brand" aria-hidden="true" />
              <h3 className="mb-3 text-card-heading font-semibold text-ink">{title}</h3>
              <p className="text-body text-copy">{description}</p>
            </Reveal>
          ))}
        </div>
        <Link href="/about#our-network" className="mt-6 inline-flex min-h-11 items-center gap-3 text-small font-semibold text-brand hover:underline">Meet our professional network <ArrowRight size={18} aria-hidden="true" /></Link>
      </div>
    </section>
  );
}
