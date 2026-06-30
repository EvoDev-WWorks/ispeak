import { Link } from 'react-router-dom';
import styles from './Press.module.css';

/* ── Data ── */
const section01 = [
  {
    img: '/images/press-dlf-event-sumhit-samachar.jpg',
    outlet: 'Sumhit Samachar',
    date: '8 Oct 2022',
    hindiHeadline: 'आइस्पीक फाउंडेशन के साथ मानसिक स्वास्थ्य टीम ने लोगो को किया जागरूक',
    englishSummary: 'District Mental Health Team partnered with iSpeak Foundation for an awareness event at DLF Gurugram, with Dr. Vinay Saini and Dr. Sachin Khatana speaking on post-COVID mental health.',
  },
  {
    img: '/images/press-dlf-event-punjab-kesari.jpg',
    outlet: 'Punjab Kesari',
    date: '9 Oct 2022 · Gurgaon Edition Pg.1',
    hindiHeadline: 'मानसिक स्वास्थ्य को लेकर लोगों को किया जागरूक',
    englishSummary: 'Front-page coverage of the same District Health Dept. × iSpeak event — "maintaining mental health is a challenge we must fight together," says Dr. Vinay Saini.',
  },
  {
    img: '/images/press-dlf-event-nav-samachar.jpg',
    outlet: 'Nav Samachar',
    date: 'Oct 2022',
    hindiHeadline: 'मानसिक स्वास्थ्य के लिए सबको मिलकर लड़ना होगा : डॉ विनय',
    englishSummary: 'Wider syndication of the DLF event coverage, with detail on free treatment and counselling available through district hospitals.',
  },
];

const section02 = [
  {
    img: '/images/press-dusu-mou-lowres.jpg',
    outlet: 'National Daily',
    date: '2024',
    hindiHeadline: 'मानसिक स्वास्थ्य को बेहतर बनाने के लिए होगा काम',
    englishSummary: 'DUSU signs an MoU with Yuva Chetna Foundation to tackle student anxiety and depression. Dr. Gargi Dagar announces a walkathon on Oct 14 for campus mental health awareness.',
  },
  {
    img: '/images/press-apj-school-dainik-jagran.jpg',
    outlet: 'Dainik Jagran',
    date: 'World Health Day',
    hindiHeadline: 'मोबाइल या टीवी देखते हुए भोजन करने से बचें, जंक फूड से रहें दूर',
    englishSummary: 'At APJ School, Saket — nutritionist Pooja Choudhary and Dr. Gargi Dagar speak to students on balanced diet, screen habits and the mind-body connection.',
  },
];

const section03 = [
  {
    img: '/images/press-roshni-devi-rashtriya-shaan.jpg',
    outlet: 'Rashtriya Shaan',
    date: "Women's Day",
    hindiHeadline: 'समाजसेविका रोशनी देवी ने गार्गी डागर को ब्रेथ पुस्तक भेंट की',
    englishSummary: "Social worker Roshni Devi felicitates founder Gargi Dagar, marking iSpeak's 5th anniversary and its outreach through schools, colleges, corporates and correctional homes.",
  },
];

/* ── Clipping card ── */
interface ClippingCardProps {
  img: string;
  outlet: string;
  date: string;
  hindiHeadline: string;
  englishSummary: string;
  tilt?: 'neg' | 'pos';
}

function ClippingCard({ img, outlet, date, hindiHeadline, englishSummary, tilt = 'neg' }: ClippingCardProps) {
  return (
    <div className={`${styles.clipping} ${tilt === 'pos' ? styles.clippingPos : styles.clippingNeg}`}>
      <div className={styles.pin} aria-hidden="true" />
      <div className={styles.tape} aria-hidden="true" />
      <img src={img} alt={hindiHeadline} className={styles.clippingImg} loading="lazy" />
      <div className={styles.clippingBody}>
        <div className={styles.clippingMeta}>
          <span className={styles.clippingOutlet}>{outlet}</span>
          <span className={styles.clippingDate}>{date}</span>
        </div>
        <p className={styles.clippingHindi}>{hindiHeadline}</p>
        <p className={styles.clippingEnglish}>{englishSummary}</p>
        <a href={img} target="_blank" rel="noopener noreferrer" className={styles.clippingLink}>
          View full clipping →
        </a>
      </div>
    </div>
  );
}

