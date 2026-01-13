
import React from 'react';

export const PrivacyPolicy: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 py-16 prose prose-slate text-balance">
    <h1 className="font-outfit font-bold text-3xl mb-6">Privacy Policy</h1>
    <p>Last Updated: {new Date().toLocaleDateString('en-US')}</p>
    <p>At CarWipes, protecting your personal data is our top priority. This Privacy Policy explains what information we collect and how we use it.</p>
    
    <h2 className="font-outfit font-bold text-xl mt-8 mb-4">Log Files</h2>
    <p>CarWipes follows a standard procedure of using log files. These files log visitors when they visit websites.</p>
    
    <h2 className="font-outfit font-bold text-xl mt-8 mb-4">Cookies and Web Beacons</h2>
    <p>Like any other website, CarWipes uses 'cookies'. These cookies are used to store information including visitors' preferences.</p>
    
    <h2 className="font-outfit font-bold text-xl mt-8 mb-4">Affiliate Disclosure</h2>
    <p>CarWipes is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com and its affiliated sites.</p>
  </article>
);

export const TermsOfService: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 py-16 prose prose-slate text-balance">
    <h1 className="font-outfit font-bold text-3xl mb-6">Terms of Service</h1>
    <p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use CarWipes if you do not agree to all of the terms and conditions stated on this page.</p>
    <h2 className="font-outfit font-bold text-xl mt-8 mb-4">License</h2>
    <p>Unless otherwise stated, CarWipes and/or its licensors own the intellectual property rights for all material on CarWipes. All intellectual property rights are reserved.</p>
  </article>
);

export const Impressum: React.FC = () => (
  <article className="max-w-4xl mx-auto px-4 py-16 prose prose-slate text-balance">
    <h1 className="font-outfit font-bold text-3xl mb-6">Legal Disclaimer</h1>
    <h2 className="font-outfit font-bold text-xl mt-8 mb-4">Information Disclaimer</h2>
    <p>
      The content on CarWipes is for informational purposes only. While we strive for accuracy, we make no representations or warranties of any kind about the completeness or reliability of our reviews.
    </p>
    <h2 className="font-outfit font-bold text-xl mt-8 mb-4">Affiliate Links</h2>
    <p>
      As an Amazon Associate, we earn from qualifying purchases. This help support our site at no extra cost to you.
    </p>
    <h2 className="font-outfit font-bold text-xl mt-8 mb-4">Contact</h2>
    <p>
      Email: hello@carwipes.de<br />
      We typically respond within 24-48 business hours.
    </p>
  </article>
);
