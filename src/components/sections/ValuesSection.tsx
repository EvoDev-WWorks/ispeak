import { useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ValuesSection.module.css';

/* ─── SVGs ───────────────────────────────────────── */
const SvgSabhyata = () => (
  <svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg">
    <line x1="100" y1="18" x2="100" y2="162" stroke="rgba(255,255,255,0.8)" strokeWidth="3"/>
    <line x1="55" y1="62" x2="145" y2="62" stroke="rgba(255,255,255,0.8)" strokeWidth="3"/>
    <ellipse cx="62" cy="95" rx="24" ry="11" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.7)" strokeWidth="2"/>
    <line x1="62" y1="84" x2="62" y2="62" stroke="rgba(255,255,255,0.7)" strokeWidth="2"/>
    <ellipse cx="138" cy="108" rx="24" ry="11" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
    <line x1="138" y1="97" x2="138" y2="62" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
    <rect x="86" y="157" width="28" height="7" rx="3" fill="rgba(255,255,255,0.6)"/>
    <polygon points="100,5 105,17 95,17" fill="rgba(255,220,80,0.95)"/>
  </svg>
);

const SvgSanskriti = () => (
  <svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg">
    <line x1="100" y1="20" x2="100" y2="162" stroke="rgba(240,255,232,0.35)" strokeWidth="3"/>
    <ellipse cx="100" cy="162" rx="52" ry="9" fill="rgba(240,255,232,0.15)"/>
    <path d="M100 55 Q132 38 150 55 Q132 78 100 72Z" fill="rgba(240,255,232,0.75)"/>
    <path d="M100 55 Q68 38 50 55 Q68 78 100 72Z" fill="rgba(240,255,232,0.5)"/>
    <path d="M100 88 Q138 68 157 88 Q138 114 100 107Z" fill="rgba(240,255,232,0.65)"/>
    <path d="M100 88 Q62 68 43 88 Q62 114 100 107Z" fill="rgba(240,255,232,0.4)"/>
    <circle cx="100" cy="28" r="9" fill="rgba(240,255,232,0.95)"/>
  </svg>
);

const SvgSamvedana = () => (
  <svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg">
    <path d="M58 88 Q58 56 90 56 Q100 50 100 68 Q100 50 110 56 Q142 56 142 88 Q142 124 100 150 Q58 124 58 88Z" fill="rgba(232,240,255,0.85)"/>
    <circle cx="73" cy="136" r="11" fill="rgba(232,240,255,0.4)"/>
    <rect x="66" y="148" width="17" height="24" rx="6" fill="rgba(232,240,255,0.4)"/>
    <circle cx="127" cy="136" r="11" fill="rgba(232,240,255,0.4)"/>
    <rect x="120" y="148" width="17" height="24" rx="6" fill="rgba(232,240,255,0.4)"/>
    <path d="M73 136 Q100 124 127 136" stroke="rgba(232,240,255,0.5)" strokeWidth="2" fill="none"/>
  </svg>
);

const SvgSeva = () => (
  <svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="42" r="16" fill="rgba(255,245,224,0.9)"/>
    <rect x="89" y="59" width="22" height="34" rx="8" fill="rgba(255,245,224,0.9)"/>
    <circle cx="36" cy="108" r="11" fill="rgba(255,245,224,0.45)"/>
    <rect x="29" y="120" width="16" height="26" rx="6" fill="rgba(255,245,224,0.45)"/>
    <circle cx="164" cy="108" r="11" fill="rgba(255,245,224,0.45)"/>
    <rect x="157" y="120" width="16" height="26" rx="6" fill="rgba(255,245,224,0.45)"/>
    <circle cx="100" cy="132" r="11" fill="rgba(255,245,224,0.45)"/>
    <rect x="93" y="144" width="16" height="26" rx="6" fill="rgba(255,245,224,0.45)"/>
    <line x1="100" y1="93" x2="36" y2="119" stroke="rgba(255,245,224,0.3)" strokeWidth="2" strokeDasharray="4 3"/>
    <line x1="100" y1="93" x2="164" y2="119" stroke="rgba(255,245,224,0.3)" strokeWidth="2" strokeDasharray="4 3"/>
    <line x1="100" y1="93" x2="100" y2="121" stroke="rgba(255,245,224,0.3)" strokeWidth="2" strokeDasharray="4 3"/>
  </svg>
);

/* ─── Card data ───────────────────────────────────── */
const CARDS = [
  { tag: 'ETHICAL CONDUCT', title: 'Sabhyata',  desc: 'We hold ourselves to the highest ethical standards — in every session, every boundary, and every decision. Integrity is not a policy; it is our practice.',  bg: 'linear-gradient(135deg,#6B1535,#1A0510)', btnBg: 'white',    btnColor: '#6B1535', Svg: SvgSabhyata  },
  { tag: 'CULTURE',          title: 'Sanskriti', desc: 'We speak your language — literally and emotionally. Our care is rooted in Indian cultural contexts, traditions, and lived experiences that shape who we are.', bg: 'linear-gradient(135deg,#1A3D0A,#0D2006)', btnBg: '#F0FFE8',  btnColor: '#1A3D0A', Svg: SvgSanskriti },
  { tag: 'EMPATHY',          title: 'Samvedana', desc: 'We listen before we speak. We feel before we advise. Every individual is met with deep, genuine empathy that makes healing feel possible.',                    bg: 'linear-gradient(135deg,#0D2B5E,#060D1A)', btnBg: '#E8F0FF',  btnColor: '#0D2B5E', Svg: SvgSamvedana },
  { tag: 'SERVICE TO SOCIETY', title: 'Seva',   desc: 'Mental health is not a privilege — it is a right. We serve communities across India, including underserved populations, because care should reach everyone.',   bg: 'linear-gradient(135deg,#5C3A0A,#1A1005)', btnBg: '#FFF5E0',  btnColor: '#5C3A0A', Svg: SvgSeva      },
];

