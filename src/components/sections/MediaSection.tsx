import { Link } from 'react-router-dom';
import styles from './MediaSection.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const stripCards = [
  {
    img: '/images/press-spotlight-indian-express.png',
    outlet: 'Indian Express',
    headline: "'Delulu is the only Solulu': psychologists on Gen Z's viral trend",
    excerpt: "Founder Gargi Dagar breaks down the cognitive patterns behind Gen Z's trending internet philosophy.",
    url: 'https://indianexpress.com/article/lifestyle/delusionship-decoded-dissecting-gen-zs-2023-term-remixed-reality-9088572/',
  },
  {
    img: '/images/press-dlf-event-sumhit-samachar.jpg',
    outlet: 'Sumhit Samachar',
    headline: 'District Mental Health Team partners with iSpeak Foundation',
    excerpt: 'Awareness drive held at DLF Gurugram with the District Health Department.',
  },
  {
    img: '/images/press-apj-school-dainik-jagran.jpg',
    outlet: 'Dainik Jagran',
    headline: 'Healthy mind, healthy childhood: APJ School wellness drive',
    excerpt: 'Dr. Gargi Dagar on screen time, junk food and student mental health.',
  },
  {
    img: '/images/press-roshni-devi-rashtriya-shaan.jpg',
    outlet: 'Rashtriya Shaan',
    headline: 'Social worker Roshni Devi honours Gargi Dagar on Women\'s Day',
    excerpt: 'Marking iSpeak\'s 5 years of Psychological Services.',
  },
];

export default function MediaSection() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="media" className={styles.media} aria-labelledby="media-heading">
      <div className="container" ref={ref}>
        <header className={`${styles.header} ${isVisible ? 'reveal visible' : 'reveal'}`}>
          <span className={styles.eyebrow}><span className={styles.eyebrowDot}></span>iSpeak in the Media</span>
          <h2 className={styles.headingPair} id="media-heading">
            <span className={styles.headingLine1}>Conversations that</span>
            <span className={styles.headingLine2}>matter</span>
          </h2>
        </header>

        {/* Featured Indian Express block */}
        <div className={`${styles.featured} ${isVisible ? 'reveal visible' : 'reveal'}`}>
          <div>
            <p className={styles.featPub}>Indian Express</p>
            <div className={styles.featBadges}>
              <span className={styles.badge}>Mental Health</span>
              <span className={styles.badge}>Culture</span>
            </div>
            <h3 className={styles.featHeadline}>'Delulu is the only Solulu': What psychologists say about Gen Z's viral trend</h3>
            <p className={styles.featExcerpt}>
              Gargi Dagar, Founder of iSpeak Psychological Services, breaks down the cognitive patterns behind the trending internet philosophy and what it reveals about how Gen Z processes aspiration and disappointment.
            </p>
            <a href="https://indianexpress.com/article/lifestyle/delusionship-decoded-dissecting-gen-zs-2023-term-remixed-reality-9088572/" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>Read on IndianExpress.com →</a>
          </div>
          <div className={styles.featVisual}>
            <img
              src="/images/press-spotlight-indian-express.png"
              alt="Indian Express press clipping — iSpeak in the Media"
              className={styles.featImg}
            />
          </div>
        </div>
      </div>

      {/* Scrollable strip — full bleed, no container cap */}
      <div className={styles.stripWrap} aria-label="Press coverage strip">
        <div className={styles.strip}>
          {stripCards.map((card, i) => (
            <article key={i} className={styles.stripCard}>
              <div className={styles.stripImgWrap}>
                {card.url ? (
                  <a href={card.url} target="_blank" rel="noopener noreferrer">
                    <img src={card.img} alt={card.headline} className={styles.stripImg} />
                  </a>
                ) : (
                  <img src={card.img} alt={card.headline} className={styles.stripImg} />
                )}
              </div>
              <div className={styles.stripBody}>
                <p className={styles.stripOutlet}>{card.outlet}</p>
                {card.url ? (
                  <a href={card.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h3 className={styles.stripHeadline}>{card.headline}</h3>
                  </a>
                ) : (
                  <h3 className={styles.stripHeadline}>{card.headline}</h3>
                )}
                <p className={styles.stripExcerpt}>{card.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.ctaWrap}>
        <Link to="/resources/press" className={styles.btnSecondary}>See all press coverage →</Link>
      </div>
    </section>
  );
}
