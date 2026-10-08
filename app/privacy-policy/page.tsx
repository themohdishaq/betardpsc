import type { Metadata } from "next";
import LegalPage from "@/components/legal/legal-page";
import { legalPolicies } from "@/lib/legal-policies";

export const metadata: Metadata = {
  title: "Privacy Policy | RD Prestidge Services Corp.",
  description: "How RD Prestidge Services Corp. collects, uses, retains, and protects personal information, and how to contact the Privacy Officer.",
};

export default function PrivacyPolicyPage() {
  return <LegalPage policy={legalPolicies.privacy} />;
}