/* ── Section header ── */
function SectionHeader({ num, title }: { num: string; title: string }) {
  return (
    <div className={styles.sectionHeader}>
      <span className={styles.sectionNum}>{num}</span>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <hr className={styles.sectionRule} />
    </div>
  );
}

/* ── Page ── */
export default function Press() {
  return (
    <div className={styles.page}>

      {/* ── Hero spotlight — open editorial grid, no card box ── */}
      <section className={styles.heroSection} aria-label="Featured press story">
        <div className={styles.heroGrid}>

          {/* Left: text content */}
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>
              <span className={styles.eyebrowDot} />
              Featured Story
            </p>
            <div className={styles.heroBadges}>
              <span className={styles.badge}>Mental Health</span>
              <span className={styles.badge}>Culture</span>
            </div>
            <h1 className={styles.heroHeadline}>
              'Delulu is the only Solulu': What psychologists say about Gen Z's viral trend
            </h1>
            <p className={styles.heroExcerpt}>
              Gargi Dagar, Founder of iSpeak Psychological Services, breaks down the cognitive patterns behind the trending internet philosophy and what it reveals about how Gen Z processes aspiration and disappointment.
            </p>
            <a
              href="https://indianexpress.com/article/lifestyle/delusionship-decoded-dissecting-gen-zs-2023-term-remixed-reality-9088572/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              Read on IndianExpress.com →
            </a>
          </div>

          {/* Right: image */}
          <div className={styles.heroImgWrap}>
            <img
              src="/images/press-spotlight-indian-express.png"
              alt="Indian Express press clipping — Delulu is the only Solulu"
              className={styles.heroImg}
            />
            <div className={styles.heroImgPill}>
              December 2023 · iSpeak Spotlight
            </div>
          </div>

        </div>
      </section>

      {/* ── As featured in masthead ── */}
      <section className={styles.masthead} aria-label="Publications that featured iSpeak">
        <p className={styles.mastheadLabel}>As featured in</p>
        <div className={styles.mastheadRow}>
          <span className={styles.mastheadItem}>Indian Express</span>
          <span className={`${styles.mastheadItem} ${styles.hindi}`}>पंजाब केसरी</span>
          <span className={`${styles.mastheadItem} ${styles.hindi}`}>दैनिक जागरण</span>
          <span className={`${styles.mastheadItem} ${styles.hindi}`}>नव समाचार</span>
          <span className={`${styles.mastheadItem} ${styles.hindi}`}>राष्ट्रीय शान</span>
          <span className={styles.mastheadItem}>Hindustan Times</span>
          <span className={styles.mastheadItem}>The Hindu</span>
        </div>
      </section>

      {/* ── Pinboard sections ── */}
      <div className={styles.sections}>

        <section aria-labelledby="section-01">
          <SectionHeader num="01" title="Mental Health Awareness Events" />
          <div className={styles.pinboard}>
            <div className={styles.pinGrid}>
              {section01.map((card, i) => (
                <ClippingCard key={i} {...card} tilt={i % 2 === 0 ? 'neg' : 'pos'} />
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="section-02">
          <SectionHeader num="02" title="Education & Institutions" />
          <div className={styles.pinboard}>
            <div className={styles.pinGrid}>
              {section02.map((card, i) => (
                <ClippingCard key={i} {...card} tilt={i % 2 === 0 ? 'pos' : 'neg'} />
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="section-03">
          <SectionHeader num="03" title="Community & Recognition" />
          <div className={styles.pinboard}>
            <div className={styles.pinGrid}>
              {section03.map((card, i) => (
                <ClippingCard key={i} {...card} tilt="neg" />
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* ── Footer CTA band ── */}
      <section className={styles.ctaBand} aria-label="Get in touch">
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaHeadline}>Want iSpeak to speak at your organisation?</h2>
          <p className={styles.ctaBody}>
            From school wellness drives to corporate EAP programmes — get in touch about awareness sessions, talks and partnerships.
          </p>
          <Link to="/contact" className={styles.ctaBtn}>Get in touch →</Link>
        </div>
      </section>

    </div>
  );
}
