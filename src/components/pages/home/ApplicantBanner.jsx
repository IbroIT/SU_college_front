// components/ApplicantBanner.jsx
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// SVG Icons
const StarIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GraduateIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 14C15.3137 14 18 11.3137 18 8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8C6 11.3137 8.68629 14 12 14Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const ArrowRightIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CloseIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ApplicantBanner = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Показываем баннер с небольшой задержкой
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  const handleApplyClick = () => {
    // Здесь логика перехода на страницу абитуриента
    console.log('Redirect to applicant page');
    // window.location.href = '/apply'; // Раскомментировать для реального использования
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
      isClosing ? 'opacity-0 translate-y-10 scale-95' : 'opacity-100 translate-y-0 scale-100'
    }`}>
      <div className="bg-white rounded-2xl shadow-2xl border border-blue-200 max-w-sm mx-auto transform hover:scale-105 transition-transform duration-300">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-2xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <GraduateIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg leading-tight">
                  {t('applicantBanner.title')}
                </h3>
                <p className="text-blue-100 text-sm">
                  {t('applicantBanner.subtitle')}
                </p>
              </div>
            </div>
            
            <button
              onClick={handleClose}
              className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 rounded-full transition-colors duration-200"
            >
              <CloseIcon className="w-4 h-4" />
            </button>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-2 right-2">
            <StarIcon className="w-4 h-4 text-yellow-300" />
          </div>
          <div className="absolute bottom-2 left-2">
            <StarIcon className="w-3 h-3 text-yellow-300 opacity-70" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start space-x-3 mb-4">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              {t('applicantBanner.description')}
            </p>
          </div>

          <div className="flex items-start space-x-3 mb-6">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              {t('applicantBanner.quality')}
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleApplyClick}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group flex items-center justify-center space-x-2"
          >
            <span>{t('applicantBanner.button')}</span>
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>

          {/* Footer Note */}
          <p className="text-gray-500 text-xs text-center mt-3">
            {t('applicantBanner.footer')}
          </p>
        </div>

        {/* Corner Accent */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full"></div>
        <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-600 rounded-full"></div>
      </div>

      {/* Floating Animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ApplicantBanner;