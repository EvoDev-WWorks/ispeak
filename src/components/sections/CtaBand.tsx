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
          <span className={styles.h2Line1}>Your story deserves</span>
          <span className={styles.h2Line2}>to be heard.</span>
        </h2>

        <p className={`${styles.socialProof} ${isVisible ? 'reveal visible' : 'reveal'}`}>
          Join 50,000+ individuals who found their voice with iSpeak
        </p>

        <div className={`${styles.ctaRow} ${isVisible ? 'reveal visible' : 'reveal'}`}>
          <Link to="/contact" className={styles.btnWhite}>Book a Session</Link>
          <Link to="/contact" className={styles.btnWhiteOutline}>Request a Quote →</Link>
        </div>
      </div>
    </section>
  );
}
