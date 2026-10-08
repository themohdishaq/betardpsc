import Image from "next/image";

import CompanyStory from "@/components/about/company-story";

import Link from "next/link";

import { ArrowRight, Building2, ChartNoAxesCombined, Check, Diamond, Eye, Globe2, Handshake, Settings, ShieldCheck, Target, UsersRound } from "lucide-react";

const values = ["Integrity", "Client Focus", "Excellence", "Collaboration", "Continuous Learning", "Community Impact"];

const statistics = [
  { icon: UsersRound, value: "Hundreds", label: "of Returning Clients" },
  { icon: Building2, value: "7", label: "Service Areas" },
  { icon: Globe2, value: "Across", label: "Canada & Internationally" },
  { icon: Handshake, value: "Strong", label: "Partner Network" },
];
const benefits = [
  { icon: UsersRound, title: "Client-Centered Approach", description: "Your goals are our priority. We take the time to understand your unique needs." },
  { icon: Settings, title: "Comprehensive Solutions", description: "Seven service areas with flexible support under one roof." },
  { icon: ChartNoAxesCombined, title: "Experienced Professionals", description: "Practical expertise and real-world experience." },
  { icon: ShieldCheck, title: "Trusted by Diverse Clients", description: "Flexible, scalable solutions for businesses and individuals at every stage." },
];

