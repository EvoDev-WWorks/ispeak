import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './ValuesSection.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

/* ══════════════════════════════════════════
   SVG ILLUSTRATIONS — recolored per card
   ══════════════════════════════════════════ */

/* Card 0 — Sabhyata — Justice Scale (white/light pink) */
const IlloSabhyata = () => (
  <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <polygon points="130,18 133,27 142,27 135,33 138,42 130,36 122,42 125,33 118,27 127,27"
      fill="rgba(255,255,255,0.9)" />
    <rect x="127" y="42" width="6" height="98" rx="3" fill="rgba(255,255,255,0.8)" />
    <rect x="100" y="138" width="60" height="8" rx="4" fill="rgba(255,255,255,0.8)" />
    <rect x="110" y="146" width="40" height="6" rx="3" fill="rgba(255,255,255,0.6)" />
    <rect x="76" y="58" width="108" height="5" rx="2.5" fill="rgba(255,255,255,0.85)" />
    <line x1="90" y1="63" x2="72" y2="100" stroke="rgba(255,255,255,0.7)" strokeWidth="2" />
    <line x1="170" y1="63" x2="188" y2="100" stroke="rgba(255,255,255,0.7)" strokeWidth="2" />
    <ellipse cx="72" cy="104" rx="26" ry="8" fill="rgba(255,255,255,0.85)" />
    <path d="M46,104 Q59,116 72,116 Q85,116 98,104" fill="rgba(255,255,255,0.5)" />
    <ellipse cx="188" cy="104" rx="26" ry="8" fill="rgba(255,255,255,0.85)" />
    <path d="M162,104 Q175,116 188,116 Q201,116 214,104" fill="rgba(255,255,255,0.5)" />
  </svg>
);

/* Card 1 — Sanskriti — Lotus + Arch (light green) */
const IlloSanskriti = () => (
  <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <ellipse cx="130" cy="78" rx="14" ry="30" fill="rgba(200,255,180,0.85)" />
    <ellipse cx="130" cy="78" rx="14" ry="30" fill="rgba(200,255,180,0.85)" transform="rotate(60 130 90)" />
    <ellipse cx="130" cy="78" rx="14" ry="30" fill="rgba(180,255,160,0.75)" transform="rotate(120 130 90)" />
    <ellipse cx="130" cy="78" rx="14" ry="30" fill="rgba(200,255,180,0.85)" transform="rotate(180 130 90)" />
    <ellipse cx="130" cy="78" rx="14" ry="30" fill="rgba(180,255,160,0.75)" transform="rotate(240 130 90)" />
    <ellipse cx="130" cy="78" rx="14" ry="30" fill="rgba(200,255,180,0.85)" transform="rotate(300 130 90)" />
    <circle cx="130" cy="90" r="16" fill="rgba(150,255,120,0.5)" />
    <circle cx="130" cy="90" r="9" fill="rgba(240,255,232,0.95)" />
    <rect x="100" y="138" width="60" height="46" rx="0" fill="none" stroke="rgba(200,255,180,0.65)" strokeWidth="3" />
    <path d="M100,138 Q130,110 160,138" fill="none" stroke="rgba(220,255,200,0.85)" strokeWidth="3" />
    <rect x="115" y="158" width="30" height="26" rx="2" fill="rgba(200,255,180,0.2)" />
    <line x1="80" y1="184" x2="180" y2="184" stroke="rgba(200,255,180,0.4)" strokeWidth="2" />
  </svg>
);

/* Card 2 — Samvedana — Two Hands + Heart (light blue) */
const IlloSamvedana = () => (
  <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M130,88 c0-8 12-8 12 0 c0-8 12-8 12 0 c0 8-12 18-12 18 c0,0-12-10-12-18z" fill="#A8C8FF" />
    <ellipse cx="72" cy="115" rx="28" ry="18" fill="rgba(232,240,255,0.85)" />
    <ellipse cx="92" cy="100" rx="8" ry="14" fill="rgba(232,240,255,0.85)" transform="rotate(-20 92 100)" />
    <ellipse cx="104" cy="97" rx="7" ry="13" fill="rgba(220,232,255,0.8)" transform="rotate(-10 104 97)" />
    <ellipse cx="115" cy="98" rx="6" ry="12" fill="rgba(210,228,255,0.75)" transform="rotate(5 115 98)" />
    <ellipse cx="124" cy="102" rx="6" ry="11" fill="rgba(210,228,255,0.75)" transform="rotate(15 124 102)" />
    <ellipse cx="74" cy="100" rx="7" ry="12" fill="rgba(220,232,255,0.8)" transform="rotate(40 74 100)" />
    <rect x="30" y="110" width="50" height="22" rx="10" fill="rgba(200,220,255,0.75)" />
    <ellipse cx="188" cy="115" rx="28" ry="18" fill="rgba(232,240,255,0.85)" />
    <ellipse cx="168" cy="100" rx="8" ry="14" fill="rgba(232,240,255,0.85)" transform="rotate(20 168 100)" />
    <ellipse cx="156" cy="97" rx="7" ry="13" fill="rgba(220,232,255,0.8)" transform="rotate(10 156 97)" />
    <ellipse cx="145" cy="98" rx="6" ry="12" fill="rgba(210,228,255,0.75)" transform="rotate(-5 145 98)" />
    <ellipse cx="136" cy="102" rx="6" ry="11" fill="rgba(210,228,255,0.75)" transform="rotate(-15 136 102)" />
    <ellipse cx="186" cy="100" rx="7" ry="12" fill="rgba(220,232,255,0.8)" transform="rotate(-40 186 100)" />
    <rect x="180" y="110" width="50" height="22" rx="10" fill="rgba(200,220,255,0.75)" />
  </svg>
);

