'use client'

import { useEffect, useState } from 'react'

const problemWords = ['AGRICULTURE', 'FOOD SYSTEMS', 'EDUCATION', 'HEALTHCARE', 'ENERGY']

export default function Home() {
  const [word, setWord] = useState(problemWords[0])
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const id = window.setInterval(() => {
      setWord((current) => {
        const next = problemWords.indexOf(current) + 1
        return problemWords[next % problemWords.length]
      })
    }, 1800)
    return () => window.clearInterval(id)
  }, [])

  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top" aria-label="Nigeria Problem to Proof home">
          <span>NIGERIA</span>
          <span>PROBLEM <i>TO</i> PROOF</span>
        </a>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#why">The Problem</a>
          <a href="#journey">The Journey</a>
          <a href="#builders">Builders</a>
        </div>

        <a className="nav-cta" href="/coming-soon">Register <span>↗</span></a>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? '×' : '☰'}</button>
      </nav>

      <section id="top" className="hero">
        <div className="hero-noise" />
        <div className="hero-grid" />
        <div className="hero-orb orb-one" />
        <div className="hero-orb orb-two" />

        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse" /> SEASON 01 · AGRICULTURE & FOOD SYSTEMS</div>
          <h1>NIGERIA<br /><em>HAS</em> PROBLEMS.</h1>
          <div className="hero-bottom">
            <div>
              <p className="hero-question">What if we stopped talking about them and started <strong>building</strong>?</p>
              <a className="primary-btn" href="/coming-soon"><span>JOIN THE JOURNEY</span><b>↗</b></a>
            </div>
            <div className="rotating-problem">
              <small>THE NEXT PROBLEM TO PROVE COULD BE IN</small>
              <strong>{word}</strong>
            </div>
          </div>
        </div>

        <div className="scroll-cue"><span>SCROLL TO EXPLORE</span><i>↓</i></div>
        <div className="hero-index">01 <span>/</span> 05</div>
      </section>

      <section id="why" className="statement">
        <p className="section-kicker">01 — THE PROBLEM</p>
        <h2>THE PROGRAMME<br /><span>STARTS WITH A PROBLEM.</span></h2>
        <p className="statement-copy">Real people. Real challenges. Real Nigerian contexts. We find the problems first, then bring builders close enough to understand them before they build.</p>
      </section>

      <section id="journey" className="journey-preview">
        <p className="section-kicker">02 — THE JOURNEY</p>
        <div className="steps">
          {['PROBLEM', 'BUILD', 'TEST', 'DEPLOY', 'PROVE'].map((step, i) => (
            <div className="step" key={step}><span>0{i + 1}</span><strong>{step}</strong><i>↗</i></div>
          ))}
        </div>
      </section>

      <section id="builders" className="builders">
        <p className="section-kicker">03 — THE BUILDERS</p>
        <h2>DON'T JUST<br /><span>HAVE AN IDEA.</span></h2>
        <p>Bring the skill, curiosity and stubbornness to build something that can survive the real world.</p>
      </section>
    </main>
  )
}
