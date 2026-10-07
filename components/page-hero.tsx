import Image from "next/image";
import Link from "next/link";

export default function PageHero({ title, description }: { title: string; description: string }) {
  const words = title.split(" ");
  const accent = words.pop();
  return (
    <section aria-labelledby="page-title" className="typography-inverse relative isolate overflow-hidden bg-[#001e39] text-white">
      <Image src="/images/about/hero.png" alt="" fill sizes="100vw" preload className="-z-20 object-cover object-[center_58%]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#001b32fa_0%,#001b32e8_50%,#001b3280_100%)]" />
      <div className="mx-auto max-w-360 px-5 py-9 sm:px-7 sm:py-12 lg:px-[clamp(24px,5vw,72px)]">
        <nav aria-label="Breadcrumb" className="mb-7 flex flex-wrap items-center gap-3 text-body text-inverse-accent"><Link href="/" className="hover:underline">Home</Link><span aria-hidden="true">/</span><span aria-current="page">{title}</span></nav>
        <div className="grid items-center gap-8 md:grid-cols-[1.3fr_.7fr]">
          <div className="min-w-0">
            <p className="mb-3 text-caption font-semibold uppercase tracking-[.14em] text-inverse-accent">RD Prestige Services Corp.</p>
            <h1 id="page-title" className="text-title">{words.join(" ")} <span className="text-heading-accent">{accent}</span></h1>
            <span aria-hidden="true" className="my-5 block h-0.75 w-13 bg-[#ff233b]" />
            <p className="max-w-150 text-body text-inverse-copy">{description}</p>
          </div>
          <div className="hidden justify-center md:flex"><div className="typography-surface w-full max-w-76 rounded-xl bg-white/95 p-5 shadow-lg"><Image src="/logo/rdcsp_logo.png" alt="RD Prestige Services Corp." width={2000} height={1302} sizes="264px" className="h-auto w-full" /></div></div>
        </div>
      </div>
    </section>
  );
}
