import { useState } from 'react';
import styles from './FaqSection.module.css';

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is iSpeak?",
      a: "iSpeak is a Gurugram-based psychological services firm founded in 2020. We offer individual, couple, adolescent, and family counselling alongside corporate and school wellness programmes. Our approach blends evidence-based modern psychology with cultural sensitivity to make mental health care accessible and stigma-free for every Indian."
    },
    {
      q: "What services does iSpeak offer?",
      a: "We offer individual counselling, couple counselling, adolescent counselling, family counselling, corporate wellness EAP programmes, school wellness programmes, and sports athletes' wellness programmes. All services are available online and in-person."
    },
    {
      q: "Who can benefit from iSpeak's programmes?",
      a: "Anyone. Whether you're seeking personal growth, a couple navigating challenges, an employer building a healthier workplace, or a school looking to support students — iSpeak has a programme for you."
    },
    {
      q: "How do I book a session or enquire about a programme?",
      a: "Click 'Book a Session' on this website, email us at contactispeakofficial@gmail.com, or call 9711240950. We respond to all enquiries within 24 hours."
    },
    {
      q: "Are sessions confidential?",
      a: "Absolutely. All sessions are completely confidential. Your information is never shared without your explicit consent. For adolescent clients, parents are involved only with the young person's agreement."
    }
  ];

  return (
    <section id="faq" className={styles.faq} aria-labelledby="faq-heading">
      <div className={styles.float}>
        <header className={styles.header}>
          <h2 className={styles.headingPair} id="faq-heading">
            <span className={styles.headingLine1}>Frequently asked</span>
            <span className={styles.headingLine2}>questions</span>
          </h2>
          <p className={styles.sub}>Can't find your answer? Email <a href="mailto:contactispeakofficial@gmail.com">contactispeakofficial@gmail.com</a></p>
        </header>

        <div className={styles.list} role="list">
          {faqs.map((faq, index) => (
            <div key={index} className={`${styles.item} ${openId === index ? styles.isOpen : ''}`} role="listitem">
              <button 
                className={styles.trigger} 
                aria-expanded={openId === index}
                onClick={() => setOpenId(openId === index ? null : index)}
              >
                <span className={styles.question}>{faq.q}</span>
                <span className={styles.icon} aria-hidden="true">+</span>
              </button>
              <div 
                className={styles.body}
                style={{ maxHeight: openId === index ? '300px' : '0px' }}
              >
                <p className={styles.answer}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
