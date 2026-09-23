import { useEffect, useState } from 'react'
import { FaPhone, FaWhatsapp } from 'react-icons/fa'
import './App.css'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

const serviceMenuItems = [
  { label: 'Horoscope', slug: 'horoscope' },
  { label: 'Kundali Matching', slug: 'kundali-matching' },
  { label: 'Get Love Back', slug: 'get-love-back' },
  { label: 'Black Magic', slug: 'black-magic' },
  { label: 'Birth Chart', slug: 'birth-chart' },
  { label: 'Mangal Dosh', slug: 'mangal-dosh' },
]

const servicePath = (service) => service.slug === 'kundali-matching' ? '/kundali-matching-in-kolkata' : service.slug === 'black-magic' ? '/black-magic-in-kolkata' : service.slug === 'horoscope' ? '/horoscope-consultaion-in-kolkata' : `/services/${service.slug}`

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
  { icon: '☉', title: 'Birth Chart Reading', text: 'Understand the map of your soul, your gifts, and the cycles shaping your life.' },
  { icon: '✧', title: 'Love & Partnership', text: 'Discover the patterns that bring you closer to the people who matter most.' },
  { icon: '◌', title: 'Career & Purpose', text: 'Find clarity in your next chapter and make choices aligned with your real calling.' },
  { icon: '☽', title: 'Inner Healing', text: 'A gentle space to meet old patterns with awareness, compassion, and direction.' },
]

