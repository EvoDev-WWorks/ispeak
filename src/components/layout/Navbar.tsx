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
            <a href="https://wa.me/919711240950" target="_blank" rel="noreferrer" className={styles.login} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat with us
            </a>
            <Link to="/contact" className={styles.btn}>Book a Session</Link>
          </div>
        </div>
      </header>

      {/* Backdrop to close mega nav */}
      {open && visible && <div className={styles.backdrop} onClick={() => setOpen(null)} />}
    </>
  );
}
