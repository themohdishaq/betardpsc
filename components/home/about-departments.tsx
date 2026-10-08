import Image from "next/image";
import Reveal from "@/components/motion/reveal";
import Link from "next/link";
import { serviceOfferings, serviceLinkLabels } from "@/lib/services";
import styles from "./service-cards.module.css";
import { ArrowRight, Banknote, ChartNoAxesColumnIncreasing, FileText, GraduationCap, MonitorCog, Shield, Target, Trophy, UsersRound, WalletCards, type LucideIcon } from "lucide-react";

const highlights = [
  { icon: Trophy, title: "Hundreds of", subtitle: "Returning Clients", description: "Accuracy, responsiveness, and professional service." },
  { icon: UsersRound, title: "7 Total", subtitle: "Service Areas", description: "Comprehensive services under one roof." },
  { icon: Target, title: "Customized", subtitle: "Flexible Solutions", description: "Tailored to your needs and budget." },
  { icon: ChartNoAxesColumnIncreasing, title: "Businesses • Nonprofits", subtitle: "• Growing Enterprises", description: "Supporting your goals at every stage." },
] as const;

const servicePresentation: Record<string, { icon: LucideIcon }> = {
  "accounting-corporate-tax": { icon: ChartNoAxesColumnIncreasing },
  "personal-income-tax": { icon: FileText },
  payroll: { icon: WalletCards },
  "treasury-cash-flow": { icon: Banknote },
  "it-consulting-project-management": { icon: MonitorCog },
  "professional-education-mentorship": { icon: GraduationCap },
  "risk-management-insurance": { icon: Shield },
};

