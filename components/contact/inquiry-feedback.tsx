import { CircleAlert, CircleCheck } from "lucide-react";

export default function InquiryFeedback({ message, kind }: { message: string; kind: "success" | "error" | null }) {
  return (
    <div role="status" aria-live="polite">
      {message && kind && <div className="inquiry-feedback" data-kind={kind}>
        {kind === "success" ? <CircleCheck size={20} aria-hidden="true" /> : <CircleAlert size={20} aria-hidden="true" />}
        <p><strong>{kind === "success" ? "Submitted: " : "Submission problem: "}</strong>{message}</p>
      </div>}
    </div>
  );
}
