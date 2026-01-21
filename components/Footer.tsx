
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, MessageCircle } from 'lucide-react';
import { CONTACT_DETAILS, ROUTES } from '../constants.ts';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-4 md:px-6 border-t border-slate-800">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center space-x-2 text-white mb-4">
            <ShieldCheck className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-bold">{CONTACT_DETAILS.BRAND_NAME}</span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
            {CONTACT_DETAILS.TAGLINE} Connecting verified sellers with serious buyers in a safe environment.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to={ROUTES.HOME} className="hover:text-blue-400 transition-colors">Home</Link></li>
            <li><Link to={ROUTES.HOW_IT_WORKS} className="hover:text-blue-400 transition-colors">How It Works</Link></li>
            <li><Link to={ROUTES.SELL} className="hover:text-blue-400 transition-colors">Sell on DealBridge</Link></li>
            <li><Link to={ROUTES.BUY} className="hover:text-blue-400 transition-colors">Buy Safely</Link></li>
            <li><Link to={ROUTES.TRUST} className="hover:text-blue-400 transition-colors">Trust & Verification</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <MessageCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <a href={`https://wa.me/${CONTACT_DETAILS.WHATSAPP_NUMBER.replace(/\+/g, '')}`} className="hover:text-white transition-colors">
                {CONTACT_DETAILS.WHATSAPP_DISPLAY}
              </a>
            </li>
            <li className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <a href={`mailto:${CONTACT_DETAILS.EMAIL}`} className="hover:text-white transition-colors">
                {CONTACT_DETAILS.EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} {CONTACT_DETAILS.BRAND_NAME}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
