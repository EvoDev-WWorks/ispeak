import styles from './ValuesSection.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const SabhyataIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#8B1A3C" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 3l1.5 4.5H18l-3.75 2.75 1.5 4.5L12 12l-3.75 2.75 1.5-4.5L6 7.5h4.5z"/>
  </svg>
);

const SanskritiIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#8B1A3C" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="12" cy="12" r="9"/>
    <path d="M12 3v18M3 12h18"/>
  </svg>
);

const SamvedanaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#8B1A3C" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
  </svg>
);

const SevaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#8B1A3C" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
  </svg>
);

export default function ValuesSection() {
  const { ref, isVisible } = useScrollReveal(0.2);

  const values = [
    {
      Icon: SabhyataIcon,
      name: 'Sabhyata',
      subtitle: 'Ethical Conduct',
      desc: 'We act with honesty and fairness, upholding our duties and ensuring justice in everything we do.',
      hindi: 'सभ्यता',
      delay: '',
    },
    {
      Icon: SanskritiIcon,
      name: 'Sanskriti',
      subtitle: 'Culture',
      desc: 'We blend traditional wisdom with modern psychology, respecting culture and values in everything we do.',
      hindi: 'संस्कृति',
      delay: 'reveal-delay-1',
    },
    {
      Icon: SamvedanaIcon,
      name: 'Samvedana',
      subtitle: 'Empathy',
      desc: 'We act with compassion and empathy, understanding every individual and valuing their experiences.',
      hindi: 'संवेदना',
      delay: 'reveal-delay-2',
    },
    {
      Icon: SevaIcon,
      name: 'Seva',
      subtitle: 'Service to Society',
      desc: 'We act with commitment to society, creating meaningful impact through community initiatives.',
      hindi: 'सेवा',
      delay: 'reveal-delay-3',
    },
  ];

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
          {values.map((v) => (
            <div
              key={v.name}
              className={`${styles.valueCard} ${isVisible ? `reveal visible ${v.delay}` : `reveal ${v.delay}`}`}
            >
              <div className={styles.iconWrap}>
                <v.Icon />
              </div>
              <h3 className={styles.name}>{v.name}</h3>
              <p className={styles.subtitle}>{v.subtitle}</p>
              <p className={styles.desc}>{v.desc}</p>
              <hr className={styles.divider} />
              <p className={styles.hindi} lang="hi">{v.hindi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
