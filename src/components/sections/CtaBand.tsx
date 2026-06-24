import { Link } from 'react-router-dom';
import styles from './CtaBand.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function CtaBand() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="cta-band" className={styles.ctaBand} aria-labelledby="cta-heading" ref={ref}>
      <div className={styles.blob} aria-hidden="true"></div>
      <div className={styles.inner}>
        <span className={`${styles.eyebrow} ${isVisible ? 'reveal visible' : 'reveal'}`}>
          <span className={styles.eyebrowDot}></span>Going Global in 2026
        </span>

        <h2 className={`${styles.h2} ${isVisible ? 'reveal visible' : 'reveal'}`} id="cta-heading">
          <span className={styles.h2Line1}>Your journey</span>
          <span className={styles.h2Line2}>begins here.</span>
        </h2>

        <div className={`${styles.quote} ${isVisible ? 'reveal visible' : 'reveal'}`}>
          <p className={styles.quoteText}>"Learning psychology goes beyond textbooks — it grows through observation, reflection, and experience."</p>
          <p className={styles.quoteAttr}>— iSpeak Team</p>
        </div>

        <div className={`${styles.ctaRow} ${isVisible ? 'reveal visible' : 'reveal'}`}>
          <Link to="/contact" className={styles.btnWhite}>Book a Session</Link>
          <Link to="/contact" className={styles.btnWhiteOutline}>Request a Quote →</Link>
        </div>
      </div>
    </section>
  );
}
