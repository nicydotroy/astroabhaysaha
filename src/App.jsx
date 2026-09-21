import { useEffect, useState } from 'react'
import './App.css'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Stories', path: '/stories' },
]

const serviceMenuItems = [
  { label: 'Horoscope', slug: 'horoscope' },
  { label: 'Kundali Matching', slug: 'kundali-matching' },
  { label: 'Get Love Back', slug: 'get-love-back' },
  { label: 'Black Magic', slug: 'black-magic' },
  { label: 'Birth Chart', slug: 'birth-chart' },
  { label: 'Mangal Dosh', slug: 'mangal-dosh' },
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
  { name: 'Arjun K.', role: 'Founder', quote: 'Abhay has a rare ability to make the stars feel practical. The career guidance changed the way I made my next decision.' },
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

  const currentLabel = navItems.find((item) => item.path === path)?.label || (path.startsWith('/services') ? 'Services' : 'Home')

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-identity">
          <button className="wordmark" onClick={() => goTo('/')} aria-label="Astro Abhay Saha home"><span className="wordmark-mark"><i>✦</i></span><span>Astro<br /><b>Abhay Saha</b></span></button>
        </div>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.slice(0, 2).map((item) => <button key={item.path} className={currentLabel === item.label ? 'active' : ''} onClick={() => goTo(item.path)}>{item.label}</button>)}
          <div className={`services-menu ${servicesOpen ? 'open' : ''}`} onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className={currentLabel === 'Services' ? 'active services-trigger' : 'services-trigger'} aria-haspopup="true" aria-expanded={servicesOpen} onClick={() => setServicesOpen((open) => !open)}>Services <span className="menu-chevron">⌄</span></button>
            <div className="services-dropdown" role="menu">
              {serviceMenuItems.map((service) => <button key={service.slug} role="menuitem" onClick={() => { setServicesOpen(false); goTo(`/services/${service.slug}`) }}>{service.label}</button>)}
            </div>
          </div>
          <button className={currentLabel === 'Stories' ? 'active' : ''} onClick={() => goTo('/stories')}>Stories</button>
        </nav>
        <div className="header-actions"><button className="outline-button header-cta" onClick={() => setBookingOpen(true)}><span>Book a reading</span><b>↗</b></button><button className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`} aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen((open) => !open)}><i /><i /><i /></button></div>
      </header>
      <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`} aria-label="Mobile navigation">
        {navItems.slice(0, 2).map((item) => <button key={item.path} className={currentLabel === item.label ? 'active' : ''} onClick={() => goTo(item.path)}>{item.label}</button>)}
        <button className={`mobile-services-trigger ${currentLabel === 'Services' ? 'active' : ''}`} aria-expanded={servicesOpen} onClick={() => setServicesOpen((open) => !open)}>Services <span className="menu-chevron">⌄</span></button>
        <div className={`mobile-services-list ${servicesOpen ? 'open' : ''}`}>{serviceMenuItems.map((service) => <button key={service.slug} onClick={() => goTo(`/services/${service.slug}`)}>{service.label}</button>)}</div>
        <button className={currentLabel === 'Stories' ? 'active' : ''} onClick={() => goTo('/stories')}>Stories</button>
        <button className="mobile-book-button" onClick={() => { setMobileMenuOpen(false); setBookingOpen(true) }}>Book a reading <span>↗</span></button>
      </nav>
      <main>
        {path === '/about' && <AboutPage goTo={goTo} />}
        {path.startsWith('/services') && <ServicesPage path={path} onBook={() => setBookingOpen(true)} />}
        {path === '/stories' && <StoriesPage />}
        {path === '/' && <HomePage goTo={goTo} onBook={() => setBookingOpen(true)} />}
      </main>
      <footer className="site-footer">
        <div className="footer-invitation"><p className="eyebrow">The conversation can begin anywhere</p><h2>Come back to<br /><em>your own sky.</em></h2><button className="gold-button" onClick={() => setBookingOpen(true)}>Book a private reading <span>↗</span></button></div>
        <div className="footer-grid">
          <div className="footer-about"><div className="footer-brand"><span className="wordmark-mark">✧</span><span>Astro Abhay Saha</span></div><p>A grounded approach to Vedic astrology for the curious, the searching, and the ready.</p></div>
          <div className="footer-column"><span className="footer-heading">Explore</span><button onClick={() => goTo('/')}>Home</button><button onClick={() => goTo('/about')}>About Abhay</button><button onClick={() => goTo('/services')}>Services</button><button onClick={() => goTo('/stories')}>Stories</button></div>
          <div className="footer-column"><span className="footer-heading">Readings</span>{serviceMenuItems.slice(0, 4).map((service) => <button key={service.slug} onClick={() => goTo(`/services/${service.slug}`)}>{service.label}</button>)}</div>
          <div className="footer-column footer-contact"><span className="footer-heading">Say hello</span><a href="mailto:hello@astroabhaysaha.com">hello@astroabhaysaha.com</a><span>New Delhi · India</span><span className="footer-socials"><a href="#instagram">Instagram</a><a href="#whatsapp">WhatsApp</a></span></div>
        </div>
        <div className="footer-bottom"><span>© 2025 Astro Abhay Saha</span><span>Made for the curious soul</span><span>Privacy · Terms</span></div>
      </footer>
      {bookingOpen && <BookingModal onClose={() => setBookingOpen(false)} />}
    </div>
  )
}

