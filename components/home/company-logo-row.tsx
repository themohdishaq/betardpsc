"use client";

import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import type { CompanyRelationship } from "@/lib/relationships";

function CompanyTile({ company }: { company: CompanyRelationship }) {
  const [failedLogo, setFailedLogo] = useState<string | null>(null);
  const hasLogo = Boolean(company.logoSrc) && failedLogo !== company.logoSrc;
  const content = <>
    <div className="typography-surface relative flex min-h-28 items-center justify-center overflow-hidden rounded-xl border border-[var(--line)] bg-white px-5 py-4 text-center">
      {hasLogo ? <Image src={company.logoSrc} alt="" fill sizes="(max-width: 640px) 224px, 240px" className="object-contain p-5" onError={() => setFailedLogo(company.logoSrc)} /> : <span aria-hidden="true" className="min-w-0 break-words text-card-heading font-semibold text-brand">{company.displayName ?? company.name}</span>}
    </div>
    <p className="mt-4 break-words text-body font-semibold text-secondary-copy">{company.name}{company.href && <ArrowUpRight size={14} className="ml-1 inline-block align-middle text-copy" aria-hidden="true" />}</p>
    {company.category && <p className="mt-1 text-small text-secondary-copy">{company.category}</p>}
  </>;
  const tileClass = "block h-full rounded-2xl border border-[var(--line)] bg-white p-4 text-center";
  return company.href ? <a href={company.href} target="_blank" rel="noopener noreferrer" aria-label={company.name + " (opens in a new tab)"} className={tileClass + " transition-[border-color,background-color,box-shadow] duration-300 hover:border-[var(--indigo-800)] hover:bg-white hover:shadow-[0_4px_16px_#1B22600c] focus-visible:outline-2 focus-visible:outline-[var(--indigo-800)] focus-visible:outline-offset-4 motion-reduce:transition-none"}>{content}</a> : <div className={tileClass}>{content}</div>;
}

export default function CompanyLogoRow({ id, title, companies, showTitle = true }: { id: string; title: string; companies: CompanyRelationship[]; showTitle?: boolean }) {
  const ref = useRef<HTMLUListElement>(null);
  const [canScroll, setCanScroll] = useState({ left: false, right: false });
  useEffect(() => {
    const row = ref.current;
    if (!row) return;
    const update = () => {
      const left = row.scrollLeft > 2;
      const right = row.scrollLeft + row.clientWidth < row.scrollWidth - 2;
      setCanScroll(previous => previous.left === left && previous.right === right ? previous : { left, right });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(row);
    row.addEventListener("scroll", update, { passive: true });
    return () => { observer.disconnect(); row.removeEventListener("scroll", update); };
  }, [companies]);
  function scroll(direction: number) {
    const row = ref.current;
    if (!row) return;
    const step = (row.firstElementChild?.getBoundingClientRect().width ?? 224) + 16;
    const count = Math.max(1, Math.floor((row.clientWidth - 16) / step));
    row.scrollBy({ left: direction * step * count, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }
  function handleKeyDown(event: KeyboardEvent<HTMLUListElement>) {
    if (event.target !== event.currentTarget) return;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      scroll(event.key === "ArrowLeft" ? -1 : 1);
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      const row = ref.current;
      row?.scrollTo({ left: event.key === "Home" ? 0 : row.scrollWidth, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    }
  }
  return (
    <div>
      <div className="mb-4 flex min-h-11 flex-wrap items-center justify-between gap-3">
        {showTitle ? <h4 id={id + "-title"} className="text-card-heading font-semibold text-card-ink">{title}</h4> : <span id={id + "-title"} className="text-body text-copy">Our partner network</span>}
        {(canScroll.left || canScroll.right) && <div className="ml-auto flex shrink-0 gap-2">
          {([-1, 1] as const).map(direction => <button key={direction} type="button" aria-label={"Scroll " + title + (direction < 0 ? " left" : " right")} aria-controls={id} disabled={direction < 0 ? !canScroll.left : !canScroll.right} onClick={() => scroll(direction)} className="typography-surface grid size-11 place-items-center rounded-full border border-[var(--line)] bg-white text-brand transition-colors duration-200 hover:border-[var(--indigo-800)] hover:bg-white focus-visible:outline-2 focus-visible:outline-[var(--indigo-800)] focus-visible:outline-offset-4 disabled:cursor-default disabled:border-[var(--cyan-700)] disabled:bg-white disabled:text-[var(--graphite-400)] motion-reduce:transition-none">{direction < 0 ? <ChevronLeft size={20} aria-hidden="true" /> : <ChevronRight size={20} aria-hidden="true" />}</button>)}
        </div>}
      </div>
      <ul ref={ref} id={id} aria-labelledby={id + "-title"} tabIndex={0} onKeyDown={handleKeyDown} className="flex snap-x snap-proximity scroll-px-2 gap-4 overflow-x-auto overscroll-x-contain px-2 pb-5 pt-2 [scrollbar-color:#718eb4_var(--indigo-50)] [scrollbar-width:thin] focus-visible:rounded-lg focus-visible:outline-2 focus-visible:outline-[var(--indigo-800)] focus-visible:outline-offset-4">
        {companies.map(company => <li key={company.name} className="w-56 shrink-0 snap-start sm:w-60"><CompanyTile company={company} /></li>)}
      </ul>
    </div>
  );
}