/* Card 3 — Seva — Community figures (warm gold) */
const IlloSeva = () => (
  <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="130" cy="75" r="14" fill="rgba(255,245,180,0.95)" />
    <rect x="118" y="88" width="24" height="36" rx="10" fill="rgba(255,245,180,0.95)" />
    <rect x="90" y="78" width="32" height="10" rx="5" fill="rgba(255,235,150,0.9)" transform="rotate(-30 90 78)" />
    <rect x="138" y="68" width="32" height="10" rx="5" fill="rgba(255,235,150,0.9)" transform="rotate(30 138 68)" />
    <circle cx="130" cy="22" r="9" fill="rgba(255,240,160,0.7)" />
    <rect x="122" y="30" width="16" height="22" rx="7" fill="rgba(255,240,160,0.7)" />
    <circle cx="130" cy="160" r="9" fill="rgba(255,240,160,0.7)" />
    <rect x="122" y="168" width="16" height="22" rx="7" fill="rgba(255,240,160,0.7)" />
    <circle cx="54" cy="98" r="9" fill="rgba(255,240,160,0.7)" />
    <rect x="46" y="106" width="16" height="22" rx="7" fill="rgba(255,240,160,0.7)" />
    <circle cx="206" cy="98" r="9" fill="rgba(255,240,160,0.7)" />
    <rect x="198" y="106" width="16" height="22" rx="7" fill="rgba(255,240,160,0.7)" />
    <line x1="130" y1="62" x2="130" y2="38" stroke="rgba(255,235,150,0.35)" strokeWidth="1.5" strokeDasharray="4 3" />
    <line x1="118" y1="110" x2="70" y2="104" stroke="rgba(255,235,150,0.35)" strokeWidth="1.5" strokeDasharray="4 3" />
    <line x1="142" y1="110" x2="190" y2="104" stroke="rgba(255,235,150,0.35)" strokeWidth="1.5" strokeDasharray="4 3" />
    <line x1="130" y1="124" x2="130" y2="152" stroke="rgba(255,235,150,0.35)" strokeWidth="1.5" strokeDasharray="4 3" />
  </svg>
);

/* ══════════════════════════════════════════
   DATA
   ══════════════════════════════════════════ */

const VALUES = [
  {
    index: 0,
    label: 'ETHICAL CONDUCT',
    headline: 'Sabhyata',
    desc: 'We hold ourselves to the highest ethical standards — in every session, every boundary, and every decision. Integrity is not a policy; it is our practice.',
    link: '/why-ispeak/values',
    Illo: IlloSabhyata,
    bg: 'linear-gradient(135deg, #6B1535 0%, #1A0510 100%)',
    titleColor: '#FFFFFF',
    descColor: 'rgba(255,255,255,0.75)',
    btnBg: '#FFFFFF',
    btnColor: '#6B1535',
  },
  {
    index: 1,
    label: 'CULTURE',
    headline: 'Sanskriti',
    desc: 'We speak your language — literally and emotionally. Our care is rooted in Indian cultural contexts, traditions, and lived experiences that shape who we are.',
    link: '/why-ispeak/values',
    Illo: IlloSanskriti,
    bg: 'linear-gradient(135deg, #1A3D0A 0%, #0D2006 100%)',
    titleColor: '#F0FFE8',
    descColor: 'rgba(240,255,232,0.8)',
    btnBg: '#F0FFE8',
    btnColor: '#1A3D0A',
  },
  {
    index: 2,
    label: 'EMPATHY',
    headline: 'Samvedana',
    desc: 'We listen before we speak. We feel before we advise. Every individual who comes to us is met with deep, genuine empathy that makes healing feel possible.',
    link: '/why-ispeak/values',
    Illo: IlloSamvedana,
    bg: 'linear-gradient(135deg, #0D2B5E 0%, #060D1A 100%)',
    titleColor: '#E8F0FF',
    descColor: 'rgba(232,240,255,0.8)',
    btnBg: '#E8F0FF',
    btnColor: '#0D2B5E',
  },
  {
    index: 3,
    label: 'SERVICE TO SOCIETY',
    headline: 'Seva',
    desc: 'Mental health is not a privilege — it is a right. We serve communities across India, including underserved populations, because care should reach everyone.',
    link: '/why-ispeak/values',
    Illo: IlloSeva,
    bg: 'linear-gradient(135deg, #5C3A0A 0%, #1A1005 100%)',
    titleColor: '#FFF5E0',
    descColor: 'rgba(255,245,224,0.8)',
    btnBg: '#FFF5E0',
    btnColor: '#5C3A0A',
  },
];

