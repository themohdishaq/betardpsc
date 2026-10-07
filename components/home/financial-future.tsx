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
    <section className="relative isolate overflow-hidden bg-[var(--indigo-50)] text-ink" aria-labelledby="financial-future-heading">
      <Image src="/images/financial-future-background.png" alt="" fill sizes="100vw" className="z-[-3] object-cover object-[center_right] opacity-[.7] max-[900px]:opacity-[.4]" />
      <div className="absolute z-[-2] top-0 right-0 bottom-0 left-0 components-home-financial-future-wash [background-image:linear-gradient(90deg,_#ffffffed_0%,_#ffffffdb_43%,_#ffffff85_67%,_#ffffff05_100%)] [@media(max-width:_900px)]:[background-image:linear-gradient(90deg,_#FFFFFFed,_#FFFFFFa6)]" aria-hidden="true" />
      <div className="absolute z-[-1] top-0 right-0 bottom-0 left-0 overflow-hidden pointer-events-none [&_span]:absolute [&_span]:block [&_span]:[transform:rotate(-45deg)]" aria-hidden="true">
        <span className="w-110 h-110 top-[-340px] left-[43%] [border:75px_solid_#D9DCE865] max-[900px]:left-[60%]" />
        <span className="w-157.5 h-157.5 top-[19%] left-[-600px] [border:100px_solid_#D9DCE880]" />
        <span className="w-112.5 h-112.5 bottom-[-370px] left-[41%] [border:100px_solid_#D9DCE870] bg-[#D9DCE840] max-[540px]:left-[15%]" />
        <span className="w-240 h-240 bottom-[-505px] right-[-650px] [border:75px_solid_#D9DCE880]" />
      </div>
      <div className={"absolute right-[3.6%] top-[12%] flex flex-col gap-y-5.75 gap-x-5.75 text-white font-heading text-caption tracking-[.14em] uppercase [transform:skewY(-12deg)] opacity-[.78] [&_i]:w-10 [&_i]:h-0.25 [&_i]:[background:currentColor] max-[900px]:hidden"} aria-hidden="true">
        <span>People</span><span>Insights</span><span>Solutions</span><span>Growth</span>
        <i /><span>A Brighter<br />Tomorrow</span>
      </div>
      <div className="grid grid-cols-[1.5fr_1fr] items-center gap-y-7 gap-x-7 max-w-420 ml-auto mr-auto pt-[clamp(70px,_7vw,_118px)] pr-[clamp(28px,_4.7vw,_80px)] pb-[clamp(80px,_8vw,_135px)] pl-[clamp(28px,_4.7vw,_80px)] max-[1200px]:gap-y-6 max-[1200px]:gap-x-6 max-[1200px]:pl-9 max-[1200px]:pr-9 max-[900px]:grid-cols-1 max-[900px]:max-w-195 max-[900px]:pt-16.25 max-[900px]:pr-7.5 max-[900px]:pb-17.5 max-[900px]:pl-7.5 max-[900px]:gap-y-12.5 max-[900px]:gap-x-12.5 max-[540px]:pt-11.25 max-[540px]:pr-5 max-[540px]:pb-13.75 max-[540px]:pl-5 max-[540px]:gap-y-10.5 max-[540px]:gap-x-10.5">
        <div className="min-w-0">
          <p className={`flex items-center gap-y-4.75 gap-x-4.75 mt-0 mr-0 mb-10.75 ml-0 text-ink text-caption tracking-[.14em] uppercase max-[1200px]:gap-y-3 max-[1200px]:gap-x-3 max-[1200px]:tracking-[.14em] max-[1200px]:mb-7.5 max-[540px]:gap-y-2.25 max-[540px]:gap-x-2.25 max-[540px]:tracking-[.14em] max-[540px]:mb-6.25 components-home-financial-future-eyebrow [&::before]:[flex-shrink:0] [&::before]:[width:58px] [&::before]:[height:2px] [&::before]:[margin-right:8px] [&::before]:[background:var(--indigo-800)] [&::before]:[content:""] [@media(max-width:_1200px)]:[&::before]:[width:40px] [@media(max-width:_540px)]:[&::before]:[width:27px] [@media(max-width:_540px)]:[&::before]:[margin-right:3px]`}>Partner <span>·</span> Plan <span>·</span> Progress</p>
          <h2 id="financial-future-heading" className="mt-0 mr-0 mb-0 ml-0 font-heading text-section [&_em]:text-heading-accent [&_em]:font-bold">Let’s Build a Stronger<br className="max-[540px]:hidden" /> Financial Future <em>Together.</em></h2>
          <p className="max-w-210 mt-6.75 mr-0 mb-8.75 ml-0 text-copy text-body tracking-[-.015em] [&_strong]:font-medium max-[540px]:mt-5.75 max-[540px]:mr-0 max-[540px]:mb-6.75 max-[540px]:ml-0"><strong>RD Prestige Services Corp.</strong> provides tailored financial and professional solutions for businesses and individuals, regardless of size, stage of growth, or budget.</p>
          <div className="flex flex-wrap gap-y-4.5 gap-x-6.5 [&_svg]:shrink-0 [&_a:hover]:[transform:translateY(-2px)] [&_a:hover]:shadow-[0_12px_28px_#1B22602b] [&_a:focus-visible]:[outline:3px_solid_var(--cyan-700)] [&_a:focus-visible]:outline-offset-[5px] max-[1200px]:gap-y-3.75 max-[1200px]:gap-x-3.75 max-[540px]:flex-col max-[540px]:gap-y-3 max-[540px]:gap-x-3 motion-reduce:[&_a]:[transition:none]">
            <Link href="/consultation" className="button-primary inline-flex items-center justify-center gap-y-6 gap-x-6 min-h-17.5 pt-4 pr-7 pb-4 pl-7 [border:1px_solid] rounded-[8px] font-heading text-body font-bold no-underline shadow-[0_10px_25px_#1B226018] [transition:transform_180ms_ease,_box-shadow_180ms_ease] border-[var(--indigo-800)] text-white max-[1200px]:pt-3.75 max-[1200px]:pr-5 max-[1200px]:pb-3.75 max-[1200px]:pl-5 max-[1200px]:min-h-15 max-[1200px]:gap-y-4 max-[1200px]:gap-x-4 max-[540px]:min-h-14.5 components-home-financial-future-primaryButton [background-image:linear-gradient(var(--cyan-600),_var(--indigo-800))]">Book a consultation <ArrowRight size={28} aria-hidden="true" /></Link>
            <Link href="#contact" className="button-secondary inline-flex items-center justify-center gap-y-6 gap-x-6 min-h-17.5 pt-4 pr-7 pb-4 pl-7 [border:1px_solid] rounded-[8px] font-heading text-body font-bold no-underline shadow-[0_10px_25px_#1B226018] [transition:transform_180ms_ease,_box-shadow_180ms_ease] min-w-70 border-[var(--line)] bg-[#FFFFFFc9] text-ink max-[1200px]:pt-3.75 max-[1200px]:pr-5 max-[1200px]:pb-3.75 max-[1200px]:pl-5 max-[1200px]:min-h-15 max-[1200px]:gap-y-4 max-[1200px]:gap-x-4 max-[1200px]:min-w-0 max-[540px]:min-h-14.5">Contact RDPSC <ArrowRight size={28} aria-hidden="true" /></Link>
          </div>
          <ul className="grid grid-cols-3 max-w-172.5 mt-16.25 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-0 list-none [&_li]:flex [&_li]:flex-col [&_li]:items-center [&_li]:gap-y-4.5 [&_li]:gap-x-4.5 [&_li]:[border-right:1px_solid_var(--line)] [&_li]:text-heading-accent [&_li]:text-center [&_li:last-child]:[border-right:0] [&_span]:text-ink [&_span]:text-body [&_span]:tracking-[.22em] [&_span]:uppercase max-[1200px]:mt-11.25 max-[900px]:max-w-155 max-[540px]:mt-8.5 max-[540px]:[&_li]:gap-y-3.25 max-[540px]:[&_li]:gap-x-3.25 max-[540px]:[&_svg]:w-9.25 max-[540px]:[&_svg]:h-9.25 max-[540px]:[&_span]:tracking-[.16em]" aria-label="Our commitment">
            {values.map(({ icon: Icon, first, second }) => (
              <li key={first}><Icon size={49} strokeWidth={1.7} aria-hidden="true" /><span>{first}<br />{second}</span></li>
            ))}
          </ul>
        </div>
        <div className="relative min-w-0 mt-16.5 text-center max-[900px]:max-w-132.5 max-[900px]:w-full max-[900px]:mt-0 max-[900px]:mr-auto max-[900px]:mb-0 max-[900px]:ml-auto">
          <Image src="/logo/rdcsp_logo.png" alt="RD Prestige Services Corp. — Your one stop accounting services shop" width={2000} height={1302} sizes="(max-width: 900px) 80vw, 34vw" className="block w-[94%] h-auto ml-auto mr-auto max-[900px]:w-[85%]" />
          <p className="mt-5.75 mr-[-14px] mb-0 ml-[-14px] text-ink text-caption font-semibold tracking-[.14em] uppercase max-[1200px]:tracking-[.14em] max-[1200px]:ml-0 max-[1200px]:mr-0 max-[540px]:mt-4.5 max-[540px]:tracking-[.14em]">Accessible. Practical. Scalable. Affordable.</p>
          <div className="flex justify-center gap-y-2.5 gap-x-2.5 mt-5.5 mr-0 mb-5.5 ml-0 [&_span]:w-16.25 [&_span]:h-1.25 [&_span]:rounded-[4px] [&_span]:bg-[var(--indigo-800)] [&_span:nth-child(2)]:bg-[var(--red-600)] max-[540px]:mt-4.25 max-[540px]:mb-4.25 max-[540px]:gap-y-2 max-[540px]:gap-x-2 max-[540px]:[&_span]:w-11 max-[540px]:[&_span]:h-1" aria-hidden="true"><span /><span /><span /></div>
          <p className="mt-0 mr-[-20px] mb-0 ml-[-20px] text-copy font-heading text-body italic max-[1200px]:ml-0 max-[1200px]:mr-0">Your Goals. Our Expertise. A Stronger Tomorrow.</p>
        </div>
      </div>
    </section>
  );
}
