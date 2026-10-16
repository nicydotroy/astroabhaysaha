import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const dist = path.join(root, 'dist')
const source = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const domain = 'https://www.avisheksastri.com'
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
  { route: '/numerologist-in-kolkata' },
  { route: '/palm-reader-in-kolkata' },
  ...locations.map(([slug]) => ({ route: `/astrologer-in-${slug}` })),
  { route: '/kundali-matching-in-kolkata' },
  { route: '/horoscope-consultation-in-kolkata' },
  { route: '/black-magic-in-kolkata' },
]

function renderPage({ route }) {
  const canonical = `${domain}${route}`
  return source
    .replace(/<link rel="canonical" href=".*?"\s*\/>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:url" content=".*?"\s*\/>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/"@id":".*?#business"/, `"@id":"${canonical}#business"`)
    .replace(/"url":".*?"/, `"url":"${canonical}"`)
}

for (const page of pages) {
  const outputDirectory = path.join(dist, page.route.slice(1))
  fs.mkdirSync(outputDirectory, { recursive: true })
  fs.writeFileSync(path.join(outputDirectory, 'index.html'), renderPage(page))
}

const sitemapRoutes = [...new Set([
  '/',
  '/about',
  '/contact',
  '/services',
  ...pages.map(({ route }) => route),
])]
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...sitemapRoutes.map((route) => `  <url><loc>${domain}${route}</loc></url>`),
  '</urlset>',
  '',
].join('\n')

fs.writeFileSync(path.join(root, 'public', 'sitemap.xml'), sitemap)
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)

console.log(`Generated ${pages.length} static route pages and a sitemap with ${sitemapRoutes.length} canonical URLs.`)
