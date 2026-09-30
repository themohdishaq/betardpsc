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
    <form className="[&_input]:w-full [&_input]:min-h-12.5 [&_input]:[border:1px_solid_#64798b] [&_input]:rounded-[5px] [&_input]:bg-[#182c3dc9] [&_input]:pt-3.25 [&_input]:pr-4 [&_input]:pb-3.25 [&_input]:pl-4 [&_input]:text-[#fff] [&_input]:[font-family:inherit] [&_input]:text-[length:16px] [&_input]:font-[inherit] [&_input]:[font-style:inherit] [&_input]:leading-[inherit] [&_button]:w-full [&_button]:min-h-13.75 [&_button]:mt-3 [&_button]:[border:1px_solid_#0689ff] [&_button]:rounded-[6px] [&_button]:bg-[#0064dc] [&_button]:text-[#fff] [&_button]:[font-family:inherit] [&_button]:text-[length:20px] [&_button]:font-[inherit] [&_button]:[font-style:inherit] [&_button]:leading-[inherit] [&_button]:cursor-pointer [&_button:hover]:bg-[#0879f1] components-footer-footer-newsletterForm [&_input::placeholder]:[color:#d7deeb] [&_input::placeholder]:[opacity:1]" onSubmit={handleSubmit}>
      <label className="absolute w-0.25 h-0.25 pt-0 pr-0 pb-0 pl-0 mt-[-1px] mr-[-1px] mb-[-1px] ml-[-1px] overflow-hidden whitespace-nowrap [border:0] components-footer-footer-srOnly [clip-path:inset(50%)]" htmlFor={`${id}-email`}>Your email address</label>
      <input id={`${id}-email`} name="email" type="email" autoComplete="email" placeholder="Your email address" required maxLength={254} aria-describedby={`${id}-privacy`} />
      <button type="submit">Subscribe</button>
      <p id={`${id}-privacy`} className="mt-3 mr-0 mb-0 ml-0 text-[#d1dded] text-[length:15px] leading-[1.5]">We respect your privacy. No spam,<br />just valuable insights.</p>
      <p role="status" className="mt-3.75 mr-0 mb-0 ml-0 text-[#ffe1a7] text-[length:14px] leading-[1.5] [&:empty]:hidden">{message}</p>
    </form>
  );
}
