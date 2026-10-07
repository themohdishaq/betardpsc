"use client";

import Image from "next/image";
import { serviceOfferings } from "@/lib/services";
import { company } from "@/lib/company";
import ContactLinks from "@/components/contact/contact-links";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Building2,
  ChevronDown,
  List,
  Mail,
  MessageCircle,
  Phone,
  UserRound,
} from "lucide-react";

const services = serviceOfferings.map((service) => service.title);

export default function ContactSection() {
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [draftUrl, setDraftUrl] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: string) => String(data.get(key) ?? "").trim();
    const body = [`Name: ${value("fullName")}`, `Email: ${value("email")}`, `Phone: ${value("phone")}`, `Organization: ${value("company")}`, `Service: ${value("service")}`, "", value("message")].join("\n");
    const href = `mailto:${company.email}?subject=${encodeURIComponent(`Website inquiry: ${value("service")}`)}&body=${encodeURIComponent(body)}`;
    setDraftUrl(href);
    setSubmissionMessage("Your inquiry is ready as an email draft. Review and send it in your email app; it has not been sent yet.");
    window.location.href = href;
  }

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#f3f9ff] text-ink scroll-mt-26.25"
      aria-labelledby="contact-heading"
    >
      <Image
        src="/images/financial-future-background.png"
        alt=""
        fill
        sizes="100vw"
        className="z-[-3] object-cover object-[center_right] opacity-[.7] max-[900px]:opacity-[.4]"
      />
      <div
        className="absolute z-[-2] top-0 right-0 bottom-0 left-0 components-home-financial-future-wash [background-image:linear-gradient(90deg,_#ffffffed_0%,_#ffffffdb_43%,_#ffffff85_67%,_#ffffff05_100%)] [@media(max-width:_900px)]:[background-image:linear-gradient(90deg,_#ffffffed,_#ffffffa6)]"
        aria-hidden="true"
      />
      <div
        className="absolute z-[-1] top-0 right-0 bottom-0 left-0 overflow-hidden pointer-events-none [&_span]:absolute [&_span]:block [&_span]:[transform:rotate(-45deg)]"
        aria-hidden="true"
      >
        <span className="w-110 h-110 top-[-340px] left-[43%] [border:75px_solid_#bfdefc65] max-[900px]:left-[60%]" />
        <span className="w-157.5 h-157.5 top-[19%] left-[-600px] [border:100px_solid_#dceeff80]" />
        <span className="w-112.5 h-112.5 bottom-[-370px] left-[41%] [border:100px_solid_#c4e2ff70] bg-[#cfe8ff40] max-[540px]:left-[15%]" />
        <span className="w-240 h-240 bottom-[-505px] right-[-650px] [border:75px_solid_#c2dfff80]" />
      </div>
      <div
        className={
          'absolute right-[3.6%] top-[12%] flex flex-col gap-y-5.75 gap-x-5.75 text-white font-heading text-caption tracking-[.14em] uppercase [transform:skewY(-12deg)] opacity-[.78] [&_i]:w-10 [&_i]:h-0.25 [&_i]:[background:currentColor] max-[900px]:hidden'
        }
        aria-hidden="true"
      >
        <span>People</span>
        <span>Insights</span>
        <span>Solutions</span>
        <span>Growth</span>
        <i />
        <span>
          A Brighter
          <br />
          Tomorrow
        </span>
      </div>
      <div className="relative grid grid-cols-[1fr_1fr] items-center gap-y-[clamp(30px,_3.4vw,_58px)] gap-x-[clamp(30px,_3.4vw,_58px)] max-w-420 mt-auto mr-auto mb-auto ml-auto pt-[clamp(60px,_7.3vw,_122px)] pr-[clamp(24px,_4.8vw,_80px)] pb-19 pl-[clamp(24px,_4.8vw,_80px)] max-[1200px]:pl-8 max-[1200px]:pr-8 max-[1200px]:gap-y-7.5 max-[1200px]:gap-x-7.5 max-[1000px]:grid-cols-1 max-[1000px]:max-w-200 max-[1000px]:pt-13.75 max-[1000px]:pr-7.5 max-[1000px]:pb-13.75 max-[1000px]:pl-7.5 max-[1000px]:gap-y-10 max-[1000px]:gap-x-10 max-[540px]:pt-10.5 max-[540px]:pr-5 max-[540px]:pb-10.5 max-[540px]:pl-5 max-[540px]:gap-y-8 max-[540px]:gap-x-8">
        <div className="min-w-0">
          <p
            className={`flex items-center gap-y-4.5 gap-x-4.5 mt-0 mr-0 mb-10.5 ml-0 text-ink text-caption tracking-[.14em] uppercase max-[1200px]:gap-y-3 max-[1200px]:gap-x-3 max-[1200px]:tracking-[.14em] max-[1000px]:mb-7 max-[540px]:gap-y-2.25 max-[540px]:gap-x-2.25 components-home-contact-section-eyebrow [&::before]:[flex-shrink:0] [&::before]:[width:60px] [&::before]:[height:3px] [&::before]:[margin-right:8px] [&::before]:[border-radius:2px] [&::before]:[background:#0864f9] [&::before]:[content:""] [@media(max-width:_1200px)]:[&::before]:[width:40px] [@media(max-width:_540px)]:[&::before]:[width:28px] [@media(max-width:_540px)]:[&::before]:[margin-right:0]`}
          >
            Partner <span>·</span> Plan <span>·</span> Progress
          </p>
          <h2
            id="contact-heading"
            className="mt-0 mr-0 mb-0 ml-0 text-ink font-heading text-section [&_em]:text-brand"
          >
            Let’s Build a Stronger
            <br />
            Financial Future
            <br />
            <em>Together.</em>
          </h2>
          <p className="mt-7.25 mr-0 mb-7.75 ml-0 text-brand text-body tracking-[-.018em] max-[540px]:mt-5.75 max-[540px]:mb-5.75">
            RD Prestige Services Corp. provides tailored financial and
            professional solutions for businesses and individuals, whatever your
            budget or stage of growth.
          </p>
          <address className="flex flex-col gap-2 not-italic text-body text-brand">
            {company.phones.map(({ href, label }) => <a key={href} href={href} className="flex min-h-11 w-fit items-center gap-3 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"><Phone size={20} aria-hidden="true" />{label}</a>)}
            <a href={company.emailHref} className="flex min-h-11 w-fit items-center gap-3 break-all hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"><Mail size={20} className="shrink-0" aria-hidden="true" />{company.email}</a>
          </address>
          <ContactLinks />
        </div>
        <div className="typography-surface min-w-0 pt-7.5 pr-7 pb-5.75 pl-7 [border:1px_solid_#c3e1ff] rounded-[14px] bg-[#ffffffed] shadow-[0_5px_25px_#0086e61a] max-[1200px]:pt-6.5 max-[1200px]:pr-5.5 max-[1200px]:pb-5.5 max-[1200px]:pl-5.5 max-[1000px]:pt-7 max-[1000px]:pr-7 max-[1000px]:pb-7 max-[1000px]:pl-7 max-[540px]:pt-6 max-[540px]:pr-4.5 max-[540px]:pb-5 max-[540px]:pl-4.5">
          <h3
            id="inquiry-heading"
            className="mt-0 mr-0 mb-0 ml-0 text-ink font-heading text-card-heading"
          >
            Get in Touch
          </h3>
          <p className="mt-2.5 mr-0 mb-7.5 ml-0 text-copy text-body max-[540px]:mb-6">
            Tell us about your needs and we’ll get back to you shortly.
          </p>
          <form
            onChange={() => { setDraftUrl(""); setSubmissionMessage(""); }}
            aria-labelledby="inquiry-heading"
            onSubmit={handleSubmit}
            className="grid grid-cols-2 gap-y-5.5 gap-x-5 max-[1200px]:gap-y-5 max-[1200px]:gap-x-3.5 max-[540px]:grid-cols-1 max-[540px]:gap-y-4.5 max-[540px]:gap-x-4.5"
          >
            <div className="min-w-0 [&_label]:block [&_label]:mb-2 [&_label]:text-ink [&_label]:text-body [&_label]:font-semibold [&_label_>_span]:text-[#e20000] [&_label_>_span]:ml-0.75">
              <label htmlFor="inquiry-name">
                Full Name <span aria-hidden="true">*</span>
              </label>
              <div className="relative [&_>_svg]:absolute [&_>_svg]:top-[50%] [&_>_svg]:left-4 [&_>_svg]:w-5.75 [&_>_svg]:h-5.75 [&_>_svg]:[transform:translateY(-50%)] [&_>_svg]:text-copy [&_>_svg]:pointer-events-none [&_>_svg]:[stroke-width:1.8] [&_input]:block [&_input]:w-full [&_input]:min-w-0 [&_input]:min-h-12.75 [&_input]:mt-0 [&_input]:mr-0 [&_input]:mb-0 [&_input]:ml-0 [&_input]:pt-3.25 [&_input]:pr-3.25 [&_input]:pb-3.25 [&_input]:pl-14 [&_input]:[border:1px_solid_#bfcee7] [&_input]:rounded-[7px] [&_input]:bg-[#fcfdff] [&_input]:text-ink [&_input]:[font-family:inherit] [&_input]:text-body [&_input]:font-[inherit] [&_input]:[font-style:inherit] [&_input]:[transition:border-color_150ms_ease,_box-shadow_150ms_ease] [&_select]:block [&_select]:w-full [&_select]:min-w-0 [&_select]:min-h-12.75 [&_select]:mt-0 [&_select]:mr-0 [&_select]:mb-0 [&_select]:ml-0 [&_select]:pt-3.25 [&_select]:pr-11 [&_select]:pb-3.25 [&_select]:pl-14 [&_select]:[border:1px_solid_#bfcee7] [&_select]:rounded-[7px] [&_select]:bg-[#fcfdff] [&_select]:text-ink [&_select]:[font-family:inherit] [&_select]:text-body [&_select]:font-[inherit] [&_select]:[font-style:inherit] [&_select]:[transition:border-color_150ms_ease,_box-shadow_150ms_ease] [&_select]:appearance-none [&_select]:cursor-pointer [&_textarea]:block [&_textarea]:w-full [&_textarea]:min-w-0 [&_textarea]:min-h-22.75 [&_textarea]:mt-0 [&_textarea]:mr-0 [&_textarea]:mb-0 [&_textarea]:ml-0 [&_textarea]:pt-3.25 [&_textarea]:pr-3.25 [&_textarea]:pb-3.25 [&_textarea]:pl-14 [&_textarea]:[border:1px_solid_#bfcee7] [&_textarea]:rounded-[7px] [&_textarea]:bg-[#fcfdff] [&_textarea]:text-ink [&_textarea]:[font-family:inherit] [&_textarea]:text-body [&_textarea]:font-[inherit] [&_textarea]:[font-style:inherit] [&_textarea]:[transition:border-color_150ms_ease,_box-shadow_150ms_ease] [&_textarea]:resize-y [&_select:invalid]:text-copy [&_select_option]:text-ink [&_input:focus-visible]:[outline:2px_solid_#3979ed] [&_input:focus-visible]:outline-offset-[2px] [&_input:focus-visible]:border-[#3979ed] [&_input:focus-visible]:shadow-[0_0_0_4px_#2674ef0c] [&_select:focus-visible]:[outline:2px_solid_#3979ed] [&_select:focus-visible]:outline-offset-[2px] [&_select:focus-visible]:border-[#3979ed] [&_select:focus-visible]:shadow-[0_0_0_4px_#2674ef0c] [&_textarea:focus-visible]:[outline:2px_solid_#3979ed] [&_textarea:focus-visible]:outline-offset-[2px] [&_textarea:focus-visible]:border-[#3979ed] [&_textarea:focus-visible]:shadow-[0_0_0_4px_#2674ef0c] max-[1200px]:[&_input]:pl-10.75 max-[1200px]:[&_select]:pl-10.75 max-[1200px]:[&_select]:pr-9 max-[1200px]:[&_textarea]:pl-10.75 max-[1200px]:[&_>_svg]:left-3 max-[1200px]:[&_>_svg]:w-5 motion-reduce:[&_input]:[transition:none] motion-reduce:[&_select]:[transition:none] motion-reduce:[&_textarea]:[transition:none] components-home-contact-section-inputWrap [&_input::placeholder]:[color:var(--color-copy)] [&_input::placeholder]:[opacity:1] [&_textarea::placeholder]:[color:var(--color-copy)] [&_textarea::placeholder]:[opacity:1] [&_.components-home-contact-section-chevron]:[right:15px] [&_.components-home-contact-section-chevron]:[left:auto] [&_.components-home-contact-section-chevron]:[width:21px]">
                <UserRound aria-hidden="true" />
                <input
                  id="inquiry-name"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  required
                  maxLength={120}
                />
              </div>
            </div>
            <div className="min-w-0 [&_label]:block [&_label]:mb-2 [&_label]:text-ink [&_label]:text-body [&_label]:font-semibold [&_label_>_span]:text-[#e20000] [&_label_>_span]:ml-0.75">
              <label htmlFor="inquiry-email">
                Email Address <span aria-hidden="true">*</span>
              </label>
              <div className="relative [&_>_svg]:absolute [&_>_svg]:top-[50%] [&_>_svg]:left-4 [&_>_svg]:w-5.75 [&_>_svg]:h-5.75 [&_>_svg]:[transform:translateY(-50%)] [&_>_svg]:text-copy [&_>_svg]:pointer-events-none [&_>_svg]:[stroke-width:1.8] [&_input]:block [&_input]:w-full [&_input]:min-w-0 [&_input]:min-h-12.75 [&_input]:mt-0 [&_input]:mr-0 [&_input]:mb-0 [&_input]:ml-0 [&_input]:pt-3.25 [&_input]:pr-3.25 [&_input]:pb-3.25 [&_input]:pl-14 [&_input]:[border:1px_solid_#bfcee7] [&_input]:rounded-[7px] [&_input]:bg-[#fcfdff] [&_input]:text-ink [&_input]:[font-family:inherit] [&_input]:text-body [&_input]:font-[inherit] [&_input]:[font-style:inherit] [&_input]:[transition:border-color_150ms_ease,_box-shadow_150ms_ease] [&_select]:block [&_select]:w-full [&_select]:min-w-0 [&_select]:min-h-12.75 [&_select]:mt-0 [&_select]:mr-0 [&_select]:mb-0 [&_select]:ml-0 [&_select]:pt-3.25 [&_select]:pr-11 [&_select]:pb-3.25 [&_select]:pl-14 [&_select]:[border:1px_solid_#bfcee7] [&_select]:rounded-[7px] [&_select]:bg-[#fcfdff] [&_select]:text-ink [&_select]:[font-family:inherit] [&_select]:text-body [&_select]:font-[inherit] [&_select]:[font-style:inherit] [&_select]:[transition:border-color_150ms_ease,_box-shadow_150ms_ease] [&_select]:appearance-none [&_select]:cursor-pointer [&_textarea]:block [&_textarea]:w-full [&_textarea]:min-w-0 [&_textarea]:min-h-22.75 [&_textarea]:mt-0 [&_textarea]:mr-0 [&_textarea]:mb-0 [&_textarea]:ml-0 [&_textarea]:pt-3.25 [&_textarea]:pr-3.25 [&_textarea]:pb-3.25 [&_textarea]:pl-14 [&_textarea]:[border:1px_solid_#bfcee7] [&_textarea]:rounded-[7px] [&_textarea]:bg-[#fcfdff] [&_textarea]:text-ink [&_textarea]:[font-family:inherit] [&_textarea]:text-body [&_textarea]:font-[inherit] [&_textarea]:[font-style:inherit] [&_textarea]:[transition:border-color_150ms_ease,_box-shadow_150ms_ease] [&_textarea]:resize-y [&_select:invalid]:text-copy [&_select_option]:text-ink [&_input:focus-visible]:[outline:2px_solid_#3979ed] [&_input:focus-visible]:outline-offset-[2px] [&_input:focus-visible]:border-[#3979ed] [&_input:focus-visible]:shadow-[0_0_0_4px_#2674ef0c] [&_select:focus-visible]:[outline:2px_solid_#3979ed] [&_select:focus-visible]:outline-offset-[2px] [&_select:focus-visible]:border-[#3979ed] [&_select:focus-visible]:shadow-[0_0_0_4px_#2674ef0c] [&_textarea:focus-visible]:[outline:2px_solid_#3979ed] [&_textarea:focus-visible]:outline-offset-[2px] [&_textarea:focus-visible]:border-[#3979ed] [&_textarea:focus-visible]:shadow-[0_0_0_4px_#2674ef0c] max-[1200px]:[&_input]:pl-10.75 max-[1200px]:[&_select]:pl-10.75 max-[1200px]:[&_select]:pr-9 max-[1200px]:[&_textarea]:pl-10.75 max-[1200px]:[&_>_svg]:left-3 max-[1200px]:[&_>_svg]:w-5 motion-reduce:[&_input]:[transition:none] motion-reduce:[&_select]:[transition:none] motion-reduce:[&_textarea]:[transition:none] components-home-contact-section-inputWrap [&_input::placeholder]:[color:var(--color-copy)] [&_input::placeholder]:[opacity:1] [&_textarea::placeholder]:[color:var(--color-copy)] [&_textarea::placeholder]:[opacity:1] [&_.components-home-contact-section-chevron]:[right:15px] [&_.components-home-contact-section-chevron]:[left:auto] [&_.components-home-contact-section-chevron]:[width:21px]">
                <Mail aria-hidden="true" />
                <input
                  id="inquiry-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email address"
                  required
                  maxLength={254}
                />
              </div>
            </div>
            <div className="min-w-0 [&_label]:block [&_label]:mb-2 [&_label]:text-ink [&_label]:text-body [&_label]:font-semibold [&_label_>_span]:text-[#e20000] [&_label_>_span]:ml-0.75">
              <label htmlFor="inquiry-phone">
                Phone Number <span aria-hidden="true">*</span>
              </label>
              <div className="relative [&_>_svg]:absolute [&_>_svg]:top-[50%] [&_>_svg]:left-4 [&_>_svg]:w-5.75 [&_>_svg]:h-5.75 [&_>_svg]:[transform:translateY(-50%)] [&_>_svg]:text-copy [&_>_svg]:pointer-events-none [&_>_svg]:[stroke-width:1.8] [&_input]:block [&_input]:w-full [&_input]:min-w-0 [&_input]:min-h-12.75 [&_input]:mt-0 [&_input]:mr-0 [&_input]:mb-0 [&_input]:ml-0 [&_input]:pt-3.25 [&_input]:pr-3.25 [&_input]:pb-3.25 [&_input]:pl-14 [&_input]:[border:1px_solid_#bfcee7] [&_input]:rounded-[7px] [&_input]:bg-[#fcfdff] [&_input]:text-ink [&_input]:[font-family:inherit] [&_input]:text-body [&_input]:font-[inherit] [&_input]:[font-style:inherit] [&_input]:[transition:border-color_150ms_ease,_box-shadow_150ms_ease] [&_select]:block [&_select]:w-full [&_select]:min-w-0 [&_select]:min-h-12.75 [&_select]:mt-0 [&_select]:mr-0 [&_select]:mb-0 [&_select]:ml-0 [&_select]:pt-3.25 [&_select]:pr-11 [&_select]:pb-3.25 [&_select]:pl-14 [&_select]:[border:1px_solid_#bfcee7] [&_select]:rounded-[7px] [&_select]:bg-[#fcfdff] [&_select]:text-ink [&_select]:[font-family:inherit] [&_select]:text-body [&_select]:font-[inherit] [&_select]:[font-style:inherit] [&_select]:[transition:border-color_150ms_ease,_box-shadow_150ms_ease] [&_select]:appearance-none [&_select]:cursor-pointer [&_textarea]:block [&_textarea]:w-full [&_textarea]:min-w-0 [&_textarea]:min-h-22.75 [&_textarea]:mt-0 [&_textarea]:mr-0 [&_textarea]:mb-0 [&_textarea]:ml-0 [&_textarea]:pt-3.25 [&_textarea]:pr-3.25 [&_textarea]:pb-3.25 [&_textarea]:pl-14 [&_textarea]:[border:1px_solid_#bfcee7] [&_textarea]:rounded-[7px] [&_textarea]:bg-[#fcfdff] [&_textarea]:text-ink [&_textarea]:[font-family:inherit] [&_textarea]:text-body [&_textarea]:font-[inherit] [&_textarea]:[font-style:inherit] [&_textarea]:[transition:border-color_150ms_ease,_box-shadow_150ms_ease] [&_textarea]:resize-y [&_select:invalid]:text-copy [&_select_option]:text-ink [&_input:focus-visible]:[outline:2px_solid_#3979ed] [&_input:focus-visible]:outline-offset-[2px] [&_input:focus-visible]:border-[#3979ed] [&_input:focus-visible]:shadow-[0_0_0_4px_#2674ef0c] [&_select:focus-visible]:[outline:2px_solid_#3979ed] [&_select:focus-visible]:outline-offset-[2px] [&_select:focus-visible]:border-[#3979ed] [&_select:focus-visible]:shadow-[0_0_0_4px_#2674ef0c] [&_textarea:focus-visible]:[outline:2px_solid_#3979ed] [&_textarea:focus-visible]:outline-offset-[2px] [&_textarea:focus-visible]:border-[#3979ed] [&_textarea:focus-visible]:shadow-[0_0_0_4px_#2674ef0c] max-[1200px]:[&_input]:pl-10.75 max-[1200px]:[&_select]:pl-10.75 max-[1200px]:[&_select]:pr-9 max-[1200px]:[&_textarea]:pl-10.75 max-[1200px]:[&_>_svg]:left-3 max-[1200px]:[&_>_svg]:w-5 motion-reduce:[&_input]:[transition:none] motion-reduce:[&_select]:[transition:none] motion-reduce:[&_textarea]:[transition:none] components-home-contact-section-inputWrap [&_input::placeholder]:[color:var(--color-copy)] [&_input::placeholder]:[opacity:1] [&_textarea::placeholder]:[color:var(--color-copy)] [&_textarea::placeholder]:[opacity:1] [&_.components-home-contact-section-chevron]:[right:15px] [&_.components-home-contact-section-chevron]:[left:auto] [&_.components-home-contact-section-chevron]:[width:21px]">
                <Phone aria-hidden="true" />
                <input
                  id="inquiry-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="(123) 456-7890"
                  required
                  maxLength={40}
                />
              </div>
            </div>
            <div className="min-w-0 [&_label]:block [&_label]:mb-2 [&_label]:text-ink [&_label]:text-body [&_label]:font-semibold [&_label_>_span]:text-[#e20000] [&_label_>_span]:ml-0.75">
              <label htmlFor="inquiry-company">
                Company / Organization <span aria-hidden="true">*</span>
              </label>
              <div className="relative [&_>_svg]:absolute [&_>_svg]:top-[50%] [&_>_svg]:left-4 [&_>_svg]:w-5.75 [&_>_svg]:h-5.75 [&_>_svg]:[transform:translateY(-50%)] [&_>_svg]:text-copy [&_>_svg]:pointer-events-none [&_>_svg]:[stroke-width:1.8] [&_input]:block [&_input]:w-full [&_input]:min-w-0 [&_input]:min-h-12.75 [&_input]:mt-0 [&_input]:mr-0 [&_input]:mb-0 [&_input]:ml-0 [&_input]:pt-3.25 [&_input]:pr-3.25 [&_input]:pb-3.25 [&_input]:pl-14 [&_input]:[border:1px_solid_#bfcee7] [&_input]:rounded-[7px] [&_input]:bg-[#fcfdff] [&_input]:text-ink [&_input]:[font-family:inherit] [&_input]:text-body [&_input]:font-[inherit] [&_input]:[font-style:inherit] [&_input]:[transition:border-color_150ms_ease,_box-shadow_150ms_ease] [&_select]:block [&_select]:w-full [&_select]:min-w-0 [&_select]:min-h-12.75 [&_select]:mt-0 [&_select]:mr-0 [&_select]:mb-0 [&_select]:ml-0 [&_select]:pt-3.25 [&_select]:pr-11 [&_select]:pb-3.25 [&_select]:pl-14 [&_select]:[border:1px_solid_#bfcee7] [&_select]:rounded-[7px] [&_select]:bg-[#fcfdff] [&_select]:text-ink [&_select]:[font-family:inherit] [&_select]:text-body [&_select]:font-[inherit] [&_select]:[font-style:inherit] [&_select]:[transition:border-color_150ms_ease,_box-shadow_150ms_ease] [&_select]:appearance-none [&_select]:cursor-pointer [&_textarea]:block [&_textarea]:w-full [&_textarea]:min-w-0 [&_textarea]:min-h-22.75 [&_textarea]:mt-0 [&_textarea]:mr-0 [&_textarea]:mb-0 [&_textarea]:ml-0 [&_textarea]:pt-3.25 [&_textarea]:pr-3.25 [&_textarea]:pb-3.25 [&_textarea]:pl-14 [&_textarea]:[border:1px_solid_#bfcee7] [&_textarea]:rounded-[7px] [&_textarea]:bg-[#fcfdff] [&_textarea]:text-ink [&_textarea]:[font-family:inherit] [&_textarea]:text-body [&_textarea]:font-[inherit] [&_textarea]:[font-style:inherit] [&_textarea]:[transition:border-color_150ms_ease,_box-shadow_150ms_ease] [&_textarea]:resize-y [&_select:invalid]:text-copy [&_select_option]:text-ink [&_input:focus-visible]:[outline:2px_solid_#3979ed] [&_input:focus-visible]:outline-offset-[2px] [&_input:focus-visible]:border-[#3979ed] [&_input:focus-visible]:shadow-[0_0_0_4px_#2674ef0c] [&_select:focus-visible]:[outline:2px_solid_#3979ed] [&_select:focus-visible]:outline-offset-[2px] [&_select:focus-visible]:border-[#3979ed] [&_select:focus-visible]:shadow-[0_0_0_4px_#2674ef0c] [&_textarea:focus-visible]:[outline:2px_solid_#3979ed] [&_textarea:focus-visible]:outline-offset-[2px] [&_textarea:focus-visible]:border-[#3979ed] [&_textarea:focus-visible]:shadow-[0_0_0_4px_#2674ef0c] max-[1200px]:[&_input]:pl-10.75 max-[1200px]:[&_select]:pl-10.75 max-[1200px]:[&_select]:pr-9 max-[1200px]:[&_textarea]:pl-10.75 max-[1200px]:[&_>_svg]:left-3 max-[1200px]:[&_>_svg]:w-5 motion-reduce:[&_input]:[transition:none] motion-reduce:[&_select]:[transition:none] motion-reduce:[&_textarea]:[transition:none] components-home-contact-section-inputWrap [&_input::placeholder]:[color:var(--color-copy)] [&_input::placeholder]:[opacity:1] [&_textarea::placeholder]:[color:var(--color-copy)] [&_textarea::placeholder]:[opacity:1] [&_.components-home-contact-section-chevron]:[right:15px] [&_.components-home-contact-section-chevron]:[left:auto] [&_.components-home-contact-section-chevron]:[width:21px]">
                <Building2 aria-hidden="true" />
                <input
                  id="inquiry-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Your company or organization"
                  required
                  maxLength={160}
                />
              </div>
            </div>
            <div className="min-w-0 [&_label]:block [&_label]:mb-2 [&_label]:text-ink [&_label]:text-body [&_label]:font-semibold [&_label_>_span]:text-[#e20000] [&_label_>_span]:ml-0.75 [grid-column:1_/_-1]">
              <label htmlFor="inquiry-service">
                Service Interested In <span aria-hidden="true">*</span>
              </label>
              <div className="relative [&_>_svg]:absolute [&_>_svg]:top-[50%] [&_>_svg]:left-4 [&_>_svg]:w-5.75 [&_>_svg]:h-5.75 [&_>_svg]:[transform:translateY(-50%)] [&_>_svg]:text-copy [&_>_svg]:pointer-events-none [&_>_svg]:[stroke-width:1.8] [&_input]:block [&_input]:w-full [&_input]:min-w-0 [&_input]:min-h-12.75 [&_input]:mt-0 [&_input]:mr-0 [&_input]:mb-0 [&_input]:ml-0 [&_input]:pt-3.25 [&_input]:pr-3.25 [&_input]:pb-3.25 [&_input]:pl-14 [&_input]:[border:1px_solid_#bfcee7] [&_input]:rounded-[7px] [&_input]:bg-[#fcfdff] [&_input]:text-ink [&_input]:[font-family:inherit] [&_input]:text-body [&_input]:font-[inherit] [&_input]:[font-style:inherit] [&_input]:[transition:border-color_150ms_ease,_box-shadow_150ms_ease] [&_select]:block [&_select]:w-full [&_select]:min-w-0 [&_select]:min-h-12.75 [&_select]:mt-0 [&_select]:mr-0 [&_select]:mb-0 [&_select]:ml-0 [&_select]:pt-3.25 [&_select]:pr-11 [&_select]:pb-3.25 [&_select]:pl-14 [&_select]:[border:1px_solid_#bfcee7] [&_select]:rounded-[7px] [&_select]:bg-[#fcfdff] [&_select]:text-ink [&_select]:[font-family:inherit] [&_select]:text-body [&_select]:font-[inherit] [&_select]:[font-style:inherit] [&_select]:[transition:border-color_150ms_ease,_box-shadow_150ms_ease] [&_select]:appearance-none [&_select]:cursor-pointer [&_textarea]:block [&_textarea]:w-full [&_textarea]:min-w-0 [&_textarea]:min-h-22.75 [&_textarea]:mt-0 [&_textarea]:mr-0 [&_textarea]:mb-0 [&_textarea]:ml-0 [&_textarea]:pt-3.25 [&_textarea]:pr-3.25 [&_textarea]:pb-3.25 [&_textarea]:pl-14 [&_textarea]:[border:1px_solid_#bfcee7] [&_textarea]:rounded-[7px] [&_textarea]:bg-[#fcfdff] [&_textarea]:text-ink [&_textarea]:[font-family:inherit] [&_textarea]:text-body [&_textarea]:font-[inherit] [&_textarea]:[font-style:inherit] [&_textarea]:[transition:border-color_150ms_ease,_box-shadow_150ms_ease] [&_textarea]:resize-y [&_select:invalid]:text-copy [&_select_option]:text-ink [&_input:focus-visible]:[outline:2px_solid_#3979ed] [&_input:focus-visible]:outline-offset-[2px] [&_input:focus-visible]:border-[#3979ed] [&_input:focus-visible]:shadow-[0_0_0_4px_#2674ef0c] [&_select:focus-visible]:[outline:2px_solid_#3979ed] [&_select:focus-visible]:outline-offset-[2px] [&_select:focus-visible]:border-[#3979ed] [&_select:focus-visible]:shadow-[0_0_0_4px_#2674ef0c] [&_textarea:focus-visible]:[outline:2px_solid_#3979ed] [&_textarea:focus-visible]:outline-offset-[2px] [&_textarea:focus-visible]:border-[#3979ed] [&_textarea:focus-visible]:shadow-[0_0_0_4px_#2674ef0c] max-[1200px]:[&_input]:pl-10.75 max-[1200px]:[&_select]:pl-10.75 max-[1200px]:[&_select]:pr-9 max-[1200px]:[&_textarea]:pl-10.75 max-[1200px]:[&_>_svg]:left-3 max-[1200px]:[&_>_svg]:w-5 motion-reduce:[&_input]:[transition:none] motion-reduce:[&_select]:[transition:none] motion-reduce:[&_textarea]:[transition:none] components-home-contact-section-inputWrap [&_input::placeholder]:[color:var(--color-copy)] [&_input::placeholder]:[opacity:1] [&_textarea::placeholder]:[color:var(--color-copy)] [&_textarea::placeholder]:[opacity:1] [&_.components-home-contact-section-chevron]:[right:15px] [&_.components-home-contact-section-chevron]:[left:auto] [&_.components-home-contact-section-chevron]:[width:21px]">
                <List aria-hidden="true" />
                <select
                  id="inquiry-service"
                  name="service"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="components-home-contact-section-chevron"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div className="min-w-0 [&_label]:block [&_label]:mb-2 [&_label]:text-ink [&_label]:text-body [&_label]:font-semibold [&_label_>_span]:text-[#e20000] [&_label_>_span]:ml-0.75 [grid-column:1_/_-1]">
              <label htmlFor="inquiry-message">
                Message <span aria-hidden="true">*</span>
              </label>
              <div className="relative [&_>_svg]:absolute [&_>_svg]:top-[50%] [&_>_svg]:left-4 [&_>_svg]:w-5.75 [&_>_svg]:h-5.75 [&_>_svg]:[transform:translateY(-50%)] [&_>_svg]:text-copy [&_>_svg]:pointer-events-none [&_>_svg]:[stroke-width:1.8] [&_input]:block [&_input]:w-full [&_input]:min-w-0 [&_input]:min-h-12.75 [&_input]:mt-0 [&_input]:mr-0 [&_input]:mb-0 [&_input]:ml-0 [&_input]:pt-3.25 [&_input]:pr-3.25 [&_input]:pb-3.25 [&_input]:pl-14 [&_input]:[border:1px_solid_#bfcee7] [&_input]:rounded-[7px] [&_input]:bg-[#fcfdff] [&_input]:text-ink [&_input]:[font-family:inherit] [&_input]:text-body [&_input]:font-[inherit] [&_input]:[font-style:inherit] [&_input]:[transition:border-color_150ms_ease,_box-shadow_150ms_ease] [&_select]:block [&_select]:w-full [&_select]:min-w-0 [&_select]:min-h-12.75 [&_select]:mt-0 [&_select]:mr-0 [&_select]:mb-0 [&_select]:ml-0 [&_select]:pt-3.25 [&_select]:pr-11 [&_select]:pb-3.25 [&_select]:pl-14 [&_select]:[border:1px_solid_#bfcee7] [&_select]:rounded-[7px] [&_select]:bg-[#fcfdff] [&_select]:text-ink [&_select]:[font-family:inherit] [&_select]:text-body [&_select]:font-[inherit] [&_select]:[font-style:inherit] [&_select]:[transition:border-color_150ms_ease,_box-shadow_150ms_ease] [&_select]:appearance-none [&_select]:cursor-pointer [&_textarea]:block [&_textarea]:w-full [&_textarea]:min-w-0 [&_textarea]:min-h-22.75 [&_textarea]:mt-0 [&_textarea]:mr-0 [&_textarea]:mb-0 [&_textarea]:ml-0 [&_textarea]:pt-3.25 [&_textarea]:pr-3.25 [&_textarea]:pb-3.25 [&_textarea]:pl-14 [&_textarea]:[border:1px_solid_#bfcee7] [&_textarea]:rounded-[7px] [&_textarea]:bg-[#fcfdff] [&_textarea]:text-ink [&_textarea]:[font-family:inherit] [&_textarea]:text-body [&_textarea]:font-[inherit] [&_textarea]:[font-style:inherit] [&_textarea]:[transition:border-color_150ms_ease,_box-shadow_150ms_ease] [&_textarea]:resize-y [&_select:invalid]:text-copy [&_select_option]:text-ink [&_input:focus-visible]:[outline:2px_solid_#3979ed] [&_input:focus-visible]:outline-offset-[2px] [&_input:focus-visible]:border-[#3979ed] [&_input:focus-visible]:shadow-[0_0_0_4px_#2674ef0c] [&_select:focus-visible]:[outline:2px_solid_#3979ed] [&_select:focus-visible]:outline-offset-[2px] [&_select:focus-visible]:border-[#3979ed] [&_select:focus-visible]:shadow-[0_0_0_4px_#2674ef0c] [&_textarea:focus-visible]:[outline:2px_solid_#3979ed] [&_textarea:focus-visible]:outline-offset-[2px] [&_textarea:focus-visible]:border-[#3979ed] [&_textarea:focus-visible]:shadow-[0_0_0_4px_#2674ef0c] max-[1200px]:[&_input]:pl-10.75 max-[1200px]:[&_select]:pl-10.75 max-[1200px]:[&_select]:pr-9 max-[1200px]:[&_textarea]:pl-10.75 max-[1200px]:[&_>_svg]:left-3 max-[1200px]:[&_>_svg]:w-5 motion-reduce:[&_input]:[transition:none] motion-reduce:[&_select]:[transition:none] motion-reduce:[&_textarea]:[transition:none] components-home-contact-section-inputWrap [&_input::placeholder]:[color:var(--color-copy)] [&_input::placeholder]:[opacity:1] [&_textarea::placeholder]:[color:var(--color-copy)] [&_textarea::placeholder]:[opacity:1] [&_.components-home-contact-section-chevron]:[right:15px] [&_.components-home-contact-section-chevron]:[left:auto] [&_.components-home-contact-section-chevron]:[width:21px] [&_>_svg]:top-4.25 [&_>_svg]:[transform:none]">
                <MessageCircle aria-hidden="true" />
                <textarea
                  id="inquiry-message"
                  name="message"
                  placeholder="Tell us how we can help..."
                  required
                  rows={3}
                  maxLength={5000}
                />
              </div>
            </div>
            <div className="[grid-column:1_/_-1]">
              <button
                className="typography-inverse flex items-center justify-center gap-y-4.5 gap-x-4.5 w-full min-h-16.5 pt-3.75 pr-5.5 pb-3.75 pl-5.5 [border:1px_solid_#0059dc] rounded-[8px] text-white text-body font-medium cursor-pointer shadow-[0_7px_18px_#0555c514] [transition:background_160ms_ease,_box-shadow_160ms_ease] hover:shadow-[0_9px_22px_#0555c526] focus-visible:[outline:3px_solid_#3979ed] focus-visible:outline-offset-[4px] max-[540px]:min-h-14.25 motion-reduce:[transition:none] components-home-contact-section-submit [background-image:linear-gradient(#0564ef,_#0043ba)] [&:hover]:[background-image:linear-gradient(#0057db,_#060a35)]"
                type="submit"
              >
                Prepare Inquiry <ArrowRight size={27} aria-hidden="true" />
              </button>
              <p className="mt-2.5 mr-0 mb-0 ml-0 text-copy text-center text-body">
                Opens an email draft for you to review and send.
              </p>
              <p
                className="mt-3 mr-0 mb-0 ml-0 pt-3 pr-3 pb-3 pl-3 [border:1px_solid_#eed59a] rounded-[6px] bg-[#fffbef] text-[#735216] text-body [&:empty]:hidden"
                role="status"
                aria-live="polite"
              >
                {submissionMessage}
                {draftUrl && <> <a href={draftUrl} className="underline">Open the draft again</a> or email <a href={company.emailHref} className="underline">{company.email}</a>.</>}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
