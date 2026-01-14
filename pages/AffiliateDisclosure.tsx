
import React from 'react';
import { ExternalLink, AlertTriangle } from 'lucide-react';

const AffiliateDisclosure: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-10 md:p-16 shadow-xl shadow-gray-200/50 border border-gray-100">
          <div className="bg-yellow-50 text-yellow-800 p-4 rounded-xl flex gap-4 mb-10 border border-yellow-100">
            <AlertTriangle className="w-6 h-6 flex-shrink-0" />
            <p className="text-sm font-medium">Transparency is our priority. Please read our mandatory affiliate disclosure below.</p>
          </div>
          
          <h1 className="text-4xl font-extrabold mb-8 text-gray-900 leading-tight tracking-tight">Amazon Associate Disclosure</h1>
          
          <div className="prose prose-blue prose-lg max-w-none text-gray-600 space-y-8">
            <p className="text-lg leading-relaxed">
              CarWipes.de is a participant in the <strong>Amazon Services LLC Associates Program</strong>, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to <strong>Amazon.de</strong>.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900">How Does This Work?</h2>
            <p>
              When you click on a product link on this website and make a purchase on Amazon, we may receive a small commission from Amazon at <strong>no extra cost to you</strong>.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 italic">Does This Affect Your Reviews?</h2>
            <p>
              No. Our recommendations are based on product quality, user reviews, and our own detailing experience. We only link to products that we believe provide real value to car owners. Our primary goal is to help you find the best tools for your vehicle.
            </p>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mt-12">
              <p className="text-sm text-gray-500">
                CERTAIN CONTENT THAT APPEARS ON THIS SITE COMES FROM AMAZON SERVICES LLC. THIS CONTENT IS PROVIDED 'AS IS' AND IS SUBJECT TO CHANGE OR REMOVAL AT ANY TIME.
              </p>
            </div>
            
            <div className="pt-10">
              <a 
                href="https://www.amazon.de" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline"
              >
                Learn more about the Amazon Associates Program <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateDisclosure;