/* ─── Stack constants ─────────────────────────────── */
const PEEKS  = [0, 14, 26, 36];     // px peeking below front card per slot
const SCALES = [1, 0.96, 0.92, 0.88];
const N      = CARDS.length;
const DUR    = 420;                  // ms — card exit animation duration

/* ─── Component ───────────────────────────────────── */
export default function ValuesSection() {
  const [active, setActive]     = useState(0);
  const [exiting, setExiting]   = useState(false); // true while animating out
  const touchRef                = useRef({ x: 0, y: 0, t: 0 });
  const navigate                = useNavigate();

  /* Advance to next card */
  const advance = useCallback(() => {
    if (exiting || active >= N - 1) return;
    setExiting(true);
    setTimeout(() => {
      setActive(p => p + 1);
      setExiting(false);
    }, DUR);
  }, [active, exiting]);

  /* Touch swipe — horizontal left OR vertical up triggers advance */
  const onTouchStart = (e: React.TouchEvent) => {
    touchRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY, t: Date.now() };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = touchRef.current.x - e.changedTouches[0].clientX;
    const dy = touchRef.current.y - e.changedTouches[0].clientY;
    const dt = Date.now() - touchRef.current.t;
    if (dt > 600) return; // too slow — probably not a deliberate swipe
    const isSwipeLeft = dx > 44 && dx > Math.abs(dy);
    const isSwipeUp   = dy > 44 && dy > Math.abs(dx);
    if (isSwipeLeft || isSwipeUp) advance();
  };

  const goToValues = () => { navigate('/why-ispeak/values'); window.scrollTo(0, 0); };

  return (
    <section className={styles.section} aria-labelledby="values-heading">

      {/* ── Heading ────────────────────────────────── */}
      <div className={styles.heading}>
        <div className={styles.eyebrow}>
          <span className={styles.line} />
          <span>OUR VALUES</span>
          <span className={styles.line} />
        </div>
        <h2 id="values-heading" className={styles.title}>
          Rooted in culture,<br />
          <em className={styles.italic}>driven by empathy</em>
        </h2>
        <p className={styles.sub}>
          Our four foundational values guide everything — from the therapy room to communities across India.
        </p>
      </div>

      {/* ── Deck area (swipeable) ───────────────────── */}
      <div
        className={styles.deckArea}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        role="region"
        aria-label="Values cards — swipe to advance"
      >
        <div className={styles.deck}>
          {CARDS.map((card, i) => {
            const slot    = i - active;              // relative depth from active
            const isGone   = slot < 0;               // already seen
            const isActive = slot === 0 && exiting;  // currently flying off

            /* Which visual stack slot this card occupies */
            const displaySlot = isActive
              ? 0
              : exiting && slot > 0
                ? Math.max(0, slot - 1)              // cards behind shift forward during anim
                : slot;
            const s = Math.min(Math.max(displaySlot, 0), PEEKS.length - 1);

            let transform: string;
            let opacity: string;
            let zIndex: number;
            let transition: string;

            if (isGone) {
              /* Already dismissed — hidden above screen */
              transform  = 'translateY(-110%)';
              opacity    = '0';
              zIndex     = 0;
              transition = 'none';
            } else if (isActive) {
              /* Animating off — flies straight up */
              transform  = 'translateY(-110%)';
              opacity    = '0';
              zIndex     = N + 5;
              transition = `transform ${DUR}ms cubic-bezier(0.55,0,0.1,1), opacity ${Math.round(DUR * 0.55)}ms ease ${Math.round(DUR * 0.15)}ms`;
            } else {
              /* Sitting in stack, or advancing forward */
              transform  = `translateY(${PEEKS[s]}px) scale(${SCALES[s]})`;
              opacity    = '1';
              zIndex     = N - Math.max(slot, 0);
              /* Apply transition only while something is animating */
              transition = exiting && slot > 0
                ? `transform ${DUR}ms cubic-bezier(0.55,0,0.1,1)`
                : 'none';
            }

            return (
              <div
                key={card.title}
                className={styles.card}
                style={{
                  background: card.bg,
                  ['--btn-bg' as string]:    card.btnBg,
                  ['--btn-color' as string]: card.btnColor,
                  transform,
                  opacity,
                  zIndex,
                  transition,
                }}
              >
                <div className={styles.cardLeft}>
                  <span className={styles.tag}>{card.tag}</span>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDesc}>{card.desc}</p>
                  <button className={styles.cardBtn} onClick={goToValues}>Learn More »</button>
                </div>
                <div className={styles.cardRight} aria-hidden="true">
                  <card.Svg />
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Bottom bar: dots + next button ─────────── */}
        <div className={styles.bottomBar}>
          <div className={styles.dots} aria-hidden="true">
            {CARDS.map((_, i) => (
              <span
                key={i}
                className={styles.dot}
                style={{
                  width:   i === active ? '26px' : '8px',
                  opacity: i === active ? 1 : 0.28,
                  transition: 'width 0.3s ease, opacity 0.3s ease',
                }}
              />
            ))}
          </div>

          {active < N - 1 && (
            <button
              className={styles.nextBtn}
              onClick={advance}
              aria-label={`Next value: ${CARDS[active + 1].title}`}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 12L8 4M4 8L8 4L12 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Next
            </button>
          )}
        </div>
      </div>

    </section>
  );
}
