import { Link } from 'react-router-dom';
import { useState, useRef, useEffect, useCallback } from 'react';
import styles from './ServicesSection.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

/* ══════════════════════════════════════════
   ILLUSTRATION COMPONENTS
   200px tall, viewBox 0 0 400 200, flat fills
   ══════════════════════════════════════════ */

/* CARD 1 — Individual Counselling — muted purple-blue #7B7FB5 */
const IlloIndividual = () => (
  <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="400" height="200" fill="#7B7FB5" />
    <ellipse cx="200" cy="172" rx="80" ry="12" fill="#6668A0" />
    <rect x="148" y="130" width="104" height="44" rx="10" fill="#A8ABCC" />
    <rect x="152" y="90" width="96" height="56" rx="14" fill="#A8ABCC" />
    <rect x="138" y="118" width="20" height="36" rx="8" fill="#9497BC" />
    <rect x="242" y="118" width="20" height="36" rx="8" fill="#9497BC" />
    <rect x="158" y="170" width="10" height="18" rx="4" fill="#9497BC" />
    <rect x="232" y="170" width="10" height="18" rx="4" fill="#9497BC" />
    <ellipse cx="200" cy="148" rx="22" ry="16" fill="white" />
    <rect x="185" y="115" width="30" height="38" rx="10" fill="white" />
    <circle cx="200" cy="106" r="16" fill="white" />
    <ellipse cx="200" cy="158" rx="26" ry="10" fill="white" />
    <rect x="222" y="68" width="52" height="34" rx="10" fill="#F5F5FF" />
    <polygon points="226,100 218,112 238,100" fill="#F5F5FF" />
    <path d="M244 79 c0-4 6-4 6 0 c0-4 6-4 6 0 c0 4-6 9-6 9 c0 0-6-5-6-9z" fill="#E8705A" />
    <rect x="100" y="185" width="200" height="3" rx="2" fill="#6668A0" />
  </svg>
);

/* CARD 2 — Couple Counselling — coral #E8705A */
const IlloCouple = () => (
  <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="400" height="200" fill="#E8705A" />
    <rect x="0" y="170" width="400" height="30" fill="#D05A44" />
    <rect x="170" y="130" width="60" height="10" rx="4" fill="#F0A090" />
    <rect x="196" y="140" width="8" height="30" rx="3" fill="#D8806A" />
    <ellipse cx="200" cy="130" rx="34" ry="8" fill="#F0A090" />
    <rect x="178" y="118" width="16" height="14" rx="4" fill="#FFDDD7" />
    <rect x="194" y="122" width="6" height="6" rx="3" fill="#FFDDD7" />
    <rect x="206" y="118" width="16" height="14" rx="4" fill="#FFDDD7" />
    <rect x="200" y="122" width="6" height="6" rx="3" fill="#FFDDD7" />
    <path d="M184 116 Q186 110 184 104" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M190 116 Q192 108 190 102" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M212 116 Q214 110 212 104" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M218 116 Q220 108 218 102" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <rect x="96" y="100" width="36" height="70" rx="14" fill="white" />
    <circle cx="114" cy="88" r="18" fill="white" />
    <rect x="130" y="112" width="40" height="12" rx="6" fill="white" />
    <rect x="268" y="100" width="36" height="70" rx="14" fill="white" />
    <circle cx="286" cy="88" r="18" fill="white" />
    <rect x="230" y="112" width="40" height="12" rx="6" fill="white" />
    <circle cx="200" cy="118" r="4" fill="rgba(255,255,255,0.4)" />
  </svg>
);

/* CARD 3 — Adolescent Counselling — dark teal #2D6B6B */
const IlloAdolescent = () => (
  <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="400" height="200" fill="#2D6B6B" />
    <circle cx="60"  cy="30"  r="2.5" fill="white" opacity="0.7" />
    <circle cx="130" cy="18"  r="2"   fill="white" opacity="0.5" />
    <circle cx="200" cy="28"  r="1.5" fill="white" opacity="0.6" />
    <circle cx="280" cy="20"  r="2.5" fill="white" opacity="0.7" />
    <circle cx="340" cy="40"  r="2"   fill="white" opacity="0.5" />
    <circle cx="90"  cy="60"  r="1.5" fill="white" opacity="0.4" />
    <circle cx="320" cy="55"  r="2"   fill="white" opacity="0.5" />
    <circle cx="360" cy="25"  r="1.5" fill="white" opacity="0.6" />
    <rect x="0" y="168" width="400" height="32" fill="#1E5252" />
    <rect x="280" y="148" width="30" height="24" rx="4" fill="#4A9090" />
    <rect x="276" y="144" width="38" height="8" rx="3" fill="#3A8080" />
    <rect x="293" y="110" width="4" height="38" rx="2" fill="#7DBFBF" />
    <ellipse cx="293" cy="118" rx="18" ry="10" fill="#7DBFBF" />
    <ellipse cx="284" cy="130" rx="14" ry="8" fill="#5DAAAA" transform="rotate(-20 284 130)" />
    <ellipse cx="302" cy="126" rx="14" ry="8" fill="#7DBFBF" transform="rotate(20 302 126)" />
    <ellipse cx="180" cy="160" rx="38" ry="14" fill="white" />
    <rect x="155" y="120" width="50" height="46" rx="18" fill="white" />
    <circle cx="180" cy="108" r="20" fill="white" />
    <rect x="152" y="148" width="56" height="36" rx="6" fill="#4A9090" />
    <rect x="178" y="148" width="4" height="36" fill="#3A8080" />
    <rect x="185" y="156" width="18" height="3" rx="1" fill="rgba(255,255,255,0.4)" />
    <rect x="185" y="163" width="14" height="3" rx="1" fill="rgba(255,255,255,0.4)" />
    <rect x="185" y="170" width="16" height="3" rx="1" fill="rgba(255,255,255,0.4)" />
    <rect x="157" y="156" width="16" height="3" rx="1" fill="rgba(255,255,255,0.4)" />
    <rect x="157" y="163" width="12" height="3" rx="1" fill="rgba(255,255,255,0.4)" />
    <rect x="157" y="170" width="14" height="3" rx="1" fill="rgba(255,255,255,0.4)" />
  </svg>
);

/* CARD 4 — Family Counselling — soft pink #C4607A */
const IlloFamily = () => (
  <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="400" height="200" fill="#C4607A" />
    <rect x="0" y="170" width="400" height="30" fill="#A8405A" />
    <polygon points="120,60 280,60 280,165 120,165" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="4" />
    <polygon points="100,70 200,20 300,70" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="4" />
    <rect x="182" y="128" width="36" height="36" rx="4" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="3" />
    <rect x="132" y="100" width="28" height="24" rx="3" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2.5" />
    <rect x="240" y="100" width="28" height="24" rx="3" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2.5" />
    <circle cx="165" cy="95" r="18" fill="white" />
    <rect x="148" y="112" width="34" height="58" rx="12" fill="white" />
    <circle cx="235" cy="100" r="16" fill="white" />
    <rect x="220" y="115" width="30" height="54" rx="11" fill="white" />
    <circle cx="200" cy="118" r="12" fill="white" />
    <rect x="188" y="129" width="24" height="40" rx="9" fill="white" />
    <rect x="178" y="128" width="18" height="10" rx="5" fill="white" />
    <rect x="204" y="128" width="18" height="10" rx="5" fill="white" />
  </svg>
);

/* ══════════════════════════════════════════
   SERVICES DATA
   ══════════════════════════════════════════ */

const services = [
  {
    id: 'ind',
    tag: 'INDIVIDUAL',
    Illustration: IlloIndividual,
    bgColor: '#7B7FB5',
    title: 'Individual Counselling',
    desc: 'Personalised one-on-one sessions grounded in evidence-based practice. Available online and in-person, in your language.',
    link: '/services#individual-counselling',
    cta: 'Book Individual Session →',
  },
  {
    id: 'cpl',
    tag: 'COUPLES',
    Illustration: IlloCouple,
    bgColor: '#E8705A',
    title: 'Couple Counselling',
    desc: 'Navigate relationship challenges with structured, professional support. Build deeper understanding and lasting bonds.',
    link: '/services#couple-counselling',
    cta: 'Book Couples Session →',
  },
  {
    id: 'adol',
    tag: 'ADOLESCENT',
    Illustration: IlloAdolescent,
    bgColor: '#2D6B6B',
    title: 'Adolescent Counselling',
    desc: 'Specialised support for teens navigating identity, academic pressure, and the complexities of the digital age.',
    link: '/services#adolescent-counselling',
    cta: 'Learn About Teen Support →',
  },
  {
    id: 'fam',
    tag: 'FAMILY',
    Illustration: IlloFamily,
    bgColor: '#C4607A',
    title: 'Family Counselling',
    desc: 'Holistic family therapy addressing systemic patterns, improving communication, and strengthening resilience for every member.',
    link: '/services#family-counselling',
    cta: 'Explore Family Counselling →',
  },
];

