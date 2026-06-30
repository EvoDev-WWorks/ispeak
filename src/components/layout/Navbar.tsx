import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import MegaMenu from './MegaMenu';

type NavKey = 'services' | 'programs' | 'why' | 'resources' | 'about' | null;

const Chevron = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ── Mobile accordion nav data ── */
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
      { to: '/programs/corporate',      label: 'Corporate Wellness Programs' },
      { to: '/programs/school',         label: 'School Wellness Programs' },
      { to: '/programs/sports',         label: "Sports Athletes' Wellness" },
      { to: '/programs/college-ngo',    label: 'College & NGO Partnerships' },
      { to: '/programs/exam-aspirants', label: 'Competitive Exam Aspirants' },
    ],
  },
  {
    key: 'why',
    label: 'Why iSpeak',
    links: [
      { to: '/why-ispeak/why-choose', label: 'Why choose iSpeak' },
      { to: '/why-ispeak/values',     label: 'Our Values & Purpose' },
      { to: '/why-ispeak/impact',     label: 'Our Impact' },
      { to: '/why-ispeak/beliefs',    label: 'Our Believers' },
    ],
  },
  {
    key: 'resources',
    label: 'Resources',
    links: [
      { to: '/resources/press',     label: 'Press' },
      { to: '/resources/blog',      label: 'Blog' },
      { to: '/resources/self-help', label: 'Self Help Resources' },
      { to: '/resources/events',    label: 'Events & Webinars' },
      { to: '/resources/faqs',      label: 'FAQs' },
    ],
  },
  {
    key: 'about',
    label: 'Lifelong Legacy',
    links: [
      { to: '/projects', label: 'Projects' },
      { to: '/careers',  label: 'Careers with iSpeak' },
    ],
  },
];

export default function Navbar() {
  const [open,            setOpen]            = useState<NavKey>(null);
  const [scrolled,        setScrolled]        = useState(false);
  const [mobileMenuOpen,  setMobileMenuOpen]  = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ── Scroll-position: opaque background after 24px ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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

  /* ── Lock body scroll when mobile overlay open ── */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const toggleAccordion = (key: string) =>
    setMobileAccordion(prev => (prev === key ? null : key));

  const closeMenu = () => { setMobileMenuOpen(false); setMobileAccordion(null); };

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          FIXED NAV — hidden above viewport, slides down on cue
          ═══════════════════════════════════════════════════════ */}
      <header
        className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}
      >
        <div className={styles.inner}>

          {/* Logo */}
          <Link to="/" className={styles.logo}>
            <img src="/images/logo.png" alt="iSpeak" className={styles.logoImg} />
            <span className={styles.wordmark}>iSpeak</span>
          </Link>

          {/* Desktop links */}
          <nav className={styles.links}>
            <div className={`${styles.item} ${open === 'services' ? styles.itemActive : ''}`}
              onMouseEnter={() => show('services')} onMouseLeave={hide}>
              <button className={styles.link}>Services <Chevron /></button>
              <MegaMenu id="services" openId={open} setOpen={setOpen} keepOpen={keepOpen} hide={hide} />
            </div>

            <div className={`${styles.item} ${open === 'programs' ? styles.itemActive : ''}`}
              onMouseEnter={() => show('programs')} onMouseLeave={hide}>
              <button className={styles.link}>Programs <Chevron /></button>
              <MegaMenu id="programs" openId={open} setOpen={setOpen} keepOpen={keepOpen} hide={hide} />
            </div>

            <div className={`${styles.item} ${open === 'why' ? styles.itemActive : ''}`}
              onMouseEnter={() => show('why')} onMouseLeave={hide}>
              <button className={styles.link}>Why iSpeak <Chevron /></button>
              <MegaMenu id="why" openId={open} setOpen={setOpen} keepOpen={keepOpen} hide={hide} />
            </div>

            <div className={`${styles.item} ${open === 'resources' ? styles.itemActive : ''}`}
              onMouseEnter={() => show('resources')} onMouseLeave={hide}>
              <button className={styles.link}>Resources <Chevron /></button>
              <MegaMenu id="resources" openId={open} setOpen={setOpen} keepOpen={keepOpen} hide={hide} />
            </div>

            <div className={`${styles.item} ${open === 'about' ? styles.itemActive : ''}`}
              onMouseEnter={() => show('about')} onMouseLeave={hide}>
              <button className={styles.link}>Lifelong Legacy <Chevron /></button>
              <MegaMenu id="about" openId={open} setOpen={setOpen} keepOpen={keepOpen} hide={hide} />
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className={styles.right}>
            <Link to="/contact" className={styles.btn}>Book a Session</Link>
          </div>

          {/* ── Mobile: hamburger (book btn already in hero nav area) ── */}
          <div className={styles.mobileControls}>
            <Link to="/contact" className={styles.mobileCta}>Book a Session</Link>
            <button
              className={styles.hamburger}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop to close desktop mega nav */}
      {open && <div className={styles.backdrop} onClick={() => setOpen(null)} />}

      {/* ═══════════════════════════════════════
          MOBILE FULL-SCREEN OVERLAY (Navbar version)
          ═══════════════════════════════════════ */}
      <div
        className={`${styles.mobileOverlay} ${mobileMenuOpen ? styles.mobileOverlayOpen : ''}`}
        aria-hidden={!mobileMenuOpen}
        role="dialog"
        aria-label="Navigation menu"
      >
        {/* Overlay header */}
        <div className={styles.overlayHeader}>
          <Link to="/" className={styles.overlayLogo} onClick={closeMenu}>
            <img src="/images/logo.png" alt="iSpeak" className={styles.overlayLogoImg} />
            <span className={styles.overlayWordmark}>iSpeak</span>
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
    </>
  );
}
