
import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold mb-10 text-gray-900 border-b pb-6">Terms of Service</h1>
        <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
          <p className="text-sm font-bold text-gray-400 tracking-widest">Effective Date: May 20, 2024</p>
          
          <h2 className="text-2xl font-bold text-gray-900">1. Use of Content</h2>
          <p>All content provided on CarWipes.de is for informational purposes only. We make no representations as to the accuracy or completeness of any information on this site or found by following any link on this site.</p>
          
          <h2 className="text-2xl font-bold text-gray-900">2. Amazon Disclaimer</h2>
          <p>CarWipes.de is not a store. We do not sell products directly. All purchases are handled via Amazon.de. We are not responsible for order fulfillment, shipping, or returns.</p>
          
          <h2 className="text-2xl font-bold text-gray-900">3. Limitation of Liability</h2>
          <p>Under no circumstances shall CarWipes.de be liable for any damage to your vehicle resulting from the use of products recommended on this site. Use detailing chemicals and tools at your own risk and always test on a small inconspicuous area first.</p>
          
          <h2 className="text-2xl font-bold text-gray-900">4. Intellectual Property</h2>
          <p>All brand names and logos (SONAX, Meguiar's, etc.) are the property of their respective owners. CarWipes.de makes no claim to these trademarks.</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
