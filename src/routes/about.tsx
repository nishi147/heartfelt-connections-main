import { createFileRoute } from "@tanstack/react-router";
import { SiteFrame } from "@/components/alystro/layout";
import { pageHead } from "@/lib/alystro-content";
export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "About ALYSTRO",
      "Discover ALYSTRO’s approach to technology-driven learning, future-ready students and stronger schools.",
    ),
  component: About,
});
function About() {
  return (
    <SiteFrame>
      <main className="standalone container">
        <div className="standalone-inner">
          <div className="eyebrow">Empowering students for the future</div>
          <h1>Education for what comes next.</h1>
          <p>
            ALYSTRO is a technology-driven EdTech platform bringing school programs, coding, AI,
            digital skills and creative learning into one connected ecosystem.
          </p>
          <p>
            We believe students need more than textbooks. Practical projects, structured support and
            meaningful progress help them build confidence with the tools shaping their future.
          </p>
          <h2 className="text-2xl mt-12 mb-5" id="careers">
            Build the future with us.
          </h2>
          <p>Career opportunities will be announced here when available.</p>
          <a href="/#schools" className="text-primary text-sm">
            Explore school partnerships →
          </a>
        </div>
      </main>
    </SiteFrame>
  );
}
