import styles from './MarqueeStrip.module.css';

export default function MarqueeStrip() {
  const partners = [
    "Ministry of Health & Family Welfare",
    "Indian Armed Forces",
    "CBSE Schools",
    "Sports Psychology",
    "Correctional Facility Mental Health",
    "Community Mental Health",
    "Old Age Well-being",
    "Competitive Exam Support",
    "Global Corporate Wellness",
    "Middle East & Gulf Clients",
    "North America & UK Diaspora",
    "10+ Countries Worldwide",
  ];

  return (
    <section className={styles.marqueeStrip} aria-label="Sectors, institutions and global reach">
      <p className={styles.label}>Trusted by institutions, government bodies & corporates — across India and 10+ countries</p>
      <div className={styles.trackWrap}>
        <div className={styles.track} role="list">
          {/* Double map for seamless loop */}
          {[...partners, ...partners].map((partner, i) => (
            <div key={i} className={styles.item} role="listitem">
              <span className={styles.chip}>{partner}</span>
              <span className={styles.sep} aria-hidden="true">◆</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
