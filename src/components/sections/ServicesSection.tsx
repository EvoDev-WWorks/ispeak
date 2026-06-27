import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ServicesSection.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

type Category = 'all' | 'individual' | 'couples' | 'organisations' | 'youth';

/* ── Service Icons ── */
const IndividualIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#8B1A3C" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const CoupleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#8B1A3C" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
  </svg>
);

const AdolescentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#8B1A3C" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2a5 5 0 015 5c0 3-2.5 5-5 8-2.5-3-5-5-5-8a5 5 0 015-5z"/>
  </svg>
);

const FamilyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#8B1A3C" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const CorporateIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#8B1A3C" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
  </svg>
);

const SchoolIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#8B1A3C" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);

export default function ServicesSection() {
  const { ref, isVisible } = useScrollReveal();
  const [activeTab, setActiveTab] = useState<Category>('all');

  const services = [
    {
      id: 'ind',
      category: 'individual',
      Icon: IndividualIcon,
      title: 'Individual Counselling',
      desc: 'Personalised one-on-one sessions grounded in evidence-based practice. Available online and in-person, in your language.',
      link: '/services/individual'
    },
    {
      id: 'cpl',
      category: 'couples',
      Icon: CoupleIcon,
      title: 'Couple Counselling',
      desc: 'Navigate relationship challenges with structured, professional support. Build deeper understanding and lasting bonds.',
      link: '/services/couple'
    },
    {
      id: 'adol',
      category: 'youth',
      Icon: AdolescentIcon,
      title: 'Adolescent Counselling',
      desc: 'Specialised support for teens navigating identity, academic pressure, and the complexities of the digital age.',
      link: '/services/adolescent'
    },
    {
      id: 'fam',
      category: 'couples',
      Icon: FamilyIcon,
      title: 'Family Counselling',
      desc: 'Holistic family therapy addressing systemic patterns, improving communication, and strengthening resilience for every member.',
      link: '/services/family'
    },
    {
      id: 'corp',
      category: 'organisations',
      Icon: CorporateIcon,
      title: 'Corporate Wellness EAP',
      desc: 'Customised employee assistance programmes with real-time analytics for organisations of any size, anywhere.',
      link: '/programs/corporate'
    },
    {
      id: 'sch',
      category: 'youth',
      Icon: SchoolIcon,
      title: 'School Wellness Programme',
      desc: 'Workshops, awareness campaigns, and counsellor training that transform entire school cultures.',
      link: '/programs/school'
    }
  ];

  const filteredServices = activeTab === 'all'
    ? services
    : services.filter(s => s.category === activeTab);

  return (
    <section id="services" className={styles.services} aria-labelledby="services-heading">
      <div className="container">
        <header className={`${styles.header} ${isVisible ? 'reveal visible' : 'reveal'}`} ref={ref}>
          <span className={styles.eyebrow}><span className={styles.eyebrowDot}></span>What We Offer</span>
          <h2 className={styles.headingPair} id="services-heading">
            <span className={styles.headingLine1}>Care that speaks</span>
            <span className={styles.headingLine2}>your language</span>
          </h2>
          <p className={styles.sub}>
            From personal counselling to enterprise wellness — evidence-based
            support rooted in cultural understanding.
          </p>
        </header>

        {/* Tabs */}
        <div className={styles.tabs} role="tablist" aria-label="Service categories">
          <button className={`${styles.tab} ${activeTab === 'all' ? styles.isActive : ''}`} onClick={() => setActiveTab('all')} role="tab">For All</button>
          <button className={`${styles.tab} ${activeTab === 'individual' ? styles.isActive : ''}`} onClick={() => setActiveTab('individual')} role="tab">For Individuals</button>
          <button className={`${styles.tab} ${activeTab === 'couples' ? styles.isActive : ''}`} onClick={() => setActiveTab('couples')} role="tab">Couples & Families</button>
          <button className={`${styles.tab} ${activeTab === 'organisations' ? styles.isActive : ''}`} onClick={() => setActiveTab('organisations')} role="tab">For Organisations</button>
          <button className={`${styles.tab} ${activeTab === 'youth' ? styles.isActive : ''}`} onClick={() => setActiveTab('youth')} role="tab">Youth & Schools</button>
        </div>

        {/* Cards */}
        <div className={styles.grid} role="tabpanel">
          {filteredServices.map((service, index) => (
            <article
              key={service.id}
              className={styles.card}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardDots}><span className={styles.cardDot}></span><span className={styles.cardDot}></span></div>
              <div className={styles.cardIcon} aria-hidden="true">
                <service.Icon />
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.desc}</p>
              <Link to={service.link} className={styles.cardLink}>Learn more →</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
