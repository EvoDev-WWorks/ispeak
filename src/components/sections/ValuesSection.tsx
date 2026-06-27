import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './ValuesSection.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

/* ══════════════════════════════════════════
   CARD ILLUSTRATIONS — white/light on dark bg
   viewBox 0 0 260 200
   ══════════════════════════════════════════ */

/* Tab 1 — Sabhyata — Justice Scale */
const IlloSabhyata = () => (
  <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* star above */}
    <polygon points="130,18 133,27 142,27 135,33 138,42 130,36 122,42 125,33 118,27 127,27"
      fill="rgba(255,255,255,0.9)" />
    {/* center pole */}
    <rect x="127" y="42" width="6" height="100" rx="3" fill="rgba(255,255,255,0.8)" />
    {/* base stand */}
    <rect x="100" y="140" width="60" height="8" rx="4" fill="rgba(255,255,255,0.8)" />
    <rect x="110" y="148" width="40" height="6" rx="3" fill="rgba(255,255,255,0.6)" />
    {/* center beam */}
    <rect x="76" y="58" width="108" height="5" rx="2.5" fill="rgba(255,255,255,0.85)" />
    {/* left string */}
    <line x1="90" y1="63" x2="72" y2="100" stroke="rgba(255,255,255,0.7)" strokeWidth="2" />
    {/* right string */}
    <line x1="170" y1="63" x2="188" y2="100" stroke="rgba(255,255,255,0.7)" strokeWidth="2" />
    {/* left pan */}
    <ellipse cx="72" cy="104" rx="26" ry="8" fill="rgba(255,255,255,0.85)" />
    <path d="M46,104 Q59,116 72,116 Q85,116 98,104" fill="rgba(255,255,255,0.5)" />
    {/* right pan */}
    <ellipse cx="188" cy="104" rx="26" ry="8" fill="rgba(255,255,255,0.85)" />
    <path d="M162,104 Q175,116 188,116 Q201,116 214,104" fill="rgba(255,255,255,0.5)" />
  </svg>
);

/* Tab 2 — Sanskriti — Lotus + Arch */
const IlloSanskriti = () => (
  <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* lotus petals — 6 around center */}
    <ellipse cx="130" cy="78" rx="14" ry="30" fill="rgba(255,255,255,0.85)" />
    <ellipse cx="130" cy="78" rx="14" ry="30" fill="rgba(255,255,255,0.85)"
      transform="rotate(60 130 90)" />
    <ellipse cx="130" cy="78" rx="14" ry="30" fill="rgba(255,255,255,0.75)"
      transform="rotate(120 130 90)" />
    <ellipse cx="130" cy="78" rx="14" ry="30" fill="rgba(255,255,255,0.85)"
      transform="rotate(180 130 90)" />
    <ellipse cx="130" cy="78" rx="14" ry="30" fill="rgba(255,255,255,0.75)"
      transform="rotate(240 130 90)" />
    <ellipse cx="130" cy="78" rx="14" ry="30" fill="rgba(255,255,255,0.85)"
      transform="rotate(300 130 90)" />
    {/* center circle */}
    <circle cx="130" cy="90" r="16" fill="rgba(255,180,200,0.6)" />
    <circle cx="130" cy="90" r="9" fill="rgba(255,255,255,0.9)" />
    {/* arch / temple doorway */}
    <rect x="100" y="138" width="60" height="46" rx="0" fill="none"
      stroke="rgba(255,255,255,0.6)" strokeWidth="3" />
    <path d="M100,138 Q130,110 160,138" fill="none"
      stroke="rgba(255,255,255,0.8)" strokeWidth="3" />
    {/* door opening */}
    <rect x="115" y="158" width="30" height="26" rx="2" fill="rgba(255,255,255,0.2)" />
    {/* ground line */}
    <line x1="80" y1="184" x2="180" y2="184" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
  </svg>
);

