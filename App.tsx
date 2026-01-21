
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import WhatsAppButton from './components/WhatsAppButton.tsx';
import Home from './pages/Home.tsx';
import HowItWorks from './pages/HowItWorks.tsx';
import Sell from './pages/Sell.tsx';
import Buy from './pages/Buy.tsx';
import Trust from './pages/Trust.tsx';
import Contact from './pages/Contact.tsx';
import { ROUTES } from './constants.ts';

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
