import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/page-hero";
import HelpCta from "@/components/help-cta";

export const metadata: Metadata = { title: "Blog & Updates | RD Prestidge Services Corp.", description: "Explore RDPSC preparation checklists, planning worksheets, and professional learning resources." };
const guides = [
  { title: "Prepare for Your Consultation", category: "Getting Started", image: "/images/about-consultation.png", text: "Share your goals, select a service, and prepare your questions for a conversation with our team.", href: "/consultation", action: "Plan your conversation" },
  { title: "Organize Your Tax Records", category: "Preparation Checklist", image: "/images/services/hero.png", text: "Use our individual tax preparation checklist to organize the information you want to discuss with your tax preparer.", href: "/resources/downloads/individual-tax-checklist.pdf", action: "View checklist" },
  { title: "Clarify Your Financial Goals", category: "Planning Worksheet", image: "/images/resources/planning.png", text: "Bring your priorities and questions together using our financial planning worksheet.", href: "/resources/downloads/financial-planning-worksheet.pdf", action: "View worksheet" },
  { title: "Explore Professional Learning", category: "Education & Mentorship", image: "/images/resources/training.png", text: "Discover exam preparation, case writing, technical coaching, and mentorship services.", href: "/services/professional-education-mentorship", action: "Explore mentorship" },
];

export default function BlogPage() {
  return (
    <main className="flex-1 bg-[#f3f7fc] font-body text-ink">
      <PageHero title="Blog & Updates" description="Practical resources to prepare for a conversation, organize your priorities, and explore professional support." />
      <section aria-labelledby="guides-title" className="mx-auto max-w-360 px-5 py-10 sm:px-7 sm:py-12 lg:px-[clamp(24px,5vw,72px)]">
        <h2 id="guides-title" className="text-section">Guides and resources</h2><span aria-hidden="true" className="mb-7 mt-4 block h-0.75 w-13 bg-[#ff233b]" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {guides.map(({ title, category, image, text, href, action }) => (
            <article key={title} className="typography-surface flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#dce6f2] bg-white shadow-sm">
              <div className="relative aspect-[1.8]"><Image src={image} alt="" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover" /></div>
              <div className="flex flex-1 flex-col p-5"><p className="mb-3 text-caption font-semibold uppercase tracking-[.1em] text-brand">{category}</p><h3 className="text-card-heading">{title}</h3><p className="mb-5 mt-3 text-body text-copy">{text}</p><Link href={href} className="mt-auto inline-flex min-h-11 items-center gap-2 text-small font-semibold text-brand hover:underline">{action}<ArrowRight size={18} aria-hidden="true" /></Link></div>
            </article>
          ))}
        </div>
        <Link href="/resources" className="mt-8 inline-flex min-h-11 items-center gap-2 font-semibold text-brand hover:underline">Browse all resources <ArrowRight size={18} aria-hidden="true" /></Link>
      </section>
      <HelpCta />
    </main>
  );
}
