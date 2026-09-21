import { useEffect, useState } from 'react'
import './App.css'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Stories', path: '/stories' },
]

const serviceMenuItems = [
  'Horoscope',
  'Kundali Matching',
  'Get Love Back',
  'Black Magic',
  'Birth Chart',
  'Mangal Dosh',
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

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname)
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const goTo = (nextPath) => {
    navigate(nextPath)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentLabel = navItems.find((item) => item.path === path)?.label || (path === '/services' ? 'Services' : 'Home')

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
              {serviceMenuItems.map((service) => <button key={service} role="menuitem" onClick={() => { setServicesOpen(false); goTo('/services') }}>{service}</button>)}
            </div>
          </div>
          <button className={currentLabel === 'Stories' ? 'active' : ''} onClick={() => goTo('/stories')}>Stories</button>
        </nav>
        <div className="header-actions"><button className="outline-button header-cta" onClick={() => setBookingOpen(true)}><span>Book a reading</span><b>↗</b></button></div>
      </header>
      <main>
        {path === '/about' && <AboutPage goTo={goTo} />}
        {path === '/services' && <ServicesPage onBook={() => setBookingOpen(true)} />}
        {path === '/stories' && <StoriesPage />}
        {path === '/' && <HomePage goTo={goTo} onBook={() => setBookingOpen(true)} />}
      </main>
      <footer className="site-footer"><div className="footer-brand"><span className="wordmark-mark">✧</span><span>Astro Abhay Saha</span></div><span>© 2025 Astro Abhay Saha</span><span>Made for the curious soul</span></footer>
      {bookingOpen && <BookingModal onClose={() => setBookingOpen(false)} />}
    </div>
  )
}

function HomePage({ goTo, onBook }) { return <><section className="hero-section section-pad"><div className="hero-copy reveal-up"><p className="eyebrow"><span className="eyebrow-line" /> Vedic astrology · Modern perspective</p><h1>Find the story<br /><em>in your stars.</em></h1><p className="hero-description">A grounded approach to astrology for the moments when you are ready to understand yourself more deeply and move forward with intention.</p><div className="hero-actions"><button className="gold-button" onClick={onBook}>Begin your reading <span>↗</span></button><button className="text-button" onClick={() => goTo('/about')}>Meet Abhay <span>↓</span></button></div></div><div className="hero-art" aria-label="A celestial night sky with glowing stars"><div className="planet planet-large" /><div className="planet planet-small" /><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="constellation constellation-one"><i /><i /><i /><i /><i /></div><div className="constellation constellation-two"><i /><i /><i /><i /></div><div className="hero-art-caption"><span>01</span><span>the cosmic perspective</span></div></div><div className="scroll-cue">Scroll to explore <span>↓</span></div></section><section className="intro-section section-pad section-grid"><div className="section-label">01 / A different kind of guidance</div><div className="intro-content"><p className="eyebrow">The chart is a mirror</p><h2>You were guided<br />here for a <em>reason.</em></h2><p>Astrology is not about predicting a fixed future. It is an ancient language that helps you see your own patterns, potential, and timing with fresh eyes.</p><button className="line-button" onClick={() => goTo('/about')}>Discover the approach <span>→</span></button></div><div className="portrait-card"><div className="portrait-image" /><div className="portrait-glow" /><div className="portrait-caption"><span>Abhay Saha</span><small>Astrologer & guide</small></div></div></section><section className="services-section section-pad"><div className="center-heading"><p className="eyebrow">What we can explore</p><h2>Make sense of<br /><em>the meaningful.</em></h2></div><div className="services-grid">{serviceCards.map((service) => <article className="service-card" key={service.title}><span className="service-icon">{service.icon}</span><h3>{service.title}</h3><p>{service.text}</p><span className="card-arrow">↗</span></article>)}</div><button className="gold-button centered-button" onClick={() => goTo('/services')}>Explore all readings <span>↗</span></button></section><Testimonials /><CtaBand onBook={onBook} /></> }
function AboutPage({ goTo }) { return <PageIntro eyebrow="The person behind the chart" title={<>A quiet space for<br /><em>big questions.</em></>}><div className="about-layout"><div className="portrait-card portrait-large"><div className="portrait-image" /><div className="portrait-glow" /></div><div className="about-copy"><p>Hi, I’m Abhay. I believe astrology is most powerful when it brings you back to yourself.</p><p>My work blends the depth of Vedic tradition with a warm, practical approach. Every reading is a conversation, not a performance. We look at what is happening, why it may be happening now, and what you can do with the clarity you find.</p><div className="signature">Abhay <span>✦</span></div><button className="line-button" onClick={() => goTo('/services')}>See how we can work together <span>→</span></button></div></div></PageIntro> }
function ServicesPage({ onBook }) { return <PageIntro eyebrow="Readings for your next chapter" title={<>The stars offer<br /><em>perspective.</em></>}><div className="full-services-grid">{serviceCards.map((service, index) => <article className="service-card service-card-large" key={service.title}><span className="service-number">0{index + 1}</span><span className="service-icon">{service.icon}</span><h3>{service.title}</h3><p>{service.text}</p><button className="line-button" onClick={onBook}>Book this reading <span>↗</span></button></article>)}</div></PageIntro> }
function StoriesPage() { return <PageIntro eyebrow="Words from the other side" title={<>Real stories.<br /><em>Real shifts.</em></>}><div className="stories-list">{testimonials.concat(testimonials[0]).map((item, index) => <article className="story-row" key={`${item.name}-${index}`}><span className="story-index">0{index + 1}</span><div><p className="story-quote">“{item.quote}”</p><p className="story-author">{item.name} <span>{item.role}</span></p></div></article>)}</div></PageIntro> }
function PageIntro({ eyebrow, title, children }) { return <section className="page-intro section-pad"><div className="page-heading"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1></div>{children}</section> }
function Testimonials() { return <section className="testimonials-section section-pad"><div className="section-grid"><div className="section-label">02 / In their own words</div><div className="testimonial-heading"><p className="eyebrow">Real stories, real shifts</p><h2>It starts with<br /><em>being seen.</em></h2></div></div><div className="testimonial-grid">{testimonials.map((item) => <article className="testimonial-card" key={item.name}><span className="quote-mark">“</span><p>{item.quote}</p><footer><b>{item.name}</b><span>{item.role}</span></footer></article>)}</div></section> }
function CtaBand({ onBook }) { return <section className="cta-band section-pad"><div className="cta-stars">✦　·　✧　·　✦</div><p className="eyebrow">Your next chapter is already unfolding</p><h2>Ready to read<br /><em>between the lines?</em></h2><button className="gold-button" onClick={onBook}>Book your private reading <span>↗</span></button></section> }
function BookingModal({ onClose }) { return <div className="modal-backdrop" onClick={onClose}><div className="booking-modal" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={onClose}>×</button><p className="eyebrow">Begin the conversation</p><h2>Let’s find the<br /><em>right reading.</em></h2><p className="modal-copy">Leave your details and Abhay will be in touch within 24 hours.</p><form onSubmit={(event) => { event.preventDefault(); onClose(); }}><label>Name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@example.com" /></label><label>What would you like to explore?<select defaultValue=""><option value="" disabled>Select a reading</option><option>Birth chart</option><option>Love & partnership</option><option>Career & purpose</option></select></label><button className="gold-button" type="submit">Send enquiry <span>↗</span></button></form></div></div> }

export default App
