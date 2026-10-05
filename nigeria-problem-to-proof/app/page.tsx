"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const problems = [
  {
    label: "Education",
    text: "What if better access to learning could start with one practical solution?",
  },
  {
    label: "Healthcare",
    text: "What if technology could remove one more barrier between people and care?",
  },
  {
    label: "Agriculture",
    text: "What if a real problem in the field became the starting point for a useful product?",
  },
  {
    label: "Transport",
    text: "What if everyday movement could become safer, simpler and more predictable?",
  },
  {
    label: "Business",
    text: "What if the tools Nigerian businesses need were built around how they actually work?",
  },
];

const journey = ["Problem", "Build", "Test", "Deploy", "Prove"];

export default function Home() {
  const [problemIndex, setProblemIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setProblemIndex((current) => (current + 1) % problems.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  const activeProblem = problems[problemIndex];

  return (
    <main>
      {/* ================= NAVBAR ================= */}

      <header className="site-header">
        <Link
          href="/"
          className="brand"
          aria-label="Nigeria Problem to Proof home"
        >
          <span className="brand-mark">NP</span>

          <span>
            <strong>Nigeria Problem</strong>
            <small>to Proof</small>
          </span>
        </Link>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <nav className={menuOpen ? "nav open" : "nav"}>
          <a
            href="#concept"
            onClick={() => setMenuOpen(false)}
          >
            The Concept
          </a>

          <a
            href="#journey"
            onClick={() => setMenuOpen(false)}
          >
            How It Works
          </a>

          <a
            href="#problems"
            onClick={() => setMenuOpen(false)}
          >
            Problems
          </a>

          <Link
            className="nav-cta"
            href="/coming-soon"
            onClick={() => setMenuOpen(false)}
          >
            Register Now
          </Link>
        </nav>
      </header>

      {/* ================= HERO ================= */}

      <section className="hero">
        <div className="hero-media" aria-hidden="true">

          {/* YOUR IMAGE GOES HERE:
              /public/hero-tv-tech.png
          */}
          <img
            src="/hero-tv-tech.png"
            alt=""
          />

          <div className="hero-vignette" />
          <div className="hero-grid" />
        </div>

        <div className="hero-content">

          <p className="eyebrow">
            <span />
            SEASON 01 · COMING SOON
          </p>

          <h1>
            Nigeria has
            <span> problems.</span>
          </h1>

          <p className="hero-subtitle">
            What if we stopped talking about them and started building
            the solutions?
          </p>

          <div className="hero-actions">

            <Link
              href="/coming-soon"
              className="primary-button"
            >
              Join the journey
              <span>↗</span>
            </Link>

            <a
              href="#journey"
              className="text-button"
            >
              See how it works
              <span>↓</span>
            </a>

          </div>
        </div>

        {/* Bottom status */}

        <div className="hero-status">

          <span className="live-dot" />

          <span>Real problems</span>

          <i />

          <span>Real builders</span>

          <i />

          <span>Real proof</span>

        </div>

        {/* Scroll */}

        <a
          href="#concept"
          className="scroll-cue"
          aria-label="Scroll to concept"
        >
          <span>Scroll to explore</span>
          <b>↓</b>
        </a>
      </section>

      {/* ================= CONCEPT ================= */}

      <section
        id="concept"
        className="statement-section"
      >
        <div className="section-kicker">
          THE IDEA
        </div>

        <h2>
          A problem is not
          <em> the end.</em>
          <br />
          It is where we start.
        </h2>

        <p>
          Nigeria Problem to Proof is a national technology and
          innovation programme built around real Nigerian challenges —
          taking ideas from problem discovery to working, tested and
          proven solutions.
        </p>
      </section>

      {/* ================= PROBLEMS ================= */}

      <section
        id="problems"
        className="problems-section"
      >
        <div className="section-heading">

          <div>
            <div className="section-kicker">
              START WITH REALITY
            </div>

            <h2>
              What problem would
              <span> you</span> solve?
            </h2>
          </div>

          <p>
            Problems from everyday Nigeria become opportunities to build.
          </p>

        </div>

        <div className="problem-stage">

          <div className="problem-number">
            0{problemIndex + 1}
          </div>

          <div>
            <p className="problem-label">
              {activeProblem.label}
            </p>

            <h3>
              {activeProblem.text}
            </h3>
          </div>

          <div className="problem-dots">

            {problems.map((problem, index) => (
              <button
                key={problem.label}
                aria-label={`Show ${problem.label}`}
                className={
                  index === problemIndex
                    ? "active"
                    : ""
                }
                onClick={() => setProblemIndex(index)}
              />
            ))}

          </div>

        </div>
      </section>

      {/* ================= JOURNEY ================= */}

      <section
        id="journey"
        className="journey-section"
      >
        <div className="section-kicker">
          THE JOURNEY
        </div>

        <h2>
          From <span>problem</span> to proof.
        </h2>

        <div className="journey-track">

          {journey.map((step, index) => (
            <div
              className="journey-step"
              key={step}
            >
              <div className="step-index">
                0{index + 1}
              </div>

              <div className="step-line" />

              <h3>{step}</h3>

              <p>
                {index === 0 &&
                  "Find and understand a real challenge."}

                {index === 1 &&
                  "Turn insight into a working solution."}

                {index === 2 &&
                  "Put it in front of the people it serves."}

                {index === 3 &&
                  "Take the solution into the real world."}

                {index === 4 &&
                  "Show that it creates meaningful value."}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= BUILDERS ================= */}

      <section className="builders-section">

        <div className="builders-copy">

          <div className="section-kicker">
            THE BUILDERS
          </div>

          <h2>
            Don't just watch the problem.
            <span> Build.</span>
          </h2>

          <p>
            Developers, designers, researchers, entrepreneurs,
            students and problem-solvers can become part of the journey.
          </p>

          <Link
            href="/coming-soon"
            className="primary-button"
          >
            I want to build
            <span>↗</span>
          </Link>

        </div>

        <div className="builders-card">

          <span>01</span>
          <strong>REAL PEOPLE</strong>

          <p>
            Building for people who experience the problem.
          </p>

          <span>02</span>
          <strong>REAL USERS</strong>

          <p>
            Testing ideas outside the room.
          </p>

          <span>03</span>
          <strong>REAL PROOF</strong>

          <p>
            Evidence that the solution works.
          </p>

        </div>

      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="final-cta">

        <div className="section-kicker">
          SEASON 01
        </div>

        <h2>
          Ready to build?
        </h2>

        <p>
          Registration is coming soon. Be early.
        </p>

        <Link
          href="/coming-soon"
          className="primary-button large"
        >
          Register now
          <span>↗</span>
        </Link>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <span>
          © 2026 Nigeria Problem to Proof
        </span>

        <span>
          Real problems. Real builders. Real proof.
        </span>

      </footer>
    </main>
  );
}