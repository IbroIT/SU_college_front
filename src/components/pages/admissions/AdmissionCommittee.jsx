import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './AdmissionCommittee.css';

const AdmissionCommittee = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: t('admission.address.title'),
      content: t('admission.address.content'),
      link: null
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: t('admission.phones.title'),
      content: [
        t('admission.phones.primary'),
        t('admission.phones.secondary')
      ],
      link: null
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: t('admission.email.title'),
      content: t('admission.email.content'),
      link: `mailto:${t('admission.email.content')}`
    }
  ];

  const features = [
    {
      icon: "🚀",
      title: t('admission.features.innovative.title'),
      description: t('admission.features.innovative.description')
    },
    {
      icon: "🎯",
      title: t('admission.features.foundation.title'),
      description: t('admission.features.foundation.description')
    },
    {
      icon: "🌟",
      title: t('admission.features.activities.title'),
      description: t('admission.features.activities.description')
    }
  ];

  return (
    <div className="admission-committee min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
            {t('admission.title')}
          </h1>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed">
            {t('admission.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Column - Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Contact Cards */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-500">
              <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
                {t('admission.contactTitle')}
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-blue-900 text-lg mb-1">
                        {item.title}
                      </h3>
                      {Array.isArray(item.content) ? (
                        <div className="space-y-1">
                          {item.content.map((phone, phoneIndex) => (
                            <p key={phoneIndex} className="text-blue-700">
                              {item.link ? (
                                <a href={item.link} className="hover:text-blue-900 transition-colors">
                                  {phone}
                                </a>
                              ) : (
                                phone
                              )}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-blue-700">
                          {item.link ? (
                            <a href={item.link} className="hover:text-blue-900 transition-colors">
                              {item.content}
                            </a>
                          ) : (
                            item.content
                          )}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <button className="bg-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{t('admission.callNow')}</span>
                </button>
                <button className="border-2 border-blue-600 text-blue-600 py-3 px-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  <span>{t('admission.chat')}</span>
                </button>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 transform hover:scale-105 transition-all duration-500">
              <h3 className="text-xl font-bold text-blue-800 mb-4">{t('admission.location')}</h3>
              <div className="bg-blue-100 rounded-2xl h-48 flex items-center justify-center">
                <div className="text-center text-blue-600">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <p className="font-semibold">{t('admission.interactiveMap')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Welcome Message */}
          <div className={`space-y-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Welcome Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-2xl p-8 text-white transform hover:scale-105 transition-all duration-500">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v6l9-5-9-5-9 5 9 5z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold">{t('admission.welcomeTitle')}</h2>
              </div>
              
              <div className="space-y-4 text-blue-100 leading-relaxed">
                <p className="text-lg">{t('admission.welcomeMessage.p1')}</p>
                <p>{t('admission.welcomeMessage.p2')}</p>
                <p>{t('admission.welcomeMessage.p3')}</p>
                <p className="font-semibold text-white text-lg mt-6">
                  {t('admission.welcomeMessage.p4')}
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="font-bold text-blue-800 text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-blue-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                {t('admission.cta.title')}
              </h3>
              <p className="text-blue-600 mb-6">
                {t('admission.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white py-3 px-8 rounded-xl font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
                  {t('admission.cta.applyNow')}
                </button>
                <button className="border-2 border-blue-600 text-blue-600 py-3 px-8 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300">
                  {t('admission.cta.tour')}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="fixed bottom-8 right-8 space-y-4">
          <button className="w-14 h-14 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </button>
          <button className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdmissionCommittee;