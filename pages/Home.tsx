
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ShieldCheck, UserCheck, MessageSquare } from 'lucide-react';
import { ROUTES } from '../constants.ts';
import WhatsAppForm from '../components/WhatsAppForm.tsx';
import Testimonials from '../components/Testimonials.tsx';

const Home: React.FC = () => {
  const trustPoints = [
    { icon: <UserCheck className="w-5 h-5 text-blue-600" />, text: "Verified sellers and products" },
    { icon: <ShieldCheck className="w-5 h-5 text-blue-600" />, text: "No inventory handover" },
    { icon: <CheckCircle className="w-5 h-5 text-blue-600" />, text: "Secure deal coordination" },
    { icon: <MessageSquare className="w-5 h-5 text-blue-600" />, text: "Human support via WhatsApp" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            DealBridge — Connecting <span className="text-blue-600">Verified Sellers</span> to Serious Buyers
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            We help you sell genuine products without giving up your inventory. We verify, promote, and connect you to real buyers.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
            <Link 
              to={ROUTES.SELL} 
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition-shadow shadow-lg hover:shadow-xl"
            >
              Sell on DealBridge
            </Link>
            <Link 
              to={ROUTES.BUY} 
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-lg font-bold text-lg hover:bg-slate-50 transition-colors"
            >
              Buy Safely on DealBridge
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {trustPoints.map((point, idx) => (
              <div key={idx} className="flex items-center space-x-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                {point.icon}
                <span className="text-sm font-semibold text-slate-700">{point.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section (Social Proof below Hero) */}
      <Testimonials />

      {/* Form Section */}
      <section className="py-16 px-4 md:px-6 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Start Your Transaction</h2>
            <p className="text-slate-600">Fill out the form below and we will connect with you immediately via WhatsApp.</p>
          </div>
          <WhatsAppForm />
        </div>
      </section>
    </div>
  );
};

export default Home;