/* ══════════════════════════════════════════
   COMPONENT
   ══════════════════════════════════════════ */

export default function ValuesSection() {
  const { ref: headingRef, isVisible } = useScrollReveal(0.1);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const rect = track.getBoundingClientRect();
      const trackTop = -rect.top;
      const trackHeight = rect.height - window.innerHeight;
      const progress = Math.max(0, Math.min(1, trackTop / trackHeight));

      const totalCards = VALUES.length;
      const cardProgress = progress * totalCards;

      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const p = Math.max(0, Math.min(1, cardProgress - i));

        if (p <= 0) {
          card.style.transform = 'translateY(0)';
          card.style.opacity = '1';
        } else if (p < 1) {
          card.style.transform = `translateY(${-(p * 100)}%)`;
          card.style.opacity = String(1 - p * 0.3);
        } else {
          card.style.transform = 'translateY(-100%)';
          card.style.opacity = '0';
        }
      });

      // Update progress dots
      const activeIndex = Math.min(totalCards - 1, Math.floor(cardProgress));
      dotRefs.current.forEach((dot, i) => {
        if (!dot) return;
        dot.style.opacity = i === activeIndex ? '1' : '0.25';
        dot.style.width = i === activeIndex ? '24px' : '8px';
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="values" className={styles.values} aria-labelledby="values-heading">

      {/* ── Heading ── */}
      <div className="container">
        <header
          className={`${styles.header} ${isVisible ? 'reveal visible' : 'reveal'}`}
          ref={headingRef}
        >
          <span className={styles.eyebrow}>Our Values</span>
          <h2 className={styles.headingPair} id="values-heading">
            <span className={styles.headingLine1}>Rooted in culture,</span>
            <span className={styles.headingLine2}>driven by empathy</span>
          </h2>
          <p className={styles.sub}>
            Our four foundational values guide everything — from the therapy room to communities across India.
          </p>
        </header>
      </div>

      {/* ── Scroll Track ── */}
      <div className={styles.scrollTrack} ref={trackRef}>
        <div className={styles.stickyContainer}>

          {/* Cards stacked absolutely */}
          {VALUES.map((v, i) => (
            <div
              key={v.index}
              className={styles.valueCard}
              data-index={v.index}
              ref={(el) => { cardRefs.current[i] = el; }}
              style={{
                background: v.bg,
                zIndex: VALUES.length - i,
              }}
              aria-label={v.headline}
            >
              {/* Left: text */}
              <div className={styles.cardLeft}>
                <span
                  className={styles.cardLabel}
                  style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}
                >
                  {v.label}
                </span>
                <h3 className={styles.cardHeadline} style={{ color: v.titleColor }}>
                  {v.headline}
                </h3>
                <p className={styles.cardDesc} style={{ color: v.descColor }}>
                  {v.desc}
                </p>
                <Link
                  to={v.link}
                  className={styles.cardBtn}
                  style={{ background: v.btnBg, color: v.btnColor }}
                >
                  Learn More »
                </Link>
              </div>

              {/* Right: illustration */}
              <div className={styles.cardRight} aria-hidden="true">
                <v.Illo />
              </div>
            </div>
          ))}

          {/* Progress Dots */}
          <div className={styles.dots} aria-hidden="true">
            {VALUES.map((_, i) => (
              <span
                key={i}
                className={styles.dot}
                ref={(el) => { dotRefs.current[i] = el; }}
                style={{ opacity: i === 0 ? 1 : 0.25, width: i === 0 ? '24px' : '8px' }}
              />
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
