
import React, { useEffect } from 'react';
import { ShieldCheck, Award, Heart, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t, updateSeo, language } = useLanguage();

  useEffect(() => {
    updateSeo(t('seo.about.title'), t('seo.about.desc'));
  }, [language, t, updateSeo]);

  return (
    <div className="bg-white min-h-screen">
      <div className="relative py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">{language === 'de' ? 'Über CarWipes.de' : 'About CarWipes.de'}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed italic">
            {language === 'de' 
              ? '"Unsere Mission ist einfach: Jeden Autobesitzer in Deutschland mit dem Wissen und den Werkzeugen auszustatten, um ein makelloses Fahrzeug zu erhalten."'
              : '"Our mission is simple: To empower every car owner in Germany with the knowledge and tools to maintain a flawless vehicle."'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">{language === 'de' ? 'Wie alles begann' : 'Why We Started'}</h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                {language === 'de'
                  ? 'CarWipes.de entstand aus Frust. Als Detailing-Enthusiasten haben wir jahrelang unzählige Mikrofasertücher, Schwämme und Wipes getestet, nur um festzustellen, dass viele davon Kratzer oder Fusseln auf unseren Fahrzeugen hinterließen.'
                  : 'CarWipes.de was born out of frustration. As detailing enthusiasts, we spent years testing countless microfibre cloths, sponges, and wipes from various local retailers, only to find that many of them left scratches or lint on our prized vehicles.'}
              </p>
              <p>
                {language === 'de'
                  ? 'Wir haben erkannt, dass die Suche nach hochwertigen Autopflegeprodukten kein Glücksspiel sein sollte. Wir haben uns entschieden, ein kuratiertes Verzeichnis der besten auf Amazon verfügbaren Autopflegeprodukte zu erstellen.'
                  : 'We realized that finding high-quality car care products shouldn\'t be a gamble. We decided to create a curated directory of the very best car detailing supplies available on Amazon, backed by expert knowledge and honest reviews.'}
              </p>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl rotate-2">
            <img 
              src="https://picsum.photos/seed/aboutus/800/600" 
              alt={t('alt.aboutImage')} 
              loading="lazy"
              decoding="async"
              className="w-full h-auto" 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
            <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20 text-white">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">{language === 'de' ? 'Kuratierte Auswahl' : 'Curated Selection'}</h3>
            <p className="text-gray-500">{language === 'de' ? 'Wir listen nicht alles. Wir listen nur das, was wirklich funktioniert.' : 'We don\'t list everything. We only list what actually works on high-end clear coats and delicate interiors.'}</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
            <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20 text-white">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">{language === 'de' ? 'Experten-Wissen' : 'Expert Insights'}</h3>
            <p className="text-gray-500">{language === 'de' ? 'Unser Magazin ist voll von Anleitungen, die von Profis geschrieben wurden.' : 'Our blog is filled with guides written by detailing professionals with years of hands-on experience.'}</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
            <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20 text-white">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">{language === 'de' ? 'Pure Leidenschaft' : 'Pure Passion'}</h3>
            <p className="text-gray-500">{language === 'de' ? 'Wir lieben Autos genauso wie Sie.' : 'We love cars as much as you do. Every recommendation is made with the safety of your vehicle in mind.'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
