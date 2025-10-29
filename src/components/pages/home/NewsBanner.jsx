import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './ProgramsHomepage.css';

const ProgramsHomepage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const programs = [
    {
      id: 'business',
      title: t('programs.business.title'),
      description: t('programs.business.description'),
      icon: '💼',
      color: 'from-emerald-400 to-blue-500',
      bgColor: 'bg-gradient-to-br from-emerald-50 to-blue-50',
      borderColor: 'border-emerald-200',
      stats: ['98%', '50K+', '150+', '95%'],
      features: ['Leadership', 'Strategy', 'Innovation', 'Analytics'],
      buttonColor: 'bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600',
      pattern: 'business-pattern',
      accentColor: '#10b981'
    },
    {
      id: 'computer-science',
      title: t('programs.cs.title'),
      description: t('programs.cs.description'),
      icon: '💻',
      color: 'from-blue-400 to-purple-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-purple-50',
      borderColor: 'border-blue-200',
      stats: ['95%', '45K+', '200+', '96%'],
      features: ['AI/ML', 'Web Dev', 'Mobile', 'Data Science'],
      buttonColor: 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600',
      pattern: 'code-pattern',
      accentColor: '#3b82f6'
    },
    {
      id: 'mobile',
      title: t('programs.mobile.title'),
      description: t('programs.mobile.description'),
      icon: '📱',
      color: 'from-cyan-400 to-emerald-500',
      bgColor: 'bg-gradient-to-br from-cyan-50 to-emerald-50',
      borderColor: 'border-cyan-200',
      stats: ['97%', '30K+', '100+', '94%'],
      features: ['iOS', 'Android', 'React Native', 'Flutter'],
      buttonColor: 'bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600',
      pattern: 'mobile-pattern',
      accentColor: '#06b6d4'
    },
    {
      id: 'webdev',
      title: t('programs.web.title'),
      description: t('programs.web.description'),
      icon: '🌐',
      color: 'from-orange-400 to-red-500',
      bgColor: 'bg-gradient-to-br from-orange-50 to-red-50',
      borderColor: 'border-orange-200',
      stats: ['96%', '35K+', '120+', '94%'],
      features: ['Frontend', 'Backend', 'Databases', 'DevOps'],
      buttonColor: 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600',
      pattern: 'web-pattern',
      accentColor: '#f97316'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleLearnMore = (programId) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    navigate(`/programs/${programId}`);
    
  };

  return (
    <div className="programs-homepage min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Декоративные элементы на фоне */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Абстрактные формы */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-32 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-32 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{animationDelay: '6s'}}></div>
        
        {/* Сетка */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px),
                           linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center space-x-3 mb-6 bg-white rounded-full px-6 py-3 border border-gray-200 shadow-sm">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-emerald-600 font-semibold text-sm">{t('programs.hero.tagline')}</span>
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            {t('programs.hero.title')}
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('programs.hero.description')}
          </p>
        </section>

        {/* Programs Grid */}
        <section className={`mb-20 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={program.id}
                className={`group relative ${program.bgColor} rounded-3xl p-8 border-2 ${program.borderColor} backdrop-blur-sm transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${program.pattern}`}
                style={{
                  transitionDelay: `${500 + index * 200}ms`,
                }}
              >
                {/* Уникальные паттерны для каждой карточки */}
                <div className="pattern-overlay"></div>
                
                {/* Акцентная полоса */}
                <div 
                  className="absolute top-0 left-0 w-full h-2 rounded-t-3xl transition-all duration-500 group-hover:h-3"
                  style={{ backgroundColor: program.accentColor }}
                ></div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`text-3xl p-4 rounded-2xl bg-gradient-to-r ${program.color} shadow-lg`}>
                        {program.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                          {program.title}
                        </h2>
                        <div className="flex space-x-1 mt-2">
                          {program.stats.map((stat, statIndex) => (
                            <div
                              key={statIndex}
                              className="w-1 h-1 bg-current rounded-full animate-pulse opacity-60"
                              style={{ color: program.accentColor, animationDelay: `${statIndex * 0.2}s` }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div 
                      className="w-3 h-3 rounded-full animate-pulse"
                      style={{ backgroundColor: program.accentColor }}
                    ></div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    {program.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {program.features.map((feature, featureIndex) => (
                      <div key={feature} className="flex items-center space-x-3 p-2 rounded-lg bg-white bg-opacity-50">
                        <div 
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: program.accentColor }}
                        ></div>
                        <span className="text-gray-800 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleLearnMore(program.id)}
                    className={`w-full ${program.buttonColor} text-white py-4 px-6 rounded-xl font-bold shadow-lg transform transition-all duration-300 flex items-center justify-center space-x-3 group/btn`}
                  >
                    <span className="text-lg">{t('programs.learnMore')}</span>
                    <span className="group-hover/btn:translate-x-2 transition-transform duration-300 text-xl">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProgramsHomepage;