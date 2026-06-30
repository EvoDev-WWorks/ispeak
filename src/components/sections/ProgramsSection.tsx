import { Link } from 'react-router-dom';
import { useState, useRef, useEffect, useCallback } from 'react';
import styles from './ProgramsSection.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

/* ══════════════════════════════════════════
   ILLUSTRATION COMPONENTS
   ══════════════════════════════════════════ */

/* Corporate Wellness EAP — warm tan #C4A882 */
const IlloCorporate = () => (
  <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="400" height="200" fill="#C4A882" />
    <rect x="80" y="138" width="240" height="14" rx="5" fill="#A08060" />
    <rect x="90" y="150" width="220" height="6" rx="3" fill="rgba(0,0,0,0.1)" />
    <rect x="98"  y="152" width="10" height="30" rx="3" fill="#A08060" />
    <rect x="292" y="152" width="10" height="30" rx="3" fill="#A08060" />
    <rect x="148" y="104" width="104" height="36" rx="6" fill="white" />
    <rect x="152" y="100" width="96" height="8" rx="4" fill="#E8D5BC" />
    <rect x="156" y="62" width="88" height="44" rx="6" fill="white" />
    <rect x="160" y="66" width="80" height="36" rx="4" fill="#E8D5BC" />
    <polyline points="166,96 180,88 194,82 208,76 222,70 232,66" stroke="#C4A882" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M232 60 c0-3 4-3 4 0 c0-3 4-3 4 0 c0 3-4 6-4 6 c0 0-4-3-4-6z" fill="#E8705A" />
    <rect x="264" y="116" width="28" height="24" rx="6" fill="white" />
    <rect x="292" y="122" width="8" height="10" rx="4" fill="#E8D5BC" />
    <path d="M272 114 Q274 108 272 102" stroke="rgba(255,255,255,0.6)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M280 114 Q282 106 280 100" stroke="rgba(255,255,255,0.6)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <rect x="106" y="118" width="24" height="22" rx="4" fill="#A08060" />
    <rect x="103" y="114" width="30" height="7" rx="3" fill="#8A6A48" />
    <rect x="116" y="92" width="4" height="26" rx="2" fill="#7DB8A0" />
    <ellipse cx="116" cy="100" rx="14" ry="8" fill="#7DB8A0" />
    <ellipse cx="108" cy="108" rx="10" ry="6" fill="#5D9880" transform="rotate(-25 108 108)" />
    <ellipse cx="124" cy="106" rx="10" ry="6" fill="#7DB8A0" transform="rotate(20 124 106)" />
  </svg>
);

/* School Wellness — sage green #7DB8A0 */
const IlloSchool = () => (
  <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="400" height="200" fill="#7DB8A0" />
    <rect x="0" y="164" width="400" height="36" fill="#A8D4C0" />
    <circle cx="340" cy="38" r="22" fill="#FFEAA0" />
    <rect x="338" y="8"  width="4" height="12" rx="2" fill="#FFEAA0" />
    <rect x="338" y="58" width="4" height="12" rx="2" fill="#FFEAA0" />
    <rect x="308" y="36" width="12" height="4" rx="2" fill="#FFEAA0" />
    <rect x="358" y="36" width="12" height="4" rx="2" fill="#FFEAA0" />
    <rect x="318" y="18" width="4" height="12" rx="2" fill="#FFEAA0" transform="rotate(45 318 18)" />
    <rect x="354" y="18" width="4" height="12" rx="2" fill="#FFEAA0" transform="rotate(-45 354 18)" />
    <rect x="318" y="50" width="4" height="12" rx="2" fill="#FFEAA0" transform="rotate(-45 318 50)" />
    <rect x="354" y="50" width="4" height="12" rx="2" fill="#FFEAA0" transform="rotate(45 354 50)" />
    <rect x="80" y="80" width="200" height="90" rx="4" fill="white" />
    <polygon points="70,82 280,82 280,60 175,30 70,60" fill="white" />
    <rect x="174" y="18" width="3" height="30" fill="#A8D4C0" />
    <polygon points="177,18 198,25 177,32" fill="#E8705A" />
    <rect x="158" y="116" width="44" height="54" rx="6" fill="#7DB8A0" />
    <rect x="155" y="113" width="50" height="57" rx="6" fill="none" stroke="#5D9880" strokeWidth="3" />
    <rect x="96"  y="100" width="36" height="28" rx="4" fill="#A8D4C0" />
    <rect x="228" y="100" width="36" height="28" rx="4" fill="#A8D4C0" />
    <rect x="96"  y="113" width="36" height="2" fill="white" opacity="0.6" />
    <rect x="113" y="100" width="2"  height="28" fill="white" opacity="0.6" />
    <rect x="228" y="113" width="36" height="2" fill="white" opacity="0.6" />
    <rect x="245" y="100" width="2"  height="28" fill="white" opacity="0.6" />
    <rect x="122" y="60" width="116" height="16" rx="4" fill="#A8D4C0" />
    <circle cx="110" cy="148" r="10" fill="white" />
    <rect x="103" y="157" width="14" height="22" rx="6" fill="white" />
    <circle cx="100" cy="134" r="9" fill="#FF9999" />
    <path d="M100 143 Q98 147 100 150" stroke="#FF9999" strokeWidth="1.5" fill="none" />
    <rect x="108" y="152" width="2" height="8" rx="1" fill="white" />
    <circle cx="160" cy="146" r="10" fill="white" />
    <rect x="153" y="155" width="14" height="24" rx="6" fill="white" />
    <circle cx="215" cy="148" r="10" fill="white" />
    <rect x="208" y="157" width="14" height="22" rx="6" fill="white" />
    <polygon points="130,200 270,200 250,164 150,164" fill="#8CC4AC" />
  </svg>
);

