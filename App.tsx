
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Sell from './pages/Sell';
import Buy from './pages/Buy';
import Trust from './pages/Trust';
import Contact from './pages/Contact';
import { ROUTES } from './constants';

const App: React.FC = () => {
  const location = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.HOW_IT_WORKS} element={<HowItWorks />} />
          <Route path={ROUTES.SELL} element={<Sell />} />
          <Route path={ROUTES.BUY} element={<Buy />} />
          <Route path={ROUTES.TRUST} element={<Trust />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
