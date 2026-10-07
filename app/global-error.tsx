"use client";

import StatusPage from "@/components/status-page";
import "./globals.css";

export default function GlobalError({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return <html lang="en" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}><body className="flex min-h-screen flex-col"><StatusPage code="Oops" title="Something went wrong" description="We are having trouble loading the website. Try again or contact our team if you need assistance." onRetry={retry} /></body></html>;
}
