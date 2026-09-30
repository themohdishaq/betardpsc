import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "Request a Consultation | RD Prestige Services Corp.";
const description = "Tell us about your financial goals and request a personalized consultation for accounting, tax, training, or business support.";

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

export default function ConsultationLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
