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

const servicePath = (service) => service.slug === 'numerologist' ? '/numerologist-in-kolkata' : service.slug === 'palmist' ? '/palm-reader-in-kolkata' : service.slug === 'kundali-matching' ? '/kundali-matching-in-kolkata' : service.slug === 'black-magic' ? '/black-magic-in-kolkata' : service.slug === 'horoscope' ? '/horoscope-consultation-in-kolkata' : `/services/${service.slug}`

const homeFormAccessKey = import.meta.env.VITE_WEB3FORMS_HOME_ACCESS_KEY || '29885bc0-7bbd-4fe1-a48e-7150dd1eb8f8'

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
  { icon: '◌', title: 'Palmist', text: 'Explore your palm lines, strengths, and life direction through palmistry.' },
  { icon: '☽', title: 'Birth Chart Reading', text: 'Understand the map of your soul, your gifts, and the cycles shaping your life.' },
  { icon: '♡', title: 'Love & Partnership', text: 'Discover the patterns that bring you closer to the people who matter most.' },
  { icon: '◈', title: 'Career & Purpose', text: 'Find clarity in your next chapter and make choices aligned with your real calling.' },
]

const homepageServices = [
  { icon: '☉', title: 'Astrologer', slug: 'astrologer', text: 'Receive personalized guidance on life decisions, relationships, and your path ahead.' },
  { icon: '✧', title: 'Numerologist', slug: 'numerologist', text: 'Discover the meaning behind your numbers and how they shape your personal journey.' },
  { icon: '◌', title: 'Palmist', slug: 'palmist', text: 'Explore your palm lines, strengths, and life direction through palmistry.' },
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

  const currentLabel = navItems.find((item) => item.path === path)?.label || (path.startsWith('/services') || path === '/horoscope-consultation-in-kolkata' || path === '/horoscope-consultaion-in-kolkata' || path === '/numerologist-in-kolkata' || path === '/palm-reader-in-kolkata' ? 'Services' : 'Home')
  const currentLocation = locationPages.find((location) => path === `/astrologer-in-${location.slug}`)

  useEffect(() => {
    const selectedService = serviceMenuItems.find((service) => path === servicePath(service) || path.endsWith(`/${service.slug}`))
    const isKundaliPage = path === '/kundali-matching-in-kolkata'
    const isBlackMagicPage = path === '/black-magic-in-kolkata'
    const isHoroscopePage = path === '/horoscope-consultation-in-kolkata' || path === '/horoscope-consultaion-in-kolkata' || path === '/services/horoscope'
    const isServicesPage = path === '/services' || path.startsWith('/services/')
    const isNumerologistPage = selectedService?.slug === 'numerologist'
    const isPalmReaderPage = selectedService?.slug === 'palmist'
    const canonicalPath = isHoroscopePage
      ? '/horoscope-consultation-in-kolkata'
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
                  : currentLocation ? `/astrologer-in-${currentLocation.slug}` : path === '/' ? '/' : path
    const canonicalUrl = `https://www.avisheksastri.com${canonicalPath}`
    let canonicalTag = document.querySelector('link[rel="canonical"]')
    if (!canonicalTag) {
      canonicalTag = document.createElement('link')
      canonicalTag.rel = 'canonical'
      document.head.appendChild(canonicalTag)
    }
    canonicalTag.href = canonicalUrl
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
        {(path.startsWith('/services') || path === '/horoscope-consultation-in-kolkata' || path === '/horoscope-consultaion-in-kolkata' || path === '/kundali-matching-in-kolkata' || path === '/black-magic-in-kolkata' || path === '/numerologist-in-kolkata' || path === '/palm-reader-in-kolkata') && <ServicesPage path={path} goTo={goTo} onBook={() => setBookingOpen(true)} />}
        {path === '/contact' && <ContactPage />}
        {currentLocation && <LocationPage goTo={goTo} onBook={() => setBookingOpen(true)} />}
        {path === '/' && <HomePage goTo={goTo} onBook={() => setBookingOpen(true)} />}
      </main>
      {(path === '/numerologist-in-kolkata' || path.endsWith('/numerologist')) && <NumerologyConsultationProcess />}
      {(path === '/horoscope-consultation-in-kolkata' || path === '/horoscope-consultaion-in-kolkata' || path === '/services/horoscope') && <HoroscopeConsultationProcess />}
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

function HomePage({ goTo, onBook }) {
  return (
    <>
      <section className="hero-section section-pad">
        <div className="hero-copy reveal-up">
          <p className="eyebrow"><span className="eyebrow-line" /> Vedic astrology · Modern perspective</p>
          <h1>Thoughtful astrology for<br /><em>your next chapter.</em></h1>
          <p className="hero-description">A grounded approach to astrology for the moments when you are ready to understand yourself more deeply and move forward with intention.</p>
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
      <HomepageServicesSection goTo={goTo} />
      <Testimonials />
      <CtaBand onBook={onBook} />
    </>
  )
}

function LocationPage({ goTo, onBook }) { return <HomePage goTo={goTo} onBook={onBook} /> }

function AboutServicesSection({ goTo }) { return <section className="services-section section-pad"><div className="center-heading"><p className="eyebrow">Our astrology services</p><h2>Services<br /><em>we provide.</em></h2></div><div className="services-grid services-grid-complete">{homepageServices.map((service) => <article className="service-card" key={service.slug} onClick={() => goTo(servicePath(service))} role="link" tabIndex="0"><span className="service-icon">{service.icon}</span><h3>{service.title}</h3><p>{service.text}</p><span className="card-arrow">↗</span></article>)}</div><button className="gold-button centered-button" onClick={() => goTo('/services')}>Explore all services <span>↗</span></button></section> }
function HomepageServicesSection({ goTo }) {
  return <section className="services-section section-pad">
    <div className="center-heading"><p className="eyebrow">Our astrology services</p><h2>Services<br /><em>we provide.</em></h2></div>
    <div className="services-grid services-grid-complete">{homepageServices.map((service) => <article className="service-card" key={service.slug} onClick={() => goTo(servicePath(service))} role="link" tabIndex="0"><span className="service-icon">{service.icon}</span><h3>{service.title}</h3><p>{service.text}</p><span className="card-arrow">↗</span></article>)}</div>
    <button className="gold-button centered-button" onClick={() => goTo('/services')}>Explore all services <span>↗</span></button>
  </section>
}
function BlackMagicServicesSection({ goTo }) {
  return <section className="services-section black-magic-services-section" aria-label="Astrology services">
    <div className="center-heading"><p className="eyebrow">Explore your options</p><h2>Other services <em>we offer</em></h2></div>
    <div className="services-grid services-grid-complete">{homepageServices.map((service) => <article className="service-card" key={service.slug} onClick={() => goTo(servicePath(service))} role="link" tabIndex="0"><span className="service-icon">{service.icon}</span><h3>{service.title}</h3><p>{service.text}</p><span className="card-arrow">↗</span></article>)}</div>
  </section>
}
function BlackMagicConsultationSection() {
  return <section className="black-magic-consultation section-pad" aria-labelledby="black-magic-consultation-title">
    <div className="black-magic-consultation-panel">
      <div className="black-magic-consultation-heading">
        <p className="eyebrow">Traditional beliefs, considered thoughtfully</p>
        <h2 id="black-magic-consultation-title">A thoughtful conversation about spiritual concerns</h2>
      </div>
      <div className="black-magic-consultation-copy">
        <p>Black magic is commonly described in folklore and spiritual traditions as the use of supernatural practices to influence another person or situation. However, there is no reliable scientific evidence that black magic can cause personal problems or that an astrologer can diagnose its presence.</p>
        <p>Astrologer Avishek Sastri brings 5 years of experience in astrology to consultations involving spiritual questions and traditional astrological perspectives. You can discuss your concerns, learn about relevant beliefs and practices, and ask questions before deciding whether a service is right for you.</p>
        <p className="black-magic-consultation-note">A responsible consultation should help you feel informed rather than frightened. No one should pressure you into expensive rituals, claim certainty without evidence, or promise guaranteed results.</p>
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
    <div className="horoscope-guidance-heading"><p className="eyebrow">A birth-chart based perspective</p><h2 id="horoscope-guidance-title">A personal reading of <em>your birth chart</em></h2></div>
    <div className="horoscope-guidance-copy">
      <p>A horoscope is more than a general prediction based on your zodiac sign. In traditional astrology, a horoscope is prepared using details such as your date, time and place of birth and is interpreted to understand the planetary positions and other factors associated with your birth chart.</p>
      <p>A personalized consultation can help you understand your birth chart and discuss the areas of life that are important to you. Depending on your question, the consultation may cover relationships, marriage, career, business, personal decisions and other concerns.</p>
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
        <div className="horoscope-info-heading"><p className="eyebrow">02 / YOUR QUESTIONS</p><h2 id="horoscope-individual-questions">Bring the questions that matter to you</h2></div>
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
function AboutPage({ goTo }) { return <PageIntro eyebrow="The person behind the chart" title={<>A quiet space for<br /><em>big questions.</em></>}><div className="about-layout"><div className="portrait-card portrait-large"><div className="portrait-image"><img src={bestAstrologerInKolkata} alt="Sree Avishek Sastri" /></div><div className="portrait-glow" /></div><div className="about-copy"><p>Hi, I’m Sree Avishek. I believe astrology is most powerful when it brings you back to yourself.</p><p>My work blends the depth of Vedic tradition with a warm, practical approach. Every reading is a conversation, not a performance. We look at what is happening, why it may be happening now, and what you can do with the clarity you find.</p><div className="signature">Sree Avishek <span>✦</span></div><button className="line-button" onClick={() => goTo('/services')}>See how we can work together <span>→</span></button></div></div></PageIntro> }
function ServicesPage({ path, goTo, onBook }) {
  const selectedService = serviceMenuItems.find((service) => path === servicePath(service) || path.endsWith(`/${service.slug}`))
  const isHoroscopePage = path === '/horoscope-consultation-in-kolkata' || path === '/horoscope-consultaion-in-kolkata' || path === '/services/horoscope'
  const isServicesOverview = path === '/services'
  const isNumerologistPage = selectedService?.slug === 'numerologist'
  const isPalmReaderPage = selectedService?.slug === 'palmist'
  const isKundaliPage = path === '/kundali-matching-in-kolkata'
  const isBlackMagicPage = path === '/black-magic-in-kolkata'
  const pageTitle = isHoroscopePage
    ? 'Horoscope Consultation'
    : isNumerologistPage
      ? 'Numerology Consultation'
      : isPalmReaderPage
        ? 'Palmistry'
      : isKundaliPage
        ? 'Kundali Matching'
        : path === '/black-magic-in-kolkata'
          ? 'Spiritual Guidance'
          : isServicesOverview
            ? 'Our Services'
            : selectedService?.label

  return <>
  <PageIntro
    eyebrow={isHoroscopePage ? 'Traditional horoscope interpretation' : isNumerologistPage ? 'Explore the meaning of numbers' : isPalmReaderPage ? 'Traditional hand analysis' : isKundaliPage ? 'A traditional Vedic perspective' : isBlackMagicPage ? 'Grounded spiritual guidance' : isServicesOverview ? 'Explore the ways we can work together' : selectedService ? `${selectedService.label} consultation` : 'Readings for your next chapter'}
    title={isHoroscopePage ? <>Horoscope<br /><em>consultation.</em></> : isNumerologistPage ? <>Numerology<br /><em>consultation.</em></> : isPalmReaderPage ? <>Palmistry<br /><em>consultation.</em></> : isKundaliPage ? <>Kundali<br /><em>matching.</em></> : isBlackMagicPage ? <>Spiritual<br /><em>guidance.</em></> : isServicesOverview ? <>Our services<br /><em>for life's questions.</em></> : selectedService ? <>{pageTitle}<br /><em>with clarity.</em></> : <>The stars offer<br /><em>perspective.</em></>}
    heroVisual={isHoroscopePage ? <HoroscopeChartVisual /> : isNumerologistPage ? <NumerologyNumberStudy /> : isPalmReaderPage ? <PalmistryHeroVisual /> : isKundaliPage ? <KundaliHeroVisual /> : isBlackMagicPage ? <BlackMagicHeroVisual /> : null}
    afterHero={isHoroscopePage ? <><HoroscopeGuidanceSection /><HoroscopeConsultationDetails /></> : isBlackMagicPage ? <BlackMagicIntroSection /> : null}
    renderContent={!isBlackMagicPage}
  >
    {isKundaliPage && <section className="kundali-intro-copy section-pad">
      <div className="kundali-intro-shell">
        <div className="kundali-intro-topline"><span className="section-label">Kundali Matching</span><span className="kundali-intro-index">A TRADITIONAL VEDIC PERSPECTIVE</span></div>
        <div className="kundali-intro-grid">
          <div className="kundali-intro-title">
            <h2>Kundali Matching</h2>
            <p className="kundali-intro-signature">A consultation with Avishek Sastri</p>
          </div>
          <div className="kundali-intro-content">
            <p>Marriage is an important life decision, and many families in India consider astrology when evaluating compatibility between prospective partners. Traditional horoscope matching compares the birth charts of two people and considers factors such as Guna Milan. A consultation with Avishek Sastri can explain these interpretations and how they are traditionally understood.</p>
            <p>Whether you are planning an arranged marriage or exploring a relationship that may lead to marriage, understanding the traditional principles of horoscope matching can help you make a more informed and thoughtful decision.</p>
          </div>
        </div>
        <div className="kundali-intro-mandala" aria-hidden="true"><span>✦</span></div>
      </div>
    </section>}
    {isNumerologistPage && <div className="service-intro-copy numerology-intro-feature">
      <div className="numerology-intro-heading"><span className="numerology-intro-index">01 / THE PRACTICE</span><h2>Understanding<br /><em>Numerology.</em></h2></div>
      <div className="numerology-intro-body">
        <p className="numerology-intro-lead">Numerology is a traditional system of interpreting numbers associated with a person's name and date of birth to explore patterns, characteristics and different areas of life. A personalized consultation can help you understand how numerological interpretations relate to your individual circumstances.</p>
        <div className="numerology-approach-panel"><span className="numerology-intro-index">A PERSONALIZED APPROACH</span><p>A numerology consultation is different from a general online number reading because it considers the information relevant to the individual and the specific questions they want to discuss. Depending on the consultation, this may include name analysis, date of birth analysis and other numerological calculations.</p><div className="numerology-detail-tags"><span>NAME ANALYSIS</span><span>DATE OF BIRTH</span><span>NUMBER PATTERNS</span></div></div>
      </div>
    </div>}
    {isPalmReaderPage && <div className="service-intro-copy palm-reader-intro"><div className="palm-reader-intro-header"><span className="palm-reader-kicker">Traditional hand analysis</span><h2>Understanding Palmistry</h2></div><div className="palm-reader-layout"><div className="palm-reader-copy"><p>Palmistry, also known as palm reading or chiromancy, is a traditional practice in which the lines, shapes and features of the hands are interpreted to explore different aspects of an individual's life and personality. A personal consultation can explain the traditional meanings associated with the features of your palms.</p><p>The discussion focuses on your hands and the questions you want to explore. Depending on the approach followed, a practitioner may examine major palm lines, mounts, finger shapes, hand structure and other visible features.</p><p className="palm-reader-note">A palm reading consultation offers a thoughtful perspective for reflection, not a guaranteed prediction of future events.</p></div><aside className="palm-reader-feature-panel"><span>What may be explored</span><ul><li>Major palm lines</li><li>Finger shapes</li><li>Hand structure</li><li>Mounts and visible features</li></ul></aside></div></div>}
    {isServicesOverview && <div className="service-intro-copy"><p>Explore astrology, numerology, palmistry, horoscope interpretation, and Kundali matching.</p><p>Each session is an opportunity to discuss questions about love, marriage, career, business, spiritual beliefs, and personal growth.</p></div>}
    {isHoroscopePage && <HoroscopeConsultationContent goTo={goTo} />}
    {(isPalmReaderPage || isNumerologistPage || isKundaliPage) && (
      <>
        <div className="center-heading"><p className="eyebrow">Our astrology services</p><h2>{isNumerologistPage ? <>Our <em>Services.</em></> : isKundaliPage ? <>Explore more<br /><em>matchmaking services.</em></> : <>Services<br /><em>we provide.</em></>}</h2></div>
        <div className="services-grid services-grid-complete">
          {homepageServices.map((service) => <article className="service-card" key={service.slug} onClick={() => goTo(servicePath(service))} role="link" tabIndex="0"><span className="service-icon">{service.icon}</span><h3>{service.title}</h3><p>{service.text}</p><span className="card-arrow">↗</span></article>)}
        </div>
      </>
    )}
    {!isHoroscopePage && !isPalmReaderPage && !isNumerologistPage && !isKundaliPage && !isBlackMagicPage && <div className="full-services-grid">{serviceCards.map((service, index) => <article className="service-card service-card-large" key={service.title}><span className="service-number">0{index + 1}</span><span className="service-icon">{service.icon}</span><h3>{service.title}</h3><p>{service.text}</p><button className="line-button" onClick={onBook}>Book this reading <span>↗</span></button></article>)}</div>}
  </PageIntro>
  {isBlackMagicPage && <><BlackMagicServicesSection goTo={goTo} /><BlackMagicConsultationSection /></>}
  </>
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
function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionMessage, setSubmissionMessage] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

    if (!accessKey) {
      setSubmissionMessage('Enquiry delivery is not configured yet. Please try again later or email us directly.')
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)
    formData.set('access_key', accessKey)
    formData.set('subject', 'New contact form enquiry')
    setIsSubmitting(true)
    setSubmissionMessage('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Web3Forms could not accept the enquiry.')
      }

      form.reset()
      setSubmissionMessage('Thank you! Your enquiry has been sent. We will be in touch within 24 hours.')
    } catch (error) {
      console.error('Contact form submission failed:', error)
      setSubmissionMessage('Sorry, your enquiry could not be sent. Please try again or email us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return <PageIntro eyebrow="Begin the conversation" title={<>Let’s find the<br /><em>right direction.</em></>}>
    <div className="contact-layout">
      <div className="contact-copy">
        <h2>A thoughtful reading starts with a thoughtful question.</h2>
        <p>Share what is on your mind and Sree Avishek Sastri will help you understand the right next step. Consultations are available for career, relationships, marriage, business, education, and personal decisions.</p>
        <div className="contact-details">
          <div><span>Email</span><a href="mailto:sreeavisheksastri95@gmail.com">sreeavisheksastri95@gmail.com</a></div>
          <div><span>Location</span><p>Kolkata · West Bengal</p></div>
          <div><span>Response time</span><p>Within 24 hours</p></div>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Name<input name="name" required placeholder="Your name" autoComplete="name" /></label>
        <label>Email<input name="email" required type="email" placeholder="you@example.com" autoComplete="email" /></label>
        <label>Mobile number<input name="phone" required type="tel" inputMode="tel" autoComplete="tel" placeholder="Your mobile number" /></label>
        <label>What would you like to explore?<select name="reading" defaultValue=""><option value="" disabled>Select a reading</option><option>Birth chart</option><option>Love & partnership</option><option>Career & purpose</option><option>Marriage & Kundli matching</option></select></label>
        <label>Your question<textarea name="message" required rows="5" placeholder="Tell us a little about what you would like guidance on" /></label>
        <button className="gold-button" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending…' : 'Send enquiry'} <span>↗</span></button>
        {submissionMessage && <p className="contact-form-status" role="status" aria-live="polite">{submissionMessage}</p>}
      </form>
    </div>
  </PageIntro>
}
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
      <div><h2>Birth Chart Analysis</h2>
        <p>A birth chart represents the positions of relevant celestial bodies at the time and place of birth. In Vedic astrology, an astrologer may examine different houses, planetary placements, signs and other chart factors while interpreting the horoscope.</p>
        <p>A birth chart consultation can provide a more individualized discussion than a general daily or monthly horoscope.</p>
        <p>The interpretation depends on the complete chart rather than one planetary position or a single zodiac sign. This is why a personal reading should consider the broader context of the horoscope.</p>
      </div>
    </article>
    <article>
      <span className="trusted-astrology-index">03 / CAREER</span>
      <div><h2>Career and Work</h2>
        <p>Career is one of the common reasons people seek an astrology consultation.</p>
        <p>A career-focused horoscope reading may examine the astrological factors traditionally associated with profession, skills, responsibilities, opportunities and periods of change.</p>
        <p>If you are considering a career change, a new professional direction or an important work-related decision, a horoscope consultation can provide an additional perspective through traditional astrology.</p>
        <p>However, career decisions should also consider your education, experience, financial situation, skills, interests and professional opportunities.</p>
      </div>
    </article>
    <article>
      <span className="trusted-astrology-index">04 / RELATIONSHIPS</span>
      <div><h2>Marriage and Relationships</h2>
        <p>Relationships and marriage are another important area of horoscope consultation.</p>
        <p>A relationship-focused reading may consider relevant aspects of the individual birth charts and discuss traditional astrological interpretations connected with relationships, marriage and compatibility.</p>
        <p>For couples, a separate <strong>Kundali matching consultation</strong> may be more appropriate when the objective is to compare two birth charts.</p>
        <p>Astrology can offer a traditional perspective, but relationship decisions are also influenced by communication, mutual understanding, values and individual circumstances.</p>
      </div>
    </article>
    <article>
      <span className="trusted-astrology-index">05 / BUSINESS</span>
      <div><h2>Business and Professional Decisions</h2>
        <p>Business owners and professionals may seek horoscope consultation when considering an important professional decision.</p>
        <p>A business-focused consultation can discuss the astrological factors traditionally associated with professional activity, decision-making and periods of change.</p>
        <p>Astrology should not replace business planning, financial analysis, market research or professional advice. Instead, it can be considered an additional perspective for someone who personally values astrological guidance.</p>
      </div>
    </article>
    <article>
      <span className="trusted-astrology-index">06 / VEDIC ASTROLOGY</span>
      <div><h2>Vedic Astrology</h2>
        <p>A Vedic horoscope consultation follows principles associated with the Vedic astrology tradition.</p>
        <p>Depending on the consultation, an astrologer may consider planetary positions, houses, signs, dashas and other relevant factors when interpreting the birth chart.</p>
        <p>The specific techniques used can differ between practitioners, so it is useful to ask the astrologer about their approach before booking a consultation.</p>
      </div>
    </article>
  </div>
}
function PageIntro({ eyebrow, title, children, heroVisual, afterHero, renderContent = true }) {
  const heading = <div className={`page-heading${heroVisual ? ' page-heading-with-visual' : ''}`}>{heroVisual ? <div className="page-heading-copy"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1></div> : <><p className="eyebrow">{eyebrow}</p><h1>{title}</h1></>}{heroVisual}</div>

  if (afterHero) return <>
    <section className="page-intro page-intro-hero-only section-pad">{heading}</section>
    {afterHero}
    {renderContent && <section className="page-intro page-intro-content section-pad">{children}</section>}
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
function KundaliHeroVisual() {
  return <figure className="kundali-hero-visual" role="img" aria-label="Kundali matching compatibility panel for marriage guidance">
    <div className="kundali-hero-card">
      <div className="kundali-hero-head">
        <span>Matching</span>
        <strong>Guna / 36</strong>
      </div>
      <div className="kundali-hero-ring">
        <div className="kundali-hero-person kundali-hero-person-left">
          <span>☉</span>
          <small>BRIDE</small>
        </div>
        <div className="kundali-hero-center">
          <strong>86%</strong>
          <em>Match</em>
        </div>
        <div className="kundali-hero-person kundali-hero-person-right">
          <span>☾</span>
          <small>GROOM</small>
        </div>
      </div>
      <div className="kundali-hero-metrics">
        <div><span>Vedic</span><b>Compatibility</b></div>
        <div><span>Marriage</span><b>Readiness</b></div>
      </div>
    </div>
    <figcaption><span>PERSONALIZED MATCHING</span><strong>Understand harmony before marriage.</strong></figcaption>
  </figure>
}
function BlackMagicIntroSection() {
  return <section className="black-magic-intro section-pad" aria-labelledby="black-magic-intro-title">
    <div className="black-magic-intro-panel">
      <div className="black-magic-intro-heading">
        <p className="eyebrow">A respectful, grounded conversation</p>
        <h2 id="black-magic-intro-title">A grounded conversation about spiritual beliefs</h2>
      </div>
      <div className="black-magic-intro-copy">
        <p>A consultation with Avishek Sastri offers a space to discuss traditional spiritual beliefs and personal concerns through the perspective of astrology.</p>
        <p>Spiritual consultations should be approached thoughtfully. Understand what a service includes, and avoid anyone who uses fear or pressure to demand money or promises immediate results.</p>
        <p>Whether you want to learn about traditional beliefs surrounding black magic, explore spiritual practices, or discuss personal concerns, a clear and respectful consultation can help you understand your options.</p>
      </div>
      <span className="black-magic-intro-mark" aria-hidden="true">✦</span>
    </div>
  </section>
}
function BlackMagicHeroVisual() {
  return <figure className="black-magic-hero-visual" role="img" aria-label="Abstract celestial design representing reflection and grounded spiritual guidance">
    <div className="black-magic-hero-frame">
      <div className="black-magic-hero-meta"><span>GROUNDING / 01</span><span>✦</span></div>
      <div className="black-magic-hero-emblem" aria-hidden="true">
        <div className="black-magic-hero-orbit black-magic-hero-orbit-outer" />
        <div className="black-magic-hero-orbit black-magic-hero-orbit-inner" />
        <div className="black-magic-hero-diamond" />
        <div className="black-magic-hero-center"><span>✧</span><small>CLARITY</small></div>
        <i className="black-magic-star black-magic-star-one" />
        <i className="black-magic-star black-magic-star-two" />
        <i className="black-magic-star black-magic-star-three" />
      </div>
      <div className="black-magic-hero-principles"><span>REFLECTION</span><i /><span>BALANCE</span><i /><span>PERSPECTIVE</span></div>
    </div>
    <figcaption><span>A THOUGHTFUL, GROUNDED APPROACH</span><strong>Begin with a calm conversation.</strong></figcaption>
  </figure>
}
function Testimonials() { return <section className="testimonials-section section-pad"><div className="section-grid"><div className="section-label">02 / In their own words</div><div className="testimonial-heading"><p className="eyebrow">Real stories, real shifts</p><h2>It starts with<br /><em>being seen.</em></h2></div></div><div className="testimonial-grid">{testimonials.map((item) => <article className="testimonial-card" key={item.name}><span className="quote-mark">“</span><p>{item.quote}</p><footer><b>{item.name}</b><span>{item.role}</span></footer></article>)}</div></section> }
function CtaBand({ onBook }) { return <section className="cta-band section-pad"><div className="cta-stars">✦　·　✧　·　✦</div><p className="eyebrow">Your next chapter is already unfolding</p><h2>Get the Solution of<br /><em>Every Kind of problem</em></h2><button className="gold-button" onClick={onBook}>Book your private reading <span>↗</span></button></section> }

function BookingModal({ onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionMessage, setSubmissionMessage] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    const accessKey = homeFormAccessKey

    if (!accessKey) {
      setSubmissionMessage('Enquiry delivery is not configured yet. Please try again later or email us directly.')
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)
    formData.set('access_key', accessKey)
    formData.set('subject', 'New home page booking enquiry')
    setIsSubmitting(true)
    setSubmissionMessage('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Web3Forms could not accept the enquiry.')
      }

      form.reset()
      setSubmissionMessage('Thank you! Your enquiry has been sent. We will be in touch within 24 hours.')
    } catch (error) {
      console.error('Booking form submission failed:', error)
      setSubmissionMessage('Sorry, your enquiry could not be sent. Please try again or email us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return <div className="modal-backdrop" onClick={onClose}>
    <div className="booking-modal" onClick={(event) => event.stopPropagation()}>
      <button className="modal-close" onClick={onClose}>×</button>
      <p className="eyebrow">Begin the conversation</p>
      <h2>Let’s find the<br /><em>right reading.</em></h2>
      <p className="modal-copy">Leave your details and Avishek will be in touch within 24 hours.</p>
      <form onSubmit={handleSubmit}>
        <label>Name<input name="name" required placeholder="Your name" autoComplete="name" /></label>
        <label>Email<input name="email" required type="email" placeholder="you@example.com" autoComplete="email" /></label>
        <label>Mobile number<input name="phone" required type="tel" inputMode="tel" autoComplete="tel" placeholder="Your mobile number" /></label>
        <label>What would you like to explore?<select name="reading" defaultValue=""><option value="" disabled>Select a reading</option><option>Birth chart</option><option>Love & partnership</option><option>Career & purpose</option></select></label>
        <button className="gold-button" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending…' : 'Send enquiry'} <span>↗</span></button>
        {submissionMessage && <p className="booking-form-status" role="status" aria-live="polite">{submissionMessage}</p>}
      </form>
    </div>
  </div>
}

export default App
