
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold font-outfit text-slate-900 mb-8">About CarWipes.de</h1>
      <div className="prose prose-slate lg:prose-lg">
        <p className="text-xl text-slate-600 mb-8 leading-relaxed text-balance">
          Founded by a team of automotive detailing enthusiasts, CarWipes.de was created to solve one simple problem: <strong>The overwhelming choice of car cleaning supplies.</strong>
        </p>
        
        <h2 className="text-2xl font-bold font-outfit text-slate-800 mt-12 mb-4">Our Mission</h2>
        <p>
          We aim to provide car owners with clear, unbiased, and expert advice on the best cleaning wipes and microfibre technology. Whether you drive a daily commuter or a vintage classic, our curated selection ensures your surfaces are protected and your finish is flawless.
        </p>

        <h2 className="text-2xl font-bold font-outfit text-slate-800 mt-12 mb-4">Why Trust Us?</h2>
        <p>
          We don't just look at pictures. We evaluate materials, absorbency rates, and chemical compositions of every product we list. Our recommendations are based on real-world detailing experience and extensive community feedback.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-600 p-8 rounded-3xl text-white">
            <h3 className="font-bold text-xl mb-2">10+ Years</h3>
            <p className="text-blue-100">Combined experience in professional automotive detailing.</p>
          </div>
          <div className="bg-slate-900 p-8 rounded-3xl text-white">
            <h3 className="font-bold text-xl mb-2">Independent</h3>
            <p className="text-slate-400">We are not owned by any manufacturer, ensuring honest reviews.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
