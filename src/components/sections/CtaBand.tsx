import { Link } from 'react-router-dom';
import styles from './CtaBand.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function CtaBand() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="cta-band" className={styles.ctaBand} aria-labelledby="cta-heading" ref={ref}>
      <div className={styles.inner}>

        {/* ── Left: text content ── */}
        <div className={`${styles.textCol} ${isVisible ? 'reveal visible' : 'reveal'}`}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot}></span>2,15,485+ voices heard
          </span>

          <h2 className={styles.h2} id="cta-heading">
            <span className={styles.h2Line1}>Your story deserves</span>
            <span className={styles.h2Line2}>to be heard.</span>
          </h2>

          <p className={styles.subcopy}>
            Confidential, certified support — book your first session in under two minutes.
          </p>

          <div className={styles.ctaRow}>
            <Link to="/contact" className={styles.btnWhite}>Book a Session</Link>
            <Link to="/contact" className={styles.btnWhiteOutline}>Request a Quote →</Link>
          </div>

          <p className={styles.trustLine}>
            <span>Certified Psychologists</span>
            <span className={styles.sep} aria-hidden="true">·</span>
            <span>100% Confidential</span>
          </p>
        </div>

        {/* ── Right: illustration + breathing rings ── */}
        <div className={`${styles.illoCol} ${isVisible ? 'reveal visible' : 'reveal'}`} aria-hidden="true">
          <div className={styles.illoWrap}>
            {/* Concentric breathing rings */}
            <span className={`${styles.ring} ${styles.ring1}`} />
            <span className={`${styles.ring} ${styles.ring2}`} />
            <span className={`${styles.ring} ${styles.ring3}`} />
            {/* Illustration */}
            <img
              src="/images/booking-session-illustration.png"
              alt=""
              className={styles.illo}
              draggable="false"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
