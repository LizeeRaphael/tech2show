'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'

const problemWords = ['AGRICULTURE', 'FOOD SYSTEMS', 'EDUCATION', 'HEALTHCARE', 'ENERGY']

const stages = [
  { name: 'PROBLEM', note: 'A real Nigerian problem, understood before anything is built.' },
  { name: 'BUILD', note: 'Builders answer it with technology.' },
  { name: 'TEST', note: 'The solution meets the people it is meant for.' },
  { name: 'DEPLOY', note: 'It leaves the demo and goes into real use.' },
  { name: 'PROVE', note: 'Evidence that it works, not a pitch.' },
]

const delay = (s: string) => ({ '--d': s }) as CSSProperties

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const heroRef = useRef<HTMLElement | null>(null)
  const mainRef = useRef<HTMLElement | null>(null)

  // Rotating sector label
  useEffect(() => {
    const id = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % problemWords.length)
    }, 2200)
    return () => window.clearInterval(id)
  }, [])

  // Very subtle hero image drift on scroll
  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const update = () => {
      frame = 0
      const y = window.scrollY
      if (y < window.innerHeight * 1.2) {
        hero.style.setProperty('--py', `${(y * 0.07).toFixed(1)}px`)
      }
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  // One-time reveals for the sections below the hero
  useEffect(() => {
    const main = mainRef.current
    if (!main) return
    const targets = Array.from(main.querySelectorAll<HTMLElement>('[data-reveal]'))

    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      targets.forEach((el) => el.classList.add('in'))
      return
    }

    main.classList.add('armed')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' }
    )
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main ref={mainRef}>
      <nav className="nav">
        <a className="brand" href="#top" aria-label="Nigeria Problem to Proof home">
          <span>NIGERIA</span>
          <span>PROBLEM <i>TO</i> PROOF</span>
        </a>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#why" onClick={() => setMenuOpen(false)}>The Problem</a>
          <a href="#journey" onClick={() => setMenuOpen(false)}>The Journey</a>
          <a href="#builders" onClick={() => setMenuOpen(false)}>Builders</a>
        </div>

        <Link className="nav-cta" href="/coming-soon">Register <span>↗</span></Link>
        <button
          className="menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '×' : '☰'}
        </button>
      </nav>

      <section id="top" className="hero" ref={heroRef}>
        <div className="hero-noise" />
        <div className="hero-grid" />

        <div className="hero-media">
          <div className="hero-media-inner">
            <picture>
              <source srcSet="/hero-tv-tech.webp" type="image/webp" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hero-tv-tech.png"
                alt="A woman watches a technology builder explain his work on a television in a dark living room."
                width={1536}
                height={1024}
                fetchPriority="high"
              />
            </picture>
          </div>
        </div>

        <div className="hero-copy">
          <div className="eyebrow rise" style={delay('0.1s')}>
            <span className="pulse" /> SEASON 01 · AGRICULTURE &amp; FOOD SYSTEMS
          </div>

          <h1 aria-label="Nigeria has problems.">
            <span className="line" aria-hidden="true"><span style={delay('0.25s')}>NIGERIA</span></span>
            <span className="line" aria-hidden="true"><span style={delay('0.4s')}><em>HAS</em></span></span>
            <span className="line" aria-hidden="true"><span style={delay('0.55s')}>PROBLEMS.</span></span>
          </h1>

          <p className="hero-question rise" style={delay('0.95s')}>
            What if we stopped talking about them and started <strong>building</strong>?
          </p>

          <div className="hero-actions rise" style={delay('1.1s')}>
            <Link className="primary-btn" href="/coming-soon"><span>REGISTER NOW</span><b>↗</b></Link>
            <div className="rotating-problem">
              <small>THE NEXT PROBLEM TO PROVE COULD BE IN</small>
              <strong key={wordIndex} className="swap">{problemWords[wordIndex]}</strong>
            </div>
          </div>
        </div>

        <div className="scroll-cue"><span>SCROLL TO EXPLORE</span><i>↓</i></div>
      </section>

      <section id="why" className="concept">
        <p className="section-kicker" data-reveal>THE PROBLEM</p>
        <div className="concept-grid">
          <h2 data-reveal>THE PROGRAMME<br /><span>STARTS WITH A PROBLEM.</span></h2>
          <p className="concept-copy" data-reveal>
            We bring real Nigerian problems into the room, give builders the chance to solve them
            with technology, and follow the journey from idea to something that can actually be
            tested and proven.
          </p>
        </div>
      </section>

      <section id="journey" className="journey">
        <p className="section-kicker" data-reveal>THE JOURNEY</p>
        <ol className="track" data-reveal>
          <li className="track-line" aria-hidden="true"><span className="track-fill" /></li>
          {stages.map((stage, i) => (
            <li className="stage" key={stage.name} style={{ '--i': i } as CSSProperties}>
              <span className="dot" aria-hidden="true" />
              <small>0{i + 1}</small>
              <strong>{stage.name}</strong>
              <p>{stage.note}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="builders" className="finale">
        <div className="finale-inner">
          <div data-reveal>
            <p className="section-kicker">THE BUILDERS</p>
            <h2>DON&apos;T JUST<br /><span>HAVE AN IDEA.</span></h2>
          </div>
          <div className="finale-side" data-reveal>
            <p>Bring the skill, curiosity and stubbornness to build something that can survive the real world.</p>
            <Link className="primary-btn" href="/coming-soon"><span>REGISTER NOW</span><b>↗</b></Link>
            <small>Registration opens soon.</small>
          </div>
        </div>
        <footer className="foot">
          <span>NIGERIA PROBLEM <i>TO</i> PROOF</span>
          <span>Season 01 · Coming soon</span>
        </footer>
      </section>
    </main>
  )
}
