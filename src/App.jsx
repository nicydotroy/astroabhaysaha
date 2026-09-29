import { useEffect, useState } from 'react'
import { FaPhone, FaWhatsapp } from 'react-icons/fa'
import bestAstrologerInKolkata from './assets/image/best-astrologer-in-kolkata.png'
import './App.css'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

const serviceMenuItems = [
  { label: 'Astrologer', slug: 'astrologer' },
  { label: 'Numerologist', slug: 'numerologist' },
  { label: 'Palmist', slug: 'palmist' },
  { label: 'Horoscope', slug: 'horoscope' },
  { label: 'Kundali Matching', slug: 'kundali-matching' },
  { label: 'Get Love Back', slug: 'get-love-back' },
  { label: 'Black Magic', slug: 'black-magic' },
  { label: 'Birth Chart', slug: 'birth-chart' },
  { label: 'Mangal Dosh', slug: 'mangal-dosh' },
]

const servicePath = (service) => service.slug === 'numerologist' ? '/numerologist-in-kolkata' : service.slug === 'palmist' ? '/palm-reader-in-kolkata' : service.slug === 'kundali-matching' ? '/kundali-matching-in-kolkata' : service.slug === 'black-magic' ? '/black-magic-in-kolkata' : service.slug === 'horoscope' ? '/horoscope-consultaion-in-kolkata' : `/services/${service.slug}`

const locationPages = [
  { name: 'Salt Lake City (Bidhannagar)', slug: 'salt-lake-city-bidhannagar' },
  { name: 'New Town', slug: 'new-town' },
  { name: 'Rajarhat', slug: 'rajarhat' },
  { name: 'Ballygunge', slug: 'ballygunge' },
  { name: 'Alipore', slug: 'alipore' },
  { name: 'Park Street', slug: 'park-street' },
  { name: 'Garia', slug: 'garia' },
  { name: 'Jadavpur', slug: 'jadavpur' },
  { name: 'Tollygunge', slug: 'tollygunge' },
  { name: 'Behala', slug: 'behala' },
  { name: 'Dum Dum', slug: 'dum-dum' },
  { name: 'Lake Town', slug: 'lake-town' },
  { name: 'Kasba', slug: 'kasba' },
  { name: 'Mukundapur', slug: 'mukundapur' },
  { name: 'Ruby', slug: 'ruby' },
  { name: 'Topsia', slug: 'topsia' },
  { name: 'Park Circus', slug: 'park-circus' },
  { name: 'Esplanade', slug: 'esplanade' },
  { name: 'Sealdah', slug: 'sealdah' },
  { name: 'Shyambazar', slug: 'shyambazar' },
]

const serviceCards = [
  { icon: '☉', title: 'Astrologer', text: 'Get personalized astrological guidance for life, love, career, and important decisions.' },
  { icon: '✧', title: 'Numerologist', text: 'Explore life numbers, destiny patterns, and practical guidance for your future path.' },
  { icon: '◌', title: 'Palmist', text: 'Consult a palm reader in Kolkata to explore your palm lines, strengths, and life direction.' },
  { icon: '☽', title: 'Birth Chart Reading', text: 'Understand the map of your soul, your gifts, and the cycles shaping your life.' },
  { icon: '♡', title: 'Love & Partnership', text: 'Discover the patterns that bring you closer to the people who matter most.' },
  { icon: '◈', title: 'Career & Purpose', text: 'Find clarity in your next chapter and make choices aligned with your real calling.' },
]

const homepageServices = [
  { icon: '☉', title: 'Astrologer', slug: 'astrologer', text: 'Receive personalized guidance on life decisions, relationships, and your path ahead.' },
  { icon: '✧', title: 'Numerologist', slug: 'numerologist', text: 'Discover the meaning behind your numbers and how they shape your personal journey.' },
  { icon: '◌', title: 'Palmist', slug: 'palmist', text: 'Explore your palm lines, strengths, and life direction with a palm reading in Kolkata.' },
  { icon: '♡', title: 'Horoscope', slug: 'horoscope', text: 'Receive thoughtful guidance for the opportunities, patterns, and timing shaping your days.' },
  { icon: '◈', title: 'Kundali Matching', slug: 'kundali-matching', text: 'Explore compatibility, shared strengths, and the foundations of a meaningful partnership.' },
  { icon: '✦', title: 'Get Love Back', slug: 'get-love-back', text: 'Find a calm, respectful path through relationship questions, distance, and emotional uncertainty.' },
  { icon: '☽', title: 'Black Magic', slug: 'black-magic', text: 'Understand difficult energy with a grounded consultation focused on clarity and protection.' },
  { icon: '☼', title: 'Birth Chart', slug: 'birth-chart', text: 'Read the unique map of your personality, potential, purpose, and life cycles.' },
  { icon: '✧', title: 'Mangal Dosh', slug: 'mangal-dosh', text: 'Explore traditional Mangal Dosh guidance with context, care, and practical perspective.' },
]

const testimonials = [
  { name: 'Riya M.', role: 'Creative Director', quote: 'The reading gave language to something I had been feeling for years. I left with a clear, beautiful sense of direction.' },
  { name: 'Arjun K.', role: 'Founder', quote: 'Avishek has a rare ability to make the stars feel practical. The career guidance changed the way I made my next decision.' },
  { name: 'Meera S.', role: 'Educator', quote: 'Warm, precise, and deeply human. I felt seen from the first minute of our conversation.' },
]

