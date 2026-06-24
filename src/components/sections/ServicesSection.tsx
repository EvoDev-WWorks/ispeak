import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ServicesSection.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

type Category = 'all' | 'individual' | 'couples' | 'organisations' | 'youth';

export default function ServicesSection() {
  const { ref, isVisible } = useScrollReveal();
  const [activeTab, setActiveTab] = useState<Category>('all');

  const services = [
    {
      id: 'ind',
      category: 'individual',
      icon: '🧠',
      title: 'Individual Counselling',
      desc: 'Personalised one-on-one sessions grounded in evidence-based practice. Available online and in-person, in your language.',
      link: '/services/individual'
    },
    {
      id: 'cpl',
      category: 'couples',
      icon: '💑',
      title: 'Couple Counselling',
      desc: 'Navigate relationship challenges with structured, professional support. Build deeper understanding and lasting bonds.',
      link: '/services/couple'
    },
    {
      id: 'adol',
      category: 'youth',
      icon: '🌱',
      title: 'Adolescent Counselling',
      desc: 'Specialised support for teens navigating identity, academic pressure, and the complexities of the digital age.',
      link: '/services/adolescent'
    },
    {
      id: 'fam',
      category: 'couples',
      icon: '👨‍👩‍👧',
      title: 'Family Counselling',
      desc: 'Holistic family therapy addressing systemic patterns, improving communication, and strengthening resilience for every member.',
      link: '/services/family'
    },
    {
      id: 'corp',
      category: 'organisations',
      icon: '🏢',
      title: 'Corporate Wellness EAP',
      desc: 'Customised employee assistance programmes with real-time analytics for organisations of any size, anywhere.',
      link: '/programs/corporate'
    },
    {
      id: 'sch',
      category: 'youth',
      icon: '🏫',
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
              <div className={styles.cardIcon} aria-hidden="true">{service.icon}</div>
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
