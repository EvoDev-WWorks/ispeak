import { Link } from 'react-router-dom';
import styles from './ServicesSection.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

/* ══════════════════════════════════════════
   ILLUSTRATION COMPONENTS
   200px tall, viewBox 0 0 400 200, flat fills
   ══════════════════════════════════════════ */

/* CARD 1 — Individual Counselling — muted purple-blue #7B7FB5 */
const IlloIndividual = () => (
  <svg
    viewBox="0 0 400 200"
    preserveAspectRatio="xMidYMid slice"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* bg */}
    <rect width="400" height="200" fill="#7B7FB5" />
    {/* rug */}
    <ellipse cx="200" cy="172" rx="80" ry="12" fill="#6668A0" />
    {/* chair base / seat */}
    <rect x="148" y="130" width="104" height="44" rx="10" fill="#A8ABCC" />
    {/* chair back */}
    <rect x="152" y="90" width="96" height="56" rx="14" fill="#A8ABCC" />
    {/* chair left arm */}
    <rect x="138" y="118" width="20" height="36" rx="8" fill="#9497BC" />
    {/* chair right arm */}
    <rect x="242" y="118" width="20" height="36" rx="8" fill="#9497BC" />
    {/* chair legs */}
    <rect x="158" y="170" width="10" height="18" rx="4" fill="#9497BC" />
    <rect x="232" y="170" width="10" height="18" rx="4" fill="#9497BC" />
    {/* person body — sitting, slightly reclined */}
    <ellipse cx="200" cy="148" rx="22" ry="16" fill="white" />
    {/* person torso */}
    <rect x="185" y="115" width="30" height="38" rx="10" fill="white" />
    {/* person head */}
    <circle cx="200" cy="106" r="16" fill="white" />
    {/* person legs stretched */}
    <ellipse cx="200" cy="158" rx="26" ry="10" fill="white" />
    {/* speech bubble */}
    <rect x="222" y="68" width="52" height="34" rx="10" fill="#F5F5FF" />
    {/* bubble tail */}
    <polygon points="226,100 218,112 238,100" fill="#F5F5FF" />
    {/* heart in bubble */}
    <path d="M244 79 c0-4 6-4 6 0 c0-4 6-4 6 0 c0 4-6 9-6 9 c0 0-6-5-6-9z" fill="#E8705A" />
    {/* soft floor line */}
    <rect x="100" y="185" width="200" height="3" rx="2" fill="#6668A0" />
  </svg>
);

/* CARD 2 — Couple Counselling — coral #E8705A */
const IlloCouple = () => (
  <svg
    viewBox="0 0 400 200"
    preserveAspectRatio="xMidYMid slice"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* bg */}
    <rect width="400" height="200" fill="#E8705A" />
    {/* floor line */}
    <rect x="0" y="170" width="400" height="30" fill="#D05A44" />
    {/* table */}
    <rect x="170" y="130" width="60" height="10" rx="4" fill="#F0A090" />
    {/* table leg */}
    <rect x="196" y="140" width="8" height="30" rx="3" fill="#D8806A" />
    {/* table top ellipse */}
    <ellipse cx="200" cy="130" rx="34" ry="8" fill="#F0A090" />
    {/* cup left */}
    <rect x="178" y="118" width="16" height="14" rx="4" fill="#FFDDD7" />
    <rect x="194" y="122" width="6" height="6" rx="3" fill="#FFDDD7" />
    {/* cup right */}
    <rect x="206" y="118" width="16" height="14" rx="4" fill="#FFDDD7" />
    <rect x="200" y="122" width="6" height="6" rx="3" fill="#FFDDD7" />
    {/* steam left cup */}
    <path d="M184 116 Q186 110 184 104" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M190 116 Q192 108 190 102" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* steam right cup */}
    <path d="M212 116 Q214 110 212 104" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M218 116 Q220 108 218 102" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* left person — body leaning right */}
    <rect x="96" y="100" width="36" height="70" rx="14" fill="white" />
    <circle cx="114" cy="88" r="18" fill="white" />
    {/* left arm reaching toward center */}
    <rect x="130" y="112" width="40" height="12" rx="6" fill="white" />
    {/* right person — body leaning left */}
    <rect x="268" y="100" width="36" height="70" rx="14" fill="white" />
    <circle cx="286" cy="88" r="18" fill="white" />
    {/* right arm reaching toward center */}
    <rect x="230" y="112" width="40" height="12" rx="6" fill="white" />
    {/* connection dots between arms */}
    <circle cx="200" cy="118" r="4" fill="rgba(255,255,255,0.4)" />
  </svg>
);

