
import React from 'react';
import { CheckCircle, AlertCircle, MessageCircle } from 'lucide-react';
import { CONTACT_DETAILS } from '../constants';
import WhatsAppForm from '../components/WhatsAppForm';

const Sell: React.FC = () => {
  const requirements = [
    "Genuine products only",
    "Clear product details and videos",
    "Honest pricing",
    "Availability commitment"
  ];

  return (
    <div className="py-16 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Sell on DealBridge</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have a genuine product to sell? DealBridge helps you reach real buyers while your product stays with you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
          <div className="bg-blue-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <AlertCircle className="w-6 h-6 text-blue-600 mr-2" />
              Seller Requirements
            </h2>
            <ul className="space-y-4">
              {requirements.map((req, idx) => (
                <li key={idx} className="flex items-center space-x-3 text-slate-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <a
                href={`https://wa.me/${CONTACT_DETAILS.WHATSAPP_NUMBER.replace(/\+/g, '')}`}
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>List My Product on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">Why sell with us?</h3>
            <div className="space-y-4">
              <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                <h4 className="font-bold text-slate-800 mb-1">Stay in Control</h4>
                <p className="text-sm text-slate-600">You keep the product until the sale is finalized. No need for warehouses.</p>
              </div>
              <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                <h4 className="font-bold text-slate-800 mb-1">Qualified Leads</h4>
                <p className="text-sm text-slate-600">We filter out time-wasters. You only deal with verified, interested buyers.</p>
              </div>
              <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                <h4 className="font-bold text-slate-800 mb-1">Safe Transactions</h4>
                <p className="text-sm text-slate-600">We facilitate the trust needed for large transactions to happen safely.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Ready to List?</h2>
            <p className="text-slate-600">Fill this quick form and we'll handle the rest.</p>
          </div>
          <WhatsAppForm />
        </div>
      </div>
    </div>
  );
};

export default Sell;
