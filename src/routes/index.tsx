import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { pageHead } from "@/lib/alystro-content";
import { Navbar, Footer, RequestModal, type FormKind } from "@/components/alystro/layout";
import {
  Hero,
  TrustBar,
  ProgramsSection,
  ProblemSection,
  SolutionSection,
  SkillsGrid,
  HowItWorks,
  SchoolSection,
  StudentSection,
  PlatformSection,
  ProjectsSection,
  CertificateSection,
  StatsSection,
  Testimonials,
  FAQ,
  FinalCTA,
} from "@/components/alystro/sections";
export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Future-Ready Education & School Learning",
      "Empower students with AI, coding, digital skills and practical learning. Explore ALYSTRO’s structured school programs for classes 6–12.",
    ),
  component: Index,
});
function Index() {
  const [form, setForm] = useState<FormKind | null>(null);
  const demo = () => setForm("demo");
  const contact = () => setForm("contact");
  return (
    <>
      <Navbar onDemo={demo} />
      <main>
        <Hero onDemo={demo} />
        <TrustBar />
        <ProgramsSection />
        <ProblemSection />
        <SolutionSection />
        <SkillsGrid />
        <HowItWorks onDemo={demo} />
        <SchoolSection onDemo={demo} />
        <StudentSection />
        <PlatformSection />
        <ProjectsSection />
        <CertificateSection />
        <StatsSection />
        <Testimonials />
        <FAQ />
        <FinalCTA onDemo={demo} onContact={contact} />
      </main>
      <Footer onDemo={demo} onContact={contact} />
      {form && <RequestModal kind={form} onClose={() => setForm(null)} />}
    </>
  );
}