export default function AboutDepartments() {
  return (
    <>
      <section id="about" className="[border-top:8px_solid_var(--line)] scroll-mt-27.5 components-home-about-departments-about [background-image:linear-gradient(115deg,_var(--white),_var(--indigo-50))]" aria-labelledby="about-heading">
        <div className="grid grid-cols-[1fr_1fr] items-center gap-y-[clamp(28px,_3.4vw,_56px)] gap-x-[clamp(28px,_3.4vw,_56px)] max-w-400 ml-auto mr-auto pt-8 pr-9 pb-8 pl-9 max-[1150px]:pt-6.5 max-[1150px]:pr-5.5 max-[1150px]:pb-6.5 max-[1150px]:pl-5.5 max-[1150px]:gap-y-9 max-[1150px]:gap-x-9 max-[1000px]:gap-y-6.25 max-[1000px]:gap-x-6.25 max-[800px]:grid-cols-1 max-[800px]:max-w-170 max-[800px]:pt-7.5 max-[800px]:pr-6 max-[800px]:pb-7.5 max-[800px]:pl-6 max-[800px]:gap-y-7 max-[800px]:gap-x-7 max-[480px]:pt-6 max-[480px]:pr-5 max-[480px]:pb-7.5 max-[480px]:pl-5">
          <figure className={`relative self-stretch min-h-147.5 mt-0 mr-0 mb-0 ml-0 overflow-hidden rounded-[12px] bg-[var(--indigo-50)] [&_figcaption]:absolute [&_figcaption]:bottom-0 [&_figcaption]:left-0 [&_figcaption]:w-full [&_figcaption]:pt-5.75 [&_figcaption]:pr-7.5 [&_figcaption]:pb-5.75 [&_figcaption]:pl-11 [&_figcaption]:text-white [&_figcaption]:text-body [&_figcaption]:italic max-[1150px]:min-h-155 max-[800px]:min-h-0 max-[800px]:aspect-[4_/_5] max-[480px]:[&_figcaption]:pl-9 components-home-about-departments-photo [&_figcaption]:[background-image:linear-gradient(90deg,_#1B2260bd,_#1B226061,_transparent)] [&_figcaption::before]:[position:absolute] [&_figcaption::before]:[top:23px] [&_figcaption::before]:[bottom:23px] [&_figcaption::before]:[left:24px] [&_figcaption::before]:[width:4px] [&_figcaption::before]:[background:var(--indigo-800)] [&_figcaption::before]:[content:""] [@media(max-width:_480px)]:[&_figcaption::before]:[left:20px]`}>
            <Image src="/images/about-consultation.png" alt="Illustration of financial advisers discussing business plans with a client in a bright city office" fill sizes="(max-width: 800px) 100vw, 48vw" className="object-cover object-center" />
            <figcaption>Strategic Financial Guidance<br />for a Brighter Tomorrow.</figcaption>
          </figure>
          <div className="pt-3.5 pr-0 pb-6 pl-0 min-w-0 max-[800px]:pt-0 max-[800px]:pr-0 max-[800px]:pb-0 max-[800px]:pl-0">
            <p className={`flex items-center gap-y-5 gap-x-5 mt-0 mr-0 mb-6 ml-0 text-brand text-caption font-bold tracking-[.14em] uppercase max-[480px]:mb-4.25 components-home-about-departments-eyebrow [&::after]:[width:58px] [&::after]:[height:2px] [&::after]:[background:var(--cyan-600)] [&::after]:[content:""]`}>About RDPSC</p>
            <h2 id="about-heading" className="mt-0 mr-0 mb-0 ml-0 text-heading text-section [&_span]:text-brand">Financial Expertise<br /><span>Built Around Your Business</span></h2>
            <p className="mt-4.5 mr-0 mb-6.5 ml-0 text-brand text-body">RD Prestidge Services Corp. provides customized fractional financial services for businesses, nonprofits, and growing enterprises — with practical, affordable support tailored to your unique needs.</p>
            <div className="grid grid-cols-2 gap-y-4 gap-x-4 max-[480px]:gap-y-3 max-[480px]:gap-x-3">
              {highlights.map(({ icon: Icon, title, subtitle }, index) => (
                <Reveal delay={index * 0.06} className="typography-surface flex items-start gap-y-4.5 gap-x-4.5 pt-5.5 pr-4.75 pb-5.5 pl-4.75 bg-[var(--white)] rounded-[12px] shadow-[0_7px_28px_#2098C80b] [&_>_svg]:shrink-0 [&_>_svg]:text-brand [&_>_svg]:w-[clamp(32px,_3.8vw,_50px)] [&_>_svg]:mt-0.25 [&_h3]:mt-0 [&_h3]:mr-0 [&_h3]:mb-1.25 [&_h3]:ml-0 [&_h3]:text-card-ink [&_h3]:text-card-heading [&_h3]:font-semibold [&_p]:mt-0 [&_p]:mr-0 [&_p]:mb-0 [&_p]:ml-0 [&_p]:text-copy [&_p]:text-body max-[1150px]:pt-4.5 max-[1150px]:pr-3.75 max-[1150px]:pb-4.5 max-[1150px]:pl-3.75 max-[1150px]:gap-y-3.25 max-[1150px]:gap-x-3.25 max-[1000px]:flex-col max-[1000px]:gap-y-2 max-[1000px]:gap-x-2 max-[1000px]:[&_>_svg]:h-8.25 max-[800px]:flex-row max-[800px]:pt-5 max-[800px]:pr-4 max-[800px]:pb-5 max-[800px]:pl-4 max-[800px]:[&_>_svg]:w-9.75 max-[800px]:[&_>_svg]:h-10.5 max-[480px]:flex-col max-[480px]:gap-y-2.5 max-[480px]:gap-x-2.5 max-[480px]:pt-4 max-[480px]:pr-4 max-[480px]:pb-4 max-[480px]:pl-4" key={title}>
                  <Icon size={48} strokeWidth={2.5} aria-hidden="true" />
                  <div><h3>{title}<br />{subtitle}</h3></div>
                </Reveal>
              ))}
            </div>
            <div className="flex items-center gap-y-8 gap-x-8 mt-9.5 [&_blockquote]:mt-0 [&_blockquote]:mr-0 [&_blockquote]:mb-0 [&_blockquote]:ml-0 [&_blockquote]:pl-5.5 [&_blockquote]:[border-left:2px_solid_var(--line)] [&_blockquote]:text-copy [&_blockquote]:text-body [&_blockquote]:italic max-[1150px]:gap-y-5.5 max-[1150px]:gap-x-5.5 max-[1150px]:[&_blockquote]:pl-4.5 max-[1000px]:flex-wrap max-[1000px]:gap-y-5 max-[1000px]:gap-x-5 max-[800px]:flex-nowrap max-[800px]:mt-7 max-[480px]:flex-col max-[480px]:items-stretch">
              <Link href="/about" className="button-primary inline-flex items-center justify-center gap-y-4.5 gap-x-4.5 shrink-0 min-h-13 pt-3.5 pr-6.5 pb-3.5 pl-6.5 rounded-[9px] text-white text-body font-medium no-underline shadow-[0_7px_18px_#29348412] [transition:transform_180ms_ease,_box-shadow_180ms_ease] [border:1px_solid_var(--red-600)] hover:[transform:translateY(-2px)] hover:shadow-[0_10px_22px_#29348425] focus-visible:[outline:3px_solid_var(--cyan-700)] focus-visible:outline-offset-[5px] max-[1150px]:pl-5.75 max-[1150px]:pr-5.75 motion-reduce:[transition:none] components-home-about-departments-aboutButton [background-image:linear-gradient(var(--red-600),_var(--red-600))]">Meet RDPSC <ArrowRight size={21} aria-hidden="true" /></Link>
              
            </div>
          </div>
        </div>
      </section>

      <section id="departments" className="relative isolate overflow-hidden scroll-mt-27.5 border-t border-[var(--line)] bg-white" aria-labelledby="departments-heading">
        <div className="relative z-10 mx-auto max-w-360 px-5 pb-24 pt-12 sm:px-7 sm:pt-16 lg:px-[clamp(24px,5vw,72px)]">
          <div className="mb-9 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div className="max-w-170">
              <p className="mb-3 flex items-center gap-3 text-caption font-semibold uppercase tracking-[.14em] text-eyebrow"><span aria-hidden="true" className="h-0.5 w-8 bg-[var(--cyan-600)]" />Our Services</p>
              <h2 id="departments-heading" className="text-section text-heading">Specialized Services.<br className="sm:hidden" /> <span className="text-brand">One Trusted Partner.</span></h2>
              <p className="mt-4 max-w-145 text-body text-copy">Seven areas of expertise, with practical support built around your business, your people, and your goals.</p>
            </div>
            <Link href="/services" className="button-secondary inline-flex min-h-11 w-fit shrink-0 items-center gap-3 rounded-lg border border-[var(--line)] bg-white px-5 py-3 text-small font-semibold text-brand transition-colors hover:border-[var(--indigo-800)] hover:bg-white focus-visible:outline-2 focus-visible:outline-[var(--cyan-700)] focus-visible:outline-offset-4 motion-reduce:transition-none">See all services <ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
          <div className={styles.grid}>
            {serviceOfferings.map(({ id, title, summary }, index) => {
              const { icon: Icon } = servicePresentation[id] ?? { icon: ChartNoAxesColumnIncreasing };
              const displayTitle = title;
              return (
                <Reveal as="article" delay={index * 0.055} key={id} className="min-w-0">
                  <Link href={`/services/${id}`} className={styles.card} aria-labelledby={`home-service-${id}`}>
                    <div className="mb-6 flex items-center justify-between gap-3">
                      <span className={styles.icon}><Icon size={27} strokeWidth={1.8} aria-hidden="true" /></span>
                      <span aria-hidden="true" className="text-caption font-medium tabular-nums tracking-[.08em] text-copy">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 id={`home-service-${id}`} className={`${styles.heading} mb-3 text-card-heading font-semibold text-card-ink`}>{displayTitle}</h3>
                    <p className="mb-7 text-body text-copy">{summary}</p>
                    <span className="mt-auto flex items-center justify-between gap-3 border-t border-[var(--line)] pt-4 text-small font-semibold text-brand">{serviceLinkLabels[id]} <ArrowRight size={19} className={`${styles.arrow} shrink-0`} aria-hidden="true" /></span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
          <p className="mx-auto mt-9 flex items-center justify-center gap-3 text-center text-small text-copy"><span aria-hidden="true" className="hidden h-px w-10 bg-[var(--indigo-50)] sm:block" />Your goals. Our expertise. A stronger tomorrow.<span aria-hidden="true" className="hidden h-px w-10 bg-[var(--indigo-50)] sm:block" /></p>
        </div>
        <svg className="absolute z-[0] left-0 bottom-0 w-full h-32.5 opacity-[.6] pointer-events-none" viewBox="0 0 1400 140" preserveAspectRatio="none" aria-hidden="true">
          <defs><linearGradient id="departments-skyline" x1="0" y1="0" x2="0" y2="1"><stop stopColor="var(--indigo-50)" /><stop offset="1" stopColor="var(--indigo-50)" /></linearGradient></defs>
          <path fill="url(#departments-skyline)" d="M0 140V93H10V82H23V67H31V85H40V140H50V100H65V49H75V42H96V49H108V140H121V72H140V66H153V140H169V99H192V89H204V140H219V47H230V34H232V10H234V34H247V47H260V140H276V68H297V60H311V140H331V95H345V85H360V140H382V108H394V87H410V98H423V140H448V115H470V107H490V140H518V120H539V111H550V140H574V127H599V117H613V140H636V131H660V122H677V140H702V129H720V115H733V140H751V105H761V98H776V140H796V120H814V110H830V140H849V95H862V82H875V95H889V140H906V109H926V97H940V140H957V68H973V60H988V140H1008V91H1020V78H1035V140H1054V44H1065V33H1068V14H1070V33H1085V44H1100V140H1122V87H1139V72H1154V140H1179V105H1198V92H1214V140H1232V60H1245V49H1262V60H1278V140H1295V35H1307V27H1326V35H1340V140H1360V49H1384V44H1400V140Z" />
        </svg>
      </section>
    </>
  );
}
