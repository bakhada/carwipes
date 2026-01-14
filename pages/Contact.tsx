
import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">Get in Touch</h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Have questions about a specific product? Or perhaps you'd like us to review a new detailing towel? We'd love to hear from you.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="bg-blue-100 p-4 rounded-2xl">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">General Enquiries</h3>
                  <p className="text-gray-500">info@carwipes.de</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-blue-100 p-4 rounded-2xl">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Partnerships</h3>
                  <p className="text-gray-500">collab@carwipes.de</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-2">Our Response Time</h4>
              <p className="text-gray-500 text-sm">We typically respond to all emails within 24-48 business hours. We appreciate your patience!</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
            {submitted ? (
              <div className="text-center py-20">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h2>
                <p className="text-gray-500 mb-8">Thank you for reaching out. Our team will get back to you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="text-blue-600 font-bold hover:underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Name</label>
                    <input type="text" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Email</label>
                    <input type="email" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Subject</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500 transition-all">
                    <option>Product Question</option>
                    <option>Article Suggestion</option>
                    <option>Business Collaboration</option>
                    <option>Report a Bug</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Message</label>
                  <textarea rows={6} required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none" placeholder="Tell us more about what's on your mind..."></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20 transition-all">
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
