
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold mb-10 text-gray-900 border-b pb-6">Privacy Policy</h1>
        <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
          <p className="text-sm font-bold text-gray-400">Last Updated: May 2026</p>
          
          <h2 className="text-2xl font-bold text-gray-900">1. Information We Collect</h2>
          <p>We do not require user registration. We collect minimal data via cookies for site performance and analytics. If you sign up for our newsletter, we store your email address securely via our mailing provider.</p>
          
          <h2 className="text-2xl font-bold text-gray-900">2. Affiliate Links</h2>
          <p>CarWipes.de is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.de.</p>
          
          <h2 className="text-2xl font-bold text-gray-900">3. Cookies</h2>
          <p>We use cookies to improve your browsing experience and analyze site traffic. You can disable cookies in your browser settings at any time.</p>
          
          <h2 className="text-2xl font-bold text-gray-900">4. Third-Party Links</h2>
          <p>Our website contains links to external sites (primarily Amazon). We are not responsible for the privacy practices or content of these third-party websites.</p>
          
          <h2 className="text-2xl font-bold text-gray-900">5. Contact</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at info@carwipes.de.</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
