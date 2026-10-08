import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "Request a Consultation | RD Prestidge Services Corp.";
const description = "Request a personalized consultation for accounting, tax, payroll, treasury, IT consulting, professional education, or risk management and insurance.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "RD Prestidge Services Corp.",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function ConsultationLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
