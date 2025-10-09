// NewsPage.jsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './NewsPage.css';

const NewsPage = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [news] = useState([
    {
      id: 1,
      title: "news.featured.1.title",
      excerpt: "news.featured.1.excerpt",
      image: "/images/news/featured-1.jpg",
      date: "2024-01-15",
      category: "news.categories.events"
    },
    {
      id: 2,
      title: "news.featured.2.title",
      excerpt: "news.featured.2.excerpt",
      image: "/images/news/featured-2.jpg",
      date: "2024-01-10",
      category: "news.categories.academic"
    },
    {
      id: 3,
      title: "news.featured.3.title",
      excerpt: "news.featured.3.excerpt",
      image: "/images/news/featured-3.jpg",
      date: "2024-01-05",
      category: "news.categories.achievements"
    }
  ]);

  const [allNews] = useState([
    {
      id: 4,
      title: "news.items.1.title",
      excerpt: "news.items.1.excerpt",
      image: "/images/news/news-1.jpg",
      date: "2024-01-12",
      category: "news.categories.academic",
      content: "news.full.1.content"
    },
    {
      id: 5,
      title: "news.items.2.title",
      excerpt: "news.items.2.excerpt",
      image: "/images/news/news-2.jpg",
      date: "2024-01-08",
      category: "news.categories.events",
      content: "news.full.2.content"
    },
    {
      id: 6,
      title: "news.items.3.title",
      excerpt: "news.items.3.excerpt",
      image: "/images/news/news-3.jpg",
      date: "2024-01-03",
      category: "news.categories.achievements",
      content: "news.full.3.content"
    },
    {
      id: 7,
      title: "news.items.4.title",
      excerpt: "news.items.4.excerpt",
      image: "/images/news/news-4.jpg",
      date: "2023-12-28",
      category: "news.categories.academic",
      content: "news.full.4.content"
    },
    {
      id: 8,
      title: "news.items.5.title",
      excerpt: "news.items.5.excerpt",
      image: "/images/news/news-5.jpg",
      date: "2023-12-20",
      category: "news.categories.events",
      content: "news.full.5.content"
    },
    {
      id: 9,
      title: "news.items.6.title",
      excerpt: "news.items.6.excerpt",
      image: "/images/news/news-6.jpg",
      date: "2023-12-15",
      category: "news.categories.achievements",
      content: "news.full.6.content"
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % news.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [news.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % news.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + news.length) % news.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="news-page min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">
            {t('news.title')}
          </h1>
          <p className="text-xl text-center text-blue-100 max-w-2xl mx-auto">
            {t('news.subtitle')}
          </p>
        </div>
      </section>

      {/* Featured News Slider */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            {t('news.featuredTitle')}
          </h2>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Slider */}
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {news.map((item, index) => (
                  <div key={item.id} className="w-full flex-shrink-0">
                    <div className="relative h-96 md:h-[500px]">
                      <img 
                        src={item.image} 
                        alt={t(item.title)}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <div className="max-w-4xl">
                          <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm mb-4">
                            {t(item.category)}
                          </span>
                          <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            {t(item.title)}
                          </h3>
                          <p className="text-lg mb-4 text-gray-200">
                            {t(item.excerpt)}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-blue-200">
                              {new Date(item.date).toLocaleDateString('ru-RU')}
                            </span>
                            <Link 
                              to={`/news/${item.id}`}
                              className="bg-white text-blue-800 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
                            >
                              {t('news.readMore')}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-3">
              {news.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All News Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            {t('news.allNews')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allNews.map((newsItem) => (
              <div 
                key={newsItem.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <img 
                    src={newsItem.image} 
                    alt={t(newsItem.title)}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                      {t(newsItem.category)}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <span>{new Date(newsItem.date).toLocaleDateString('ru-RU')}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {t(newsItem.title)}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {t(newsItem.excerpt)}
                  </p>
                  
                  <Link 
                    to={`/news/${newsItem.id}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300"
                  >
                    {t('news.readMore')}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;