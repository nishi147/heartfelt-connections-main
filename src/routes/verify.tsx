import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { SiteFrame } from "@/components/alystro/layout";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/alystro-content";
export const Route = createFileRoute("/verify")({
  head: () =>
    pageHead(
      "Verify a Certificate",
      "Check an ALYSTRO digital certificate and celebrate verified learning achievements.",
    ),
  component: Verify,
});
function Verify() {
  const [status, setStatus] = useState(false);
  return (
    <SiteFrame>
      <main className="standalone container">
        <div className="standalone-inner">
          <ShieldCheck className="text-primary mb-5" size={38} />
          <div className="eyebrow">A record of real learning</div>
          <h1>Verify a Certificate.</h1>
          <p>Enter the certificate ID printed on your ALYSTRO certificate.</p>
          <form
            className="standalone-form"
            onSubmit={(e) => {
              e.preventDefault();
              setStatus(true);
            }}
          >
            <label className="form-field">
              Certificate ID
              <input
                required
                placeholder="e.g. ALY-2026-0001"
                name="certificate"
                onChange={() => setStatus(false)}
              />
            </label>
            <Button type="submit" className="form-submit">
              Check Certificate
              <ArrowRight />
            </Button>
            <p className="form-note">
              Certificate verification is not yet connected to issued certificate records.
            </p>
            {status && (
              <div className="form-result" role="status">
                Verification is currently unavailable. This preview cannot confirm or reject a
                certificate’s authenticity.
              </div>
            )}
          </form>
        </div>
      </main>
    </SiteFrame>
  );
}
