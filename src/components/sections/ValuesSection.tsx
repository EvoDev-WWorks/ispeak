import { useEffect, useRef } from 'react';
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
    <line x1="100" y1="93" x2="36"  y2="119" stroke="rgba(255,245,224,0.3)" strokeWidth="2" strokeDasharray="4 3"/>
    <line x1="100" y1="93" x2="164" y2="119" stroke="rgba(255,245,224,0.3)" strokeWidth="2" strokeDasharray="4 3"/>
    <line x1="100" y1="93" x2="100" y2="121" stroke="rgba(255,245,224,0.3)" strokeWidth="2" strokeDasharray="4 3"/>
  </svg>
);

/* ─── Card data ───────────────────────────────────── */
const CARDS = [
  { tag: 'ETHICAL CONDUCT',    title: 'Sabhyata',  desc: 'We hold ourselves to the highest ethical standards, in every session, every boundary, and every decision. Integrity is not a policy; it is our practice.',  bg: 'linear-gradient(135deg,#6B1535,#1A0510)', btnBg: 'white',    btnColor: '#6B1535', accentColor: '#8B1A42', italicColor: '#C4466A', italicLabel: 'Sabhyata',  Svg: SvgSabhyata  },
  { tag: 'CULTURE',            title: 'Sanskriti', desc: 'We speak your language, literally and emotionally. Our care is rooted in Indian cultural contexts, traditions, and lived experiences that shape who we are.', bg: 'linear-gradient(135deg,#1A3D0A,#0D2006)', btnBg: '#F0FFE8',  btnColor: '#1A3D0A', accentColor: '#2A5E10', italicColor: '#3D7A20', italicLabel: 'Sanskriti', Svg: SvgSanskriti },
  { tag: 'EMPATHY',            title: 'Samvedana', desc: 'We listen before we speak. We feel before we advise. Every individual is met with deep, genuine empathy that makes healing feel possible.',                    bg: 'linear-gradient(135deg,#0D2B5E,#060D1A)', btnBg: '#E8F0FF',  btnColor: '#0D2B5E', accentColor: '#1A4A8A', italicColor: '#2A5FAD', italicLabel: 'Samvedana', Svg: SvgSamvedana },
  { tag: 'SERVICE TO SOCIETY', title: 'Seva',      desc: 'Mental health is not a privilege, it is a right. We serve communities across India, including underserved populations, because care should reach everyone.',   bg: 'linear-gradient(135deg,#5C3A0A,#1A1005)', btnBg: '#FFF5E0',  btnColor: '#5C3A0A', accentColor: '#7A4D0E', italicColor: '#A06820', italicLabel: 'Seva',      Svg: SvgSeva      },
];


const PEEKS  = [0, 14, 26, 36];
const SCALES = [1, 0.96, 0.92, 0.88];
const N      = CARDS.length;

