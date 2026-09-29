import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChartNoAxesColumnIncreasing, Shield, UsersRound } from "lucide-react";
import styles from "./financial-future.module.css";

const values = [
  { icon: UsersRound, first: "Trusted", second: "Expertise" },
  { icon: ChartNoAxesColumnIncreasing, first: "Real", second: "Solutions" },
  { icon: Shield, first: "Lasting", second: "Impact" },
];

export default function FinancialFuture() {
  return (
    <section className={styles.section} aria-labelledby="financial-future-heading">
      <Image src="/images/financial-future-background.png" alt="" fill sizes="100vw" className={styles.background} />
      <div className={styles.wash} aria-hidden="true" />
      <div className={styles.geometry} aria-hidden="true">
        <span className={styles.topRibbon} />
        <span className={styles.leftRibbon} />
        <span className={styles.bottomRibbon} />
        <span className={styles.rightRibbon} />
      </div>
      <div className={styles.buildingWords} aria-hidden="true">
        <span>People</span><span>Insights</span><span>Solutions</span><span>Growth</span>
        <i /><span>A Brighter<br />Tomorrow</span>
      </div>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Partner <span>·</span> Plan <span>·</span> Progress</p>
          <h2 id="financial-future-heading" className={styles.heading}>Let’s Build a Stronger<br className={styles.lineBreak} /> Financial Future <em>Together.</em></h2>
          <p className={styles.description}><strong>RD Prestige Services Corp.</strong> helps businesses, nonprofits, and growing enterprises with practical, scalable, and affordable financial and professional solutions.</p>
          <div className={styles.actions}>
            <Link href="#contact" className={styles.primaryButton}>Request a Consultation <ArrowRight size={28} aria-hidden="true" /></Link>
            <Link href="#contact" className={styles.secondaryButton}>Contact RDPSC <ArrowRight size={28} aria-hidden="true" /></Link>
          </div>
          <ul className={styles.values} aria-label="Our commitment">
            {values.map(({ icon: Icon, first, second }) => (
              <li key={first}><Icon size={49} strokeWidth={1.7} aria-hidden="true" /><span>{first}<br />{second}</span></li>
            ))}
          </ul>
        </div>
        <div className={styles.brand}>
          <Image src="/logo/rdcsp_logo.png" alt="RD Prestige Services Corp. — Your one stop accounting services shop" width={2000} height={1302} sizes="(max-width: 900px) 80vw, 34vw" className={styles.logo} />
          <p className={styles.brandPromise}>Accessible. Practical. Scalable. Affordable.</p>
          <div className={styles.brandAccent} aria-hidden="true"><span /><span /><span /></div>
          <p className={styles.brandTagline}>Your Goals. Our Expertise. A Stronger Tomorrow.</p>
        </div>
      </div>
    </section>
  );
}
