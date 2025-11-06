import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const LatestNewsSection = () => {
  const { t, i18n } = useTranslation();
  const [latestNews, setLatestNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Загрузка последних новостей
  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
        const language = i18n.language;
        
        const url = `${API_BASE_URL}/api/news/with_translations/?lang=${language}&limit=3`;
        
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setLatestNews(data.slice(0, 3));
        
      } catch (err) {
        console.error('Error fetching latest news:', err);
        setError(err.message);
        // Заглушки для демонстрации
        const demoNews = [
          {
            id: 1,
            title: "Важные обновления платформы",
            excerpt: "Мы запустили новые функции для улучшения пользовательского опыта и производительности системы.",
            content: "Мы рады сообщить о выпуске крупного обновления нашей платформы. Новые функции включают в себя улучшенный интерфейс, расширенные возможности аналитики и оптимизированную работу на мобильных устройствах. Эти улучшения помогут нашим пользователям работать более эффективно и достигать лучших результатов.\n\nОсновные изменения:\n• Обновленный дизайн интерфейса\n• Новая система аналитики в реальном времени\n• Улучшенная мобильная версия\n• Оптимизация производительности\n\nМы продолжаем работать над улучшением платформы и будем рады получить ваши отзывы.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=1080&q=80",
            date: new Date().toISOString(),
            category: { name: "Обновления", color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
            slug: "platform-updates",
            readingTime: "3 мин"
          },
          {
            id: 2,
            title: "Новые партнерства и сотрудничество",
            excerpt: "Расширяем возможности платформы через стратегические партнерства с ведущими компаниями.",
            content: "Мы заключили стратегические партнерства с несколькими ведущими технологическими компаниями. Эти сотрудничества позволят нам предоставлять нашим пользователям еще более широкий спектр услуг и интеграций.\n\nНовые возможности включают:\n• Интеграция с популярными CRM-системами\n• Расширенные инструменты аналитики\n• Улучшенная безопасность данных\n• Новые способы монетизации\n\nМы уверены, что эти партнерства помогут нам создать еще более мощную и удобную платформу для всех наших пользователей.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=1080&q=80",
            date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
            category: { name: "Партнерства", color: "bg-gradient-to-r from-blue-600 to-indigo-600" },
            slug: "new-partnerships",
            readingTime: "4 мин"
          },
          {
            id: 3,
            title: "Веб-конференция 2024",
            excerpt: "Присоединяйтесь к нашей ежегодной веб-конференции, чтобы узнать о последних тенденциях.",
            content: "Мы рады пригласить вас на нашу ежегодную веб-конференцию, которая состоится в этом году в онлайн-формате. Мероприятие соберет ведущих экспертов отрасли, которые поделятся своими знаниями и опытом.\n\nТемы конференции:\n• Будущее веб-разработки\n• Искусственный интеллект в бизнесе\n• Кибербезопасность\n• Цифровая трансформация\n\nУчастие бесплатное, требуется предварительная регистрация. Все зарегистрированные участники получат запись мероприятия.",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=1080&q=80",
            date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
            category: { name: "События", color: "bg-gradient-to-r from-cyan-500 to-blue-500" },
            slug: "web-conference-2024",
            readingTime: "2 мин"
          }
        ];
        setLatestNews(demoNews);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestNews();
  }, [i18n.language]);

  // Функция для поделиться
  const shareNews = async (newsItem) => {
    const shareData = {
      title: newsItem.title,
      text: newsItem.excerpt,
      url: window.location.origin + `/news/${newsItem.slug || newsItem.id}`,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        alert(t('news.linkCopied') || 'Ссылка скопирована в буфер обмена');
      }
    } catch (err) {
      console.log('Error sharing:', err);
    }
  };

  // Форматирование даты
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString(i18n.language, {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  // Скелетон загрузки
  if (loading) {
    return (
        <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-cyan-50 relative overflow-hidden">
        {/* Исчезающий эффект внизу */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-10"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-3 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
              <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                {t('home.newsSection', 'Latest Updates')}
              </div>
            </div>
            <div className="h-12 bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden animate-pulse">
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-6 bg-gray-200 rounded-full w-24"></div>
                    <div className="h-4 bg-gray-200 rounded w-16"></div>
                  </div>
                  <div className="h-6 bg-gray-200 rounded w-full mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-11/12 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/5 mb-4"></div>
                  <div className="flex items-center justify-between">
                    <div className="h-4 bg-gray-200 rounded w-20"></div>
                    <div className="h-8 bg-gray-200 rounded-full w-8"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute inset-0 bg-grid-blue-200/30 bg-[length:60px_60px]"></div>
      
      {/* Исчезающий эффект внизу - улучшенная версия */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none z-20"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full animate-bounce"></div>
            <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider bg-white/80 px-4 py-2 rounded-full border border-blue-100">
              {t('home.newsSection', 'Latest Updates')}
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            {t('home.latestNews', 'Latest News')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-sm">
            {t('home.latestNewsSubtitle', 'Stay updated with our latest company news and announcements')}
          </p>
        </div>

        {/* Сетка новостей */}
        {error && latestNews.length === 0 ? (
          <div className="text-center py-16 bg-white/80 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl relative z-30">
            <div className="text-8xl mb-6">📰</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              {t('news.loadError', 'Failed to load news')}
            </h3>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-2xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {t('news.tryAgain', 'Try Again')}
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 relative z-30">
              {latestNews.map((news, index) => (
                <article 
                  key={news.id}
                  className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20 hover:border-blue-200/50 transition-all duration-500 transform hover:-translate-y-4"
                  onMouseEnter={() => setHoveredCard(news.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animation: 'cardEntrance 0.6s ease-out both'
                  }}
                >
                  {/* Градиентный overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Изображение новости */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: '1/1' }}>
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=1080&q=80';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    
                    {/* Категория */}
                    <div className="absolute top-4 left-4">
                      <span className={`${news.category?.color || 'bg-gradient-to-r from-blue-500 to-cyan-500'} text-white px-4 py-2 rounded-2xl text-xs font-bold shadow-lg backdrop-blur-sm`}>
                        {news.category?.name || t('news.news', 'News')}
                      </span>
                    </div>

                    {/* Дата */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1.5 rounded-2xl text-sm font-semibold shadow-lg">
                      {formatDate(news.date)}
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <Link
                        to={`/news/${news.id}`}
                        className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-white/90 backdrop-blur-sm text-blue-600 px-6 py-3 rounded-2xl font-bold shadow-2xl hover:bg-white hover:scale-110"
                      >
                        {t('news.readMore', 'Read More')}
                      </Link>
                    </div>
                  </div>

                  {/* Контент новости */}
                  <div className="relative p-6 z-10">
                    <div className="flex items-center justify-between mb-4">
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
                      <Link
                        to={`/news/${news.id}`}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-all duration-300 group/readmore"
                      >
                        <span>{t('news.readMore', 'Read More')}</span>
                        <svg className="w-4 h-4 transform group-hover/readmore:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                      
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => shareNews(news)}
                          className="p-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-md"
                          title={t('news.share', 'Share')}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Акцентная полоска */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-500"></div>
                </article>
              ))}
            </div>

            {/* Кнопка "Все новости" */}
            <div className="text-center relative z-30">
              <Link
                to="/news"
                state={{ scrollToTop: true }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl font-bold group"
              >
                <span>{t('home.viewAllNews', 'View All News')}</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </>
        )}
      </div>

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
        @keyframes cardEntrance {
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
        .bg-grid-blue-200\\/50 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23bfdbfe'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  );
};

export default LatestNewsSection;