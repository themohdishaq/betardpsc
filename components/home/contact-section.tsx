"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { ArrowRight, Building2, ChartNoAxesColumnIncreasing, ChevronDown, List, Mail, MessageCircle, Phone, Shield, UserRound, UsersRound } from "lucide-react";
import background from "./financial-future.module.css";
import styles from "./contact-section.module.css";

const commitments = [
  { icon: UsersRound, first: "Trusted", second: "Expertise", description: "Decades of combined experience you can count on." },
  { icon: ChartNoAxesColumnIncreasing, first: "Real", second: "Solutions", description: "Practical strategies for today’s challenges and tomorrow’s growth." },
  { icon: Shield, first: "Lasting", second: "Impact", description: "Stronger organizations. Brighter communities. A better tomorrow." },
];

const services = ["Accounting & Corporate Tax", "Personal Income Tax", "Professional Training", "Insurance & Segregated Funds", "Consultancy & Project Management"];

export default function ContactSection() {
  const [submissionMessage, setSubmissionMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Keep inquiry data in the form until a delivery service is configured.
    setSubmissionMessage("Online inquiries are not available yet. Your message has not been sent.");
  }

  return (
    <section id="contact" className={`${background.section} ${styles.section}`} aria-labelledby="contact-heading">
      <Image src="/images/financial-future-background.png" alt="" fill sizes="100vw" className={background.background} />
      <div className={background.wash} aria-hidden="true" />
      <div className={background.geometry} aria-hidden="true"><span className={background.topRibbon} /><span className={background.leftRibbon} /><span className={background.bottomRibbon} /><span className={background.rightRibbon} /></div>
      <div className={background.buildingWords} aria-hidden="true"><span>People</span><span>Insights</span><span>Solutions</span><span>Growth</span><i /><span>A Brighter<br />Tomorrow</span></div>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Partner <span>·</span> Plan <span>·</span> Progress</p>
          <h2 id="contact-heading" className={styles.heading}>Let’s Build a Stronger<br />Financial Future<br /><em>Together.</em></h2>
          <p className={styles.description}>RD Prestige Services Corp. helps businesses, nonprofits, and growing enterprises with practical, scalable, and affordable financial and professional solutions.</p>
          <p className={styles.tagline}>Your Goals. Our Expertise. A Stronger Tomorrow.</p>
          <ul className={styles.commitments}>
            {commitments.map(({ icon: Icon, first, second, description }) => (
              <li key={first}>
                <Icon size={49} strokeWidth={1.8} aria-hidden="true" />
                <h3>{first}<br />{second}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.formCard}>
          <h3 id="inquiry-heading" className={styles.formHeading}>Get in Touch</h3>
          <p className={styles.formIntro}>Tell us about your needs and we’ll get back to you shortly.</p>
          <form aria-labelledby="inquiry-heading" onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="inquiry-name">Full Name <span aria-hidden="true">*</span></label>
              <div className={styles.inputWrap}><UserRound aria-hidden="true" /><input id="inquiry-name" name="fullName" type="text" autoComplete="name" placeholder="Enter your full name" required maxLength={120} /></div>
            </div>
            <div className={styles.field}>
              <label htmlFor="inquiry-email">Email Address <span aria-hidden="true">*</span></label>
              <div className={styles.inputWrap}><Mail aria-hidden="true" /><input id="inquiry-email" name="email" type="email" autoComplete="email" placeholder="Enter your email address" required maxLength={254} /></div>
            </div>
            <div className={styles.field}>
              <label htmlFor="inquiry-phone">Phone Number <span aria-hidden="true">*</span></label>
              <div className={styles.inputWrap}><Phone aria-hidden="true" /><input id="inquiry-phone" name="phone" type="tel" autoComplete="tel" placeholder="(123) 456-7890" required maxLength={40} /></div>
            </div>
            <div className={styles.field}>
              <label htmlFor="inquiry-company">Company / Organization <span aria-hidden="true">*</span></label>
              <div className={styles.inputWrap}><Building2 aria-hidden="true" /><input id="inquiry-company" name="company" type="text" autoComplete="organization" placeholder="Your company or organization" required maxLength={160} /></div>
            </div>
            <div className={`${styles.field} ${styles.fullWidth}`}>
              <label htmlFor="inquiry-service">Service Interested In <span aria-hidden="true">*</span></label>
              <div className={styles.inputWrap}>
                <List aria-hidden="true" />
                <select id="inquiry-service" name="service" required defaultValue=""><option value="" disabled>Select a service</option>{services.map((service) => <option key={service} value={service}>{service}</option>)}</select>
                <ChevronDown className={styles.chevron} aria-hidden="true" />
              </div>
            </div>
            <div className={`${styles.field} ${styles.fullWidth}`}>
              <label htmlFor="inquiry-message">Message <span aria-hidden="true">*</span></label>
              <div className={`${styles.inputWrap} ${styles.messageWrap}`}><MessageCircle aria-hidden="true" /><textarea id="inquiry-message" name="message" placeholder="Tell us how we can help..." required rows={3} maxLength={5000} /></div>
            </div>
            <div className={styles.fullWidth}>
              <button className={styles.submit} type="submit">Send Inquiry <ArrowRight size={27} aria-hidden="true" /></button>
              <p className={styles.responseNote}>We typically respond within 1 business day.</p>
              <p className={styles.submissionMessage} role="status" aria-live="polite">{submissionMessage}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
