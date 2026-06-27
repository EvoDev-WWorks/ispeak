import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ValuesSection.module.css';

export default function ValuesSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    
    const deck = track.querySelector(`.${styles.valuesDeck}`);
    const cards = Array.from(track.querySelectorAll(`.${styles.vcard}`)) as HTMLElement[];
    const dots = Array.from(track.querySelectorAll(`.${styles.vdot}`)) as HTMLElement[];

    if (!deck || cards.length === 0) return;

    // Cards are ordered 0,1,2,3 in DOM but card-0 is on TOP visually
    // Stack peek: each card behind peeks 14px lower and is scaled down
    const PEEK   = 14;   // px each card peeks below the one in front
    const SCALES = [1, 0.965, 0.93, 0.895];

    function setInitial() {
      cards.forEach((card, i) => {
        card.style.transition = 'none';
        card.style.transform  = 
          `translateY(${i * PEEK}px) scale(${SCALES[i]})`;
        card.style.opacity = '1';
      });
    }

    setInitial();

    function onScroll() {
      const rect      = track!.getBoundingClientRect();
      const scrolled  = -rect.top;
      const available = rect.height - window.innerHeight;
      if (available <= 0) return;

      // progress: 0 → 4  (one unit per card)
      const progress = Math.max(0, Math.min(cards.length, 
        (scrolled / available) * cards.length));

      cards.forEach((card, i) => {
        // How far we are into THIS card's exit (0 = not started, 1 = done)
        const exit = Math.max(0, Math.min(1, progress - i));

        if (exit < 1) {
          // Card is visible — may be animating out
          // Its stack position shifts as the cards above leave
          const stackPos = Math.max(0, i - Math.floor(progress));
          const targetScale = SCALES[Math.min(stackPos, SCALES.length - 1)];
          const targetY     = stackPos * PEEK;

          if (exit === 0) {
            // Not reached yet — sit in stack
            card.style.transform = 
              `translateY(${targetY}px) scale(${targetScale})`;
            card.style.opacity   = '1';
          } else {
            // THIS card is leaving — slide up
            // Mix between stack-front position and gone
            const slideY = -(exit * 110); // % of card height
            card.style.transform = 
              `translateY(${slideY}%) scale(${1 - exit * 0.05})`;
            card.style.opacity   = String(Math.max(0, 1 - exit * 0.6));
          }
        } else {
          // Card fully gone
          card.style.transform = 'translateY(-110%)';
          card.style.opacity   = '0';
        }
      });

      // Active dot = whichever card is currently front
      const active = Math.min(cards.length - 1, Math.floor(progress));
      dots.forEach((d, i) => {
        d.classList.toggle(styles.active, i === active);
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleLearnMore = () => {
    navigate('/why-ispeak/values');
    window.scrollTo(0, 0);
  };

  return (
    <section className={styles.valuesSection} aria-labelledby="values-heading">
      <div className={styles.valuesHeading}>
        <div className={styles.valuesEyebrow}>
          <span className={styles.eyebrowLine}></span>
          <span className={styles.eyebrowText}>OUR VALUES</span>
          <span className={styles.eyebrowLine}></span>
        </div>
        <h2 className={styles.valuesTitle} id="values-heading">Rooted in culture,<br/>
          <em className={styles.valuesItalic}>driven by empathy</em>
        </h2>
        <p className={styles.valuesSub}>Our four foundational values guide everything — 
        from the therapy room to communities across India.</p>
      </div>

      <div className={styles.valuesTrack} ref={trackRef}>
        <div className={styles.valuesPin}>

          <div className={styles.valuesDeck}>
            {/* Card 3 - Seva */}
            <div className={`${styles.vcard} ${styles.vcard3}`}>
              <div className={styles.vcardLeft}>
                <span className={styles.vcardLabel}>SERVICE TO SOCIETY</span>
                <h3>Seva</h3>
                <p>Mental health is not a privilege — it is a right. We serve communities across India, including underserved populations, because care should reach everyone.</p>
                <button onClick={handleLearnMore}>Learn More »</button>
              </div>
              <div className={styles.vcardRight}>
                <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="50" r="18" fill="rgba(255,245,224,0.9)"/>
                  <rect x="88" y="70" width="24" height="36" rx="8" fill="rgba(255,245,224,0.9)"/>
                  <circle cx="40" cy="110" r="12" fill="rgba(255,245,224,0.5)"/>
                  <rect x="31" y="124" width="18" height="28" rx="6" fill="rgba(255,245,224,0.5)"/>
                  <circle cx="160" cy="110" r="12" fill="rgba(255,245,224,0.5)"/>
                  <rect x="151" y="124" width="18" height="28" rx="6" fill="rgba(255,245,224,0.5)"/>
                  <circle cx="100" cy="130" r="12" fill="rgba(255,245,224,0.5)"/>
                  <rect x="91" y="144" width="18" height="28" rx="6" fill="rgba(255,245,224,0.5)"/>
                  <line x1="100" y1="106" x2="100" y2="130" stroke="rgba(255,245,224,0.4)" strokeWidth="2" strokeDasharray="4 3"/>
                  <line x1="100" y1="106" x2="40" y2="122" stroke="rgba(255,245,224,0.4)" strokeWidth="2" strokeDasharray="4 3"/>
                  <line x1="100" y1="106" x2="160" y2="122" stroke="rgba(255,245,224,0.4)" strokeWidth="2" strokeDasharray="4 3"/>
                </svg>
              </div>
            </div>

            {/* Card 2 - Samvedana */}
            <div className={`${styles.vcard} ${styles.vcard2}`}>
              <div className={styles.vcardLeft}>
                <span className={styles.vcardLabel}>EMPATHY</span>
                <h3>Samvedana</h3>
                <p>We listen before we speak. We feel before we advise. Every individual who comes to us is met with deep, genuine empathy that makes healing feel possible.</p>
                <button onClick={handleLearnMore}>Learn More »</button>
              </div>
              <div className={styles.vcardRight}>
                <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M60 90 Q60 60 90 60 Q100 55 100 70 Q100 55 110 60 Q140 60 140 90 Q140 120 100 145 Q60 120 60 90Z" fill="rgba(232,240,255,0.85)"/>
                  <circle cx="75" cy="130" r="10" fill="rgba(232,240,255,0.4)"/>
                  <rect x="69" y="142" width="16" height="26" rx="6" fill="rgba(232,240,255,0.4)"/>
                  <circle cx="125" cy="130" r="10" fill="rgba(232,240,255,0.4)"/>
                  <rect x="119" y="142" width="16" height="26" rx="6" fill="rgba(232,240,255,0.4)"/>
                  <path d="M75 130 Q100 120 125 130" stroke="rgba(232,240,255,0.5)" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
            </div>

            {/* Card 1 - Sanskriti */}
            <div className={`${styles.vcard} ${styles.vcard1}`}>
              <div className={styles.vcardLeft}>
                <span className={styles.vcardLabel}>CULTURE</span>
                <h3>Sanskriti</h3>
                <p>We speak your language — literally and emotionally. Our care is rooted in Indian cultural contexts, traditions, and lived experiences that shape who we are.</p>
                <button onClick={handleLearnMore}>Learn More »</button>
              </div>
              <div className={styles.vcardRight}>
                <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="100" cy="155" rx="50" ry="8" fill="rgba(240,255,232,0.2)"/>
                  <path d="M100 30 L100 155" stroke="rgba(240,255,232,0.3)" strokeWidth="3"/>
                  <path d="M100 60 Q130 45 145 60 Q130 80 100 75 Z" fill="rgba(240,255,232,0.7)"/>
                  <path d="M100 60 Q70 45 55 60 Q70 80 100 75 Z" fill="rgba(240,255,232,0.5)"/>
                  <path d="M100 90 Q135 72 152 90 Q135 112 100 106 Z" fill="rgba(240,255,232,0.6)"/>
                  <path d="M100 90 Q65 72 48 90 Q65 112 100 106 Z" fill="rgba(240,255,232,0.4)"/>
                  <circle cx="100" cy="30" r="8" fill="rgba(240,255,232,0.9)"/>
                </svg>
              </div>
            </div>

            {/* Card 0 - Sabhyata */}
            <div className={`${styles.vcard} ${styles.vcard0}`}>
              <div className={styles.vcardLeft}>
                <span className={styles.vcardLabel}>ETHICAL CONDUCT</span>
                <h3>Sabhyata</h3>
                <p>We hold ourselves to the highest ethical standards — in every session, every boundary, and every decision. Integrity is not a policy; it is our practice.</p>
                <button onClick={handleLearnMore}>Learn More »</button>
              </div>
              <div className={styles.vcardRight}>
                <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="100" y1="20" x2="100" y2="160" stroke="rgba(255,255,255,0.8)" strokeWidth="3"/>
                  <line x1="60" y1="60" x2="140" y2="60" stroke="rgba(255,255,255,0.8)" strokeWidth="3"/>
                  <ellipse cx="65" cy="90" rx="22" ry="10" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.6)" strokeWidth="2"/>
                  <line x1="65" y1="80" x2="65" y2="60" stroke="rgba(255,255,255,0.6)" strokeWidth="2"/>
                  <ellipse cx="135" cy="100" rx="22" ry="10" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
                  <line x1="135" y1="90" x2="135" y2="60" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
                  <rect x="88" y="155" width="24" height="6" rx="3" fill="rgba(255,255,255,0.6)"/>
                  <polygon points="100,8 104,18 96,18" fill="rgba(255,220,100,0.9)"/>
                </svg>
              </div>
            </div>

          </div>

          <div className={styles.vdots}>
            <div className={`${styles.vdot} ${styles.active}`}></div>
            <div className={styles.vdot}></div>
            <div className={styles.vdot}></div>
            <div className={styles.vdot}></div>
          </div>

        </div>
      </div>
    </section>
  );
}