/* Tab 3 — Samvedana — Two Hands + Heart */
const IlloSamvedana = () => (
  <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* heart between hands */}
    <path d="M130,88 c0-8 12-8 12 0 c0-8 12-8 12 0 c0 8-12 18-12 18 c0,0-12-10-12-18z"
      fill="#FFB4C8" />
    {/* left hand — reaching right */}
    <ellipse cx="72" cy="115" rx="28" ry="18" fill="rgba(255,255,255,0.85)" />
    {/* left fingers */}
    <ellipse cx="92" cy="100" rx="8" ry="14" fill="rgba(255,255,255,0.85)" transform="rotate(-20 92 100)" />
    <ellipse cx="104" cy="97" rx="7" ry="13" fill="rgba(255,255,255,0.8)" transform="rotate(-10 104 97)" />
    <ellipse cx="115" cy="98" rx="6" ry="12" fill="rgba(255,255,255,0.75)" transform="rotate(5 115 98)" />
    <ellipse cx="124" cy="102" rx="6" ry="11" fill="rgba(255,255,255,0.75)" transform="rotate(15 124 102)" />
    {/* left thumb */}
    <ellipse cx="74" cy="100" rx="7" ry="12" fill="rgba(255,255,255,0.8)" transform="rotate(40 74 100)" />
    {/* left arm */}
    <rect x="30" y="110" width="50" height="22" rx="10" fill="rgba(255,255,255,0.75)" />

    {/* right hand — reaching left */}
    <ellipse cx="188" cy="115" rx="28" ry="18" fill="rgba(255,255,255,0.85)" />
    {/* right fingers */}
    <ellipse cx="168" cy="100" rx="8" ry="14" fill="rgba(255,255,255,0.85)" transform="rotate(20 168 100)" />
    <ellipse cx="156" cy="97" rx="7" ry="13" fill="rgba(255,255,255,0.8)" transform="rotate(10 156 97)" />
    <ellipse cx="145" cy="98" rx="6" ry="12" fill="rgba(255,255,255,0.75)" transform="rotate(-5 145 98)" />
    <ellipse cx="136" cy="102" rx="6" ry="11" fill="rgba(255,255,255,0.75)" transform="rotate(-15 136 102)" />
    {/* right thumb */}
    <ellipse cx="186" cy="100" rx="7" ry="12" fill="rgba(255,255,255,0.8)" transform="rotate(-40 186 100)" />
    {/* right arm */}
    <rect x="180" y="110" width="50" height="22" rx="10" fill="rgba(255,255,255,0.75)" />
  </svg>
);

/* Tab 4 — Seva — Central figure + 4 surrounding */
const IlloSeva = () => (
  <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* center figure — arms outstretched up */}
    <circle cx="130" cy="75" r="14" fill="rgba(255,255,255,0.9)" />
    <rect x="118" y="88" width="24" height="36" rx="10" fill="rgba(255,255,255,0.9)" />
    {/* arms up */}
    <rect x="90" y="78" width="32" height="10" rx="5" fill="rgba(255,255,255,0.85)"
      transform="rotate(-30 90 78)" />
    <rect x="138" y="68" width="32" height="10" rx="5" fill="rgba(255,255,255,0.85)"
      transform="rotate(30 138 68)" />

    {/* surrounding figure — top */}
    <circle cx="130" cy="22" r="9" fill="rgba(255,255,255,0.65)" />
    <rect x="122" y="30" width="16" height="22" rx="7" fill="rgba(255,255,255,0.65)" />

    {/* surrounding figure — bottom */}
    <circle cx="130" cy="160" r="9" fill="rgba(255,255,255,0.65)" />
    <rect x="122" y="168" width="16" height="22" rx="7" fill="rgba(255,255,255,0.65)" />

    {/* surrounding figure — left */}
    <circle cx="54" cy="98" r="9" fill="rgba(255,255,255,0.65)" />
    <rect x="46" y="106" width="16" height="22" rx="7" fill="rgba(255,255,255,0.65)" />

    {/* surrounding figure — right */}
    <circle cx="206" cy="98" r="9" fill="rgba(255,255,255,0.65)" />
    <rect x="198" y="106" width="16" height="22" rx="7" fill="rgba(255,255,255,0.65)" />

    {/* connecting lines from center to outer figures */}
    <line x1="130" y1="62" x2="130" y2="38" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="4 3" />
    <line x1="118" y1="110" x2="70" y2="104" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="4 3" />
    <line x1="142" y1="110" x2="190" y2="104" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="4 3" />
    <line x1="130" y1="124" x2="130" y2="152" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="4 3" />
  </svg>
);

