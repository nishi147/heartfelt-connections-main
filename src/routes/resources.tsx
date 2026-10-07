import { createFileRoute } from "@tanstack/react-router";
import { SiteFrame } from "@/components/alystro/layout";
import { ProjectsSection, FAQ } from "@/components/alystro/sections";
import { pageHead } from "@/lib/alystro-content";
export const Route = createFileRoute("/resources")({
  head: () =>
    pageHead(
      "Learning Resources & Project Ideas",
      "Explore future-skills project ideas and answers to common questions about ALYSTRO school programs.",
    ),
  component: Resources,
});
function Resources() {
  return (
    <SiteFrame>
      <main>
        <div className="container pt-14">
          <div className="eyebrow text-center">Curiosity is just the beginning</div>
          <h1 className="text-center text-4xl font-bold">Ideas for your next breakthrough.</h1>
        </div>
        <ProjectsSection />
        <FAQ />
      </main>
    </SiteFrame>
  );
}
