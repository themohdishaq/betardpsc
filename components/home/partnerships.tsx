import Link from "next/link";
import { ArrowRight, Handshake, UsersRound } from "lucide-react";
import styles from "./partnerships.module.css";

// Replace these text wordmarks with official logo assets when supplied.
const partners = [
  { name: "World Financial Group", style: "wfg", mark: "WFG", detail: "WORLD FINANCIAL GROUP" },
  { name: "ivari", style: "ivari", mark: "ivari" },
  { name: "iA Financial Group", style: "ia", mark: "iA", detail: "Financial Group" },
  { name: "Manulife", style: "manulife", mark: "Manulife" },
  { name: "Intuit QuickBooks", style: "quickbooks", mark: "quickbooks", detail: "intuit" },
  { name: "Zoho", style: "zoho", mark: "ZOHO" },
  { name: "UFile", style: "ufile", mark: "UFile" },
  { name: "Astranti", style: "astranti", mark: "Astranti" },
];

const organizations = [
  { name: "Overcomers Chapel", style: "overcomers" },
  { name: "He Cares We Care", style: "hecares" },
  { name: "Feast of Esther", style: "esther" },
  { name: "Holy Guacamole Canada", style: "guacamole" },
  { name: "Zadesta", style: "zadesta" },
  { name: "Maple Logistics Trading", style: "maple" },
  { name: "Restar Framos Technologies", style: "restar" },
  { name: "Concept24group", style: "concept" },
  { name: "Buildesigners Inc.", style: "buildesigners" },
];

export default function Partnerships() {
  return (
    <section className={styles.section} aria-labelledby="partnerships-heading">
      <div className={styles.inner}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>Partners &amp; Clients</p>
          <h2 id="partnerships-heading">Trusted Partnerships. <em>Proven Relationships.</em></h2>
          <p className={styles.description}>RD Prestige Services Corp. collaborates with respected financial, insurance, accounting, and training<br className={styles.desktopBreak} /> organizations while supporting a wide range of businesses, nonprofits, and individuals.</p>
        </header>

        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <h3><span className={styles.partnerIcon}><Handshake size={31} aria-hidden="true" /></span>Strategic Partners</h3>
            <p>Stronger together for a brighter tomorrow</p>
          </div>
          <ul className={styles.partners} aria-label="Strategic partners">
            {partners.map(({ name, style, mark, detail }) => (
              <li key={name} className={`${styles.logoCard} ${styles[style]}`} aria-label={name}>
                <span className={styles.wordmark} aria-hidden="true">{mark}</span>
                {detail && <span className={styles.detail} aria-hidden="true">{detail}</span>}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <h3><span className={styles.communityIcon}><UsersRound size={32} aria-hidden="true" /></span>Organizations We Support</h3>
            <p>Supporting communities. Building brighter futures.</p>
          </div>
          <div className={styles.communityGrid}>
            <ul className={styles.organizations} aria-label="Organizations we support">
              {organizations.map(({ name, style }) => <li key={name} className={`${styles.organizationCard} ${styles[style]}`}>{name}</li>)}
            </ul>
            <aside className={styles.individuals} aria-label="Private individuals served">
              <UsersRound size={68} strokeWidth={2} aria-hidden="true" />
              <div><strong>Hundreds</strong><p>of private individuals<br />served</p><span aria-hidden="true" /></div>
            </aside>
          </div>
        </div>

        <div className={styles.footer}>
          <Link href="/partnerships" className={styles.button}>View All Partnerships <ArrowRight size={22} aria-hidden="true" /></Link>
          <p>People. Partnerships. Possibilities.</p>
        </div>
      </div>
    </section>
  );
}