function navigate(path) {
  window.history.pushState({}, '', path)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

function App() {
  const [path, setPath] = useState(window.location.pathname)
  const [bookingOpen, setBookingOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname)
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const goTo = (nextPath) => {
    navigate(nextPath)
    setMobileMenuOpen(false)
    setServicesOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentLabel = navItems.find((item) => item.path === path)?.label || (path.startsWith('/services') || path === '/horoscope-consultaion-in-kolkata' || path === '/numerologist-in-kolkata' || path === '/palm-reader-in-kolkata' ? 'Services' : 'Home')
  const currentLocation = locationPages.find((location) => path === `/astrologer-in-${location.slug}`)

  useEffect(() => {
    const location = currentLocation?.name || 'Kolkata'
    const selectedService = serviceMenuItems.find((service) => path === servicePath(service) || path.endsWith(`/${service.slug}`))
    const isKundaliPage = path === '/kundali-matching-in-kolkata'
    const isBlackMagicPage = path === '/black-magic-in-kolkata'
    const isHoroscopePage = path === '/horoscope-consultaion-in-kolkata' || path === '/services/horoscope'
    const isServicesPage = path === '/services' || path.startsWith('/services/')
    const isNumerologistPage = selectedService?.slug === 'numerologist'
    const isPalmReaderPage = selectedService?.slug === 'palmist'
    const title = isHoroscopePage
      ? 'Horoscope Consultation in Kolkata | Sree Avishek Sastri'
      : isKundaliPage
        ? 'Kundali Matching in Kolkata | Best Kundli Matching Astrologer'
        : isBlackMagicPage
          ? 'Black Magic in Kolkata | Sree Avishek Sastri'
          : isNumerologistPage
            ? 'Numerologist in Kolkata | Personalized Numerology Consultation'
            : isPalmReaderPage
              ? 'Best Palm Reader in Kolkata | Palm Reading Consultation'
              : isServicesPage
                ? 'Astrology Services in Kolkata | Astrologer, Numerologist & Palmist'
                : location === 'Kolkata' ? 'Astrologer in Kolkata | Sree Avishek Sastri' : `Best Astrologer in ${location} | Sree Avishek Sastri`
    const description = isKundaliPage
      ? 'Get accurate Kundali Matching in Kolkata for marriage compatibility, Guna Milan and horoscope analysis. Consult an experienced astrologer for personalized guidance.'
      : isBlackMagicPage
        ? 'Looking for black magic guidance in Kolkata? Consult an experienced astrologer for spiritual guidance, Vedic astrology insights and personalized solutions.'
      : isHoroscopePage
        ? 'Get trusted horoscope consultation in Kolkata for personalized guidance on career, love, marriage, finance, and important life decisions based on your horoscope.'
        : isNumerologistPage
          ? 'Looking for a numerologist in Kolkata? Get personalized numerology guidance based on your name, date of birth and specific life concerns.'
          : isPalmReaderPage
            ? 'Looking for the best palm reader in Kolkata? Get a personalized palm reading to understand palm lines, strengths, relationships, career questions, and life direction.'
            : isServicesPage
              ? 'Explore trusted astrology services in Kolkata including astrologer, numerologist, palmist, horoscope consultation, Kundali matching and spiritual guidance services.'
              : location === 'Kolkata'
                ? 'Looking for an astrologer in Kolkata? Sree Avishek Sastri offers personalized Vedic astrology, Kundli, marriage, career and relationship guidance.'
                : `Find the best astrologer in ${location} for personalized Kundli, marriage, career and relationship guidance. Book an astrology consultation with an experienced astrologer.`
    document.title = title
    let descriptionTag = document.querySelector('meta[name="description"]')
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta')
      descriptionTag.name = 'description'
      document.head.appendChild(descriptionTag)
    }
    descriptionTag.content = description
    const canonicalPath = isHoroscopePage
      ? '/horoscope-consultaion-in-kolkata'
      : isKundaliPage
        ? '/kundali-matching-in-kolkata'
        : isBlackMagicPage
          ? '/black-magic-in-kolkata'
          : isNumerologistPage
              ? '/numerologist-in-kolkata'
              : isPalmReaderPage
                ? '/palm-reader-in-kolkata'
                : isServicesPage
                  ? '/services'
                  : currentLocation ? `/astrologer-in-${locationPages.find((item) => item.name === location).slug}` : path === '/' ? '/' : path
    const canonicalUrl = `https://astroabhaysaha.vercel.app${canonicalPath}`
    let canonicalTag = document.querySelector('link[rel="canonical"]')
    if (!canonicalTag) {
      canonicalTag = document.createElement('link')
      canonicalTag.rel = 'canonical'
      document.head.appendChild(canonicalTag)
    }
    canonicalTag.href = canonicalUrl
    const setMeta = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('property', property)
        document.head.appendChild(tag)
      }
      tag.content = content
    }
    setMeta('og:title', title)
    setMeta('og:description', description)
    setMeta('og:url', canonicalUrl)
  }, [currentLocation, path])

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-identity">
          <button className="wordmark" onClick={() => goTo('/')} aria-label="Sree Avishek Sastri home"><span className="wordmark-mark"><i>✦</i></span><span>Sree<br /><b>Avishek Sastri</b></span></button>
        </div>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.slice(0, 2).map((item) => <button key={item.path} className={currentLabel === item.label ? 'active' : ''} onClick={() => goTo(item.path)}>{item.label}</button>)}
          <div className={`services-menu ${servicesOpen ? 'open' : ''}`} onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className={currentLabel === 'Services' ? 'active services-trigger' : 'services-trigger'} aria-haspopup="true" aria-expanded={servicesOpen} onClick={() => setServicesOpen((open) => !open)}>Services <span className="menu-chevron">⌄</span></button>
            <div className="services-dropdown" role="menu">
              {serviceMenuItems.map((service) => <button key={service.slug} role="menuitem" onClick={() => { setServicesOpen(false); goTo(servicePath(service)) }}>{service.label}</button>)}
            </div>
          </div>
          <button className={currentLabel === 'Contact' ? 'active' : ''} onClick={() => goTo('/contact')}>Contact</button>
        </nav>
        <div className="header-actions"><button className="outline-button header-cta" onClick={() => setBookingOpen(true)}><span>Book a reading</span><b>↗</b></button><button className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`} aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen((open) => !open)}><i /><i /><i /></button></div>
      </header>
      <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`} aria-label="Mobile navigation">
        {navItems.slice(0, 2).map((item) => <button key={item.path} className={currentLabel === item.label ? 'active' : ''} onClick={() => goTo(item.path)}>{item.label}</button>)}
        <button className={`mobile-services-trigger ${currentLabel === 'Services' ? 'active' : ''}`} aria-expanded={servicesOpen} onClick={() => setServicesOpen((open) => !open)}>Services <span className="menu-chevron">⌄</span></button>
        <div className={`mobile-services-list ${servicesOpen ? 'open' : ''}`}>{serviceMenuItems.map((service) => <button key={service.slug} onClick={() => goTo(servicePath(service))}>{service.label}</button>)}</div>
        <button className={currentLabel === 'Contact' ? 'active' : ''} onClick={() => goTo('/contact')}>Contact</button>
        <button className="mobile-book-button" onClick={() => { setMobileMenuOpen(false); setBookingOpen(true) }}>Book a reading <span>↗</span></button>
      </nav>
      <main>
        {path === '/about' && <><AboutPage goTo={goTo} /><AboutServicesSection goTo={goTo} /></>}
        {(path.startsWith('/services') || path === '/horoscope-consultaion-in-kolkata' || path === '/kundali-matching-in-kolkata' || path === '/black-magic-in-kolkata' || path === '/numerologist-in-kolkata' || path === '/palm-reader-in-kolkata') && <ServicesPage path={path} goTo={goTo} onBook={() => setBookingOpen(true)} />}
        {path === '/contact' && <ContactPage />}
        {currentLocation && <LocationPage location={currentLocation.name} goTo={goTo} onBook={() => setBookingOpen(true)} />}
        {path === '/' && <><HomePage goTo={goTo} onBook={() => setBookingOpen(true)} /><MeetYourAstrologer /></>}
      </main>
      {path !== '/' && path !== '/horoscope-consultaion-in-kolkata' && path !== '/services/horoscope' && <MeetYourAstrologer />}
      {(path === '/numerologist-in-kolkata' || path.endsWith('/numerologist')) && <NumerologyConsultationProcess />}
      {(path === '/horoscope-consultaion-in-kolkata' || path === '/services/horoscope') && <HoroscopeConsultationProcess />}
      <FaqSection location={currentLocation?.name || 'Kolkata'} isNumerologistPage={path === '/numerologist-in-kolkata' || path.endsWith('/numerologist')} />
      {(path === '/' || currentLocation) && <ServiceAreasSection goTo={goTo} />}
      <footer className="site-footer">
        <div className="footer-invitation"><p className="eyebrow">The conversation can begin anywhere</p><h2>Problem is yours<br /><em>solution is mine.</em></h2><button className="gold-button" onClick={() => setBookingOpen(true)}>Book a private reading <span>↗</span></button></div>
        <div className="footer-grid">
          <div className="footer-about"><div className="footer-brand"><span className="wordmark-mark">✧</span><span>Sree Avishek Sastri</span></div><p>A grounded approach to Vedic astrology for the curious, the searching, and the ready.</p></div>
          <div className="footer-column"><span className="footer-heading">Explore</span><button onClick={() => goTo('/')}>Home</button><button onClick={() => goTo('/about')}>About Sree Avishek</button><button onClick={() => goTo('/services')}>Services</button><button onClick={() => goTo('/contact')}>Contact</button></div>
          <div className="footer-column"><span className="footer-heading">Readings</span>{serviceMenuItems.slice(0, 4).map((service) => <button key={service.slug} onClick={() => goTo(servicePath(service))}>{service.label}</button>)}</div>
           <div className="footer-column footer-contact"><span className="footer-heading">Say hello</span><a href="mailto:sreeavisheksastri95@gmail.com">sreeavisheksastri95@gmail.com</a><a href="tel:+919163653093">+91 91636 53093</a><span>Kolkata · West Bengal</span><span className="footer-socials"><a href="#instagram">Instagram</a><a href="#whatsapp">WhatsApp</a></span></div>
        </div>
        <div className="footer-bottom"><span>© 2025 Sree Avishek Sastri</span><span>Made for the curious soul</span><span>Privacy · Terms</span></div>
      </footer>
      <div className="floating-contact-actions" aria-label="Contact Sree Avishek Sastri">
        <a className="floating-contact-button floating-call-button" href="tel:+919163653093" aria-label="Call Sree Avishek Sastri"><FaPhone className="contact-icon" aria-hidden="true" /></a>
        <a className="floating-contact-button floating-whatsapp-button" href="https://wa.me/919163653093" target="_blank" rel="noreferrer" aria-label="Message Sree Avishek Sastri on WhatsApp"><FaWhatsapp className="contact-icon" aria-hidden="true" /></a>
      </div>
      {bookingOpen && <BookingModal onClose={() => setBookingOpen(false)} />}
    </div>
  )
}