const homepageServices = [
  { icon: '☉', title: 'Horoscope', slug: 'horoscope', text: 'Receive thoughtful guidance for the opportunities, patterns, and timing shaping your days.' },
  { icon: '✧', title: 'Kundali Matching', slug: 'kundali-matching', text: 'Explore compatibility, shared strengths, and the foundations of a meaningful partnership.' },
  { icon: '♡', title: 'Get Love Back', slug: 'get-love-back', text: 'Find a calm, respectful path through relationship questions, distance, and emotional uncertainty.' },
  { icon: '◈', title: 'Black Magic', slug: 'black-magic', text: 'Understand difficult energy with a grounded consultation focused on clarity and protection.' },
  { icon: '◌', title: 'Birth Chart', slug: 'birth-chart', text: 'Read the unique map of your personality, potential, purpose, and life cycles.' },
  { icon: '☽', title: 'Mangal Dosh', slug: 'mangal-dosh', text: 'Explore traditional Mangal Dosh guidance with context, care, and practical perspective.' },
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

  const currentLabel = navItems.find((item) => item.path === path)?.label || (path.startsWith('/services') || path === '/horoscope-consultaion-in-kolkata' ? 'Services' : 'Home')
  const currentLocation = locationPages.find((location) => path === `/astrologer-in-${location.slug}`)

  useEffect(() => {
    const location = currentLocation?.name || 'Kolkata'
    const isKundaliPage = path === '/kundali-matching-in-kolkata'
    const isBlackMagicPage = path === '/black-magic-in-kolkata'
    const isHoroscopePage = path === '/horoscope-consultaion-in-kolkata' || path === '/services/horoscope'
    const title = isHoroscopePage ? 'Horoscope Consultation in Kolkata | Avishek Sastri' : isKundaliPage ? 'Kundali Matching in Kolkata' : isBlackMagicPage ? 'Black Magic in Kolkata | Astro Avishek Sastri' : `Best Astrologer in ${location} | Avishek Sastri`
    const description = isKundaliPage
      ? 'Get accurate Kundali Matching in Kolkata for marriage compatibility, Guna Milan and horoscope analysis. Consult an experienced astrologer for personalized guidance.'
      : isBlackMagicPage
        ? 'Looking for black magic guidance in Kolkata? Consult an experienced astrologer for spiritual guidance, Vedic astrology insights and personalized solutions.'
      : isHoroscopePage
        ? 'Get trusted horoscope consultation in Kolkata for personalized guidance on career, love, marriage, finance, and important life decisions based on your horoscope.'
      : `Find the best astrologer in ${location} for personalized Kundli, marriage, career and relationship guidance. Book an astrology consultation with an experienced astrologer.`
    document.title = title
    let descriptionTag = document.querySelector('meta[name="description"]')
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta')
      descriptionTag.name = 'description'
      document.head.appendChild(descriptionTag)
    }
    descriptionTag.content = description
    const canonicalPath = isHoroscopePage ? '/horoscope-consultaion-in-kolkata' : isKundaliPage ? '/kundali-matching-in-kolkata' : isBlackMagicPage ? '/black-magic-in-kolkata' : currentLocation ? `/astrologer-in-${locationPages.find((item) => item.name === location).slug}` : path === '/' ? '/' : path
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
          <button className="wordmark" onClick={() => goTo('/')} aria-label="Avishek Sastri home"><span className="wordmark-mark"><i>✦</i></span><span>Avishek<br /><b>Sastri</b></span></button>
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
        {(path.startsWith('/services') || path === '/horoscope-consultaion-in-kolkata' || path === '/kundali-matching-in-kolkata' || path === '/black-magic-in-kolkata') && <ServicesPage path={path} onBook={() => setBookingOpen(true)} />}
        {path === '/contact' && <ContactPage />}
        {currentLocation && <LocationPage location={currentLocation.name} goTo={goTo} onBook={() => setBookingOpen(true)} />}
        {path === '/' && <><HomePage goTo={goTo} onBook={() => setBookingOpen(true)} /><WhyChooseUs /></>}
      </main>
      {path !== '/' && <WhyChooseUs />}
      <FaqSection location={currentLocation?.name || 'Kolkata'} />
      {(path === '/' || currentLocation) && <ServiceAreasSection goTo={goTo} />}
      <footer className="site-footer">
        <div className="footer-invitation"><p className="eyebrow">The conversation can begin anywhere</p><h2>Come back to<br /><em>your own sky.</em></h2><button className="gold-button" onClick={() => setBookingOpen(true)}>Book a private reading <span>↗</span></button></div>
        <div className="footer-grid">
          <div className="footer-about"><div className="footer-brand"><span className="wordmark-mark">✧</span><span>Avishek Sastri</span></div><p>A grounded approach to Vedic astrology for the curious, the searching, and the ready.</p></div>
          <div className="footer-column"><span className="footer-heading">Explore</span><button onClick={() => goTo('/')}>Home</button><button onClick={() => goTo('/about')}>About Avishek</button><button onClick={() => goTo('/services')}>Services</button><button onClick={() => goTo('/contact')}>Contact</button></div>
          <div className="footer-column"><span className="footer-heading">Readings</span>{serviceMenuItems.slice(0, 4).map((service) => <button key={service.slug} onClick={() => goTo(servicePath(service))}>{service.label}</button>)}</div>
           <div className="footer-column footer-contact"><span className="footer-heading">Say hello</span><a href="mailto:hello@aviseksastri.com">hello@aviseksastri.com</a><a href="tel:+919163653093">+91 91635 3093</a><span>Kolkata · West Bengal</span><span className="footer-socials"><a href="#instagram">Instagram</a><a href="#whatsapp">WhatsApp</a></span></div>
        </div>
        <div className="footer-bottom"><span>© 2025 Avishek Sastri</span><span>Made for the curious soul</span><span>Privacy · Terms</span></div>
      </footer>
      <div className="floating-contact-actions" aria-label="Contact Avishek Sastri">
        <a className="floating-contact-button floating-call-button" href="tel:+919163653093" aria-label="Call Avishek Sastri"><FaPhone className="contact-icon" aria-hidden="true" /></a>
        <a className="floating-contact-button floating-whatsapp-button" href="https://wa.me/919163653093" target="_blank" rel="noreferrer" aria-label="Message Avishek Sastri on WhatsApp"><FaWhatsapp className="contact-icon" aria-hidden="true" /></a>
      </div>
      {bookingOpen && <BookingModal onClose={() => setBookingOpen(false)} />}
    </div>
  )
}

