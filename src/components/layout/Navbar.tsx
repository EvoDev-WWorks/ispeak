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

export default function Navbar() {
  const [open, setOpen]       = useState<NavKey>(null);
  const [visible, setVisible] = useState(false);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ── IntersectionObserver: watch hero card ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const pastHero = !entry.isIntersecting && entry.boundingClientRect.top < 0;
        setVisible(pastHero);
        if (!pastHero) setOpen(null); // close any mega panel when going back to hero
      },
      { threshold: 0 }
    );

    const attach = () => {
      const el = document.getElementById('hero-card');
      if (el) { observer.observe(el); return true; }
      return false;
    };

    if (!attach()) {
      const t = setInterval(() => { if (attach()) clearInterval(t); }, 80);
      return () => { observer.disconnect(); clearInterval(t); };
    }
    return () => observer.disconnect();
  }, []);

  /* ── Mega nav hover helpers ── */
  const show = (key: NavKey) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setOpen(key);
  };
  const hide = () => { leaveTimer.current = setTimeout(() => setOpen(null), 120); };
  const keepOpen = () => { if (leaveTimer.current) clearTimeout(leaveTimer.current); };

  /* ── Close on ESC ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          FIXED NAV — hidden above viewport, slides down on cue
          ═══════════════════════════════════════════════════════ */}
      <header
        className={`${styles.nav} ${visible ? styles.navShow : styles.navHide}`}
        aria-hidden={!visible}
      >
        <div className={styles.inner}>

          {/* Logo — colored version */}
          <Link to="/" className={styles.logo}>
            <img src="/images/logo.png" alt="iSpeak" className={styles.logoImg} />
            <span className={styles.wordmark}>iSpeak</span>
          </Link>

          {/* Links */}
          <nav className={styles.links}>

            {/* Services */}
            <div className={`${styles.item} ${open === 'services' ? styles.itemActive : ''}`}
              onMouseEnter={() => show('services')} onMouseLeave={hide}>
              <button className={styles.link}>Services <Chevron /></button>
              <MegaMenu id="services" openId={open} setOpen={setOpen} keepOpen={keepOpen} hide={hide} />
            </div>

            {/* Programs */}
            <div className={`${styles.item} ${open === 'programs' ? styles.itemActive : ''}`}
              onMouseEnter={() => show('programs')} onMouseLeave={hide}>
              <button className={styles.link}>Programs <Chevron /></button>
              <MegaMenu id="programs" openId={open} setOpen={setOpen} keepOpen={keepOpen} hide={hide} />
            </div>

            {/* Why iSpeak */}
            <div className={`${styles.item} ${open === 'why' ? styles.itemActive : ''}`}
              onMouseEnter={() => show('why')} onMouseLeave={hide}>
              <button className={styles.link}>Why iSpeak <Chevron /></button>
              <MegaMenu id="why" openId={open} setOpen={setOpen} keepOpen={keepOpen} hide={hide} />
            </div>

            {/* Resources */}
            <div className={`${styles.item} ${open === 'resources' ? styles.itemActive : ''}`}
              onMouseEnter={() => show('resources')} onMouseLeave={hide}>
              <button className={styles.link}>Resources <Chevron /></button>
              <MegaMenu id="resources" openId={open} setOpen={setOpen} keepOpen={keepOpen} hide={hide} />
            </div>

            {/* About */}
            <div className={`${styles.item} ${open === 'about' ? styles.itemActive : ''}`}
              onMouseEnter={() => show('about')} onMouseLeave={hide}>
              <button className={styles.link}>About <Chevron /></button>
              <MegaMenu id="about" openId={open} setOpen={setOpen} keepOpen={keepOpen} hide={hide} />
            </div>

          </nav>

          {/* Right */}
          <div className={styles.right}>
            <Link to="/contact" className={styles.login}>Log in ↗</Link>
            <Link to="/contact" className={styles.btn}>Book a Session</Link>
          </div>
        </div>
      </header>

      {/* Backdrop to close mega nav */}
      {open && visible && <div className={styles.backdrop} onClick={() => setOpen(null)} />}
    </>
  );
}
