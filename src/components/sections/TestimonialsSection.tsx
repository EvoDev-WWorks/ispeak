import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import styles from './TestimonialsSection.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal(0.2);
  const [current, setCurrent] = useState(0);

  const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const plugins = reduceMotion ? [] : [Autoplay({ delay: 8000, stopOnInteraction: true, stopOnMouseEnter: true })];
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' }, plugins);
  
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
      quote: "We rolled out iSpeak's corporate programme. Within three months, HR reported visible shifts in team morale and a significant drop in stress-related leaves.",
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
  // Duplicate slides so Embla always has enough nodes to loop even on ultra-wide screens
  const slideData = [...testimonials, ...testimonials];

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrent(emblaApi.selectedScrollSnap() % total);
  }, [emblaApi, total]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const goTo = (index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
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
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.track} role="list">
            {slideData.map((t, i) => (
            <article 
              key={i} 
              className={`${styles.card} ${i % total === current ? styles.cardActive : ''}`}
              role="listitem"
              style={{
                opacity: i % total === current ? 1 : 0.55,
                transform: i % total === current ? 'scale(1)' : 'scale(0.96)'
              }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.quoteMarkGlyph} aria-hidden="true">"</span>
                <div className={styles.badgeRow}>
                  <i className={`ti ${t.badge === 'Client Story' ? 'ti-heart-handshake' : 'ti-building'} ${styles.badgeIcon}`}></i>
                  <span className={styles.badgeText}>{t.badge}</span>
                </div>
              </div>
              <blockquote className={styles.quote}>{t.quote}</blockquote>
              <hr className={styles.divider} />
              <div className={styles.footerWrap}>
                <div className={styles.authorWrap}>
                  <div className={styles.avatar} aria-hidden="true">{t.initials}</div>
                  <div>
                    <p className={styles.name}>{t.name}</p>
                    <p className={styles.role}>{t.role}</p>
                  </div>
                </div>
                {i % total === current && (
                  <i className={`ti ti-quote ${styles.activeQuoteIcon}`} aria-hidden="true"></i>
                )}
              </div>
            </article>
          ))}
        </div>
        </div>
      </div>

      <div className={styles.controls}>
        <button className={styles.btn} onClick={scrollPrev} aria-label="Previous">←</button>
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
        <button className={styles.btn} onClick={scrollNext} aria-label="Next">→</button>
      </div>
    </section>
  );
}
