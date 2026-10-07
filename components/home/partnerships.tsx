import { Handshake, UsersRound } from "lucide-react";
import CompanyLogoRow from "@/components/home/company-logo-row";
import { customerCategories, strategicPartners } from "@/lib/relationships";
import Reveal from "@/components/motion/reveal";

export default function PartnershipsSection() {
  return (
    <section aria-labelledby="partnerships-heading" className="relative isolate overflow-hidden bg-white font-body text-ink">
      <div className="mx-auto max-w-360 px-5 py-12 sm:px-7 sm:py-16 lg:px-[clamp(24px,5vw,72px)]">
        <Reveal className="mx-auto mb-10 max-w-175 text-center">
          <p className="mb-3 text-caption font-semibold uppercase tracking-[.14em] text-eyebrow">Partners & Customers</p>
          <h2 id="partnerships-heading" className="text-section text-heading">Trusted Partnerships.<br /><span className="text-brand">Proven Relationships.</span></h2>
          <span aria-hidden="true" className="mx-auto my-5 block h-0.75 w-13 bg-[var(--red-600)]" />
          <p className="text-body text-secondary-copy">Collaborating with respected organizations and supporting businesses, nonprofits, and growing enterprises.</p>
        </Reveal>
        <div className="space-y-8">
          <section aria-labelledby="strategic-partners-heading" className="typography-surface min-w-0 rounded-2xl border border-[var(--line)] bg-[var(--white)] p-5 shadow-[0_6px_24px_#1B226005] sm:p-7">
            <div className="mb-5 flex items-center gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-[var(--line)] bg-white text-brand"><Handshake size={25} strokeWidth={1.8} aria-hidden="true" /></span>
              <div className="min-w-0"><h3 id="strategic-partners-heading" className="text-card-heading font-semibold text-card-ink">Strategic Partners</h3><p className="mt-1 text-body text-secondary-copy">Financial, insurance, accounting, and technology organizations</p></div>
            </div>
            <CompanyLogoRow id="strategic-partner-logos" title="Strategic Partners" companies={strategicPartners} showTitle={false} />
          </section>
          <section aria-labelledby="customers-heading" className="typography-surface min-w-0 rounded-2xl border border-[var(--line)] bg-[var(--white)] p-5 shadow-[0_6px_24px_#1B226005] sm:p-7">
            <div className="mb-7 flex items-center gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-[var(--line)] bg-white text-brand"><UsersRound size={25} strokeWidth={1.8} aria-hidden="true" /></span>
              <div className="min-w-0"><h3 id="customers-heading" className="text-card-heading font-semibold text-card-ink">Customers & Organizations We Serve</h3><p className="mt-1 text-body text-secondary-copy">Relationships across industries and communities</p></div>
            </div>
            <div className="space-y-7">
              {customerCategories.map(({ id, title, companies }, index) => <div key={id} className={index ? "border-t border-[var(--line)] pt-7" : undefined}><CompanyLogoRow id={"customer-logos-" + id} title={title} companies={companies} /></div>)}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}