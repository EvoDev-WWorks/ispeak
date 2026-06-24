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
    </Router>
  );
}

export default App;
