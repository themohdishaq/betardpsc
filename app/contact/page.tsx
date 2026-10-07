import { company } from "@/lib/company";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, PhoneCall } from "lucide-react";
import ContactForm from "@/components/contact/contact-form";
import ContactLinks from "@/components/contact/contact-links";

export default function ContactPage() {
  return (
    <main className="font-body text-[#0b2143] [&_h1]:font-heading [&_h1]:font-bold [&_h2]:font-heading [&_h2]:font-bold [&_a:hover]:text-[#087de0] [&_a:focus-visible]:[outline:3px_solid_#2d92ed] [&_a:focus-visible]:outline-offset-[4px] [&_button:focus-visible]:[outline:3px_solid_#2d92ed] [&_button:focus-visible]:outline-offset-[4px]">
      <section className="relative isolate overflow-hidden min-h-93.75 bg-[#001e39] text-[#fff] [&_h1]:mt-0 [&_h1]:mr-0 [&_h1]:mb-0 [&_h1]:ml-0 [&_h1]:text-title [&_h1_span]:text-[#269fe9] max-[540px]:min-h-77.5" aria-labelledby="contact-page-title">
        <Image src="/images/contact/hero.png" alt="White mug with the words People Process Possibilities on a notebook in a bright office" fill sizes="100vw" preload className="z-[-2] object-cover object-[center_54%]" />
        <div className="absolute z-[-1] top-0 right-[46%] bottom-0 left-0 max-[800px]:top-0 max-[800px]:right-0 max-[800px]:bottom-0 max-[800px]:left-0 app-contact-page-heroPanel [background-image:linear-gradient(115deg,_#001e3bfc,_#001e38f0)] [clip-path:polygon(0_0,_84%_0,_100%_100%,_0_100%)] [@media(max-width:_800px)]:[clip-path:none] [@media(max-width:_800px)]:[background-image:linear-gradient(90deg,_#001b34f5,_#001b34df_55%,_#001b3450)]" aria-hidden="true" />
        <div className="max-w-360 mt-auto mr-auto mb-auto ml-auto pt-13.75 pr-[clamp(24px,_5vw,_72px)] pb-16.25 pl-[clamp(24px,_5vw,_72px)] [&_>_p]:mt-0 [&_>_p]:mr-0 [&_>_p]:mb-0 [&_>_p]:ml-0 [&_>_p]:max-w-[48%] [&_>_p]:text-body max-[800px]:[&_>_p]:max-w-[80%] max-[540px]:pt-8 max-[540px]:pr-5 max-[540px]:pb-11.25 max-[540px]:pl-5 max-[540px]:[&_>_p]:max-w-full">
          <nav className="flex items-center gap-y-3.5 gap-x-3.5 text-[#22b7f2] text-body mb-8.5 max-[540px]:mb-7.5" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Contact Us</span></nav>
          <h1 id="contact-page-title">Get in <span>Touch</span></h1>
          <span className="block w-12 h-0.75 mt-5.75 mr-0 mb-5.75 ml-0 bg-[#ff1837] app-contact-page-redLine" aria-hidden="true" />
          <p>Have a question or need expert guidance?<br />We’re here to help.</p>
        </div>
        <p className="absolute top-8.75 right-[3%] mt-0 mr-0 mb-0 ml-0 text-right text-[#0b3153] text-caption font-bold tracking-[.14em] uppercase max-[800px]:hidden app-contact-page-heroMotto [&_.app-contact-page-redLine]:[width:35px] [&_.app-contact-page-redLine]:[margin:15px_0_0_auto]">Let’s<br />Build a<br />Brighter<br />Tomorrow<span className="block w-12 h-0.75 mt-5.75 mr-0 mb-5.75 ml-0 bg-[#ff1837] app-contact-page-redLine" aria-hidden="true" /></p>
      </section>

      <section className="app-contact-page-contactSection [background-image:linear-gradient(115deg,_#f5faff,_#fbfdff,_#f0f6fb)]" aria-label="Contact our team">
        <div className="grid grid-cols-[.85fr_1.45fr] gap-y-[clamp(30px,_4vw,_60px)] gap-x-[clamp(30px,_4vw,_60px)] max-w-360 mt-auto mr-auto mb-auto ml-auto pt-11.25 pr-[clamp(24px,_5vw,_72px)] pb-12.5 pl-[clamp(24px,_5vw,_72px)] [&_>_div]:min-w-0 [&_h2]:mt-0 [&_h2]:mr-0 [&_h2]:mb-0 [&_h2]:ml-0 [&_h2]:text-section max-[1050px]:gap-y-7.5 max-[1050px]:gap-x-7.5 max-[1050px]:grid-cols-[.9fr_1.3fr] max-[800px]:grid-cols-1 max-[800px]:max-w-180 max-[800px]:gap-y-8.75 max-[800px]:gap-x-8.75 max-[540px]:pt-8 max-[540px]:pr-5 max-[540px]:pb-8 max-[540px]:pl-5 app-contact-page-columns [&_.app-contact-page-redLine]:[width:43px] [&_.app-contact-page-redLine]:[margin:17px_0_20px]">
          <div className="min-w-0">
            <h2>Our Office</h2><span className="block w-12 h-0.75 mt-5.75 mr-0 mb-5.75 ml-0 bg-[#ff1837] app-contact-page-redLine" aria-hidden="true" />
            <address className="flex flex-col gap-y-7 gap-x-7 pt-7 pr-7 pb-7 pl-7 rounded-[9px] bg-[#fff] shadow-[0_6px_20px_#21497607] not-italic [&_>_div]:flex [&_>_div]:items-start [&_>_div]:gap-y-5.5 [&_>_div]:gap-x-5.5 [&_svg]:shrink-0 [&_svg]:w-7.5 [&_svg]:h-7.5 [&_svg]:text-[#0071e8] [&_svg]:[stroke-width:2.1] [&_p]:mt-0 [&_p]:mr-0 [&_p]:mb-0 [&_p]:ml-0 [&_p]:text-body [&_strong]:font-semibold [&_a]:font-semibold [&_a]:[overflow-wrap:anywhere] [&_p_>_span]:block [&_p_>_span]:mt-1.5 [&_p_>_span]:text-[#5b6b86] [&_p_>_span]:text-body max-[1050px]:pt-5.75 max-[1050px]:pr-5.75 max-[1050px]:pb-5.75 max-[1050px]:pl-5.75 max-[1050px]:[&_>_div]:gap-y-4 max-[1050px]:[&_>_div]:gap-x-4 max-[540px]:pt-5.75 max-[540px]:pr-5 max-[540px]:pb-5.75 max-[540px]:pl-5">
              <div><MapPin aria-hidden="true" /><p><strong>Canada (Head Office)</strong><span>Serving clients across Canada<br />and internationally</span></p></div>
              <div><PhoneCall aria-hidden="true" /><p>{company.phones.map(({ href, label }) => <a key={href} href={href} className="block w-fit min-h-11 content-center hover:underline focus-visible:outline-2 focus-visible:outline-offset-4">{label}</a>)}<span>Mon – Fri: 9:00 AM – 6:00 PM EST</span></p></div>
              <div><Mail aria-hidden="true" /><p><a href={company.emailHref}>{company.email}</a></p></div>
            </address>
            <div className="overflow-hidden [border:1px_solid_#e3edf5] rounded-[9px] mt-6.25 bg-[#eaf1f5] shadow-[0_4px_15px_#21497606] [&_iframe]:block [&_iframe]:w-full [&_iframe]:h-52.5 [&_iframe]:[border:0] max-[800px]:[&_iframe]:h-65 max-[540px]:[&_iframe]:h-55">
              <div className="flex min-h-48 flex-col items-start justify-center gap-3 bg-gradient-to-br from-[#eaf2fb] to-[#f6f9fe] p-6 text-[#112744]">
                <MapPin size={32} className="text-[#2E357E]" aria-hidden="true" />
                <h3 className="text-card-heading">Find RD Prestidge Services Corp.</h3>
                <p className="text-body text-[#52617f]">View our company location and get directions on Google Maps.</p>
              </div>
              <a href={company.maps} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center gap-2 rounded-b-lg bg-[#fff] px-4 py-3 text-small font-semibold text-[#135594] hover:bg-[#f5f9ff] focus-visible:outline-2 focus-visible:outline-offset-4"><MapPin size={18} aria-hidden="true" /><span>Open company location in Google Maps</span><ArrowUpRight size={17} className="ml-auto shrink-0" aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
            </div>
            <ContactLinks />
          </div>
          <div className="flex flex-col">
            <h2 id="message-heading">Send Us a Message</h2><span className="block w-12 h-0.75 mt-5.75 mr-0 mb-5.75 ml-0 bg-[#ff1837] app-contact-page-redLine" aria-hidden="true" />
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
