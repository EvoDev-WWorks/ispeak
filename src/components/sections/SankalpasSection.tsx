import styles from './SankalpasSection.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

/* ── Seedling / Growth SVG ── */
const SeedlingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#8B1A3C" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 22V12"/>
    <path d="M12 12C12 12 7 10 7 5a5 5 0 0110 0c0 5-5 7-5 7z"/>
    <path d="M12 12c0 0-4 2-4 7"/>
  </svg>
);

/* ── Balance / Harmony SVG ── */
const BalanceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#8B1A3C" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="12" cy="12" r="9"/>
    <path d="M12 8v4l3 3"/>
    <path d="M3.6 9h16.8M3.6 15h16.8"/>
  </svg>
);

/* ── Community / Hands SVG ── */
const CommunityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#8B1A3C" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87"/>
    <path d="M16 3.13a4 4 0 010 7.75"/>
  </svg>
);

const sankalpas = [
  {
    Icon: SeedlingIcon,
    label: 'Sankalp',
    hindi: 'संकल्प',
    watermark: 'संकल्प',
    h3: 'Empowering individuals to overcome psychological challenges',
    body: 'We believe in the power of resolution. Every person carries the capacity to heal, we provide the clinical expertise, cultural sensitivity, and safe space to help them discover it.',
    delay: '',
    reverse: false,
  },
  {
    Icon: BalanceIcon,
    label: 'Samanvay',
    hindi: 'समन्वय',
    watermark: 'समन्वय',
    h3: 'Creating harmonious balance between mental health, science, and cultural values',
    body: 'We don\'t separate modern psychology from traditional wisdom. We weave them together to promote holistic well-being that is clinically rigorous and deeply human.',
    delay: 'reveal-delay-1',
    reverse: true,
  },
  {
    Icon: CommunityIcon,
    label: 'Samarthya',
    hindi: 'सामर्थ्य',
    watermark: 'सामर्थ्य',
    h3: 'Breaking stigma through proactive care-seeking across societies',
    body: 'Through our social media presence, awareness programmes, and community outreach, we encourage individuals, families, and societies globally to seek care without fear or shame.',
    delay: 'reveal-delay-2',
    reverse: false,
  },
];

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

        {sankalpas.map((s) => (
          <div
            key={s.label}
            className={`${styles.row} ${s.reverse ? styles.rowReverse : ''} ${isVisible ? `reveal visible ${s.delay}` : `reveal ${s.delay}`}`}
          >
            <div className={styles.illo}>
              <s.Icon />
            </div>
            <div className={styles.text}>
              <span className={styles.watermark} lang="hi" aria-hidden="true">{s.watermark}</span>
              <span className={styles.eyebrow}><span className={styles.eyebrowDot}></span>{s.label}</span>
              <span className={styles.hindi} lang="hi">{s.hindi}</span>
              <h3 className={styles.h3}>{s.h3}</h3>
              <p className={styles.body}>{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
