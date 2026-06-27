import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';

/* ─────────────────────────────────────────
   PAGE SHELL — replaces all Placeholder pages
   ───────────────────────────────────────── */

interface RelatedLink {
  label: string;
  desc: string;
  href: string;
}

interface PageShellProps {
  breadcrumb: string;
  title: string;
  subtitle: string;
  relatedLinks: RelatedLink[];
}

function PageShell({ breadcrumb, title, subtitle, relatedLinks }: PageShellProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: '0' }}>
      {/* Hero band */}
      <div style={{
        background: '#8B1A3C',
        height: '280px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 32px',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '12px',
          color: 'rgba(255,255,255,0.6)',
          marginBottom: '20px',
          letterSpacing: '0.3px',
        }}>{breadcrumb}</p>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(32px, 5vw, 52px)',
          fontWeight: 500,
          color: '#fff',
          lineHeight: 1.1,
          marginBottom: '16px',
          maxWidth: '700px',
        }}>{title}</h1>
        <p style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '16px',
          color: 'rgba(255,255,255,0.75)',
          maxWidth: '560px',
          lineHeight: 1.6,
        }}>{subtitle}</p>
      </div>

      {/* Content area */}
      <div style={{
        background: '#fff',
        padding: '80px 32px',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <div style={{
          background: '#FAF7F4',
          border: '1px solid rgba(139,26,60,0.12)',
          borderRadius: '20px',
          padding: '52px 40px',
          marginBottom: '56px',
        }}>
          {submitted ? (
            <div>
              <div style={{
                width: '56px', height: '56px', borderRadius: '50%',
                background: 'rgba(139,26,60,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 20px',
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B1A3C" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: '18px', fontWeight: 600, color: '#150810', marginBottom: '8px' }}>
                You're on the list!
              </p>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: '#6B3A55' }}>
                We'll notify you as soon as this page goes live.
              </p>
            </div>
          ) : (
            <>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#8B1A3C" strokeWidth="1.5"
                style={{ marginBottom: '20px' }} aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '28px',
                fontWeight: 500,
                color: '#150810',
                marginBottom: '12px',
              }}>This page is being crafted</h2>
              <p style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '15px',
                color: '#6B3A55',
                lineHeight: 1.7,
                marginBottom: '32px',
                maxWidth: '440px',
                margin: '0 auto 32px',
              }}>
                We're putting the finishing touches on this section. Leave your email and we'll let you know the moment it's ready.
              </p>
              <form onSubmit={handleNotify} style={{
                display: 'flex',
                gap: '12px',
                maxWidth: '440px',
                margin: '0 auto',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  style={{
                    flex: '1 1 220px',
                    padding: '12px 20px',
                    borderRadius: '100px',
                    border: '1.5px solid rgba(139,26,60,0.2)',
                    fontFamily: 'var(--font-ui)',
                    fontSize: '14px',
                    color: '#150810',
                    background: '#fff',
                    outline: 'none',
                  }}
                />
                <button type="submit" style={{
                  padding: '12px 28px',
                  borderRadius: '100px',
                  background: '#8B1A3C',
                  color: '#fff',
                  border: 'none',
                  fontFamily: 'var(--font-ui)',
                  fontWeight: 600,
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'background 200ms ease',
                  whiteSpace: 'nowrap',
                }}>Notify Me</button>
              </form>
            </>
          )}
        </div>

        {/* Related links */}
        <h3 style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '13px',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.8px',
          color: '#6B3A55',
          marginBottom: '20px',
        }}>Explore More</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
        }}>
          {relatedLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              style={{
                display: 'block',
                background: '#FAF7F4',
                border: '1px solid rgba(139,26,60,0.12)',
                borderRadius: '14px',
                padding: '20px',
                textDecoration: 'none',
                textAlign: 'left',
                transition: 'all 200ms ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 24px rgba(139,26,60,0.08)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
              }}
            >
              <p style={{ fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: '14px', color: '#150810', marginBottom: '6px' }}>
                {link.label}
              </p>
              <p style={{ fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: '12px', color: '#6B3A55', lineHeight: 1.5 }}>
                {link.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   PAGE CONFIGURATIONS
   ───────────────────────────────────────── */

const pages: Record<string, PageShellProps> = {
  '/services/individual': {
    breadcrumb: 'Home → Services → Individual Counselling',
    title: 'Individual Counselling',
    subtitle: 'Personalised one-on-one sessions grounded in evidence-based practice — in your language, on your terms.',
    relatedLinks: [
      { label: 'Couple Counselling', desc: 'Structured support for relationships', href: '/services/couple' },
      { label: 'Adolescent Counselling', desc: 'Specialised support for teens', href: '/services/adolescent' },
      { label: 'Family Counselling', desc: 'Holistic family therapy', href: '/services/family' },
    ],
  },
  '/services/couple': {
    breadcrumb: 'Home → Services → Couple Counselling',
    title: 'Couple Counselling',
    subtitle: 'Navigate relationship challenges with structured, professional support and build deeper, lasting bonds.',
    relatedLinks: [
      { label: 'Individual Counselling', desc: 'Personalised one-on-one sessions', href: '/services/individual' },
      { label: 'Family Counselling', desc: 'Holistic family therapy', href: '/services/family' },
      { label: 'Why iSpeak', desc: 'Our values and approach', href: '/why-ispeak/why-choose' },
    ],
  },
  '/services/adolescent': {
    breadcrumb: 'Home → Services → Adolescent Counselling',
    title: 'Adolescent Counselling',
    subtitle: 'Specialised support for teens navigating identity, academic pressure, and the complexities of the digital age.',
    relatedLinks: [
      { label: 'School Wellness', desc: 'Whole-school mental health programmes', href: '/programs/school' },
      { label: 'Individual Counselling', desc: 'Personalised one-on-one sessions', href: '/services/individual' },
      { label: 'Family Counselling', desc: 'Holistic family therapy', href: '/services/family' },
    ],
  },
  '/services/family': {
    breadcrumb: 'Home → Services → Family Counselling',
    title: 'Family Counselling',
    subtitle: 'Holistic family therapy addressing systemic patterns, improving communication, and building resilience for every member.',
    relatedLinks: [
      { label: 'Couple Counselling', desc: 'Structured support for relationships', href: '/services/couple' },
      { label: 'Adolescent Counselling', desc: 'Specialised support for teens', href: '/services/adolescent' },
      { label: 'Individual Counselling', desc: 'Personalised one-on-one sessions', href: '/services/individual' },
    ],
  },
  '/programs/corporate': {
    breadcrumb: 'Home → Programs → Corporate Wellness EAP',
    title: 'Corporate Wellness EAP',
    subtitle: 'Customised employee assistance programmes with real-time analytics for organisations of any size, anywhere.',
    relatedLinks: [
      { label: 'School Wellness', desc: 'Whole-school mental health programmes', href: '/programs/school' },
      { label: 'Sports Wellness', desc: 'High-performance athlete wellbeing', href: '/programs/sports' },
      { label: 'Our Impact', desc: 'Measurable results across organisations', href: '/why-ispeak/impact' },
    ],
  },
  '/programs/school': {
    breadcrumb: 'Home → Programs → School Wellness Programme',
    title: 'School Wellness Programme',
    subtitle: 'Workshops, awareness campaigns, and counsellor training that transform entire school cultures from within.',
    relatedLinks: [
      { label: 'Adolescent Counselling', desc: 'Specialised support for teens', href: '/services/adolescent' },
      { label: 'Corporate Wellness', desc: 'Employee assistance programmes', href: '/programs/corporate' },
      { label: 'Academic Footprint', desc: 'Our university partnerships', href: '/#academic' },
    ],
  },
  '/programs/sports': {
    breadcrumb: 'Home → Programs → Sports & Athletes\' Wellness',
    title: 'Sports & Athletes\' Wellness',
    subtitle: 'Performance psychology and mental resilience coaching tailored for competitive athletes and sports organisations.',
    relatedLinks: [
      { label: 'Corporate Wellness', desc: 'Employee assistance programmes', href: '/programs/corporate' },
      { label: 'Individual Counselling', desc: 'Personalised one-on-one sessions', href: '/services/individual' },
      { label: 'Why iSpeak', desc: 'Our clinical approach', href: '/why-ispeak/why-choose' },
    ],
  },
  '/why-ispeak/why-choose': {
    breadcrumb: 'Home → Why iSpeak → Why Choose Us',
    title: 'Why Choose iSpeak',
    subtitle: 'Culturally-grounded, clinically-rigorous, and globally accessible — mental health care that truly understands you.',
    relatedLinks: [
      { label: 'Our Values', desc: 'The four pillars we live by', href: '/why-ispeak/values' },
      { label: 'Our Impact', desc: 'Measurable outcomes and reach', href: '/why-ispeak/impact' },
      { label: 'Our Beliefs', desc: 'The principles behind our practice', href: '/why-ispeak/beliefs' },
    ],
  },
  '/why-ispeak/values': {
    breadcrumb: 'Home → Why iSpeak → Values & Purpose',
    title: 'Values & Purpose',
    subtitle: 'Sabhyata, Sanskriti, Samvedana, Seva — four Sanskrit values that guide every interaction we have.',
    relatedLinks: [
      { label: 'Why Choose iSpeak', desc: 'What sets us apart', href: '/why-ispeak/why-choose' },
      { label: 'Our Beliefs', desc: 'The principles behind our practice', href: '/why-ispeak/beliefs' },
      { label: 'Our Impact', desc: 'Measurable outcomes and reach', href: '/why-ispeak/impact' },
    ],
  },
  '/why-ispeak/impact': {
    breadcrumb: 'Home → Why iSpeak → Our Impact',
    title: 'Our Impact',
    subtitle: 'From 50,000+ individuals served to 11+ university partnerships — our outcomes speak for themselves.',
    relatedLinks: [
      { label: 'Why Choose iSpeak', desc: 'What sets us apart', href: '/why-ispeak/why-choose' },
      { label: 'Corporate Wellness', desc: 'Measurable EAP results', href: '/programs/corporate' },
      { label: 'Academic Footprint', desc: 'Our university partnerships', href: '/#academic' },
    ],
  },
  '/why-ispeak/beliefs': {
    breadcrumb: 'Home → Why iSpeak → Our Beliefs',
    title: 'Our Beliefs',
    subtitle: 'We believe mental health is universal, culture is a strength, and every story deserves to be heard with dignity.',
    relatedLinks: [
      { label: 'Our Values', desc: 'The four pillars we live by', href: '/why-ispeak/values' },
      { label: 'Why Choose iSpeak', desc: 'What sets us apart', href: '/why-ispeak/why-choose' },
      { label: 'Our Purpose', desc: 'Sankalp, Samanvay, Samarthya', href: '/#sankalpas' },
    ],
  },
  '/resources/blog': {
    breadcrumb: 'Home → Resources → Blog',
    title: 'iSpeak Blog',
    subtitle: 'Insights on mental health, culture, relationships, and well-being — written by our clinical team.',
    relatedLinks: [
      { label: 'Self-Help Resources', desc: 'Tools and guides for your journey', href: '/resources/self-help' },
      { label: 'Events & Webinars', desc: 'Join our live sessions', href: '/resources/events' },
      { label: 'Contact Us', desc: 'Speak to our team directly', href: '/contact' },
    ],
  },
  '/resources/self-help': {
    breadcrumb: 'Home → Resources → Self-Help Resources',
    title: 'Self-Help Resources',
    subtitle: 'Guided tools, worksheets, and practices to support your mental well-being between sessions.',
    relatedLinks: [
      { label: 'Blog', desc: 'Insights from our clinical team', href: '/resources/blog' },
      { label: 'Events & Webinars', desc: 'Join our live sessions', href: '/resources/events' },
      { label: 'Individual Counselling', desc: 'Professional support when you need it', href: '/services/individual' },
    ],
  },
  '/resources/events': {
    breadcrumb: 'Home → Resources → Events & Webinars',
    title: 'Events & Webinars',
    subtitle: 'Live workshops, community sessions, and expert-led webinars — free and accessible to everyone.',
    relatedLinks: [
      { label: 'Blog', desc: 'Insights from our clinical team', href: '/resources/blog' },
      { label: 'Self-Help Resources', desc: 'Tools for your wellbeing journey', href: '/resources/self-help' },
      { label: 'School Wellness', desc: 'Wellness programmes for institutions', href: '/programs/school' },
    ],
  },
};

/* ─────────────────────────────────────────
   WHATSAPP FLOAT
   ───────────────────────────────────────── */

const WhatsAppFloat = () => (
  <a
    href="https://wa.me/919711240950"
    target="_blank"
    rel="noreferrer"
    id="whatsapp-float"
    aria-label="Chat with us on WhatsApp"
    style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: '#25D366',
      color: '#fff',
      borderRadius: '100px',
      padding: '12px 20px',
      boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: '14px',
      textDecoration: 'none',
      zIndex: 9999,
      transition: 'transform 200ms ease, box-shadow 200ms ease',
    }}
    onMouseEnter={e => {
      (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
      (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.20)';
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
      (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
    }}
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
    Chat with us
  </a>
);

/* ─────────────────────────────────────────
   APP
   ───────────────────────────────────────── */

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Services */}
          <Route path="/services/individual" element={<PageShell {...pages['/services/individual']} />} />
          <Route path="/services/couple" element={<PageShell {...pages['/services/couple']} />} />
          <Route path="/services/adolescent" element={<PageShell {...pages['/services/adolescent']} />} />
          <Route path="/services/family" element={<PageShell {...pages['/services/family']} />} />

          {/* Programs */}
          <Route path="/programs/corporate" element={<PageShell {...pages['/programs/corporate']} />} />
          <Route path="/programs/school" element={<PageShell {...pages['/programs/school']} />} />
          <Route path="/programs/sports" element={<PageShell {...pages['/programs/sports']} />} />

          {/* Why iSpeak */}
          <Route path="/why-ispeak/why-choose" element={<PageShell {...pages['/why-ispeak/why-choose']} />} />
          <Route path="/why-ispeak/values" element={<PageShell {...pages['/why-ispeak/values']} />} />
          <Route path="/why-ispeak/impact" element={<PageShell {...pages['/why-ispeak/impact']} />} />
          <Route path="/why-ispeak/beliefs" element={<PageShell {...pages['/why-ispeak/beliefs']} />} />

          {/* Resources */}
          <Route path="/resources/blog" element={<PageShell {...pages['/resources/blog']} />} />
          <Route path="/resources/self-help" element={<PageShell {...pages['/resources/self-help']} />} />
          <Route path="/resources/events" element={<PageShell {...pages['/resources/events']} />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </Router>
  );
}

export default App;
