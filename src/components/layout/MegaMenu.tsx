import { Link, useNavigate } from 'react-router-dom';
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
  bookOpen: <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></>,
  activity: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>,
  star: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>,
  diamond: <><path d="M6 3h12l4 6-10 13L2 9l4-6z"/><path d="M11 3v19"/><path d="M13 3v19"/></>,
  bar: <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>,
  edit: <><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></>,
  help: <><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><circle cx="12" cy="17" r="1"/></>,
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>,
  mail: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>,
  newspaper: <><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></>,
  layers: <><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></>,
  target: <><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></>,
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

  const navigate = useNavigate();
  const close = () => setOpen(null);

  // Navigate to a hash URL — the target page reads location.hash
  // on mount to open the correct tab directly. No scroll needed.
  const handleAnchorNav = (path: string, anchorId: string) => {
    close();
    navigate(`${path}#${anchorId}`);
  };


  return (
    <div className={styles.megaWrap} onMouseEnter={keepOpen} onMouseLeave={hide}>
      <div className={styles.megaInner}>
        
        {/* ── CHANGE 1: Removed "Who We Support" column; now 2 columns ── */}
        {id === 'services' && (
          <>
          <div className={styles.megaCol}>
              <p className={styles.megaColHead}>Our Services</p>
              <button className={styles.megaRow} onClick={() => handleAnchorNav('/services', 'individual-counselling')}>
                <span className={styles.megaIcon}><SvgIcon name="user" /></span>
                <div>
                  <div className={styles.megaTitle}>Individual Counselling</div>
                  <div className={styles.megaDesc}>One-on-one therapy for personal growth</div>
                </div>
              </button>
              <button className={styles.megaRow} onClick={() => handleAnchorNav('/services', 'couple-counselling')}>
                <span className={styles.megaIcon}><SvgIcon name="heart" /></span>
                <div>
                  <div className={styles.megaTitle}>Couple Counselling</div>
                  <div className={styles.megaDesc}>Evidence-based relationship support</div>
                </div>
              </button>
              <button className={styles.megaRow} onClick={() => handleAnchorNav('/services', 'adolescent-counselling')}>
                <span className={styles.megaIcon}><SvgIcon name="activity" /></span>
                <div>
                  <div className={styles.megaTitle}>Adolescent Counselling</div>
                  <div className={styles.megaDesc}>Specialised care for teens &amp; young adults</div>
                </div>
              </button>
              <button className={styles.megaRow} onClick={() => handleAnchorNav('/services', 'family-counselling')}>
                <span className={styles.megaIcon}><SvgIcon name="users" /></span>
                <div>
                  <div className={styles.megaTitle}>Family Counselling</div>
                  <div className={styles.megaDesc}>Strengthen bonds &amp; resolve patterns</div>
                </div>
              </button>
            </div>

            {/* ── CHANGE 2: Updated "For Organisations" card ── */}
            <div className={styles.megaFeatCol}>
              <p className={styles.megaColHead}>Featured Solutions</p>
              <div className={styles.megaFeatRow}>
                <Link to="/contact" className={`${styles.megaFeat} ${styles.megaFeatDark}`} onClick={close}>
                  <p className={styles.megaFeatTitle}>Start your journey</p>
                  <p className={styles.megaFeatSub}>Available online &amp; in-person</p>
                  <span className={styles.megaFeatCta}>Book a Session →</span>
                </Link>
                <button className={`${styles.megaFeat} ${styles.megaFeatBlue}`} onClick={() => handleAnchorNav('/programs', 'corporate-wellness')} style={{ textAlign: 'left', cursor: 'pointer', border: 'none' }}>
                  <p className={styles.megaFeatTitle}>For Organisations</p>
                  <p className={styles.megaFeatSub}>Tailored packages for teams, schools &amp; institutions</p>
                  <span className={styles.megaFeatCta}>Contact for Packages →</span>
                </button>
              </div>
              {/* Stat bar fills the empty space below cards */}
              <div className={styles.megaStatBar}>
                <span className={styles.megaStatStar}>★</span>
                <span><strong>4.8</strong> from 1,200+ clients &nbsp;·&nbsp; Est. Gurugram, 2020</span>
              </div>
            </div>
          </>
        )}

        {/* ── CHANGE 3: Added College & NGO Partnerships and Competitive Exam Aspirants ── */}
        {id === 'programs' && (
          <>
          <div className={styles.megaCol}>
              <p className={styles.megaColHead}>Our Programs</p>
              <button className={styles.megaRow} onClick={() => handleAnchorNav('/programs', 'corporate-wellness')}>
                <span className={styles.megaIcon}><SvgIcon name="briefcase" /></span>
                <div>
                  <div className={styles.megaTitle}>Corporate Wellness Programs</div>
                  <div className={styles.megaDesc}>Customised EAP &amp; workforce mental health</div>
                </div>
              </button>
              <button className={styles.megaRow} onClick={() => handleAnchorNav('/programs', 'school-wellness')}>
                <span className={styles.megaIcon}><SvgIcon name="book" /></span>
                <div>
                  <div className={styles.megaTitle}>School Wellness Programs</div>
                  <div className={styles.megaDesc}>From awareness to counsellor training</div>
                </div>
              </button>
              <button className={styles.megaRow} onClick={() => handleAnchorNav('/programs', 'college-ngo-partnerships')}>
                <span className={styles.megaIcon}><SvgIcon name="users" /></span>
                <div>
                  <div className={styles.megaTitle}>College &amp; NGO Partnerships</div>
                  <div className={styles.megaDesc}>Community mental health at scale</div>
                </div>
              </button>
              <button className={styles.megaRow} onClick={() => handleAnchorNav('/programs', 'exam-aspirants')}>
                <span className={styles.megaIcon}><SvgIcon name="target" /></span>
                <div>
                  <div className={styles.megaTitle}>Competitive Exam Aspirants</div>
                  <div className={styles.megaDesc}>Stress &amp; performance support for students</div>
                </div>
              </button>
            </div>
            <div className={styles.megaFeatCol}>
              <p className={styles.megaColHead}>Featured</p>
              <button className={`${styles.megaFeat} ${styles.megaFeatDark}`} onClick={() => handleAnchorNav('/programs', 'corporate-wellness')} style={{ textAlign: 'left', cursor: 'pointer', border: 'none', width: '100%' }}>
                <p className={styles.megaFeatTitle}>Wellness for every space</p>
                <p className={styles.megaFeatSub}>Schools, offices, fields — iSpeak goes where you are.</p>
                <span className={styles.megaFeatCta}>Explore Programs →</span>
              </button>
            </div>
          </>
        )}

        {/* ── CHANGE 4: "Our Beliefs" renamed to "Our Believers"
             CHANGE 5: Added Newsletter and Annual Report buttons to Legacy card ── */}
        {id === 'why' && (
          <>
            <div className={styles.megaCol}>
              <p className={styles.megaColHead}>Why iSpeak</p>
              <ServiceRow to="/why-ispeak/why-choose" icon="star" title="Why choose iSpeak" desc="What makes us different" onClick={close} />
              <ServiceRow to="/why-ispeak/values"     icon="diamond" title="Our Values & Purpose" desc="The 4 S's + 3 Sankalpas" onClick={close} />
              <ServiceRow to="/why-ispeak/impact"     icon="bar" title="Our Impact" desc="Numbers, stories & footprint" onClick={close} />
              <ServiceRow to="/why-ispeak/beliefs"    icon="heart" title="Our Believers" desc="The foundation of our practice" onClick={close} />
              <ServiceRow to="/contact"               icon="mail" title="Request a Quote for our Services" desc="Get a tailored wellness plan" onClick={close} />
            </div>
            <div className={styles.megaFeatCol}>
               <p className={styles.megaColHead}>Our Legacy</p>
              <div className={`${styles.megaFeat} ${styles.megaFeatDark}`}>
                <p className={styles.megaFeatTitle}>Running on emotions since 2020</p>
                <p className={styles.megaFeatSub}>6+ years of transformation globally.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '4px' }}>
                  <Link to="/why-ispeak/impact" className={styles.megaFeatCta} onClick={close}>See our impact →</Link>
                  <Link to="/newsletter" className={styles.megaFeatCta} onClick={close}>Newsletter →</Link>
                  <Link to="/annual-report" className={styles.megaFeatCta} onClick={close}>Annual Report →</Link>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ── CHANGE 6: Added "Press" at the top of Resources ── */}
        {id === 'resources' && (
          <>
            <div className={styles.megaCol}>
              <p className={styles.megaColHead}>Resources</p>
              <ServiceRow to="/resources/press"     icon="newspaper" title="Press" desc="Media coverage & press kit" onClick={close} />
              <ServiceRow to="/resources/blog"      icon="edit" title="Blog" desc="Articles on mental health" onClick={close} />
              <ServiceRow to="/resources/self-help" icon="book" title="Self Help Resources" desc="Worksheets & guides" onClick={close} />
              <ServiceRow to="/resources/events"    icon="activity" title="Events & Webinars" desc="Upcoming live sessions" onClick={close} />
              <ServiceRow to="/resources/faqs"      icon="help" title="FAQs" desc="Your questions answered" onClick={close} />
            </div>
            <div className={styles.megaFeatCol}>
              <p className={styles.megaColHead}>Featured Article</p>
              <div className={`${styles.megaFeat} ${styles.megaFeatBlush}`}>
                <p className={`${styles.megaFeatTitle} ${styles.dark}`}>'Delulu is the only Solulu'</p>
                <p className={`${styles.megaFeatSub} ${styles.muted}`}>Gargi Dagar, Founder, Indian Express</p>
                <Link to="/resources/blog" className={`${styles.megaFeatCta} ${styles.ctaPink}`} onClick={close}>Read →</Link>
              </div>
            </div>
          </>
        )}

        {/* ── CHANGE 7: "About" replaced with "Lifelong Legacy" — Projects + Careers only, no featured card ── */}
        {id === 'about' && (
          <>
            <div className={styles.megaCol}>
              <p className={styles.megaColHead}>Lifelong Legacy</p>
              <ServiceRow to="/projects"  icon="layers"    title="Projects"           desc="Initiatives driving mental health change" onClick={close} />
              <ServiceRow to="/careers"   icon="briefcase" title="Careers with iSpeak" desc="Join our team of change-makers" onClick={close} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
