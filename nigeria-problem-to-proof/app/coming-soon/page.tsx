import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Registration is coming soon · Nigeria Problem to Proof',
  description: 'Registration for Nigeria Problem to Proof is not open yet.',
}

export default function ComingSoon() {
  return (
    <main className="soon">
      <div className="soon-grid" />
      <div className="soon-orb" />

      <header className="soon-head">
        <Link className="brand" href="/" aria-label="Nigeria Problem to Proof home">
          <span>NIGERIA</span>
          <span>PROBLEM <i>TO</i> PROOF</span>
        </Link>
        <Link className="soon-back-link" href="/">Back to homepage</Link>
      </header>

      <section className="soon-body">
        <div className="eyebrow"><span className="pulse" /> SEASON 01 · REGISTRATION</div>
        <h1>
          REGISTRATION<br />IS <em>COMING</em><br />SOON.
        </h1>
        <p className="soon-copy">
          The programme is not open for sign-ups yet. When registration opens, this is where
          builders will join. The problems are not going anywhere.
        </p>
        <div>
          <Link className="ghost-btn" href="/"><span>BACK TO HOMEPAGE</span><b>↗</b></Link>
        </div>
      </section>

      <footer className="soon-foot">NIGERIA PROBLEM TO PROOF</footer>
    </main>
  )
}
