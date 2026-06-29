import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.top}>
        <div className={styles.brandCol}>
          <Link to="/" className={styles.brandLogo} aria-label="iSpeak Home">
            <img src="/images/logo.png" alt="iSpeak" className={styles.logoImg} />
            <span className={styles.wordmark}>iSpeak</span>
          </Link>
          <p className={styles.tagline}>A Step Towards Yourself.</p>

          <div className={styles.contact}>
            <a href="mailto:contactispeakofficial@gmail.com" className={styles.contactItem}>
              <span>📧</span> contactispeakofficial@gmail.com
            </a>
            <a href="tel:9711240950" className={styles.contactItem}>
              <span>📞</span> 9711240950
            </a>
            <a href="https://www.ispeakmentalhealth.com" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
              <span>🌐</span> www.ispeakmentalhealth.com
            </a>
          </div>
        </div>

        <div>
          <p className={styles.colTitle}>Services</p>
          <nav className={styles.colLinks} aria-label="Services links">
            <Link to="/services/individual" className={styles.colLink}>Individual Counselling</Link>
            <Link to="/services/couple" className={styles.colLink}>Couple Counselling</Link>
            <Link to="/services/adolescent" className={styles.colLink}>Adolescent Counselling</Link>
            <Link to="/services/family" className={styles.colLink}>Family Counselling</Link>
          </nav>
        </div>

        <div>
          <p className={styles.colTitle}>Programs</p>
          <nav className={styles.colLinks} aria-label="Programs links">
            <Link to="/programs/corporate" className={styles.colLink}>Corporate Wellness</Link>
            <Link to="/programs/school" className={styles.colLink}>School Wellness</Link>
            <Link to="/programs/sports" className={styles.colLink}>Sports Athletes' Wellness</Link>
            <Link to="/why-ispeak/why-choose" className={styles.colLink}>Why iSpeak</Link>
          </nav>
        </div>

        <div>
          <p className={styles.colTitle}>Company</p>
          <nav className={styles.colLinks} aria-label="Company links">
            <Link to="/about" className={styles.colLink}>About Us</Link>
            <Link to="/careers" className={styles.colLink}>Careers</Link>
            <Link to="/press" className={styles.colLink}>Press</Link>
            <Link to="/contact" className={styles.colLink}>Contact Us</Link>
            <Link to="/resources/blog" className={styles.colLink}>Blog</Link>
          </nav>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>© 2026 iSpeak Psychological Services Pvt. Ltd. All rights reserved. · Gurugram, Haryana 122001</p>
        <div className={styles.legal}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">DPDP Act Compliant</a>
        </div>
      </div>
    </footer>
  );
}
