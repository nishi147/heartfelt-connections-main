import { createFileRoute } from "@tanstack/react-router";
import { SiteFrame } from "@/components/alystro/layout";
import { pageHead } from "@/lib/alystro-content";
export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead("Privacy Information", "Privacy information for the ALYSTRO website preview."),
  component: Privacy,
});
function Privacy() {
  return (
    <SiteFrame>
      <main className="standalone container">
        <div className="standalone-inner">
          <h1>Privacy information.</h1>
          <p>
            This website is a preview. Demo requests, messages, login details and certificate
            searches are not sent to ALYSTRO or saved by the preview forms.
          </p>
          <p>
            The final privacy policy, including how student and school information is handled, must
            be reviewed and published before the learning platform or enquiry service launches.
          </p>
          <p>This notice is not a finalized privacy policy.</p>
        </div>
      </main>
    </SiteFrame>
  );
}