export default function AboutPage() {
  return (
    <main className="text-ink font-body [&_h1]:font-heading [&_h1]:font-bold [&_h2]:font-heading [&_h2]:font-bold [&_h2]:mt-0 [&_h2]:mr-0 [&_h2]:mb-0 [&_h2]:ml-0 [&_h2]:text-section [&_h3]:font-heading [&_h3]:font-semibold [&_a:focus-visible]:[outline:3px_solid_var(--cyan-700)] [&_a:focus-visible]:outline-offset-[5px]">
      <section className="typography-inverse relative isolate overflow-hidden min-h-107.5 bg-[var(--indigo-900)] text-white [&_h1]:mt-0 [&_h1]:mr-0 [&_h1]:mb-0 [&_h1]:ml-0 [&_h1]:text-title [&_h1_span]:text-heading-accent max-[760px]:min-h-105" aria-labelledby="about-title">
        <Image src="/images/about/hero.png" alt="Navy mug with the words Building Brighter Financial Futures in a modern office" fill sizes="100vw" preload className="z-[-2] object-cover object-[center_58%]" />
        <div className="photo-hero-overlay" aria-hidden="true" />
        <div className={`absolute top-0 right-[38%] bottom-0 left-0 z-[-1] max-[760px]:top-0 max-[760px]:right-0 max-[760px]:bottom-0 max-[760px]:left-0 app-about-page-heroPanel [background-image:linear-gradient(115deg,_#1B2260fc,_#1B2260ef)] [clip-path:polygon(0_0,_83%_0,_100%_100%,_0_100%)] [&::after]:[position:absolute] [&::after]:[right:12%] [&::after]:[top:-30%] [&::after]:[width:75px] [&::after]:[height:150%] [&::after]:[background:#2098C817] [&::after]:[transform:rotate(-19deg)] [&::after]:[content:""] [@media(max-width:_760px)]:[clip-path:none] [@media(max-width:_760px)]:[background-image:linear-gradient(90deg,_#1B2260f5,_#001b32db_55%,_#1B226060)]`} aria-hidden="true" />
        <div className="max-w-360 mt-auto mr-auto mb-auto ml-auto pt-13 pr-[clamp(24px,_5vw,_72px)] pb-13 pl-[clamp(24px,_5vw,_72px)] max-[760px]:pt-9.5 max-[760px]:pr-6 max-[760px]:pb-9.5 max-[760px]:pl-6">
          <nav aria-label="Breadcrumb" className="flex gap-y-3 gap-x-3 mb-7.5 text-inverse-accent text-body"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">About Us</span></nav>
          <h1 id="about-title">About <span>Us</span></h1>
          <p className="mt-2.5 mr-0 mb-0 ml-0 text-body">People. Process. Possibilities.</p>
          <span className="block w-13 h-0.75 mt-5.5 mr-0 mb-5.5 ml-0 bg-[var(--red-600)] app-about-page-redLine" aria-hidden="true" />
          <p className="w-[47%] mt-0 mr-0 mb-0 ml-0 text-body max-[1050px]:w-[51%] max-[760px]:w-[80%] max-[760px]:max-w-125 max-[420px]:w-full">At RD Prestidge Services Corp. (RDPSC), we were founded on a simple belief: exceptional financial expertise should not be reserved for organizations with large budgets.</p>
        </div>
        <p className="absolute top-12.5 right-7.5 mt-0 mr-0 mb-0 ml-0 text-ink text-right text-caption font-bold tracking-[.14em] uppercase max-[760px]:hidden app-about-page-heroWords [&_.app-about-page-redLine]:[width:34px] [&_.app-about-page-redLine]:[margin-left:auto]">Trust<br />Expertise<br />Growth<span className="block w-13 h-0.75 mt-5.5 mr-0 mb-5.5 ml-0 bg-[var(--red-600)] app-about-page-redLine" /></p>
      </section>

      <CompanyStory />

      <section className="app-about-page-softSection [background-image:linear-gradient(120deg,_var(--indigo-50),_var(--indigo-50))]" aria-labelledby="mission-heading">
        <div className="max-w-360 ml-auto mr-auto pt-12 pr-[clamp(24px,_5vw,_72px)] pb-12 pl-[clamp(24px,_5vw,_72px)] max-[760px]:pt-9 max-[760px]:pr-6 max-[760px]:pb-9 max-[760px]:pl-6 app-about-page-container">
          <h2 id="mission-heading">Our Mission, Vision &amp; Values</h2><span className="block w-13 h-0.75 mt-5.5 mr-0 mb-5.5 ml-0 bg-[var(--red-600)] app-about-page-redLine" aria-hidden="true" />
          <div className="grid grid-cols-3 gap-y-6.25 gap-x-6.25 mt-7.5 max-[760px]:grid-cols-1 max-[760px]:gap-y-4.5 max-[760px]:gap-x-4.5">
            <article className="typography-surface rounded-[9px] pt-7.5 pr-7.5 pb-7.5 pl-7.5 bg-[var(--white)] shadow-[0_5px_15px_#1B226007] [&_>_svg]:block [&_>_svg]:w-13 [&_>_svg]:h-13 [&_>_svg]:mt-0 [&_>_svg]:mr-auto [&_>_svg]:mb-4.5 [&_>_svg]:ml-auto [&_>_svg]:text-heading-accent [&_>_svg]:[stroke-width:1.7] [&_h3]:mt-0 [&_h3]:mr-0 [&_h3]:mb-5 [&_h3]:ml-0 [&_h3]:text-center [&_h3]:text-card-heading [&_p]:text-copy [&_p]:text-body [&_p]:mt-0 [&_p]:mr-0 [&_p]:mb-0 [&_p]:ml-0 max-[1050px]:pt-6.25 max-[1050px]:pr-5 max-[1050px]:pb-6.25 max-[1050px]:pl-5 max-[760px]:pt-7 max-[760px]:pr-7 max-[760px]:pb-7 max-[760px]:pl-7 app-about-page-card [&_>_.app-about-page-missionIcon]:[color:var(--red-600)]"><Target className="app-about-page-missionIcon" aria-hidden="true" /><h3>Our Mission</h3><p>To make high-quality financial and professional services accessible to businesses and individuals through practical expertise, personalized service, and affordable support.</p></article>
            <article className="typography-surface rounded-[9px] pt-7.5 pr-7.5 pb-7.5 pl-7.5 bg-[var(--white)] shadow-[0_5px_15px_#1B226007] [&_>_svg]:block [&_>_svg]:w-13 [&_>_svg]:h-13 [&_>_svg]:mt-0 [&_>_svg]:mr-auto [&_>_svg]:mb-4.5 [&_>_svg]:ml-auto [&_>_svg]:text-heading-accent [&_>_svg]:[stroke-width:1.7] [&_h3]:mt-0 [&_h3]:mr-0 [&_h3]:mb-5 [&_h3]:ml-0 [&_h3]:text-center [&_h3]:text-card-heading [&_p]:text-copy [&_p]:text-body [&_p]:mt-0 [&_p]:mr-0 [&_p]:mb-0 [&_p]:ml-0 max-[1050px]:pt-6.25 max-[1050px]:pr-5 max-[1050px]:pb-6.25 max-[1050px]:pl-5 max-[760px]:pt-7 max-[760px]:pr-7 max-[760px]:pb-7 max-[760px]:pl-7 app-about-page-card [&_>_.app-about-page-missionIcon]:[color:var(--red-600)]"><Eye aria-hidden="true" /><h3>Our Vision</h3><p>To empower success through financial expertise, professional growth, and innovative technology, creating lasting value for businesses, people, and communities.</p></article>
            <article className="typography-surface rounded-[9px] pt-7.5 pr-7.5 pb-7.5 pl-7.5 bg-[var(--white)] shadow-[0_5px_15px_#1B226007] [&_>_svg]:block [&_>_svg]:w-13 [&_>_svg]:h-13 [&_>_svg]:mt-0 [&_>_svg]:mr-auto [&_>_svg]:mb-4.5 [&_>_svg]:ml-auto [&_>_svg]:text-heading-accent [&_>_svg]:[stroke-width:1.7] [&_h3]:mt-0 [&_h3]:mr-0 [&_h3]:mb-5 [&_h3]:ml-0 [&_h3]:text-center [&_h3]:text-card-heading [&_p]:text-copy [&_p]:text-body [&_p]:mt-0 [&_p]:mr-0 [&_p]:mb-0 [&_p]:ml-0 max-[1050px]:pt-6.25 max-[1050px]:pr-5 max-[1050px]:pb-6.25 max-[1050px]:pl-5 max-[760px]:pt-7 max-[760px]:pr-7 max-[760px]:pb-7 max-[760px]:pl-7 app-about-page-card [&_>_.app-about-page-missionIcon]:[color:var(--red-600)]"><Diamond aria-hidden="true" /><h3>Our Values</h3><ul className="mt-0 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-0 list-none flex flex-col gap-y-2 gap-x-2 [&_li]:flex [&_li]:items-center [&_li]:gap-y-2.5 [&_li]:gap-x-2.5 [&_li]:text-copy [&_li]:text-body [&_li_>_span]:grid [&_li_>_span]:place-items-center [&_li_>_span]:shrink-0 [&_li_>_span]:w-4.5 [&_li_>_span]:h-4.5 [&_li_>_span]:rounded-[50%] [&_li_>_span]:bg-[var(--cyan-600)] [&_li_>_span]:text-white max-[760px]:max-w-60 max-[760px]:mt-auto max-[760px]:mr-auto max-[760px]:mb-auto max-[760px]:ml-auto">{values.map((value) => <li key={value}><span><Check size={11} strokeWidth={3} aria-hidden="true" /></span>{value}</li>)}</ul></article>
          </div>
        </div>
      </section>

      <section className="typography-inverse text-white app-about-page-stats [background-image:linear-gradient(110deg,_var(--indigo-900),_var(--indigo-900),_var(--indigo-900))]" aria-label="RDPSC at a glance">
        <ul className={`grid grid-cols-4 max-w-360 mt-auto mr-auto mb-auto ml-auto pt-9.5 pr-10 pb-9.5 pl-10 list-none [&_li]:relative [&_li]:flex [&_li]:flex-col [&_li]:items-center [&_li]:text-center [&_li]:pl-4 [&_li]:pr-4 [&_svg]:w-11.75 [&_svg]:h-11.75 [&_svg]:text-heading-accent [&_svg]:mb-3.5 [&_svg]:[stroke-width:1.6] [&_strong]:font-heading [&_strong]:text-stat [&_span]:mt-1.5 [&_span]:text-body [&_span]:text-inverse-copy max-[760px]:grid-cols-2 max-[760px]:gap-y-7.5 max-[760px]:gap-x-0 max-[760px]:pt-8 max-[760px]:pr-3.75 max-[760px]:pb-8 max-[760px]:pl-3.75 app-about-page-statsInner [&_li_+_li::before]:[position:absolute] [&_li_+_li::before]:[left:0] [&_li_+_li::before]:[bottom:0] [&_li_+_li::before]:[height:70%] [&_li_+_li::before]:[width:1px] [&_li_+_li::before]:[background:var(--cyan-600)] [&_li_+_li::before]:[content:""] [@media(max-width:_760px)]:[&_li:nth-child(3)::before]:[display:none]`}>{statistics.map(({ icon: Icon, value, label }) => <li key={label}><Icon aria-hidden="true" /><strong>{value}</strong><span>{label}</span></li>)}</ul>
      </section>



      <section className="app-about-page-softSection [background-image:linear-gradient(120deg,_var(--indigo-50),_var(--indigo-50))]" aria-labelledby="why-heading">
        <div className="max-w-360 ml-auto mr-auto pt-12 pr-[clamp(24px,_5vw,_72px)] pb-12 pl-[clamp(24px,_5vw,_72px)] max-[760px]:pt-9 max-[760px]:pr-6 max-[760px]:pb-9 max-[760px]:pl-6 app-about-page-container">
          <div className="flex justify-between items-center gap-y-6 gap-x-6 [&_p]:mt-0 [&_p]:mr-0 [&_p]:mb-0 [&_p]:ml-0 [&_p]:text-ink [&_p]:text-caption [&_p]:font-bold [&_p]:tracking-[.15em] [&_p]:uppercase [&_p_span]:text-heading-accent max-[760px]:items-start max-[760px]:flex-col max-[760px]:gap-y-3 max-[760px]:gap-x-3"><h2 id="why-heading">Why Choose RDPSC?</h2><p>More than services — <span>a trusted partner</span></p></div>
          <span className="block w-13 h-0.75 mt-5.5 mr-0 mb-5.5 ml-0 bg-[var(--red-600)] app-about-page-redLine" aria-hidden="true" />
          <div className="grid grid-cols-4 gap-y-6 gap-x-6 [&_h3]:max-w-47.5 [&_h3]:ml-auto [&_h3]:mr-auto [&_h3]:text-card-heading [&_p]:text-body max-[1050px]:gap-y-4 max-[1050px]:gap-x-4 max-[760px]:grid-cols-2 max-[420px]:grid-cols-1 app-about-page-benefitGrid [&_.app-about-page-card]:[text-align:center] [&_.app-about-page-card]:[padding:26px_24px] [@media(max-width:_1050px)]:[&_.app-about-page-card]:[padding:23px_15px]">{benefits.map(({ icon: Icon, title, description }) => <article className="typography-surface rounded-[9px] pt-7.5 pr-7.5 pb-7.5 pl-7.5 bg-[var(--white)] shadow-[0_5px_15px_#1B226007] [&_>_svg]:block [&_>_svg]:w-13 [&_>_svg]:h-13 [&_>_svg]:mt-0 [&_>_svg]:mr-auto [&_>_svg]:mb-4.5 [&_>_svg]:ml-auto [&_>_svg]:text-heading-accent [&_>_svg]:[stroke-width:1.7] [&_h3]:mt-0 [&_h3]:mr-0 [&_h3]:mb-5 [&_h3]:ml-0 [&_h3]:text-center [&_h3]:text-card-heading [&_p]:text-copy [&_p]:text-body [&_p]:mt-0 [&_p]:mr-0 [&_p]:mb-0 [&_p]:ml-0 max-[1050px]:pt-6.25 max-[1050px]:pr-5 max-[1050px]:pb-6.25 max-[1050px]:pl-5 max-[760px]:pt-7 max-[760px]:pr-7 max-[760px]:pb-7 max-[760px]:pl-7 app-about-page-card [&_>_.app-about-page-missionIcon]:[color:var(--red-600)]" key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{description}</p></article>)}</div>
        </div>
      </section>

      <section className={`typography-inverse [&_h2_span]:text-heading-accent relative isolate bg-[var(--indigo-900)] text-white overflow-hidden [&_h2]:text-section app-about-page-cta [&::after]:[position:absolute] [&::after]:[z-index:-1] [&::after]:[inset:0] [&::after]:[background-image:linear-gradient(90deg,_#001a30fa_0%,_#001a3090_42%,_transparent_70%,_#1B2260ad)] [&::after]:[content:""] [&_.app-about-page-container]:[position:relative] [&_.app-about-page-container]:[padding-block:40px] [&_.app-about-page-eyebrow]:[color:var(--indigo-50)] [&_.app-about-page-container_>_p:not(.app-about-page-eyebrow):not(.app-about-page-ctaSignature)]:text-body [&_.app-about-page-container_>_p:not(.app-about-page-eyebrow):not(.app-about-page-ctaSignature)]:[margin:15px_0_23px] [@media(max-width:_760px)]:[&_.app-about-page-container_>_p:not(.app-about-page-eyebrow)]:[max-width:400px]`} aria-labelledby="about-cta-heading">
        <Image src="/images/about/cta.png" alt="" fill sizes="100vw" className="z-[-2] object-cover object-center opacity-[.65]" />
        <div className="max-w-360 ml-auto mr-auto pt-12 pr-[clamp(24px,_5vw,_72px)] pb-12 pl-[clamp(24px,_5vw,_72px)] max-[760px]:pt-9 max-[760px]:pr-6 max-[760px]:pb-9 max-[760px]:pl-6 app-about-page-container">
          <p className="mt-0 mr-0 mb-3.5 ml-0 text-caption font-semibold tracking-[.14em] uppercase app-about-page-eyebrow">Let’s Work Together</p>
          <h2 id="about-cta-heading">Build a Stronger<br /><span>Financial Future</span></h2>
          <p>Have questions or ready to get started? We’re here to help.</p>
          <div className="flex gap-y-5 gap-x-5 max-[420px]:gap-y-3 max-[420px]:gap-x-3 max-[420px]:flex-wrap"><Link href="/#contact" className="button-primary inline-flex items-center justify-center gap-y-3 gap-x-3 min-h-12 pt-3.25 pr-6.75 pb-3.25 pl-6.75 [border:1px_solid_transparent] rounded-[5px] text-white text-body [transition:background_160ms_ease] bg-[var(--red-600)] hover:bg-[var(--red-600)] max-[420px]:pl-5 max-[420px]:pr-5 motion-reduce:[transition:none]">Get in Touch <ArrowRight size={18} aria-hidden="true" /></Link><Link href="/#departments" className="button-primary inline-flex items-center justify-center gap-y-3 gap-x-3 min-h-12 pt-3.25 pr-6.75 pb-3.25 pl-6.75 [border:1px_solid_transparent] rounded-[5px] text-white text-body [transition:background_160ms_ease] border-[var(--line)] bg-[#1B226050] hover:bg-[var(--indigo-900)] max-[420px]:pl-5 max-[420px]:pr-5 motion-reduce:[transition:none]">Our Services</Link></div>
          <p className={`absolute right-[5%] top-[23%] mt-0 mr-0 mb-0 ml-0 font-heading italic text-body [transform:rotate(-12deg)] max-[760px]:hidden app-about-page-ctaSignature [&_.app-about-page-redLine]:[margin:10px_0_0]`}>People<br />Process<br />Possibilities<span className="block w-13 h-0.75 mt-5.5 mr-0 mb-5.5 ml-0 bg-[var(--red-600)] app-about-page-redLine" aria-hidden="true" /></p>
        </div>
      </section>
    </main>
  );
}
