import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

import { serviceOfferings } from "@/lib/services";

type ServicePageProps = { params: Promise<{ slug: string }> };

function getService(slug: string) {
  const service = serviceOfferings.find((offering) => offering.id === slug);
  if (!service) notFound();
  return service;
}

export function generateStaticParams() {
  return serviceOfferings.map(({ id }) => ({ slug: id }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getService((await params).slug);
  const title = `${service.title} | RD Prestidge Services Corp.`;
  return {
    title,
    description: service.summary,
    openGraph: { title, description: service.summary },
    twitter: { title, description: service.summary },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const service = getService((await params).slug);

  return (
    <main className="font-body text-ink [&_h1]:font-heading [&_h2]:font-heading [&_a:focus-visible]:outline-3 [&_a:focus-visible]:outline-[var(--cyan-700)] [&_a:focus-visible]:outline-offset-4">
      <section className="typography-inverse bg-[var(--indigo-900)] px-5 py-12 text-white sm:px-8 sm:py-16" aria-labelledby="service-title">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-8 text-body text-heading-accent">
            <ol className="flex flex-wrap items-center gap-3">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services" className="hover:underline">Our Services</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">{service.title}</li>
            </ol>
          </nav>
          <p className="mb-4 text-caption font-semibold uppercase tracking-widest text-heading-accent">RD Prestidge Services Corp.</p>
          <h1 id="service-title" className="max-w-4xl text-title">{service.title}</h1>
          <div className="my-6 h-1 w-12 bg-[var(--red-600)]" aria-hidden="true" />
          <p className="max-w-3xl text-body text-inverse-copy">{service.tagline}</p>
          <Link href="/consultation" className="button-primary mt-8 inline-flex min-h-12 items-center gap-3 rounded-md bg-[var(--cyan-600)] px-6 py-3 font-semibold hover:bg-[var(--indigo-800)]">
            Discuss your needs <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <div className="bg-[var(--indigo-50)] px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="min-w-0 space-y-10">
            <section aria-labelledby="overview-title">
              <h2 id="overview-title" className="mb-5 text-section">How we can help</h2>
              <div className="space-y-4 text-body text-copy">
                {service.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>

            <section className="typography-surface rounded-xl bg-white p-6 shadow-sm sm:p-8" aria-labelledby="included-title">
              <h2 id="included-title" className="mb-6 text-section">Our services include</h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-body text-copy">
                    <Check size={20} className="mt-1 shrink-0 text-heading-accent" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="border-l-4 border-[var(--red-600)] pl-6" aria-labelledby="outcome-title">
              <h2 id="outcome-title" className="mb-4 text-section">{service.outcomeTitle}</h2>
              <p className="text-body text-copy">{service.outcome}</p>
            </section>
            <Link href="/services" className="inline-flex min-h-11 items-center gap-2 font-semibold text-heading-accent hover:underline">
              <ArrowLeft size={18} aria-hidden="true" /> Back to all services
            </Link>
          </div>

          <aside className="space-y-6">
            <nav aria-label="Service navigation" className="typography-surface rounded-xl border border-[var(--line)] bg-white p-6">
              <h2 className="mb-4 text-section">Explore our services</h2>
              <ul className="space-y-2">
                {serviceOfferings.map((offering) => (
                  <li key={offering.id}>
                    <Link href={`/services/${offering.id}`} aria-current={offering.id === service.id ? "page" : undefined} className={`flex min-h-11 items-center justify-between gap-3 rounded-md px-3 py-3 text-body ${offering.id === service.id ? "bg-[var(--indigo-50)] font-semibold text-heading-accent" : "text-copy hover:bg-[var(--indigo-50)] hover:text-heading-accent"} `}>
                      {offering.title}<ArrowRight size={16} className="shrink-0" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="rounded-xl bg-[var(--indigo-50)] p-6">
              <h2 className="mb-3 text-section">Let’s talk about your needs</h2>
              <p className="mb-5 text-body text-copy">Contact our team to discuss the right support for your goals and budget.</p>
              <Link href="/consultation" className="button-primary inline-flex min-h-11 items-center gap-2 rounded-md bg-[var(--cyan-600)] px-5 py-3 font-semibold text-white hover:bg-[var(--indigo-800)]">Book a consultation <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
