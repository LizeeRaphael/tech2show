'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowUpRight, MenuIcon } from './icons'

// One logo implementation for every page. Swap the file in /public/brand to change it everywhere.
export function Logo({ className = '', alt = '' }: { className?: string; alt?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={`brand-logo ${className}`} src="/brand/npp-logo.png" alt={alt} width={480} height={227} decoding="async" />
  )
}

// Pages added to the navigation (the homepage keeps its own anchor links and adds these).
export const pageLinks = [
  { href: '/about', label: 'About' },
  { href: '/partners', label: 'Partners' },
  { href: '/sponsorship', label: 'Sponsor' },
  { href: '/contact', label: 'Contact' },
]

const innerLinks = [
  { href: '/about', label: 'About' },
  { href: '/#why', label: 'The Problem' },
  { href: '/#journey', label: 'The Journey' },
  { href: '/#builders', label: 'Builders' },
  { href: '/partners', label: 'Partners' },
  { href: '/sponsorship', label: 'Sponsor' },
  { href: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <nav className="nav" aria-label="Main">
      <Link className="brand" href="/" aria-label="Nigeria Problem to Proof home">
        <Logo />
      </Link>
      <div className={`nav-links ${open ? 'open' : ''}`}>
        {innerLinks.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)} aria-current={pathname === l.href ? 'page' : undefined}>
            {l.label}
          </Link>
        ))}
      </div>
      <Link className="nav-cta" href="/coming-soon">Register <ArrowUpRight /></Link>
      <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
        <MenuIcon open={open} />
      </button>
    </nav>
  )
}

export function SiteFooter() {
  return (
    <footer className="foot site-foot">
      <Link className="foot-logo" href="/" aria-label="Nigeria Problem to Proof home"><Logo /></Link>
      <FootLinks />
      <span>Season 01 · Coming soon</span>
    </footer>
  )
}

export function FootLinks() {
  return (
    <nav className="foot-links" aria-label="Footer">
      {pageLinks.map((l) => (
        <Link key={l.href} href={l.href}>{l.label}</Link>
      ))}
    </nav>
  )
}