function HomePage({ goTo, onBook, location = 'Kolkata' }) { return <><section className="hero-section section-pad"><div className="hero-copy reveal-up"><p className="eyebrow"><span className="eyebrow-line" /> Vedic astrology · Modern perspective</p><h1>Find the best<br /><em>astrologer in {location}.</em></h1><p className="hero-description">A grounded approach to astrology for the moments when you are ready to understand yourself more deeply and move forward with intention.</p><div className="hero-actions"><button className="gold-button" onClick={onBook}>Begin your reading <span>↗</span></button><button className="text-button" onClick={() => goTo('/about')}>Meet Avishek <span>↓</span></button></div></div><div className="hero-art" aria-label="A celestial night sky with glowing stars"><div className="planet planet-large" /><div className="planet planet-small" /><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="constellation constellation-one"><i /><i /><i /><i /><i /></div><div className="constellation constellation-two"><i /><i /><i /><i /></div><div className="hero-art-caption"><span>01</span><span>the cosmic perspective</span></div></div><div className="scroll-cue">Scroll to explore <span>↓</span></div></section>{location === 'Kolkata' ? <LocalSeoSection onBook={onBook} /> : <LocationSeoSection location={location} onBook={onBook} />}<section className="services-section section-pad"><div className="center-heading"><p className="eyebrow">Our astrology services</p><h2>Services<br /><em>we provide.</em></h2></div><div className="services-grid services-grid-complete">{homepageServices.map((service) => <article className="service-card" key={service.slug} onClick={() => goTo(servicePath(service))} role="link" tabIndex="0"><span className="service-icon">{service.icon}</span><h3>{service.title}</h3><p>{service.text}</p><span className="card-arrow">↗</span></article>)}</div><button className="gold-button centered-button" onClick={() => goTo('/services')}>Explore all services <span>↗</span></button></section><Testimonials /><CtaBand onBook={onBook} /></> }

function LocationPage({ location, goTo, onBook }) { return <HomePage location={location} goTo={goTo} onBook={onBook} /> }

