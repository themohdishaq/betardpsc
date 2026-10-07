import Link from "next/link";
import Reveal from "@/components/motion/reveal";
import { ArrowRight, CalendarDays, Banknote, ChartNoAxesColumnIncreasing, UserRound, WalletCards } from "lucide-react";
import ServicesGraphic from "@/components/hero/services-graphic";
import AboutDepartments from "@/components/home/about-departments";
import WhyChoose from "@/components/home/why-choose";
import ContactSection from "@/components/home/contact-section";
import Partnerships from "@/components/home/partnerships";
import ProfessionalExpertise from "@/components/home/professional-expertise";
import { serviceOfferings } from "@/lib/services";

const featuredIcons = [ChartNoAxesColumnIncreasing, UserRound, WalletCards, Banknote];
const featuredServices = serviceOfferings.slice(0, 4).map((service, index) => ({ icon: featuredIcons[index], title: service.title, description: service.summary }));

export default function Home() {
  return (
    <main className="flex-1 font-body text-ink">
      <section className="relative isolate overflow-hidden [border-bottom:1px_solid_#e2eaf5] app-page-hero [background-image:radial-gradient(ellipse_at_98%_9%,_#e4f1ff_0,_transparent_44%),_linear-gradient(110deg,_#fff_20%,_#fbfdff_58%,_#f0f7ff_100%)]" aria-labelledby="hero-heading">
        <div className="absolute z-[-1] right-0 bottom-4 w-[61%] h-[72%] opacity-[.47] [&_svg]:w-full [&_svg]:h-full max-[1000px]:w-full max-[1000px]:h-[48%] app-page-skyline [mask-image:linear-gradient(to_right,_transparent,_#000_25%)]" aria-hidden="true">
          <svg viewBox="0 0 1100 420" preserveAspectRatio="xMidYMax slice">
            <defs>
              <linearGradient id="skyline-fade" x1="0" y1="0" x2="0" y2="1">
                <stop stopColor="#8ab2db" stopOpacity=".55" />
                <stop offset="1" stopColor="#c7dff3" stopOpacity=".12" />
              </linearGradient>
              <linearGradient id="water-fade" x1="0" y1="0" x2="0" y2="1">
                <stop stopColor="#a5c9e8" stopOpacity=".3" />
                <stop offset="1" stopColor="#fff" stopOpacity="0" />
              </linearGradient>
            </defs>
            <g fill="url(#skyline-fade)">
              <path d="M0 290V245H18V207H28V192H40V210H48V290H61V172H70V153H84V170H92V290H104V230H132V218H149V290H163V143H168V130H184V148H195V290H205V223H224V206H234V290H251V182H271V168H286V290H300V219H321V197H331V290H347V139H360V121H368V140H380V290H397V232H420V215H436V290H451V184H470V165H480V290H500V212H518V200H530V290H548V147H564V130H578V290H602V228H617V213H632V290H655V176H676V154H688V290H700V201H722V181H737V290H751V159H761V146H774V159H784V290H797V198H824V187H837V290H855V172H878V155H890V290H906V223H927V201H940V290H952V169H974V153H990V290H1004V224H1030V211H1047V290H1062V180H1081V169H1100V305H0Z" />
              <path d="M1010 290L1017 104L1009 99V91L1017 87L1020 67L1023 63V21H1025V63L1028 67L1031 87L1039 91V99L1031 104L1039 290Z" />
            </g>
            <path d="M0 307Q280 292 550 308T1100 300V420H0Z" fill="url(#water-fade)" />
            <g stroke="#adcee9" strokeWidth="2" opacity=".25">
              <path d="M0 323H1100M40 339H430M510 334H1020M80 358H700M740 355H1100M300 376H1000M30 395H690" />
            </g>
          </svg>
        </div>
        <div className="relative z-[2] grid grid-cols-[1fr_1.04fr] items-center gap-y-3 gap-x-3 max-w-420 ml-auto mr-auto pt-8 pr-12 pb-8.5 pl-12 min-[1680px]:pt-9.5 min-[1680px]:pb-9.5 max-[1250px]:pt-8 max-[1250px]:pr-7 max-[1250px]:pb-8 max-[1250px]:pl-7 max-[1000px]:grid-cols-1 max-[1000px]:max-w-205 max-[1000px]:pt-10.5 max-[1000px]:pr-7 max-[1000px]:pb-7 max-[1000px]:pl-7 max-[1000px]:gap-y-6.25 max-[1000px]:gap-x-6.25 max-[540px]:pt-7.5 max-[540px]:pr-5 max-[540px]:pb-5 max-[540px]:pl-5 max-[540px]:gap-y-7 max-[540px]:gap-x-7">
          <Reveal>
            <h1 id="hero-heading" className="mt-0 mr-0 mb-0 ml-0 text-title text-ink [&_span]:text-brand [&_span]:[background-clip:text] [&_span]:[-webkit-text-fill-color:transparent] app-page-heading [&_span]:[background-image:linear-gradient(115deg,_#2E357E,_#2E357E_65%,_#2E357E)]">
              Accounting, tax, and payroll <span>support that fits your budget</span>
            </h1>
            <p className="max-w-177.5 mt-5 mr-0 mb-7 ml-0 text-copy text-body max-[540px]:mt-4.5 max-[540px]:mb-5.75">
              RD Prestige Services Corp. gives small and growing businesses access to experienced finance professionals without the cost of a full-time finance department. Get accounting, payroll, and cash flow support tailored to your needs and budget.
            </p>
            <div className="flex flex-wrap gap-y-5 gap-x-7.5 [&_a:focus-visible]:[outline:3px_solid_#2E357E] [&_a:focus-visible]:outline-offset-[5px] [&_svg]:shrink-0 max-[1250px]:gap-y-3 max-[1250px]:gap-x-3 max-[540px]:flex-col max-[540px]:gap-y-3 max-[540px]:gap-x-3">
              <Link href="/consultation" className="typography-inverse inline-flex items-center justify-center gap-y-3.75 gap-x-3.75 min-h-15.25 pt-3.5 pr-7 pb-3.5 pl-7 [border:1.5px_solid] rounded-[11px] text-body font-bold no-underline [transition:box-shadow_180ms_ease,_transform_180ms_ease] text-white border-[#ee0710] shadow-[0_6px_16px_#d5081010] hover:[transform:translateY(-2px)] hover:shadow-[0_8px_22px_#153c8c20] max-[1250px]:pt-3.25 max-[1250px]:pr-4.5 max-[1250px]:pb-3.25 max-[1250px]:pl-4.5 max-[1250px]:min-h-13.5 max-[1250px]:gap-y-2.5 max-[1250px]:gap-x-2.5 max-[540px]:w-full motion-reduce:[transition:none] app-page-primaryButton [background-image:linear-gradient(#ff2028,_#df0009)]">Book a consultation <CalendarDays size={24} aria-hidden="true" /></Link>
              <Link href="/services" className="typography-surface inline-flex items-center justify-center gap-y-3.75 gap-x-3.75 min-h-15.25 pt-3.5 pr-7 pb-3.5 pl-7 [border:1.5px_solid] rounded-[11px] text-body font-bold no-underline [transition:box-shadow_180ms_ease,_transform_180ms_ease] text-brand border-[#2E357E] bg-[#ffffffa6] hover:[transform:translateY(-2px)] hover:shadow-[0_8px_22px_#153c8c20] max-[1250px]:pt-3.25 max-[1250px]:pr-4.5 max-[1250px]:pb-3.25 max-[1250px]:pl-4.5 max-[1250px]:min-h-13.5 max-[1250px]:gap-y-2.5 max-[1250px]:gap-x-2.5 max-[540px]:w-full motion-reduce:[transition:none]">See our services <ArrowRight size={26} aria-hidden="true" /></Link>
            </div>
            
          </Reveal>
          <Reveal delay={0.12} className="min-w-0 [&_>_svg]:block max-[1000px]:w-full max-[1000px]:max-w-190 max-[1000px]:ml-auto max-[1000px]:mr-auto max-[540px]:w-[calc(100%_+_12px)] max-[540px]:ml-[-6px]"><ServicesGraphic /></Reveal>
        </div>
        <svg className="absolute z-[1] bottom-0 w-full h-22.5 pointer-events-none" viewBox="0 0 1600 100" preserveAspectRatio="none" aria-hidden="true">
          <path d="M700 100C1020 5 1310 115 1600 20V100Z" fill="#e0edfc" />
          <path d="M750 100C1060 20 1350 125 1600 38V100Z" fill="#fff" fillOpacity=".9" />
          <path d="M920 100C1180 55 1410 114 1600 60V100Z" fill="#f0f6ff" />
        </svg>
      </section>
      <section className="typography-surface bg-[#fff] shadow-[0_-2px_8px_#305c9a04]" aria-label="Services at a glance">
        <div className="grid grid-cols-4 max-w-420 mt-auto mr-auto mb-auto ml-auto pt-7.25 pr-12 pb-8.25 pl-12 max-[1250px]:pl-7 max-[1250px]:pr-7 max-[1000px]:grid-cols-2 max-[1000px]:gap-y-7 max-[1000px]:gap-x-0 max-[540px]:pt-6 max-[540px]:pr-5 max-[540px]:pb-6 max-[540px]:pl-5 max-[540px]:gap-y-5.75 max-[540px]:gap-x-0">
          {featuredServices.map(({ icon: Icon, title, description }, index) => (
            <Reveal delay={index * 0.06} className="flex items-center gap-y-6 gap-x-6 pt-0 pr-6.5 pb-0 pl-6.5 [border-right:1px_solid_#d7e0ef] [&:first-child]:pl-3 [&:last-child]:[border-right:0] [&:last-child]:pr-0 [&_h2]:mt-0 [&_h2]:mr-0 [&_h2]:mb-1.25 [&_h2]:ml-0 [&_h2]:text-ink [&_h2]:text-card-heading [&_h2]:font-bold [&_p]:mt-0 [&_p]:mr-0 [&_p]:mb-0 [&_p]:ml-0 [&_p]:text-copy [&_p]:text-body max-[1250px]:pl-4.5 max-[1250px]:pr-4.5 max-[1250px]:gap-y-3.5 max-[1250px]:gap-x-3.5 max-[1000px]:[&:nth-child(2)]:[border-right:0] max-[1000px]:[&:nth-child(3)]:pl-3 max-[540px]:items-start max-[540px]:flex-col max-[540px]:gap-y-2.5 max-[540px]:gap-x-2.5 max-[540px]:pl-4 max-[540px]:pr-4 max-[540px]:[&:first-child]:pl-0 max-[540px]:[&:nth-child(3)]:pl-0" key={title}>
              <Icon className="shrink-0 text-brand max-[1250px]:w-8.75 max-[540px]:w-7.5 max-[540px]:h-7.5" size={44} strokeWidth={2.6} aria-hidden="true" />
              <div><h2>{title}</h2><p>{description}</p></div>
            </Reveal>
          ))}
        </div>
      </section>
      <AboutDepartments />
      <ProfessionalExpertise />
      <WhyChoose />
      <Partnerships />
      <ContactSection />
    </main>
  );
}
