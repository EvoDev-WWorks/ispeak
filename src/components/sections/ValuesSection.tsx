import styles from './ValuesSection.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function ValuesSection() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="values" className={styles.values} aria-labelledby="values-heading">
      <div className="container" ref={ref}>
        <header className={`${styles.header} ${isVisible ? 'reveal visible' : 'reveal'}`}>
          <span className={`${styles.eyebrow} ${styles.eyebrowDark}`}>
            <span className={styles.eyebrowDot}></span>Our Values
          </span>
          <h2 className={`${styles.headingPair} ${styles.headingWhite}`} id="values-heading">
            <span className={styles.headingLine1}>Rooted in culture,</span>
            <span className={styles.headingLine2}>driven by empathy</span>
          </h2>
          <p className={styles.sub}>
            Our four foundational values guide everything — from the therapy room to communities across India.
          </p>
        </header>

        <div className={styles.grid}>
          <div className={`${styles.valueCard} ${isVisible ? 'reveal visible' : 'reveal'}`}>
            <div className={styles.icon} aria-hidden="true">⚖️</div>
            <h3 className={styles.name}>Sabhyata</h3>
            <p className={styles.subtitle}>Ethical Conduct</p>
            <p className={styles.desc}>We act with honesty and fairness, upholding our duties and ensuring justice in everything we do.</p>
            <hr className={styles.divider} />
            <p className={styles.hindi} lang="hi">सभ्यता</p>
          </div>

          <div className={`${styles.valueCard} ${isVisible ? 'reveal visible reveal-delay-1' : 'reveal reveal-delay-1'}`}>
            <div className={styles.icon} aria-hidden="true">🌍</div>
            <h3 className={styles.name}>Sanskriti</h3>
            <p className={styles.subtitle}>Culture</p>
            <p className={styles.desc}>We blend traditional wisdom with modern psychology, respecting culture and values in everything we do.</p>
            <hr className={styles.divider} />
            <p className={styles.hindi} lang="hi">संस्कृति</p>
          </div>

          <div className={`${styles.valueCard} ${isVisible ? 'reveal visible reveal-delay-2' : 'reveal reveal-delay-2'}`}>
            <div className={styles.icon} aria-hidden="true">💗</div>
            <h3 className={styles.name}>Samvedana</h3>
            <p className={styles.subtitle}>Empathy</p>
            <p className={styles.desc}>We act with compassion and empathy, understanding every individual and valuing their experiences.</p>
            <hr className={styles.divider} />
            <p className={styles.hindi} lang="hi">संवेदना</p>
          </div>

          <div className={`${styles.valueCard} ${isVisible ? 'reveal visible reveal-delay-3' : 'reveal reveal-delay-3'}`}>
            <div className={styles.icon} aria-hidden="true">🤲</div>
            <h3 className={styles.name}>Seva</h3>
            <p className={styles.subtitle}>Service to Society</p>
            <p className={styles.desc}>We act with commitment to society, creating meaningful impact through community initiatives.</p>
            <hr className={styles.divider} />
            <p className={styles.hindi} lang="hi">सेवा</p>
          </div>
        </div>
      </div>
    </section>
  );
}
