import { createFileRoute } from "@tanstack/react-router";
import { SiteFrame } from "@/components/alystro/layout";
import { pageHead } from "@/lib/alystro-content";
export const Route = createFileRoute("/schools/$schoolSlug")({
  head: () =>
    pageHead(
      "School Learning Space",
      "A dedicated ALYSTRO school learning space for structured future-ready education.",
    ),
  component: SchoolPage,
});
function SchoolPage() {
  return (
    <SiteFrame>
      <main className="standalone container">
        <div className="standalone-inner">
          <div className="eyebrow">ALYSTRO for schools</div>
          <h1>A dedicated learning space.</h1>
          <p>
            Individual school pages will be available when school partnerships and the learning
            platform are connected.
          </p>
          <a href="/#schools" className="text-primary text-sm">
            Explore ALYSTRO for schools →
          </a>
        </div>
      </main>
    </SiteFrame>
  );
}
