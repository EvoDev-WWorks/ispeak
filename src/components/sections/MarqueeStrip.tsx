import styles from './MarqueeStrip.module.css';

export default function MarqueeStrip() {
  const universities = [
    "K.R. Mangalam University",
    "GD Goenka University",
    "MDU",
    "Amity University",
    "Delhi University",
    "IGNOU New Delhi",
    "The NorthCap University",
    "Gurugram University",
    "SGT University",
    "Chandigarh University",
    "BHU"
  ];

  return (
    <section className={styles.marqueeStrip} aria-label="Academic partners">
      <p className={styles.label}>Trusted by India's leading universities and organisations</p>
      <div className={styles.trackWrap}>
        <div className={styles.track} role="list">
          {/* Double map for seamless loop */}
          {[...universities, ...universities].map((uni, i) => (
            <div key={i} className={styles.item} role="listitem">
              <span className={styles.name}>{uni}</span>
              <span className={styles.sep} aria-hidden="true"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
