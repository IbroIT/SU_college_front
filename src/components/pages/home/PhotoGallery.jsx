// components/PhotoGallery.jsx
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import img1 from '../../../assets/gallery/506A0617.JPG'
import img2 from '../../../assets/gallery/506A0632.JPG'
import img3 from '../../../assets/gallery/BC0B2032.jpg'
import img4 from '../../../assets/gallery/BC0B2041.jpg'
import img5 from '../../../assets/gallery/BC0B2355.jpg'
import img6 from '../../../assets/gallery/BC0B6214.jpg'


// SVG Icons
const ChevronLeftIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronRightIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PlayIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5V19L19 12L8 5Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

const PauseIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="4" width="4" height="16" fill="currentColor"/>
    <rect x="14" y="4" width="4" height="16" fill="currentColor"/>
  </svg>
);

const ExpandIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 3H5C4.44772 3 4 3.44772 4 4V7M20 7V4C20 3.44772 19.5523 3 19 3H16M16 21H19C19.5523 21 20 20.5523 20 20V17M4 17V20C4 20.5523 4.44772 21 5 21H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const PhotoGallery = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const timerRef = useRef(null);
  const galleryRef = useRef(null);

  // Mock photos - replace with actual imports
  const photos = [
    {
      id: 1,
      src: img1,
      alt: t('gallery.photos.campus'),
      title: t('gallery.photos.campus')
    },
    {
      id: 2,
      src: img2,
      alt: t('gallery.photos.labs'),
      title: t('gallery.photos.labs')
    },
    {
      id: 3,
      src: img3,
      alt: t('gallery.photos.students'),
      title: t('gallery.photos.students')
    },
    {
      id: 4,
      src: img4,
      alt: t('gallery.photos.classrooms'),
      title: t('gallery.photos.classrooms')
    },
    {
      id: 5,
      src: img5,
      alt: t('gallery.photos.events'),
      title: t('gallery.photos.events')
    },
    {
      id: 6,
      src: img6,
      alt: t('gallery.photos.graduation'),
      title: t('gallery.photos.graduation')
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === photos.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isPlaying, photos.length]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === photos.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? photos.length - 1 : currentIndex - 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      galleryRef.current?.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
      }
      if (e.key === 'Escape' && isFullscreen) {
        toggleFullscreen();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isFullscreen]);

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Main Gallery */}
        <div 
          ref={galleryRef}
          className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Image */}
          <div className="relative aspect-video bg-gray-800">
            <img
              src={photos[currentIndex].src}
              alt={photos[currentIndex].alt}
              className="w-full h-full object-cover transition-opacity duration-500"
            />

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300 group"
            >
              <ChevronLeftIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300 group"
            >
              <ChevronRightIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>

            {/* Control Bar */}
            <div className="absolute top-4 right-4 flex items-center space-x-2 bg-black/50 rounded-lg p-2 backdrop-blur-sm">
              <button
                onClick={togglePlay}
                className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/20 rounded transition-colors duration-200"
              >
                {isPlaying ? (
                  <PauseIcon className="w-5 h-5" />
                ) : (
                  <PlayIcon className="w-5 h-5" />
                )}
              </button>
              
              <button
                onClick={toggleFullscreen}
                className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/20 rounded transition-colors duration-200"
              >
                <ExpandIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
            <div
              className="h-full bg-blue-600 transition-all duration-1000 ease-linear"
              style={{
                width: `${((currentIndex + 1) / photos.length) * 100}%`
              }}
            />
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="mt-8">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {photos.map((photo, index) => (
              <button
                key={photo.id}
                onClick={() => goToSlide(index)}
                className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 group ${
                  index === currentIndex 
                    ? 'border-blue-600 ring-2 ring-blue-200' 
                    : 'border-gray-300 hover:border-blue-400'
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-blue-600 transition-opacity duration-300 ${
                  index === currentIndex ? 'opacity-20' : 'opacity-0 group-hover:opacity-10'
                }`} />
                
                {/* Active Indicator */}
                {index === currentIndex && (
                  <div className="absolute top-2 right-2 w-3 h-3 bg-blue-600 rounded-full ring-2 ring-white"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Overlay */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={photos[currentIndex].src}
              alt={photos[currentIndex].alt}
              className="max-w-full max-h-full object-contain"
            />
            
            <button
              onClick={toggleFullscreen}
              className="absolute top-4 right-4 w-12 h-12 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-200"
            >
              <ExpandIcon className="w-6 h-6 transform rotate-45" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;