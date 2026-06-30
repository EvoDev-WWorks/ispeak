import styles from './PageIntro.module.css';

interface PageIntroProps {
  eyebrow: string;
  headline: string;
  subtext: string;
}

export default function PageIntro({ eyebrow, headline, subtext }: PageIntroProps) {
  return (
    <div className={styles.hero}>
      <div className={styles.eyebrow}>
        <span className={styles.line} />
        {eyebrow}
        <span className={styles.line} />
      </div>
      <h1>{headline}</h1>
      <p>{subtext}</p>
    </div>
  );
}
