"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }

    function handleOutsideClick(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false);
    }

    const desktop = window.matchMedia("(min-width: 1200px)");
    function handleResize() {
      if (desktop.matches) setOpen(false);
    }

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("pointerdown", handleOutsideClick);
    desktop.addEventListener("change", handleResize);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("pointerdown", handleOutsideClick);
      desktop.removeEventListener("change", handleResize);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className="typography-surface sticky top-0 z-[50] shrink-0 [border-bottom:1px_solid_#edf0f6] bg-[#fff] text-ink font-sans shadow-[0_4px_24px_rgb(22_40_78_/_4%)] [&_a:focus-visible]:[outline:3px_solid_#2E357E] [&_a:focus-visible]:outline-offset-[5px]"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <div className="flex items-center justify-between gap-y-6 gap-x-6 max-w-384 min-h-24 ml-auto mr-auto pt-2.5 pr-6 pb-2.5 pl-6 max-[1200px]:flex-wrap max-[1200px]:gap-y-0 max-[1200px]:gap-x-0 max-[480px]:min-h-19.5 max-[480px]:pt-2.5 max-[480px]:pr-4 max-[480px]:pb-2.5 max-[480px]:pl-4">
        <Link
          href="/"
          className="inline-flex shrink-0 items-center rounded-md"
          aria-label="RD Prestige Services Corp. — Home"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo/rdcsp_logo.png"
            alt=""
            width={2000}
            height={1302}
            sizes="(max-width: 480px) 90px, 117px"
            preload
            className="h-19 w-auto object-contain max-[480px]:h-14.5"
          />
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className="hidden items-center justify-center w-11 h-11 shrink-0 [border:1px_solid_#e2e8f3] rounded-[10px] bg-[#f6f8fd] text-brand cursor-pointer focus-visible:[outline:3px_solid_#2E357E] focus-visible:outline-offset-[5px] max-[1200px]:inline-flex"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
        </button>

        <nav id="primary-navigation" aria-label="Main navigation" className={`flex items-center flex-1 justify-end gap-y-[clamp(24px,_3vw,_56px)] gap-x-[clamp(24px,_3vw,_56px)] max-[1200px]:hidden components-navbar-navbar-navigation [@media(max-width:_1199px)]:[&.components-navbar-navbar-open]:[display:flex] [@media(max-width:_1199px)]:[&.components-navbar-navbar-open]:[flex:0_0_100%] [@media(max-width:_1199px)]:[&.components-navbar-navbar-open]:[flex-direction:column] [@media(max-width:_1199px)]:[&.components-navbar-navbar-open]:[align-items:stretch] [@media(max-width:_1199px)]:[&.components-navbar-navbar-open]:[gap:18px] [@media(max-width:_1199px)]:[&.components-navbar-navbar-open]:[max-height:calc(100dvh_-_100px)] [@media(max-width:_1199px)]:[&.components-navbar-navbar-open]:[overflow-y:auto] [@media(max-width:_1199px)]:[&.components-navbar-navbar-open]:[margin-top:12px] [@media(max-width:_1199px)]:[&.components-navbar-navbar-open]:[padding:14px_0_12px] [@media(max-width:_1199px)]:[&.components-navbar-navbar-open]:[border-top:1px_solid_#edf0f6] ${open ? `components-navbar-navbar-open` : ""} `}>
          <ul className="flex items-center gap-y-[clamp(18px,_1.8vw,_30px)] gap-x-[clamp(18px,_1.8vw,_30px)] mt-0 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-0 list-none max-[1200px]:flex-col max-[1200px]:items-stretch max-[1200px]:gap-y-1 max-[1200px]:gap-x-1">
            {navigation.map(({ label, href }) => {
              const active = pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
              return (
                <li key={href}>
                  <Link href={href} className={`relative flex items-center min-h-12 text-ink text-small font-medium whitespace-nowrap [transition:color_160ms_ease] hover:text-brand max-[1200px]:pt-0 max-[1200px]:pr-3.5 max-[1200px]:pb-0 max-[1200px]:pl-3.5 max-[1200px]:rounded-[8px] max-[1200px]:hover:bg-[#eef4ff] components-navbar-navbar-link [&::after]:[position:absolute] [&::after]:[right:0] [&::after]:[bottom:5px] [&::after]:[left:0] [&::after]:[height:3px] [&::after]:[border-radius:3px] [&::after]:[background:#2E357E] [&::after]:[content:""] [&::after]:[transform:scaleX(0)] [&::after]:[transition:transform_160ms_ease] [&:hover::after]:[transform:scaleX(1)] [@media(max-width:_1199px)]:[&::after]:[display:none] [@media(prefers-reduced-motion:_reduce)]:[transition:none] [@media(prefers-reduced-motion:_reduce)]:[&::after]:[transition:none] ${active ? `text-brand! font-bold! max-[1200px]:bg-[#eef4ff] components-navbar-navbar-active [&::after]:[transform:scaleX(1)]` : ""} `} aria-current={active ? "page" : undefined} onClick={() => setOpen(false)}>
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link href="/consultation" className="typography-inverse inline-flex items-center justify-center shrink-0 gap-y-3 gap-x-3 min-h-12.5 pt-3 pr-5.5 pb-3 pl-5.5 [border:1px_solid_#2E357E] rounded-[9px] bg-[#2E357E] text-white text-body font-semibold whitespace-nowrap shadow-[0_5px_14px_rgb(46_53_126_/_16%)] [transition:background_160ms_ease,_box-shadow_160ms_ease] hover:bg-[#252d6b] hover:shadow-[0_7px_18px_rgb(46_53_126_/_24%)] max-[1200px]:self-start max-[480px]:self-stretch components-navbar-navbar-consultation [@media(prefers-reduced-motion:_reduce)]:[transition:none]" aria-current={pathname === "/consultation" ? "page" : undefined} onClick={() => setOpen(false)}>
            <CalendarDays size={20} strokeWidth={1.8} aria-hidden="true" />
            Request a Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
