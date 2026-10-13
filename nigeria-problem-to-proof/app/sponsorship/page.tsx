import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from '../icons'
import { Figure, IllustrationSlot } from '../figure'
import { SiteFooter, SiteHeader } from '../site'
import { siteConfig } from '../site-config'

export const metadata: Metadata = {
  title: 'Sponsorship · Nigeria Problem to Proof',
  description:
    'NPP needs both financial support and practical resources. See the partnership levels: Gold, Silver, Bronze and Regular.',
}

const examples = [
  'A technology partner may provide cloud resources and also contribute funding.',
  'A telecommunications partner may provide connectivity and cash.',
  'A food company may support the 30-day feeding programme and contribute additional funds.',
  'An engineering company may provide equipment, components and technical services.',
  'A bank may provide financial support and business expertise.',
]

const levels = [
  { name: 'GOLD', value: '₦25m+', note: 'total agreed contribution' },
  { name: 'SILVER', value: '₦10m+', note: '' },
  { name: 'BRONZE', value: '₦5m+', note: '' },
  { name: 'REGULAR', value: '₦1m+', note: '' },
]

const contributionTypes = ['Cash', 'Products', 'Services', 'Infrastructure', 'Media', 'Technology', 'Other approved resources']

export default function Sponsorship() {
  const pkg = siteConfig.partnershipPackageUrl
  const art = siteConfig.images.sponsorshipIllustration
  return (
    <main className="page">
      <SiteHeader />

      <section className="page-hero">
        <p className="section-kicker">SPONSORSHIP</p>
        <h1 className="page-title long">YOUR ORGANISATION<br />CAN HELP BUILD<br /><span>THE SOLUTION.</span></h1>
        <div className="sponsor-intro">
          <div>
            <p className="lead">NPP needs both financial support and practical resources.</p>
            <ul className="examples">
              {examples.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>
          <Figure image={siteConfig.images.sponsorshipPhoto} priority />
        </div>
      </section>

      <section className="band light">
        <p className="section-kicker">PARTNERSHIP LEVELS</p>
        <ol className="levels">
          {levels.map((l) => (
            <li key={l.name}>
              <h2>{l.name}</h2>
              <strong>{l.value}</strong>
              <span>{l.note}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="band split">
        <div>
          <p className="section-kicker">HOW CONTRIBUTIONS COUNT</p>
          <h2 className="page-title sm">NO MANDATORY<br /><span>CASH / IN-KIND SPLIT.</span></h2>
          <p className="body-copy">
            Approved cash, products, services, infrastructure, media, technology and other resources
            may contribute to the total agreed partnership value, subject to NPP verification and
            agreement.
          </p>
          <ul className="chips">
            {contributionTypes.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <IllustrationSlot image={art} />
      </section>

      <section className="band cta-band">
        <div>
          <p className="section-kicker">NEXT STEP</p>
          <h2 className="page-title sm">TALK TO<br /><span>THE TEAM.</span></h2>
          {!pkg && (
            <p className="note">The partnership package has not been published yet. The download will be enabled once it is available.</p>
          )}
        </div>
        <div className="cta-row">
          {pkg ? (
            <a className="primary-btn" href={pkg} download><span>DOWNLOAD PARTNERSHIP PACKAGE</span><ArrowUpRight /></a>
          ) : (
            <button className="primary-btn" type="button" disabled aria-disabled="true"><span>DOWNLOAD PARTNERSHIP PACKAGE</span><ArrowUpRight /></button>
          )}
          <Link className="ghost-btn" href="/contact?category=partnerships#enquiry"><span>TALK TO THE PARTNERSHIP TEAM</span><ArrowUpRight /></Link>
        </div>
      </section>

      <div className="page-foot"><SiteFooter /></div>
    </main>
  )
}
