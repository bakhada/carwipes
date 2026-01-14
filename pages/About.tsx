
import React from 'react';
import { ShieldCheck, Award, Heart, Mail } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="relative py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">About CarWipes.de</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed italic">
            "Our mission is simple: To empower every car owner in Germany with the knowledge and tools to maintain a flawless vehicle."
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Why We Started</h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                CarWipes.de was born out of frustration. As detailing enthusiasts, we spent years testing countless microfibre cloths, sponges, and wipes from various local retailers, only to find that many of them left scratches or lint on our prized vehicles.
              </p>
              <p>
                We realized that finding high-quality car care products shouldn't be a gamble. We decided to create a curated directory of the very best car detailing supplies available on Amazon, backed by expert knowledge and honest reviews.
              </p>
              <p>
                Today, we serve as a trusted resource for thousands of German car owners who care about preservation, aesthetics, and long-term value.
              </p>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl rotate-2">
            <img src="https://picsum.photos/seed/aboutus/800/600" alt="Detailing Lab" className="w-full h-auto" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
            <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20 text-white">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Curated Selection</h3>
            <p className="text-gray-500">We don't list everything. We only list what actually works on high-end clear coats and delicate interiors.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
            <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20 text-white">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Expert Insights</h3>
            <p className="text-gray-500">Our blog is filled with guides written by detailing professionals with years of hands-on experience.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
            <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20 text-white">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Pure Passion</h3>
            <p className="text-gray-500">We love cars as much as you do. Every recommendation is made with the safety of your vehicle in mind.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