function HomePage({ goTo, onBook, location = 'Kolkata' }) {
  const isKolkataHome = location === 'Kolkata'

  return (
    <>
      <section className="hero-section section-pad">
        <div className="hero-copy reveal-up">
          <p className="eyebrow"><span className="eyebrow-line" /> Vedic astrology · Modern perspective</p>
          <h1>{isKolkataHome ? <>Astrologer in Kolkata for<br /><em>Personalized Guidance</em></> : <>Find the best<br /><em>astrologer in {location}.</em></>}</h1>
          {isKolkataHome ? <p className="hero-description">Get personalized guidance through Vedic astrology, birth chart analysis and horoscope consultation based on your individual birth details and concerns.</p> : <p className="hero-description">A grounded approach to astrology for the moments when you are ready to understand yourself more deeply and move forward with intention.</p>}
          <div className="hero-actions">
            <button className="gold-button" onClick={onBook}>Book a Consultation <span>↗</span></button>
            <button className="text-button" onClick={() => goTo('/contact')}>Talk to an Astrologer <span>↗</span></button>
          </div>
        </div>
        <div className="hero-art" aria-label="A celestial night sky with glowing stars">
          <div className="planet planet-large" /><div className="planet planet-small" />
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="constellation constellation-one"><i /><i /><i /><i /><i /></div>
          <div className="constellation constellation-two"><i /><i /><i /><i /></div>
          <div className="hero-art-caption"><span>01</span><span>the cosmic perspective</span></div>
        </div>
        <div className="scroll-cue">Scroll to explore <span>↓</span></div>
      </section>
      {isKolkataHome ? <LocalSeoSection onBook={onBook} /> : <LocationSeoSection location={location} onBook={onBook} />}
      <section className="services-section section-pad">
        <div className="center-heading"><p className="eyebrow">Our astrology services</p><h2>Services<br /><em>we provide.</em></h2></div>
        <div className="services-grid services-grid-complete">{homepageServices.map((service) => <article className="service-card" key={service.slug} onClick={() => goTo(servicePath(service))} role="link" tabIndex="0"><span className="service-icon">{service.icon}</span><h3>{service.title}</h3><p>{service.text}</p><span className="card-arrow">↗</span></article>)}</div>
        <button className="gold-button centered-button" onClick={() => goTo('/services')}>Explore all services <span>↗</span></button>
      </section>
      <section className="local-seo-section section-pad trusted-consultation-section">
        <div className="local-seo-heading">
          <p className="eyebrow">Trusted guidance for important life questions</p>
          <h2>Trusted Astrology Consultation in Kolkata</h2>
        </div>
        <div className="local-seo-content location-seo-copy trusted-consultation-copy">
          <p>Choosing an astrologer is a personal decision, particularly when the consultation involves important questions about relationships, marriage, career or other areas of life. A trustworthy astrology consultation should clearly explain its approach, requirements and limitations rather than making unrealistic promises or guaranteed predictions.</p>
          <p>A consultation with <strong>Avishek Sastri</strong> is based on the individual's available birth details and the specific questions they wish to discuss. Depending on the service, the consultation may involve horoscope interpretation, birth-chart analysis, Kundali matching and other forms of astrological guidance.</p>
        </div>

        <div className="trusted-consultation-grid">
          <article className="trusted-consultation-card">
            <span className="trusted-card-tag">01 / Approach</span>
            <h3>A Clear and Personalized Consultation Approach</h3>
            <p>The consultation begins by understanding the purpose of the session and collecting the information required for the relevant astrological analysis. The applicable aspects of the horoscope are then interpreted according to the consultation type, with the observations explained in straightforward language.</p>
            <p>This approach helps keep the discussion relevant to the individual instead of relying only on generalized horoscope statements.</p>
          </article>

          <article className="trusted-consultation-card featured">
            <span className="trusted-card-tag">02 / Focus</span>
            <h3>Focus on Individual Concerns</h3>
            <p>Different people seek astrology consultation for different reasons. A session may involve questions related to:</p>
            <ul>
              <li>Marriage and relationship compatibility</li>
              <li>Career and professional decisions</li>
              <li>Love and personal relationships</li>
              <li>Kundali matching</li>
              <li>Business-related concerns</li>
              <li>Horoscope interpretation</li>
              <li>Birth-chart analysis</li>
              <li>General life-related questions</li>
            </ul>
            <p>The consultation is intended to provide an astrological perspective that clients can consider alongside their own circumstances, judgment and decisions.</p>
          </article>

          <article className="trusted-consultation-card">
            <span className="trusted-card-tag">03 / Transparency</span>
            <h3>Transparent Astrology Guidance</h3>
            <p>A responsible astrology consultation should distinguish traditional astrological interpretation from certainty about future events. Rather than promising specific outcomes, the focus is on explaining the relevant astrological factors and helping clients understand the interpretation associated with them.</p>
            <p>For people searching for <strong>astrology consultation in Kolkata</strong>, this transparent and personalized approach can make it easier to understand what to expect before booking a session.</p>
          </article>
        </div>
      </section>
      <Testimonials />
      <CtaBand onBook={onBook} />
    </>
  )
}

function LocationPage({ location, goTo, onBook }) { return <HomePage location={location} goTo={goTo} onBook={onBook} /> }

