import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "Our Services | RD Prestidge Services Corp.";
const description = "Explore accounting and tax, payroll, treasury and cash flow advisory, IT consulting, professional education and mentorship, and risk management and insurance services.";

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

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
