import Link from "next/link";

export default function ComingSoon() {
  return (
    <main className="coming-page">
      <div className="coming-glow" />

      <Link href="/" className="back-link">
        ← Back to home
      </Link>

      <div className="coming-content">
        <p className="eyebrow">
          <span />
          SEASON 01 · COMING SOON
        </p>

        <div className="coming-code">
          NP
          <span>→</span>P
        </div>

        <h1>
          You're
          <span> early.</span>
        </h1>

        <p>
          Registration for Nigeria Problem to Proof is getting ready. We are
          bringing real Nigerian problems, real builders and real proof
          together.
        </p>

        <div className="coming-path">
          <span>PROBLEM</span>

          <b>→</b>

          <span>BUILD</span>

          <b>→</b>

          <span>TEST</span>

          <b>→</b>

          <span>PROVE</span>
        </div>

        <Link href="/" className="primary-button">
          Explore the concept
          <span>↗</span>
        </Link>
      </div>
    </main>
  );
}
