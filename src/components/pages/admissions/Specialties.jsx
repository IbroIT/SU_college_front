import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './SpecialtiesPage.css';

const SpecialtiesPage = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const specialties = [
    {
      id: 'computer-science',
      title: t('specialties.computerScience.title'),
      description: t('specialties.computerScience.shortDescription'),
      image: '/images/specialties/computer-science.jpg',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      duration: '4 года',
      students: '120+ студентов',
      color: 'from-blue-500 to-blue-700'
    },
    {
      id: 'multimedia',
      title: t('specialties.multimedia.title'),
      description: t('specialties.multimedia.shortDescription'),
      image: '/images/specialties/multimedia.jpg',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </svg>
      ),
      duration: '3.5 года',
      students: '80+ студентов',
      color: 'from-purple-500 to-purple-700'
    },
    {
      id: 'mobile-development',
      title: t('specialties.mobileDevelopment.title'),
      description: t('specialties.mobileDevelopment.shortDescription'),
      image: '/images/specialties/mobile-development.jpg',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      duration: '3.5 года',
      students: '90+ студентов',
      color: 'from-green-500 to-green-700'
    }
  ];

  return (
    <div className="specialties-page min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative inline-block mb-6">
            <div className="absolute -inset-4 bg-blue-100 rounded-full blur-lg opacity-50"></div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 relative">
              {t('specialties.title')}
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('specialties.subtitle')}
          </p>
        </div>
        {/* Specialties Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {specialties.map((specialty, index) => (
            <div
              key={specialty.id}
              className={`group bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500 border border-white/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={specialty.image}
                  alt={specialty.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${specialty.color} opacity-20`}></div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-blue-600 shadow-lg transform group-hover:scale-110 transition-all duration-300">
                  {specialty.icon}
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    {specialty.duration}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                  {specialty.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {specialty.description}
                </p>

                {/* Stats */}
                <div className="flex justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {specialty.students}
                  </div>
                </div>

                <Link
                  to={`/specialties/${specialty.id}`}
                  className={`w-full bg-gradient-to-r ${specialty.color} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 group/btn`}
                >
                  <span>Подробнее</span>
                  <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto border border-white/20">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t('specialties.cta.title')}
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              {t('specialties.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-8 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>{t('specialties.cta.apply')}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="border-2 border-blue-600 text-blue-600 py-3 px-8 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300">
                {t('specialties.cta.consult')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialtiesPage;