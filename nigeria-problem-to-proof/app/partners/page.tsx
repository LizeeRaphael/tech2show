import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from '../icons'
import { SiteFooter, SiteHeader } from '../site'

export const metadata: Metadata = {
  title: 'Partners · Nigeria Problem to Proof',
  description:
    'NPP needs an ecosystem of organisations providing funding, technology, connectivity, hardware, expertise and field access. Become a partner.',
}

const needs = [
  'Funding', 'Technology', 'Cloud resources', 'AI', 'Hardware', 'Components', 'Connectivity',
  'Food', 'Accommodation', 'Testing', 'Technical expertise', 'Field access', 'Media', 'Deployment support',
]

const categories = [
  'Technology Partner', 'Connectivity Partner', 'Hardware Partner', 'Financial Partner', 'Industry Partner',
  'Strategic Partner', 'Media Partner', 'Development Partner', 'Resource Partner',
]

export default function Partners() {
  return (
    <main className="page">
      <SiteHeader />

      <section className="page-hero">
        <p className="section-kicker">PARTNERS</p>
        <h1 className="page-title">HELP NIGERIA<br /><span>BUILD SOLUTIONS.</span></h1>
        <p className="lead">
          NPP requires an ecosystem of organisations that can provide funding, technology, cloud
          resources, AI, hardware, components, connectivity, food, accommodation, testing, technical
          expertise, field access, media and deployment support.
        </p>
        <div className="cta-row hero-cta">
          <Link className="primary-btn" href="/contact?category=partnerships#enquiry"><span>BECOME A PARTNER</span><ArrowUpRight /></Link>
          <Link className="ghost-btn" href="/sponsorship"><span>VIEW SPONSORSHIP LEVELS</span><ArrowUpRight /></Link>
        </div>
      </section>

      <section className="band split">
        <div>
          <p className="section-kicker">WHAT THE PROGRAMME NEEDS</p>
          <h2 className="page-title sm">SUPPORT<br /><span>THAT BUILDS.</span></h2>
        </div>
        <ul className="needs">
          {needs.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </section>

      <section className="band split">
        <div>
          <p className="section-kicker">PARTNER CATEGORIES</p>
          <h2 className="page-title sm">THE TYPE<br /><span>OF SUPPORT.</span></h2>
          <p className="body-copy">
            These categories describe the type of support an organisation can provide. They are
            separate from the commercial partnership levels, which are explained on the{' '}
            <Link className="text-link" href="/sponsorship">Sponsorship page</Link>.
          </p>
        </div>
        <ol className="cat-list">
          {categories.map((c, i) => (
            <li key={c}>
              <small>{String(i + 1).padStart(2, '0')}</small>
              <span>{c}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="band split">
        <div>
          <p className="section-kicker">CURRENT PARTNERS</p>
          <h2 className="page-title sm">NONE<br /><span>ANNOUNCED YET.</span></h2>
        </div>
        <p className="body-copy">
          Organisations are listed here only once their partnership has been formally confirmed.
          Nothing on this page implies that any organisation has already partnered with NPP.
        </p>
      </section>

      <section className="band cta-band">
        <div>
          <p className="section-kicker">GET INVOLVED</p>
          <h2 className="page-title sm">YOUR ORGANISATION<br /><span>CAN HELP.</span></h2>
        </div>
        <div className="cta-row">
          <Link className="primary-btn" href="/contact?category=partnerships#enquiry"><span>BECOME A PARTNER</span><ArrowUpRight /></Link>
        </div>
      </section>

      <div className="page-foot"><SiteFooter /></div>
    </main>
  )
}
