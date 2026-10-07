"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useCallback, useRef, type ReactNode } from "react";

/** Keep server-rendered content visible, then reveal it once as it enters view. */
export default function Reveal({ children, className, delay = 0, as = "div" }: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "article";
}) {
  const ref = useRef<HTMLElement>(null);
  const setRef = useCallback((element: HTMLElement | null) => { ref.current = element; }, []);
  const inView = useInView(ref, { once: true, amount: 0.12 });
  const reduceMotion = useReducedMotion();
  const Element = as === "article" ? motion.article : motion.div;

  return (
    <Element
      ref={setRef}
      className={className}
      initial={false}
      animate={inView && reduceMotion === false ? { opacity: [0, 1], y: [18, 0] } : { opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : Math.min(delay, 0.3), ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Element>
  );
}