/* CARD 3 — Adolescent Counselling — dark teal #2D6B6B */
const IlloAdolescent = () => (
  <svg
    viewBox="0 0 400 200"
    preserveAspectRatio="xMidYMid slice"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* bg */}
    <rect width="400" height="200" fill="#2D6B6B" />
    {/* star dots scattered */}
    <circle cx="60"  cy="30"  r="2.5" fill="white" opacity="0.7" />
    <circle cx="130" cy="18"  r="2"   fill="white" opacity="0.5" />
    <circle cx="200" cy="28"  r="1.5" fill="white" opacity="0.6" />
    <circle cx="280" cy="20"  r="2.5" fill="white" opacity="0.7" />
    <circle cx="340" cy="40"  r="2"   fill="white" opacity="0.5" />
    <circle cx="90"  cy="60"  r="1.5" fill="white" opacity="0.4" />
    <circle cx="320" cy="55"  r="2"   fill="white" opacity="0.5" />
    <circle cx="360" cy="25"  r="1.5" fill="white" opacity="0.6" />
    {/* floor */}
    <rect x="0" y="168" width="400" height="32" fill="#1E5252" />
    {/* plant pot */}
    <rect x="280" y="148" width="30" height="24" rx="4" fill="#4A9090" />
    <rect x="276" y="144" width="38" height="8" rx="3" fill="#3A8080" />
    {/* plant stem */}
    <rect x="293" y="110" width="4" height="38" rx="2" fill="#7DBFBF" />
    {/* plant leaves */}
    <ellipse cx="293" cy="118" rx="18" ry="10" fill="#7DBFBF" />
    <ellipse cx="284" cy="130" rx="14" ry="8" fill="#5DAAAA" transform="rotate(-20 284 130)" />
    <ellipse cx="302" cy="126" rx="14" ry="8" fill="#7DBFBF" transform="rotate(20 302 126)" />
    {/* person sitting cross-legged — body */}
    <ellipse cx="180" cy="160" rx="38" ry="14" fill="white" />
    <rect x="155" y="120" width="50" height="46" rx="18" fill="white" />
    {/* person head */}
    <circle cx="180" cy="108" r="20" fill="white" />
    {/* journal/book — open, held in lap */}
    <rect x="152" y="148" width="56" height="36" rx="6" fill="#4A9090" />
    {/* book spine */}
    <rect x="178" y="148" width="4" height="36" fill="#3A8080" />
    {/* book lines on right page */}
    <rect x="185" y="156" width="18" height="3" rx="1" fill="rgba(255,255,255,0.4)" />
    <rect x="185" y="163" width="14" height="3" rx="1" fill="rgba(255,255,255,0.4)" />
    <rect x="185" y="170" width="16" height="3" rx="1" fill="rgba(255,255,255,0.4)" />
    {/* book lines on left page */}
    <rect x="157" y="156" width="16" height="3" rx="1" fill="rgba(255,255,255,0.4)" />
    <rect x="157" y="163" width="12" height="3" rx="1" fill="rgba(255,255,255,0.4)" />
    <rect x="157" y="170" width="14" height="3" rx="1" fill="rgba(255,255,255,0.4)" />
  </svg>
);

