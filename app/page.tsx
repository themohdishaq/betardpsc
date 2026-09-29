import Link from "next/link";
import { ArrowRight, CalendarDays, ChartNoAxesColumnIncreasing, Check, GraduationCap, Settings, UserRound } from "lucide-react";
import ServicesGraphic from "@/components/hero/services-graphic";
import AboutDepartments from "@/components/home/about-departments";
import FinancialFuture from "@/components/home/financial-future";
import ContactSection from "@/components/home/contact-section";
import Partnerships from "@/components/home/partnerships";
import styles from "./page.module.css";

const featuredServices = [
  { icon: ChartNoAxesColumnIncreasing, title: "Accounting & Corporate Tax", description: "Keep your business on solid ground." },
  { icon: UserRound, title: "Personal Income Tax", description: "Maximize what matters to you." },
  { icon: GraduationCap, title: "Professional Training", description: "Invest in knowledge. Build your future." },
  { icon: Settings, title: "Expanding Services", description: "New solutions for a stronger tomorrow." },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className={styles.skyline} aria-hidden="true">
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
        <div className={styles.heroInner}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>Financial &amp; professional services you can rely on</p>
            <h1 id="hero-heading" className={styles.heading}>
              Your Trusted Partner<br className={styles.desktopBreak} /> for <span>Financial &amp;<br className={styles.desktopBreak} /> Professional Services</span>
            </h1>
            <p className={styles.description}>
              RD Prestige Services Corp. provides customized fractional financial services for businesses, nonprofits, and growing enterprises. Our experienced professionals deliver practical, scalable, and affordable solutions tailored to your needs and budget.
            </p>
            <div className={styles.actions}>
              <Link href="/services" className={styles.primaryButton}>Explore Our Services <ArrowRight size={24} aria-hidden="true" /></Link>
              <Link href="/contact" className={styles.secondaryButton}><CalendarDays size={26} aria-hidden="true" /> Request a Consultation</Link>
            </div>
            <ul className={styles.badges} aria-label="Our specialties">
              {["Accounting & Corporate Tax", "Personal Income Tax", "Professional Training"].map((service) => (
                <li key={service}><span className={styles.check}><Check size={13} strokeWidth={3} aria-hidden="true" /></span>{service}</li>
              ))}
            </ul>
          </div>
          <div className={styles.visual}><ServicesGraphic /></div>
        </div>
        <svg className={styles.wave} viewBox="0 0 1600 100" preserveAspectRatio="none" aria-hidden="true">
          <path d="M700 100C1020 5 1310 115 1600 20V100Z" fill="#e0edfc" />
          <path d="M750 100C1060 20 1350 125 1600 38V100Z" fill="#fff" fillOpacity=".9" />
          <path d="M920 100C1180 55 1410 114 1600 60V100Z" fill="#f0f6ff" />
        </svg>
      </section>
      <section className={styles.services} aria-label="Services at a glance">
        <div className={styles.servicesInner}>
          {featuredServices.map(({ icon: Icon, title, description }) => (
            <div className={styles.service} key={title}>
              <Icon className={styles.serviceIcon} size={44} strokeWidth={2.6} aria-hidden="true" />
              <div><h2>{title}</h2><p>{description}</p></div>
            </div>
          ))}
        </div>
      </section>
      <AboutDepartments />
      <FinancialFuture />
      <ContactSection />
      <Partnerships />
    </main>
  );
}
