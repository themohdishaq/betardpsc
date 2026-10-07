import Link from "next/link";
import Image from "next/image";
import { company } from "@/lib/company";
import { legalPolicies, type LegalPolicy } from "@/lib/legal-policies";

function PolicyText({ text }: { text: string }) {
  return text.split(/(services@rdpsc\.ca|\+1-613-668-6848|\+1-873-353-5905)/g).map((part, index) => {
    const href = part === company.email ? company.emailHref : company.phones.find(({ label }) => label === part)?.href;
    return href ? <a key={index} href={href} className="rounded-sm text-brand underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4">{part}</a> : part;
  });
}

export default function LegalPage({ policy }: { policy: LegalPolicy }) {
  const headings = policy.blocks.flatMap((block, index) => block.type === "heading" ? [{ text: block.text, id: `policy-section-${index}` }] : []);
  const titleWords = policy.title.split(" ");
  const accentWord = titleWords.pop();
  const description = policy.href === "/privacy-policy"
    ? "How we handle personal information and how to reach our Privacy Officer."
    : policy.href === "/terms-of-service"
      ? "Information about using our website and accessing our professional services."
      : "Information about cookies, analytics, and your browser preferences.";

  return (
    <main className="flex-1 bg-[#f3f7fc] font-body text-ink">
      <section aria-labelledby="policy-title" className="typography-inverse relative isolate overflow-hidden bg-[#001e39] text-white">
        <Image src="/images/about/hero.png" alt="" fill sizes="100vw" preload className="-z-20 object-cover object-[center_58%]" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#001b32fa_0%,#001b32e8_50%,#001b3280_100%)]" />
        <div aria-hidden="true" className="absolute inset-y-0 left-0 -z-10 hidden w-[64%] bg-[#001e39]/80 [clip-path:polygon(0_0,84%_0,100%_100%,0_100%)] md:block" />
        <div className="mx-auto max-w-360 px-5 py-8 sm:px-7 sm:py-12 lg:px-[clamp(24px,5vw,72px)]">
          <nav aria-label="Breadcrumb" className="mb-7 flex flex-wrap items-center gap-3 text-body text-inverse-accent">
            <Link href="/" className="rounded-sm hover:underline focus-visible:outline-2 focus-visible:outline-offset-4">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{policy.title}</span>
          </nav>
          <div className="grid items-center gap-8 md:grid-cols-[1.3fr_.7fr]">
            <div className="min-w-0">
              <p className="mb-3 text-caption font-semibold uppercase tracking-[.14em] text-inverse-accent">RD Prestige Services Corp.</p>
              <h1 id="policy-title" className="text-title">{titleWords.join(" ")} <span className="text-heading-accent">{accentWord}</span></h1>
              <span aria-hidden="true" className="my-5 block h-0.75 w-13 bg-[#ff233b]" />
              <p className="max-w-150 text-body text-inverse-copy">{description}</p>
              {policy.effectiveDate && <p className="mt-4 text-small text-inverse-copy">Effective date: <time dateTime="2026-10-01">{policy.effectiveDate}</time></p>}
            </div>
            <div className="hidden justify-center md:flex">
              <div className="typography-surface w-full max-w-76 rounded-xl border border-white/70 bg-white/95 p-5 shadow-[0_12px_32px_#00102026]">
                <Image src="/logo/rdcsp_logo.png" alt="RD Prestige Services Corp." width={2000} height={1302} sizes="(min-width: 768px) 264px, 0px" className="h-auto w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-360 items-start gap-6 px-5 py-8 sm:px-7 sm:py-12 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-9 lg:px-[clamp(24px,5vw,72px)]">
        <aside className="min-w-0 lg:sticky lg:top-32" aria-labelledby="company-policies-title">
          <div className="typography-surface rounded-xl border border-[#dce6f2] bg-white p-5">
            <h2 id="company-policies-title" className="text-card-heading">Company policies</h2>
            <span aria-hidden="true" className="mb-5 mt-3 block h-0.75 w-10 bg-[#ff233b]" />
            <nav aria-label="Company policies" className="flex flex-wrap gap-2 lg:flex-col">
              {Object.values(legalPolicies).map(({ title, href }) => (
                <Link key={href} href={href} aria-current={href === policy.href ? "page" : undefined} className={`typography-surface inline-flex min-h-11 items-center rounded-lg border px-4 py-2 text-small font-medium focus-visible:outline-2 focus-visible:outline-[#2E357E] focus-visible:outline-offset-4 ${href === policy.href ? "border-[#2E357E] bg-[#2E357E] text-white" : "border-[#d6e1ef] bg-white text-brand hover:bg-[#eaf2fc]"}`}>
                  {title}
                </Link>
              ))}
            </nav>
          </div>

          {headings.length > 0 && (
            <details className="typography-surface mt-4 rounded-xl border border-[#dce6f2] bg-white p-5">
              <summary className="cursor-pointer rounded-sm text-body font-semibold focus-visible:outline-2 focus-visible:outline-[#2E357E] focus-visible:outline-offset-4">On this page</summary>
              <nav aria-label="Policy sections" className="mt-4">
                <ul className="grid max-h-[50vh] gap-1 overflow-y-auto sm:grid-cols-2 lg:grid-cols-1">
                  {headings.map(({ text, id }) => <li key={id}><a href={`#${id}`} className="block rounded-sm py-2 text-small text-brand hover:underline focus-visible:outline-2 focus-visible:outline-offset-4">{text}</a></li>)}
                </ul>
              </nav>
            </details>
          )}
        </aside>

        <article aria-label={policy.title} className="typography-surface min-w-0 rounded-xl border border-[#dce6f2] bg-white p-5 text-body text-copy shadow-[0_6px_20px_#21497606] sm:p-8 lg:p-10">
          <div className="mx-auto max-w-[76ch]">
            {policy.blocks.map((block, index) => {
              if (block.type === "heading") return <h2 key={index} id={`policy-section-${index}`} className="mb-4 mt-8 scroll-mt-32 text-subheading text-ink first:mt-0">{block.text}</h2>;
              if (block.type === "subheading") return <h3 key={index} className="mb-3 mt-6 text-card-heading text-ink">{block.text}</h3>;
              if (block.type === "list") return <ul key={index} className="mb-5 list-disc space-y-2 pl-6 marker:text-brand">{block.items.map((text, itemIndex) => <li key={itemIndex}><PolicyText text={text} /></li>)}</ul>;
              return <p key={index} className="mb-5 wrap-anywhere last:mb-0"><PolicyText text={block.text} /></p>;
            })}
          </div>
        </article>
      </div>
    </main>
  );
}
