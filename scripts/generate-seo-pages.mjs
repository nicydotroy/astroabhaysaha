import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const dist = path.join(root, 'dist')
const source = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const domain = 'https://astroabhaysaha.vercel.app'
const locations = [
  ['salt-lake-city-bidhannagar', 'Salt Lake City (Bidhannagar)'],
  ['new-town', 'New Town'],
  ['rajarhat', 'Rajarhat'],
  ['ballygunge', 'Ballygunge'],
  ['alipore', 'Alipore'],
  ['park-street', 'Park Street'],
  ['garia', 'Garia'],
  ['jadavpur', 'Jadavpur'],
  ['tollygunge', 'Tollygunge'],
  ['behala', 'Behala'],
  ['dum-dum', 'Dum Dum'],
  ['lake-town', 'Lake Town'],
  ['kasba', 'Kasba'],
  ['mukundapur', 'Mukundapur'],
  ['ruby', 'Ruby'],
  ['topsia', 'Topsia'],
  ['park-circus', 'Park Circus'],
  ['esplanade', 'Esplanade'],
  ['sealdah', 'Sealdah'],
  ['shyambazar', 'Shyambazar'],
]

const pages = [
  {
    route: '/numerologist-in-kolkata',
    title: 'Numerologist in Kolkata | Numerology Consultation',
    description: 'Consult the best numerologist in Kolkata for name number analysis, life path guidance, destiny patterns, relationship insights, and practical numerology solutions.',
  },
  {
    route: '/palm-reader-in-kolkata',
    title: 'Best Palm Reader in Kolkata | Palm Reading Consultation',
    description: 'Looking for the best palm reader in Kolkata? Get a personalized palm reading to understand palm lines, strengths, relationships, career questions, and life direction.',
  },
  ...locations.map(([slug, location]) => ({
    route: `/astrologer-in-${slug}`,
    title: `Best Astrologer in ${location} | Avishek Sastri`,
    description: `Find the best astrologer in ${location} for personalized Kundli, marriage, career and relationship guidance. Book an astrology consultation with an experienced astrologer.`,
  })),
  {
    route: '/kundali-matching-in-kolkata',
    title: 'Kundali Matching in Kolkata',
    description: 'Get accurate Kundali Matching in Kolkata for marriage compatibility, Guna Milan and horoscope analysis. Consult an experienced astrologer for personalized guidance.',
  },
  {
    route: '/horoscope-consultaion-in-kolkata',
    title: 'Horoscope Consultation in Kolkata | Avishek Sastri',
    description: 'Get trusted horoscope consultation in Kolkata for personalized guidance on career, love, marriage, finance, and important life decisions based on your horoscope.',
  },
  {
    route: '/black-magic-in-kolkata',
    title: 'Black Magic in Kolkata | Astro Avishek Sastri',
    description: 'Looking for black magic guidance in Kolkata? Consult an experienced astrologer for spiritual guidance, Vedic astrology insights and personalized solutions.',
  },
]

function escapeAttribute(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;')
}

function renderPage({ route, title, description }) {
  const canonical = `${domain}${route}`
  return source
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content=".*?"\s*\/>/, `<meta name="description" content="${escapeAttribute(description)}" />`)
    .replace(/<link rel="canonical" href=".*?"\s*\/>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:title" content=".*?"\s*\/>/, `<meta property="og:title" content="${escapeAttribute(title)}" />`)
    .replace(/<meta property="og:description" content=".*?"\s*\/>/, `<meta property="og:description" content="${escapeAttribute(description)}" />`)
    .replace(/<meta property="og:url" content=".*?"\s*\/>/, `<meta property="og:url" content="${canonical}" />`)
}

for (const page of pages) {
  const outputDirectory = path.join(dist, page.route.slice(1))
  fs.mkdirSync(outputDirectory, { recursive: true })
  fs.writeFileSync(path.join(outputDirectory, 'index.html'), renderPage(page))
}

console.log(`Generated ${pages.length} static SEO pages.`)