/* CARD 4 — Family Counselling — soft pink #E8A5B8 */
const IlloFamily = () => (
  <svg
    viewBox="0 0 400 200"
    preserveAspectRatio="xMidYMid slice"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* bg */}
    <rect width="400" height="200" fill="#E8A5B8" />
    {/* ground line */}
    <rect x="0" y="170" width="400" height="30" fill="#CC7090" />
    {/* house outline behind figures */}
    <polygon points="120,60 280,60 280,165 120,165" fill="none" stroke="#F5C5D5" strokeWidth="4" />
    <polygon points="100,70 200,20 300,70" fill="none" stroke="#F5C5D5" strokeWidth="4" />
    {/* house door */}
    <rect x="182" y="128" width="36" height="36" rx="4" fill="none" stroke="#F5C5D5" strokeWidth="3" />
    {/* house window left */}
    <rect x="132" y="100" width="28" height="24" rx="3" fill="none" stroke="#F5C5D5" strokeWidth="2.5" />
    {/* house window right */}
    <rect x="240" y="100" width="28" height="24" rx="3" fill="none" stroke="#F5C5D5" strokeWidth="2.5" />
    {/* TALL adult left */}
    <circle cx="165" cy="95" r="18" fill="white" />
    <rect x="148" y="112" width="34" height="58" rx="12" fill="white" />
    {/* MEDIUM adult right */}
    <circle cx="235" cy="100" r="16" fill="white" />
    <rect x="220" y="115" width="30" height="54" rx="11" fill="white" />
    {/* CHILD center */}
    <circle cx="200" cy="118" r="12" fill="white" />
    <rect x="188" y="129" width="24" height="40" rx="9" fill="white" />
    {/* arms connecting figures */}
    {/* tall adult arm around child */}
    <rect x="178" y="128" width="18" height="10" rx="5" fill="white" />
    {/* medium adult arm around child */}
    <rect x="204" y="128" width="18" height="10" rx="5" fill="white" />
  </svg>
);

/* CARD 5 — Corporate Wellness EAP — warm tan #C4A882 */
const IlloCorporate = () => (
  <svg
    viewBox="0 0 400 200"
    preserveAspectRatio="xMidYMid slice"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* bg */}
    <rect width="400" height="200" fill="#C4A882" />
    {/* desk surface */}
    <rect x="80" y="138" width="240" height="14" rx="5" fill="#A08060" />
    {/* desk shadow */}
    <rect x="90" y="150" width="220" height="6" rx="3" fill="rgba(0,0,0,0.1)" />
    {/* desk legs */}
    <rect x="98"  y="152" width="10" height="30" rx="3" fill="#A08060" />
    <rect x="292" y="152" width="10" height="30" rx="3" fill="#A08060" />
    {/* laptop base */}
    <rect x="148" y="104" width="104" height="36" rx="6" fill="white" />
    {/* laptop hinge */}
    <rect x="152" y="100" width="96" height="8" rx="4" fill="#E8D5BC" />
    {/* laptop screen */}
    <rect x="156" y="62" width="88" height="44" rx="6" fill="white" />
    <rect x="160" y="66" width="80" height="36" rx="4" fill="#E8D5BC" />
    {/* chart line on screen — upward trend */}
    <polyline points="166,96 180,88 194,82 208,76 222,70 232,66" stroke="#C4A882" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    {/* heart at chart peak */}
    <path d="M232 60 c0-3 4-3 4 0 c0-3 4-3 4 0 c0 3-4 6-4 6 c0 0-4-3-4-6z" fill="#E8705A" />
    {/* coffee cup on desk */}
    <rect x="264" y="116" width="28" height="24" rx="6" fill="white" />
    <rect x="292" y="122" width="8" height="10" rx="4" fill="#E8D5BC" />
    {/* cup steam */}
    <path d="M272 114 Q274 108 272 102" stroke="rgba(255,255,255,0.6)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M280 114 Q282 106 280 100" stroke="rgba(255,255,255,0.6)" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* plant on desk */}
    <rect x="106" y="118" width="24" height="22" rx="4" fill="#A08060" />
    {/* plant rim */}
    <rect x="103" y="114" width="30" height="7" rx="3" fill="#8A6A48" />
    {/* plant stem */}
    <rect x="116" y="92" width="4" height="26" rx="2" fill="#7DB8A0" />
    {/* plant leaves */}
    <ellipse cx="116" cy="100" rx="14" ry="8" fill="#7DB8A0" />
    <ellipse cx="108" cy="108" rx="10" ry="6" fill="#5D9880" transform="rotate(-25 108 108)" />
    <ellipse cx="124" cy="106" rx="10" ry="6" fill="#7DB8A0" transform="rotate(20 124 106)" />
  </svg>
);