const TOTAL = services.length + 1; // 4 service cards + 1 explore tile

/* ══════════════════════════════════════════
   COMPONENT
   ══════════════════════════════════════════ */

export default function ServicesSection() {
  const { ref: headerRef, isVisible } = useScrollReveal();
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const { scrollLeft, scrollWidth, clientWidth } = track;
    setCanPrev(scrollLeft > 8);
    setCanNext(scrollLeft < scrollWidth - clientWidth - 8);

    const cards = Array.from(track.children) as HTMLElement[];
    let nearest = 0;
    let minDist = Infinity;
    cards.forEach((card, i) => {
      const center = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(scrollLeft + clientWidth / 2 - center);
      if (dist < minDist) { minDist = dist; nearest = i; }
    });
    setActiveIndex(nearest);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener('scroll', updateState, { passive: true });
    updateState();
    return () => track.removeEventListener('scroll', updateState);
  }, [updateState]);

  const scroll = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[0] as HTMLElement;
    if (!card) return;
    track.scrollBy({ left: dir * (card.offsetWidth + 20), behavior: 'smooth' });
  };

  return (
    <section id="services" className={styles.services} aria-labelledby="services-heading">
      <div className="container">
        <header
          className={`${styles.header} ${isVisible ? 'reveal visible' : 'reveal'}`}
          ref={headerRef}
        >
          <span className={styles.eyebrow}>What We Offer</span>
          <h2 className={styles.headingPair} id="services-heading">
            <span className={styles.headingLine1}>Care that speaks</span>
            <span className={styles.headingLine2}>your language</span>
          </h2>
          <div className={styles.sub}>
            Evidence-based support rooted in cultural understanding.
          </div>
        </header>
      </div>

      {/* Carousel */}
      <div className={styles.carouselOuter}>
        {/* Prev arrow */}
        <button
          className={`${styles.arrow} ${styles.arrowPrev} ${!canPrev ? styles.arrowDisabled : ''}`}
          onClick={() => scroll(-1)}
          aria-label="Previous service"
          disabled={!canPrev}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>

        {/* Track */}
        <div className={styles.track} ref={trackRef} role="list" aria-label="Services carousel">
          {services.map((service, index) => (
            <article
              key={service.id}
              className={`${styles.card} ${activeIndex === index ? styles.cardActive : styles.cardDim}`}
              role="listitem"
              style={{ '--card-accent': service.bgColor } as React.CSSProperties}
            >
              <div className={styles.cardIllo} aria-hidden="true" style={{ background: service.bgColor }}>
                <service.Illustration />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.cardTag}>{service.tag}</span>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>
                <Link to={service.link} className={styles.cardBtn}>
                  {service.cta}
                </Link>
              </div>
            </article>
          ))}

          {/* Explore All Services tile */}
          <article
            className={`${styles.card} ${styles.cardExplore} ${activeIndex === services.length ? styles.cardActive : styles.cardDim}`}
            role="listitem"
          >
            <div className={styles.exploreTile}>
              <div className={styles.exploreIcon} aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9B1B4B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 8 16 12 12 16"/>
                  <line x1="8" y1="12" x2="16" y2="12"/>
                </svg>
              </div>
              <h3 className={styles.exploreTitle}>Explore All Services</h3>
              <p className={styles.exploreDesc}>See the full range of care we offer — for individuals, couples, and families.</p>
              <Link to="/services" className={styles.exploreBtn}>
                View All Services →
              </Link>
            </div>
          </article>
        </div>

        {/* Next arrow */}
        <button
          className={`${styles.arrow} ${styles.arrowNext} ${!canNext ? styles.arrowDisabled : ''}`}
          onClick={() => scroll(1)}
          aria-label="Next service"
          disabled={!canNext}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>

      {/* Dot indicators */}
      <div className={styles.dots} role="tablist" aria-label="Carousel position">
        {Array.from({ length: TOTAL }).map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${activeIndex === i ? styles.dotActive : ''}`}
            role="tab"
            aria-selected={activeIndex === i}
            aria-label={`Go to card ${i + 1}`}
            onClick={() => {
              const track = trackRef.current;
              if (!track) return;
              const card = track.children[i] as HTMLElement;
              if (card) track.scrollTo({ left: card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2, behavior: 'smooth' });
            }}
          />
        ))}
      </div>
    </section>
  );
}
