'use client'

import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { siteConfig } from '../site-config'
import { ArrowUpRight } from '../icons'

const categories = [
  { value: 'general', label: 'General enquiry' },
  { value: 'applications', label: 'Applications' },
  { value: 'partnerships', label: 'Partnerships' },
  { value: 'media', label: 'Media' },
]

type Errors = Partial<Record<'name' | 'email' | 'subject' | 'message' | 'consent', string>>
type Status = 'idle' | 'sending' | 'sent' | 'error' | 'unavailable'

export default function ContactForm() {
  const [category, setCategory] = useState('general')
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  // Allow other pages to deep-link to a category, e.g. /contact?category=partnerships
  useEffect(() => {
    const c = new URLSearchParams(window.location.search).get('category')
    if (c && categories.some((x) => x.value === c)) setCategory(c)
  }, [])

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const v = (k: string) => String(data.get(k) ?? '').trim()

    // Hidden spam trap: real visitors never fill this in.
    if (v('website')) return

    const next: Errors = {}
    if (!v('name')) next.name = 'Enter your full name.'
    if (!v('email')) next.email = 'Enter your email address.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v('email'))) next.email = 'Enter a valid email address.'
    if (!v('subject')) next.subject = 'Enter a subject.'
    if (!v('message')) next.message = 'Write your message.'
    else if (v('message').length < 10) next.message = 'Please add a little more detail.'
    if (!data.get('consent')) next.consent = 'Please confirm your consent to continue.'
    setErrors(next)
    if (Object.keys(next).length) {
      const first = form.querySelector<HTMLElement>('[aria-invalid="true"], input[name="consent"]')
      requestAnimationFrame(() => (form.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`) ?? first)?.focus())
      return
    }

    // No endpoint configured: do not pretend the message was delivered.
    if (!siteConfig.contactEndpoint) {
      setStatus('unavailable')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(siteConfig.contactEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: v('name'), email: v('email'), category, subject: v('subject'), message: v('message') }),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('sent')
      form.reset()
      setCategory('general')
    } catch {
      setStatus('error')
    }
  }

  const err = (k: keyof Errors) => (errors[k] ? `${k}-err` : undefined)

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Full name</label>
        <input id="name" name="name" type="text" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={err('name')} />
        {errors.name && <p className="field-err" id="name-err">{errors.name}</p>}
      </div>
      <div className="field">
        <label htmlFor="email">Email address</label>
        <input id="email" name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={err('email')} />
        {errors.email && <p className="field-err" id="email-err">{errors.email}</p>}
      </div>
      <div className="field">
        <label htmlFor="category">Enquiry category</label>
        <select id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((c) => (
            <option key={c.value} value={c.value}>{c.label}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="subject">Subject</label>
        <input id="subject" name="subject" type="text" aria-invalid={!!errors.subject} aria-describedby={err('subject')} />
        {errors.subject && <p className="field-err" id="subject-err">{errors.subject}</p>}
      </div>
      <div className="field field-wide">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={6} aria-invalid={!!errors.message} aria-describedby={err('message')} />
        {errors.message && <p className="field-err" id="message-err">{errors.message}</p>}
      </div>

      {/* Spam trap, hidden from people and assistive technology */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="field field-wide">
        <label className="check" htmlFor="consent">
          <input id="consent" name="consent" type="checkbox" aria-invalid={!!errors.consent} aria-describedby={err('consent')} />
          <span>I consent to Nigeria Problem to Proof using the information I provide to respond to this enquiry.</span>
        </label>
        {errors.consent && <p className="field-err" id="consent-err">{errors.consent}</p>}
      </div>

      <div className="field-wide form-actions">
        <button className="primary-btn" type="submit" disabled={status === 'sending'}>
          <span>{status === 'sending' ? 'SENDING…' : 'SUBMIT ENQUIRY'}</span><ArrowUpRight />
        </button>
        <div className="form-status" role="status" aria-live="polite">
          {status === 'sent' && <p className="ok">Thank you. Your enquiry has been sent.</p>}
          {status === 'error' && <p className="bad">Your enquiry could not be sent. Please try again later.</p>}
          {status === 'unavailable' && (
            <p className="bad">
              Not sent. The enquiry service has not been connected yet, so your message was not delivered.
              Please check back once official contact details are published.
            </p>
          )}
        </div>
      </div>
    </form>
  )
}
