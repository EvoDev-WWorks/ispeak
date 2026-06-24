import { Link } from 'react-router-dom';
import styles from './ImpactSection.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function ImpactSection() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="impact" className={styles.impact} aria-labelledby="impact-heading">
      <div className={`${styles.blob} ${styles.blobTl}`} aria-hidden="true"></div>
      <div className={`${styles.blob} ${styles.blobBr}`} aria-hidden="true"></div>
      <div className={styles.inner} ref={ref}>
        
        {/* Left text */}
        <div className={isVisible ? 'reveal visible' : 'reveal'}>
          <span className={`${styles.eyebrow} ${styles.eyebrowDark}`}>
            <span className={styles.eyebrowDot}></span>Proven Results
          </span>
          <h2 className={`${styles.headingPair} ${styles.headingWhite}`} id="impact-heading">
            <span className={styles.headingLine1}>Real impact.</span>
            <span className={styles.headingLine2}>Measured outcomes.</span>
          </h2>
          <p className={`${styles.sub} ${styles.subWhite}`}>
            Our clinical framework is built on peer-reviewed research and 6+ years of on-ground experience. We measure what matters — not satisfaction scores, but real transformation.
          </p>
          <Link to="/why-ispeak/impact" className={styles.btnWhiteOutline}>Read our research →</Link>
        </div>

        {/* Right cards */}
        <div className={styles.cards}>
          <div className={`${styles.outcomeCard} ${isVisible ? 'reveal visible' : 'reveal'}`}>
            <p className={styles.stat}>9 in 10</p>
            <p className={styles.label}>iSpeak members get better</p>
          </div>
          <div className={`${styles.outcomeCard} ${isVisible ? 'reveal visible reveal-delay-1' : 'reveal reveal-delay-1'}`}>
            <p className={styles.stat}>2×</p>
            <p className={styles.label}>Faster recovery vs. traditional care</p>
          </div>
          <div className={`${styles.outcomeCard} ${isVisible ? 'reveal visible reveal-delay-2' : 'reveal reveal-delay-2'}`}>
            <p className={styles.stat}>81%</p>
            <p className={styles.label}>Maintained gains at 12-month follow-up</p>
          </div>
          <div className={`${styles.outcomeCard} ${isVisible ? 'reveal visible reveal-delay-3' : 'reveal reveal-delay-3'}`}>
            <p className={styles.stat}>48 hrs</p>
            <p className={styles.label}>Average time to first appointment</p>
          </div>
        </div>
      </div>
    </section>
  );
}
