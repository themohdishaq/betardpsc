import type { Metadata } from "next";
import LegalPage from "@/components/legal/legal-page";
import { legalPolicies } from "@/lib/legal-policies";

export const metadata: Metadata = {
  title: "Terms of Use | RD Prestidge Services Corp.",
  description: "Terms governing use of the RD Prestidge Services Corp. website, including informational content, user conduct, privacy, and contact details.",
};

export default function TermsOfUsePage() {
  return <LegalPage policy={legalPolicies.terms} />;
}
