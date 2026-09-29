import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChartNoAxesCombined, Check, FileText, Files, Globe2, GraduationCap, MessageSquare, Settings, ShieldCheck, UserRound, UsersRound } from "lucide-react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Our Services | RD Prestige Services Corp.",
  description: "Explore accounting, corporate and personal tax, professional training, consulting, nonprofit support, and international financial services from RD Prestige Services Corp.",
};

const services = [
  { id: "accounting-corporate-tax", icon: Files, title: "Accounting & Corporate Tax", description: "Accurate accounting and corporate tax solutions for businesses of all sizes.", detail: "Discuss your bookkeeping, financial reporting, and corporate tax needs with our team. We help you organize your finances and plan the next steps for your business." },
  { id: "personal-income-tax", icon: UserRound, title: "Personal Income Tax", description: "Simple, secure and maximized personal tax returns for individuals and families.", detail: "Get support with preparing and filing your personal return, understanding your tax documents, and identifying deductions and credits that may apply to your circumstances." },
  { id: "professional-training", icon: GraduationCap, title: "Professional Training", description: "Practical training programs to build financial literacy and professional skills.", detail: "Tell us your learning goals so we can discuss suitable training in financial literacy, accounting practices, and skills for professional development." },
  { id: "insurance-segregated-funds", icon: ShieldCheck, title: "Insurance & Segregated Funds", description: "Life insurance, investment solutions and wealth protection for a secure tomorrow.", detail: "Contact us to discuss your protection and long-term planning needs, available options, and the scope of support offered through this expanding service area." },
  { id: "consultancy-project-management", icon: ChartNoAxesCombined, title: "Consultancy & Project Management", description: "Strategic guidance for business growth, process improvement and project delivery.", detail: "We work with you to clarify objectives, review processes, and develop a practical plan for your project, with priorities and next steps tailored to your organization." },
  { id: "nonprofit-support", icon: UsersRound, title: "Not-for-Profit Support", description: "Specialized accounting and tax services for charities and non-profit organizations.", detail: "Discuss financial reporting, record keeping, and tax-related needs with a team that understands the importance of accountability and making resources count." },
  { id: "international-services", icon: Globe2, title: "International Services", description: "Supporting Canadian clients globally with cross-border tax and financial solutions.", detail: "Share the countries and financial matters involved in your situation. We will discuss your needs and the appropriate scope of cross-border support." },
];
const steps = [
  { icon: MessageSquare, title: "Understand Your Needs", description: "We listen to your goals and challenges." },
  { icon: FileText, title: "Plan & Strategize", description: "We design the right solution for you." },
  { icon: Settings, title: "Implement", description: "We put the plan into action." },
  { icon: ChartNoAxesCombined, title: "Deliver Results", description: "You achieve clarity, confidence and growth." },
];
const faqs = [
  { question: "What areas do you serve?", answer: "We serve clients across Canada and also support international clients with cross-border tax and financial services." },
  { question: "Do you work with small businesses?", answer: "Yes. We work with individuals, small businesses, growing enterprises, and nonprofit organizations, tailoring our support to their goals and needs." },
  { question: "How do I get started?", answer: "Contact us with a brief description of your needs and the service you are interested in. We will discuss your goals, answer your questions, and agree on the next steps." },
  { question: "Are your services confidential?", answer: "We treat your information with care. Before sharing sensitive financial documents, contact our team to confirm the appropriate secure method and discuss confidentiality requirements." },
  { question: "Do you offer virtual consultations?", answer: "Contact our team to arrange a consultation and discuss a remote meeting option that works for your location and schedule." },
];

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="services-title">
        <Image src="/images/services/hero.png" alt="Fountain pen and financial reports on a modern office desk" fill sizes="100vw" preload className={styles.heroImage} />
        <div className={styles.heroPanel} aria-hidden="true" />
        <div className={styles.heroInner}>
          <nav aria-label="Breadcrumb" className={styles.breadcrumb}><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Our Services</span></nav>
          <div className={styles.heroCopy}>
            <h1 id="services-title">Our <span>Services</span></h1>
            <p className={styles.subtitle}>Comprehensive Financial Solutions<br />for Individuals, Businesses and Organizations.</p>
            <span className={styles.redLine} aria-hidden="true" />
            <p className={styles.heroDescription}>At RD Prestige Services Corp., we deliver a full range of accounting, tax, insurance, training and consulting services to help you make confident financial decisions and achieve your goals.</p>
            <ul className={styles.trust}><li><ShieldCheck aria-hidden="true" />Trusted<br />Expertise</li><li><UsersRound aria-hidden="true" />Client<br />Focused</li><li><ChartNoAxesCombined aria-hidden="true" />Real<br />Results</li></ul>
          </div>
        </div>
        <p className={styles.heroSignature}>Your<br />Financial Partner<br />for a Brighter<br />Tomorrow<span className={styles.redLine} /></p>
      </section>

      <section className={styles.areas} aria-labelledby="service-areas-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}><div><p className={styles.eyebrow}>Our Service Areas</p><h2 id="service-areas-title">Services Designed Around Your Needs</h2><span className={styles.redLine} aria-hidden="true" /></div><p>From tax preparation to financial planning, our integrated services help you save time, reduce risk, and unlock new opportunities.</p></div>
          <div className={styles.serviceGrid}>
            {services.map(({ id, icon: Icon, title, description, detail }) => (
              <article id={id} className={styles.serviceCard} key={id}>
                <span className={styles.iconCircle}><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{description}</p>
                <details className={styles.serviceDetails}><summary><span className={styles.learnMore}>Learn More</span><span className={styles.showLess}>Show Less</span><ArrowRight size={16} aria-hidden="true" /></summary><div><p>{detail}</p><Link href="/#contact">Discuss your needs <ArrowRight size={15} aria-hidden="true" /></Link></div></details>
              </article>
            ))}
            <aside className={styles.partnerCard}>
              <Image src="/images/financial-future-background.png" alt="" fill sizes="(max-width: 600px) 100vw, 25vw" />
              <div><p className={styles.eyebrow}>More Than Services</p><h3>A Partner<br />in Your<br />Financial<br />Journey</h3><Link href="/#contact" className={styles.blueButton}>Get in Touch <ArrowRight size={17} aria-hidden="true" /></Link></div>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.process} aria-labelledby="process-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}><div><h2 id="process-title">Our Process</h2><p className={styles.processSubtitle}>Simple. Transparent. Effective.</p><span className={styles.redLine} aria-hidden="true" /></div><p>We follow a clear and collaborative <span>process</span> to ensure you get the best results, every step of the way.</p></div>
          <ol className={styles.steps}>{steps.map(({ icon: Icon, title, description }, index) => <li key={title}><span className={styles.stepIcon}><Icon aria-hidden="true" /></span><h3>{index + 1}. {title}</h3><p>{description}</p>{index < steps.length - 1 && <ArrowRight className={styles.stepArrow} aria-hidden="true" />}</li>)}</ol>
        </div>
      </section>

      <section className={styles.commitment} aria-labelledby="commitment-title">
        <div className={`${styles.container} ${styles.commitmentGrid}`}>
          <div className={styles.commitmentCopy}><p className={styles.eyebrow}>Why Work With Us</p><h2 id="commitment-title">Your Goals.<br />Our Commitment.</h2><span className={styles.redLine} aria-hidden="true" /><p>We combine professional expertise with a personalized approach to deliver solutions that make a real difference in your financial life.</p><ul>{["Experienced and certified professionals", "Client-centered and transparent process", "Customized solutions for every stage of life", "Trusted by individuals, SMEs and non-profits", "Support across Canada and internationally"].map((item) => <li key={item}><span><Check size={12} aria-hidden="true" /></span>{item}</li>)}</ul><Link href="/#contact" className={styles.blueButton}>Work With Us <ArrowRight size={17} aria-hidden="true" /></Link></div>
          <figure className={styles.commitmentPhoto}><Image src="/images/about/leadership.png" alt="A professional reviewing documents and writing notes beside a laptop" fill sizes="(max-width: 900px) 100vw, 30vw" /><figcaption>People<br />Process<br />Possibilities<span className={styles.redLine} aria-hidden="true" /></figcaption></figure>
          <div id="faqs" className={styles.faqs}><h2>Frequently Asked Questions</h2><span className={styles.redLine} aria-hidden="true" />{faqs.map(({ question, answer }, index) => <details key={question} name="services-faq" open={index === 0}><summary>{question}<span aria-hidden="true" /></summary><p>{answer}</p></details>)}<Link href="/#contact" className={styles.faqLink}>Have another question? <ArrowRight size={16} aria-hidden="true" /></Link></div>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="services-cta-title"><Image src="/images/about/cta.png" alt="" fill sizes="100vw" /><div className={styles.container}><div><p className={styles.eyebrow}>Ready to Take the Next Step?</p><h2 id="services-cta-title">Let’s Build a Stronger<br />Financial Future <span>Together</span></h2></div><div className={styles.ctaAction}><p>Have questions or need expert guidance?<br />We’re here to help.</p><Link href="/#contact" className={styles.redButton}>Get in Touch <ArrowRight size={17} aria-hidden="true" /></Link></div></div></section>
    </main>
  );
}
