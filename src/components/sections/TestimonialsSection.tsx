import { useState, useEffect, useRef } from 'react';
import styles from './TestimonialsSection.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal(0.2);
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  
  const testimonials = [
    {
      badge: "Client Story",
      quote: "For the first time, I found a psychologist who understood not just my symptoms but my culture, my family, and my world. iSpeak changed how I see myself.",
      initials: "PR",
      name: "Priya R.",
      role: "Delhi, India"
    },
    {
      badge: "Partner Story",
      quote: "We rolled out iSpeak's corporate programme for 400 employees. Within three months, HR reported visible shifts in team morale and a significant drop in stress-related leaves.",
      initials: "AK",
      name: "Arjun K.",
      role: "HR Director, Gurugram"
    },
    {
      badge: "Client Story",
      quote: "I was sceptical about online therapy. My iSpeak counsellor made me feel heard in the first 15 minutes. Eight sessions later, I'm a different person.",
      initials: "SM",
      name: "Sneha M.",
      role: "Bengaluru, India"
    },
    {
      badge: "Partner Story",
      quote: "The school wellness workshop iSpeak ran was the most engaged I have seen our students in years. They knew exactly how to speak to Gen Z.",
      initials: "PS",
      name: "Principal, Gurugram School",
      role: "Gurugram, Haryana"
    },
    {
      badge: "Client Story",
      quote: "After relocating abroad, I felt completely lost. iSpeak matched me with a therapist who understood the diaspora experience. That specificity made all the difference.",
      initials: "RA",
      name: "Rohan A.",
      role: "Dubai, UAE"
    }
  ];

  const total = testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [total]);

  const goTo = (index: number) => {
    setCurrent((index + total) % total);
  };

  const getOffset = () => {
    if (!trackRef.current) return 0;
    const cards = trackRef.current.children;
    if (!cards.length) return 0;
    const wrapWidth = trackRef.current.parentElement?.offsetWidth || 0;
    const cardW = (cards[0] as HTMLElement).offsetWidth;
    const center = wrapWidth / 2 - cardW / 2;
    return -(current * (cardW + 24)) + center;
  };

  return (
    <section id="testimonials" className={styles.testimonials} aria-labelledby="testimonials-heading">
      <div className="container" ref={ref}>
        <header className={`${styles.header} ${isVisible ? 'reveal visible' : 'reveal'}`}>
          <span className={styles.eyebrow}><span className={styles.eyebrowDot}></span>Voices of Change</span>
          <h2 className={styles.headingPair} id="testimonials-heading">
            <span className={styles.headingLine1}>Real people,</span>
            <span className={styles.headingLine2}>real transformation</span>
          </h2>
        </header>
      </div>

      <div className={styles.carouselWrap} aria-label="Client testimonials carousel">
        <div 
          className={styles.track} 
          role="list" 
          ref={trackRef}
          style={{ transform: `translateX(${getOffset()}px)` }}
        >
          {testimonials.map((t, i) => (
            <article 
              key={i} 
              className={styles.card} 
              role="listitem"
              style={{
                opacity: i === current ? 1 : 0.45,
                transform: i === current ? 'scale(1)' : 'scale(0.96)'
              }}
            >
              <div className={styles.stars} aria-label="5 stars">★★★★★</div>
              <span className={styles.badge}>{t.badge}</span>
              <blockquote className={styles.quote}>"{t.quote}"</blockquote>
              <div className={styles.author}>
                <div className={styles.avatar} aria-hidden="true">{t.initials}</div>
                <div>
                  <p className={styles.name}>{t.name}</p>
                  <p className={styles.role}>{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.controls}>
        <button className={styles.btn} onClick={() => goTo(current - 1)} aria-label="Previous">←</button>
        <div className={styles.dots} role="tablist">
          {testimonials.map((_, i) => (
            <button 
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button className={styles.btn} onClick={() => goTo(current + 1)} aria-label="Next">→</button>
      </div>
    </section>
  );
}
