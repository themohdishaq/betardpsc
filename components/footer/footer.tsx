import Image from "next/image";
import Link from "next/link";
import { ChartNoAxesCombined, Mail, MapPin, MessageCircle, PhoneCall, ShieldCheck, UsersRound } from "lucide-react";
import NewsletterForm from "./newsletter-form";
import styles from "./footer.module.css";

const quickLinks = [
  ["Home", "/"], ["About Us", "/about"], ["Our Services", "/services"],
  ["Our Partners", "/partnerships"], ["Who We Serve", "/who-we-serve"],
  ["Resources", "/resources"], ["Blog & Updates", "/blog"], ["Contact Us", "/#contact"],
];
const services = [
  ["Accounting & Corporate Tax", "/services/accounting-corporate-tax"],
  ["Personal Income Tax", "/services/personal-income-tax"],
  ["Professional Training", "/professional-training"],
  ["Insurance & Segregated Funds", "/services/insurance-segregated-funds"],
  ["Consultancy & Project Management", "/services/consultancy-project-management"],
];
const resources = [["Tax Tips", "/resources/tax-tips"], ["Financial Guides", "/resources/financial-guides"], ["Helpful Links", "/resources/helpful-links"], ["FAQs", "/resources/faqs"]];
const policies = [["Privacy Policy", "/privacy-policy"], ["Terms of Service", "/terms-of-service"], ["Cookies Policy", "/cookies-policy"], ["Sitemap", "/sitemap.xml"]];
const mapsUrl = "https://www.google.com/maps/search/?api=1&query=RD+Prestige+Services+Corp+Canada";
const whatsappUrl = "https://wa.me/14372148299";

function FooterLinks({ links }: { links: string[][] }) {
  return <ul className={styles.links}>{links.map(([label, href]) => <li key={label}><Link href={href}>{label}</Link></li>)}</ul>;
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <Image src="/images/footer-financial-background.png" alt="" fill sizes="100vw" className={styles.background} />
        <div className={styles.columns}>
          <div className={styles.brand}>
            <p className={styles.eyebrow}>Your Partner<br />in Progress</p>
            <h2>Building<br />Stronger<br /><em>Tomorrows</em></h2>
            <p className={styles.brandDescription}>At RD Prestige Services Corp., we help individuals, businesses, and organizations make confident financial decisions through trusted expertise, practical solutions, and a client-focused approach.</p>
            <ul className={styles.values}>
              <li><ShieldCheck aria-hidden="true" /><span>Trusted<br />Expertise</span></li>
              <li><UsersRound aria-hidden="true" /><span>Client<br />Focused</span></li>
              <li><ChartNoAxesCombined aria-hidden="true" /><span>Real<br />Results</span></li>
            </ul>
            <p className={styles.signature}>Your Success,<br /><span>Our Commitment</span></p>
          </div>

          <nav aria-labelledby="footer-quick-links"><h2 id="footer-quick-links" className={styles.title}>Quick Links</h2><FooterLinks links={quickLinks} /></nav>

          <div>
            <nav aria-labelledby="footer-services"><h2 id="footer-services" className={styles.title}>Our Services</h2><FooterLinks links={services} /></nav>
            <nav className={styles.resources} aria-labelledby="footer-resources"><h2 id="footer-resources" className={styles.title}>Resources</h2><FooterLinks links={resources} /></nav>
          </div>

          <div>
            <h2 className={styles.title}>Contact Information</h2>
            <address className={styles.contact}>
              <div><MapPin aria-hidden="true" /><p><strong>Canada (Head Office)</strong><span>Serving clients across Canada<br />and internationally</span></p></div>
              <div><PhoneCall aria-hidden="true" /><p><a href="tel:+14372148299">+1 (437) 214-8299</a><span>Mon – Fri: 9:00 AM – 6:00 PM EST</span></p></div>
              <div><Mail aria-hidden="true" /><p><a href="mailto:info@rdpsc.ca">info@rdpsc.ca</a></p></div>
            </address>
            <div className={styles.connect}>
              <h2 className={styles.title}>Connect With Us</h2>
              <div className={styles.socials}>
                <a href="https://www.linkedin.com/search/results/companies/?keywords=RD%20Prestige%20Services" target="_blank" rel="noopener noreferrer" aria-label="Find RD Prestige on LinkedIn"><span className={styles.linkedin} aria-hidden="true">in</span></a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"><MessageCircle aria-hidden="true" /></a>
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Find RD Prestige on Google Maps"><MapPin aria-hidden="true" /></a>
                <a href="mailto:info@rdpsc.ca" aria-label="Email RD Prestige"><Mail aria-hidden="true" /></a>
              </div>
              <a className={styles.contactLink} href={whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" />Chat with us on WhatsApp</a>
              <a className={styles.contactLink} href={mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin aria-hidden="true" />Find us on Google Maps</a>
            </div>
          </div>

          <div className={styles.newsletter}>
            <h2 className={styles.title}>Stay Informed</h2>
            <p>Subscribe to our newsletter for tax tips, financial insights, and company updates.</p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p>© {new Date().getFullYear()} RD Prestige Services Corp. All rights reserved.</p>
          <nav aria-label="Legal and site information"><ul>{policies.map(([label, href]) => <li key={label}><Link href={href}>{label}</Link></li>)}</ul></nav>
          <p className={styles.motto}><em>People</em><span>Process</span><span>Possibilities</span></p>
        </div>
      </div>
    </footer>
  );
}
