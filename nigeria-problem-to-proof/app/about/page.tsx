import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from '../icons'
import { Figure } from '../figure'
import { SiteFooter, SiteHeader } from '../site'
import { siteConfig } from '../site-config'

export const metadata: Metadata = {
  title: 'About · Nigeria Problem to Proof',
  description:
    'Nigeria Problem to Proof is a national problem-solving and innovation programme that helps Nigerian builders turn real problems into tested, working solutions.',
}

const principles = [
  { title: 'Start with reality.', note: 'Do not invent problems simply because they sound attractive.' },
  { title: 'Respect the people experiencing the problem.', note: 'People are not merely data points or television content.' },
  { title: 'Build for users, not judges.', note: 'A solution must work for the person who needs it.' },
  { title: 'Let evidence matter.', note: 'Claims should be supported by testing and data wherever possible.' },
  { title: 'Give builders the resources they need.', note: 'Do not expect teams to solve difficult problems without the right tools.' },
  { title: 'Protect intellectual property.', note: 'Participants should feel safe bringing their ideas and technology.' },
  { title: 'Do not manufacture drama.', note: 'The reality of building something difficult is enough.' },
  { title: 'Make Nigeria part of the journey.', note: 'The public should be able to see, participate in and benefit from the programme.' },
  { title: 'Focus on long-term value.', note: 'The objective is not simply to produce a winner. It is to produce solutions that continue after the programme.' },
]

export default function About() {
  return (
    <main className="page">
      <SiteHeader />

      <section className="page-hero">
        <p className="section-kicker">ABOUT</p>
        <div className="about-intro">
          <div>
            <h1 className="page-title">WHO<br /><span>WE ARE.</span></h1>
            <p className="lead">
              Nigeria Problem to Proof is a national problem-solving and innovation programme designed
              to identify real problems affecting Nigerians, support Nigerian innovators to build
              practical technology-based solutions, and help move successful solutions toward
              real-world use.
            </p>
          </div>
          <Figure image={siteConfig.images.aboutPhoto} priority />
        </div>
      </section>

      <section className="band light vm">
        <div className="vm-item">
          <p className="section-kicker">VISION</p>
          <p className="statement">
            A Nigeria increasingly capable of solving its own problems through technology, innovation
            and locally developed solutions.
          </p>
        </div>
        <div className="vm-item">
          <p className="section-kicker">MISSION</p>
          <p className="statement">
            To identify real problems, connect them with capable Nigerian builders, provide the
            resources required to develop practical solutions, and create pathways for those solutions
            to be tested, deployed and scaled.
          </p>
        </div>
      </section>

      <section className="band">
        <p className="section-kicker">OUR PRINCIPLES</p>
        <ol className="principles">
          {principles.map((p, i) => (
            <li key={p.title}>
              <small>{String(i + 1).padStart(2, '0')}</small>
              <h2>{p.title}</h2>
              <p>{p.note}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="band cta-band">
        <div>
          <p className="section-kicker">NEXT</p>
          <h2 className="page-title sm">SEE HOW THE<br /><span>JOURNEY WORKS.</span></h2>
        </div>
        <div className="cta-row">
          <Link className="primary-btn" href="/#journey"><span>THE JOURNEY</span><ArrowUpRight /></Link>
          <Link className="ghost-btn" href="/partners"><span>PARTNER WITH NPP</span><ArrowUpRight /></Link>
        </div>
      </section>

      <div className="page-foot"><SiteFooter /></div>
    </main>
  )
}
