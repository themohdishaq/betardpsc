import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChartNoAxesColumnIncreasing, Shield, UsersRound } from "lucide-react";

const values = [
  { icon: UsersRound, first: "Trusted", second: "Expertise" },
  { icon: ChartNoAxesColumnIncreasing, first: "Real", second: "Solutions" },
  { icon: Shield, first: "Lasting", second: "Impact" },
];

export default function FinancialFuture() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f3f9ff] text-[#050d3d]" aria-labelledby="financial-future-heading">
      <Image src="/images/financial-future-background.png" alt="" fill sizes="100vw" className="z-[-3] object-cover object-[center_right] opacity-[.7] max-[900px]:opacity-[.4]" />
      <div className="absolute z-[-2] top-0 right-0 bottom-0 left-0 components-home-financial-future-wash [background-image:linear-gradient(90deg,_#ffffffed_0%,_#ffffffdb_43%,_#ffffff85_67%,_#ffffff05_100%)] [@media(max-width:_900px)]:[background-image:linear-gradient(90deg,_#ffffffed,_#ffffffa6)]" aria-hidden="true" />
      <div className="absolute z-[-1] top-0 right-0 bottom-0 left-0 overflow-hidden pointer-events-none [&_span]:absolute [&_span]:block [&_span]:[transform:rotate(-45deg)]" aria-hidden="true">
        <span className="w-110 h-110 top-[-340px] left-[43%] [border:75px_solid_#bfdefc65] max-[900px]:left-[60%]" />
        <span className="w-157.5 h-157.5 top-[19%] left-[-600px] [border:100px_solid_#dceeff80]" />
        <span className="w-112.5 h-112.5 bottom-[-370px] left-[41%] [border:100px_solid_#c4e2ff70] bg-[#cfe8ff40] max-[540px]:left-[15%]" />
        <span className="w-240 h-240 bottom-[-505px] right-[-650px] [border:75px_solid_#c2dfff80]" />
      </div>
      <div className={"absolute right-[3.6%] top-[12%] flex flex-col gap-y-5.75 gap-x-5.75 text-[#fff] [font-family:\"Arial_Narrow\",_Arial,_sans-serif] text-[length:clamp(12px,_1.35vw,_22px)] leading-[1.4] tracking-[.1em] uppercase [transform:skewY(-12deg)] opacity-[.78] [&_i]:w-10 [&_i]:h-0.25 [&_i]:[background:currentColor] max-[900px]:hidden"} aria-hidden="true">
        <span>People</span><span>Insights</span><span>Solutions</span><span>Growth</span>
        <i /><span>A Brighter<br />Tomorrow</span>
      </div>
      <div className="grid grid-cols-[1.5fr_1fr] items-center gap-y-7 gap-x-7 max-w-420 ml-auto mr-auto pt-[clamp(70px,_7vw,_118px)] pr-[clamp(28px,_4.7vw,_80px)] pb-[clamp(80px,_8vw,_135px)] pl-[clamp(28px,_4.7vw,_80px)] max-[1200px]:gap-y-6 max-[1200px]:gap-x-6 max-[1200px]:pl-9 max-[1200px]:pr-9 max-[900px]:grid-cols-1 max-[900px]:max-w-195 max-[900px]:pt-16.25 max-[900px]:pr-7.5 max-[900px]:pb-17.5 max-[900px]:pl-7.5 max-[900px]:gap-y-12.5 max-[900px]:gap-x-12.5 max-[540px]:pt-11.25 max-[540px]:pr-5 max-[540px]:pb-13.75 max-[540px]:pl-5 max-[540px]:gap-y-10.5 max-[540px]:gap-x-10.5">
        <div className="min-w-0">
          <p className={`flex items-center gap-y-4.75 gap-x-4.75 mt-0 mr-0 mb-10.75 ml-0 text-[#0d2578] text-[length:clamp(10px,_.85vw,_14px)] leading-[1.6] tracking-[.34em] uppercase max-[1200px]:gap-y-3 max-[1200px]:gap-x-3 max-[1200px]:tracking-[.23em] max-[1200px]:mb-7.5 max-[540px]:text-[length:9px] max-[540px]:gap-y-2.25 max-[540px]:gap-x-2.25 max-[540px]:tracking-[.19em] max-[540px]:mb-6.25 components-home-financial-future-eyebrow [&::before]:[flex-shrink:0] [&::before]:[width:58px] [&::before]:[height:2px] [&::before]:[margin-right:8px] [&::before]:[background:#0960ec] [&::before]:[content:""] [@media(max-width:_1200px)]:[&::before]:[width:40px] [@media(max-width:_540px)]:[&::before]:[width:27px] [@media(max-width:_540px)]:[&::before]:[margin-right:3px]`}>Partner <span>·</span> Plan <span>·</span> Progress</p>
          <h2 id="financial-future-heading" className="mt-0 mr-0 mb-0 ml-0 font-serif text-[length:clamp(40px,_4.7vw,_79px)] font-bold tracking-[-.047em] leading-[1.08] [&_em]:text-[#0061ed] [&_em]:font-bold max-[900px]:text-[length:clamp(42px,_7.4vw,_66px)] max-[540px]:text-[length:clamp(36px,_9vw,_48px)] max-[540px]:leading-[1.1]">Let’s Build a Stronger<br className="max-[540px]:hidden" /> Financial Future <em>Together.</em></h2>
          <p className="max-w-210 mt-6.75 mr-0 mb-8.75 ml-0 text-[#4f5b77] text-[length:clamp(18px,_1.73vw,_29px)] leading-[1.36] tracking-[-.015em] [&_strong]:font-medium max-[900px]:text-[length:22px] max-[540px]:text-[length:18px] max-[540px]:leading-[1.55] max-[540px]:mt-5.75 max-[540px]:mr-0 max-[540px]:mb-6.75 max-[540px]:ml-0"><strong>RD Prestige Services Corp.</strong> helps businesses, nonprofits, and growing enterprises with practical, scalable, and affordable financial and professional solutions.</p>
          <div className="flex flex-wrap gap-y-4.5 gap-x-6.5 [&_svg]:shrink-0 [&_a:hover]:[transform:translateY(-2px)] [&_a:hover]:shadow-[0_12px_28px_#0b47852b] [&_a:focus-visible]:[outline:3px_solid_#1264ee] [&_a:focus-visible]:outline-offset-[5px] max-[1200px]:gap-y-3.75 max-[1200px]:gap-x-3.75 max-[540px]:flex-col max-[540px]:gap-y-3 max-[540px]:gap-x-3 motion-reduce:[&_a]:[transition:none]">
            <Link href="/consultation" className="inline-flex items-center justify-center gap-y-6 gap-x-6 min-h-17.5 pt-4 pr-7 pb-4 pl-7 [border:1px_solid] rounded-[8px] font-serif text-[length:clamp(18px,_1.6vw,_27px)] font-bold no-underline shadow-[0_10px_25px_#0b478518] [transition:transform_180ms_ease,_box-shadow_180ms_ease] border-[#0759d0] text-[white] max-[1200px]:pt-3.75 max-[1200px]:pr-5 max-[1200px]:pb-3.75 max-[1200px]:pl-5 max-[1200px]:min-h-15 max-[1200px]:gap-y-4 max-[1200px]:gap-x-4 max-[540px]:min-h-14.5 max-[540px]:text-[length:20px] components-home-financial-future-primaryButton [background-image:linear-gradient(#0565ea,_#0044b4)]">Request a Consultation <ArrowRight size={28} aria-hidden="true" /></Link>
            <Link href="#contact" className="inline-flex items-center justify-center gap-y-6 gap-x-6 min-h-17.5 pt-4 pr-7 pb-4 pl-7 [border:1px_solid] rounded-[8px] font-serif text-[length:clamp(18px,_1.6vw,_27px)] font-bold no-underline shadow-[0_10px_25px_#0b478518] [transition:transform_180ms_ease,_box-shadow_180ms_ease] min-w-70 border-[#77a5fb] bg-[#ffffffc9] text-[#060e45] max-[1200px]:pt-3.75 max-[1200px]:pr-5 max-[1200px]:pb-3.75 max-[1200px]:pl-5 max-[1200px]:min-h-15 max-[1200px]:gap-y-4 max-[1200px]:gap-x-4 max-[1200px]:min-w-0 max-[540px]:min-h-14.5 max-[540px]:text-[length:20px]">Contact RDPSC <ArrowRight size={28} aria-hidden="true" /></Link>
          </div>
          <ul className="grid grid-cols-3 max-w-172.5 mt-16.25 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-0 list-none [&_li]:flex [&_li]:flex-col [&_li]:items-center [&_li]:gap-y-4.5 [&_li]:gap-x-4.5 [&_li]:[border-right:1px_solid_#cedeF8] [&_li]:text-[#0055e4] [&_li]:text-center [&_li:last-child]:[border-right:0] [&_span]:text-[#0b217a] [&_span]:text-[length:clamp(12px,_1vw,_17px)] [&_span]:leading-[1.4] [&_span]:tracking-[.22em] [&_span]:uppercase max-[1200px]:mt-11.25 max-[900px]:max-w-155 max-[900px]:[&_span]:text-[length:13px] max-[540px]:mt-8.5 max-[540px]:[&_li]:gap-y-3.25 max-[540px]:[&_li]:gap-x-3.25 max-[540px]:[&_svg]:w-9.25 max-[540px]:[&_svg]:h-9.25 max-[540px]:[&_span]:text-[length:10px] max-[540px]:[&_span]:tracking-[.16em]" aria-label="Our commitment">
            {values.map(({ icon: Icon, first, second }) => (
              <li key={first}><Icon size={49} strokeWidth={1.7} aria-hidden="true" /><span>{first}<br />{second}</span></li>
            ))}
          </ul>
        </div>
        <div className="relative min-w-0 mt-16.5 text-center max-[900px]:max-w-132.5 max-[900px]:w-full max-[900px]:mt-0 max-[900px]:mr-auto max-[900px]:mb-0 max-[900px]:ml-auto">
          <Image src="/logo/rdcsp_logo.png" alt="RD Prestige Services Corp. — Your one stop accounting services shop" width={2000} height={1302} sizes="(max-width: 900px) 80vw, 34vw" className="block w-[94%] h-auto ml-auto mr-auto max-[900px]:w-[85%]" />
          <p className="mt-5.75 mr-[-14px] mb-0 ml-[-14px] text-[#092177] text-[length:clamp(10px,_.95vw,_16px)] leading-[1.8] font-semibold tracking-[.22em] uppercase max-[1200px]:tracking-[.13em] max-[1200px]:ml-0 max-[1200px]:mr-0 max-[900px]:text-[length:12px] max-[540px]:mt-4.5 max-[540px]:text-[length:10px] max-[540px]:tracking-[.13em]">Accessible. Practical. Scalable. Affordable.</p>
          <div className="flex justify-center gap-y-2.5 gap-x-2.5 mt-5.5 mr-0 mb-5.5 ml-0 [&_span]:w-16.25 [&_span]:h-1.25 [&_span]:rounded-[4px] [&_span]:bg-[#0060e8] [&_span:nth-child(2)]:bg-[#eb0010] max-[540px]:mt-4.25 max-[540px]:mb-4.25 max-[540px]:gap-y-2 max-[540px]:gap-x-2 max-[540px]:[&_span]:w-11 max-[540px]:[&_span]:h-1" aria-hidden="true"><span /><span /><span /></div>
          <p className="mt-0 mr-[-20px] mb-0 ml-[-20px] text-[#465374] font-serif text-[length:clamp(17px,_1.45vw,_24px)] italic leading-[1.5] max-[1200px]:ml-0 max-[1200px]:mr-0 max-[900px]:text-[length:21px] max-[540px]:text-[length:18px]">Your Goals. Our Expertise. A Stronger Tomorrow.</p>
        </div>
      </div>
    </section>
  );
}