export default function ValuesSection() {
  const trackRef   = useRef<HTMLDivElement>(null);
  const cardRefs   = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs    = useRef<(HTMLSpanElement | null)[]>([]);
  const italicRef  = useRef<HTMLElement>(null);       // dynamic italic headline
  const navigate   = useNavigate();

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = cardRefs.current.filter(Boolean) as HTMLElement[];
    const dots  = dotRefs.current.filter(Boolean)  as HTMLElement[];
    if (!cards.length) return;

    function setDot(idx: number) {
      dots.forEach((d, i) => {
        d.style.width   = i === idx ? '26px' : '8px';
        d.style.opacity = i === idx ? '1'    : '0.28';
      });
    }

    function init() {
      cards.forEach((card, i) => {
        card.style.transition = 'none';
        card.style.zIndex     = String(N - i);
        card.style.opacity    = '1';
        card.style.transform  = `translateY(${PEEKS[i]}px) scale(${SCALES[i]})`;
      });
      setDot(0);
    }

    function render() {
      if (!track) return;
      const rect     = track.getBoundingClientRect();
      const scrolled = -rect.top;
      const total    = rect.height - window.innerHeight;
      if (total <= 0) return;

      const progress = Math.max(0, Math.min(N - 1, (scrolled / total) * (N - 1)));
      const frontIdx = Math.min(N - 1, Math.floor(progress));
      const frac     = progress - Math.floor(progress);

      setDot(frontIdx);

      /* Step 4 — update italic headline text + colour on card change */
      const italicEl = italicRef.current;
      if (italicEl) {
        const label = CARDS[frontIdx].italicLabel;
        const color = CARDS[frontIdx].italicColor;
        /* Only update DOM if value changed — avoids unnecessary repaints */
        if (italicEl.textContent !== `driven by ${label}`) {
          italicEl.style.transition = 'opacity 0.25s ease, color 0.25s ease';
          italicEl.style.opacity = '0';
          setTimeout(() => {
            italicEl.textContent = `driven by ${label}`;
            italicEl.style.color = color;
            italicEl.style.opacity = '1';
          }, 150);
        }
      }

      cards.forEach((card, i) => {
        const exit = Math.max(0, Math.min(1, progress - i));

        card.style.zIndex = String(N - i + (exit > 0 && exit < 1 ? 10 : 0));

        if (exit >= 1) {
          card.style.transform = 'translateY(-110%)';
          card.style.opacity   = '0';
          return;
        }

        if (exit > 0) {
          card.style.transform = `translateY(${-(exit * 110)}%)`;
          card.style.opacity   = String(exit > 0.65 ? 1 - (exit - 0.65) / 0.35 : 1);
          return;
        }

        const slot     = Math.max(0, i - Math.floor(progress));
        const nextSlot = Math.max(0, slot - 1);
        const moving   = (i === frontIdx + 1);

        const s0 = Math.min(slot,     PEEKS.length - 1);
        const s1 = Math.min(nextSlot, PEEKS.length - 1);
        const t  = moving ? frac : 0;

        const peek  = PEEKS[s0]  + (PEEKS[s1]  - PEEKS[s0])  * t;
        const scale = SCALES[s0] + (SCALES[s1] - SCALES[s0]) * t;

        card.style.transform = `translateY(${peek}px) scale(${scale})`;
        card.style.opacity   = '1';
      });
    }

    /* ──────────────────────────────────────────────────────────
     * MOBILE PATH — scroll-locked card reveal.
     *
     * Layout: section is normal flow height (no sticky track).
     * Interaction: IntersectionObserver fires when section is ≥50%
     * in view. While it is, touchmove calls preventDefault() to
     * freeze the page. Each swipe advances / reverses a card via
     * CSS transitions. At the first / last card the page scroll
     * passes through normally so the user can leave the section.
     * ────────────────────────────────────────────────────────── */
    const isMobile = window.innerWidth <= 600;

    if (isMobile) {
      const mob = { active: 0, locked: false, x0: 0, y0: 0 };

      /* ── card apply ── */
      function applyMobile(idx: number, animate: boolean) {
        cards.forEach((card, i) => {
          card.style.transition = animate
            ? 'transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.4s ease'
            : 'none';
          const slot = i - idx;
          card.style.zIndex = String(N - Math.max(slot, 0));
          if (slot < 0) {
            // Exiting card flies off to the left
            card.style.transform = 'translateX(-110%)';
            card.style.opacity   = '0';
          } else {
            // Cards in the stack peek out slightly downwards just like desktop
            const s = Math.min(slot, PEEKS.length - 1);
            card.style.transform = `translateY(${PEEKS[s]}px) scale(${SCALES[s]})`;
            card.style.opacity   = '1';
          }
        });
        setDot(idx);

        /* Update italic headline text + colour */
        const italicEl = italicRef.current;
        if (italicEl) {
          const label = CARDS[idx].italicLabel;
          const color = CARDS[idx].italicColor;
          if (italicEl.textContent !== `driven by ${label}`) {
            italicEl.style.transition = 'opacity 0.25s ease, color 0.25s ease';
            italicEl.style.opacity = '0';
            setTimeout(() => {
              italicEl.textContent = `driven by ${label}`;
              italicEl.style.color = color;
              italicEl.style.opacity = '1';
            }, 150);
          }
        }
      }

      /* ── advance/reverse ── */
      function step(delta: 1 | -1) {
        if (mob.locked) return;
        const next = mob.active + delta;
        if (next < 0 || next >= N) return;
        mob.locked = true;
        mob.active = next;
        applyMobile(next, true);
        setTimeout(() => { mob.locked = false; }, 650);
      }

      const section = track.closest('section') as HTMLElement | null;
      const el = section || track;

      /* ── touch handlers ── */
      const onTouchStart = (e: TouchEvent) => {
        mob.x0 = e.touches[0].clientX;
        mob.y0 = e.touches[0].clientY;
      };

      const onTouchEnd = (e: TouchEvent) => {
        const dx = mob.x0 - e.changedTouches[0].clientX;
        const dy = mob.y0 - e.changedTouches[0].clientY;
        
        // Ensure it's mostly a horizontal swipe (dx > dy) and long enough
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 38) {
          dx > 0 ? step(1) : step(-1);
        }
      };

      /* ── dot tap to jump ── */
      dots.forEach((dot, i) => {
        dot.style.cursor = 'pointer';
        dot.addEventListener('click', () => {
          if (mob.locked) return;
          mob.locked = true;
          mob.active = i;
          applyMobile(i, true);
          setTimeout(() => { mob.locked = false; }, 650);
        });
      });

      applyMobile(0, false);
      el.addEventListener('touchstart', onTouchStart, { passive: true });
      el.addEventListener('touchend',   onTouchEnd,   { passive: true });

      return () => {
        el.removeEventListener('touchstart', onTouchStart);
        el.removeEventListener('touchend',   onTouchEnd);
      };
    }

    /* ──────────────────────────────────────────────────────────
     * DESKTOP PATH — 100% unchanged scroll-driven animation.
     * ────────────────────────────────────────────────────────── */
    init();
    window.addEventListener('scroll', render, { passive: true });
    window.addEventListener('resize', () => { init(); render(); }, { passive: true });
    render();

    return () => {
      window.removeEventListener('scroll', render);
    };
  }, []);

  const goToValues = () => { navigate('/why-ispeak/values'); window.scrollTo(0, 0); };

  return (
    <section className={styles.section} aria-labelledby="values-heading">

      {/*
       * 400vh scroll track = pin (100vh) + 3 card transitions (3 × 100vh).
       * The sticky pin occupies the full viewport while the track scrolls past.
       * Heading + deck + dots are ALL inside the pin so they're always visible.
       * Scroll UP at any point reverses the animation — no special code needed.
       */}
      <div className={styles.track} ref={trackRef}>
        <div className={styles.pin}>

          {/* Heading — always visible inside the sticky viewport */}
          <div className={styles.heading}>
            <div className={styles.eyebrow}>
              <span className={styles.line} />
              <span>OUR VALUES</span>
              <span className={styles.line} />
            </div>
            <h2 id="values-heading" className={styles.title}>
              Rooted in culture,<br />
              <em className={styles.italic} ref={italicRef}>driven by empathy</em>
            </h2>

            <p className={styles.sub}>
              Our four foundational values guide everything, from the therapy room to communities across India.
            </p>
          </div>

          {/* Card deck */}
          <div className={styles.deck}>
            {CARDS.map((card, i) => (
              <div
                key={card.title}
                className={styles.card}
                ref={(el) => { cardRefs.current[i] = el; }}
                style={{
                  background:                card.bg,
                  ['--btn-bg'    as string]: card.btnBg,
                  ['--btn-color' as string]: card.btnColor,
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
            ))}
          </div>

          {/* Progress dots */}
          <div className={styles.dots} aria-hidden="true">
            {CARDS.map((_, i) => (
              <span
                key={i}
                className={styles.dot}
                ref={(el) => { dotRefs.current[i] = el; }}
                style={{ width: i === 0 ? '26px' : '8px', opacity: i === 0 ? 1 : 0.28 }}
              />
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
