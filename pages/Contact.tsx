
import React from 'react';
import { Mail, MessageCircle, MapPin, Clock } from 'lucide-react';
import { CONTACT_DETAILS } from '../constants.ts';
import WhatsAppForm from '../components/WhatsAppForm.tsx';

const Contact: React.FC = () => {
  return (
    <div className="py-16 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Get in Touch</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have questions? Our friendly support team is here to help you navigate your next big deal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">WhatsApp</h4>
                    <p className="text-slate-600 mb-2">Instant messaging for all inquiries.</p>
                    <a 
                      href={`https://wa.me/${CONTACT_DETAILS.WHATSAPP_NUMBER.replace(/\+/g, '')}`} 
                      className="text-blue-600 font-bold hover:underline"
                    >
                      {CONTACT_DETAILS.WHATSAPP_DISPLAY}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Email Address</h4>
                    <p className="text-slate-600 mb-2">For formal requests and partnerships.</p>
                    <a 
                      href={`mailto:${CONTACT_DETAILS.EMAIL}`} 
                      className="text-blue-600 font-bold hover:underline"
                    >
                      {CONTACT_DETAILS.EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-50 text-slate-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Working Hours</h4>
                    <p className="text-slate-600">Monday - Friday: 8am - 6pm</p>
                    <p className="text-slate-600">Saturday: 9am - 4pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-4">Friendly Support Message</h3>
              <p className="text-slate-400 leading-relaxed italic">
                "We know how stressful buying and selling can be. Our goal is to make it as smooth as a conversation over coffee. Send us a message, and let's get you moving!"
              </p>
            </div>
          </div>

          <div>
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Direct Message</h2>
              <WhatsAppForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
