import type { Metadata } from 'next'
import { SiteFooter, SiteHeader } from '../site'
import { siteConfig } from '../site-config'
import ContactForm from './contact-form'

export const metadata: Metadata = {
  title: 'Contact · Nigeria Problem to Proof',
  description: 'Talk to Nigeria Problem to Proof about applications, partnerships, media and general enquiries.',
}

const pending = <span className="pending">Details to be confirmed</span>

export default function Contact() {
  const { general, applications, partnerships, media, office } = siteConfig.contacts
  const emailRow = (c: { label: string; email: string | null }) => (
    <div className="contact-row" key={c.label}>
      <h3>{c.label}</h3>
      {c.email ? <a className="text-link" href={`mailto:${c.email}`}>{c.email}</a> : pending}
    </div>
  )

  return (
    <main className="page">
      <SiteHeader />

      <section className="page-hero">
        <p className="section-kicker">CONTACT</p>
        <h1 className="page-title long">TALK TO<br />NIGERIA PROBLEM<br /><span>TO PROOF.</span></h1>
      </section>

      <section className="band contact-grid">
        <div className="contact-list">
          {emailRow(general)}
          {emailRow(applications)}
          {emailRow(partnerships)}
          {emailRow(media)}
          <div className="contact-row">
            <h3>{office.label}</h3>
            {office.phone || office.address ? (
              <div>
                {office.address && <p>{office.address}</p>}
                {office.phone && <p>{office.phone}</p>}
              </div>
            ) : (
              pending
            )}
          </div>
          <div className="contact-row">
            <h3>Social media</h3>
            <ul className="social">
              {siteConfig.social.map((s) => (
                <li key={s.name}>
                  {s.url ? (
                    <a className="text-link" href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
                  ) : (
                    <span className="pending">{s.name} · not yet linked</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div id="enquiry" className="enquiry">
          <p className="section-kicker">SEND AN ENQUIRY</p>
          <ContactForm />
        </div>
      </section>

      <div className="page-foot"><SiteFooter /></div>
    </main>
  )
}
