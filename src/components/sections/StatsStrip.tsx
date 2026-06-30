import styles from './StatsStrip.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useCountUp } from '../../hooks/useCountUp';

export default function StatsStrip() {
  const { ref, isVisible } = useScrollReveal(0.5);

  const peopleCount = useCountUp(215485, 2000, isVisible);
  const partnerCount = useCountUp(11, 2200, isVisible);
  const yearDiffCount = useCountUp(6, 2400, isVisible);

  return (
    <section id="stats-strip" className={styles.statsStrip} aria-label="iSpeak by the numbers" ref={ref}>
      <div className={styles.inner}>
        <div className={`${styles.col} ${isVisible ? 'reveal visible' : 'reveal'}`}>
          <span className={styles.number}>{peopleCount.toLocaleString()}+</span>
          <span className={styles.label}>Lives Impacted</span>
        </div>
        <div className={`${styles.col} ${isVisible ? 'reveal visible reveal-delay-1' : 'reveal reveal-delay-1'}`}>
          <span className={styles.number}>{partnerCount}+</span>
          <span className={styles.label}>Academic Partners</span>
        </div>
        <div className={`${styles.col} ${isVisible ? 'reveal visible reveal-delay-2' : 'reveal reveal-delay-2'}`}>
          <span className={styles.number}>{yearDiffCount}+ Years</span>
          <span className={styles.label}>Of Mental Health Transformation</span>
        </div>
      </div>
    </section>
  );
}