/* CARD 6 — School Wellness — sage green #7DB8A0 */
const IlloSchool = () => (
  <svg
    viewBox="0 0 400 200"
    preserveAspectRatio="xMidYMid slice"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* bg */}
    <rect width="400" height="200" fill="#7DB8A0" />
    {/* ground */}
    <rect x="0" y="164" width="400" height="36" fill="#A8D4C0" />
    {/* sun */}
    <circle cx="340" cy="38" r="22" fill="#FFEAA0" />
    {/* sun rays */}
    <rect x="338" y="8"  width="4" height="12" rx="2" fill="#FFEAA0" />
    <rect x="338" y="58" width="4" height="12" rx="2" fill="#FFEAA0" />
    <rect x="308" y="36" width="12" height="4" rx="2" fill="#FFEAA0" />
    <rect x="358" y="36" width="12" height="4" rx="2" fill="#FFEAA0" />
    <rect x="318" y="18" width="4" height="12" rx="2" fill="#FFEAA0" transform="rotate(45 318 18)" />
    <rect x="354" y="18" width="4" height="12" rx="2" fill="#FFEAA0" transform="rotate(-45 354 18)" />
    <rect x="318" y="50" width="4" height="12" rx="2" fill="#FFEAA0" transform="rotate(-45 318 50)" />
    <rect x="354" y="50" width="4" height="12" rx="2" fill="#FFEAA0" transform="rotate(45 354 50)" />
    {/* school building body */}
    <rect x="80" y="80" width="200" height="90" rx="4" fill="white" />
    {/* roof */}
    <polygon points="70,82 280,82 280,60 175,30 70,60" fill="white" />
    {/* flag pole */}
    <rect x="174" y="18" width="3" height="30" fill="#A8D4C0" />
    <polygon points="177,18 198,25 177,32" fill="#E8705A" />
    {/* door — large open */}
    <rect x="158" y="116" width="44" height="54" rx="6" fill="#7DB8A0" />
    {/* door frame */}
    <rect x="155" y="113" width="50" height="57" rx="6" fill="none" stroke="#5D9880" strokeWidth="3" />
    {/* windows */}
    <rect x="96"  y="100" width="36" height="28" rx="4" fill="#A8D4C0" />
    <rect x="228" y="100" width="36" height="28" rx="4" fill="#A8D4C0" />
    {/* window cross bars */}
    <rect x="96"  y="113" width="36" height="2" fill="white" opacity="0.6" />
    <rect x="113" y="100" width="2"  height="28" fill="white" opacity="0.6" />
    <rect x="228" y="113" width="36" height="2" fill="white" opacity="0.6" />
    <rect x="245" y="100" width="2"  height="28" fill="white" opacity="0.6" />
    {/* school label */}
    <rect x="122" y="60" width="116" height="16" rx="4" fill="#A8D4C0" />
    {/* child figure 1 — left, holding balloon */}
    <circle cx="110" cy="148" r="10" fill="white" />
    <rect x="103" y="157" width="14" height="22" rx="6" fill="white" />
    {/* balloon */}
    <circle cx="100" cy="134" r="9" fill="#FF9999" />
    <path d="M100 143 Q98 147 100 150" stroke="#FF9999" strokeWidth="1.5" fill="none" />
    <rect x="108" y="152" width="2" height="8" rx="1" fill="white" />
    {/* child figure 2 — center */}
    <circle cx="160" cy="146" r="10" fill="white" />
    <rect x="153" y="155" width="14" height="24" rx="6" fill="white" />
    {/* child figure 3 — right */}
    <circle cx="215" cy="148" r="10" fill="white" />
    <rect x="208" y="157" width="14" height="22" rx="6" fill="white" />
    {/* path/walkway to school */}
    <polygon points="130,200 270,200 250,164 150,164" fill="#8CC4AC" />
  </svg>
);

