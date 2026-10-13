import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from '../icons'
import { Logo } from '../site'

export const metadata: Metadata = {
  title: 'Coming soon · Nigeria Problem to Proof',
  description: 'Registration and the show for Nigeria Problem to Proof are not open yet.',
}

export default function ComingSoon() {
  return (
    <main className="soon">
      <div className="soon-grid" />
      <div className="soon-orb" />

      <header className="soon-head">
        <Link className="brand" href="/" aria-label="Nigeria Problem to Proof home">
          <Logo />
        </Link>
        <Link className="soon-back-link" href="/">Back to homepage</Link>
      </header>

      <section className="soon-body">
        <div className="eyebrow"><span className="pulse" /> SEASON 01 · COMING SOON</div>
        <h1>
          SEASON 01<br />IS <em>COMING</em><br />SOON.
        </h1>
        <p className="soon-copy">
          Registration is not open and the show is not live yet. When Season 01 begins, this is
          where builders will register and where you will be able to watch. The problems are not
          going anywhere.
        </p>
        <div>
          <Link className="ghost-btn" href="/"><span>BACK TO HOMEPAGE</span><ArrowUpRight /></Link>
        </div>
      </section>

      <footer className="soon-foot"><Link className="foot-logo" href="/" aria-label="Nigeria Problem to Proof home"><Logo /></Link></footer>
    </main>
  )
}
