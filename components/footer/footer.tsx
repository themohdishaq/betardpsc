import Image from "next/image";
import Link from "next/link";
import { ChartNoAxesCombined, Mail, MapPin, MessageCircle, PhoneCall, ShieldCheck, UsersRound } from "lucide-react";
import NewsletterForm from "./newsletter-form";
import { serviceOfferings } from "@/lib/services";


const quickLinks = [
  ["Home", "/"], ["About Us", "/about"], ["Our Services", "/services"],
  ["Our Partners", "/partnerships"], ["Who We Serve", "/who-we-serve"],
  ["Resources", "/resources"], ["Blog & Updates", "/blog"], ["Contact Us", "/contact"],
];
const services = serviceOfferings.map((service) => [service.title, `/services/${service.id}`]);
const resources = [["Tax Tips", "/resources/tax-tips"], ["Financial Guides", "/resources/financial-guides"], ["Helpful Links", "/resources/helpful-links"], ["FAQs", "/resources/faqs"]];
const policies = [["Privacy Policy", "/privacy-policy"], ["Terms of Service", "/terms-of-service"], ["Cookies Policy", "/cookies-policy"], ["Sitemap", "/sitemap.xml"]];
const mapsUrl = "https://www.google.com/maps/search/?api=1&query=RD+Prestige+Services+Corp+Canada";
const whatsappUrl = "https://wa.me/14372148299";

function FooterLinks({ links }: { links: string[][] }) {
  return <ul className="list-none mt-0 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-0 flex flex-col gap-y-3.75 gap-x-3.75 [&_a]:text-[length:clamp(15px,_1.08vw,_19px)] [&_a]:leading-[1.4] max-[540px]:gap-y-3.25 max-[540px]:gap-x-3.25 max-[540px]:[&_a]:text-[length:16px] max-[540px]:[&_a]:inline-block max-[540px]:[&_a]:pt-0.75 max-[540px]:[&_a]:pb-0.75">{links.map(([label, href]) => <li key={label}><Link href={href}>{label}</Link></li>)}</ul>;
}