/* Sports Wellness — basketball dunk illustration */
const IlloSports = () => (
  <img
    src="/basketball_dunk_illo.png"
    alt=""
    aria-hidden="true"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      objectPosition: 'center center',
      display: 'block',
      background: '#1e3558',
    }}
  />
);





/* ══════════════════════════════════════════
   PROGRAMS DATA
   ══════════════════════════════════════════ */

const programs = [
  {
    id: 'corp',
    tag: 'CORPORATE',
    Illustration: IlloCorporate,
    bgColor: '#C4A882',
    title: 'Corporate Wellness EAP',
    desc: 'Customised employee assistance programmes with real-time analytics for organisations of any size, anywhere.',
    link: '/programs#corporate-wellness',
    cta: 'Get Corporate Wellness →',
  },
  {
    id: 'sch',
    tag: 'SCHOOLS',
    Illustration: IlloSchool,
    bgColor: '#7DB8A0',
    title: 'School Wellness Programme',
    desc: 'Workshops, awareness campaigns, and counsellor training that transform entire school cultures.',
    link: '/programs#school-wellness',
    cta: 'Enquire for Schools →',
  },
  {
    id: 'spt',
    tag: 'SPORTS',
    Illustration: IlloSports,
    bgColor: '#3E7CB8',
    title: 'Sports Wellness Programme',
    desc: 'Mental performance and well-being support for athletes, coaches, and sports teams.',
    link: '/programs',
    cta: 'Explore Programs →',
  },
];

/* ══════════════════════════════════════════
   COMPONENT
   ══════════════════════════════════════════ */

export default function ProgramsSection() {
  const { ref: headerRef, isVisible } = useScrollReveal();
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const TOTAL = programs.length + 1; // 3 program cards + 1 "Explore More" tile

  const updateState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const { scrollLeft, scrollWidth, clientWidth } = track;
    setCanPrev(scrollLeft > 8);
    setCanNext(scrollLeft < scrollWidth - clientWidth - 8);

    // Compute nearest snapped card index
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
    const cardWidth = card.offsetWidth;
    const gap = 20;
    track.scrollBy({ left: dir * (cardWidth + gap), behavior: 'smooth' });
  };

  return (
    <section id="programs" className={styles.programs} aria-labelledby="programs-heading">
      <div className="container">
        <header
          className={`${styles.header} ${isVisible ? 'reveal visible' : 'reveal'}`}
          ref={headerRef}
        >
          <span className={styles.eyebrow}>Our Programs</span>
          <h2 className={styles.headingPair} id="programs-heading">
            <span className={styles.headingLine1}>Built for institutions</span>
            <span className={styles.headingLine2}>and organisations</span>
          </h2>
          <div className={styles.sub}>
            Structured wellness programmes for schools, workplaces, and teams.
          </div>
        </header>
      </div>

      {/* Carousel */}
      <div className={styles.carouselOuter}>
        {/* Prev arrow */}
        <button
          className={`${styles.arrow} ${styles.arrowPrev} ${!canPrev ? styles.arrowDisabled : ''}`}
          onClick={() => scroll(-1)}
          aria-label="Previous program"
          disabled={!canPrev}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>

        {/* Track */}
        <div className={styles.track} ref={trackRef} role="list" aria-label="Programs carousel">
          {programs.map((program, index) => (
            <article
              key={program.id}
              className={`${styles.card} ${activeIndex === index ? styles.cardActive : styles.cardDim}`}
              role="listitem"
              style={{ '--card-accent': program.bgColor } as React.CSSProperties}
            >
              <div
                className={styles.cardIllo}
                aria-hidden="true"
                style={{ background: program.id === 'spt' ? '#1e3558' : program.bgColor }}
              >
                <program.Illustration />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.cardTag}>{program.tag}</span>
                <h3 className={styles.cardTitle}>{program.title}</h3>
                <p className={styles.cardDesc}>{program.desc}</p>
                <Link to={program.link} className={styles.cardBtn}>
                  {program.cta}
                </Link>
              </div>
            </article>
          ))}

          {/* Explore More tile */}
          <article
            className={`${styles.card} ${styles.cardExplore} ${activeIndex === programs.length ? styles.cardActive : styles.cardDim}`}
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
              <h3 className={styles.exploreTitle}>Explore More Programs</h3>
              <p className={styles.exploreDesc}>See all the ways we support institutions and communities.</p>
              <Link to="/programs" className={styles.exploreBtn}>
                View All Programs →
              </Link>
            </div>
          </article>
        </div>

        {/* Next arrow */}
        <button
          className={`${styles.arrow} ${styles.arrowNext} ${!canNext ? styles.arrowDisabled : ''}`}
          onClick={() => scroll(1)}
          aria-label="Next program"
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