/* ══════════════════════════════════════════
   SERVICES DATA
   ══════════════════════════════════════════ */

export default function ServicesSection() {
  const { ref, isVisible } = useScrollReveal();

  const services = [
    {
      id: 'ind',
      Illustration: IlloIndividual,
      bgColor: '#7B7FB5',
      title: 'Individual Counselling',
      desc: 'Personalised one-on-one sessions grounded in evidence-based practice. Available online and in-person, in your language.',
      link: '/services/individual',
      cta: 'Book Individual Session →',
    },
    {
      id: 'cpl',
      Illustration: IlloCouple,
      bgColor: '#E8705A',
      title: 'Couple Counselling',
      desc: 'Navigate relationship challenges with structured, professional support. Build deeper understanding and lasting bonds.',
      link: '/services/couple',
      cta: 'Book Couples Session →',
    },
    {
      id: 'adol',
      Illustration: IlloAdolescent,
      bgColor: '#2D6B6B',
      title: 'Adolescent Counselling',
      desc: 'Specialised support for teens navigating identity, academic pressure, and the complexities of the digital age.',
      link: '/services/adolescent',
      cta: 'Learn About Teen Support →',
    },
    {
      id: 'fam',
      Illustration: IlloFamily,
      bgColor: '#E8A5B8',
      title: 'Family Counselling',
      desc: 'Holistic family therapy addressing systemic patterns, improving communication, and strengthening resilience for every member.',
      link: '/services/family',
      cta: 'Explore Family Counselling →',
    },
    {
      id: 'corp',
      Illustration: IlloCorporate,
      bgColor: '#C4A882',
      title: 'Corporate Wellness EAP',
      desc: 'Customised employee assistance programmes with real-time analytics for organisations of any size, anywhere.',
      link: '/programs/corporate',
      cta: 'Get Corporate Wellness →',
    },
    {
      id: 'sch',
      Illustration: IlloSchool,
      bgColor: '#7DB8A0',
      title: 'School Wellness Programme',
      desc: 'Workshops, awareness campaigns, and counsellor training that transform entire school cultures.',
      link: '/programs/school',
      cta: 'Enquire for Schools →',
    },
  ];

  return (
    <section id="services" className={styles.services} aria-labelledby="services-heading">
      <div className="container">
        <header className={`${styles.header} ${isVisible ? 'reveal visible' : 'reveal'}`} ref={ref}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot}></span>What We Offer
          </span>
          <h2 className={styles.headingPair} id="services-heading">
            <span className={styles.headingLine1}>Care that speaks</span>
            <span className={styles.headingLine2}>your language</span>
          </h2>
          <p className={styles.sub}>
            From personal counselling to enterprise wellness — evidence-based
            support rooted in cultural understanding.
          </p>
        </header>

        {/* Cards */}
        <div className={styles.grid} role="list">
          {services.map((service, index) => (
            <article
              key={service.id}
              className={styles.card}
              role="listitem"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Illustration header */}
              <div className={styles.cardIllo} aria-hidden="true">
                <service.Illustration />
              </div>

              {/* Card body */}
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>
                <Link to={service.link} className={styles.cardBtn}>
                  {service.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
