import type { Metadata } from "next";
import LegalPage from "@/components/legal/legal-page";
import { legalPolicies } from "@/lib/legal-policies";

export const metadata: Metadata = {
  title: "Cookies and Analytics | RD Prestige Services Corp.",
  description: "Information about cookies, analytics, and browser settings on the RD Prestige Services Corp. website.",
};

export default function CookiesPolicyPage() {
  return <LegalPage policy={legalPolicies.cookies} />;
}
