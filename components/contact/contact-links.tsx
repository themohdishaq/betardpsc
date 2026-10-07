import { MapPin, MessageCircle } from "lucide-react";
import { company } from "@/lib/company";

const links = [
  { label: "LinkedIn", href: company.linkedin, icon: null },
  { label: "Google Maps", href: company.maps, icon: MapPin },
  { label: "WhatsApp", href: company.whatsapp, icon: MessageCircle },
];

export default function ContactLinks() {
  return (
    <nav aria-label="Connect with RD Prestige Services Corp." className="mt-5 flex flex-wrap gap-2 text-small">
      {links.map(({ label, href, icon: Icon }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-md border border-current/25 px-3 py-2 font-medium transition-colors hover:bg-current/10 focus-visible:outline-2 focus-visible:outline-offset-4">
          {Icon ? <Icon size={18} aria-hidden="true" /> : <span className="text-lg font-bold leading-none" aria-hidden="true">in</span>}
          {label}<span className="sr-only"> (opens in a new tab)</span>
        </a>
      ))}
    </nav>
  );
}
