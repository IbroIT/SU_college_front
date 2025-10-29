import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './MultimediaPrograms.css';

const MultimediaPrograms = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [activeCourse, setActiveCourse] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const courses = [
    {
      title: t('multimedia.courses.design.title'),
      description: t('multimedia.courses.design.description'),
      icon: '🎨',
      color: 'from-pink-500 to-purple-500',
      tools: ['Adobe Creative Suite', 'Blender', 'Figma', 'Procreate']
    },
    {
      title: t('multimedia.courses.video.title'),
      description: t('multimedia.courses.video.description'),
      icon: '🎬',
      color: 'from-orange-500 to-red-500',
      tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Final Cut']
    },
    {
      title: t('multimedia.courses.vr.title'),
      description: t('multimedia.courses.vr.description'),
      icon: '🥽',
      color: 'from-cyan-500 to-blue-500',
      tools: ['Unity', 'Unreal Engine', 'Oculus SDK', '3D Modeling']
    },
    {
      title: t('multimedia.courses.ar.title'),
      description: t('multimedia.courses.ar.description'),
      icon: '📱',
      color: 'from-green-500 to-emerald-500',
      tools: ['ARKit', 'ARCore', 'Vuforia', 'Spark AR']
    }
  ];

  const skills = [
    t('multimedia.skills.design'),
    t('multimedia.skills.video'),
    t('multimedia.skills.interactive'),
    t('multimedia.skills.vrar')
  ];

  const admissionSteps = [
    t('multimedia.admission.steps.portfolio'),
    t('multimedia.admission.steps.application'),
    t('multimedia.admission.steps.interview'),
    t('multimedia.admission.steps.enrollment')
  ];

  const creativeTools = [
    t('multimedia.tools.design'),
    t('multimedia.tools.animation'),
    t('multimedia.tools.vrar'),
    t('multimedia.tools.video')
  ];

  useEffect(() => {
    setIsVisible(true);
    startParticleAnimation();
  }, []);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const startParticleAnimation = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
        shape: Math.random() > 0.5 ? 'circle' : 'square'
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        ctx.beginPath();
        ctx.fillStyle = particle.color;
        
        if (particle.shape === 'circle') {
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        } else {
          ctx.fillRect(particle.x, particle.y, particle.size * 2, particle.size * 2);
        }
        
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });

      requestAnimationFrame(animate);
    };

    animate();
  };

  return (
    <div 
      ref={containerRef}
      className="multimedia-programs min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40"
      />

      {/* Interactive Light Effect */}
      <div 
        className="pointer-events-none fixed inset-0 opacity-20 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.1), transparent 80%)`
        }}
      />

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white opacity-10 animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 40 + 20}px`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 20}s`
            }}
          >
            {['◇', '○', '□', '△', '☆'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center space-x-4 mb-6 bg-black bg-opacity-30 rounded-full px-6 py-3 border border-white border-opacity-20">
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
            <span className="text-pink-400 font-mono text-sm">{t('multimedia.creativeTech')}</span>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
            {t('multimedia.title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-200 max-w-4xl mx-auto leading-relaxed font-light">
            {t('multimedia.shortDescription')}
          </p>

          {/* Animated Creative Tools */}
          <div className="max-w-2xl mx-auto mt-12 bg-black bg-opacity-50 rounded-2xl p-6 border border-purple-500 border-opacity-30 backdrop-blur-sm">
            <div className="flex space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {creativeTools.map((tool, index) => (
                <div key={tool} className="p-3 bg-purple-900 bg-opacity-30 rounded-lg border border-purple-500 border-opacity-20 hover:border-pink-400 transition-all duration-300">
                  <div className="text-2xl mb-2">
                    {['🎨', '✨', '🥽', '🎬'][index]}
                  </div>
                  <span className="text-sm text-purple-300">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Program */}
        <section className={`mb-20 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-black bg-opacity-40 rounded-3xl p-8 border border-pink-500 border-opacity-20 backdrop-blur-sm relative overflow-hidden">
            {/* Animated Border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-pulse"></div>
            
            <div className="flex items-center mb-8">
              <div className="w-2 h-8 bg-pink-400 rounded-full mr-4 animate-pulse"></div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                {t('multimedia.about.title')}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  {t('multimedia.about.content1')}
                </p>
                <p className="text-lg text-purple-200 leading-relaxed">
                  {t('multimedia.about.content2')}
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-900 to-purple-900 rounded-2xl p-6 border border-pink-400 border-opacity-30">
                <h4 className="text-lg font-bold text-white mb-4">{t('multimedia.youWillLearn')}</h4>
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill, index) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      <span className="text-purple-200 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className={`mb-20 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {t('multimedia.courses.title')}
            </h2>
            <p className="text-purple-200">{t('multimedia.courses.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Course Details */}
            <div className="bg-black bg-opacity-40 rounded-2xl p-8 border border-cyan-500 border-opacity-30 backdrop-blur-sm h-fit sticky top-8">
              <div className="text-6xl mb-4 text-center animate-bounce">
                {courses[activeCourse].icon}
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-cyan-300">
                {courses[activeCourse].title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-center mb-6">
                {courses[activeCourse].description}
              </p>
              
              {/* Tools */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-cyan-400 mb-3 text-center">{t('multimedia.tools.title')}</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {courses[activeCourse].tools.map((tool, index) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-cyan-900 bg-opacity-30 rounded-full text-cyan-300 text-xs border border-cyan-500 border-opacity-30"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-xl font-bold hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                {t('multimedia.startCreativePath')}
              </button>
            </div>

            {/* Course List */}
            <div className="space-y-4">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border-2 backdrop-blur-sm cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                    activeCourse === index
                      ? `bg-gradient-to-r ${course.color} bg-opacity-20 border-cyan-400 shadow-2xl shadow-cyan-500/20`
                      : 'bg-black bg-opacity-20 border-purple-700 hover:border-pink-400'
                  }`}
                  onClick={() => setActiveCourse(index)}
                  onMouseEnter={() => setActiveCourse(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`text-3xl ${activeCourse === index ? 'animate-pulse' : ''}`}>
                      {course.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {course.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {course.tools.slice(0, 2).map((tool, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300 font-mono"
                          >
                            {tool}
                          </span>
                        ))}
                        {course.tools.length > 2 && (
                          <span className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300">
                            +{course.tools.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeCourse === index ? 'bg-cyan-400 animate-ping' : 'bg-purple-600'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Admission Section */}
        <section className={`transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-3xl p-8 border border-cyan-400 border-opacity-30 backdrop-blur-sm relative overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-white"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    fontSize: `${Math.random() * 20 + 10}px`
                  }}
                >
                  {['◇', '○', '☆'][Math.floor(Math.random() * 3)]}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <h2 className="text-4xl font-bold mb-4 text-white">
                  {t('multimedia.admission.title')}
                </h2>
                <p className="text-cyan-100 text-lg leading-relaxed mb-6">
                  {t('multimedia.admission.description')}
                </p>
                <div className="space-y-3">
                  {admissionSteps.map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center animate-pulse">
                        <span className="text-black text-xs font-bold">{index + 1}</span>
                      </div>
                      <span className="text-white">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <div className="inline-block p-8 bg-black bg-opacity-30 rounded-2xl border border-pink-500 border-opacity-20">
                  <div className="text-6xl mb-4 animate-bounce">🎨</div>
                  <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-pink-500/25">
                    {t('multimedia.admission.cta')}
                  </button>
                  <p className="text-cyan-200 mt-4 text-sm">
                    {t('multimedia.showPotential')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Floating Creative Tools */}
        <div className="fixed bottom-8 right-8 space-y-4">
          <button className="w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-bounce">
            <span className="text-xl">🎨</span>
          </button>
          <button className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
            <span className="text-xl">💫</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultimediaPrograms;