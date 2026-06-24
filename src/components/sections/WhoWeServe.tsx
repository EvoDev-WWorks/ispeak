import { Link } from 'react-router-dom';
import styles from './WhoWeServe.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function WhoWeServe() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="who-we-serve" className={styles.serve} aria-labelledby="serve-heading">
      <div className="container" ref={ref}>
        <header className={`${styles.header} ${isVisible ? 'reveal visible' : 'reveal'}`}>
          <span className={styles.eyebrow}><span className={styles.eyebrowDot}></span>Who We Serve</span>
          <h2 className={styles.headingPair} id="serve-heading">
            <span className={styles.headingLine1}>Better care</span>
            <span className={styles.headingLine2}>benefits everyone</span>
          </h2>
        </header>

        <div className={styles.grid}>
          <article className={`${styles.card} ${isVisible ? 'reveal visible' : 'reveal'}`}>
            <div className={styles.illo} aria-hidden="true">🧘</div>
            <h3 className={styles.title}>Individuals</h3>
            <p className={styles.body}>Personal therapy, coaching, and self-help tools for your wellbeing journey.</p>
            <Link to="/services/individual" className={styles.cta}>Start today →</Link>
          </article>

          <article className={`${styles.card} ${isVisible ? 'reveal visible reveal-delay-1' : 'reveal reveal-delay-1'}`}>
            <div className={styles.illo} aria-hidden="true">🏢</div>
            <h3 className={styles.title}>Employers & Organisations</h3>
            <p className={styles.body}>Reduce absenteeism and boost productivity with comprehensive wellness programmes.</p>
            <Link to="/programs/corporate" className={styles.cta}>Build your programme →</Link>
          </article>

          <article className={`${styles.card} ${isVisible ? 'reveal visible reveal-delay-2' : 'reveal reveal-delay-2'}`}>
            <div className={styles.illo} aria-hidden="true">🏫</div>
            <h3 className={styles.title}>Schools & Colleges</h3>
            <p className={styles.body}>From mental health workshops to full counsellor training — transforming schools.</p>
            <Link to="/programs/school" className={styles.cta}>School enquiry →</Link>
          </article>

          <article className={`${styles.card} ${isVisible ? 'reveal visible reveal-delay-3' : 'reveal reveal-delay-3'}`}>
            <div className={styles.illo} aria-hidden="true">🏅</div>
            <h3 className={styles.title}>Sports Athletes</h3>
            <p className={styles.body}>Performance psychology and mental resilience training at every level.</p>
            <Link to="/programs/sports" className={styles.cta}>Athletes' wellness →</Link>
          </article>
        </div>
      </div>
    </section>
  );
}
