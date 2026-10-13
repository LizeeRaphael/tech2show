// Editable site details. Nothing here is invented: anything the client has not
// supplied yet is left as null and the pages show an honest "not yet available"
// state instead of a made-up value.

export const siteConfig = {
  // Contact details. Fill in once the programme confirms them (spec section 31).
  contacts: {
    general: { label: 'General enquiries', email: null as string | null },
    applications: { label: 'Applications', email: null as string | null },
    partnerships: { label: 'Partnerships', email: null as string | null },
    media: { label: 'Media', email: null as string | null },
    office: { label: 'Programme office', phone: null as string | null, address: null as string | null },
  },

  // Official social accounts. Only add a URL once the account is verified.
  social: [
    { name: 'Instagram', url: null as string | null },
    { name: 'LinkedIn', url: null as string | null },
    { name: 'X', url: null as string | null },
    { name: 'YouTube', url: null as string | null },
    { name: 'TikTok', url: null as string | null },
  ],

  // Public path of the partnership package PDF, e.g. '/downloads/npp-partnership-package.pdf'.
  // Leave null until the client supplies the document. The download button stays inactive.
  partnershipPackageUrl: null as string | null,

  // Endpoint that receives contact-form submissions (JSON POST). Not configured yet,
  // so the form validates input but never claims a message was sent.
  contactEndpoint: (process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || null) as string | null,

  // Page imagery. All files are local, in /public/images. To swap an image, replace the
  // file at the same path (or change `src` here) and update width/height/alt to match.
  // Crops are handled by CSS, so any aspect ratio works.
  images: {
    aboutPhoto: {
      src: '/images/about/about-main.jpg',
      width: 1536,
      height: 1024,
      alt: 'A young Nigerian woman in glasses pauses from soldering an electronics board, looking away from her laptop. The Lagos skyline and the words "Real Nigerian problems, practical solutions" appear on the left.',
    },
    sponsorshipPhoto: {
      src: '/images/sponsorship/sponsorship-photo.jpg',
      width: 1536,
      height: 1024,
      alt: 'A handshake between two professionals in front of a montage of Nigerian sectors: builders gathered around a laptop and robot prototype, solar panels, a health worker, a student and a freight truck.',
    },
    // Sponsorship illustration. null = use the built-in animated illustration (app/sponsorship-art.tsx).
    // To use your own artwork instead, add the file and set e.g.
    // { src: '/images/sponsorship/sponsorship-illustration.svg', width: 1200, height: 900, alt: '' }
    // Use alt: '' when the drawing is purely decorative; write real alt text if it carries meaning.
    sponsorshipIllustration: null as null | { src: string; width: number; height: number; alt: string },
  },
}
