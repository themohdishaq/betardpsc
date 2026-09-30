import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "About Us | RD Prestige Services Corp.";
const description = "Learn about RD Prestige Services Corp., our story, mission, and commitment to practical financial services, professional training, and stronger communities.";

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

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
