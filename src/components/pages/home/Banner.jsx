// components/ITHeroBanner.jsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Banner.css';

const ITHeroBanner = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  // ✅ Универсальная функция для получения ссылки на картинку
  const getImageUrl = (path) => {
    // Если это полный URL (https://...), возвращаем как есть
    if (path.startsWith('http')) return path;
    // Если это локальный путь (например, /images/it-bg-1.jpg)
    return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
  };

  // ✅ Массив фоновых изображений (можно вставлять URL или локальные пути)
  const backgroundImages = [
    'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61', // Внешний URL
    '/images/it-bg-2.jpg', // Локальный файл
    '/images/it-bg-3.jpg',
    '/images/it-bg-4.jpg'
  ];

  const slides = [
    {
      title: t('hero.it.slides.0.title'),
      subtitle: t('hero.it.slides.0.subtitle'),
      description: t('hero.it.slides.0.description'),
    },
    {
      title: t('hero.it.slides.1.title'),
      subtitle: t('hero.it.slides.1.subtitle'),
      description: t('hero.it.slides.1.description'),
    },
    {
      title: t('hero.it.slides.2.title'),
      subtitle: t('hero.it.slides.2.subtitle'),
      description: t('hero.it.slides.2.description'),
    },
    {
      title: t('hero.it.slides.3.title'),
      subtitle: t('hero.it.slides.3.subtitle'),
      description: t('hero.it.slides.3.description'),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Фоновые изображения */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${getImageUrl(image)})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
      ))}

      {/* Стрелки */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-blue-500 bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-300 group"
      >
        <svg className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-blue-500 bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-300 group"
      >
        <svg className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Индикаторы */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-blue-500 scale-125'
                : 'bg-blue-500 bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ITHeroBanner;
