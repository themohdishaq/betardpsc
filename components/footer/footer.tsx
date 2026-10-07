import { company } from "@/lib/company";
import Image from "next/image";
import Link from "next/link";
import ContactLinks from "@/components/contact/contact-links";
import { ChartNoAxesCombined, Mail, MapPin, PhoneCall, ShieldCheck, UsersRound } from "lucide-react";


const quickLinks = [
  ["Home", "/"], ["About Us", "/about"], ["Our Services", "/services"],
  ["Our Partners", "/partnerships"], ["Who We Serve", "/who-we-serve"],
  ["Resources", "/resources"], ["Blog & Updates", "/blog"], ["Contact Us", "/contact"],
];
const policies = [["Privacy Policy", "/privacy-policy"], ["Terms of Use", "/terms-of-service"], ["Cookies Policy", "/cookies-policy"], ["Sitemap", "/sitemap.xml"]];

function FooterLinks({ links }: { links: string[][] }) {
  return <ul className="list-none mt-0 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-0 flex flex-col gap-y-3.75 gap-x-3.75 [&_a]:text-body max-[540px]:gap-y-3.25 max-[540px]:gap-x-3.25 max-[540px]:[&_a]:inline-block max-[540px]:[&_a]:pt-0.75 max-[540px]:[&_a]:pb-0.75">{links.map(([label, href]) => <li key={label}><Link href={href}>{label}</Link></li>)}</ul>;
}

