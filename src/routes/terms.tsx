import { createFileRoute } from "@tanstack/react-router";
import { SiteFrame } from "@/components/alystro/layout";
import { pageHead } from "@/lib/alystro-content";
export const Route = createFileRoute("/terms")({
  head: () =>
    pageHead(
      "Preview Terms",
      "Important information about the ALYSTRO website preview and illustrative content.",
    ),
  component: Terms,
});
function Terms() {
  return (
    <SiteFrame>
      <main className="standalone container">
        <div className="standalone-inner">
          <h1>Preview terms.</h1>
          <p>
            This website demonstrates the planned ALYSTRO experience. Dashboard data, impact
            figures, project examples, testimonials and certificates are illustrative.
          </p>
          <p>
            Forms do not send requests, sign-in is not active, and certificate verification cannot
            confirm credentials. Final program terms, eligibility, fees and service conditions must
            be approved before launch.
          </p>
          <p>This notice is not a finalized service agreement.</p>
        </div>
      </main>
    </SiteFrame>
  );
}
