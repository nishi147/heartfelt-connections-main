import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, LockKeyhole } from "lucide-react";
import { SiteFrame } from "@/components/alystro/layout";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/alystro-content";
export const Route = createFileRoute("/login")({
  head: () =>
    pageHead(
      "Welcome to Your Learning Space",
      "ALYSTRO student, teacher and school login. Your future-ready learning space.",
    ),
  component: Login,
});
function Login() {
  const [message, setMessage] = useState(false);
  return (
    <SiteFrame>
      <main className="standalone container">
        <div className="standalone-inner">
          <div className="eyebrow">Your learning journey</div>
          <h1>Welcome back.</h1>
          <p>Your next big idea starts here.</p>
          <div className="standalone-form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setMessage(true);
              }}
            >
              <label className="form-field">
                Email address
                <input type="email" autoComplete="username" required placeholder="you@school.edu" />
              </label>
              <label className="form-field">
                Password
                <input
                  type="password"
                  autoComplete="current-password"
                  required
                  minLength={6}
                  placeholder="Enter your password"
                />
              </label>
              <Button type="submit" className="form-submit">
                Continue
                <ArrowRight />
              </Button>
            </form>
            <p className="form-note">
              <LockKeyhole size={13} className="inline mr-1" />
              Preview only. Student and school sign-in is not connected yet.
            </p>
            {message && (
              <div className="form-result" role="status">
                Sign-in will be available when the ALYSTRO learning platform launches. No
                credentials were sent or stored.
              </div>
            )}
          </div>
        </div>
      </main>
    </SiteFrame>
  );
}
