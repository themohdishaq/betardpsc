"use client";

import { useId, useState, type FormEvent } from "react";

export default function NewsletterForm() {
  const [message, setMessage] = useState("");
  const id = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Connect a mailing provider before accepting subscriptions.
    setMessage("Newsletter signup is not available yet. You have not been subscribed.");
  }

  return (
    <form className="[&_input]:w-full [&_input]:min-h-12.5 [&_input]:[border:1px_solid_var(--indigo-800)] [&_input]:rounded-[5px] [&_input]:bg-[#1B2260c9] [&_input]:pt-3.25 [&_input]:pr-4 [&_input]:pb-3.25 [&_input]:pl-4 [&_input]:text-white [&_input]:[font-family:inherit] [&_input]:text-body [&_input]:font-[inherit] [&_input]:[font-style:inherit] [&_button]:w-full [&_button]:min-h-13.75 [&_button]:mt-3 [&_button]:[border:1px_solid_var(--cyan-600)] [&_button]:rounded-[6px] [&_button]:bg-[var(--indigo-800)] [&_button]:text-white [&_button]:[font-family:inherit] [&_button]:text-body [&_button]:font-[inherit] [&_button]:[font-style:inherit] [&_button]:cursor-pointer [&_button:hover]:bg-[var(--cyan-600)] components-footer-footer-newsletterForm [&_input::placeholder]:[color:var(--color-inverse-copy)] [&_input::placeholder]:[opacity:1]" onSubmit={handleSubmit}>
      <label className="absolute w-0.25 h-0.25 pt-0 pr-0 pb-0 pl-0 mt-[-1px] mr-[-1px] mb-[-1px] ml-[-1px] overflow-hidden whitespace-nowrap [border:0] components-footer-footer-srOnly [clip-path:inset(50%)]" htmlFor={`${id}-email`}>Your email address</label>
      <input id={`${id}-email`} name="email" type="email" autoComplete="email" placeholder="Your email address" required maxLength={254} aria-describedby={`${id}-privacy`} />
      <button className="button-secondary" type="submit">Subscribe</button>
      <p id={`${id}-privacy`} className="mt-3 mr-0 mb-0 ml-0 text-inverse-copy text-body">We respect your privacy. No spam,<br />just valuable insights.</p>
      <p role="status" className="mt-3.75 mr-0 mb-0 ml-0 text-[var(--warning)] text-body [&:empty]:hidden">{message}</p>
    </form>
  );
}
