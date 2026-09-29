"use client";

import { useState, type FormEvent } from "react";
import styles from "./footer.module.css";

export default function NewsletterForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Connect a mailing provider before accepting subscriptions.
    setMessage("Newsletter signup is not available yet. You have not been subscribed.");
  }

  return (
    <form className={styles.newsletterForm} onSubmit={handleSubmit}>
      <label className={styles.srOnly} htmlFor="footer-newsletter-email">Your email address</label>
      <input id="footer-newsletter-email" name="email" type="email" autoComplete="email" placeholder="Your email address" required maxLength={254} aria-describedby="footer-newsletter-privacy" />
      <button type="submit">Subscribe</button>
      <p id="footer-newsletter-privacy" className={styles.privacy}>We respect your privacy. No spam,<br />just valuable insights.</p>
      <p role="status" className={styles.status}>{message}</p>
    </form>
  );
}
