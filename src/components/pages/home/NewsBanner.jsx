import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPageCards = () => {
  const { t } = useTranslation();

  const cards = [
    {
      id: 1,
      title: "Компьютерная наука",
      description: "Станьте full-stack разработчиком с глубоким пониманием основ компьютерных наук",
      icon: "🔬",
      badge: "Самый популярный",
      color: "blue",
      highlights: ["Web Development", "Algorithms", "Cloud", "Backend Development"]
    },
    {
      id: 2,
      title: "Искусственный интеллект",
      description: "Создавайте интеллектуальные системы и работайте с технологиями будущего",
      icon: "⚡",
      badge: "Высокая зарплата",
      color: "purple",
      highlights: ["Machine Learning", "Neural Networks", "Data Science", "Computer Vision"]
    },
    {
      id: 3,
      title: "Бизнес",
      description: "Управляйте цифровой трансформацией и становитесь IT-лидером в бизнесе",
      icon: "🎯",
      badge: "Бизнес-фокус",
      color: "emerald",
      highlights: ["Business Analytics", "Project Management", "Digital Strategy", "IT Consulting"]
    }
  ];

  const colorStyles = {
    blue: {
      gradient: "from-blue-500 via-blue-600 to-blue-700",
      light: "bg-blue-50 text-blue-700",
      border: "border-blue-200",
      badge: "bg-blue-100 text-blue-800"
    },
    purple: {
      gradient: "from-purple-500 via-purple-600 to-purple-700", 
      light: "bg-purple-50 text-purple-700",
      border: "border-purple-200",
      badge: "bg-purple-100 text-purple-800"
    },
    emerald: {
      gradient: "from-emerald-500 via-emerald-600 to-emerald-700",
      light: "bg-emerald-50 text-emerald-700", 
      border: "border-emerald-200",
      badge: "bg-emerald-100 text-emerald-800"
    }
  };

  return (
    <div className="pb-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            🚀 Перспективные направления
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Выберите свою IT-специальность
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Три востребованных направления с международным признанием дипломов и гарантией карьерного роста
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cards.map((card) => {
            const styles = colorStyles[card.color];
            
            return (
              <div 
                key={card.id}
                className={`relative group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border-2 ${styles.border} overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Card Content */}
                <div className="relative p-8">
                  {/* Badge */}
                  {card.badge && (
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-6 ${styles.badge}`}>
                      {card.badge}
                    </div>
                  )}

                  {/* Icon and Title */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-4 rounded-2xl ${styles.light} text-2xl`}>
                      {card.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{card.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {card.description}
                  </p>
                  {/* Highlights */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Ключевые области:</h4>
                    <div className="flex flex-wrap gap-2">
                      {card.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1.5 rounded-lg text-sm font-medium ${styles.light} border ${styles.border}`}
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-4 px-6 rounded-xl font-semibold bg-gradient-to-r ${styles.gradient} text-white hover:shadow-lg transform group-hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2`}>
                    <span>Узнать подробнее</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r ${styles.gradient} group-hover:w-full group-hover:left-0 transition-all duration-500`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainPageCards;