import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import './NewsPage.css';

const NewsPage = () => {
  const { t, i18n } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedNews, setSelectedNews] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Загрузка данных с бэкенда
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
        const language = i18n.language;
        
        const url = `${API_BASE_URL}/api/news/with_translations/?lang=${language}`;
        
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setNews(data);
        
      } catch (err) {
        console.error('Error fetching news:', err);
        setError(err.message);
        // Заглушки для демонстрации с улучшенными данными
        const demoNews = [
          {
            id: 1,
            title: "Важные обновления платформы",
            excerpt: "Мы запустили новые функции для улучшения пользовательского опыта и производительности системы.",
            content: "Мы рады сообщить о выпуске крупного обновления нашей платформы. Новые функции включают в себя улучшенный интерфейс, расширенные возможности аналитики и оптимизированную работу на мобильных устройствах. Эти улучшения помогут нашим пользователям работать более эффективно и достигать лучших результатов.\n\nОсновные изменения:\n• Обновленный дизайн интерфейса\n• Новая система аналитики в реальном времени\n• Улучшенная мобильная версия\n• Оптимизация производительности\n\nМы продолжаем работать над улучшением платформы и будем рады получить ваши отзывы.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            date: new Date().toISOString(),
            category: { name: "Обновления", color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
            readingTime: "3 мин"
          },
          {
            id: 2,
            title: "Новые партнерства и сотрудничество",
            excerpt: "Расширяем возможности платформы через стратегические партнерства с ведущими компаниями.",
            content: "Мы заключили стратегические партнерства с несколькими ведущими технологическими компаниями. Эти сотрудничества позволят нам предоставлять нашим пользователям еще более широкий спектр услуг и интеграций.\n\nНовые возможности включают:\n• Интеграция с популярными CRM-системами\n• Расширенные инструменты аналитики\n• Улучшенная безопасность данных\n• Новые способы монетизации\n\nМы уверены, что эти партнерства помогут нам создать еще более мощную и удобную платформу для всех наших пользователей.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
            category: { name: "Партнерства", color: "bg-gradient-to-r from-blue-600 to-indigo-600" },
            readingTime: "4 мин"
          },
          {
            id: 3,
            title: "Веб-конференция 2024",
            excerpt: "Присоединяйтесь к нашей ежегодной веб-конференции, чтобы узнать о последних тенденциях.",
            content: "Мы рады пригласить вас на нашу ежегодную веб-конференцию, которая состоится в этом году в онлайн-формате. Мероприятие соберет ведущих экспертов отрасли, которые поделятся своими знаниями и опытом.\n\nТемы конференции:\n• Будущее веб-разработки\n• Искусственный интеллект в бизнесе\n• Кибербезопасность\n• Цифровая трансформация\n\nУчастие бесплатное, требуется предварительная регистрация. Все зарегистрированные участники получат запись мероприятия.",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
            category: { name: "События", color: "bg-gradient-to-r from-cyan-500 to-blue-500" },
            readingTime: "2 мин"
          },
          {
            id: 4,
            title: "Обновление системы безопасности",
            excerpt: "Внедрены новые протоколы безопасности для защиты данных пользователей.",
            content: "Мы постоянно работаем над улучшением безопасности нашей платформы. В этом обновлении мы внедрили новые протоколы шифрования и улучшили систему аутентификации.\n\nНовые функции безопасности:\n• Двухфакторная аутентификация\n• Улучшенное шифрование данных\n• Мониторинг подозрительной активности\n• Регулярные security-аудиты\n\nБезопасность наших пользователей - наш главный приоритет.",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
            category: { name: "Безопасность", color: "bg-gradient-to-r from-green-500 to-blue-500" },
            readingTime: "5 мин"
          },
          {
            id: 5,
            title: "Новые инструменты аналитики",
            excerpt: "Представляем расширенную панель аналитики с новыми метриками и отчетами.",
            content: "Мы запустили совершенно новую панель аналитики, которая предоставляет более глубокое понимание производительности вашего бизнеса.\n\nНовые возможности аналитики:\n• Отслеживание в реальном времени\n• Пользовательские отчеты\n• Сравнительный анализ\n• Прогнозные модели\n\nЭти инструменты помогут вам принимать более обоснованные бизнес-решения.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
            category: { name: "Аналитика", color: "bg-gradient-to-r from-purple-500 to-blue-500" },
            readingTime: "4 мин"
          },
          {
            id: 6,
            title: "Мобильное приложение обновлено",
            excerpt: "Вышло крупное обновление мобильного приложения с новыми функциями.",
            content: "Мы выпустили крупное обновление нашего мобильного приложения для iOS и Android. Обновление включает полностью переработанный интерфейс и новые функции.\n\nЧто нового:\n• Улучшенная навигация\n• Оффлайн-режим\n• Push-уведомления\n• Интеграция с камерой\n\nСкачайте обновление в App Store или Google Play.",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
            category: { name: "Мобильное", color: "bg-gradient-to-r from-blue-400 to-cyan-400" },
            readingTime: "3 мин"
          }
        ];
        setNews(demoNews);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [i18n.language]);

  // Получаем featured news (первые 3) и all news (все)
  const featuredNews = news.slice(0, 3);
  const allNews = news;

  // Автопереключение слайдов
  useEffect(() => {
    if (featuredNews.length === 0 || !isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredNews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredNews.length, isAutoPlaying]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % featuredNews.length);
  }, [featuredNews.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + featuredNews.length) % featuredNews.length);
  }, [featuredNews.length]);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  // Функции для модального окна
  const openNewsModal = useCallback((newsItem) => {
    setSelectedNews(newsItem);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeNewsModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedNews(null);
    document.body.style.overflow = 'unset';
  }, []);

  // Форматирование даты
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString(i18n.language, {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  // Компонент карточки новости
const NewsCard = ({ news, index, isFeatured = false }) => {
  // Случайно выбираем вариант анимации для каждой карточки
  const animationVariants = ['card-entrance', 'card-entrance-alt', 'card-entrance-right'];
  const animationName = animationVariants[index % animationVariants.length];

  return (
    <div 
      className={`group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20 hover:border-blue-200/50 transition-all duration-500 transform hover:-translate-y-2 animate-[${animationName}]`}
      style={{ 
        animationDelay: `${index * 100}ms`,
        animationFillMode: 'both'
      }}
      onMouseEnter={() => setHoveredCard(news.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      {/* Градиентный overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
      
      <div className="relative h-48 bg-gradient-to-br from-blue-100 to-cyan-100 overflow-hidden">
        <img 
          src={news.image} 
          alt={news.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        
        {/* Категория */}
        <div className="absolute top-4 left-4">
          <span className={`${news.category?.color || 'bg-gradient-to-r from-blue-500 to-cyan-500'} text-white px-4 py-2 rounded-2xl text-xs font-bold shadow-lg backdrop-blur-sm`}>
            {news.category?.name || 'Новость'}
          </span>
        </div>

        {/* Дата */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1.5 rounded-2xl text-sm font-semibold shadow-lg">
          {formatDate(news.date)}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
          <button
            onClick={() => openNewsModal(news)}
            className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-white/90 backdrop-blur-sm text-blue-600 px-6 py-3 rounded-2xl font-bold shadow-2xl hover:bg-white hover:scale-110"
          >
            {t('news.readMore') || 'Читать далее'}
          </button>
        </div>
      </div>
      
      <div className="relative p-6 z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>⏱️ {news.readingTime}</span>
          </div>
          <div className="flex space-x-1">
            {[1, 2, 3].map(dot => (
              <div 
                key={dot}
                className="w-1.5 h-1.5 bg-blue-300 rounded-full transition-all duration-300"
                style={{
                  transform: hoveredCard === news.id ? 'scale(1.2)' : 'scale(1)',
                  opacity: hoveredCard === news.id ? 1 : 0.6
                }}
              ></div>
            ))}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight group-hover:text-blue-700 transition-colors duration-300 line-clamp-2">
          {news.title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3 text-sm">
          {news.excerpt}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <button
            onClick={() => openNewsModal(news)}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-all duration-300 group/readmore"
          >
            <span>{t('news.readMore') || 'Читать далее'}</span>
            <svg className="w-4 h-4 transform group-hover/readmore:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Акцентная полоска */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-500"></div>
    </div>
  )
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="text-center relative z-10 bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-2xl">
          <div className="relative inline-block mb-6">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
            <div className="absolute inset-0 rounded-full h-16 w-16 border-t-2 border-cyan-400 animate-ping"></div>
          </div>
          <p className="text-gray-700 font-semibold text-lg mb-2">Загрузка новостей...</p>
          <p className="text-gray-500 text-sm">Мы готовим для вас самые свежие материалы</p>
        </div>
      </div>
    );
  }

  if (error && news.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>
        
        <div className="text-center max-w-md mx-auto p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl relative z-10">
          <div className="text-6xl mb-6">📰</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Ошибка загрузки</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
          >
            Попробовать снова
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="news-page min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute inset-0 bg-grid-blue-200/30 bg-[length:60px_60px]"></div>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-128 h-128 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-3 h-8 bg-gradient-to-b from-white to-blue-200 rounded-full animate-bounce"></div>
              <div className="text-white/80 text-sm font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                {t('news.updates', 'Latest Updates')}
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              {t('news.title') || 'Новости и события'}
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              {t('news.subtitle') || 'Будьте в курсе последних событий и обновлений нашей платформы'}
            </p>
          </div>
        </div>
      </section>

      {/* Featured News Slider */}
      {featuredNews.length > 0 && (
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                {t('news.featuredTitle') || 'Главные новости'}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="relative max-w-6xl mx-auto">
              {/* Slider Container */}
              <div 
                className="relative h-96 md:h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-cyan-100 border border-white/20"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                {featuredNews.map((newsItem, index) => (
                  <div
                    key={newsItem.id}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === currentSlide 
                        ? 'opacity-100 z-10 scale-100' 
                        : 'opacity-0 z-0 scale-105'
                    }`}
                  >
                    <img
                      src={newsItem.image}
                      alt={newsItem.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/30 to-transparent"></div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                      <div className="max-w-4xl">
                        <div className="flex items-center mb-6 flex-wrap gap-3">
                          <span className={`${newsItem.category?.color || 'bg-gradient-to-r from-blue-500 to-cyan-500'} text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-lg`}>
                            {newsItem.category?.name || 'Новость'}
                          </span>
                          <span className="text-blue-200 text-sm font-medium bg-white/10 backdrop-blur-sm px-4 py-2 rounded-2xl border border-white/20">
                            {formatDate(newsItem.date)}
                          </span>
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                          {newsItem.title}
                        </h3>
                        
                        <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
                          {newsItem.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-4">
                          <button
                            onClick={() => openNewsModal(newsItem)}
                            className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center group"
                          >
                            {t('news.readMore') || 'Читать далее'}
                            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </button>
                          
                          <button
                            onClick={() => {
                              const element = document.getElementById('all-news');
                              element?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                          >
                            Все новости
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              {featuredNews.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-20 shadow-2xl hover:scale-110 border border-white/20"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-20 shadow-2xl hover:scale-110 border border-white/20"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}


              {/* Dots Indicator */}
              {featuredNews.length > 1 && (
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                  {featuredNews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-white scale-125 shadow-lg' 
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              )}

              {/* Slide Counter */}
              {featuredNews.length > 1 && (
                <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-sm text-white px-4 py-2 rounded-2xl text-sm font-semibold z-20 border border-white/20">
                  <span className="text-cyan-300">{currentSlide + 1}</span>
                  <span className="text-white/60"> / {featuredNews.length}</span>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* All News Grid */}
      <section id="all-news" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              {t('news.allNews') || 'Все новости'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Будьте в курсе последних событий и обновлений нашей платформы
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-6"></div>
          </div>
          
          {allNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allNews.map((newsItem, index) => (
                <NewsCard key={newsItem.id} news={newsItem} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white/80 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl">
              <div className="text-8xl mb-6">📰</div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">Нет доступных новостей</h3>
              <p className="text-gray-500 text-lg">Скоро здесь появятся новые материалы</p>
            </div>
          )}
        </div>
      </section>

      {/* Модальное окно для новости */}
      {isModalOpen && selectedNews && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fade-in"
          onClick={closeNewsModal}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[95vh] overflow-y-auto shadow-2xl transform animate-scale-in border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-80 bg-gradient-to-br from-blue-100 to-cyan-100">
              <img 
                src={selectedNews.image} 
                alt={selectedNews.title}
                className="w-full h-full object-cover rounded-t-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-3xl"></div>
              
              <button
                onClick={closeNewsModal}
                className="absolute top-6 right-6 text-white hover:text-gray-200 bg-black/30 backdrop-blur-md rounded-2xl p-3 transition-all duration-300 hover:scale-110 hover:bg-black/40"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className={`${selectedNews.category?.color || 'bg-gradient-to-r from-blue-500 to-cyan-500'} text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-lg`}>
                    {selectedNews.category?.name || 'Новость'}
                  </span>
                  <span className="bg-white/90 text-gray-700 px-3 py-2 rounded-2xl text-sm font-semibold">
                    {formatDate(selectedNews.date)}
                  </span>
                  <span className="bg-white/90 text-gray-700 px-3 py-2 rounded-2xl text-sm font-semibold">
                    ⏱️ {selectedNews.readingTime}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 leading-tight">
                {selectedNews.title}
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100">
                  {selectedNews.content || selectedNews.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end">
                <button
                  onClick={closeNewsModal}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes card-entrance {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(1deg);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out both;
        }
        .animate-scale-in {
          animation: scale-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        .animate-card-entrance {
          animation: card-entrance 0.6s ease-out both;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .bg-grid-blue-200\\/30 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23bfdbfe'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </div>
  );
};

export default NewsPage;