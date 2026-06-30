import styles from './AcademicFootprint.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { universityLogos } from '../../data/universityLogos';

export default function AcademicFootprint() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="academic" className={styles.academic} aria-labelledby="academic-heading">
      <div className="container" ref={ref}>
        <header className={`${styles.header} ${isVisible ? 'reveal visible' : 'reveal'}`}>
          <span className={styles.eyebrow}><span className={styles.eyebrowDot}></span>Academic Partnerships</span>
          <h2 className={styles.headingPair} id="academic-heading">
            <span className={styles.headingLine1}>Trusted by India's</span>
            <span className={styles.headingLine2}>top universities</span>
          </h2>
          <p className={styles.sub}>iSpeak's programmes are recognised by 11+ leading institutions.</p>
        </header>

        <div className={styles.grid}>
          {universityLogos.map((uni, index) => {
            const delayClass = `reveal-delay-${index % 4}`;
            return (
              <div key={index} className={`${styles.uniCard} ${isVisible ? `reveal visible ${delayClass}` : `reveal ${delayClass}`}`}>
                <div className={styles.logoWrapper}>
                  {uni.logoPath ? (
                    <img src={uni.logoPath} alt={`${uni.name} logo`} className={styles.logo} loading="lazy" />
                  ) : (
                    <div className={styles.icon} aria-hidden="true">🎓</div>
                  )}
                </div>
                <p className={styles.name}>{uni.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
