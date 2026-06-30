import { useState } from 'react';
import styles from './ServiceDetailSection.module.css';

interface ProcessStep {
  icon: string;
  title: string;
  body: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface ServiceDetailSectionProps {
  id: string;
  index: number;
  tagLabel: string;
  tagBg: string;
  tagColor: string;
  accentColor: string;
  headline: string;
  intro: string;
  whoPoints: string[];
  steps: ProcessStep[];
  expectPoints: string[];
  approach: string;
  faqs: FaqItem[];
  ctaText: string;
  imageUrl: string;
  imageCaption: string;
  // Tab navigation
  onPrev?: () => void;
  onNext?: () => void;
  prevLabel?: string;
  nextLabel?: string;
}

export default function ServiceDetailSection({
  id,
  index,
  tagLabel,
  tagBg,
  tagColor,
  accentColor,
  headline,
  intro,
  whoPoints,
  steps,
  expectPoints,
  approach,
  faqs,
  ctaText,
  imageUrl,
  imageCaption,
  onPrev,
  onNext,
  prevLabel,
  nextLabel,
}: ServiceDetailSectionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [imgError, setImgError] = useState(false);

  const showFallback = !imageUrl || imgError;

  return (
    <section id={id} className={styles.wrapper}>

      {/* INTRO HALF — alternates direction based on index */}
      <div className={`${styles.section} ${index % 2 === 1 ? styles.flip : ''}`}>

        {/* VISUAL */}
        <div className={styles.visual}>
          {showFallback ? (
            <div
              className={styles.visualImgFallback}
              style={{ background: accentColor }}
              aria-label={imageCaption}
            >
              <div className={styles.visualFallbackInner} />
              <span className={styles.visualTag}>{imageCaption}</span>
            </div>
          ) : (
            <div
              className={styles.visualImg}
              style={{ backgroundImage: `url(${imageUrl})` }}
              role="img"
              aria-label={imageCaption}
            >
              <img
                src={imageUrl}
                alt=""
                aria-hidden="true"
                onError={() => setImgError(true)}
                style={{ display: 'none' }}
              />
              <span className={styles.visualTag}>{imageCaption}</span>
            </div>
          )}
        </div>

        {/* CONTENT */}
        <div className={styles.content}>
          <span
            className={styles.tag}
            style={{ background: tagBg, color: tagColor }}
          >
            {tagLabel}
          </span>
          <h2>{headline}</h2>
          <p className={styles.intro}>{intro}</p>
          <div className={styles.whoList}>
            {whoPoints.map((point, i) => (
              <div key={i} className={styles.whoItem}>
                <i className="ti ti-check" style={{ color: accentColor }} aria-hidden="true" />
                <span>{point}</span>
              </div>
            ))}
          </div>
          <div className={styles.ctaRow}>
            <button
              className={styles.btnPrimary}
              style={{ background: accentColor }}
            >
              {ctaText}
            </button>
          </div>
        </div>
      </div>

      {/* PROCESS STRIP */}
      <div className={styles.processStrip}>
        <p className={styles.processLabel}>How it works</p>
        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.stepIcon}>
                <i className={`ti ti-${step.icon}`} aria-hidden="true" />
              </div>
              <h4>{step.title}</h4>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* WHAT TO EXPECT */}
      <div className={styles.expectBlock}>
        <h3>What to expect</h3>
        <div className={styles.expectList}>
          {expectPoints.map((point, i) => (
            <div key={i} className={styles.expectItem}>
              <i
                className="ti ti-point-filled"
                style={{ color: accentColor }}
                aria-hidden="true"
              />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>

      {/* OUR APPROACH */}
      <div className={styles.approachBlock}>
        <h3>Our approach</h3>
        <p>{approach}</p>
      </div>

      {/* FAQ ACCORDION */}
      <div className={styles.faqBlock}>
        <h3>Frequently asked questions</h3>
        {faqs.map((faq, i) => (
          <div key={i} className={styles.faqItem}>
            <button
              className={styles.faqQuestion}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              aria-expanded={openFaq === i}
            >
              <span>{faq.question}</span>
              <i
                className={`ti ti-chevron-down ${openFaq === i ? styles.faqIconOpen : ''}`}
                aria-hidden="true"
              />
            </button>
            {openFaq === i && (
              <p className={styles.faqAnswer}>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* CLOSING CTA BAND with Prev/Next tab navigation */}
      <div className={styles.closingBand} style={{ background: tagBg }}>
        <div className={styles.closingContent}>
          <h3>Ready to begin?</h3>
          <p>Your first intro call is free, no commitment required.</p>
          <button className={styles.closingBtn} style={{ background: accentColor }}>
            {ctaText}
          </button>
        </div>

        <div className={styles.closingNav}>
          {onPrev ? (
            <button className={styles.navBtn} onClick={onPrev}>
              <i className="ti ti-arrow-left" aria-hidden="true" />
              <span>
                <small>Previous</small>
                {prevLabel}
              </span>
            </button>
          ) : (
            <div />
          )}
          {onNext && (
            <button className={`${styles.navBtn} ${styles.navBtnRight}`} onClick={onNext}>
              <span>
                <small>Next</small>
                {nextLabel}
              </span>
              <i className="ti ti-arrow-right" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>

    </section>
  );
}
