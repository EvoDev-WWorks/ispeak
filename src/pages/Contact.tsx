import { useState, type FormEvent } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.hero}>
        <span className={`${styles.eyebrow} ${styles.eyebrowDark}`}>
          <span className={styles.eyebrowDot}></span>Get in Touch
        </span>
        <h1 className={styles.h1}>Begin your journey <span className={styles.italic}>today.</span></h1>
        <p className={styles.sub}>
          We respond to all enquiries within 24 hours. No pressure, no jargon — just a warm, professional conversation.
        </p>
      </div>

      <div className={styles.body}>
        <div className={styles.info}>
          <h2 className={styles.h2}>We're here<span className={styles.italicPink}>for you.</span></h2>
          <p className={styles.infoDesc}>
            Whether you're looking for individual therapy, a corporate wellness programme, or simply have a question — we're ready to help. iSpeak is based in Gurugram and serves clients across India and internationally.
          </p>

          <div className={styles.detail}>
            <span className={styles.detailIcon}>📧</span>
            <div>General Enquiries<br/><a href="mailto:contactispeakofficial@gmail.com">contactispeakofficial@gmail.com</a></div>
          </div>
          <div className={styles.detail}>
            <span className={styles.detailIcon}>📞</span>
            <div>Call us<br/><a href="tel:9711240950">9711240950</a></div>
          </div>
          <div className={styles.detail}>
            <span className={styles.detailIcon}>📍</span>
            <div>Headquarters<br/>Gurugram, Haryana — 122001</div>
          </div>
          <div className={styles.detail}>
            <span className={styles.detailIcon}>🌐</span>
            <div>Website<br/><a href="https://www.ispeakmentalhealth.com" target="_blank" rel="noopener noreferrer">www.ispeakmentalhealth.com</a></div>
          </div>
        </div>

        <div className={styles.formCard}>
          <h3 className={styles.formTitle}>Book a Session</h3>
          <p className={styles.formSub}>Fill in your details and we'll be in touch within 24 hours.</p>
          
          <form onSubmit={handleSubmit} noValidate>
            <div className={styles.row}>
              <div className={styles.group}>
                <label htmlFor="first-name">First Name *</label>
                <input type="text" id="first-name" required />
              </div>
              <div className={styles.group}>
                <label htmlFor="last-name">Last Name *</label>
                <input type="text" id="last-name" required />
              </div>
            </div>
            <div className={styles.group}>
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" required />
            </div>
            <div className={styles.group}>
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" />
            </div>
            <div className={styles.group}>
              <label htmlFor="service">What can we help you with? *</label>
              <select id="service" required defaultValue="">
                <option value="" disabled>Select a service...</option>
                <option value="individual">Individual Counselling</option>
                <option value="couple">Couple Counselling</option>
                <option value="adolescent">Adolescent Counselling</option>
                <option value="family">Family Counselling</option>
                <option value="corporate">Corporate Wellness Programme</option>
                <option value="school">School Wellness Programme</option>
                <option value="sports">Sports Athletes' Wellness</option>
                <option value="other">Other / General Enquiry</option>
              </select>
            </div>
            <div className={styles.group}>
              <label htmlFor="message">Tell us a little more (optional)</label>
              <textarea id="message" rows={4}></textarea>
            </div>
            <button 
              type="submit" 
              className={`${styles.submitBtn} ${submitted ? styles.submittedBtn : ''}`}
              disabled={submitted}
            >
              {submitted ? '✓ Message Sent!' : 'Send My Enquiry →'}
            </button>
            <p className={styles.privacyLock}>🔒 Completely confidential. We never share your information.</p>
          </form>
        </div>
      </div>
    </div>
  );
}
