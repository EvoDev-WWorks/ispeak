import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ValuesSection.module.css';

/* ─── SVGs ─────────────────────────────── */
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

/* ─── Card data ─────────────────────────── */
const CARDS = [
  {
    tag: 'ETHICAL CONDUCT',
    title: 'Sabhyata',
    desc: 'We hold ourselves to the highest ethical standards — in every session, every boundary, and every decision. Integrity is not a policy; it is our practice.',
    bg: 'linear-gradient(135deg,#6B1535,#1A0510)',
    btnBg: 'white',
    btnColor: '#6B1535',
    Svg: SvgSabhyata,
  },
  {
    tag: 'CULTURE',
    title: 'Sanskriti',
    desc: 'We speak your language — literally and emotionally. Our care is rooted in Indian cultural contexts, traditions, and lived experiences that shape who we are.',
    bg: 'linear-gradient(135deg,#1A3D0A,#0D2006)',
    btnBg: '#F0FFE8',
    btnColor: '#1A3D0A',
    Svg: SvgSanskriti,
  },
  {
    tag: 'EMPATHY',
    title: 'Samvedana',
    desc: 'We listen before we speak. We feel before we advise. Every individual is met with deep, genuine empathy that makes healing feel possible.',
    bg: 'linear-gradient(135deg,#0D2B5E,#060D1A)',
    btnBg: '#E8F0FF',
    btnColor: '#0D2B5E',
    Svg: SvgSamvedana,
  },
  {
    tag: 'SERVICE TO SOCIETY',
    title: 'Seva',
    desc: 'Mental health is not a privilege — it is a right. We serve communities across India, including underserved populations, because care should reach everyone.',
    bg: 'linear-gradient(135deg,#5C3A0A,#1A1005)',
    btnBg: '#FFF5E0',
    btnColor: '#5C3A0A',
    Svg: SvgSeva,
  },
];

/* ─── Scroll physics constants ───────────── */
const PEEKS  = [0, 14, 26, 36];   // px each slot peeks below the card ahead
const SCALES = [1, 0.96, 0.92, 0.88]; // scale of each depth slot
const N      = CARDS.length;

/* ─── Component ─────────────────────────── */
export default function ValuesSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs  = useRef<(HTMLSpanElement | null)[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = cardRefs.current.filter(Boolean) as HTMLElement[];
    const dots  = dotRefs.current.filter(Boolean)  as HTMLElement[];
    if (cards.length === 0) return;

    /* Set initial stack positions — no animation, just snap */
    function initStack() {
      cards.forEach((card, i) => {
        card.style.zIndex    = String(N - i);
        card.style.opacity   = '1';
        card.style.transform = `translateY(${PEEKS[i]}px) scale(${SCALES[i]})`;
      });
      setDot(0);
    }

    function setDot(idx: number) {
      dots.forEach((d, i) => {
        if (i === idx) {
          d.style.width   = '26px';
          d.style.opacity = '1';
        } else {
          d.style.width   = '8px';
          d.style.opacity = '0.25';
        }
      });
    }

    function render() {
      if (!track) return;
      const rect     = track.getBoundingClientRect();
      const scrolled = -rect.top;
      const total    = rect.height - window.innerHeight;
      if (total <= 0) return;

      /* progress: 0→N, one unit per card */
      const progress  = Math.max(0, Math.min(N, (scrolled / total) * N));
      const frontIdx  = Math.min(N - 1, Math.floor(progress));
      const frac      = progress - Math.floor(progress); // 0→1 within current card

      setDot(frontIdx);

      cards.forEach((card, i) => {
        /* How far this card has exited (0=not started, 1=fully gone) */
        const exit = Math.max(0, Math.min(1, progress - i));

        /* Boost z-index while a card is in the middle of flying off */
        card.style.zIndex = String(
          N - i + (exit > 0 && exit < 1 ? 10 : 0)
        );

        /* CASE 1 — fully gone */
        if (exit >= 1) {
          card.style.transform = 'translateY(-110%)';
          card.style.opacity   = '0';
          return;
        }

        /* CASE 2 — currently flying off the top */
        if (exit > 0) {
          const ty = -(exit * 110); // percentage of card height
          const op = exit > 0.7 ? 1 - (exit - 0.7) / 0.3 : 1;
          card.style.transform = `translateY(${ty}%)`;
          card.style.opacity   = String(Math.max(0, op));
          return;
        }

        /* CASE 3 — sitting in the stack, waiting its turn.
           If the card directly in front is currently exiting,
           interpolate this card forward to fill the gap. */
        const slot     = Math.max(0, i - Math.floor(progress));
        const nextSlot = Math.max(0, slot - 1);
        const advancing = (i === frontIdx + 1); // card directly behind current front

        const peekNow  = PEEKS [Math.min(slot,     PEEKS.length  - 1)];
        const peekNext = PEEKS [Math.min(nextSlot,  PEEKS.length  - 1)];
        const scNow    = SCALES[Math.min(slot,     SCALES.length - 1)];
        const scNext   = SCALES[Math.min(nextSlot,  SCALES.length - 1)];

        const t    = advancing ? frac : 0;
        const peek = peekNow + (peekNext - peekNow) * t;
        const sc   = scNow   + (scNext   - scNow)   * t;

        card.style.transform = `translateY(${peek}px) scale(${sc})`;
        card.style.opacity   = '1';
      });
    }

    initStack();
    window.addEventListener('scroll', render, { passive: true });
    window.addEventListener('resize', () => { initStack(); render(); }, { passive: true });
    render();

    return () => {
      window.removeEventListener('scroll', render);
    };
  }, []);

  const goToValues = () => {
    navigate('/why-ispeak/values');
    window.scrollTo(0, 0);
  };

  return (
    <section id="values-section" className={styles.valuesSection} aria-labelledby="values-heading">

      {/* ── Heading ── */}
      <div className={styles.vsHeading}>
        <div className={styles.vsEyebrow}>
          <span className={styles.vsLine}></span>
          <span>OUR VALUES</span>
          <span className={styles.vsLine}></span>
        </div>
        <h2 id="values-heading">
          Rooted in culture,<br/>
          <em>driven by empathy</em>
        </h2>
        <p>Our four foundational values guide everything — from the therapy room to communities across India.</p>
      </div>

      {/* ── 350vh scroll track ── */}
      <div className={styles.vsTrack} ref={trackRef}>
        <div className={styles.vsPin}>

          {/* ── Card deck ── */}
          <div className={styles.vsDeck}>
            {CARDS.map((card, i) => (
              <div
                key={i}
                className={styles.vsCard}
                data-i={i}
                ref={(el) => { cardRefs.current[i] = el; }}
                style={{
                  background: card.bg,
                  ['--btn-bg' as string]: card.btnBg,
                  ['--btn-color' as string]: card.btnColor,
                }}
              >
                <div className={styles.vsLeft}>
                  <span className={styles.vsTag}>{card.tag}</span>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  <button onClick={goToValues}>Learn More »</button>
                </div>
                <div className={styles.vsRight}>
                  <card.Svg />
                </div>
              </div>
            ))}
          </div>

          {/* ── Progress dots ── */}
          <div className={styles.vsDots}>
            {CARDS.map((_, i) => (
              <span
                key={i}
                className={styles.vd}
                ref={(el) => { dotRefs.current[i] = el; }}
                style={{ width: i === 0 ? '26px' : '8px', opacity: i === 0 ? 1 : 0.25 }}
              />
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
