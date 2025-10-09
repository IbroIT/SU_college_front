// NewsDetail.jsx
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import './NewsPage.css';

const NewsDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  // 🔹 Добавляем эффект прокрутки вверх
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const newsData = {
    1: {
      title: "news.featured.1.title",
      content: "news.full.1.content",
      image: "/images/news/featured-1.jpg",
      date: "2024-01-15",
      category: "news.categories.events",
      author: "news.author"
    },
    2: {
      title: "news.featured.2.title",
      content: "news.full.2.content",
      image: "/images/news/featured-2.jpg",
      date: "2024-01-10",
      category: "news.categories.academic",
      author: "news.author"
    },
    3: {
      title: "news.featured.3.title",
      content: "news.full.3.content",
      image: "/images/news/featured-3.jpg",
      date: "2024-01-05",
      category: "news.categories.achievements",
      author: "news.author"
    },
    4: {
      title: "news.items.1.title",
      content: "news.full.1.content",
      image: "/images/news/news-1.jpg",
      date: "2024-01-12",
      category: "news.categories.academic",
      author: "news.author"
    },
    5: {
      title: "news.items.2.title",
      content: "news.full.2.content",
      image: "/images/news/news-2.jpg",
      date: "2024-01-08",
      category: "news.categories.events",
      author: "news.author"
    },
    6: {
      title: "news.items.3.title",
      content: "news.full.3.content",
      image: "/images/news/news-3.jpg",
      date: "2024-01-03",
      category: "news.categories.achievements",
      author: "news.author"
    },
    7: {
      title: "news.items.4.title",
      content: "news.full.4.content",
      image: "/images/news/news-4.jpg",
      date: "2023-12-28",
      category: "news.categories.academic",
      author: "news.author"
    },
    8: {
      title: "news.items.5.title",
      content: "news.full.5.content",
      image: "/images/news/news-5.jpg",
      date: "2023-12-20",
      category: "news.categories.events",
      author: "news.author"
    },
    9: {
      title: "news.items.6.title",
      content: "news.full.6.content",
      image: "/images/news/news-6.jpg",
      date: "2023-12-15",
      category: "news.categories.achievements",
      author: "news.author"
    }
  };

  const newsItem = newsData[id];

  if (!newsItem) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Новость не найдена</p>
          <Link to="/news" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Вернуться к новостям
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="news-detail min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link 
            to="/news" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('news.backToNews')}
          </Link>
        </div>
      </nav>

      {/* Article */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            {t(newsItem.category)}
          </span>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {t(newsItem.title)}
          </h1>
          <div className="flex items-center text-gray-600 mb-6">
            <span className="mr-4">{new Date(newsItem.date).toLocaleDateString('ru-RU')}</span>
            <span>{t(newsItem.author)}</span>
          </div>
        </header>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <img 
            src={newsItem.image} 
            alt={t(newsItem.title)}
            className="w-full h-96 object-cover"
          />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
              {t(newsItem.content)}
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <Link 
            to="/news" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            {t('news.backToNews')}
          </Link>
        </div>
      </article>
    </div>
  );
};

export default NewsDetail;
