import styles from './PageIntro.module.css';

interface PageIntroProps {
  eyebrow: string;
  headline: string;
  subtext: string;
  icon?: string;
}

export default function PageIntro({ eyebrow, headline, subtext, icon = 'ti-sparkles' }: PageIntroProps) {
  return (
    <div className={styles.band}>
      {/* Decorative blobs */}
      <span className={styles.blobTL} aria-hidden="true" />
      <span className={styles.blobBR} aria-hidden="true" />

      <div className={styles.hero}>
        {/* Icon badge eyebrow */}
        <div className={styles.eyebrow}>
          <span className={styles.badge}>
            <i className={`ti ${icon} ${styles.badgeIcon}`} aria-hidden="true" />
            {eyebrow}
          </span>
        </div>

        <h1>{headline}</h1>
        <p>{subtext}</p>
      </div>
    </div>
  );
}
