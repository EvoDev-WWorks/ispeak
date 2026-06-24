import { Link } from 'react-router-dom';
import styles from './MediaSection.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

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

        {/* Featured */}
        <div className={`${styles.featured} ${isVisible ? 'reveal visible' : 'reveal'}`}>
          <div>
            <p className={styles.featPub}>Indian Express</p>
            <div className={styles.featBadges}>
              <span className={styles.badge}>Mental Health</span>
              <span className={styles.badge}>Culture</span>
            </div>
            <h3 className={styles.featHeadline}>'Delulu is the only Solulu' — What psychologists say about Gen Z's viral trend</h3>
            <p className={styles.featExcerpt}>
              Gargi Dagar, Founder of iSpeak Psychological Services, Gurugram, breaks down the cognitive patterns behind the trending internet philosophy and what it reveals about how Gen Z processes aspiration and disappointment...
            </p>
            <a href="https://indianexpress.com" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>Read on IndianExpress.com →</a>
          </div>
          <div className={styles.featVisual} aria-hidden="true">📰</div>
        </div>

        {/* 3-col grid */}
        <div className={styles.grid}>
          <div className={`${styles.card} ${isVisible ? 'reveal visible' : 'reveal'}`}>
            <p className={styles.pub}>Times of India</p>
            <span className={styles.badge}>Wellness</span>
            <h3 className={styles.headline}>Breaking the stigma: How young Indians are embracing therapy</h3>
            <p className={styles.excerpt}>iSpeak's community-first approach is making mental health conversations more accessible across campuses.</p>
            <Link to="/resources/blog" className={styles.link}>Read article →</Link>
          </div>
          <div className={`${styles.card} ${isVisible ? 'reveal visible reveal-delay-1' : 'reveal reveal-delay-1'}`}>
            <p className={styles.pub}>Hindustan Times</p>
            <span className={styles.badge}>Corporate Wellness</span>
            <h3 className={styles.headline}>Why EAP programmes are becoming a boardroom priority in India</h3>
            <p className={styles.excerpt}>Organisations partnering with iSpeak report measurable improvement in workforce productivity and engagement.</p>
            <Link to="/resources/blog" className={styles.link}>Read article →</Link>
          </div>
          <div className={`${styles.card} ${isVisible ? 'reveal visible reveal-delay-2' : 'reveal reveal-delay-2'}`}>
            <p className={styles.pub}>The Hindu</p>
            <span className={styles.badge}>Education</span>
            <h3 className={styles.headline}>School counselling: Moving from reactive to proactive mental health</h3>
            <p className={styles.excerpt}>iSpeak's school wellness model is being adopted across NCR institutions with measurable results.</p>
            <Link to="/resources/blog" className={styles.link}>Read article →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
