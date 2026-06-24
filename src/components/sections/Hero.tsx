import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';
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



export default function Hero() {
  const { ref, isVisible } = useScrollReveal(0.01);
  const [open, setOpen] = useState<NavKey>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = (key: NavKey) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setOpen(key);
  };
  const hide = () => { leaveTimer.current = setTimeout(() => setOpen(null), 120); };
  const keepOpen = () => { if (leaveTimer.current) clearTimeout(leaveTimer.current); };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section className={styles.hero}>
      <div id="hero-card" className={styles.heroCard}>

        {/* ═══ IN-HERO NAV — scrolls with card ═══ */}
        <nav className={styles.heroNav} aria-label="Hero navigation">
          <Link to="/" className={styles.heroNavLogo}>
            <img src="/images/logo.png" alt="iSpeak" className={styles.heroNavLogoImg} />
            <span className={styles.heroNavWordmark}>iSpeak</span>
          </Link>

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

          <div className={styles.heroNavRight}>
            <Link to="/contact" className={styles.heroNavLogin}>Log in ↗</Link>
            <Link to="/contact" className={styles.heroNavBtn}>Book a Session</Link>
          </div>
        </nav>

        {/* ═══ HERO CONTENT ═══ */}
        <div className={styles.inner}>

          {/* Left */}
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

            <div className={styles.trustAvatars}>
              <div className={styles.trustAvatarsStack}>
                <div className={styles.trustAvatar} style={{background:'rgba(255,255,255,0.18)'}}>A</div>
                <div className={styles.trustAvatar} style={{background:'rgba(255,255,255,0.12)'}}>R</div>
                <div className={styles.trustAvatar} style={{background:'rgba(255,255,255,0.16)'}}>G</div>
                <div className={styles.trustAvatar} style={{background:'rgba(255,255,255,0.10)'}}>M</div>
              </div>
              <div className={styles.trustTextColumn}>
                <p className={styles.trustAvatarsText}>
                  Trusted by <strong>50,000+</strong> individuals across 10+ countries
                </p>
                <p className={styles.trustSubText}>
                  Featured in Indian Express · Trusted by 11+ Universities · Est. Gurugram, 2020
                </p>
              </div>
            </div>
          </div>

          {/* Right — photo slideshow */}
          <div className={styles.right} ref={ref}>
            <HeroSlideshow />

            <div className={`${styles.statFloat} ${styles.statFloatA} ${isVisible ? styles.visible : ''}`}>
              <span className={styles.statIcon}>🧠</span>
              <div>
                <div className={styles.statNumber}>9 in 10</div>
                <div className={styles.statLabel}>clients report<br/>improvement</div>
              </div>
            </div>

            <div className={`${styles.statFloat} ${styles.statFloatB} ${isVisible ? styles.visible : ''}`}>
              <span className={styles.statIcon}>⏱️</span>
              <div>
                <div className={styles.statNumber}>48 hrs</div>
                <div className={styles.statLabel}>to your first<br/>session</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
