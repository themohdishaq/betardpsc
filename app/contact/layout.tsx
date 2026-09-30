import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "Contact Us | RD Prestige Services Corp.";
const description = "Contact RD Prestige Services Corp. for accounting, tax, payroll, cash flow advisory, IT consulting, mentorship, and insurance services tailored to your needs and budget.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "RD Prestige Services Corp.",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