export default function Footer() {
  return (
    <footer className="typography-inverse shrink-0 bg-[#031e37] text-inverse-copy font-body [&_a]:no-underline [&_a]:[transition:color_150ms_ease] [&_a:hover]:text-heading-accent [&_a:focus-visible]:[outline:2px_solid_#64bcff] [&_a:focus-visible]:outline-offset-[5px] [&_button:focus-visible]:[outline:2px_solid_#64bcff] [&_button:focus-visible]:outline-offset-[5px] [&_input:focus-visible]:[outline:2px_solid_#64bcff] [&_input:focus-visible]:outline-offset-[5px] motion-reduce:[&_a]:[transition:none]">
      <div className="relative isolate overflow-hidden">
        <Image src="/images/footer-financial-background.png" alt="" fill sizes="100vw" className="z-[-1] object-cover object-[bottom_right] opacity-[.8] max-[1000px]:opacity-[.45]" />
        <div className="grid grid-cols-[1.3fr_.7fr_1.4fr] gap-y-[clamp(24px,_2.7vw,_48px)] gap-x-[clamp(24px,_2.7vw,_48px)] max-w-450 ml-auto mr-auto pt-19 pr-[clamp(28px,_4.2vw,_76px)] pb-16 pl-[clamp(28px,_4.2vw,_76px)] [&_>_*]:min-w-0 max-[1400px]:grid-cols-[1.2fr_.7fr_1.25fr] max-[1400px]:gap-y-7.5 max-[1400px]:gap-x-7.5 max-[1000px]:grid-cols-2 max-[1000px]:pt-13 max-[1000px]:pr-7.5 max-[1000px]:pb-13 max-[1000px]:pl-7.5 max-[1000px]:gap-y-11 max-[1000px]:gap-x-9.5 max-[540px]:grid-cols-1 max-[540px]:pt-10 max-[540px]:pr-5.5 max-[540px]:pb-10 max-[540px]:pl-5.5 max-[540px]:gap-y-8.75 max-[540px]:gap-x-8.75">
          <div className="[&_h2]:mt-0 [&_h2]:mr-0 [&_h2]:mb-0 [&_h2]:ml-0 [&_h2]:font-heading [&_h2]:text-card-heading [&_h2]:font-bold [&_h2]:text-white [&_h2_em]:text-heading-accent max-[1000px]:[grid-column:1_/_-1] max-[1000px]:max-w-155 max-[540px]:[grid-column:auto]">
            <p className={`mt-0 mr-0 mb-3.75 ml-0 text-white text-caption tracking-[.14em] uppercase components-footer-footer-eyebrow [&::after]:[display:block] [&::after]:[width:40px] [&::after]:[height:3px] [&::after]:[margin-top:12px] [&::after]:[background:#2b9dea] [&::after]:[content:""]`}>Your Partner<br />in Progress</p>
            <h2>Building<br />Stronger<br /><em>Tomorrows</em></h2>
            <p className="mt-5.5 mr-0 mb-6.25 ml-0 text-body">At RD Prestige Services Corp., we do more than provide services. We become a trusted partner in your financial and business success with practical expertise and affordable support.</p>
            <ul className={`grid grid-cols-3 list-none pt-0 pr-0 pb-0 pl-0 mt-0 mr-0 mb-0 ml-0 [&_li]:relative [&_li]:flex [&_li]:flex-col [&_li]:items-center [&_li]:gap-y-2.25 [&_li]:gap-x-2.25 [&_li]:text-center [&_li]:text-body [&_li]:text-white [&_svg]:w-8.25 [&_svg]:h-8.25 [&_svg]:text-heading-accent [&_svg]:[stroke-width:2.5] max-[1000px]:max-w-97.5 components-footer-footer-values [&_li_+_li::before]:[position:absolute] [&_li_+_li::before]:[left:0] [&_li_+_li::before]:[bottom:12px] [&_li_+_li::before]:[height:37px] [&_li_+_li::before]:[width:1px] [&_li_+_li::before]:[background:#4692bd] [&_li_+_li::before]:[content:""]`}>
              <li><ShieldCheck aria-hidden="true" /><span>Trusted<br />Expertise</span></li>
              <li><UsersRound aria-hidden="true" /><span>Client<br />Focused</span></li>
              <li><ChartNoAxesCombined aria-hidden="true" /><span>Real<br />Results</span></li>
            </ul>
            
          </div>

          <nav aria-labelledby="footer-quick-links"><h2 id="footer-quick-links" className={`mt-0 mr-0 mb-6 ml-0 text-white font-heading text-card-heading max-[540px]:mb-5.5 components-footer-footer-title [&::after]:[display:block] [&::after]:[width:40px] [&::after]:[height:3px] [&::after]:[margin-top:12px] [&::after]:[background:#2b9dea] [&::after]:[content:""]`}>Quick Links</h2><FooterLinks links={quickLinks} /></nav>

          <div className="max-[1000px]:col-span-2 max-[540px]:col-span-1">
            <h2 className={`mt-0 mr-0 mb-6 ml-0 text-white font-heading text-card-heading max-[540px]:mb-5.5 components-footer-footer-title [&::after]:[display:block] [&::after]:[width:40px] [&::after]:[height:3px] [&::after]:[margin-top:12px] [&::after]:[background:#2b9dea] [&::after]:[content:""]`}>Contact Information</h2>
            <address className="flex flex-col gap-y-6 gap-x-6 not-italic [&_>_div]:flex [&_>_div]:items-start [&_>_div]:gap-y-4.75 [&_>_div]:gap-x-4.75 [&_svg]:w-7 [&_svg]:h-7 [&_svg]:shrink-0 [&_svg]:text-heading-accent [&_p]:mt-0 [&_p]:mr-0 [&_p]:mb-0 [&_p]:ml-0 [&_p]:text-body [&_strong]:font-medium [&_strong]:text-white [&_p_>_span]:block [&_p_>_span]:text-body [&_p_>_span]:mt-0.75 [&_a]:[overflow-wrap:anywhere]">
              <div><MapPin aria-hidden="true" /><p><strong>Canada (Head Office)</strong></p></div>
              <div><PhoneCall aria-hidden="true" /><p>{company.phones.map(({ href, label }) => <a key={href} href={href} className="block w-fit min-h-11 content-center hover:underline focus-visible:outline-2 focus-visible:outline-offset-4">{label}</a>)}<span>Mon – Fri: 9:00 AM – 6:00 PM EST</span></p></div>
              <div><Mail aria-hidden="true" /><p><a href={company.emailHref}>{company.email}</a></p></div>
            </address>
            <ContactLinks />
          </div>

          
        </div>
      </div>

      <div className="[border-top:1px_solid_#4786b1] [&_nav_ul]:flex [&_nav_ul]:flex-wrap [&_nav_ul]:gap-y-2.5 [&_nav_ul]:gap-x-0 [&_nav_ul]:list-none [&_nav_ul]:mt-0 [&_nav_ul]:mr-0 [&_nav_ul]:mb-0 [&_nav_ul]:ml-0 [&_nav_ul]:pt-0 [&_nav_ul]:pr-0 [&_nav_ul]:pb-0 [&_nav_ul]:pl-0 [&_nav_li]:pl-4 [&_nav_li]:pr-4 [&_nav_li]:[border-right:1px_solid_#9baec5] [&_nav_li]:text-small [&_nav_li:first-child]:pl-0 [&_nav_li:last-child]:pr-0 [&_nav_li:last-child]:[border:0] max-[540px]:[&_nav_li]:pl-2.5 max-[540px]:[&_nav_li]:pr-2.5 components-footer-footer-bottom [background-image:linear-gradient(135deg,_#031a30,_#04223d)]">
        <div className="flex items-center justify-between gap-y-6.25 gap-x-6.25 max-w-450 mt-auto mr-auto mb-auto ml-auto pt-7.25 pr-[clamp(28px,_4.2vw,_76px)] pb-9.5 pl-[clamp(28px,_4.2vw,_76px)] [&_>_p]:mt-0 [&_>_p]:mr-0 [&_>_p]:mb-0 [&_>_p]:ml-0 [&_>_p]:text-body max-[1400px]:flex-wrap max-[1000px]:pt-6.5 max-[1000px]:pr-7.5 max-[1000px]:pb-6.5 max-[1000px]:pl-7.5 max-[540px]:pt-6.25 max-[540px]:pr-5.5 max-[540px]:pb-6.25 max-[540px]:pl-5.5 max-[540px]:gap-y-5.25 max-[540px]:gap-x-5.25 components-footer-footer-bottomInner [&_.components-footer-footer-motto]:[display:flex] [&_.components-footer-footer-motto]:[align-items:center] [&_.components-footer-footer-motto]:[gap:20px] [&_.components-footer-footer-motto]:[padding-left:32px] [&_.components-footer-footer-motto]:[border-left:1px_solid_#4d96c0] [&_.components-footer-footer-motto]:font-heading [&_.components-footer-footer-motto]:[white-space:nowrap] [@media(max-width:_1400px)]:[&_.components-footer-footer-motto]:[padding-left:0] [@media(max-width:_1400px)]:[&_.components-footer-footer-motto]:[border:0] [@media(max-width:_540px)]:[&_.components-footer-footer-motto]:[gap:15px]">
          <p>© {new Date().getFullYear()} RD Prestige Services Corp. All rights reserved.</p>
          <nav aria-label="Legal and site information"><ul>{policies.map(([label, href]) => <li key={label}><Link href={href}>{label}</Link></li>)}</ul></nav>
        </div>
      </div>
    </footer>
  );
}
