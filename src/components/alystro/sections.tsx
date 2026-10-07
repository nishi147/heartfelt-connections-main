import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  CalendarDays,
  Video,
  FolderCheck,
  ChartNoAxesCombined,
  Award,
  Check,
  Layers,
  Code2,
  Rocket,
  BrainCircuit,
  Palette,
  School,
  Lightbulb,
  Film,
  MessagesSquare,
  FolderKanban,
  ChevronDown,
  Star,
  QrCode,
  Globe,
  MousePointer2,
  Play,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dashboard, HeroDashboard, Logo } from "./dashboard";
import { DemoButton } from "./layout";
import { programs, faqs } from "@/lib/alystro-content";
import aiCourse from "@/assets/ai-course.jpg";
export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
export function Hero({ onDemo }: { onDemo: () => void }) {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-badge">
          <Sparkles />
          Future-Ready Education Platform
          <ArrowUpRight />
        </div>
        <h1>
          Empowering Students with
          <br />
          the <span>Skills of Tomorrow.</span>
        </h1>
        <p className="hero-description">
          ALYSTRO helps schools deliver structured, technology-driven learning
          <br className="hidden sm:block" /> in AI, coding, digital skills, creativity and
          future-ready careers.
        </p>
        <div className="hero-actions">
          <DemoButton onOpen={onDemo} />
          <Button variant="outline" asChild>
            <a href="#programs">
              Explore Programs
              <ArrowRight />
            </a>
          </Button>
        </div>
        <div className="hero-trust">
          <ShieldCheck />
          Built for Schools<span>·</span>Students<span>·</span>Teachers
        </div>
        <HeroDashboard />
      </div>
    </section>
  );
}
export function TrustBar() {
  const items = [
    ["3-Month Structured Programs", CalendarDays],
    ["Live + Recorded Learning", Video],
    ["Practical Projects", FolderCheck],
    ["Progress Tracking", ChartNoAxesCombined],
    ["Digital Certificates", Award],
  ] as const;
  return (
    <section className="trust-strip">
      <div className="container">
        <p className="trust-title">Built for the future of learning</p>
        <div className="trust-items">
          {items.map(([name, Icon]) => (
            <div className="trust-item" key={name}>
              <Icon />
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function ProgramsSection() {
  const icons = [Layers, Code2, Rocket];
  return (
    <section id="programs" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="A clear path. A brighter future."
          title="Programs Designed for Every Stage"
          description="From first discoveries to future ambitions. A structured learning journey that grows with your students."
        />
        <div className="program-grid">
          {programs.map((p, i) => {
            const Icon = icons[i] ?? Layers;
            return (
              <article className={`program-card ${i === 2 ? "featured" : ""}`} key={p.slug}>
                {i === 2 && <span className="flagship">FUTURE-FOCUSED</span>}
                <div className="program-icon">
                  <Icon size={22} />
                </div>
                <span className="class-label">{p.classes}</span>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <ul className="feature-list">
                  {p.features.map((f) => (
                    <li key={f}>
                      <Check />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant={i === 2 ? "default" : "outline"} asChild>
                  <a href={`/programs/${p.slug}`}>
                    Explore {p.name}
                    <ArrowRight />
                  </a>
                </Button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export function ProblemSection() {
  const gaps = [
    ["Traditional Learning", "Limited exposure to practical technology."],
    ["The Skill Gap", "Students need future-ready digital skills."],
    ["Practical Experience", "Learning should go beyond theory."],
    ["Future Readiness", "Skills aligned with tomorrow’s opportunities."],
  ];
  return (
    <section className="section section-muted">
      <div className="container">
        <SectionHeading
          eyebrow="Education is evolving"
          title="School Education is Changing."
          description="Students need more than textbooks. They need practical technology skills, creativity, problem-solving ability and exposure to the tools shaping the future."
        />
        <div className="four-grid">
          {gaps.map(([title, text], i) => (
            <div className="gap-item" key={title}>
              <span className="number">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function SolutionSection() {
  const modules = [
    ["AI & Digital Skills", BrainCircuit],
    ["Coding & Future Skills", Code2],
    ["Creative & Digital Skills", Palette],
    ["School Learning Management", School],
  ] as const;
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="The ALYSTRO ecosystem"
          title="One Platform. Future-Ready Learning."
          description="Structured programs, practical learning, teacher support and student progress tracking. Connected in one ecosystem."
        />
        <div className="ecosystem">
          {modules.map(([name, Icon]) => (
            <div key={name}>
              <Icon />
              <h3>{name}</h3>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="link" asChild>
            <a href="#programs">
              Explore ALYSTRO Programs
              <ArrowRight />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
export function SkillsGrid() {
  const skills = [
    ["AI & Digital Skills", "Understand and use modern AI and digital technologies.", BrainCircuit],
    ["Coding & Programming", "Develop logical thinking and real-world programming skills.", Code2],
    ["Video Editing", "Turn creativity into professional digital content.", Film],
    ["Future Skills", "Build problem-solving, communication and technology skills.", Lightbulb],
    ["Practical Projects", "Learn by building real projects.", FolderKanban],
    ["Digital Creativity", "Develop creative confidence through technology.", Palette],
  ] as const;
  return (
    <section className="section section-muted" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="More than a curriculum"
          title="Skills That Prepare Students for Tomorrow"
          description="Real skills. Real tools. Real possibilities. Give students the confidence to create what comes next."
        />
        <div className="skills-grid">
          {skills.map(([name, text, Icon], i) => (
            <article className="skill-item" key={name}>
              {i === 0 ? (
                <img
                  src={aiCourse}
                  alt="Artificial intelligence learning artwork"
                  className="skill-art"
                  width={1024}
                  height={768}
                  loading="lazy"
                />
              ) : (
                <Icon />
              )}
              <h3>{name}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export function HowItWorks({ onDemo }: { onDemo: () => void }) {
  const steps = [
    ["School Partnership", "Your school connects with ALYSTRO."],
    ["Program Selection", "Choose programs around your students’ needs."],
    ["Learning & Practice", "Attend classes, revisit recordings and build real projects."],
    ["Track & Certify", "Track attendance and progress, celebrate achievement with certificates."],
  ];
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Simple to start. Built to grow." title="How ALYSTRO Works" />
        <div className="four-grid">
          {steps.map(([title, text], i) => (
            <div className="gap-item" key={title}>
              <span className="number">STEP 0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-9">
          <DemoButton onOpen={onDemo}>Partner With ALYSTRO</DemoButton>
        </div>
      </div>
    </section>
  );
}
export function SchoolSection({ onDemo }: { onDemo: () => void }) {
  return (
    <section className="section section-muted" id="schools">
      <div className="container split">
        <Dashboard school allowToggle={false} />
        <div className="split-copy">
          <div className="eyebrow">Built for schools</div>
          <h2>
            Make Your School
            <br />
            Future-Ready.
          </h2>
          <p>
            Introduce structured technology education without disrupting your existing academic
            ecosystem. We bring the learning. You inspire the possibilities.
          </p>
          <ul className="feature-list">
            {[
              "Structured programs",
              "Live & recorded classes",
              "Student progress tracking",
              "Attendance management",
              "Teacher support",
              "Assignments & assessments",
              "Digital certificates",
              "Reports & analytics",
            ].map((f) => (
              <li key={f}>
                <Check />
                {f}
              </li>
            ))}
          </ul>
          <DemoButton onOpen={onDemo} />
        </div>
      </div>
    </section>
  );
}
export function StudentSection() {
  return (
    <section className="section" id="students">
      <div className="container split">
        <div className="split-copy">
          <div className="eyebrow">Made for curious minds</div>
          <h2>Learn. Build. Create. Grow.</h2>
          <p>
            Students don’t just watch lessons. They learn, practice, build projects and develop
            skills they can actually use.
          </p>
          <ul className="feature-list">
            {[
              "Live classes",
              "Recorded lessons",
              "Assignments & quizzes",
              "Hands-on projects",
              "Progress tracking",
              "Digital certificates",
            ].map((f) => (
              <li key={f}>
                <Check />
                {f}
              </li>
            ))}
          </ul>
          <Button asChild variant="outline">
            <a href="#skills">
              Explore Student Learning
              <ArrowRight />
            </a>
          </Button>
        </div>
        <Dashboard allowToggle={false} />
      </div>
    </section>
  );
}
export function PlatformSection() {
  return (
    <section className="section section-muted" id="platform">
      <div className="container">
        <SectionHeading
          eyebrow="Powerful tools. Simple management."
          title="Everything You Need to Manage Learning."
          description="One connected workspace for your schools, students, teachers and programs. More clarity. Less complexity."
        />
        <div className="platform-preview">
          <Dashboard school full allowToggle={false} />
          <p className="platform-caption">ALYSTRO platform preview · Illustrative data</p>
        </div>
      </div>
    </section>
  );
}
export function ProjectsSection() {
  const projects = [
    ["My First AI Assistant", "AI project · Example student work", "AI", "Python", BrainCircuit],
    [
      "A Website for a Better World",
      "Website project · Example student work",
      "HTML & CSS",
      "Design",
      Globe,
    ],
    [
      "Stories in Motion",
      "Video project · Example student work",
      "Video Editing",
      "Creativity",
      Film,
    ],
    [
      "Code That Solves Problems",
      "Coding project · Example student work",
      "Python",
      "Problem Solving",
      Code2,
    ],
    [
      "My Digital Portfolio",
      "Portfolio project · Example student work",
      "Digital Skills",
      "Design",
      MousePointer2,
    ],
  ] as const;
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="Less watching. More doing."
          title="Learning That Turns Into Real Projects."
          description="From a first line of code to a first creative breakthrough. Every project is a step forward."
        />
        <div className="project-grid">
          {projects.map(([title, text, tag1, tag2, Icon], i) => (
            <article className="project-card" key={title}>
              <div className={`project-art ${i === 1 || i === 3 ? "code-art" : ""}`}>
                {i === 0 ? (
                  <img
                    src={aiCourse}
                    width={1024}
                    height={768}
                    loading="lazy"
                    alt="AI assistant project concept"
                  />
                ) : (
                  <Icon />
                )}
              </div>
              <div className="project-copy">
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="skill-tags">
                  <span>{tag1}</span>
                  <span>{tag2}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-7">
          <Button variant="link" asChild>
            <a href="/resources#projects">
              View Student Projects
              <ArrowRight />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
export function CertificatePreview() {
  return (
    <div className="certificate" aria-label="Sample ALYSTRO certificate">
      <Logo />
      <h3>Certificate of Achievement</h3>
      <p>This certificate is proudly presented to</p>
      <div className="student-name">Aarav Sharma</div>
      <p>For successfully completing the 3-month program</p>
      <strong className="text-[13px]">AI & Digital Skills — Foundation</strong>
      <p>Example School · Completion: 7 October 2026</p>
      <div className="cert-footer">
        <div>
          <span className="cert-sign">Team Alystro</span>
          <p>Authorized Signature</p>
        </div>
        <Award className="text-primary" />
        <div>
          <QrCode className="text-foreground" />
          <p>SAMPLE-2026-001</p>
        </div>
      </div>
      <p className="mt-4">Illustrative certificate · Not a valid credential</p>
    </div>
  );
}
export function CertificateSection() {
  return (
    <section className="section section-muted" id="certificates">
      <div className="container split">
        <CertificatePreview />
        <div className="split-copy">
          <div className="eyebrow">Every milestone matters</div>
          <h2>Recognize Every Achievement.</h2>
          <p>
            Students receive verifiable digital certificates after completing eligible ALYSTRO
            programs. A meaningful record of the skills they’ve learned and the work they’ve put in.
          </p>
          <div className="flex items-center gap-2 text-primary text-xs my-6">
            <ShieldCheck size={17} />
            Digital credentials. Lasting confidence.
          </div>
          <Button variant="outline" asChild>
            <a href="/verify">
              Verify a Certificate
              <ArrowUpRight />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
export function StatsSection() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="four-grid">
          {[
            ["500+", "Students"],
            ["25+", "Schools"],
            ["20+", "Future Skills Programs"],
            ["1,000+", "Projects & Activities"],
          ].map(([n, t]) => (
            <div key={t}>
              <strong>{n}</strong>
              <p>{t}</p>
            </div>
          ))}
        </div>
        <p className="demo-note">
          Illustrative impact figures. Replace with verified ALYSTRO statistics before production.
        </p>
      </div>
    </section>
  );
}
export function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Growing together"
          title="What Schools & Students Say"
          description="A glimpse of the experience we’re building. Illustrative testimonials, not verified endorsements."
        />
        <div className="program-grid">
          {[
            [
              "School Principal",
              "SP",
              "School partner perspective",
              "“A structured approach to technology learning helps us give students more than academic knowledge. It helps us prepare them for what’s next.”",
            ],
            [
              "Student Learner",
              "SL",
              "Student perspective",
              "“Building something of my own makes learning feel different. Every project gives me a little more confidence to try the next idea.”",
            ],
            [
              "Program Teacher",
              "PT",
              "Teacher perspective",
              "“Having lessons, assignments and progress in one place gives us more time to focus on the students and their individual learning journeys.”",
            ],
          ].map(([name, initials, role, quote]) => (
            <article className="testimonial" key={name}>
              <div className="stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <blockquote>{quote}</blockquote>
              <div className="testimonial-person">
                <div className="avatar">{initials}</div>
                <div>
                  <strong>{name}</strong>
                  <p>{role} · Example</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export function FAQ() {
  return (
    <section className="section section-muted" id="faq">
      <div className="container">
        <SectionHeading eyebrow="A little more clarity" title="Questions? We’ve Got Answers." />
        <div className="faq">
          {faqs.map(([q, a]) => (
            <details key={q}>
              <summary>
                {q}
                <ChevronDown />
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
export function FinalCTA({ onDemo, onContact }: { onDemo: () => void; onContact: () => void }) {
  return (
    <section className="final-cta">
      <div className="container">
        <div className="eyebrow">The future starts in your school</div>
        <h2>Ready to Build a Future-Ready School?</h2>
        <p>
          Partner with ALYSTRO and give students the skills, confidence and practical experience
          they need for tomorrow.
        </p>
        <div className="final-actions">
          <DemoButton onOpen={onDemo} />
          <DemoButton onOpen={onContact} variant="secondary">
            Talk to ALYSTRO
          </DemoButton>
        </div>
      </div>
    </section>
  );
}
