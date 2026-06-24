import styles from './HowItWorks.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function HowItWorks() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="how-it-works" className={styles.howItWorks} aria-labelledby="how-heading">
      <div className="container" ref={ref}>
        <header className={`${styles.header} ${isVisible ? 'reveal visible' : 'reveal'}`}>
          <span className={styles.eyebrow}><span className={styles.eyebrowDot}></span>Our Approach</span>
          <h2 className={styles.headingPair} id="how-heading">
            <span className={styles.headingLine1}>Simple steps to</span>
            <span className={styles.headingLine2}>feeling better</span>
          </h2>
        </header>

        <div className={styles.steps}>
          {/* Step 01 */}
          <div className={`${styles.stepCard} ${isVisible ? 'reveal visible' : 'reveal'}`}>
            <div className={styles.illo} aria-hidden="true">📋</div>
            <p className={styles.num}>01</p>
            <h3 className={styles.title}>Tell us about yourself</h3>
            <p className={styles.body}>A quick, confidential intake — your goals, your language, your schedule. No pressure. No jargon. Just you.</p>
          </div>

          {/* Connector */}
          <div className={styles.connector} aria-hidden="true">
            <svg viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 20 Q24 4 44 20" stroke="#F0BCCB" strokeWidth="2" strokeDasharray="4 4" fill="none"/>
            </svg>
          </div>

          {/* Step 02 */}
          <div className={`${styles.stepCard} ${isVisible ? 'reveal visible reveal-delay-1' : 'reveal reveal-delay-1'}`}>
            <div className={styles.illo} aria-hidden="true">🤝</div>
            <p className={styles.num}>02</p>
            <h3 className={styles.title}>Meet your matched expert</h3>
            <p className={styles.body}>We pair you by specialisation, language, timezone, and cultural context. 97% of iSpeak clients keep their first therapist match.</p>
          </div>

          {/* Connector */}
          <div className={styles.connector} aria-hidden="true">
            <svg viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 20 Q24 36 44 20" stroke="#F0BCCB" strokeWidth="2" strokeDasharray="4 4" fill="none"/>
            </svg>
          </div>

          {/* Step 03 */}
          <div className={`${styles.stepCard} ${isVisible ? 'reveal visible reveal-delay-2' : 'reveal reveal-delay-2'}`}>
            <div className={styles.illo} aria-hidden="true">🌟</div>
            <p className={styles.num}>03</p>
            <h3 className={styles.title}>Begin your journey</h3>
            <p className={styles.body}>Evidence-based therapy with measurable outcomes. Our clinical framework blends modern psychology with cultural wisdom and lived experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
