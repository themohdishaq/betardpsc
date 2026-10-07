import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, UsersRound, UserRound, GraduationCap, Settings, ChartNoAxesCombined } from "lucide-react";
import PageHero from "@/components/page-hero";
import HelpCta from "@/components/help-cta";

export const metadata: Metadata = { title: "Who We Serve | RD Prestidge Services Corp.", description: "Flexible financial and professional support for businesses, nonprofits, individuals, and aspiring finance professionals." };
const audiences = [
  { icon: Building2, title: "Small & Medium Businesses", text: "Accounting, corporate tax, payroll, and cash flow support tailored to your organization’s needs and budget.", href: "/services/accounting-corporate-tax" },
  { icon: ChartNoAxesCombined, title: "Growing Enterprises", text: "Scalable finance services and treasury support as your operations and priorities develop.", href: "/services/treasury-cash-flow" },
  { icon: UsersRound, title: "Nonprofits & Community Organizations", text: "Practical accounting and financial processes that support the people and communities you serve.", href: "/services/accounting-corporate-tax" },
  { icon: UserRound, title: "Individuals & Families", text: "Personal income tax preparation, insurance guidance, and financial education with a personal approach.", href: "/services/personal-income-tax" },
  { icon: GraduationCap, title: "Aspiring Finance Professionals", text: "Exam preparation, technical coaching, case writing, and mentorship to support your professional growth.", href: "/services/professional-education-mentorship" },
  { icon: Settings, title: "Teams Improving Their Systems", text: "Accounting systems, ERP implementation, and project management support for organizations making a technology change.", href: "/services/it-consulting-project-management" },
];

export default function WhoWeServePage() {
  return (
    <main className="flex-1 bg-[#f3f7fc] font-body text-[#112744]">
      <PageHero title="Who We Serve" description="Support for businesses, nonprofits, growing enterprises, and individuals across Canada and internationally." />
      <section aria-labelledby="audiences-title" className="mx-auto max-w-360 px-5 py-10 sm:px-7 sm:py-12 lg:px-[clamp(24px,5vw,72px)]">
        <h2 id="audiences-title" className="text-section">Expertise built around your needs</h2>
        <span aria-hidden="true" className="mb-7 mt-4 block h-0.75 w-13 bg-[#ff233b]" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {audiences.map(({ icon: Icon, title, text, href }) => (
            <article key={title} className="flex min-w-0 flex-col rounded-xl border border-[#dce6f2] bg-white p-6 shadow-sm">
              <Icon size={32} className="mb-5 text-[#2E357E]" aria-hidden="true" />
              <h3 className="text-card-heading">{title}</h3><p className="mb-5 mt-3 text-body text-[#52617f]">{text}</p>
              <Link href={href} className="mt-auto inline-flex min-h-11 items-center gap-2 text-small font-semibold text-[#2E357E] hover:underline">Explore support <ArrowRight size={18} aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
      </section>
      <HelpCta />
    </main>
  );
}