/* ══════════════════════════════════════════
   VALUE DATA
   ══════════════════════════════════════════ */

const values = [
  {
    id: 0,
    tab: 'Sabhyata',
    label: 'ETHICAL CONDUCT',
    headline: 'Sabhyata',
    desc: 'We hold ourselves to the highest ethical standards — in every session, every boundary, and every decision. Integrity is not a policy; it is our practice.',
    link: '/why-ispeak/values',
    Illo: IlloSabhyata,
  },
  {
    id: 1,
    tab: 'Sanskriti',
    label: 'CULTURE',
    headline: 'Sanskriti',
    desc: 'We speak your language — literally and emotionally. Our care is rooted in Indian cultural contexts, traditions, and lived experiences that shape who we are.',
    link: '/why-ispeak/values',
    Illo: IlloSanskriti,
  },
  {
    id: 2,
    tab: 'Samvedana',
    label: 'EMPATHY',
    headline: 'Samvedana',
    desc: 'We listen before we speak. We feel before we advise. Every individual who comes to us is met with deep, genuine empathy that makes healing feel possible.',
    link: '/why-ispeak/values',
    Illo: IlloSamvedana,
  },
  {
    id: 3,
    tab: 'Seva',
    label: 'SERVICE TO SOCIETY',
    headline: 'Seva',
    desc: 'Mental health is not a privilege — it is a right. We serve communities across India, including underserved populations, because care should reach everyone.',
    link: '/why-ispeak/values',
    Illo: IlloSeva,
  },
];

/* ══════════════════════════════════════════
   COMPONENT
   ══════════════════════════════════════════ */

export default function ValuesSection() {
  const { ref, isVisible } = useScrollReveal(0.15);
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  const goTo = (index: number) => {
    if (index === active || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(index);
      setAnimating(false);
    }, 150);
  };

  const goNext = () => goTo((active + 1) % values.length);
  const goPrev = () => goTo((active - 1 + values.length) % values.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  const v = values[active];

  return (
    <section id="values" className={styles.values} aria-labelledby="values-heading">
      <div className="container" ref={ref}>

        {/* ── Heading Block ── */}
        <header className={`${styles.header} ${isVisible ? 'reveal visible' : 'reveal'}`}>
          <span className={styles.eyebrow}>Our Values</span>
          <h2 className={styles.headingPair} id="values-heading">
            <span className={styles.headingLine1}>Rooted in culture,</span>
            <span className={styles.headingLine2}>driven by empathy</span>
          </h2>
          <p className={styles.sub}>
            Our four foundational values guide everything — from the therapy room to communities across India.
          </p>
        </header>

        {/* ── Desktop Tab Buttons ── */}
        <div className={styles.tabs} role="tablist" aria-label="Values">
          {values.map((v) => (
            <button
              key={v.id}
              role="tab"
              aria-selected={active === v.id}
              className={`${styles.tab} ${active === v.id ? styles.tabActive : ''}`}
              onClick={() => goTo(v.id)}
            >
              {v.tab}
            </button>
          ))}
        </div>

        {/* ── Mobile Dot Indicators ── */}
        <div className={styles.dots} aria-hidden="true">
          {values.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${active === i ? styles.dotActive : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to ${values[i].tab}`}
            />
          ))}
        </div>

        {/* ── Stacked Card Stack ── */}
        <div
          className={styles.stack}
          ref={cardRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Ghost card — furthest back */}
          <div className={`${styles.ghostCard} ${styles.ghostCard1}`} aria-hidden="true" />
          {/* Ghost card — middle */}
          <div className={`${styles.ghostCard} ${styles.ghostCard2}`} aria-hidden="true" />

          {/* Main card */}
          <div
            className={`${styles.mainCard} ${animating ? styles.cardHide : styles.cardShow}`}
            role="tabpanel"
            aria-label={v.headline}
          >
            {/* Left: text content */}
            <div className={styles.cardLeft}>
              <span className={styles.cardLabel}>{v.label}</span>
              <h3 className={styles.cardHeadline}>{v.headline}</h3>
              <p className={styles.cardDesc}>{v.desc}</p>
              <Link to={v.link} className={styles.cardBtn}>Learn More »</Link>
            </div>

            {/* Right: illustration */}
            <div className={styles.cardRight} aria-hidden="true">
              <v.Illo />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