function HomePage({ goTo, onBook }) { return <><section className="hero-section section-pad"><div className="hero-copy reveal-up"><p className="eyebrow"><span className="eyebrow-line" /> Vedic astrology · Modern perspective</p><h1>Find the story<br /><em>in your stars.</em></h1><p className="hero-description">A grounded approach to astrology for the moments when you are ready to understand yourself more deeply and move forward with intention.</p><div className="hero-actions"><button className="gold-button" onClick={onBook}>Begin your reading <span>↗</span></button><button className="text-button" onClick={() => goTo('/about')}>Meet Abhay <span>↓</span></button></div></div><div className="hero-art" aria-label="A celestial night sky with glowing stars"><div className="planet planet-large" /><div className="planet planet-small" /><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="constellation constellation-one"><i /><i /><i /><i /><i /></div><div className="constellation constellation-two"><i /><i /><i /><i /></div><div className="hero-art-caption"><span>01</span><span>the cosmic perspective</span></div></div><div className="scroll-cue">Scroll to explore <span>↓</span></div></section><LocalSeoSection onBook={onBook} /><section className="services-section section-pad"><div className="center-heading"><p className="eyebrow">Our astrology services</p><h2>Services<br /><em>we provide.</em></h2></div><div className="services-grid services-grid-complete">{homepageServices.map((service) => <article className="service-card" key={service.slug} onClick={() => goTo(`/services/${service.slug}`)} role="link" tabIndex="0"><span className="service-icon">{service.icon}</span><h3>{service.title}</h3><p>{service.text}</p><span className="card-arrow">↗</span></article>)}</div><button className="gold-button centered-button" onClick={() => goTo('/services')}>Explore all services <span>↗</span></button></section><WhyChooseUs /><Testimonials /><CtaBand onBook={onBook} /></> }

function WhyChooseUs() { return <section className="why-choose-section section-pad"><div className="why-choose-heading"><p className="eyebrow">A clearer way forward</p><h2>Why choose<br /><em>Astro Abhay Saha?</em></h2></div><div className="why-choose-grid"><article><span>01</span><h3>Personal, never generic</h3><p>Every consultation begins with your questions, your chart, and the context of your life.</p></article><article><span>02</span><h3>Traditional knowledge, practical language</h3><p>Ancient Vedic astrology is translated into clear guidance you can actually use.</p></article><article><span>03</span><h3>Private and judgment-free</h3><p>A calm space to talk openly about relationships, purpose, family, and the decisions ahead.</p></article><article><span>04</span><h3>For Kolkata and beyond</h3><p>Meet online or from anywhere in West Bengal with the same thoughtful one-to-one attention.</p></article></div></section> }
function LocalSeoSection({ onBook }) { return <section className="local-seo-section section-pad"><div className="local-seo-heading"><p className="eyebrow">Astrology guidance in the city of joy</p><h2><em>Best Astrologer in Kolkata</em><br />for your next chapter.</h2></div><div className="local-seo-main"><div className="local-seo-image" role="img" aria-label="Astro Abhay Saha astrologer photo placeholder"><span><b>Astrologer image slot</b><br />Add your photo at<br /><strong>/public/astrologer-abhay-saha.jpg</strong></span></div><div className="local-seo-content"><p>Finding the right astrologer can help you understand your birth chart, planetary influences, and important phases of life with greater clarity. If you are looking for the <strong>best astrologer in Kolkata</strong>, choose an astrology professional who takes time to understand your concerns and provides a personalized interpretation based on your birth details. Whether you need guidance about marriage, relationships, career, business, finances, or personal decisions, a detailed astrology consultation can provide a structured perspective.</p><p>An experienced <strong>astrologer in Kolkata</strong> can analyze your date, time, and place of birth to prepare and interpret your Kundli. Vedic astrology considers planetary positions, houses, zodiac signs, and other astrological factors to understand different areas of life. A consultation should focus on your individual chart rather than providing generic predictions.</p><button className="line-button" onClick={onBook}>Speak with Abhay <span>↗</span></button></div></div><div className="local-seo-faq"><article><h3>Online Astrology Consultation</h3><p>You do not always need to visit an astrologer's office for guidance. An <strong>online astrologer in Kolkata</strong> can provide consultations through phone calls, video consultations, or other online communication methods. Online sessions can be convenient for people with busy schedules or those living outside central Kolkata.</p><p>If you have searched for an <strong>astrologer near me</strong>, you can consider both local and online consultation options based on your requirements. A <strong>Kolkata astrologer</strong> offering online services can also connect with clients from different parts of the city and beyond.</p></article><article><h3>Personalized Astrology Guidance in Kolkata</h3><p>Many people search for a <strong>famous astrologer in Kolkata</strong> or a <strong>top astrologer in Kolkata</strong> when they want personalized guidance for important life questions. Similarly, those looking for a <strong>renowned astrologer in Kolkata</strong> often want someone with knowledge of traditional astrology and experience in interpreting different types of Kundli.</p><p>A <strong>professional astrologer in Kolkata</strong> can offer consultations for a range of concerns, including marriage compatibility, love and relationships, career growth, business decisions, financial planning, family matters, and future trends. The purpose of an astrology consultation is to help you understand the astrological factors connected with your questions and make decisions with greater awareness.</p></article></div></section> }
function AboutPage({ goTo }) { return <PageIntro eyebrow="The person behind the chart" title={<>A quiet space for<br /><em>big questions.</em></>}><div className="about-layout"><div className="portrait-card portrait-large"><div className="portrait-image" /><div className="portrait-glow" /></div><div className="about-copy"><p>Hi, I’m Abhay. I believe astrology is most powerful when it brings you back to yourself.</p><p>My work blends the depth of Vedic tradition with a warm, practical approach. Every reading is a conversation, not a performance. We look at what is happening, why it may be happening now, and what you can do with the clarity you find.</p><div className="signature">Abhay <span>✦</span></div><button className="line-button" onClick={() => goTo('/services')}>See how we can work together <span>→</span></button></div></div></PageIntro> }
function ServicesPage({ path, onBook }) { const selectedService = serviceMenuItems.find((service) => path.endsWith(`/${service.slug}`)); return <PageIntro eyebrow={selectedService ? `${selectedService.label} consultation` : 'Readings for your next chapter'} title={selectedService ? <>{selectedService.label}<br /><em>with clarity.</em></> : <>The stars offer<br /><em>perspective.</em></>}><div className="full-services-grid">{serviceCards.map((service, index) => <article className="service-card service-card-large" key={service.title}><span className="service-number">0{index + 1}</span><span className="service-icon">{service.icon}</span><h3>{service.title}</h3><p>{service.text}</p><button className="line-button" onClick={onBook}>Book this reading <span>↗</span></button></article>)}</div></PageIntro> }
function StoriesPage() { return <PageIntro eyebrow="Words from the other side" title={<>Real stories.<br /><em>Real shifts.</em></>}><div className="stories-list">{testimonials.concat(testimonials[0]).map((item, index) => <article className="story-row" key={`${item.name}-${index}`}><span className="story-index">0{index + 1}</span><div><p className="story-quote">“{item.quote}”</p><p className="story-author">{item.name} <span>{item.role}</span></p></div></article>)}</div></PageIntro> }
function PageIntro({ eyebrow, title, children }) { return <section className="page-intro section-pad"><div className="page-heading"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1></div>{children}</section> }
function Testimonials() { return <section className="testimonials-section section-pad"><div className="section-grid"><div className="section-label">02 / In their own words</div><div className="testimonial-heading"><p className="eyebrow">Real stories, real shifts</p><h2>It starts with<br /><em>being seen.</em></h2></div></div><div className="testimonial-grid">{testimonials.map((item) => <article className="testimonial-card" key={item.name}><span className="quote-mark">“</span><p>{item.quote}</p><footer><b>{item.name}</b><span>{item.role}</span></footer></article>)}</div></section> }
function CtaBand({ onBook }) { return <section className="cta-band section-pad"><div className="cta-stars">✦　·　✧　·　✦</div><p className="eyebrow">Your next chapter is already unfolding</p><h2>Ready to read<br /><em>between the lines?</em></h2><button className="gold-button" onClick={onBook}>Book your private reading <span>↗</span></button></section> }
function BookingModal({ onClose }) { return <div className="modal-backdrop" onClick={onClose}><div className="booking-modal" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={onClose}>×</button><p className="eyebrow">Begin the conversation</p><h2>Let’s find the<br /><em>right reading.</em></h2><p className="modal-copy">Leave your details and Abhay will be in touch within 24 hours.</p><form onSubmit={(event) => { event.preventDefault(); onClose(); }}><label>Name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@example.com" /></label><label>What would you like to explore?<select defaultValue=""><option value="" disabled>Select a reading</option><option>Birth chart</option><option>Love & partnership</option><option>Career & purpose</option></select></label><button className="gold-button" type="submit">Send enquiry <span>↗</span></button></form></div></div> }

export default App
