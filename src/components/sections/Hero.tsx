import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

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

/* ── Mobile slideshow ── */
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

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div id="hero-card" className={styles.heroCard}>

        {/* ═══ HERO CONTENT ═══ */}
        <div className={styles.inner}>

          {/* Left — text */}
          <div className={styles.left}>
            <h1 className={styles.h1}>
              <span className={styles.h1Line1}>World-Class Mental Health Care</span>
              <span className={styles.h1Line2}>rooted in who you are</span>
            </h1>

            <p className={styles.sub}>
              iSpeak brings evidence-based counselling, coaching, and wellness to individuals, families, and organisations, across India and around the world. In your language. In your culture. On your terms.
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

          {/* Mobile-only slideshow */}
          <MobileHeroSlideshow />

          {/* Right — photo fills flush */}
          <div className={styles.right}>
            <HeroSlideshow />
          </div>

        </div>
      </div>
    </section>
  );
}
