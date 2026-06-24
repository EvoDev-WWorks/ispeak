import styles from './SankalpasSection.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function SankalpasSection() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section id="sankalpas" className={styles.sankalpas} aria-labelledby="sankalpas-heading">
      <div className="container" ref={ref}>
        <header className={`${styles.header} ${isVisible ? 'reveal visible' : 'reveal'}`}>
          <span className={styles.eyebrow}><span className={styles.eyebrowDot}></span>Our Purpose</span>
          <h2 className={styles.headingPair} id="sankalpas-heading">
            <span className={styles.headingLine1}>Why iSpeak exists</span>
            <span className={styles.headingLine2}>three core purposes</span>
          </h2>
          <p className={styles.sub}>Three core purposes drive every session we facilitate and every community we serve.</p>
        </header>

        {/* Sankalpa 1 */}
        <div className={`${styles.row} ${isVisible ? 'reveal visible' : 'reveal'}`}>
          <div className={styles.illo} aria-hidden="true">🌱</div>
          <div className={styles.text}>
            <span className={styles.eyebrow}><span className={styles.eyebrowDot}></span>Sankalp</span>
            <span className={styles.hindi} lang="hi">संकल्प</span>
            <h3 className={styles.h3}>Empowering individuals to overcome psychological challenges</h3>
            <p className={styles.body}>We believe in the power of resolution. Every person carries the capacity to heal — we provide the clinical expertise, cultural sensitivity, and safe space to help them discover it.</p>
          </div>
        </div>

        {/* Sankalpa 2 */}
        <div className={`${styles.row} ${styles.rowReverse} ${isVisible ? 'reveal visible reveal-delay-1' : 'reveal reveal-delay-1'}`}>
          <div className={styles.illo} aria-hidden="true">🔬</div>
          <div className={styles.text}>
            <span className={styles.eyebrow}><span className={styles.eyebrowDot}></span>Samanvay</span>
            <span className={styles.hindi} lang="hi">समन्वय</span>
            <h3 className={styles.h3}>Creating harmonious balance between mental health, science, and cultural values</h3>
            <p className={styles.body}>We don't separate modern psychology from traditional wisdom. We weave them together to promote holistic well-being that is clinically rigorous and deeply human.</p>
          </div>
        </div>

        {/* Sankalpa 3 */}
        <div className={`${styles.row} ${isVisible ? 'reveal visible reveal-delay-2' : 'reveal reveal-delay-2'}`}>
          <div className={styles.illo} aria-hidden="true">🤝</div>
          <div className={styles.text}>
            <span className={styles.eyebrow}><span className={styles.eyebrowDot}></span>Samarthya</span>
            <span className={styles.hindi} lang="hi">सामर्थ्य</span>
            <h3 className={styles.h3}>Breaking stigma through proactive care-seeking across societies</h3>
            <p className={styles.body}>Through our social media presence, awareness programmes, and community outreach, we encourage individuals, families, and societies globally to seek care without fear or shame.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
