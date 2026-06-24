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
            <a href="https://wa.me/919711240950" target="_blank" rel="noreferrer" className={styles.heroNavLogin} style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#fff' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat with us
            </a>
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
