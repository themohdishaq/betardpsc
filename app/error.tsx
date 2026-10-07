"use client";

import StatusPage from "@/components/status-page";

export default function ErrorPage({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return <StatusPage code="Oops" title="We couldn’t load this page" description="Please try again. If the problem continues, return home or contact our team for help." onRetry={retry} />;
}
