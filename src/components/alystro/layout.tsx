import { useEffect, useState, useRef } from "react";
import { Menu, X, ArrowUpRight, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./dashboard";
import { navLinks } from "@/lib/alystro-content";
export type FormKind = "demo" | "contact";
export function DemoButton({
  onOpen,
  children = "Book a School Demo",
  variant = "default",
}: {
  onOpen: () => void;
  children?: React.ReactNode;
  variant?: "default" | "outline" | "secondary";
}) {
  return (
    <Button onClick={onOpen} variant={variant}>
      {children}
      <ArrowUpRight />
    </Button>
  );
}
export function Navbar({ onDemo }: { onDemo: () => void }) {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const update = () => setCompact(window.scrollY > 40);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <header className={`navbar ${compact ? "compact" : ""}`}>
      <div className="container nav-inner">
        <Logo />
        <nav className="nav-links" aria-label="Main navigation">
          {navLinks.map(([title, url]) => (
            <a key={title} href={url}>
              {title}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <Button variant="ghost" asChild className="login-link">
            <a href="/login">Login</a>
          </Button>
          <Button onClick={onDemo}>
            Book a Demo
            <ArrowUpRight />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="mobile-trigger"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <nav className="mobile-menu" aria-label="Mobile navigation">
          {navLinks.map(([title, url]) => (
            <a key={title} href={url} onClick={() => setOpen(false)}>
              {title}
            </a>
          ))}
          <a href="/login">Login</a>
        </nav>
      )}
    </header>
  );
}
export function RequestModal({ kind, onClose }: { kind: FormKind; onClose: () => void }) {
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    ref.current?.querySelector<HTMLElement>("button")?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const list = ref.current?.querySelectorAll<HTMLElement>("button,input,select,textarea,a");
        if (!list?.length) return;
        const first = list[0],
          last = list[list.length - 1];
        if (!first || !last) return;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = old;
      document.removeEventListener("keydown", key);
      previous?.focus();
    };
  }, [onClose]);
  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="modal"
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby="request-title"
      >
        <div className="modal-top">
          <h2 id="request-title">
            {kind === "demo" ? "Let’s meet your future-ready school." : "Talk to ALYSTRO"}
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close form">
            <X />
          </Button>
        </div>
        <p>
          {kind === "demo"
            ? "Tell us a little about your school and the programs you’re interested in."
            : "We’d love to hear what you have in mind."}
        </p>
        {done ? (
          <div className="form-result" role="status">
            <CheckCircle2 className="text-primary mb-3" />
            <strong>Your form is ready.</strong>
            <p>
              This is a preview. Your request has not been sent or saved; enquiry delivery will be
              connected before launch.
            </p>
            <Button className="mt-4" onClick={onClose}>
              Done
            </Button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            <label className="form-field">
              Your name
              <input required name="name" autoComplete="name" placeholder="Full name" />
            </label>
            <label className="form-field">
              Work email
              <input
                required
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@school.edu"
              />
            </label>
            {kind === "demo" && (
              <>
                <label className="form-field">
                  School name
                  <input
                    required
                    name="school"
                    autoComplete="organization"
                    placeholder="Your school"
                  />
                </label>
                <label className="form-field">
                  Program of interest
                  <select name="program" defaultValue="">
                    <option value="" disabled>
                      Select a program
                    </option>
                    <option>Foundation · Class 6–8</option>
                    <option>Skill Builder · Class 9–10</option>
                    <option>Future Ready · Class 11–12</option>
                    <option>All programs</option>
                  </select>
                </label>
              </>
            )}
            <label className="form-field">
              {kind === "demo" ? "Anything else? (optional)" : "Your message"}
              <textarea
                name="message"
                rows={3}
                required={kind === "contact"}
                placeholder="Tell us more…"
              />
            </label>
            <Button type="submit" className="form-submit">
              {kind === "demo" ? "Preview Demo Request" : "Preview Message"}
              <ArrowRight />
            </Button>
            <p className="form-note">Preview form only. Requests are not yet sent or stored.</p>
          </form>
        )}
      </div>
    </div>
  );
}
export function Footer({ onDemo, onContact }: { onDemo: () => void; onContact: () => void }) {
  const cols = [
    [
      "Company",
      ["About", "/about"],
      ["Programs", "/#programs"],
      ["Courses", "/#skills"],
      ["Careers", "/about#careers"],
      ["Contact", "#contact"],
    ],
    [
      "For Schools",
      ["School Partnership", "/#schools"],
      ["Book a Demo", "#demo"],
      ["Programs", "/#programs"],
      ["Resources", "/resources"],
    ],
    [
      "For Students",
      ["Courses", "/#skills"],
      ["Projects", "/#projects"],
      ["Certificates", "/#certificates"],
      ["Login", "/login"],
    ],
    [
      "Resources",
      ["FAQs", "/#faq"],
      ["Learning Resources", "/resources"],
      ["Student Projects", "/#projects"],
      ["Certificate Verification", "/verify"],
    ],
  ];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>
              Empowering Students for the Future.
              <br />
              Future-ready skills. Smarter learning.
              <br />
              Stronger schools.
            </p>
          </div>
          {cols.map(([title, ...links]) => (
            <div className="footer-column" key={String(title)}>
              <h3>{String(title)}</h3>
              {links.map((link) => {
                const [label, url] = link as string[];
                return (
                  <a
                    key={label}
                    href={url}
                    onClick={(e) => {
                      if (url === "#demo" || url === "#contact") {
                        e.preventDefault();
                        url === "#demo" ? onDemo() : onContact();
                      }
                    }}
                  >
                    {label}
                  </a>
                );
              })}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© 2026 ALYSTRO. All rights reserved.</span>
          <div>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms & Conditions</a>
            <span>Made for a brighter tomorrow ↗</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
export function SiteFrame({ children }: { children: React.ReactNode }) {
  const [form, setForm] = useState<FormKind | null>(null);
  return (
    <>
      <Navbar onDemo={() => setForm("demo")} />
      {children}
      <Footer onDemo={() => setForm("demo")} onContact={() => setForm("contact")} />
      {form && <RequestModal kind={form} onClose={() => setForm(null)} />}
    </>
  );
}
