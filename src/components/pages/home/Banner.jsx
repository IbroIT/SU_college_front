import { useState, useEffect } from 'react';
import img1 from '../../../assets/banner/1.jpg';
import img2 from '../../../assets/banner/photo_2022-08-31_17-03-13.jpg';
import img3 from '../../../assets/banner/IMG_9443.jpg';
const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Массив с изображениями для слайдера
  const slides = [
    // {
    //   id: 1,
    //   image: img1,
    // },
    {
      id: 2,
      image: img2,
    },
    {
      id: 3,
      image: img3,
    },
  ];

  // Автоматическая смена слайдов
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Переход к конкретному слайду
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Переход к следующему слайду
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Переход к предыдущему слайду
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Слайды */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Кнопки навигации */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-blue-600 p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
        aria-label="Предыдущий слайд"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-blue-600 p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
        aria-label="Следующий слайд"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Индикаторы слайдов */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>

      {/* Номер текущего слайда */}
      <div className="absolute bottom-6 right-6 bg-blue-600/80 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default Banner;