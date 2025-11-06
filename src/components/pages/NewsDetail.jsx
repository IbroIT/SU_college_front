// NewsDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './NewsPage.css';

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Загрузка конкретной новости
  useEffect(() => {
    const fetchNewsDetail = async () => {
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

        const allNews = await response.json();
        
        // Найдем нужную новость по ID
        const foundNews = allNews.find(newsItem => newsItem.id === parseInt(id));
        
        if (!foundNews) {
          throw new Error('News not found');
        }
        
        setNews(foundNews);
        
      } catch (err) {
        console.error('Error fetching news detail:', err);
        setError(err.message);
        
        // Если не удается загрузить с бэкенда, показываем сообщение об ошибке
        // но не показываем заглушку, так как нужны реальные данные
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchNewsDetail();
    }
    
    // Прокрутка вверх при загрузке
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id, i18n.language]);

  // Форматирование даты
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString(i18n.language, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 flex items-center justify-center">
        <div className="text-center relative z-10 bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-2xl">
          <div className="relative inline-block mb-6">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
            <div className="absolute inset-0 rounded-full h-16 w-16 border-t-2 border-cyan-400 animate-ping"></div>
          </div>
          <p className="text-gray-700 font-semibold text-lg mb-2">{t('news.loading') || 'Загрузка новости...'}</p>
          <p className="text-gray-500 text-sm">{t('news.preparing') || 'Подготавливаем материал для чтения'}</p>
        </div>
      </div>
    );
  }

  if (error && !news) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl">
          <div className="text-6xl mb-6">❌</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('news.notFound') || 'Новость не найдена'}</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">{t('news.notFoundDescription') || 'К сожалению, запрошенная новость не существует или была удалена.'}</p>
          <button 
            onClick={() => navigate('/news')}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
          >
            {t('news.backToNews') || 'Вернуться к новостям'}
          </button>
        </div>
      </div>
    );
  }

  if (!news) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Навигация */}
      <div className="relative z-10 pt-8 pb-4">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate('/news')}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-all duration-300 group bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-white/20"
          >
            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>{t('news.backToNews') || 'Назад к новостям'}</span>
          </button>
        </div>
      </div>

      {/* Контент новости */}
      <article className="relative z-10 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20">
            {/* Изображение */}
            <div className="relative bg-gradient-to-br from-blue-100 to-cyan-100" style={{ aspectRatio: '1/1' }}>
              <img 
                src={news.image} 
                alt={news.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=1080&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Метаданные поверх изображения */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className={`${news.category?.color ? `bg-[${news.category.color}]` : 'bg-gradient-to-r from-blue-500 to-cyan-500'} text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-lg`}>
                    {news.category?.name || t('news.defaultCategory') || 'Новость'}
                  </span>
                  <span className="bg-white/90 text-gray-700 px-3 py-2 rounded-2xl text-sm font-semibold">
                    {formatDate(news.date)}
                  </span>
                </div>
              </div>
            </div>

            {/* Основной контент */}
            <div className="p-8 md:p-12">
              {/* Заголовок */}
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                  {news.title}
                </h1>
              </div>

              {/* Информация о дате */}
              <div className="flex items-center gap-3 mb-8 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  📅
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{t('news.publishedOn') || 'Опубликовано'}: {formatDate(news.date)}</p>
                </div>
              </div>

              {/* Основной текст */}
              <div className="prose prose-lg max-w-none">
                <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                  {news.content}
                </div>
              </div>

              {/* Кнопки действий внизу */}
              <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-4 justify-between items-center">
                <button
                  onClick={() => navigate('/news')}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-all duration-300 group"
                >
                  <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>{t('news.allNews') || 'Все новости'}</span>
                </button>

                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-2xl font-semibold transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  <span>{t('news.backToTop') || 'Наверх'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <style jsx>{`
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
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(1deg);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.2s ease-out both;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default NewsDetail;
