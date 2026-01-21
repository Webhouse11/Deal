
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_DETAILS } from '../constants';

const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${CONTACT_DETAILS.WHATSAPP_NUMBER.replace(/\+/g, '').replace(/\s/g, '')}`;
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 whitespace-nowrap font-medium">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;
