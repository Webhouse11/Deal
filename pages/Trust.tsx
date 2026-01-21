
import React from 'react';
import { ShieldCheck, UserCheck, Search, Activity, Scale } from 'lucide-react';

const Trust: React.FC = () => {
  return (
    <div className="py-16 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Trust & Verification</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our mission is to reduce scams and wasted time in the online marketplace. Here is how we ensure safety for everyone.
          </p>
        </div>

        <div className="space-y-12">
          <section className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <UserCheck className="w-6 h-6 text-blue-600 mr-3" />
              Seller Verification Process
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We don't let just anyone sell on DealBridge. Every seller must undergo a background check. We confirm their identity and track their historical reliability before any product is listed.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-blue-600" />
                <span className="text-sm font-medium text-slate-700">Identity confirmation</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-blue-600" />
                <span className="text-sm font-medium text-slate-700">Past deal references</span>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Search className="w-6 h-6 text-blue-600 mr-3" />
              Product Proof Requirements
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Listing a product requires physical proof. Sellers must provide:
            </p>
            <ul className="list-disc list-inside space-y-3 text-slate-600 ml-2">
              <li>High-resolution photos from multiple angles</li>
              <li>A live video walkthrough of the product</li>
              <li>Proof of purchase or ownership documentation (where applicable)</li>
              <li>Verification of current functional status</li>
            </ul>
          </section>

          <section className="bg-blue-600 text-white p-8 md:p-12 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Activity className="w-6 h-6 text-blue-200 mr-3" />
              Our Core Principles
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg text-blue-100">Why DealBridge exists?</h3>
                <p className="mt-2 text-blue-50 leading-relaxed">
                  The internet is full of scammers and "ghost" products. DealBridge exists to act as the professional bridge that connects real value with real money, eliminating wasted time.
                </p>
              </div>
              <div className="p-6 bg-blue-700 rounded-2xl border border-blue-500 italic">
                “DealBridge does not hold inventory. We verify, promote, and connect. You keep your product; we find your buyer.”
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Trust;
