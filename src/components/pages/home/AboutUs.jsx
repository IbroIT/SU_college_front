// components/AboutUs.jsx
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Image from '../../../assets/main.jpg';

// SVG Icons
const DoubleDegreeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 15L12 19M12 19L9 22M12 19L15 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M17 7V5C17 3.89543 16.1046 3 15 3H9C7.89543 3 7 3.89543 7 5V7" stroke="currentColor" strokeWidth="2"/>
    <rect x="4" y="7" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 11H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const GlobalIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <path d="M2 12H22" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const BusinessIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="7" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 11H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 15H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 19H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const LanguagesIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M3 12H21" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 3C14.5013 5.73835 15.9228 9.29203 16 13C15.9228 16.708 14.5013 20.2616 12 23" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 3C9.49872 5.73835 8.07725 9.29203 8 13C8.07725 16.708 9.49872 20.2616 12 23" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const PartnershipIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 12H16M8 12V16M8 12L4 8M16 12V16M16 12L20 8M8 16V20H16V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <rect x="4" y="4" width="16" height="4" rx="1" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const DiplomaIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4C4 2.89543 4.89543 2 6 2H18C19.1046 2 20 2.89543 20 4V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V4Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 7H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 11H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 15H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M15 20V22L12 21L9 22V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const EnglishIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M2 8H22" stroke="currentColor" strokeWidth="2"/>
    <path d="M2 14H22" stroke="currentColor" strokeWidth="2"/>
    <path d="M11 2L11 22" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 2L8 8" stroke="currentColor" strokeWidth="2"/>
    <path d="M17 2L17 8" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 14L8 22" stroke="currentColor" strokeWidth="2"/>
    <path d="M17 14L17 22" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const CareerIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 15L12 19M12 19L9 22M12 19L15 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M17 7V5C17 3.89543 16.1046 3 15 3H9C7.89543 3 7 3.89543 7 5V7" stroke="currentColor" strokeWidth="2"/>
    <rect x="4" y="7" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 11H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const AboutUs = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: DoubleDegreeIcon,
      title: t('about.features.doubleDegree.title'),
      description: t('about.features.doubleDegree.description')
    },
    {
      icon: GlobalIcon,
      title: t('about.features.international.title'),
      description: t('about.features.international.description')
    },
    {
      icon: BusinessIcon,
      title: t('about.features.businessIt.title'),
      description: t('about.features.businessIt.description')
    },
    {
      icon: LanguagesIcon,
      title: t('about.features.languages.title'),
      description: t('about.features.languages.description')
    }
  ];

  const universities = [
    { 
      name: t('about.universities.salymbekov'), 
      country: t('about.universities.kyrgyzstan'),
      color: "from-blue-600 to-blue-700"
    },
    { 
      name: t('about.universities.lincoln'), 
      country: t('about.universities.usa'),
      color: "from-blue-700 to-blue-800"
    },
    { 
      name: t('about.universities.inti'), 
      country: t('about.universities.malaysia'),
      color: "from-blue-800 to-blue-900"
    }
  ];

  const stats = [
    { number: "3", label: t('about.stats.universities'), icon: PartnershipIcon },
    { number: "2", label: t('about.stats.diplomas'), icon: DiplomaIcon },
    { number: "IELTS", label: t('about.stats.english'), icon: EnglishIcon },
    { number: "100%", label: t('about.stats.employment'), icon: CareerIcon }
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className={`text-5xl font-bold text-white mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {t('about.title')}
          </h1>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className={`text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {t('about.subtitle')}
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className={`max-w-7xl mx-auto px-4 -mt-12 relative z-10 transition-all duration-1000 delay-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center border border-blue-100 hover:shadow-xl transition-all duration-300"
            >
              <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Image */}
          <div className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative">
              <img 
                src={Image} 
                alt="International IT College" 
                className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-lg shadow-2xl flex items-center justify-center">
                <PartnershipIcon className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                {t('about.description1')}
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t('about.description2')}
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t('about.description3')}
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className={`mb-20 transition-all duration-1000 delay-1100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-7">
            {t('about.features.title')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                  activeFeature === index 
                    ? 'bg-blue-600 text-white shadow-2xl transform scale-105' 
                    : 'bg-gray-50 text-gray-700 hover:shadow-lg'
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center transition-colors ${
                  activeFeature === index ? 'bg-white/20' : 'bg-blue-100'
                }`}>
                  <feature.icon className={`w-8 h-8 ${
                    activeFeature === index ? 'text-white' : 'text-blue-600'
                  }`} />
                </div>
                <h4 className={`font-bold text-lg mb-3 ${
                  activeFeature === index ? 'text-white' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h4>
                <p className={`text-sm leading-relaxed ${
                  activeFeature === index ? 'text-blue-100' : 'text-gray-600'
                }`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;