export default function Footer() {
  return (
    <footer className="shrink-0 bg-[#031e37] text-[#e1eaf7] font-body [&_a]:no-underline [&_a]:[transition:color_150ms_ease] [&_a:hover]:text-[#62bbff] [&_a:focus-visible]:[outline:2px_solid_#64bcff] [&_a:focus-visible]:outline-offset-[5px] [&_button:focus-visible]:[outline:2px_solid_#64bcff] [&_button:focus-visible]:outline-offset-[5px] [&_input:focus-visible]:[outline:2px_solid_#64bcff] [&_input:focus-visible]:outline-offset-[5px] motion-reduce:[&_a]:[transition:none]">
      <div className="relative isolate overflow-hidden">
        <Image src="/images/footer-financial-background.png" alt="" fill sizes="100vw" className="z-[-1] object-cover object-[bottom_right] opacity-[.8] max-[1000px]:opacity-[.45]" />
        <div className="grid grid-cols-[1.3fr_.66fr_1fr_1.07fr_1.16fr] gap-y-[clamp(24px,_2.7vw,_48px)] gap-x-[clamp(24px,_2.7vw,_48px)] max-w-450 ml-auto mr-auto pt-19 pr-[clamp(28px,_4.2vw,_76px)] pb-16 pl-[clamp(28px,_4.2vw,_76px)] [&_>_*]:min-w-0 max-[1400px]:grid-cols-[1.2fr_.7fr_1fr_1.15fr] max-[1400px]:gap-y-7.5 max-[1400px]:gap-x-7.5 max-[1000px]:grid-cols-2 max-[1000px]:pt-13 max-[1000px]:pr-7.5 max-[1000px]:pb-13 max-[1000px]:pl-7.5 max-[1000px]:gap-y-11 max-[1000px]:gap-x-9.5 max-[540px]:grid-cols-1 max-[540px]:pt-10 max-[540px]:pr-5.5 max-[540px]:pb-10 max-[540px]:pl-5.5 max-[540px]:gap-y-8.75 max-[540px]:gap-x-8.75">
          <div className="[&_h2]:mt-0 [&_h2]:mr-0 [&_h2]:mb-0 [&_h2]:ml-0 [&_h2]:font-serif [&_h2]:text-[length:clamp(40px,_3vw,_55px)] [&_h2]:leading-[1] [&_h2]:font-bold [&_h2]:tracking-[-.025em] [&_h2]:text-[#fff] [&_h2_em]:text-[#2b9dec] max-[1000px]:[grid-column:1_/_-1] max-[1000px]:max-w-155 max-[1000px]:[&_h2]:text-[length:48px] max-[540px]:[grid-column:auto] max-[540px]:[&_h2]:text-[length:46px]">
            <p className={`mt-0 mr-0 mb-3.75 ml-0 text-[#fff] text-[length:14px] leading-[1.5] tracking-[.3em] uppercase components-footer-footer-eyebrow [&::after]:[display:block] [&::after]:[width:40px] [&::after]:[height:3px] [&::after]:[margin-top:12px] [&::after]:[background:#2b9dea] [&::after]:[content:""]`}>Your Partner<br />in Progress</p>
            <h2>Building<br />Stronger<br /><em>Tomorrows</em></h2>
            <p className="mt-5.5 mr-0 mb-6.25 ml-0 text-[length:clamp(15px,_1.06vw,_19px)] leading-[1.42] max-[540px]:text-[length:16px]">At RD Prestige Services Corp., we do more than provide services. We become a trusted partner in your financial and business success with practical expertise and affordable support.</p>
            <ul className={`grid grid-cols-3 list-none pt-0 pr-0 pb-0 pl-0 mt-0 mr-0 mb-0 ml-0 [&_li]:relative [&_li]:flex [&_li]:flex-col [&_li]:items-center [&_li]:gap-y-2.25 [&_li]:gap-x-2.25 [&_li]:text-center [&_li]:text-[length:16px] [&_li]:leading-[1.35] [&_li]:text-[#fff] [&_svg]:w-8.25 [&_svg]:h-8.25 [&_svg]:text-[#55aff2] [&_svg]:[stroke-width:2.5] max-[1000px]:max-w-97.5 components-footer-footer-values [&_li_+_li::before]:[position:absolute] [&_li_+_li::before]:[left:0] [&_li_+_li::before]:[bottom:12px] [&_li_+_li::before]:[height:37px] [&_li_+_li::before]:[width:1px] [&_li_+_li::before]:[background:#4692bd] [&_li_+_li::before]:[content:""]`}>
              <li><ShieldCheck aria-hidden="true" /><span>Trusted<br />Expertise</span></li>
              <li><UsersRound aria-hidden="true" /><span>Client<br />Focused</span></li>
              <li><ChartNoAxesCombined aria-hidden="true" /><span>Real<br />Results</span></li>
            </ul>
            <p className={"mt-7.5 mr-0 mb-0 ml-0 text-[#adc4df] [font-family:\"Segoe_Script\",_\"Brush_Script_MT\",_cursive] text-[length:clamp(23px,_2vw,_35px)] leading-[1.2] italic [transform:rotate(-9deg)] [&_span]:inline-block [&_span]:ml-8.75 [&_span]:pb-2 [&_span]:[border-bottom:2px_solid_#98b5d5] max-[1000px]:mt-7.5 max-[1000px]:inline-block max-[540px]:text-[length:29px] max-[540px]:mb-2.5"}>Your Success,<br /><span>Our Commitment</span></p>
          </div>

          <nav aria-labelledby="footer-quick-links"><h2 id="footer-quick-links" className={`mt-0 mr-0 mb-6 ml-0 text-[#fff] font-serif text-[length:clamp(22px,_1.5vw,_27px)] leading-[1.2] font-bold tracking-[-.02em] max-[540px]:text-[length:25px] max-[540px]:mb-5.5 components-footer-footer-title [&::after]:[display:block] [&::after]:[width:40px] [&::after]:[height:3px] [&::after]:[margin-top:12px] [&::after]:[background:#2b9dea] [&::after]:[content:""]`}>Quick Links</h2><FooterLinks links={quickLinks} /></nav>

          <div>
            <nav aria-labelledby="footer-services"><h2 id="footer-services" className={`mt-0 mr-0 mb-6 ml-0 text-[#fff] font-serif text-[length:clamp(22px,_1.5vw,_27px)] leading-[1.2] font-bold tracking-[-.02em] max-[540px]:text-[length:25px] max-[540px]:mb-5.5 components-footer-footer-title [&::after]:[display:block] [&::after]:[width:40px] [&::after]:[height:3px] [&::after]:[margin-top:12px] [&::after]:[background:#2b9dea] [&::after]:[content:""]`}>Our Services</h2><FooterLinks links={services} /></nav>
            <nav className="mt-10 max-[540px]:mt-7.5" aria-labelledby="footer-resources"><h2 id="footer-resources" className={`mt-0 mr-0 mb-6 ml-0 text-[#fff] font-serif text-[length:clamp(22px,_1.5vw,_27px)] leading-[1.2] font-bold tracking-[-.02em] max-[540px]:text-[length:25px] max-[540px]:mb-5.5 components-footer-footer-title [&::after]:[display:block] [&::after]:[width:40px] [&::after]:[height:3px] [&::after]:[margin-top:12px] [&::after]:[background:#2b9dea] [&::after]:[content:""]`}>Resources</h2><FooterLinks links={resources} /></nav>
          </div>

          <div>
            <h2 className={`mt-0 mr-0 mb-6 ml-0 text-[#fff] font-serif text-[length:clamp(22px,_1.5vw,_27px)] leading-[1.2] font-bold tracking-[-.02em] max-[540px]:text-[length:25px] max-[540px]:mb-5.5 components-footer-footer-title [&::after]:[display:block] [&::after]:[width:40px] [&::after]:[height:3px] [&::after]:[margin-top:12px] [&::after]:[background:#2b9dea] [&::after]:[content:""]`}>Contact Information</h2>
            <address className="flex flex-col gap-y-6 gap-x-6 not-italic [&_>_div]:flex [&_>_div]:items-start [&_>_div]:gap-y-4.75 [&_>_div]:gap-x-4.75 [&_svg]:w-7 [&_svg]:h-7 [&_svg]:shrink-0 [&_svg]:text-[#2da4f2] [&_p]:mt-0 [&_p]:mr-0 [&_p]:mb-0 [&_p]:ml-0 [&_p]:text-[length:clamp(16px,_1.1vw,_20px)] [&_p]:leading-[1.4] [&_strong]:font-medium [&_strong]:text-[#fff] [&_p_>_span]:block [&_p_>_span]:text-[length:clamp(13px,_.95vw,_16px)] [&_p_>_span]:mt-0.75 [&_p_>_span]:leading-[1.5] [&_a]:[overflow-wrap:anywhere] max-[540px]:[&_p]:text-[length:17px] max-[540px]:[&_p_>_span]:text-[length:14px]">
              <div><MapPin aria-hidden="true" /><p><strong>Canada (Head Office)</strong><span>Serving clients across Canada<br />and internationally</span></p></div>
              <div><PhoneCall aria-hidden="true" /><p><a href="tel:+14372148299">+1 (437) 214-8299</a><span>Mon – Fri: 9:00 AM – 6:00 PM EST</span></p></div>
              <div><Mail aria-hidden="true" /><p><a href="mailto:info@rdpsc.ca">info@rdpsc.ca</a></p></div>
            </address>
            <div className="mt-8 pt-8 [border-top:1px_solid_#4283b1]">
              <h2 className={`mt-0 mr-0 mb-6 ml-0 text-[#fff] font-serif text-[length:clamp(22px,_1.5vw,_27px)] leading-[1.2] font-bold tracking-[-.02em] max-[540px]:text-[length:25px] max-[540px]:mb-5.5 components-footer-footer-title [&::after]:[display:block] [&::after]:[width:40px] [&::after]:[height:3px] [&::after]:[margin-top:12px] [&::after]:[background:#2b9dea] [&::after]:[content:""]`}>Connect With Us</h2>
              <div className="flex justify-between gap-y-2.5 gap-x-2.5 mt-6.5 mr-0 mb-7 ml-0 [&_a]:flex [&_a]:justify-center [&_a]:items-center [&_a]:w-13.5 [&_a]:h-13.5 [&_a]:[border:1px_solid_#667b8f] [&_a]:rounded-[50%] [&_a]:text-[#fff] [&_svg]:w-5.75 [&_svg]:h-5.75 max-[1000px]:justify-start max-[1000px]:gap-y-4 max-[1000px]:gap-x-4">
                <a href="https://www.linkedin.com/search/results/companies/?keywords=RD%20Prestige%20Services" target="_blank" rel="noopener noreferrer" aria-label="Find RD Prestige on LinkedIn"><span className="font-body text-[length:26px] font-bold leading-[1]" aria-hidden="true">in</span></a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"><MessageCircle aria-hidden="true" /></a>
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Find RD Prestige on Google Maps"><MapPin aria-hidden="true" /></a>
                <a href="mailto:info@rdpsc.ca" aria-label="Email RD Prestige"><Mail aria-hidden="true" /></a>
              </div>
              <a className="[&_svg]:w-7 [&_svg]:h-7 [&_svg]:shrink-0 [&_svg]:text-[#2da4f2] flex items-center gap-y-4.5 gap-x-4.5 mt-6 text-[length:clamp(15px,_1.07vw,_19px)] leading-[1.4] max-[540px]:min-h-11 max-[540px]:mt-3.5 max-[540px]:text-[length:16px]" href={whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" />Chat with us on WhatsApp</a>
              <a className="[&_svg]:w-7 [&_svg]:h-7 [&_svg]:shrink-0 [&_svg]:text-[#2da4f2] flex items-center gap-y-4.5 gap-x-4.5 mt-6 text-[length:clamp(15px,_1.07vw,_19px)] leading-[1.4] max-[540px]:min-h-11 max-[540px]:mt-3.5 max-[540px]:text-[length:16px]" href={mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin aria-hidden="true" />Find us on Google Maps</a>
            </div>
          </div>

          <div className="[&_>_p]:mt-[-5px] [&_>_p]:mr-0 [&_>_p]:mb-6 [&_>_p]:ml-0 [&_>_p]:text-[length:clamp(16px,_1.1vw,_20px)] [&_>_p]:leading-[1.5] max-[1400px]:[grid-column:2_/_-1] max-[1400px]:max-w-140 max-[1000px]:[grid-column:1_/_-1] max-[1000px]:max-w-155 max-[540px]:[grid-column:auto] max-[540px]:[&_>_p]:text-[length:17px]">
            <h2 className={`mt-0 mr-0 mb-6 ml-0 text-[#fff] font-serif text-[length:clamp(22px,_1.5vw,_27px)] leading-[1.2] font-bold tracking-[-.02em] max-[540px]:text-[length:25px] max-[540px]:mb-5.5 components-footer-footer-title [&::after]:[display:block] [&::after]:[width:40px] [&::after]:[height:3px] [&::after]:[margin-top:12px] [&::after]:[background:#2b9dea] [&::after]:[content:""]`}>Stay Informed</h2>
            <p>Subscribe to our newsletter for tax tips, financial insights, and company updates.</p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="[border-top:1px_solid_#4786b1] [&_nav_ul]:flex [&_nav_ul]:flex-wrap [&_nav_ul]:gap-y-2.5 [&_nav_ul]:gap-x-0 [&_nav_ul]:list-none [&_nav_ul]:mt-0 [&_nav_ul]:mr-0 [&_nav_ul]:mb-0 [&_nav_ul]:ml-0 [&_nav_ul]:pt-0 [&_nav_ul]:pr-0 [&_nav_ul]:pb-0 [&_nav_ul]:pl-0 [&_nav_li]:pl-4 [&_nav_li]:pr-4 [&_nav_li]:[border-right:1px_solid_#9baec5] [&_nav_li]:text-[length:13px] [&_nav_li]:leading-[1.2] [&_nav_li:first-child]:pl-0 [&_nav_li:last-child]:pr-0 [&_nav_li:last-child]:[border:0] max-[540px]:[&_nav_li]:pl-2.5 max-[540px]:[&_nav_li]:pr-2.5 max-[540px]:[&_nav_li]:text-[length:12px] components-footer-footer-bottom [background-image:linear-gradient(135deg,_#031a30,_#04223d)]">
        <div className="flex items-center justify-between gap-y-6.25 gap-x-6.25 max-w-450 mt-auto mr-auto mb-auto ml-auto pt-7.25 pr-[clamp(28px,_4.2vw,_76px)] pb-9.5 pl-[clamp(28px,_4.2vw,_76px)] [&_>_p]:mt-0 [&_>_p]:mr-0 [&_>_p]:mb-0 [&_>_p]:ml-0 [&_>_p]:text-[length:16px] [&_>_p]:leading-[1.5] max-[1400px]:flex-wrap max-[1000px]:pt-6.5 max-[1000px]:pr-7.5 max-[1000px]:pb-6.5 max-[1000px]:pl-7.5 max-[540px]:pt-6.25 max-[540px]:pr-5.5 max-[540px]:pb-6.25 max-[540px]:pl-5.5 max-[540px]:gap-y-5.25 max-[540px]:gap-x-5.25 max-[540px]:[&_>_p]:text-[length:14px] components-footer-footer-bottomInner [&_.components-footer-footer-motto]:[display:flex] [&_.components-footer-footer-motto]:[align-items:center] [&_.components-footer-footer-motto]:[gap:20px] [&_.components-footer-footer-motto]:[padding-left:32px] [&_.components-footer-footer-motto]:[border-left:1px_solid_#4d96c0] [&_.components-footer-footer-motto]:[font-family:Georgia,_serif] [&_.components-footer-footer-motto]:[white-space:nowrap] [@media(max-width:_1400px)]:[&_.components-footer-footer-motto]:[padding-left:0] [@media(max-width:_1400px)]:[&_.components-footer-footer-motto]:[border:0] [@media(max-width:_540px)]:[&_.components-footer-footer-motto]:[gap:15px]">
          <p>© {new Date().getFullYear()} RD Prestige Services Corp. All rights reserved.</p>
          <nav aria-label="Legal and site information"><ul>{policies.map(([label, href]) => <li key={label}><Link href={href}>{label}</Link></li>)}</ul></nav>
          <p className="[&_span]:pl-5 [&_span]:[border-left:1px_solid_#90a2bc] max-[540px]:[&_span]:pl-3.75 components-footer-footer-motto"><em>People</em><span>Process</span><span>Possibilities</span></p>
        </div>
      </div>
    </footer>
  );
}
