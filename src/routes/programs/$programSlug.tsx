import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check } from "lucide-react";
import { SiteFrame, DemoButton, RequestModal } from "@/components/alystro/layout";
import { programs, pageHead } from "@/lib/alystro-content";
export const Route = createFileRoute("/programs/$programSlug")({
  head: ({ params }) =>
    pageHead(
      `${programs.find((p) => p.slug === params.programSlug)?.name ?? "School"} Program`,
      "Explore structured three-month ALYSTRO programs with live classes, practical projects and digital skills.",
    ),
  component: Program,
});
function Program() {
  const { programSlug } = Route.useParams();
  const p = programs.find((p) => p.slug === programSlug);
  const [open, setOpen] = useState(false);
  return (
    <SiteFrame>
      <main className="standalone container">
        <div className="standalone-inner">
          {p ? (
            <>
              <div className="eyebrow">{p.classes} · 3-Month Structured Program</div>
              <h1>{p.name}</h1>
              <p>{p.description}</p>
              <ul className="feature-list">
                {p.features.map((f) => (
                  <li key={f}>
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>
              <p>
                Live + recorded learning, practical projects, progress tracking and a digital
                certificate after eligible program completion.
              </p>
              <DemoButton onOpen={() => setOpen(true)}>Explore a School Partnership</DemoButton>
            </>
          ) : (
            <>
              <h1>Program not found.</h1>
              <p>
                <a href="/#programs" className="text-primary">
                  Explore our programs →
                </a>
              </p>
            </>
          )}
        </div>
      </main>
      {open && <RequestModal kind="demo" onClose={() => setOpen(false)} />}
    </SiteFrame>
  );
}
