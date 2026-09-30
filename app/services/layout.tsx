import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "Our Services | RD Prestige Services Corp.";
const description = "Explore accounting, corporate and personal tax, professional training, consulting, nonprofit support, and international financial services from RD Prestige Services Corp.";

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

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
