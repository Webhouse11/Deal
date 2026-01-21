
import React from 'react';
import { ShieldCheck, MessageCircle, Star } from 'lucide-react';
import WhatsAppForm from '../components/WhatsAppForm.tsx';

const Buy: React.FC = () => {
  const benefits = [
    { title: "Verified Products", text: "Every item on our platform has been vetted for quality and authenticity." },
    { title: "Trusted Middleman", text: "We facilitate communication to ensure both parties are protected." },
    { title: "Clear Communication", text: "No more confusing chats. We provide professional deal coordination." },
    { title: "Safe Deal Process", text: "Meet in person, inspect, and complete the transaction securely." }
  ];

  const scrollToForm = () => {
    document.getElementById('contact-form-anchor')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="py-16 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Buy from DealBridge</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Buy confidently from verified sellers without fear of scams. We bring you the best deals from trusted owners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{benefit.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-green-600 text-white rounded-3xl p-8 md:p-12 text-center mb-16 shadow-xl">
          <Star className="w-10 h-10 mx-auto mb-6 text-green-200" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Quality Guaranteed</h2>
          <p className="text-green-50 mb-8 max-w-lg mx-auto">
            Scams are a thing of the past. At DealBridge, we verify every single product before it's even listed.
          </p>
          <button
            onClick={scrollToForm}
            className="inline-flex items-center space-x-2 bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-all active:scale-95 shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Fill Buy Inquiry Form</span>
          </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Looking for something specific?</h2>
            <p className="text-slate-600">Tell us what you're looking for, and we'll find a verified seller for you.</p>
          </div>
          <WhatsAppForm defaultRole="Buyer" sourcePage="Buy Page" />
        </div>
      </div>
    </div>
  );
};

export default Buy;
