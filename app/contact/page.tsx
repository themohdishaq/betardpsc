import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, PhoneCall } from "lucide-react";
import ContactForm from "@/components/contact/contact-form";

export default function ContactPage() {
  return (
    <main className="font-body text-[#0b2143] [&_h1]:font-serif [&_h1]:font-bold [&_h2]:font-serif [&_h2]:font-bold [&_a:hover]:text-[#087de0] [&_a:focus-visible]:[outline:3px_solid_#2d92ed] [&_a:focus-visible]:outline-offset-[4px] [&_button:focus-visible]:[outline:3px_solid_#2d92ed] [&_button:focus-visible]:outline-offset-[4px]">
      <section className="relative isolate overflow-hidden min-h-93.75 bg-[#001e39] text-[#fff] [&_h1]:mt-0 [&_h1]:mr-0 [&_h1]:mb-0 [&_h1]:ml-0 [&_h1]:text-[length:clamp(46px,_5vw,_72px)] [&_h1]:leading-[1.05] [&_h1]:tracking-[-.02em] [&_h1_span]:text-[#269fe9] max-[540px]:min-h-77.5 max-[540px]:[&_h1]:text-[length:47px]" aria-labelledby="contact-page-title">
        <Image src="/images/contact/hero.png" alt="White mug with the words People Process Possibilities on a notebook in a bright office" fill sizes="100vw" preload className="z-[-2] object-cover object-[center_54%]" />
        <div className="absolute z-[-1] top-0 right-[46%] bottom-0 left-0 max-[800px]:top-0 max-[800px]:right-0 max-[800px]:bottom-0 max-[800px]:left-0 app-contact-page-heroPanel [background-image:linear-gradient(115deg,_#001e3bfc,_#001e38f0)] [clip-path:polygon(0_0,_84%_0,_100%_100%,_0_100%)] [@media(max-width:_800px)]:[clip-path:none] [@media(max-width:_800px)]:[background-image:linear-gradient(90deg,_#001b34f5,_#001b34df_55%,_#001b3450)]" aria-hidden="true" />
        <div className="max-w-360 mt-auto mr-auto mb-auto ml-auto pt-13.75 pr-[clamp(24px,_5vw,_72px)] pb-16.25 pl-[clamp(24px,_5vw,_72px)] [&_>_p]:mt-0 [&_>_p]:mr-0 [&_>_p]:mb-0 [&_>_p]:ml-0 [&_>_p]:max-w-[48%] [&_>_p]:text-[length:clamp(20px,_1.8vw,_26px)] [&_>_p]:leading-[1.5] max-[800px]:[&_>_p]:max-w-[80%] max-[540px]:pt-8 max-[540px]:pr-5 max-[540px]:pb-11.25 max-[540px]:pl-5 max-[540px]:[&_>_p]:max-w-full max-[540px]:[&_>_p]:text-[length:19px]">
          <nav className="flex items-center gap-y-3.5 gap-x-3.5 text-[#22b7f2] text-[length:16px] mb-8.5 max-[540px]:text-[length:14px] max-[540px]:mb-7.5" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Contact Us</span></nav>
          <h1 id="contact-page-title">Get in <span>Touch</span></h1>
          <span className="block w-12 h-0.75 mt-5.75 mr-0 mb-5.75 ml-0 bg-[#ff1837] app-contact-page-redLine" aria-hidden="true" />
          <p>Have a question or need expert guidance?<br />We’re here to help.</p>
        </div>
        <p className="absolute top-8.75 right-[3%] mt-0 mr-0 mb-0 ml-0 text-right text-[#0b3153] text-[length:11px] font-bold leading-[1.8] tracking-[.18em] uppercase max-[800px]:hidden app-contact-page-heroMotto [&_.app-contact-page-redLine]:[width:35px] [&_.app-contact-page-redLine]:[margin:15px_0_0_auto]">Let’s<br />Build a<br />Brighter<br />Tomorrow<span className="block w-12 h-0.75 mt-5.75 mr-0 mb-5.75 ml-0 bg-[#ff1837] app-contact-page-redLine" aria-hidden="true" /></p>
      </section>

      <section className="app-contact-page-contactSection [background-image:linear-gradient(115deg,_#f5faff,_#fbfdff,_#f0f6fb)]" aria-label="Contact our team">
        <div className="grid grid-cols-[.85fr_1.45fr] gap-y-[clamp(30px,_4vw,_60px)] gap-x-[clamp(30px,_4vw,_60px)] max-w-360 mt-auto mr-auto mb-auto ml-auto pt-11.25 pr-[clamp(24px,_5vw,_72px)] pb-12.5 pl-[clamp(24px,_5vw,_72px)] [&_>_div]:min-w-0 [&_h2]:mt-0 [&_h2]:mr-0 [&_h2]:mb-0 [&_h2]:ml-0 [&_h2]:text-[length:clamp(28px,_2.5vw,_36px)] [&_h2]:leading-[1.2] [&_h2]:tracking-[-.02em] max-[1050px]:gap-y-7.5 max-[1050px]:gap-x-7.5 max-[1050px]:grid-cols-[.9fr_1.3fr] max-[800px]:grid-cols-1 max-[800px]:max-w-180 max-[800px]:gap-y-8.75 max-[800px]:gap-x-8.75 max-[540px]:pt-8 max-[540px]:pr-5 max-[540px]:pb-8 max-[540px]:pl-5 app-contact-page-columns [&_.app-contact-page-redLine]:[width:43px] [&_.app-contact-page-redLine]:[margin:17px_0_20px]">
          <div className="min-w-0">
            <h2>Our Office</h2><span className="block w-12 h-0.75 mt-5.75 mr-0 mb-5.75 ml-0 bg-[#ff1837] app-contact-page-redLine" aria-hidden="true" />
            <address className="flex flex-col gap-y-7 gap-x-7 pt-7 pr-7 pb-7 pl-7 rounded-[9px] bg-[#fff] shadow-[0_6px_20px_#21497607] not-italic [&_>_div]:flex [&_>_div]:items-start [&_>_div]:gap-y-5.5 [&_>_div]:gap-x-5.5 [&_svg]:shrink-0 [&_svg]:w-7.5 [&_svg]:h-7.5 [&_svg]:text-[#0071e8] [&_svg]:[stroke-width:2.1] [&_p]:mt-0 [&_p]:mr-0 [&_p]:mb-0 [&_p]:ml-0 [&_p]:text-[length:17px] [&_p]:leading-[1.4] [&_strong]:font-semibold [&_a]:font-semibold [&_a]:[overflow-wrap:anywhere] [&_p_>_span]:block [&_p_>_span]:mt-1.5 [&_p_>_span]:text-[#5b6b86] [&_p_>_span]:text-[length:15px] [&_p_>_span]:leading-[1.55] max-[1050px]:pt-5.75 max-[1050px]:pr-5.75 max-[1050px]:pb-5.75 max-[1050px]:pl-5.75 max-[1050px]:[&_>_div]:gap-y-4 max-[1050px]:[&_>_div]:gap-x-4 max-[540px]:pt-5.75 max-[540px]:pr-5 max-[540px]:pb-5.75 max-[540px]:pl-5 max-[540px]:[&_p]:text-[length:16px] max-[540px]:[&_p_>_span]:text-[length:14px]">
              <div><MapPin aria-hidden="true" /><p><strong>Canada (Head Office)</strong><span>Serving clients across Canada<br />and internationally</span></p></div>
              <div><PhoneCall aria-hidden="true" /><p><a href="tel:+14372148299">+1 (437) 214-8299</a><span>Mon – Fri: 9:00 AM – 6:00 PM EST</span></p></div>
              <div><Mail aria-hidden="true" /><p><a href="mailto:info@rdpsc.ca">info@rdpsc.ca</a></p></div>
            </address>
            <div className="overflow-hidden [border:1px_solid_#e3edf5] rounded-[9px] mt-6.25 bg-[#eaf1f5] shadow-[0_4px_15px_#21497606] [&_iframe]:block [&_iframe]:w-full [&_iframe]:h-52.5 [&_iframe]:[border:0] max-[800px]:[&_iframe]:h-65 max-[540px]:[&_iframe]:h-55">
              <iframe title="Google map of Ontario, Canada — regional location" src="https://maps.google.com/maps?q=Ontario%2C%20Canada&z=5&output=embed" width="600" height="300" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
              <a href="https://www.google.com/maps/search/?api=1&query=Ontario%2C+Canada" target="_blank" rel="noopener noreferrer" className="flex items-center gap-y-2.25 gap-x-2.25 pt-3 pr-3.5 pb-3 pl-3.5 bg-[#fff] text-[#135594] text-[length:13px] leading-[1.4] [&_svg]:shrink-0 [&_svg:last-child]:ml-auto"><MapPin size={18} aria-hidden="true" /><span>Ontario, Canada · Open Google Maps</span><ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
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
