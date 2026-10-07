import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import Partnerships from "@/components/home/partnerships";
import HelpCta from "@/components/help-cta";

export const metadata: Metadata = { title: "Partners & Customers | RD Prestidge Services Corp.", description: "Explore RDPSC’s strategic partners and the customers and organizations we serve." };

export default function PartnershipsPage() {
  return <main className="flex-1 font-body text-[#112744]"><PageHero title="Partners & Customers" description="Relationships built on practical expertise, collaboration, and support for businesses, communities, and individuals." /><Partnerships /><HelpCta /></main>;
}
