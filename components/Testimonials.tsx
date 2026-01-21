
import React from 'react';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  location: string;
  role: 'Buyer' | 'Seller';
  content: string;
}

const testimonials: Testimonial[] = [
  { name: "Chidi O.", location: "Lagos", role: "Seller", content: "Sold my MacBook Pro in 3 days. The verification process gave the buyer the confidence to pay without seeing me first." },
  { name: "Amina Y.", location: "Abuja", role: "Buyer", content: "Finally, a place where I don't have to worry about 'what I ordered vs what I got'. The product was exactly as described." },
  { name: "Tunde A.", location: "Ibadan", role: "Seller", content: "DealBridge handled all the annoying calls. I only spoke to the final buyer who was actually ready to pay." },
  { name: "Ngozi E.", location: "Enugu", role: "Buyer", content: "Bought a clean generator for my business. The support team was with me through every step via WhatsApp." },
  { name: "Emeka W.", location: "Port Harcourt", role: "Seller", content: "No inventory handover meant I could still use my car while DealBridge looked for a buyer. Brilliant model." },
  { name: "Fatima B.", location: "Kano", role: "Buyer", content: "I was skeptical at first, but the level of verification they do is top-notch. Very professional service." },
  { name: "Segun M.", location: "Benin City", role: "Seller", content: "I sell high-end watches. Finding serious buyers used to be hard. DealBridge solved that for me." },
  { name: "Ibrahim K.", location: "Kaduna", role: "Buyer", content: "Found a great deal on a PS5. The coordination was seamless and the seller was verified as promised." },
  { name: "Blessing J.", location: "Jos", role: "Seller", content: "The best part is the human touch. Chatting on WhatsApp felt much better than dealing with bots." },
  { name: "Kunle D.", location: "Akure", role: "Buyer", content: "Trust is hard to find online in Nigeria. DealBridge is the bridge we've been waiting for." }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Trusted Across Nigeria</h2>
          <p className="text-slate-600">Join hundreds of verified users who sell smart and buy safe.</p>
        </div>

        {/* Desktop Grid / Mobile Scroll */}
        <div className="flex overflow-x-auto pb-8 md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 snap-x snap-mandatory scrollbar-hide">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 w-[85vw] md:w-full snap-center bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-700 italic mb-6 leading-relaxed">"{t.content}"</p>
              </div>
              <div className="flex items-center justify-between border-t border-slate-200 pt-4">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.location}</p>
                </div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider ${
                  t.role === 'Seller' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                }`}>
                  {t.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
