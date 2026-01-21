
import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import { CONTACT_DETAILS } from '../constants.ts';

interface WhatsAppFormProps {
  defaultRole?: 'Buyer' | 'Seller';
  sourcePage?: string;
}

const WhatsAppForm: React.FC<WhatsAppFormProps> = ({ defaultRole = 'Buyer', sourcePage = 'General' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    role: defaultRole,
    productName: '',
    description: '',
    location: ''
  });

  // Sync role if defaultRole changes
  useEffect(() => {
    setFormData(prev => ({ ...prev, role: defaultRole }));
  }, [defaultRole]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*New Inquiry from DealBridge* (Source: ${sourcePage})%0A%0A` +
      `*Name:* ${formData.fullName}%0A` +
      `*Role:* I am a ${formData.role}%0A` +
      `*Product:* ${formData.productName || 'N/A'}%0A` +
      `*Description:* ${formData.description}%0A` +
      `*Location:* ${formData.location}`;

    const phoneNumber = CONTACT_DETAILS.WHATSAPP_NUMBER.replace(/\+/g, '').replace(/\s/g, '');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Redirect current window to WhatsApp for a seamless handoff
    window.location.href = whatsappUrl;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div id="contact-form-anchor">
      <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-slate-100 max-w-xl mx-auto">
        <h3 className="text-xl font-bold mb-6 text-slate-800 text-center">Submit Inquiry to WhatsApp</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
            <input
              required
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-slate-50 focus:bg-white"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-slate-50"
            >
              <option value="Buyer">I want to Buy</option>
              <option value="Seller">I want to Sell</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Product Name {formData.role === 'Seller' && <span className="text-red-500">*</span>}
            </label>
            <input
              required={formData.role === 'Seller'}
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-slate-50 focus:bg-white"
              placeholder={formData.role === 'Seller' ? "What are you selling?" : "What are you looking for?"}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Additional Details</label>
            <textarea
              required
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-slate-50 focus:bg-white"
              placeholder="Tell us more about the product or your specific request..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Your Location</label>
            <input
              required
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-slate-50 focus:bg-white"
              placeholder="e.g. Lagos, Abuja, PH"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-blue-700 transition-transform active:scale-95 shadow-lg shadow-blue-200 mt-4"
          >
            <span>Finish & Send to WhatsApp</span>
            <Send className="w-5 h-5" />
          </button>
        </div>
        <p className="text-[10px] text-slate-400 mt-6 text-center leading-tight">
          Clicking submit will automatically open WhatsApp on your device with your message ready to send.
        </p>
      </form>
    </div>
  );
};

export default WhatsAppForm;