function ServiceAreasSection({ goTo }) { return <section className="service-areas-section section-pad"><div className="center-heading"><p className="eyebrow">Astrology guidance across the city</p><h2>Our service areas<br /><em>in Kolkata.</em></h2></div><div className="service-areas-grid">{locationPages.map((location) => <button key={location.slug} onClick={() => goTo(`/astrologer-in-${location.slug}`)}>Astrologer in {location.name}<span>↗</span></button>)}</div></section> }
function AboutServicesSection({ goTo }) { return <section className="services-section section-pad"><div className="center-heading"><p className="eyebrow">Our astrology services</p><h2>Services<br /><em>we provide.</em></h2></div><div className="services-grid services-grid-complete">{homepageServices.map((service) => <article className="service-card" key={service.slug} onClick={() => goTo(servicePath(service))} role="link" tabIndex="0"><span className="service-icon">{service.icon}</span><h3>{service.title}</h3><p>{service.text}</p><span className="card-arrow">↗</span></article>)}</div><button className="gold-button centered-button" onClick={() => goTo('/services')}>Explore all services <span>↗</span></button></section> }
function LocationSeoSection({ location, onBook }) { return <section className="local-seo-section section-pad"><div className="local-seo-heading"><p className="eyebrow">Astrology guidance near you</p><h2>Best astrologer in {location} for your future</h2></div><div className="local-seo-content location-seo-copy"><p>Looking for an <strong>astrologer in {location}</strong>? Sree Avishek Sastri offers personalized astrology consultations based on your birth details, questions, and life circumstances. Get thoughtful guidance for marriage, relationships, career, business, education, and important personal decisions.</p><p>An experienced <strong>astrologer in {location}</strong> can interpret your Kundli and explain planetary influences in a clear, practical way. Consult online or arrange a reading from anywhere in Kolkata.</p><button className="line-button" onClick={onBook}>Speak with Sree Avishek <span>↗</span></button></div></section> }
function MeetYourAstrologer() {
  return <section className="local-seo-section trusted-astrology-section section-pad">
    <div className="trusted-astrology-heading">
      <div>
        <p className="eyebrow">Personalized guidance, grounded in your chart</p>
        <h2>Meet Your Astrologer <em>in Kolkata</em></h2>
      </div>
      <div className="trusted-astrology-years">
        <span className="trusted-astrology-years-number">05</span>
        <div><span>YEARS OF</span><strong>ASTROLOGY EXPERIENCE</strong></div>
      </div>
    </div>
    <div className="trusted-astrology-content">
      <div className="trusted-astrology-intro">
        <p><strong>Sree Avishek Sastri</strong> is an experienced astrologer offering personalized astrology consultations for individuals seeking greater clarity about important areas of life. With <strong>5 years of experience in astrology</strong>, he takes an individual-focused approach to understanding birth charts and discussing the astrological factors relevant to each person's concerns.</p>
        <p>As a <strong>professional astrologer in Kolkata</strong>, Sree Avishek Sastri believes that an astrology consultation should go beyond generalized horoscope predictions. Every person's birth chart is unique, and the interpretation of planetary positions, houses and other relevant factors can vary according to the individual's birth details and the question being considered.</p>
      </div>
      <div className="trusted-astrology-grid">
        <article>
          <span className="trusted-astrology-index">01 / PERSONALIZED GUIDANCE</span>
          <h3>An Individual Approach to Astrology</h3>
          <p>Sree Avishek Sastri follows a personalized approach during consultations. Rather than providing the same interpretation to everyone, the consultation begins with understanding the individual's birth details and the specific area where guidance is being sought. Relevant aspects of the horoscope are then examined to provide a clearer understanding of the astrological perspective.</p>
          <p>This approach can be particularly useful for people seeking guidance related to <strong>marriage, relationships, love life, career, business, Kundali matching, horoscope analysis and other personal concerns</strong>.</p>
        </article>
        <article>
          <span className="trusted-astrology-index">02 / WHAT WE CAN DISCUSS</span>
          <h3>What Can You Discuss During a Consultation?</h3>
          <p>People consult an astrologer for different reasons and at different stages of life. Depending on the individual's requirements, a consultation with Sree Avishek Sastri may cover questions related to:</p>
          <ul>
            <li>Marriage and relationship compatibility</li>
            <li>Love and personal relationships</li>
            <li>Kundali matching</li>
            <li>Career and professional decisions</li>
            <li>Business and financial concerns</li>
            <li>Horoscope and birth chart interpretation</li>
            <li>Important personal decisions</li>
            <li>General questions about life and future possibilities</li>
          </ul>
          <p>The purpose of the consultation is to help you understand the relevant astrological factors and their interpretation rather than relying solely on generalized predictions.</p>
        </article>
        <article>
          <span className="trusted-astrology-index">03 / VEDIC ASTROLOGY</span>
          <h3>Vedic Astrology Consultation in Kolkata</h3>
          <p>For individuals looking for a <strong>Vedic astrologer in Kolkata</strong>, the consultation can involve examining the individual's birth chart and relevant planetary influences according to the principles of Vedic astrology. Birth date, exact birth time and place of birth can be important for preparing and interpreting a horoscope accurately.</p>
          <p>The specific factors considered during a consultation depend on the individual's question and the type of astrology service being requested.</p>
        </article>
        <article>
          <span className="trusted-astrology-index">04 / THE CONSULTATION</span>
          <h3>How an Astrology Consultation Works</h3>
          <p>The consultation process is designed to keep the discussion focused on your individual concerns. You provide the necessary birth details and explain what you would like to understand. The relevant aspects of your horoscope are then examined, followed by an explanation of the astrological observations in clear and understandable language.</p>
          <p>Whether you are searching for an <strong>astrologer in Kolkata</strong> for a specific question or looking for a more detailed birth chart consultation, Sree Avishek Sastri provides an opportunity to discuss your concerns through a personalized astrology session.</p>
          <p>If you are looking for a <strong>renowned astrologer in Kolkata</strong>, focus on the astrologer's actual experience, approach and transparency when choosing a consultation. Sree Avishek Sastri aims to provide personalized astrology guidance based on individual birth details and the specific concerns discussed during the session.</p>
        </article>
      </div>
    </div>
  </section>
}
function HoroscopeConsultationProcess() {
  const steps = [
    { title: 'Share Your Birth Details', text: 'You provide your date, time and place of birth along with any information required for the consultation.' },
    { title: 'Explain Your Concern', text: 'You can explain the specific area you would like to discuss, such as career, marriage, relationships, business or another personal concern.' },
    { title: 'Horoscope Analysis', text: 'The relevant portions of your birth chart are examined according to the astrology system and methods being followed.' },
    { title: 'Discuss the Interpretation', text: 'The astrologer explains the relevant planetary and chart-related observations and how they are traditionally interpreted.' },
    { title: 'Ask Questions', text: 'You can ask questions and clarify anything you would like to understand better about the reading.' },
  ]

  return <section className="numerology-process-section section-pad" aria-labelledby="horoscope-process-title">
    <div className="numerology-process-heading">
      <div><p className="eyebrow">A clear, personal process</p><h2 id="horoscope-process-title">How Horoscope<br /><em>Consultation Works</em></h2></div>
      <p>A personalized horoscope consultation generally follows a straightforward process.</p>
    </div>
    <ol className="numerology-process-steps">
      {steps.map((step, index) => <li key={step.title}><span className="numerology-process-number">0{index + 1}</span><h3>Step {index + 1}: {step.title}</h3><p>{step.text}</p></li>)}
    </ol>
    <p className="numerology-process-close">This process keeps the consultation focused on your actual concerns rather than relying on a generic horoscope.</p>
  </section>
}
function HoroscopeGuidanceSection() {
  return <section className="horoscope-guidance-section section-pad" aria-labelledby="horoscope-guidance-title">
    <div className="horoscope-guidance-heading"><p className="eyebrow">A birth-chart based perspective</p><h2 id="horoscope-guidance-title">Horoscope Consultation in Kolkata for <em>Personalized Guidance</em></h2></div>
    <div className="horoscope-guidance-copy">
      <p>A horoscope is more than a general prediction based on your zodiac sign. In traditional astrology, a horoscope is prepared using details such as your date, time and place of birth and is interpreted to understand the planetary positions and other factors associated with your birth chart.</p>
      <p>If you are looking for <strong>horoscope consultation in Kolkata</strong>, a personalized consultation can help you understand your birth chart and discuss the areas of life that are important to you. Depending on your question, the consultation may cover relationships, marriage, career, business, personal decisions and other concerns.</p>
    </div>
  </section>
}
function HoroscopeConsultationDetails() {
  const discussionAreas = [
    'Career and professional life',
    'Marriage and relationships',
    'Love and compatibility',
    'Business and professional decisions',
    'Personal development',
    'Important life transitions',
    'Birth chart interpretation',
    'General horoscope-related questions',
  ]

  return <>
    <section className="horoscope-info-section section-pad" aria-labelledby="horoscope-consultation-explainer">
      <div className="horoscope-info-layout">
        <div className="horoscope-info-heading"><p className="eyebrow">01 / THE BASICS</p><h2 id="horoscope-consultation-explainer">What Is a Horoscope Consultation?</h2></div>
        <div className="horoscope-info-copy">
          <p>A horoscope consultation is a personalized astrology session in which an astrologer examines relevant information from your birth chart and discusses its traditional astrological interpretation.</p>
          <p>Unlike a general horoscope that is written for a large group of people based on a zodiac sign, a personal horoscope reading considers individual birth information. This allows the discussion to focus on the particular chart and questions of the person seeking the consultation.</p>
          <p>The exact method of interpretation can vary according to the astrology tradition and approach followed by the astrologer.</p>
        </div>
      </div>
    </section>
    <section className="horoscope-questions-section section-pad" aria-labelledby="horoscope-individual-questions">
      <div className="horoscope-info-layout">
        <div className="horoscope-info-heading"><p className="eyebrow">02 / YOUR QUESTIONS</p><h2 id="horoscope-individual-questions">Horoscope Consultation in Kolkata for Your Individual Questions</h2></div>
        <div className="horoscope-info-copy">
          <p>People seek horoscope consultations for different reasons. You may want to understand your career direction, relationship concerns, marriage prospects, business circumstances or simply learn more about your birth chart.</p>
          <p>During a consultation, you can discuss the specific questions that matter to you. The astrologer can then focus the interpretation on the relevant areas of your horoscope rather than providing a generalized reading.</p>
        </div>
      </div>
      <div className="horoscope-discussion-areas"><p className="eyebrow">Common areas discussed</p><ul>{discussionAreas.map((area) => <li key={area}>{area}</li>)}</ul></div>
    </section>
  </>
}
function NumerologyConsultationProcess() {
  const steps = [
    { title: '1. Share Your Details', text: 'You provide the information required for the chosen numerology method, such as your name and date of birth.' },
    { title: '2. Explain Your Question', text: 'Tell the numerologist what you would like to understand. Your question could relate to your career, relationship, business, personal development or another area of life.' },
    { title: '3. Numerical Analysis', text: 'The relevant numbers are calculated and interpreted according to the numerology system being used.' },
    { title: '4. Discuss the Interpretation', text: 'The numerologist explains the meaning traditionally associated with the numbers and how those interpretations relate to your question.' },
    { title: '5. Ask Questions', text: 'You can discuss anything that remains unclear and ask follow-up questions about the reading.' },
  ]

  return <section className="numerology-process-section section-pad" aria-labelledby="numerology-process-title">
    <div className="numerology-process-heading">
      <div><p className="eyebrow">A clear, personal process</p><h2 id="numerology-process-title">How a Numerology<br /><em>Consultation Works</em></h2></div>
      <p>A professional numerology consultation can follow a simple and transparent process.</p>
    </div>
    <ol className="numerology-process-steps">
      {steps.map((step, index) => <li key={step.title}><span className="numerology-process-number">0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}
    </ol>
    <p className="numerology-process-close">This approach keeps the consultation focused on your individual circumstances rather than providing a generic number prediction.</p>
  </section>
}
function LocalSeoSection({ onBook }) { return <section className="local-seo-section section-pad"><div className="local-seo-heading"><p className="eyebrow">Astrology guidance in the city of joy</p><h2>Best astrologer in Kolkata for your future</h2></div><div className="local-seo-main"><div className="local-seo-image" role="img" aria-label="Avishek Sastri astrologer photo"><img src={bestAstrologerInKolkata} alt="Best astrologer in Kolkata" /></div><div className="local-seo-content"><p>Finding the right astrologer can help you understand your birth chart, planetary influences, and important phases of life with greater clarity. If you are looking for the <strong>best astrologer in Kolkata</strong>, choose an astrology professional who takes time to understand your concerns and provides a personalized interpretation based on your birth details. Whether you need guidance about marriage, relationships, career, business, finances, or personal decisions, a detailed astrology consultation can provide a structured perspective.</p><p>An experienced <strong>astrologer in Kolkata</strong> can analyze your date, time, and place of birth to prepare and interpret your Kundli. Vedic astrology considers planetary positions, houses, zodiac signs, and other astrological factors to understand different areas of life. A consultation should focus on your individual chart rather than providing generic predictions.</p><button className="line-button" onClick={onBook}>Speak with Avishek <span>↗</span></button></div></div><div className="local-seo-faq"><article><h3>Online Astrology Consultation</h3><p>You do not always need to visit an astrologer's office for guidance. An <strong>online astrologer in Kolkata</strong> can provide consultations through phone calls, video consultations, or other online communication methods. Online sessions can be convenient for people with busy schedules or those living outside central Kolkata.</p><p>If you have searched for an <strong>astrologer near me</strong>, you can consider both local and online consultation options based on your requirements. A <strong>Kolkata astrologer</strong> offering online services can also connect with clients from different parts of the city and beyond.</p></article><article><h3>Personalized Astrology Guidance in Kolkata</h3><p>Many people search for a <strong>famous astrologer in Kolkata</strong> or a <strong>top astrologer in Kolkata</strong> when they want personalized guidance for important life questions. Similarly, those looking for a <strong>renowned astrologer in Kolkata</strong> often want someone with knowledge of traditional astrology and experience in interpreting different types of Kundli.</p><p>A <strong>professional astrologer in Kolkata</strong> can offer consultations for a range of concerns, including marriage compatibility, love and relationships, career growth, business decisions, financial planning, family matters, and future trends. The purpose of an astrology consultation is to help you understand the astrological factors connected with your questions and make decisions with greater awareness.</p></article></div></section> }
function AboutPage({ goTo }) { return <PageIntro eyebrow="The person behind the chart" title={<>A quiet space for<br /><em>big questions.</em></>}><div className="about-layout"><div className="portrait-card portrait-large"><div className="portrait-image"><img src={bestAstrologerInKolkata} alt="Sree Avishek Sastri" /></div><div className="portrait-glow" /></div><div className="about-copy"><p>Hi, I’m Sree Avishek. I believe astrology is most powerful when it brings you back to yourself.</p><p>My work blends the depth of Vedic tradition with a warm, practical approach. Every reading is a conversation, not a performance. We look at what is happening, why it may be happening now, and what you can do with the clarity you find.</p><div className="signature">Sree Avishek <span>✦</span></div><button className="line-button" onClick={() => goTo('/services')}>See how we can work together <span>→</span></button></div></div></PageIntro> }
function ServicesPage({ path, goTo, onBook }) {
  const selectedService = serviceMenuItems.find((service) => path === servicePath(service) || path.endsWith(`/${service.slug}`))
  const isHoroscopePage = path === '/horoscope-consultaion-in-kolkata' || path === '/services/horoscope'
  const isServicesOverview = path === '/services'
  const isNumerologistPage = selectedService?.slug === 'numerologist'
  const isPalmReaderPage = selectedService?.slug === 'palmist'
  const pageTitle = isHoroscopePage
    ? 'Horoscope Consultation in Kolkata'
    : isNumerologistPage
      ? 'Numerologist in Kolkata'
      : isPalmReaderPage
        ? 'Best Palm Reader in Kolkata'
      : path === '/kundali-matching-in-kolkata'
        ? 'Kundali Matching in Kolkata'
        : path === '/black-magic-in-kolkata'
          ? 'Black Magic in Kolkata'
          : isServicesOverview
            ? 'Astrology Services in Kolkata'
            : selectedService?.label

  return <PageIntro
    eyebrow={isHoroscopePage ? 'Trusted horoscope guidance in Kolkata' : isNumerologistPage ? 'Numerology guidance in Kolkata' : isPalmReaderPage ? 'Personalized palm reading in Kolkata' : isServicesOverview ? 'Astrology services in Kolkata' : selectedService ? `${selectedService.label} consultation` : 'Readings for your next chapter'}
    title={isHoroscopePage ? <>Horoscope Consultation<br /><em>in Kolkata.</em></> : isNumerologistPage ? <>Numerologist in Kolkata<br /><em>for life clarity.</em></> : isPalmReaderPage ? <>Best Palm Reader in Kolkata</> : isServicesOverview ? <>Astrology Services in Kolkata<br /><em>for every life question.</em></> : selectedService ? <>{pageTitle}<br /><em>with clarity.</em></> : <>The stars offer<br /><em>perspective.</em></>}
    heroVisual={isHoroscopePage ? <HoroscopeChartVisual /> : isNumerologistPage ? <NumerologyNumberStudy /> : isPalmReaderPage ? <PalmistryHeroVisual /> : null}
    afterHero={isHoroscopePage ? <><HoroscopeGuidanceSection /><HoroscopeConsultationDetails /></> : null}
  >
    {isNumerologistPage && <div className="service-intro-copy numerology-intro-feature">
      <div className="numerology-intro-heading"><span className="numerology-intro-index">01 / THE PRACTICE</span><h2>Best Numerologist<br /><em>in Kolkata.</em></h2></div>
      <div className="numerology-intro-body">
        <p className="numerology-intro-lead">Numerology is a traditional system of interpreting numbers associated with a person's name and date of birth to explore patterns, characteristics and different areas of life. If you are looking for a <strong>numerologist in Kolkata</strong>, a personalized consultation can help you understand how numerological interpretations relate to your individual circumstances.</p>
        <div className="numerology-approach-panel"><span className="numerology-intro-index">A PERSONALIZED APPROACH</span><p>A numerology consultation is different from a general online number reading because it considers the information relevant to the individual and the specific questions they want to discuss. Depending on the consultation, this may include name analysis, date of birth analysis and other numerological calculations.</p><div className="numerology-detail-tags"><span>NAME ANALYSIS</span><span>DATE OF BIRTH</span><span>NUMBER PATTERNS</span></div></div>
      </div>
    </div>}
    {isPalmReaderPage && <div className="service-intro-copy"><div className="service-intro-copy"><h2>Palm Reader in Kolkata for better guidance</h2><p>Palmistry, also known as palm reading or chiromancy, is a traditional practice in which the lines, shapes and features of the hands are interpreted to explore different aspects of an individual's life and personality. If you are looking for a <strong>palm reader in Kolkata</strong>, a personalized palmistry consultation can help you understand the traditional meanings associated with the features of your palms.</p><p>Unlike a general reading, a personal palmistry consultation focuses on the individual's hands and the specific questions they want to discuss. Depending on the approach followed, a palm reader may examine major palm lines, mounts, finger shapes, hand structure and other visible features.</p></div><p>A palm reading consultation is shaped around your questions and personal circumstances. It offers a thoughtful perspective for reflection, not a guaranteed prediction of future events.</p></div>}
    {isServicesOverview && <div className="service-intro-copy"><p>Explore trusted <strong>astrology services in Kolkata</strong> for love, marriage, career, business, spiritual guidance, and personal growth.</p><p>Whether you need an astrologer, numerologist, palmist, horoscope consultation, or Kundali matching, every session is designed to offer clarity and practical direction.</p></div>}
    {isHoroscopePage && <HoroscopeConsultationContent goTo={goTo} />}
    {(isPalmReaderPage || isNumerologistPage) && (
      <>
        <div className="center-heading"><p className="eyebrow">Our astrology services</p><h2>{isNumerologistPage ? <>Our <em>Services.</em></> : <>Services<br /><em>we provide.</em></>}</h2></div>
        <div className="services-grid services-grid-complete">
          {homepageServices.map((service) => <article className="service-card" key={service.slug} onClick={() => goTo(servicePath(service))} role="link" tabIndex="0"><span className="service-icon">{service.icon}</span><h3>{service.title}</h3><p>{service.text}</p><span className="card-arrow">↗</span></article>)}
        </div>
      </>
    )}
    {!isHoroscopePage && !isPalmReaderPage && !isNumerologistPage && <div className="full-services-grid">{serviceCards.map((service, index) => <article className="service-card service-card-large" key={service.title}><span className="service-number">0{index + 1}</span><span className="service-icon">{service.icon}</span><h3>{service.title}</h3><p>{service.text}</p><button className="line-button" onClick={onBook}>Book this reading <span>↗</span></button></article>)}</div>}
  </PageIntro>
}

function HoroscopeConsultationContent({ goTo }) {
  return <div className="horoscope-content">
    <div className="center-heading horoscope-services-heading"><p className="eyebrow">Our astrology services</p><h2>Our <em>Services.</em></h2></div>
    <div className="services-grid services-grid-complete horoscope-services-grid">{homepageServices.map((service) => <article className="service-card" key={service.slug} onClick={() => goTo(servicePath(service))} role="link" tabIndex="0"><span className="service-icon">{service.icon}</span><h3>{service.title}</h3><p>{service.text}</p><span className="card-arrow">↗</span></article>)}</div>
    <HoroscopeAdditionalSections />
    <div className="horoscope-details">
      <div><p className="eyebrow">What to bring</p><h2>Prepare for a useful reading.</h2></div>
      <div><p>Share your date of birth, available birth time, and place of birth. It also helps to bring two or three clear questions, such as a career decision, relationship concern, marriage question, business choice, or financial planning issue. More accurate birth information can support a more detailed chart interpretation.</p><p>Astrology offers a traditional interpretive perspective, not a guarantee of future events. The goal is to explain the chart clearly and help you consider your choices with awareness.</p></div>
    </div>
  </div>
}
function ContactPage() { return <PageIntro eyebrow="Begin the conversation" title={<>Let’s find the<br /><em>right direction.</em></>}><div className="contact-layout"><div className="contact-copy"><h2>A thoughtful reading starts with a thoughtful question.</h2><p>Share what is on your mind and Sree Avishek Sastri will help you understand the right next step. Consultations are available for career, relationships, marriage, business, education, and personal decisions.</p><div className="contact-details"><div><span>Email</span><a href="mailto:sreeavisheksastri95@gmail.com">sreeavisheksastri95@gmail.com</a></div><div><span>Location</span><p>Kolkata · West Bengal</p></div><div><span>Response time</span><p>Within 24 hours</p></div></div></div><form className="contact-form" onSubmit={(event) => event.preventDefault()}><label>Name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@example.com" /></label><label>What would you like to explore?<select defaultValue=""><option value="" disabled>Select a reading</option><option>Birth chart</option><option>Love & partnership</option><option>Career & purpose</option><option>Marriage & Kundli matching</option></select></label><label>Your question<textarea required rows="5" placeholder="Tell us a little about what you would like guidance on" /></label><button className="gold-button" type="submit">Send enquiry <span>↗</span></button></form></div></PageIntro> }
function HoroscopeAdditionalSections() {
  return <div className="horoscope-additional-guidance">
    <article>
      <span className="trusted-astrology-index">01 / PREPARATION</span>
      <div><h2>What Information Is Needed for a Horoscope Reading?</h2>
        <p>The information required depends on the type of consultation and the astrology method being followed. For a detailed birth chart analysis, astrologers commonly ask for:</p>
        <p><strong>Date of birth:</strong> The day, month and year you were born.</p>
        <p><strong>Time of birth:</strong> The recorded time of birth can be important when preparing a detailed birth chart.</p>
        <p><strong>Place of birth:</strong> The city or location where you were born helps determine the astronomical calculations used in preparing the chart.</p>
        <p>Providing accurate information can make the horoscope analysis more precise within the framework of the astrological system being used.</p>
      </div>
    </article>
    <article>
      <span className="trusted-astrology-index">02 / BIRTH CHARTS</span>
      <div><h2>Birth Chart Analysis in Kolkata</h2>
        <p>A birth chart represents the positions of relevant celestial bodies at the time and place of birth. In Vedic astrology, an astrologer may examine different houses, planetary placements, signs and other chart factors while interpreting the horoscope.</p>
        <p>A <strong>birth chart consultation in Kolkata</strong> can therefore provide a more individualized discussion than a general daily or monthly horoscope.</p>
        <p>The interpretation depends on the complete chart rather than one planetary position or a single zodiac sign. This is why a personal reading should consider the broader context of the horoscope.</p>
      </div>
    </article>
    <article>
      <span className="trusted-astrology-index">03 / CAREER</span>
      <div><h2>Career Horoscope Consultation In Kolkata</h2>
        <p>Career is one of the common reasons people seek an astrology consultation.</p>
        <p>A career-focused horoscope reading may examine the astrological factors traditionally associated with profession, skills, responsibilities, opportunities and periods of change.</p>
        <p>If you are considering a career change, a new professional direction or an important work-related decision, a horoscope consultation can provide an additional perspective through traditional astrology.</p>
        <p>However, career decisions should also consider your education, experience, financial situation, skills, interests and professional opportunities.</p>
      </div>
    </article>
    <article>
      <span className="trusted-astrology-index">04 / RELATIONSHIPS</span>
      <div><h2>Marriage and Relationship Horoscope Consultation Kolkata</h2>
        <p>Relationships and marriage are another important area of horoscope consultation.</p>
        <p>A relationship-focused reading may consider relevant aspects of the individual birth charts and discuss traditional astrological interpretations connected with relationships, marriage and compatibility.</p>
        <p>For couples, a separate <strong>Kundali matching consultation</strong> may be more appropriate when the objective is to compare two birth charts.</p>
        <p>Astrology can offer a traditional perspective, but relationship decisions are also influenced by communication, mutual understanding, values and individual circumstances.</p>
      </div>
    </article>
    <article>
      <span className="trusted-astrology-index">05 / BUSINESS</span>
      <div><h2>Business Horoscope Consultation in Kolkata</h2>
        <p>Business owners and professionals may seek horoscope consultation when considering an important professional decision.</p>
        <p>A business-focused consultation can discuss the astrological factors traditionally associated with professional activity, decision-making and periods of change.</p>
        <p>Astrology should not replace business planning, financial analysis, market research or professional advice. Instead, it can be considered an additional perspective for someone who personally values astrological guidance.</p>
      </div>
    </article>
    <article>
      <span className="trusted-astrology-index">06 / VEDIC ASTROLOGY</span>
      <div><h2>Vedic Horoscope Consultation in Kolkata</h2>
        <p>A <strong>Vedic horoscope consultation in Kolkata</strong> follows principles associated with the Vedic astrology tradition.</p>
        <p>Depending on the consultation, an astrologer may consider planetary positions, houses, signs, dashas and other relevant factors when interpreting the birth chart.</p>
        <p>The specific techniques used can differ between practitioners, so it is useful to ask the astrologer about their approach before booking a consultation.</p>
      </div>
    </article>
  </div>
}
function PageIntro({ eyebrow, title, children, heroVisual, afterHero }) {
  const heading = <div className={`page-heading${heroVisual ? ' page-heading-with-visual' : ''}`}>{heroVisual ? <div className="page-heading-copy"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1></div> : <><p className="eyebrow">{eyebrow}</p><h1>{title}</h1></>}{heroVisual}</div>

  if (afterHero) return <>
    <section className="page-intro page-intro-hero-only section-pad">{heading}</section>
    {afterHero}
    <section className="page-intro page-intro-content section-pad">{children}</section>
  </>

  return <section className="page-intro section-pad">{heading}{children}</section>
}
function NumerologyNumberStudy() {
  const numbers = Array.from({ length: 9 }, (_, index) => index + 1)
  return <div className="numerology-number-study" role="img" aria-label="Numerology number grid from one through nine">
    <div className="numerology-study-label"><span>NUMBER STUDY</span><span>01 - 09</span></div>
    <div className="numerology-number-grid">{numbers.map((number) => <span key={number}>{String(number).padStart(2, '0')}</span>)}</div>
    <div className="numerology-study-label numerology-study-footer"><span>NAME</span><span>DATE</span><span>PATTERN</span></div>
  </div>
}
function HoroscopeChartVisual() {
  const zodiacSigns = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓']
  return <figure className="horoscope-chart-visual" role="img" aria-label="Astrological birth chart wheel with the twelve zodiac signs">
    <div className="horoscope-chart-meta"><span>BIRTH CHART</span><span>12 HOUSES</span></div>
    <div className="horoscope-chart-wheel">
      <div className="horoscope-chart-signs">{zodiacSigns.map((sign) => <span key={sign}>{sign}</span>)}</div>
      <div className="horoscope-chart-center"><span>✦</span><strong>KUNDLI</strong></div>
    </div>
    <figcaption><span>DATE · TIME · PLACE</span><strong>A map of your sky.</strong></figcaption>
  </figure>
}
function PalmistryHeroVisual() {
  return <figure className="palmistry-hero-visual">
    <img src={bestAstrologerInKolkata} alt="Sree Avishek Sastri, palm reading consultant" />
    <span className="palmistry-hero-index">PALMISTRY / 01</span>
    <figcaption><span>PERSONALIZED PALM READING</span><strong>A closer look at your story.</strong></figcaption>
  </figure>
}
function Testimonials() { return <section className="testimonials-section section-pad"><div className="section-grid"><div className="section-label">02 / In their own words</div><div className="testimonial-heading"><p className="eyebrow">Real stories, real shifts</p><h2>It starts with<br /><em>being seen.</em></h2></div></div><div className="testimonial-grid">{testimonials.map((item) => <article className="testimonial-card" key={item.name}><span className="quote-mark">“</span><p>{item.quote}</p><footer><b>{item.name}</b><span>{item.role}</span></footer></article>)}</div></section> }
function CtaBand({ onBook }) { return <section className="cta-band section-pad"><div className="cta-stars">✦　·　✧　·　✦</div><p className="eyebrow">Your next chapter is already unfolding</p><h2>Get the Solution of<br /><em>Every Kind of problem</em></h2><button className="gold-button" onClick={onBook}>Book your private reading <span>↗</span></button></section> }

const faqItems = [
  { q: 'Who is Sree Avishek Sastri?', a: 'Sree Avishek Sastri is an experienced astrologer offering personalized astrology consultations in Kolkata. With 5 years of experience in astrology, he provides guidance based on individual birth details and traditional astrological principles.' },
  { q: 'How can Sree Avishek Sastri help me with my life problems?', a: 'Sree Avishek Sastri provides personalized astrology guidance for common concerns related to career, marriage, relationships, business, education, family matters, and important life decisions. The consultation focuses on understanding your specific situation through astrological analysis.' },
  { q: 'What information is required for an astrology consultation?', a: 'For a detailed astrology consultation, you generally need to provide your date of birth, exact or available birth time, and place of birth. These details are used to prepare and analyse your birth chart or Kundli. Accurate birth information can be important for detailed chart interpretation and timing-related questions.' },
  { q: 'Can I consult Sree Avishek Sastri for marriage and relationship matters?', a: 'Yes. Marriage and relationship questions are among the common reasons people consult astrologers. Sree Avishek Sastri can provide personalized astrological guidance regarding marriage timing, relationship concerns, compatibility, and other marriage-related questions based on the available birth details.' },
  { q: 'Can an astrologer in Kolkata help with career and job-related questions?', a: 'Astrology consultations can include questions related to career direction, job opportunities, professional changes, business, and career-related challenges. Sree Avishek Sastri can analyse your birth chart and provide an astrological perspective based on your individual circumstances.' },
  { q: 'Does Sree Avishek Sastri provide Kundli analysis?', a: 'Yes. Kundli analysis can be used to understand different aspects of an individual\'s life through their birth chart. Sree Avishek Sastri can provide personalized Kundli-based guidance according to the questions and concerns discussed during the consultation.' },
  { q: 'Can I ask about business and financial matters during an astrology consultation?', a: 'Yes. Business owners and professionals may consult an astrologer regarding business decisions, partnerships, career changes, financial planning, and suitable periods for important professional activities. Sree Avishek Sastri provides an astrological perspective based on the individual\'s birth details.' },
  { q: 'Can astrology help with education and studies?', a: 'Education is another area that people commonly discuss during astrology consultations. Sree Avishek Sastri can analyse relevant astrological factors in a student\'s birth chart and provide guidance related to education, academic direction, higher studies, and other study-related concerns.' },
  { q: 'Can I consult Sree Avishek Sastri online?', a: 'If online consultation is available, clients can discuss their concerns remotely without visiting an astrologer\'s office in Kolkata. Online astrology consultations can be convenient for people living outside Kolkata or in other cities. Please contact Sree Avishek Sastri to confirm the available consultation mode and appointment process.' },
  { q: 'Can I consult Sree Avishek Sastri for marriage Kundli matching?', a: 'Yes. Kundli matching is commonly used by individuals and families who want to explore astrological compatibility before marriage. Sree Avishek Sastri can analyse the available birth details of both individuals and provide a personalized interpretation of their Kundlis.' },
  { q: 'Does astrology provide guaranteed predictions about the future?', a: 'Astrology is generally used as a traditional system for interpreting planetary positions and birth charts. An astrology consultation should not be treated as a guarantee of future events. Sree Avishek Sastri focuses on providing personalized astrological insights that can help clients understand their questions and consider different perspectives.' },
  { q: 'Why choose Sree Avishek Sastri as an astrologer in Kolkata?', a: 'Sree Avishek Sastri has 5 years of experience in astrology and focuses on personalized consultations based on individual concerns and birth details. His approach is intended to make astrological guidance understandable, relevant, and respectful of each client\'s personal circumstances.' },
]

const numerologyFaqItems = [
  { q: 'What does a numerologist in Kolkata do?', a: "A numerologist interprets numbers associated with information such as a person's name and date of birth according to a particular numerology system. A consultation may cover personality, relationships, career, business or other areas depending on the client's questions." },
  { q: 'What information is needed for a numerology consultation?', a: 'The information required depends on the numerology system and type of consultation. Name and date of birth are commonly used for many numerological calculations.' },
  { q: 'What is name numerology?', a: "Name numerology involves assigning numerical values to the letters of a person's name and interpreting the resulting numbers according to a chosen numerology system." },
  { q: 'Can numerology help with career decisions?', a: 'Numerology may provide a traditional interpretive perspective on career-related questions, but it should not replace practical career research, professional advice, skills assessment or informed decision-making.' },
  { q: 'What is date of birth numerology?', a: "Date of birth numerology involves calculating numbers from a person's birth date and interpreting them according to the principles of the numerology system being used." },
  { q: 'Can numerology be used for marriage compatibility?', a: 'Some numerology systems interpret numbers associated with two individuals to discuss compatibility. The interpretation should be treated as a perspective rather than a definitive prediction about a relationship.' },
  { q: 'Can I consult a numerologist online?', a: 'Yes, if the numerologist provides online consultations. You should confirm the available consultation format and the information required before booking.' },
  { q: 'How long does a numerology consultation take?', a: 'The duration depends on the type and depth of the consultation. A simple reading may require less time than a detailed consultation covering several areas.' },
  { q: 'Is numerology the same as astrology?', a: 'No. Astrology primarily interprets celestial bodies and their positions, while numerology works with numbers and their traditional interpretations. They are different systems of divination.' },
  { q: 'Can numerology predict my future exactly?', a: 'Numerology should not be presented as a method that can guarantee or precisely predict future events. It is better understood as a traditional interpretive practice that some people use for reflection and guidance.' },
  { q: 'How do I choose a numerologist in Kolkata?', a: 'Look for a numerologist who clearly explains their methodology, experience and consultation process. Avoid providers making unrealistic guarantees or unsupported claims.' },
  { q: 'How can I book a numerology consultation in Kolkata?', a: 'You can contact the numerologist through the available booking or contact options on their website and confirm the consultation format, requirements and appointment availability.' },
]

function FaqSection({ location = 'Kolkata', isNumerologistPage = false }) {
  const [openIndex, setOpenIndex] = useState(0)
  const sourceFaqItems = isNumerologistPage ? numerologyFaqItems : faqItems
  const localizedFaqItems = sourceFaqItems.map((item) => ({ q: item.q.replaceAll('Kolkata', location), a: item.a.replaceAll('Kolkata', location) }))
  const leftFaq = localizedFaqItems.slice(0, 6)
  const rightFaq = localizedFaqItems.slice(6)

  const toggleFaq = (index) => {
    setOpenIndex((current) => current === index ? -1 : index)
  }

  const renderColumn = (items) => items.map((item) => {
    const globalIndex = localizedFaqItems.findIndex((faq) => faq.q === item.q)
    const isOpen = openIndex === globalIndex

    return <article className={`faq-item ${isOpen ? 'open' : ''}`} key={item.q}>
      <button className="faq-question" onClick={() => toggleFaq(globalIndex)} aria-expanded={isOpen}>
        <span>{item.q}</span>
        <span className="faq-toggle">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <div className="faq-answer"><p>{item.a}</p></div>}
    </article>
  })

  return <section className="faq-section section-pad"><div className="faq-header"><p className="eyebrow">Frequently asked questions</p><h2>{isNumerologistPage ? 'Numerology questions' : 'Astrology questions'}</h2></div><div className="faq-grid"><div className="faq-column">{renderColumn(leftFaq)}</div><div className="faq-column">{renderColumn(rightFaq)}</div></div></section>
}

function BookingModal({ onClose }) { return <div className="modal-backdrop" onClick={onClose}><div className="booking-modal" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={onClose}>×</button><p className="eyebrow">Begin the conversation</p><h2>Let’s find the<br /><em>right reading.</em></h2><p className="modal-copy">Leave your details and Avishek will be in touch within 24 hours.</p><form onSubmit={(event) => { event.preventDefault(); onClose(); }}><label>Name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@example.com" /></label><label>What would you like to explore?<select defaultValue=""><option value="" disabled>Select a reading</option><option>Birth chart</option><option>Love & partnership</option><option>Career & purpose</option></select></label><button className="gold-button" type="submit">Send enquiry <span>↗</span></button></form></div></div> }

export default App


