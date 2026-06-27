import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';
import MegaMenu from '../layout/MegaMenu';

type NavKey = 'services' | 'programs' | 'why' | 'resources' | 'about' | null;

const Chevron = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const heroImages = [
  { src: '/images/hero-1.jpeg', alt: 'iSpeak therapy session' },
  { src: '/images/hero-2.jpeg', alt: 'iSpeak counselling support' },
  { src: '/images/hero-3.jpeg', alt: 'iSpeak wellness journey' },
];

function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.photoWrap}>
      {heroImages.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className={`${styles.photo} ${i === active ? styles.photoActive : ''}`}
        />
      ))}
    </div>
  );
}

/* ── Mobile slideshow — separate from desktop, image-first on mobile ── */
const mobileSlides = [
  { src: '/images/hero-3.jpeg', alt: 'iSpeak therapy session', mobilePos: '60% top' },
  { src: '/images/hero-1.jpeg', alt: 'iSpeak counselling support', mobilePos: 'center 20%' },
  { src: '/images/hero-2.jpeg', alt: 'iSpeak team wellness', mobilePos: 'center top' },
];

function MobileHeroSlideshow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % mobileSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [paused]);

  const handleTap = () => setPaused(p => !p);

  return (
    <div className={styles.mobileHeroImage} onTouchStart={handleTap}>
      {mobileSlides.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={`${styles.mobileSlide} ${i === active ? styles.mobileSlideActive : ''}`}
          style={{ objectPosition: slide.mobilePos }}
        />
      ))}
      <div className={styles.mobileDots}>
        {mobileSlides.map((_, i) => (
          <button
            key={i}
            className={`${styles.mobileDot} ${i === active ? styles.mobileDotActive : ''}`}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}


const mobileNavItems = [
  {
    key: 'services',
    label: 'Services',
    links: [
      { to: '/services/individual',  label: 'Individual Counselling' },
      { to: '/services/couple',      label: 'Couple Counselling' },
      { to: '/services/adolescent',  label: 'Adolescent Counselling' },
      { to: '/services/family',      label: 'Family Counselling' },
      { to: '/programs/corporate',   label: 'Corporate Wellness' },
    ],
  },
  {
    key: 'programs',
    label: 'Programs',
    links: [
      { to: '/programs/corporate', label: 'Corporate Wellness Programs' },
      { to: '/programs/school',    label: 'School Wellness Programs' },
      { to: '/programs/sports',    label: "Sports Athletes' Wellness" },
    ],
  },
  {
    key: 'why',
    label: 'Why iSpeak',
    links: [
      { to: '/why-ispeak/why-choose', label: 'Why choose iSpeak' },
      { to: '/why-ispeak/values',     label: 'Our Values & Purpose' },
      { to: '/why-ispeak/impact',     label: 'Our Impact' },
      { to: '/why-ispeak/beliefs',    label: 'Our Beliefs' },
    ],
  },
  {
    key: 'resources',
    label: 'Resources',
    links: [
      { to: '/resources/blog',      label: 'Blog' },
      { to: '/resources/self-help', label: 'Self Help Resources' },
      { to: '/resources/events',    label: 'Events & Webinars' },
      { to: '/resources/faqs',      label: 'FAQs' },
    ],
  },
  {
    key: 'about',
    label: 'About',
    links: [
      { to: '/about',   label: 'About us' },
      { to: '/careers', label: 'Careers' },
      { to: '/press',   label: 'Press' },
      { to: '/contact', label: 'Contact us' },
    ],
  },
];

export default function Hero() {
  const [open,            setOpen]            = useState<NavKey>(null);
  const [mobileMenuOpen,  setMobileMenuOpen]  = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ── Desktop mega-menu hover helpers ── */
  const show     = (key: NavKey) => { if (leaveTimer.current) clearTimeout(leaveTimer.current); setOpen(key); };
  const hide     = () => { leaveTimer.current = setTimeout(() => setOpen(null), 120); };
  const keepOpen = () => { if (leaveTimer.current) clearTimeout(leaveTimer.current); };

  /* ── ESC closes both menus ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(null); setMobileMenuOpen(false); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  /* ── Lock body scroll when mobile overlay is open ── */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const toggleAccordion = (key: string) =>
    setMobileAccordion(prev => (prev === key ? null : key));

  const closeMenu = () => { setMobileMenuOpen(false); setMobileAccordion(null); };

  return (
    <section className={styles.hero}>
      <div id="hero-card" className={styles.heroCard}>

        {/* ═══ IN-HERO NAV ═══ */}
        <nav className={styles.heroNav} aria-label="Hero navigation">

          {/* Logo */}
          <Link to="/" className={styles.heroNavLogo}>
            <img src="/images/logo.png" alt="iSpeak" className={styles.heroNavLogoImg} />
            <span className={styles.heroNavWordmark}>iSpeak</span>
          </Link>

          {/* Desktop links */}
          <div className={styles.heroNavLinks}>
            <div className={styles.heroNavItem} onMouseEnter={() => show('services')} onMouseLeave={hide}>
              <button className={styles.heroNavLink}>Services <Chevron /></button>
              <MegaMenu id="services" openId={open} setOpen={setOpen} keepOpen={keepOpen} hide={hide} />
            </div>
            <div className={styles.heroNavItem} onMouseEnter={() => show('programs')} onMouseLeave={hide}>
              <button className={styles.heroNavLink}>Programs <Chevron /></button>
              <MegaMenu id="programs" openId={open} setOpen={setOpen} keepOpen={keepOpen} hide={hide} />
            </div>
            <div className={styles.heroNavItem} onMouseEnter={() => show('why')} onMouseLeave={hide}>
              <button className={styles.heroNavLink}>Why iSpeak <Chevron /></button>
              <MegaMenu id="why" openId={open} setOpen={setOpen} keepOpen={keepOpen} hide={hide} />
            </div>
            <div className={styles.heroNavItem} onMouseEnter={() => show('resources')} onMouseLeave={hide}>
              <button className={styles.heroNavLink}>Resources <Chevron /></button>
              <MegaMenu id="resources" openId={open} setOpen={setOpen} keepOpen={keepOpen} hide={hide} />
            </div>
            <div className={styles.heroNavItem} onMouseEnter={() => show('about')} onMouseLeave={hide}>
              <button className={styles.heroNavLink}>About <Chevron /></button>
              <MegaMenu id="about" openId={open} setOpen={setOpen} keepOpen={keepOpen} hide={hide} />
            </div>
          </div>

          {/* Desktop CTA */}
          <div className={styles.heroNavRight}>
            <Link to="/contact" className={styles.heroNavBtn}>Book a Session</Link>
          </div>

          {/* ── Mobile: book btn + hamburger ── */}
          <div className={styles.mobileControls}>
            <Link to="/contact" className={styles.mobileNavBtn}>Book a Session</Link>
            <button
              className={styles.hamburger}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </nav>

        {/* ═══ MOBILE FULL-SCREEN OVERLAY ═══ */}
        <div
          className={`${styles.mobileOverlay} ${mobileMenuOpen ? styles.mobileOverlayOpen : ''}`}
          aria-hidden={!mobileMenuOpen}
          role="dialog"
          aria-label="Navigation menu"
        >
          {/* Overlay header */}
          <div className={styles.overlayHeader}>
            <Link to="/" className={styles.heroNavLogo} onClick={closeMenu}>
              <img src="/images/logo.png" alt="iSpeak" className={styles.heroNavLogoImg} />
              <span className={styles.heroNavWordmark}>iSpeak</span>
            </Link>
            <button className={styles.overlayClose} onClick={closeMenu} aria-label="Close navigation menu">
              ✕
            </button>
          </div>

          {/* Accordion items */}
          <nav className={styles.overlayNav} aria-label="Mobile navigation">
            {mobileNavItems.map(item => (
              <div key={item.key} className={styles.overlayItem}>
                <button
                  className={styles.overlayItemBtn}
                  onClick={() => toggleAccordion(item.key)}
                  aria-expanded={mobileAccordion === item.key}
                >
                  <span>{item.label}</span>
                  <span className={`${styles.overlayChevron} ${mobileAccordion === item.key ? styles.overlayChevronOpen : ''}`}>
                    ›
                  </span>
                </button>
                <div className={`${styles.overlaySubLinks} ${mobileAccordion === item.key ? styles.overlaySubLinksOpen : ''}`}>
                  {item.links.map(link => (
                    <Link key={link.to + link.label} to={link.to} className={styles.overlaySubLink} onClick={closeMenu}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* Overlay footer */}
          <div className={styles.overlayFooter}>
            <a
              href="https://wa.me/919999999999"
              className={styles.overlayWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>💬</span> Chat with us on WhatsApp
            </a>
            <Link to="/contact" className={styles.overlayBookBtn} onClick={closeMenu}>
              Book a Session
            </Link>
          </div>
        </div>

        {/* ═══ HERO CONTENT ═══ */}
        <div className={styles.inner}>

          {/* Left — text */}
          <div className={styles.left}>
            <h1 className={styles.h1}>
              <span className={styles.h1Line1}>World-Class Mental Health Care</span>
              <span className={styles.h1Line2}>rooted in who you are</span>
            </h1>

            <p className={styles.sub}>
              iSpeak brings evidence-based counselling, coaching, and wellness to individuals, families, and organisations — across India and around the world. In your language. In your culture. On your terms.
            </p>

            <div className={styles.ctaRow}>
              <Link to="/contact" className={styles.btnPrimary}>Book a Session</Link>
              <Link to="/why-ispeak/impact" className={styles.btnTour}>
                Explore iSpeak
                <span className={styles.btnArrowCircle}>→</span>
              </Link>
            </div>

            <div className={styles.statPillRow}>
              <div className={styles.statPill}>
                <span className={styles.statPillNumber}>50,000+</span>
                <span className={styles.statPillLabel}>Individuals</span>
              </div>
              <div className={styles.statPill}>
                <span className={styles.statPillNumber}>10+</span>
                <span className={styles.statPillLabel}>Countries</span>
              </div>
              <div className={styles.statPill}>
                <span className={styles.statPillNumber}>11+</span>
                <span className={styles.statPillLabel}>Universities</span>
              </div>
            </div>
          </div>

          {/* Mobile-only slideshow — photo slideshow below text on ≤768px */}
          <MobileHeroSlideshow />

          {/* Right — photo fills flush */}
          <div className={styles.right}>
            <HeroSlideshow />
          </div>

        </div>
      </div>
      <div className={styles.waveDivider} aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#8B1A3C"/>
        </svg>
      </div>
    </section>
  );
}
