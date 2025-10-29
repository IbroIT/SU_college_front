import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './MobileDevelopment.css';

const MobileDevelopment = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [activeCourse, setActiveCourse] = useState(0);
  const [activePlatform, setActivePlatform] = useState('all');
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const courses = [
    {
      title: t('mobile.courses.foundations.title'),
      description: t('mobile.courses.foundations.description'),
      icon: '📱',
      platform: 'both',
      color: 'from-blue-500 to-cyan-500',
      technologies: ['iOS SDK', 'Android SDK', 'Xcode', 'Android Studio'],
      level: t('mobile.levels.beginner')
    },
    {
      title: t('mobile.courses.reactNative.title'),
      description: t('mobile.courses.reactNative.description'),
      icon: '⚛️',
      platform: 'cross',
      color: 'from-cyan-500 to-blue-500',
      technologies: ['React Native', 'JavaScript', 'Redux', 'Expo'],
      level: t('mobile.levels.intermediate')
    },
    {
      title: t('mobile.courses.ios.title'),
      description: t('mobile.courses.ios.description'),
      icon: '🍎',
      platform: 'ios',
      color: 'from-gray-500 to-gray-700',
      technologies: ['Swift', 'SwiftUI', 'UIKit', 'Xcode'],
      level: t('mobile.levels.advanced')
    },
    {
      title: t('mobile.courses.android.title'),
      description: t('mobile.courses.android.description'),
      icon: '🤖',
      platform: 'android',
      color: 'from-green-500 to-emerald-500',
      technologies: ['Kotlin', 'Jetpack Compose', 'Android SDK', 'Material Design'],
      level: t('mobile.levels.advanced')
    }
  ];

  const platforms = [
    { 
      id: 'all', 
      name: t('mobile.platforms.all'), 
      icon: '🌐', 
      count: courses.length 
    },
    { 
      id: 'ios', 
      name: t('mobile.platforms.ios'), 
      icon: '🍎', 
      count: courses.filter(c => c.platform === 'ios' || c.platform === 'both').length 
    },
    { 
      id: 'android', 
      name: t('mobile.platforms.android'), 
      icon: '🤖', 
      count: courses.filter(c => c.platform === 'android' || c.platform === 'both').length 
    },
    { 
      id: 'cross', 
      name: t('mobile.platforms.cross'), 
      icon: '⚛️', 
      count: courses.filter(c => c.platform === 'cross').length 
    }
  ];

  const filteredCourses = courses.filter(course => 
    activePlatform === 'all' || 
    course.platform === activePlatform || 
    (activePlatform === 'both' && course.platform === 'both')
  );

  useEffect(() => {
    setIsVisible(true);
    startTechAnimation();
  }, []);

  const startTechAnimation = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = [];
    const particleCount = 30;

    const keywords = t('mobile.techKeywords', { returnObjects: true });

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        text: keywords[Math.floor(Math.random() * keywords.length)],
        size: Math.random() * 12 + 8,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
        opacity: Math.random() * 0.3 + 0.1
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.font = `${particle.size}px 'JetBrains Mono', monospace`;
        ctx.fillText(particle.text, particle.x, particle.y);

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < -100) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = -100;
        if (particle.y < -20) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = -20;
      });

      requestAnimationFrame(animate);
    };

    animate();
  };

  return (
    <div 
      ref={containerRef}
      className="mobile-development min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 text-white overflow-hidden"
    >
      {/* Animated Tech Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
      />

      {/* Floating App Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white opacity-10 animate-float-mobile"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 24 + 16}px`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 15}s`
            }}
          >
            {t('mobile.floatingIcons', { returnObjects: true })[Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center space-x-4 mb-6 bg-black bg-opacity-30 rounded-full px-6 py-3 border border-cyan-500 border-opacity-20">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-400 font-mono text-sm">{t('mobile.hero.tagline')}</span>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent animate-gradient-mobile">
            {t('mobile.title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed font-light">
            {t('mobile.shortDescription')}
          </p>
        </section>

        {/* About Profession */}
        <section className={`mb-45 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-black bg-opacity-40 rounded-3xl p-8 border border-blue-500 border-opacity-20 backdrop-blur-sm">
            <div className="flex items-center mb-8">
              <div className="w-2 h-8 bg-blue-400 rounded-full mr-4 animate-pulse"></div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {t('mobile.about.title')}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  {t('mobile.about.content')}
                </p>
                
                {/* Market Demand */}
                <div className="bg-gradient-to-r from-blue-900 to-cyan-900 rounded-2xl p-4 border border-blue-400 border-opacity-30">
                  <h4 className="text-lg font-bold text-white mb-3">{t('mobile.demand.title')}</h4>
                  <div className="space-y-2">
                    {t('mobile.demand.skills', { returnObjects: true }).map((item, index) => (
                      <div key={item.skill} className="flex items-center justify-between">
                        <span className="text-blue-200 text-sm">{item.skill}</span>
                        <div className="w-24 bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${item.demand}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="inline-block p-6 bg-gradient-to-br from-blue-900 to-cyan-900 rounded-2xl border border-cyan-400 border-opacity-30">
                  <div className="text-6xl mb-4 animate-bounce">🚀</div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {t('mobile.techStack', { returnObjects: true }).map((tech) => (
                      <div key={tech} className="flex items-center space-x-2 bg-black bg-opacity-30 rounded-lg p-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-300">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Filter */}
        <section className={`mb-58 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex flex-wrap gap-4 justify-center">
            {platforms.map((platform) => (
              <button
                key={platform.id}
                onClick={() => setActivePlatform(platform.id)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border-2 ${
                  activePlatform === platform.id
                    ? 'bg-cyan-600 bg-opacity-20 border-cyan-400 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-black bg-opacity-20 border-gray-600 text-gray-300 hover:border-cyan-500'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{platform.icon}</span>
                  <span>{platform.name}</span>
                  <span className="bg-cyan-900 bg-opacity-30 text-cyan-300 px-2 py-1 rounded-full text-xs">
                    {platform.count}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Courses Section */}
        <section className={`mb-20 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              {t('mobile.courses.title')}
            </h2>
            <p className="text-blue-200">{t('mobile.courses.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Course List */}
            <div className="space-y-6">
              {filteredCourses.map((course, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border-2 backdrop-blur-sm cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                    activeCourse === index
                      ? `bg-gradient-to-r ${course.color} bg-opacity-20 border-cyan-400 shadow-2xl shadow-cyan-500/20`
                      : 'bg-black bg-opacity-20 border-gray-700 hover:border-blue-400'
                  }`}
                  onClick={() => setActiveCourse(courses.indexOf(course))}
                  onMouseEnter={() => setActiveCourse(courses.indexOf(course))}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`text-3xl ${activeCourse === index ? 'animate-pulse' : ''}`}>
                      {course.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-white">
                          {course.title}
                        </h3>
                        <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
                          {course.level}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {course.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                        {course.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300">
                            +{course.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span className="flex items-center space-x-1">
                          {course.platform === 'ios' && t('mobile.platformLabels.ios')}
                          {course.platform === 'android' && t('mobile.platformLabels.android')}
                          {course.platform === 'cross' && t('mobile.platformLabels.cross')}
                          {course.platform === 'both' && t('mobile.platformLabels.both')}
                        </span>
                        <span>•</span>
                        <span>{t('mobile.duration')}</span>
                      </div>
                    </div>
                    <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeCourse === index ? 'bg-cyan-400 animate-ping' : 'bg-gray-600'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Course Details */}
            <div className="bg-black bg-opacity-40 rounded-2xl p-8 border border-emerald-500 border-opacity-30 backdrop-blur-sm h-fit sticky top-8">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 animate-bounce">
                  {courses[activeCourse].icon}
                </div>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${
                  courses[activeCourse].platform === 'ios' ? 'bg-gray-600 text-white' :
                  courses[activeCourse].platform === 'android' ? 'bg-green-600 text-white' :
                  courses[activeCourse].platform === 'cross' ? 'bg-cyan-600 text-white' :
                  'bg-blue-600 text-white'
                }`}>
                  {courses[activeCourse].platform === 'ios' && t('mobile.platformTypes.ios')}
                  {courses[activeCourse].platform === 'android' && t('mobile.platformTypes.android')}
                  {courses[activeCourse].platform === 'cross' && t('mobile.platformTypes.cross')}
                  {courses[activeCourse].platform === 'both' && t('mobile.platformTypes.both')}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {courses[activeCourse].title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {courses[activeCourse].description}
                </p>
              </div>
              
              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-cyan-400 mb-3">{t('mobile.technologies')}:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {courses[activeCourse].technologies.map((tech, index) => (
                    <div key={tech} className="flex items-center space-x-2 bg-gray-800 bg-opacity-50 rounded-lg p-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-300 text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-xl font-bold hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                {t('mobile.startButton')} →
              </button>
            </div>
          </div>
        </section>

        {/* Admission Section */}
        <section className={`transition-all duration-1000 delay-1100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-emerald-900 to-cyan-900 rounded-3xl p-8 border border-emerald-400 border-opacity-30 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-4 text-white">
                  {t('mobile.admission.title')}
                </h2>
                <p className="text-cyan-100 text-lg leading-relaxed mb-6">
                  {t('mobile.admission.description')}
                </p>
                <div className="space-y-3">
                  {t('mobile.admission.steps', { returnObjects: true }).map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center animate-pulse">
                        <span className="text-black text-xs font-bold">{index + 1}</span>
                      </div>
                      <span className="text-white">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <div className="inline-block p-8 bg-black bg-opacity-30 rounded-2xl border border-emerald-500 border-opacity-20">
                  <div className="text-6xl mb-4 animate-bounce">📲</div>
                  <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-emerald-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-emerald-500/25">
                    {t('mobile.admission.cta')}
                  </button>
                  <p className="text-cyan-200 mt-4 text-sm">
                    {t('mobile.admission.footer')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Floating Dev Tools */}
        <div className="fixed bottom-8 right-8 space-y-4">
          <button className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-bounce">
            <span className="text-xl">📱</span>
          </button>
          <button className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
            <span className="text-xl">⚡</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileDevelopment;