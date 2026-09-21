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

function HomePage({ goTo, onBook }) { return <><section className="hero-section section-pad"><div className="hero-copy reveal-up"><p className="eyebrow"><span className="eyebrow-line" /> Vedic astrology · Modern perspective</p><h1>Find the story<br /><em>in your stars.</em></h1><p className="hero-description">A grounded approach to astrology for the moments when you are ready to understand yourself more deeply and move forward with intention.</p><div className="hero-actions"><button className="gold-button" onClick={onBook}>Begin your reading <span>↗</span></button><button className="text-button" onClick={() => goTo('/about')}>Meet Abhay <span>↓</span></button></div></div><div className="hero-art" aria-label="A celestial night sky with glowing stars"><div className="planet planet-large" /><div className="planet planet-small" /><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="constellation constellation-one"><i /><i /><i /><i /><i /></div><div className="constellation constellation-two"><i /><i /><i /><i /></div><div className="hero-art-caption"><span>01</span><span>the cosmic perspective</span></div></div><div className="scroll-cue">Scroll to explore <span>↓</span></div></section><section className="intro-section section-pad section-grid"><div className="section-label">01 / A different kind of guidance</div><div className="intro-content"><p className="eyebrow">The chart is a mirror</p><h2>You were guided<br />here for a <em>reason.</em></h2><p>Astrology is not about predicting a fixed future. It is an ancient language that helps you see your own patterns, potential, and timing with fresh eyes.</p><button className="line-button" onClick={() => goTo('/about')}>Discover the approach <span>→</span></button></div><div className="portrait-card"><div className="portrait-image" /><div className="portrait-glow" /><div className="portrait-caption"><span>Abhay Saha</span><small>Astrologer & guide</small></div></div></section><section className="services-section section-pad"><div className="center-heading"><p className="eyebrow">What we can explore</p><h2>Make sense of<br /><em>the meaningful.</em></h2></div><div className="services-grid">{serviceCards.map((service) => <article className="service-card" key={service.title}><span className="service-icon">{service.icon}</span><h3>{service.title}</h3><p>{service.text}</p><span className="card-arrow">↗</span></article>)}</div><button className="gold-button centered-button" onClick={() => goTo('/services')}>Explore all readings <span>↗</span></button></section><LocalSeoSection onBook={onBook} /><Testimonials /><CtaBand onBook={onBook} /></> }
function LocalSeoSection({ onBook }) { return <section className="local-seo-section section-pad"><div className="local-seo-heading"><p className="eyebrow">Astrology guidance in the city of joy</p><h2>A trusted <em>Kolkata astrologer</em><br />for your next chapter.</h2></div><div className="local-seo-content"><p>Searching for the <strong>best astrologer in Kolkata</strong> can feel personal. Astro Abhay Saha offers thoughtful Vedic astrology consultations for people across Kolkata and West Bengal, with an approach that is experienced, professional, and grounded in real conversations.</p><p>Whether you are looking for a <strong>trusted astrologer in Kolkata</strong> for a birth chart, horoscope guidance, Kundali matching, Mangal Dosh insight, relationship questions, or career direction, each session is designed to give you useful clarity. Online astrology consultation in Kolkata is also available for clients who prefer a private conversation from home.</p><button className="line-button" onClick={onBook}>Speak with Abhay <span>↗</span></button></div><div className="local-seo-faq"><article><h3>Why clients choose Astro Abhay Saha</h3><p>Known for a calm, practical style, Abhay brings depth without making your future feel fixed. Clients searching for an experienced, renowned, or professional astrologer in Kolkata come for a reading that respects both tradition and personal choice.</p></article><article><h3>Astrology services across West Bengal</h3><p>From Kolkata astrologer consultations to online sessions for clients across West Bengal, the practice supports questions around love, family, purpose, timing, and personal growth. Find a thoughtful astrologer near me without losing the warmth of a one-to-one conversation.</p></article></div></section> }
function AboutPage({ goTo }) { return <PageIntro eyebrow="The person behind the chart" title={<>A quiet space for<br /><em>big questions.</em></>}><div className="about-layout"><div className="portrait-card portrait-large"><div className="portrait-image" /><div className="portrait-glow" /></div><div className="about-copy"><p>Hi, I’m Abhay. I believe astrology is most powerful when it brings you back to yourself.</p><p>My work blends the depth of Vedic tradition with a warm, practical approach. Every reading is a conversation, not a performance. We look at what is happening, why it may be happening now, and what you can do with the clarity you find.</p><div className="signature">Abhay <span>✦</span></div><button className="line-button" onClick={() => goTo('/services')}>See how we can work together <span>→</span></button></div></div></PageIntro> }
function ServicesPage({ path, onBook }) { const selectedService = serviceMenuItems.find((service) => path.endsWith(`/${service.slug}`)); return <PageIntro eyebrow={selectedService ? `${selectedService.label} consultation` : 'Readings for your next chapter'} title={selectedService ? <>{selectedService.label}<br /><em>with clarity.</em></> : <>The stars offer<br /><em>perspective.</em></>}><div className="full-services-grid">{serviceCards.map((service, index) => <article className="service-card service-card-large" key={service.title}><span className="service-number">0{index + 1}</span><span className="service-icon">{service.icon}</span><h3>{service.title}</h3><p>{service.text}</p><button className="line-button" onClick={onBook}>Book this reading <span>↗</span></button></article>)}</div></PageIntro> }
function StoriesPage() { return <PageIntro eyebrow="Words from the other side" title={<>Real stories.<br /><em>Real shifts.</em></>}><div className="stories-list">{testimonials.concat(testimonials[0]).map((item, index) => <article className="story-row" key={`${item.name}-${index}`}><span className="story-index">0{index + 1}</span><div><p className="story-quote">“{item.quote}”</p><p className="story-author">{item.name} <span>{item.role}</span></p></div></article>)}</div></PageIntro> }
function PageIntro({ eyebrow, title, children }) { return <section className="page-intro section-pad"><div className="page-heading"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1></div>{children}</section> }
function Testimonials() { return <section className="testimonials-section section-pad"><div className="section-grid"><div className="section-label">02 / In their own words</div><div className="testimonial-heading"><p className="eyebrow">Real stories, real shifts</p><h2>It starts with<br /><em>being seen.</em></h2></div></div><div className="testimonial-grid">{testimonials.map((item) => <article className="testimonial-card" key={item.name}><span className="quote-mark">“</span><p>{item.quote}</p><footer><b>{item.name}</b><span>{item.role}</span></footer></article>)}</div></section> }
function CtaBand({ onBook }) { return <section className="cta-band section-pad"><div className="cta-stars">✦　·　✧　·　✦</div><p className="eyebrow">Your next chapter is already unfolding</p><h2>Ready to read<br /><em>between the lines?</em></h2><button className="gold-button" onClick={onBook}>Book your private reading <span>↗</span></button></section> }
function BookingModal({ onClose }) { return <div className="modal-backdrop" onClick={onClose}><div className="booking-modal" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={onClose}>×</button><p className="eyebrow">Begin the conversation</p><h2>Let’s find the<br /><em>right reading.</em></h2><p className="modal-copy">Leave your details and Abhay will be in touch within 24 hours.</p><form onSubmit={(event) => { event.preventDefault(); onClose(); }}><label>Name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@example.com" /></label><label>What would you like to explore?<select defaultValue=""><option value="" disabled>Select a reading</option><option>Birth chart</option><option>Love & partnership</option><option>Career & purpose</option></select></label><button className="gold-button" type="submit">Send enquiry <span>↗</span></button></form></div></div> }

export default App
