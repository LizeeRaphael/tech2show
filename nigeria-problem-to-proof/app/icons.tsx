// Inline SVG icons. They replace the text glyphs (↗ ↓ ☰ ×) that some phones
// render as colour emoji. Strokes use currentColor so each icon inherits the
// colour of the element it sits in.

type IconProps = { className?: string }

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'square' as const,
  strokeLinejoin: 'miter' as const,
  'aria-hidden': true,
  focusable: false,
}

export function ArrowUpRight({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M6 18 18 6" />
      <path d="M8 6h10v10" />
    </svg>
  )
}

export function ArrowDown({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M12 4v16" />
      <path d="m5 13 7 7 7-7" />
    </svg>
  )
}

export function MenuIcon({ className, open }: IconProps & { open: boolean }) {
  return (
    <svg className={className} {...base} strokeWidth={1.75}>
      {open ? (
        <>
          <path d="M5 5l14 14" />
          <path d="M19 5 5 19" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  )
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M8 5.2v13.6a.6.6 0 0 0 .92.5l10.6-6.8a.6.6 0 0 0 0-1L8.92 4.7A.6.6 0 0 0 8 5.2Z" />
    </svg>
  )
}
