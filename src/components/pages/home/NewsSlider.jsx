import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const NewsWithSlider = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Данные для слайдера и списка новостей
  const allNews = [
    {
      id: 1,
      image: '/api/placeholder/800/500',
      title: t('newsWithSlider.news.0.title'),
      description: t('newsWithSlider.news.0.description'),
      excerpt: t('newsWithSlider.news.0.excerpt'),
      date: t('newsWithSlider.news.0.date'),
      category: t('newsWithSlider.news.0.category'),
      author: t('newsWithSlider.news.0.author'),
      readTime: t('newsWithSlider.news.0.readTime'),
      isFeatured: true,
      isNew: true
    },
    {
      id: 2,
      image: '/api/placeholder/800/500',
      title: t('newsWithSlider.news.1.title'),
      description: t('newsWithSlider.news.1.description'),
      excerpt: t('newsWithSlider.news.1.excerpt'),
      date: t('newsWithSlider.news.1.date'),
      category: t('newsWithSlider.news.1.category'),
      author: t('newsWithSlider.news.1.author'),
      readTime: t('newsWithSlider.news.1.readTime'),
      isFeatured: true,
      isNew: true
    },
    {
      id: 3,
      image: '/api/placeholder/800/500',
      title: t('newsWithSlider.news.2.title'),
      description: t('newsWithSlider.news.2.description'),
      excerpt: t('newsWithSlider.news.2.excerpt'),
      date: t('newsWithSlider.news.2.date'),
      category: t('newsWithSlider.news.2.category'),
      author: t('newsWithSlider.news.2.author'),
      readTime: t('newsWithSlider.news.2.readTime'),
      isFeatured: true,
      isNew: false
    },
    {
      id: 4,
      image: '/api/placeholder/800/500',
      title: t('newsWithSlider.news.3.title'),
      description: t('newsWithSlider.news.3.description'),
      excerpt: t('newsWithSlider.news.3.excerpt'),
      date: t('newsWithSlider.news.3.date'),
      category: t('newsWithSlider.news.3.category'),
      author: t('newsWithSlider.news.3.author'),
      readTime: t('newsWithSlider.news.3.readTime'),
      isFeatured: false,
      isNew: true
    },
    {
      id: 5,
      image: '/api/placeholder/800/500',
      title: t('newsWithSlider.news.4.title'),
      description: t('newsWithSlider.news.4.description'),
      excerpt: t('newsWithSlider.news.4.excerpt'),
      date: t('newsWithSlider.news.4.date'),
      category: t('newsWithSlider.news.4.category'),
      author: t('newsWithSlider.news.4.author'),
      readTime: t('newsWithSlider.news.4.readTime'),
      isFeatured: false,
      isNew: false
    },
    {
      id: 6,
      image: '/api/placeholder/800/500',
      title: t('newsWithSlider.news.5.title'),
      description: t('newsWithSlider.news.5.description'),
      excerpt: t('newsWithSlider.news.5.excerpt'),
      date: t('newsWithSlider.news.5.date'),
      category: t('newsWithSlider.news.5.category'),
      author: t('newsWithSlider.news.5.author'),
      readTime: t('newsWithSlider.news.5.readTime'),
      isFeatured: false,
      isNew: true
    }
  ];

  const featuredNews = allNews.filter(news => news.isFeatured);
  const newsList = allNews;

  // Автопереключение слайдов
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredNews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredNews.length, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredNews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredNews.length) % featuredNews.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const selectNews = (index) => {
    const selectedNews = allNews[index];
    const featuredIndex = featuredNews.findIndex(news => news.id === selectedNews.id);
    if (featuredIndex !== -1) {
      setCurrentSlide(featuredIndex);
    }
  };

  return (
    <div className="w-full bg-white max-w-7xl mx-auto py-8 px-4">
      {/* Заголовок секции */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {t('newsWithSlider.title')}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {t('newsWithSlider.description')}
        </p>
      </div>

      {/* Основной контент */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Левая часть - Большой слайдер (2/3 ширины) */}
        <div className="lg:col-span-2">
          <div 
            className="relative h-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {featuredNews.map((news, index) => (
              <div
                key={news.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentSlide
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-105'
                }`}
              >
                {/* Изображение слайда */}
                <div className="relative h-3/5 bg-gradient-to-br from-blue-600 to-blue-800">
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🚀</div>
                      <p className="text-lg opacity-90">{t('newsWithSlider.imagePlaceholder')}</p>
                    </div>
                  </div>
                  
                  {/* Категория и метка Новое */}
                  <div className="absolute top-6 left-6 flex space-x-2">
                    <span className="px-4 py-2 bg-white text-blue-600 rounded-full text-sm font-semibold shadow-lg">
                      {news.category}
                    </span>
                    {news.isNew && (
                      <span className="px-3 py-2 bg-green-500 text-white rounded-full text-sm font-semibold shadow-lg">
                        {t('newsWithSlider.new')}
                      </span>
                    )}
                  </div>
                  
                  {/* Наложение градиента */}
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Заголовок на изображении */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h2 className="text-3xl font-bold text-white mb-2 line-clamp-2">
                      {news.title}
                    </h2>
                    <div className="flex items-center space-x-4 text-white/90">
                      <span>{news.date}</span>
                      <span>•</span>
                      <span>{news.author}</span>
                      <span>•</span>
                      <span>{news.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Контент слайда */}
                <div className="h-2/5 bg-white p-8">
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    {news.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center">
                      {t('newsWithSlider.readMore')}
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    
                    <div className="flex items-center space-x-4">
                      <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors duration-300">
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Счетчик слайдов */}
            <div className="absolute top-6 right-6 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-white font-semibold">
                {currentSlide + 1} / {featuredNews.length}
              </span>
            </div>
          </div>
        </div>

        {/* Правая часть - Список всех новостей (1/3 ширины) */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-xl p-6 h-[600px] flex flex-col">
            {/* Заголовок списка */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">
                {t('newsWithSlider.allNews')}
              </h2>
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                {newsList.length}
              </span>
            </div>

            {/* Список новостей с прокруткой */}
            <div className="flex-1 overflow-y-auto space-y-4 pr-2">
              {newsList.map((news, index) => (
                <div 
                  key={news.id}
                  onClick={() => selectNews(index)}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 group ${
                    featuredNews.some(fn => fn.id === news.id) && currentSlide === featuredNews.findIndex(fn => fn.id === news.id)
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    {/* Миниатюра */}
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                      <span className="text-white text-2xl">📰</span>
                    </div>

                    {/* Контент */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                          {news.category}
                        </span>
                        {news.isNew && (
                          <span className="px-2 py-1 bg-green-100 text-green-600 rounded text-xs font-medium">
                            {t('newsWithSlider.new')}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 text-sm">
                        {news.title}
                      </h3>
                      
                      <p className="text-gray-600 text-xs mb-2 line-clamp-2">
                        {news.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{news.date}</span>
                        <span className="text-xs text-gray-500">{news.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Статистика внизу */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                    {newsList.filter(news => news.isNew).length} {t('newsWithSlider.new')}
                  </span>
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div>
                    {featuredNews.length} {t('newsWithSlider.featured')}
                  </span>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300">
                  {t('newsWithSlider.loadMore')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsWithSlider;