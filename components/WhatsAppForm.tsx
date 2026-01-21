
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { CONTACT_DETAILS } from '../constants';

const WhatsAppForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    role: 'Buyer',
    productName: '',
    description: '',
    location: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*New Inquiry from DealBridge*%0A%0A` +
      `*Name:* ${formData.fullName}%0A` +
      `*Role:* ${formData.role}%0A` +
      `*Product:* ${formData.productName || 'N/A'}%0A` +
      `*Description:* ${formData.description}%0A` +
      `*Location:* ${formData.location}`;

    const whatsappUrl = `https://wa.me/${CONTACT_DETAILS.WHATSAPP_NUMBER.replace(/\+/g, '').replace(/\s/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 max-w-xl mx-auto">
      <h3 className="text-xl font-bold mb-6 text-slate-800">Quick Inquiry Form</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
          <input
            required
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Are you a Seller or Buyer?</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Buyer">I am a Buyer</option>
            <option value="Seller">I am a Seller</option>
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
            className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., MacBook Pro 2021"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Short Description</label>
          <textarea
            required
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Give us a brief overview..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Location</label>
          <input
            required
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="City, State"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors mt-4"
        >
          <span>Send to WhatsApp</span>
          <Send className="w-4 h-4" />
        </button>
      </div>
      <p className="text-xs text-slate-400 mt-4 text-center">
        By submitting this form, you will be redirected to WhatsApp to complete your inquiry.
      </p>
    </form>
  );
};

export default WhatsAppForm;
