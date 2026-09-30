import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "Resources | RD Prestige Services Corp.";
const description = "Explore financial learning resources, preparation checklists, planning worksheets, and trusted Canadian financial information sources.";

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

export default function ResourcesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
