import { Link } from 'react-router-dom';
import styles from './MegaMenu.module.css';

type NavKey = 'services' | 'programs' | 'why' | 'resources' | 'about' | null;

interface MegaMenuProps {
  id: NavKey;
  openId: NavKey;
  setOpen: (id: NavKey) => void;
  keepOpen: () => void;
  hide: () => void;
}

import React from 'react';

const icons: Record<string, React.ReactNode> = {
  brain: <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>,
  users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
  user: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
  heart: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>,
  home: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>,
  briefcase: <><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></>,
  book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></>,
  activity: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>,
  star: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>,
  diamond: <><path d="M6 3h12l4 6-10 13L2 9l4-6z"/><path d="M11 3v19"/><path d="M13 3v19"/></>,
  bar: <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>,
  edit: <><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></>,
  help: <><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><circle cx="12" cy="17" r="1"/></>,
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>,
  mail: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>
};

const SvgIcon = ({ name }: { name: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {icons[name] || icons.star}
  </svg>
);

const ServiceRow = ({ to, icon, title, desc, onClick }: any) => (
  <Link to={to} className={styles.megaRow} onClick={onClick}>
    <span className={styles.megaIcon}><SvgIcon name={icon} /></span>
    <div>
      <div className={styles.megaTitle}>{title}</div>
      {desc && <div className={styles.megaDesc}>{desc}</div>}
    </div>
  </Link>
);

export default function MegaMenu({ id, openId, setOpen, keepOpen, hide }: MegaMenuProps) {
  if (openId !== id) return null;

  const close = () => setOpen(null);

  return (
    <div className={styles.megaWrap} onMouseEnter={keepOpen} onMouseLeave={hide}>
      <div className={styles.megaInner}>
        
        {id === 'services' && (
          <>
            <div className={styles.megaCol}>
              <p className={styles.megaColHead}>Our Services</p>
              <ServiceRow to="/services/individual" icon="user" title="Individual Counselling" desc="One-on-one therapy for personal growth" onClick={close} />
              <ServiceRow to="/services/couple"     icon="heart" title="Couple Counselling"     desc="Evidence-based relationship support" onClick={close} />
              <ServiceRow to="/services/adolescent" icon="activity" title="Adolescent Counselling" desc="Specialised care for teens & young adults" onClick={close} />
              <ServiceRow to="/services/family"     icon="users" title="Family Counselling"     desc="Strengthen bonds & resolve patterns" onClick={close} />
            </div>
            
            <div className={styles.megaCol}>
              <p className={styles.megaColHead}>Who We Support</p>
              <ServiceRow to="/services/individual" icon="user" title="Individuals" onClick={close} />
              <ServiceRow to="/services/family"     icon="users" title="Couples & Families" onClick={close} />
              <ServiceRow to="/programs/corporate"  icon="briefcase" title="Organisations" onClick={close} />
              <ServiceRow to="/programs/school"     icon="book" title="Schools & Colleges" onClick={close} />
              <ServiceRow to="/programs/sports"     icon="activity" title="Sports Athletes" onClick={close} />
            </div>

            <div className={styles.megaFeatCol}>
              <p className={styles.megaColHead}>Featured Solutions</p>
              <div className={styles.megaFeatRow}>
                <Link to="/contact" className={`${styles.megaFeat} ${styles.megaFeatDark}`} onClick={close}>
                  <p className={styles.megaFeatTitle}>Start your journey</p>
                  <p className={styles.megaFeatSub}>Available online & in-person</p>
                  <span className={styles.megaFeatCta}>Book a Session →</span>
                </Link>
                <Link to="/programs/corporate" className={`${styles.megaFeat} ${styles.megaFeatBlue}`} onClick={close}>
                  <p className={styles.megaFeatTitle}>For Organisations</p>
                  <p className={styles.megaFeatSub}>Corporate wellness & EAP</p>
                  <span className={styles.megaFeatCta}>Request a Quote →</span>
                </Link>
              </div>
              {/* Stat bar fills the empty space below cards */}
              <div className={styles.megaStatBar}>
                <span className={styles.megaStatStar}>★</span>
                <span><strong>4.8</strong> from 1,200+ clients &nbsp;·&nbsp; Est. Gurugram, 2020</span>
              </div>
            </div>
          </>
        )}

        {id === 'programs' && (
          <>
            <div className={styles.megaCol}>
              <p className={styles.megaColHead}>Our Programs</p>
              <ServiceRow to="/programs/corporate" icon="briefcase" title="Corporate Wellness Programs"  desc="Customised EAP & workforce mental health" onClick={close} />
              <ServiceRow to="/programs/school"    icon="book" title="School Wellness Programs"     desc="From awareness to counsellor training" onClick={close} />
              <ServiceRow to="/programs/sports"    icon="activity" title="Sports Athletes' Wellness Program" desc="Performance psychology & resilience" onClick={close} />
            </div>
            <div className={styles.megaFeatCol}>
              <p className={styles.megaColHead}>Featured</p>
              <Link to="/programs/corporate" className={`${styles.megaFeat} ${styles.megaFeatDark}`} onClick={close}>
                <p className={styles.megaFeatTitle}>Wellness for every space</p>
                <p className={styles.megaFeatSub}>Schools, offices, fields — iSpeak goes where you are.</p>
                <span className={styles.megaFeatCta}>Explore Programs →</span>
              </Link>
            </div>
          </>
        )}

        {id === 'why' && (
          <>
            <div className={styles.megaCol}>
              <p className={styles.megaColHead}>Why iSpeak</p>
              <ServiceRow to="/why-ispeak/why-choose" icon="star" title="Why choose iSpeak" desc="What makes us different" onClick={close} />
              <ServiceRow to="/why-ispeak/values"     icon="diamond" title="Our Values & Purpose" desc="The 4 S's + 3 Sankalpas" onClick={close} />
              <ServiceRow to="/why-ispeak/impact"     icon="bar" title="Our Impact" desc="Numbers, stories & footprint" onClick={close} />
              <ServiceRow to="/why-ispeak/beliefs"    icon="heart" title="Our Beliefs" desc="The foundation of our practice" onClick={close} />
              <ServiceRow to="/contact"               icon="mail" title="Request a Quote for our Services" desc="Get a tailored wellness plan" onClick={close} />
            </div>
            <div className={styles.megaFeatCol}>
               <p className={styles.megaColHead}>Our Legacy</p>
              <div className={`${styles.megaFeat} ${styles.megaFeatDark}`}>
                <p className={styles.megaFeatTitle}>Running on emotions since 2020</p>
                <p className={styles.megaFeatSub}>6+ years of transformation globally.</p>
                <Link to="/why-ispeak/impact" className={styles.megaFeatCta} onClick={close}>See our impact →</Link>
              </div>
            </div>
          </>
        )}

        {id === 'resources' && (
          <>
            <div className={styles.megaCol}>
              <p className={styles.megaColHead}>Resources</p>
              <ServiceRow to="/resources/blog"      icon="edit" title="Blog" desc="Articles on mental health" onClick={close} />
              <ServiceRow to="/resources/self-help" icon="book" title="Self Help Resources" desc="Worksheets & guides" onClick={close} />
              <ServiceRow to="/resources/events"    icon="activity" title="Events & Webinars" desc="Upcoming live sessions" onClick={close} />
              <ServiceRow to="/resources/faqs"      icon="help" title="FAQs" desc="Your questions answered" onClick={close} />
            </div>
            <div className={styles.megaFeatCol}>
              <p className={styles.megaColHead}>Featured Article</p>
              <div className={`${styles.megaFeat} ${styles.megaFeatBlush}`}>
                <p className={`${styles.megaFeatTitle} ${styles.dark}`}>'Delulu is the only Solulu'</p>
                <p className={`${styles.megaFeatSub} ${styles.muted}`}>Gargi Dagar, Founder — Indian Express</p>
                <Link to="/resources/blog" className={`${styles.megaFeatCta} ${styles.ctaPink}`} onClick={close}>Read →</Link>
              </div>
            </div>
          </>
        )}

        {id === 'about' && (
          <>
            <div className={styles.megaCol}>
              <p className={styles.megaColHead}>Company</p>
              <ServiceRow to="/about"   icon="users" title="About us" desc="Our story, mission & team" onClick={close} />
              <ServiceRow to="/careers" icon="star" title="Careers" desc="Join our growing team" onClick={close} />
              <ServiceRow to="/press"   icon="edit" title="Press" desc="iSpeak in the news" onClick={close} />
              <ServiceRow to="/contact" icon="phone" title="Contact us" desc="Get in touch with our team" onClick={close} />
            </div>
            <div className={styles.megaFeatCol}>
              <p className={styles.megaColHead}>Our Mission</p>
              <div className={`${styles.megaFeat} ${styles.megaFeatBlush}`}>
                <p className={`${styles.megaFeatTitle} ${styles.dark}`}>"Curious Minds. Compassionate Practice."</p>
                <p className={`${styles.megaFeatSub} ${styles.muted}`}>iSpeak Team · Est. 2020</p>
                <Link to="/about" className={`${styles.megaFeatCta} ${styles.ctaPink}`} onClick={close}>Meet us →</Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
