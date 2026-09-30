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
  const title = `${service.title} | RD Prestige Services Corp.`;
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
    <main className="font-body text-[#0a213b] [&_h1]:font-serif [&_h2]:font-serif [&_a:focus-visible]:outline-3 [&_a:focus-visible]:outline-[#2c99ef] [&_a:focus-visible]:outline-offset-4">
      <section className="bg-[#021e39] px-5 py-12 text-white sm:px-8 sm:py-16" aria-labelledby="service-title">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#50b8f2]">
            <ol className="flex flex-wrap items-center gap-3">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services" className="hover:underline">Our Services</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">{service.title}</li>
            </ol>
          </nav>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#50b8f2]">RD Prestige Services Corp.</p>
          <h1 id="service-title" className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{service.title}</h1>
          <div className="my-6 h-1 w-12 bg-[#ff1534]" aria-hidden="true" />
          <p className="max-w-3xl text-xl leading-relaxed text-[#e9f0fa]">{service.tagline}</p>
          <Link href="/consultation" className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-md bg-[#006bcf] px-6 py-3 font-semibold hover:bg-[#0058ad]">
            Discuss your needs <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <div className="bg-[#f4f9fd] px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="min-w-0 space-y-10">
            <section aria-labelledby="overview-title">
              <h2 id="overview-title" className="mb-5 text-3xl font-bold">How we can help</h2>
              <div className="space-y-4 leading-relaxed text-[#505e72]">
                {service.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>

            <section className="rounded-xl bg-white p-6 shadow-sm sm:p-8" aria-labelledby="included-title">
              <h2 id="included-title" className="mb-6 text-3xl font-bold">Our services include</h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 leading-relaxed text-[#505e72]">
                    <Check size={20} className="mt-1 shrink-0 text-[#006bcf]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="border-l-4 border-[#ff1534] pl-6" aria-labelledby="outcome-title">
              <h2 id="outcome-title" className="mb-4 text-3xl font-bold">{service.outcomeTitle}</h2>
              <p className="leading-relaxed text-[#505e72]">{service.outcome}</p>
            </section>
            <Link href="/services" className="inline-flex min-h-11 items-center gap-2 font-semibold text-[#0069df] hover:underline">
              <ArrowLeft size={18} aria-hidden="true" /> Back to all services
            </Link>
          </div>

          <aside className="space-y-6">
            <nav aria-label="Service navigation" className="rounded-xl border border-[#e1eaf6] bg-white p-6">
              <h2 className="mb-4 text-2xl font-bold">Explore our services</h2>
              <ul className="space-y-2">
                {serviceOfferings.map((offering) => (
                  <li key={offering.id}>
                    <Link href={`/services/${offering.id}`} aria-current={offering.id === service.id ? "page" : undefined} className={`flex min-h-11 items-center justify-between gap-3 rounded-md px-3 py-3 text-sm leading-relaxed ${offering.id === service.id ? "bg-[#eef5ff] font-semibold text-[#0069df]" : "text-[#505e72] hover:bg-[#f4f9fd] hover:text-[#0069df]"}`}>
                      {offering.title}<ArrowRight size={16} className="shrink-0" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="rounded-xl bg-[#dfedfa] p-6">
              <h2 className="mb-3 text-2xl font-bold">Let’s talk about your needs</h2>
              <p className="mb-5 leading-relaxed text-[#505e72]">Contact our team to discuss the right support for your goals and budget.</p>
              <Link href="/consultation" className="inline-flex min-h-11 items-center gap-2 rounded-md bg-[#006bcf] px-5 py-3 font-semibold text-white hover:bg-[#0058ad]">Book a consultation <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
