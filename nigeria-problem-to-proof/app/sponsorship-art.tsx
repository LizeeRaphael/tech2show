import type { CSSProperties } from 'react'

// Built-in Sponsorship illustration: partners -> resources -> builders -> solutions.
// Inline SVG drawn in code (no image file). Colours come from the site's CSS variables and
// the motion lives in globals.css (.flow-*). It is replaced by a custom file whenever
// siteConfig.images.sponsorshipIllustration is set.

const v = (dx: number, o: number, d: number) => ({ '--dx': `${dx}px`, '--o': `${o}px`, animationDelay: `${d}s` }) as CSSProperties

// A small resource "packet": a different shape for each kind of contribution.
function Packet({ kind, x, y, dx, o, d, red = false }: { kind: 'sq' | 'ci' | 'tr' | 'di'; x: number; y: number; dx: number; o: number; d: number; red?: boolean }) {
  const cls = `flow-pk${red ? ' flow-pk-red' : ''}`
  return (
    <g className={cls} style={v(dx, o, d)}>
      {kind === 'sq' && <rect x={x - 6} y={y - 6} width="12" height="12" />}
      {kind === 'ci' && <circle cx={x} cy={y} r="7" />}
      {kind === 'tr' && <polygon points={`${x},${y - 8} ${x + 8},${y + 6} ${x - 8},${y + 6}`} />}
      {kind === 'di' && <rect x={x - 6} y={y - 6} width="12" height="12" transform={`rotate(45 ${x} ${y})`} />}
    </g>
  )
}

export default function SponsorshipFlow() {
  const Y = 200
  return (
    <div className="art art-flow">
      <svg viewBox="0 0 600 400" role="img" aria-label="Diagram: partners contribute resources, builders use them, and the result is real-world solutions.">
        <defs>
          <pattern id="flow-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" className="flow-gridline" />
          </pattern>
        </defs>
        <rect width="600" height="400" fill="url(#flow-grid)" />

        {/* connecting lines */}
        {[107, 257, 407].map((x) => (
          <g key={x} className="flow-link">
            <line x1={x} y1={Y} x2={x + 86} y2={Y} />
            <polyline points={`${x + 78},${Y - 5} ${x + 86},${Y} ${x + 78},${Y + 5}`} fill="none" />
          </g>
        ))}

        {/* 01 Partners: an organisation skyline */}
        <g className="flow-node">
          <rect x="43" y={Y - 32} width="64" height="64" />
          <rect x="56" y={Y - 2} width="9" height="22" />
          <rect x="70" y={Y - 14} width="9" height="34" />
          <rect x="84" y={Y - 6} width="9" height="26" />
        </g>

        {/* 02 Resources: the kinds of contribution */}
        <g className="flow-node">
          <rect x="193" y={Y - 32} width="64" height="64" />
          <rect x="203" y={Y - 5} width="10" height="10" />
          <circle cx="225" cy={Y} r="6" />
          <polygon points={`237,${Y + 6} 242,${Y - 6} 247,${Y + 6}`} />
        </g>

        {/* 03 Builders: a small team */}
        <g className="flow-node">
          <circle cx="375" cy={Y} r="32" />
          <path d={`M375 ${Y - 13} L363 ${Y + 9} L387 ${Y + 9} Z`} className="flow-team" />
          <circle cx="375" cy={Y - 13} r="4" className="flow-dot" />
          <circle cx="363" cy={Y + 9} r="4" className="flow-dot" />
          <circle cx="387" cy={Y + 9} r="4" className="flow-dot" />
        </g>

        {/* 04 Solutions: fills in as the result arrives */}
        <g className="flow-node">
          <rect x="493" y={Y - 32} width="64" height="64" />
          <rect x="505" y={Y - 20} width="40" height="40" className="flow-result" />
        </g>

        {/* travelling contributions */}
        <Packet kind="sq" x={115} y={Y} dx={78} o={12} d={0} />
        <Packet kind="ci" x={115} y={Y} dx={78} o={38} d={0.35} />
        <Packet kind="tr" x={115} y={Y} dx={78} o={64} d={0.7} />
        <Packet kind="di" x={265} y={Y} dx={78} o={20} d={2} />
        <Packet kind="ci" x={265} y={Y} dx={78} o={50} d={2.35} />
        <Packet kind="sq" x={415} y={Y} dx={78} o={40} d={4} red />

        {/* labels */}
        <g className="flow-idx">
          {['01', '02', '03', '04'].map((t, i) => (
            <text key={t} x={75 + i * 150} y="136" textAnchor="middle">{t}</text>
          ))}
        </g>
        <g className="flow-label">
          {['PARTNERS', 'RESOURCES', 'BUILDERS', 'SOLUTIONS'].map((t, i) => (
            <text key={t} x={75 + i * 150} y="278" textAnchor="middle">{t}</text>
          ))}
        </g>
        <line x1="43" y1="326" x2="557" y2="326" className="flow-rule" />
        <text x="43" y="354" className="flow-cap">RESOURCES IN · SOLUTIONS OUT</text>
      </svg>
    </div>
  )
}
