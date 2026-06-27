import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';

// Placeholder for inner pages
const Placeholder = ({ title }: { title: string }) => (
  <div style={{ paddingTop: '100px', paddingBottom: '100px', textAlign: 'center', minHeight: '60vh' }}>
    <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '36px' }}>{title}</h1>
    <p style={{ marginTop: '20px' }}>Coming soon in Phase 2.</p>
  </div>
);

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

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Services */}
          <Route path="/services/individual" element={<Placeholder title="Individual Counselling" />} />
          <Route path="/services/couple" element={<Placeholder title="Couple Counselling" />} />
          <Route path="/services/adolescent" element={<Placeholder title="Adolescent Counselling" />} />
          <Route path="/services/family" element={<Placeholder title="Family Counselling" />} />
          
          {/* Programs */}
          <Route path="/programs/corporate" element={<Placeholder title="Corporate Wellness" />} />
          <Route path="/programs/school" element={<Placeholder title="School Wellness" />} />
          <Route path="/programs/sports" element={<Placeholder title="Sports Athletes' Wellness" />} />
          
          {/* Why iSpeak */}
          <Route path="/why-ispeak/why-choose" element={<Placeholder title="Why Choose iSpeak" />} />
          <Route path="/why-ispeak/values" element={<Placeholder title="Values & Purpose" />} />
          <Route path="/why-ispeak/impact" element={<Placeholder title="Our Impact" />} />
          <Route path="/why-ispeak/beliefs" element={<Placeholder title="Our Beliefs" />} />
          
          {/* Resources & Contact */}
          <Route path="/resources/blog" element={<Placeholder title="Blog" />} />
          <Route path="/resources/self-help" element={<Placeholder title="Self Help Resources" />} />
          <Route path="/resources/events" element={<Placeholder title="Events & Webinars" />} />
          
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </Router>
  );
}

export default App;
