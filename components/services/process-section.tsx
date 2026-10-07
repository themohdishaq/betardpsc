import { ChartNoAxesCombined, FileText, MessageSquare, Settings } from "lucide-react";
import Reveal from "@/components/motion/reveal";
import styles from "./process-section.module.css";

const steps = [
  { icon: MessageSquare, title: "Understand Your Needs", description: "We listen to your goals and challenges." },
  { icon: FileText, title: "Plan & Strategize", description: "We design the right solution for you." },
  { icon: Settings, title: "Implement", description: "We put the plan into action." },
  { icon: ChartNoAxesCombined, title: "Deliver Results", description: "You achieve clarity, confidence and growth." },
];

export default function ProcessSection() {
  return (
    <section aria-labelledby="process-title" className={`typography-surface ${styles.section}`}>
      <div className="mx-auto max-w-360 px-5 py-12 sm:px-7 sm:py-16 lg:px-[clamp(24px,4.5vw,65px)]">
        <Reveal className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div>
            <p className="mb-3 flex items-center gap-3 text-caption font-semibold uppercase tracking-[.14em] text-brand"><span aria-hidden="true" className="h-0.5 w-8 bg-[#299ee8]" />How we work</p>
            <h2 id="process-title" className="text-section">Our Process</h2>
            <p className="mt-3 text-body text-copy">Simple. Transparent. Effective.</p>
          </div>
          <p className="max-w-125 text-body text-copy">We follow a clear and collaborative process to ensure you get the best results, every step of the way.</p>
        </Reveal>
        <div className={styles.timeline}>
          <svg className={styles.wave} viewBox="0 0 1200 490" preserveAspectRatio="none" fill="none" aria-hidden="true">
            <path d="M150 126 C300 126 300 346 450 346 S600 126 750 126 S900 346 1050 346" stroke="#8492a4" strokeWidth="4" strokeDasharray="1 13" strokeLinecap="round" />
            {[{ x: 150, y: 126 }, { x: 450, y: 346 }, { x: 750, y: 126 }, { x: 1050, y: 346 }].map(({ x, y }, index) => (
              <g key={x}>
                <circle cx={x} cy={y} r="16" fill="#fff" stroke="#8fcdf1" strokeWidth="2" />
                <circle cx={x} cy={y} r="11" fill={index < 2 ? "#78c4ee" : "#426fca"} />
              </g>
            ))}
          </svg>
          <ol className={styles.steps}>
            {steps.map(({ icon: Icon, title, description }, index) => (
              <li key={title} className={styles.step}>
                <Reveal delay={index * 0.08} className={styles.content}>
                  <div className={styles.orbit}>
                    <span className={styles.disc}><Icon size={46} strokeWidth={1.5} aria-hidden="true" /></span>
                    <span aria-hidden="true" className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className={styles.copy}>
                    <h3 className="mb-2 text-card-heading font-semibold"><span className="sr-only">Step {index + 1}: </span>{title}</h3>
                    <p className="text-body text-copy">{description}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}