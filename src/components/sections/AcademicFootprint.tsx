import styles from './AcademicFootprint.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function AcademicFootprint() {
  const { ref, isVisible } = useScrollReveal(0.2);

  const unis = [
    "K.R. Mangalam University",
    "GD Goenka University",
    "Maharshi Dayanand University",
    "Amity University, Noida",
    "Delhi University",
    "IGNOU New Delhi",
    "The NorthCap University",
    "Gurugram University",
    "SGT University",
    "Chandigarh University",
    "Banaras Hindu University",
    "Amity University, Manesar"
  ];

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
          {unis.map((uni, index) => {
            const delayClass = `reveal-delay-${index % 4}`;
            return (
              <div key={index} className={`${styles.uniCard} ${isVisible ? `reveal visible ${delayClass}` : `reveal ${delayClass}`}`}>
                <div className={styles.icon} aria-hidden="true">🎓</div>
                <p className={styles.name}>{uni}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
