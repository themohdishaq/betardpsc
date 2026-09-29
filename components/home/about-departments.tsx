import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChartNoAxesColumnIncreasing, FileText, GraduationCap, Shield, Target, Trophy, UsersRound } from "lucide-react";
import styles from "./about-departments.module.css";

const highlights = [
  { icon: Trophy, title: "40+ Years", subtitle: "Combined Experience", description: "Depth of knowledge you can trust." },
  { icon: UsersRound, title: "5 Specialized", subtitle: "Departments", description: "Comprehensive services under one roof." },
  { icon: Target, title: "Customized", subtitle: "Fractional Services", description: "Tailored to your needs and budget." },
  { icon: ChartNoAxesColumnIncreasing, title: "Businesses • Nonprofits", subtitle: "• Growing Enterprises", description: "Supporting your goals at every stage." },
];

const departments = [
  { icon: ChartNoAxesColumnIncreasing, title: "Accounting &", subtitle: "Corporate Tax", tone: "accounting", tagline: "Accurate. Compliant. Strategic.", description: "Keep your business on solid financial ground with expert accounting and tax solutions." },
  { icon: FileText, title: "Personal", subtitle: "Income Tax", tone: "personal", tagline: "Simple. Reliable. Maximized.", description: "Personalized tax planning and filing to help you keep more of what you earn." },
  { icon: GraduationCap, title: "Professional", subtitle: "Training", tone: "training", tagline: "Build Skills. Create Opportunities.", description: "Invest in knowledge with practical training for individuals and organizations." },
  { icon: Shield, title: "Insurance &", subtitle: "Segregated Funds", tone: "insurance", tagline: "Expanding Services", description: "Growing our offerings to help protect your future with tailored insurance and investment solutions." },
  { icon: UsersRound, title: "Consultancy &", subtitle: "Project Management", tone: "consultancy", tagline: "Expanding Services", description: "Strategic guidance and project support to help you plan, execute, and achieve your goals." },
];

export default function AboutDepartments() {
  return (
    <>
      <section id="about" className={styles.about} aria-labelledby="about-heading">
        <div className={styles.aboutInner}>
          <figure className={styles.photo}>
            <Image src="/images/about-consultation.png" alt="Illustration of financial advisers discussing business plans with a client in a bright city office" fill sizes="(max-width: 800px) 100vw, 48vw" className={styles.photoImage} />
            <figcaption>Strategic Financial Guidance<br />for a Brighter Tomorrow.</figcaption>
          </figure>
          <div className={styles.aboutCopy}>
            <p className={styles.eyebrow}>About RDPSC</p>
            <h2 id="about-heading" className={styles.heading}>Financial Expertise<br /><span>Built Around Your Business</span></h2>
            <p className={styles.intro}>RD Prestige Services Corp. provides customized fractional financial services for businesses, nonprofits, and growing enterprises — with practical, affordable support tailored to your unique needs.</p>
            <div className={styles.highlights}>
              {highlights.map(({ icon: Icon, title, subtitle, description }) => (
                <div className={styles.highlight} key={title}>
                  <Icon size={48} strokeWidth={2.5} aria-hidden="true" />
                  <div><h3>{title}<br />{subtitle}</h3><p>{description}</p></div>
                </div>
              ))}
            </div>
            <div className={styles.aboutActions}>
              <Link href="/about" className={styles.aboutButton}>More About Us <ArrowRight size={21} aria-hidden="true" /></Link>
              <blockquote>“Experienced Professionals.<br />Real Solutions. Lasting Impact.”</blockquote>
            </div>
          </div>
        </div>
      </section>

      <section id="departments" className={styles.departments} aria-labelledby="departments-heading">
        <div className={styles.departmentsInner}>
          <p className={styles.eyebrow}>Our Departments</p>
          <h2 id="departments-heading" className={styles.departmentHeading}>Five Specialized Departments. <span>One Trusted Partner.</span></h2>
          <div className={styles.departmentIntro}>
            <p>Accessible. Practical. Scalable. Affordable.</p>
            <Link href="/services" className={styles.servicesButton}>Explore All Services <ArrowRight size={21} aria-hidden="true" /></Link>
          </div>
          <div className={styles.departmentGrid}>
            {departments.map(({ icon: Icon, title, subtitle, tone, tagline, description }) => (
              <article key={tone} className={`${styles.departmentCard} ${styles[tone]}`}>
                <div className={styles.pentagonBorder}>
                  <div className={styles.pentagon}>
                    <Icon size={52} strokeWidth={2.5} aria-hidden="true" />
                    <h3>{title}<br />{subtitle}</h3>
                  </div>
                </div>
                <div className={styles.cardBody}>
                  <p className={styles.tagline}>{tagline}</p>
                  <span className={styles.divider} aria-hidden="true" />
                  <p className={styles.cardDescription}>{description}</p>
                </div>
              </article>
            ))}
          </div>
          <p className={styles.closingLine}>Your Goals. Our Expertise. A Stronger Tomorrow.</p>
        </div>
        <svg className={styles.skyline} viewBox="0 0 1400 140" preserveAspectRatio="none" aria-hidden="true">
          <defs><linearGradient id="departments-skyline" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#b7d0ed" /><stop offset="1" stopColor="#edf5ff" /></linearGradient></defs>
          <path fill="url(#departments-skyline)" d="M0 140V93H10V82H23V67H31V85H40V140H50V100H65V49H75V42H96V49H108V140H121V72H140V66H153V140H169V99H192V89H204V140H219V47H230V34H232V10H234V34H247V47H260V140H276V68H297V60H311V140H331V95H345V85H360V140H382V108H394V87H410V98H423V140H448V115H470V107H490V140H518V120H539V111H550V140H574V127H599V117H613V140H636V131H660V122H677V140H702V129H720V115H733V140H751V105H761V98H776V140H796V120H814V110H830V140H849V95H862V82H875V95H889V140H906V109H926V97H940V140H957V68H973V60H988V140H1008V91H1020V78H1035V140H1054V44H1065V33H1068V14H1070V33H1085V44H1100V140H1122V87H1139V72H1154V140H1179V105H1198V92H1214V140H1232V60H1245V49H1262V60H1278V140H1295V35H1307V27H1326V35H1340V140H1360V49H1384V44H1400V140Z" />
        </svg>
      </section>
    </>
  );
}
