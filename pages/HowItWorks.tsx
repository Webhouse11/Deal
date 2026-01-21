
import React from 'react';
import { 
  ArrowRight, 
  UserCircle, 
  ShoppingBag, 
  ClipboardCheck, 
  Megaphone, 
  CheckCircle2, 
  Search, 
  MessageCircle, 
  Link2, 
  Handshake,
  ShieldCheck
} from 'lucide-react';

const HowItWorks: React.FC = () => {
  const sellerSteps = [
    { icon: <ClipboardCheck />, title: "Submit Details", text: "Fill our simple form with your product's condition, price, and media." },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Verification", text: "Our team reviews and verifies the authenticity of your product." },
    { icon: <Megaphone />, title: "Promotion", text: "We list your item on our premium marketplace and social channels." },
    { icon: <Search />, title: "Buyer Match", text: "We screen interested parties and connect you only with serious buyers." },
    { icon: <Handshake />, title: "Complete Sale", text: "You handover the product and receive payment directly once verified." }
  ];

  const buyerSteps = [
    { icon: <Search />, title: "Browse Items", text: "Explore our curated list of 100% verified genuine products." },
    { icon: <MessageCircle />, title: "Contact Us", text: "Show interest by reaching out to DealBridge via WhatsApp." },
    { icon: <ClipboardCheck />, title: "Confirm Availability", text: "We confirm with the seller that the item is still ready for sale." },
    { icon: <Link2 />, title: "Connection", text: "We introduce you to the seller to finalize details." },
    { icon: <CheckCircle2 />, title: "Deal Safely", text: "Meet, inspect the product, and pay with peace of mind." }
  ];

  return (
    <div className="py-16 px-4 md:px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">How DealBridge Works</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            We simplify commerce by removing uncertainty. Whether you are selling a luxury item or buying a used gadget, we bridge the trust gap.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Sellers */}
          <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-blue-600 text-white rounded-xl"><UserCircle className="w-6 h-6" /></div>
              <h2 className="text-2xl font-bold text-slate-900">For Sellers</h2>
            </div>
            <div className="space-y-8">
              {sellerSteps.map((step, idx) => (
                <div key={idx} className="flex space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-1 flex items-center space-x-2">
                      <span className="w-5 h-5 text-blue-500 opacity-50">{step.icon}</span>
                      <span>{step.title}</span>
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Buyers */}
          <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-green-600 text-white rounded-xl"><ShoppingBag className="w-6 h-6" /></div>
              <h2 className="text-2xl font-bold text-slate-900">For Buyers</h2>
            </div>
            <div className="space-y-8">
              {buyerSteps.map((step, idx) => (
                <div key={idx} className="flex space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-1 flex items-center space-x-2">
                      <span className="w-5 h-5 text-green-500 opacity-50">{step.icon}</span>
                      <span>{step.title}</span>
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