function ServiceAreasSection({ goTo }) { return <section className="service-areas-section section-pad"><div className="center-heading"><p className="eyebrow">Astrology guidance across the city</p><h2>Our service areas<br /><em>in Kolkata.</em></h2></div><div className="service-areas-grid">{locationPages.map((location) => <button key={location.slug} onClick={() => goTo(`/astrologer-in-${location.slug}`)}>Astrologer in {location.name}<span>↗</span></button>)}</div></section> }
function AboutServicesSection({ goTo }) { return <section className="services-section section-pad"><div className="center-heading"><p className="eyebrow">Our astrology services</p><h2>Services<br /><em>we provide.</em></h2></div><div className="services-grid services-grid-complete">{homepageServices.map((service) => <article className="service-card" key={service.slug} onClick={() => goTo(servicePath(service))} role="link" tabIndex="0"><span className="service-icon">{service.icon}</span><h3>{service.title}</h3><p>{service.text}</p><span className="card-arrow">↗</span></article>)}</div><button className="gold-button centered-button" onClick={() => goTo('/services')}>Explore all services <span>↗</span></button></section> }
function LocationSeoSection({ location, onBook }) { return <section className="local-seo-section section-pad"><div className="local-seo-heading"><p className="eyebrow">Astrology guidance near you</p><h2>Best astrologer in {location} for your future</h2></div><div className="local-seo-content location-seo-copy"><p>Looking for an <strong>astrologer in {location}</strong>? Astro Avishek Sastri offers personalized astrology consultations based on your birth details, questions, and life circumstances. Get thoughtful guidance for marriage, relationships, career, business, education, and important personal decisions.</p><p>An experienced <strong>astrologer in {location}</strong> can interpret your Kundli and explain planetary influences in a clear, practical way. Consult online or arrange a reading from anywhere in Kolkata.</p><button className="line-button" onClick={onBook}>Speak with Avishek <span>↗</span></button></div></section> }
function WhyChooseUs() { return <section className="why-choose-section section-pad"><div className="why-choose-heading"><p className="eyebrow">Why choose Astro Avishek Sastri?</p><h2>Why Choose Astro Avishek Sastri</h2></div><div className="why-choose-grid"><article><span>01</span><h3>5 Years of Astrology Experience</h3><p>With <strong>5 years of experience in astrology</strong>, Avishek Sastri has developed practical experience in studying birth charts and understanding different astrological combinations. Every consultation is approached with attention to the individual's birth details, questions, and circumstances rather than relying on generic predictions.</p></article><article><span>02</span><h3>Personalized Astrology Guidance</h3><p>Every person's birth chart is different, which is why astrology consultations should be personalized. Astro Avishek Sastri takes the time to understand your concerns before providing guidance. Whether you are seeking insights about <strong>career, marriage, relationships, education, business, family, or personal decisions</strong>, the consultation is tailored to your specific questions and astrological chart.</p></article><article><span>03</span><h3>Traditional Astrology Knowledge</h3><p>Astro Avishek Sastri follows established principles of astrology while interpreting planetary positions, houses, signs, and other relevant chart factors. The focus is on explaining astrological observations in a clear and understandable way so that clients can better understand the factors being discussed during their consultation.</p></article><article><span>04</span><h3>Clear and Practical Explanations</h3><p>Astrology can involve complex terminology and concepts. Avishek Sastri aims to explain astrological observations in simple language, making consultations easier to understand. Instead of presenting complicated information without context, the focus is on connecting chart observations with the questions and circumstances shared during the consultation.</p></article><article><span>05</span><h3>Guidance for Different Life Areas</h3><p>People consult an astrologer for different reasons and at different stages of life. Astro Avishek Sastri provides personalized astrology guidance for areas such as <strong>career and professional life, marriage and relationships, business, education, family matters, and general life guidance</strong>. Each consultation is based on the individual's birth details and the specific area they want to discuss.</p></article><article><span>06</span><h3>Ethical and Responsible Approach</h3><p>Astrology consultations should be approached responsibly. Astro Avishek Sastri focuses on providing guidance based on astrological interpretation rather than presenting astrology as a guaranteed solution to life's challenges. Important personal, financial, medical, or legal decisions should always be considered carefully and, where appropriate, discussed with qualified professionals.</p></article><article><span>07</span><h3>Client-Focused Consultations</h3><p>A good astrology consultation should provide an opportunity for clients to ask questions and understand the interpretation of their chart. Astro Avishek Sastri follows a client-focused approach, giving attention to the individual's concerns and explaining relevant astrological factors during the consultation.</p></article><article><span>08</span><h3>Why People Choose Astro Avishek Sastri</h3><p>With <strong>5 years of experience in astrology</strong>, a personalized consultation approach, knowledge of traditional astrological principles, and a focus on clear communication, Astro Avishek Sastri provides astrology consultations designed around individual needs. If you are looking for an <strong>astrologer for personalized guidance</strong>, understanding your birth chart and discussing your specific concerns can help make the consultation more relevant and meaningful.</p></article></div></section> }
function LocalSeoSection({ onBook }) { return <section className="local-seo-section section-pad"><div className="local-seo-heading"><p className="eyebrow">Astrology guidance in the city of joy</p><h2>Best astrologer in Kolkata for your future</h2></div><div className="local-seo-main"><div className="local-seo-image" role="img" aria-label="Avishek Sastri astrologer photo placeholder"><span><b>Astrologer image slot</b><br />Add your photo at<br /><strong>/public/astrologer-avisek-sastri.jpg</strong></span></div><div className="local-seo-content"><p>Finding the right astrologer can help you understand your birth chart, planetary influences, and important phases of life with greater clarity. If you are looking for the <strong>best astrologer in Kolkata</strong>, choose an astrology professional who takes time to understand your concerns and provides a personalized interpretation based on your birth details. Whether you need guidance about marriage, relationships, career, business, finances, or personal decisions, a detailed astrology consultation can provide a structured perspective.</p><p>An experienced <strong>astrologer in Kolkata</strong> can analyze your date, time, and place of birth to prepare and interpret your Kundli. Vedic astrology considers planetary positions, houses, zodiac signs, and other astrological factors to understand different areas of life. A consultation should focus on your individual chart rather than providing generic predictions.</p><button className="line-button" onClick={onBook}>Speak with Avishek <span>↗</span></button></div></div><div className="local-seo-faq"><article><h3>Online Astrology Consultation</h3><p>You do not always need to visit an astrologer's office for guidance. An <strong>online astrologer in Kolkata</strong> can provide consultations through phone calls, video consultations, or other online communication methods. Online sessions can be convenient for people with busy schedules or those living outside central Kolkata.</p><p>If you have searched for an <strong>astrologer near me</strong>, you can consider both local and online consultation options based on your requirements. A <strong>Kolkata astrologer</strong> offering online services can also connect with clients from different parts of the city and beyond.</p></article><article><h3>Personalized Astrology Guidance in Kolkata</h3><p>Many people search for a <strong>famous astrologer in Kolkata</strong> or a <strong>top astrologer in Kolkata</strong> when they want personalized guidance for important life questions. Similarly, those looking for a <strong>renowned astrologer in Kolkata</strong> often want someone with knowledge of traditional astrology and experience in interpreting different types of Kundli.</p><p>A <strong>professional astrologer in Kolkata</strong> can offer consultations for a range of concerns, including marriage compatibility, love and relationships, career growth, business decisions, financial planning, family matters, and future trends. The purpose of an astrology consultation is to help you understand the astrological factors connected with your questions and make decisions with greater awareness.</p></article></div></section> }
function AboutPage({ goTo }) { return <PageIntro eyebrow="The person behind the chart" title={<>A quiet space for<br /><em>big questions.</em></>}><div className="about-layout"><div className="portrait-card portrait-large"><div className="portrait-image" /><div className="portrait-glow" /></div><div className="about-copy"><p>Hi, I’m Avishek. I believe astrology is most powerful when it brings you back to yourself.</p><p>My work blends the depth of Vedic tradition with a warm, practical approach. Every reading is a conversation, not a performance. We look at what is happening, why it may be happening now, and what you can do with the clarity you find.</p><div className="signature">Avishek <span>✦</span></div><button className="line-button" onClick={() => goTo('/services')}>See how we can work together <span>→</span></button></div></div></PageIntro> }
function ServicesPage({ path, onBook }) {
  const selectedService = serviceMenuItems.find((service) => path === servicePath(service) || path.endsWith(`/${service.slug}`))
  const isHoroscopePage = path === '/horoscope-consultaion-in-kolkata' || path === '/services/horoscope'
  const pageTitle = isHoroscopePage ? 'Horoscope Consultation in Kolkata' : path === '/kundali-matching-in-kolkata' ? 'Kundali Matching in Kolkata' : path === '/black-magic-in-kolkata' ? 'Black Magic in Kolkata' : selectedService?.label

  return <PageIntro eyebrow={isHoroscopePage ? 'Trusted horoscope guidance in Kolkata' : selectedService ? `${selectedService.label} consultation` : 'Readings for your next chapter'} title={isHoroscopePage ? <>Horoscope Consultation in Kolkata</> : selectedService ? <>{pageTitle}<br /><em>with clarity.</em></> : <>The stars offer<br /><em>perspective.</em></>}> 
    {isHoroscopePage && <HoroscopeConsultationContent onBook={onBook} />}
    {!isHoroscopePage && <div className="full-services-grid">{serviceCards.map((service, index) => <article className="service-card service-card-large" key={service.title}><span className="service-number">0{index + 1}</span><span className="service-icon">{service.icon}</span><h3>{service.title}</h3><p>{service.text}</p><button className="line-button" onClick={onBook}>Book this reading <span>↗</span></button></article>)}</div>}
  </PageIntro>
}

function HoroscopeConsultationContent({ onBook }) {
  const topics = [
    { title: 'Career and work', text: 'Explore professional strengths, periods of change, work patterns, and questions about your next career step through a personalized horoscope reading.' },
    { title: 'Love and relationships', text: 'Discuss relationship patterns, emotional needs, communication, and the questions that matter to you with context from your birth chart.' },
    { title: 'Marriage and compatibility', text: 'Understand marriage-related questions through a careful reading of relevant horoscope factors, with space to discuss timing, expectations, and compatibility.' },
    { title: 'Finance and business', text: 'Use your horoscope as one perspective when thinking about business choices, financial patterns, professional partnerships, and periods that need thoughtful planning.' },
  ]

  return <div className="horoscope-content">
    <div className="horoscope-introduction">
      <p>Looking for a <strong>horoscope consultation in Kolkata</strong>? Astro Avishek Sastri offers trusted, personalized guidance based on your birth details and the questions you bring to the consultation. A horoscope reading can help you reflect on career, love, marriage, finance, and important life decisions with greater structure and clarity.</p>
      <p>Each session is approached as a conversation rather than a generic prediction. Your date, time, and place of birth are considered alongside your present circumstances, so the discussion stays relevant to your real concerns.</p>
      <button className="gold-button" onClick={onBook}>Book a horoscope consultation <span>↗</span></button>
    </div>
    <div className="horoscope-topic-grid">{topics.map((topic, index) => <article key={topic.title}><span>0{index + 1}</span><h2>{topic.title}</h2><p>{topic.text}</p></article>)}</div>
    <div className="horoscope-details">
      <div><p className="eyebrow">What to bring</p><h2>Prepare for a useful reading.</h2></div>
      <div><p>Share your date of birth, available birth time, and place of birth. It also helps to bring two or three clear questions, such as a career decision, relationship concern, marriage question, business choice, or financial planning issue. More accurate birth information can support a more detailed chart interpretation.</p><p>Astrology offers a traditional interpretive perspective, not a guarantee of future events. The goal is to explain the chart clearly and help you consider your choices with awareness.</p></div>
    </div>
  </div>
}
function ContactPage() { return <PageIntro eyebrow="Begin the conversation" title={<>Let’s find the<br /><em>right direction.</em></>}><div className="contact-layout"><div className="contact-copy"><h2>A thoughtful reading starts with a thoughtful question.</h2><p>Share what is on your mind and Astro Avishek Sastri will help you understand the right next step. Consultations are available for career, relationships, marriage, business, education, and personal decisions.</p><div className="contact-details"><div><span>Email</span><a href="mailto:hello@aviseksastri.com">hello@aviseksastri.com</a></div><div><span>Location</span><p>Kolkata · West Bengal</p></div><div><span>Response time</span><p>Within 24 hours</p></div></div></div><form className="contact-form" onSubmit={(event) => event.preventDefault()}><label>Name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@example.com" /></label><label>What would you like to explore?<select defaultValue=""><option value="" disabled>Select a reading</option><option>Birth chart</option><option>Love & partnership</option><option>Career & purpose</option><option>Marriage & Kundli matching</option></select></label><label>Your question<textarea required rows="5" placeholder="Tell us a little about what you would like guidance on" /></label><button className="gold-button" type="submit">Send enquiry <span>↗</span></button></form></div></PageIntro> }
function PageIntro({ eyebrow, title, children }) { return <section className="page-intro section-pad"><div className="page-heading"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1></div>{children}</section> }
function Testimonials() { return <section className="testimonials-section section-pad"><div className="section-grid"><div className="section-label">02 / In their own words</div><div className="testimonial-heading"><p className="eyebrow">Real stories, real shifts</p><h2>It starts with<br /><em>being seen.</em></h2></div></div><div className="testimonial-grid">{testimonials.map((item) => <article className="testimonial-card" key={item.name}><span className="quote-mark">“</span><p>{item.quote}</p><footer><b>{item.name}</b><span>{item.role}</span></footer></article>)}</div></section> }
function CtaBand({ onBook }) { return <section className="cta-band section-pad"><div className="cta-stars">✦　·　✧　·　✦</div><p className="eyebrow">Your next chapter is already unfolding</p><h2>Ready to read<br /><em>between the lines?</em></h2><button className="gold-button" onClick={onBook}>Book your private reading <span>↗</span></button></section> }

const faqItems = [
  { q: 'Who is Astro Avishek Sastri?', a: 'Astro Avishek Sastri is an experienced astrologer offering personalized astrology consultations in Kolkata. With 5 years of experience in astrology, he provides guidance based on individual birth details and traditional astrological principles.' },
  { q: 'How can Astro Avishek Sastri help me with my life problems?', a: 'Astro Avishek Sastri provides personalized astrology guidance for common concerns related to career, marriage, relationships, business, education, family matters, and important life decisions. The consultation focuses on understanding your specific situation through astrological analysis.' },
  { q: 'What information is required for an astrology consultation?', a: 'For a detailed astrology consultation, you generally need to provide your date of birth, exact or available birth time, and place of birth. These details are used to prepare and analyse your birth chart or Kundli. Accurate birth information can be important for detailed chart interpretation and timing-related questions.' },
  { q: 'Can I consult Astro Avishek Sastri for marriage and relationship matters?', a: 'Yes. Marriage and relationship questions are among the common reasons people consult astrologers. Astro Avishek Sastri can provide personalized astrological guidance regarding marriage timing, relationship concerns, compatibility, and other marriage-related questions based on the available birth details.' },
  { q: 'Can an astrologer in Kolkata help with career and job-related questions?', a: 'Astrology consultations can include questions related to career direction, job opportunities, professional changes, business, and career-related challenges. Astro Avishek Sastri can analyse your birth chart and provide an astrological perspective based on your individual circumstances.' },
  { q: 'Does Astro Avishek Sastri provide Kundli analysis?', a: 'Yes. Kundli analysis can be used to understand different aspects of an individual\'s life through their birth chart. Astro Avishek Sastri can provide personalized Kundli-based guidance according to the questions and concerns discussed during the consultation.' },
  { q: 'Can I ask about business and financial matters during an astrology consultation?', a: 'Yes. Business owners and professionals may consult an astrologer regarding business decisions, partnerships, career changes, financial planning, and suitable periods for important professional activities. Astro Avishek Sastri provides an astrological perspective based on the individual\'s birth details.' },
  { q: 'Can astrology help with education and studies?', a: 'Education is another area that people commonly discuss during astrology consultations. Astro Avishek Sastri can analyse relevant astrological factors in a student\'s birth chart and provide guidance related to education, academic direction, higher studies, and other study-related concerns.' },
  { q: 'Can I consult Astro Avishek Sastri online?', a: 'If online consultation is available, clients can discuss their concerns remotely without visiting an astrologer\'s office in Kolkata. Online astrology consultations can be convenient for people living outside Kolkata or in other cities. Please contact Astro Avishek Sastri to confirm the available consultation mode and appointment process.' },
  { q: 'Can I consult Astro Avishek Sastri for marriage Kundli matching?', a: 'Yes. Kundli matching is commonly used by individuals and families who want to explore astrological compatibility before marriage. Astro Avishek Sastri can analyse the available birth details of both individuals and provide a personalized interpretation of their Kundlis.' },
  { q: 'Does astrology provide guaranteed predictions about the future?', a: 'Astrology is generally used as a traditional system for interpreting planetary positions and birth charts. An astrology consultation should not be treated as a guarantee of future events. Astro Avishek Sastri focuses on providing personalized astrological insights that can help clients understand their questions and consider different perspectives.' },
  { q: 'Why choose Astro Avishek Sastri as an astrologer in Kolkata?', a: 'Astro Avishek Sastri has 5 years of experience in astrology and focuses on personalized consultations based on individual concerns and birth details. His approach is intended to make astrological guidance understandable, relevant, and respectful of each client\'s personal circumstances.' },
]

function FaqSection({ location = 'Kolkata' }) {
  const [openIndex, setOpenIndex] = useState(0)
  const localizedFaqItems = faqItems.map((item) => ({ q: item.q.replaceAll('Kolkata', location), a: item.a.replaceAll('Kolkata', location) }))
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

  return <section className="faq-section section-pad"><div className="faq-header"><p className="eyebrow">Frequently asked questions</p><h2>Astrology questions</h2></div><div className="faq-grid"><div className="faq-column">{renderColumn(leftFaq)}</div><div className="faq-column">{renderColumn(rightFaq)}</div></div></section>
}

function BookingModal({ onClose }) { return <div className="modal-backdrop" onClick={onClose}><div className="booking-modal" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={onClose}>×</button><p className="eyebrow">Begin the conversation</p><h2>Let’s find the<br /><em>right reading.</em></h2><p className="modal-copy">Leave your details and Avishek will be in touch within 24 hours.</p><form onSubmit={(event) => { event.preventDefault(); onClose(); }}><label>Name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@example.com" /></label><label>What would you like to explore?<select defaultValue=""><option value="" disabled>Select a reading</option><option>Birth chart</option><option>Love & partnership</option><option>Career & purpose</option></select></label><button className="gold-button" type="submit">Send enquiry <span>↗</span></button></form></div></div> }

export default App


