// Framed image used on the About and Sponsorship pages. Pure markup: the layered frame,
// corner tick and crop are all CSS (.frame in globals.css), so images stay plain files.

import SponsorshipFlow from './sponsorship-art'

type Img = { src: string; width: number; height: number; alt: string }

export function Figure({ image, priority = false, className = '' }: { image: Img; priority?: boolean; className?: string }) {
  return (
    <figure className={`frame ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        decoding="async"
        loading={priority ? 'eager' : 'lazy'}
        {...(priority ? { fetchPriority: 'high' as const } : {})}
      />
    </figure>
  )
}

// Illustration slot. Shows a custom image when one is configured in site-config.ts,
// otherwise the built-in animated illustration (app/sponsorship-art.tsx).
export function IllustrationSlot({ image }: { image: Img | null }) {
  if (!image) return <SponsorshipFlow />
  return (
    <div className="art">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image.src} alt={image.alt} width={image.width} height={image.height} decoding="async" loading="lazy" />
    </div>
  )
}
