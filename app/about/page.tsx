import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, ChartNoAxesCombined, Check, Diamond, Eye, Globe2, Handshake, Settings, ShieldCheck, Target, UsersRound } from "lucide-react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Us | RD Prestige Services Corp.",
  description: "Learn about RD Prestige Services Corp., our story, mission, and commitment to practical financial services, professional training, and stronger communities.",
};

const values = ["Integrity", "Client Focus", "Excellence", "Collaboration", "Continuous Learning", "Community Impact"];
const statistics = [
  { icon: UsersRound, value: "500+", label: "Clients Served" },
  { icon: Building2, value: "5", label: "Service Departments" },
  { icon: Globe2, value: "Across", label: "Canada & Internationally" },
  { icon: Handshake, value: "Strong", label: "Partner Network" },
];
const benefits = [
  { icon: UsersRound, title: "Client-Centered Approach", description: "Your goals are our priority. We take the time to understand your unique needs." },
  { icon: Settings, title: "Comprehensive Solutions", description: "Five specialized departments under one roof." },
  { icon: ChartNoAxesCombined, title: "Experienced Professionals", description: "Practical expertise and real-world experience." },
  { icon: ShieldCheck, title: "Trusted by Diverse Clients", description: "From individuals and SMEs to non-profits and corporate organizations." },
];

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="about-title">
        <Image src="/images/about/hero.png" alt="Navy mug with the words Building Brighter Financial Futures in a modern office" fill sizes="100vw" preload className={styles.heroImage} />
        <div className={styles.heroPanel} aria-hidden="true" />
        <div className={styles.heroInner}>
          <nav aria-label="Breadcrumb" className={styles.breadcrumb}><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">About Us</span></nav>
          <h1 id="about-title">About <span>RDPSC</span></h1>
          <p className={styles.heroTagline}>People. Process. Possibilities.</p>
          <span className={styles.redLine} aria-hidden="true" />
          <p className={styles.heroDescription}>At RD Prestige Services Corp., we help individuals, businesses, and organizations make confident financial decisions through trusted expertise, practical solutions, and a client-focused approach.</p>
        </div>
        <p className={styles.heroWords}>Trust<br />Expertise<br />Growth<span className={styles.redLine} /></p>
      </section>

      <section className={`${styles.container} ${styles.story}`} aria-labelledby="story-heading">
        <div className={styles.prose}>
          <p className={styles.eyebrow}>Our Story</p>
          <h2 id="story-heading">A Journey Built on Trust<br />and Purpose</h2>
          <span className={styles.redLine} aria-hidden="true" />
          <p>RD Prestige Services Corp. was founded with a simple belief: every individual and organization deserves access to reliable financial guidance, professional support, and opportunities to grow.</p>
          <p>What started as a vision to make financial services more accessible and understandable has grown into a multi-service firm supporting clients across Canada and internationally. Today, we proudly serve individuals, small businesses, growing enterprises, and non-profits with a commitment to integrity, professionalism, and long-term relationships.</p>
          <Link href="/#departments" className={styles.blueButton}>Our Services <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
        <figure className={styles.storyPhoto}>
          <Image src="/images/about/story.png" alt="Modern glass building with the message A Brighter Financial Tomorrow Together engraved on its facade" fill sizes="(max-width: 760px) 100vw, 50vw" />
          <figcaption>“Empowering<br />people and<br />organizations<br />to achieve more.”<span className={styles.redLine} aria-hidden="true" /></figcaption>
        </figure>
      </section>

      <section className={styles.softSection} aria-labelledby="mission-heading">
        <div className={styles.container}>
          <h2 id="mission-heading">Our Mission, Vision &amp; Values</h2><span className={styles.redLine} aria-hidden="true" />
          <div className={styles.missionGrid}>
            <article className={styles.card}><Target className={styles.missionIcon} aria-hidden="true" /><h3>Our Mission</h3><p>To provide reliable, professional, and personalized financial services and solutions that help our clients achieve stability, growth, and long-term success.</p></article>
            <article className={styles.card}><Eye aria-hidden="true" /><h3>Our Vision</h3><p>To be a trusted partner recognized for excellence in financial services, professional training, and strategic consulting — creating opportunities for stronger communities and a brighter tomorrow.</p></article>
            <article className={styles.card}><Diamond aria-hidden="true" /><h3>Our Values</h3><ul className={styles.values}>{values.map((value) => <li key={value}><span><Check size={11} strokeWidth={3} aria-hidden="true" /></span>{value}</li>)}</ul></article>
          </div>
        </div>
      </section>

      <section className={styles.stats} aria-label="RDPSC at a glance">
        <ul className={styles.statsInner}>{statistics.map(({ icon: Icon, value, label }) => <li key={label}><Icon aria-hidden="true" /><strong>{value}</strong><span>{label}</span></li>)}</ul>
      </section>

      <section className={`${styles.container} ${styles.leadership}`} aria-labelledby="leadership-heading">
        <figure className={styles.leadershipPhoto}>
          <Image src="/images/about/leadership.png" alt="Illustrative close-up of a professional writing in a notebook beside a laptop" fill sizes="(max-width: 760px) 100vw, 50vw" />
          <figcaption>“Good financial guidance doesn’t just change numbers — it changes lives.”<span className={styles.redLine} aria-hidden="true" /></figcaption>
        </figure>
        <div className={styles.prose}>
          <h2 id="leadership-heading">A Message from<br />Our Leadership</h2><span className={styles.redLine} aria-hidden="true" />
          <p>At RDPSC, our goal is not just to provide services, but to build lasting relationships based on <strong>trust, transparency, and real results.</strong></p>
          <p>We understand that every client’s journey is unique. That’s why we take the time to listen, understand your goals, and deliver solutions that make a meaningful difference.</p>
          <p>Thank you for being part of our journey. We look forward to supporting you in achieving your financial and professional aspirations.</p>
          <p className={styles.signature}>R. D. Prestige</p>
          <p className={styles.attribution}>Founder &amp; Principal<br />RD Prestige Services Corp.</p>
        </div>
      </section>

      <section className={styles.softSection} aria-labelledby="why-heading">
        <div className={styles.container}>
          <div className={styles.whyHeader}><h2 id="why-heading">Why Choose RDPSC?</h2><p>More than services — <span>a trusted partner</span></p></div>
          <span className={styles.redLine} aria-hidden="true" />
          <div className={styles.benefitGrid}>{benefits.map(({ icon: Icon, title, description }) => <article className={styles.card} key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{description}</p></article>)}</div>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="about-cta-heading">
        <Image src="/images/about/cta.png" alt="" fill sizes="100vw" className={styles.ctaImage} />
        <div className={styles.container}>
          <p className={styles.eyebrow}>Let’s Work Together</p>
          <h2 id="about-cta-heading">Build a Stronger<br /><span>Financial Future</span></h2>
          <p>Have questions or ready to get started? We’re here to help.</p>
          <div className={styles.ctaActions}><Link href="/#contact" className={styles.redButton}>Get in Touch <ArrowRight size={18} aria-hidden="true" /></Link><Link href="/#departments" className={styles.outlineButton}>Our Services</Link></div>
          <p className={styles.ctaSignature}>People<br />Process<br />Possibilities<span className={styles.redLine} aria-hidden="true" /></p>
        </div>
      </section>
    </main>
  );
}
