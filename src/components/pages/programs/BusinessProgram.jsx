import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './BusinessPrograms.css';

const BusinessPrograms = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [activeProgram, setActiveProgram] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const programs = [
    {
      title: t('business.programs.entrepreneurship.title'),
      description: t('business.programs.entrepreneurship.description'),
      icon: '🚀',
      color: 'from-emerald-500 to-green-500',
      skills: ['Business Planning', 'Funding Strategies', 'Market Analysis', 'Startup Management']
    },
    {
      title: t('business.programs.management.title'),
      description: t('business.programs.management.description'),
      icon: '💼',
      color: 'from-blue-500 to-cyan-500',
      skills: ['Leadership', 'Strategic Planning', 'Team Management', 'Operations']
    },
    {
      title: t('business.programs.finance.title'),
      description: t('business.programs.finance.description'),
      icon: '📊',
      color: 'from-purple-500 to-indigo-500',
      skills: ['Financial Analysis', 'Investment Strategies', 'Risk Management', 'Accounting']
    },
    {
      title: t('business.programs.marketing.title'),
      description: t('business.programs.marketing.description'),
      icon: '🎯',
      color: 'from-orange-500 to-red-500',
      skills: ['Digital Marketing', 'Brand Strategy', 'Consumer Behavior', 'Market Research']
    }
  ];

  const competencies = [
    t('business.competencies.leadership'),
    t('business.competencies.strategy'),
    t('business.competencies.innovation'),
    t('business.competencies.analytics')
  ];

  const admissionSteps = [
    t('business.admission.steps.application'),
    t('business.admission.steps.assessment'),
    t('business.admission.steps.interview'),
    t('business.admission.steps.enrollment')
  ];

  const businessTools = [
    t('business.tools.analytics'),
    t('business.tools.strategy'),
    t('business.tools.management'),
    t('business.tools.finance')
  ];

  const stats = [
    { value: '98%', label: t('business.stats.employment') },
    { value: '50K+', label: t('business.stats.alumni') },
    { value: '150+', label: t('business.stats.partners') },
    { value: '95%', label: t('business.stats.satisfaction') }
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
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        color: `hsl(${210 + Math.random() * 60}, 70%, 60%)`,
        shape: Math.random() > 0.7 ? 'square' : 'circle'
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.03)';
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
      className="business-programs min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
      />

      {/* Interactive Light Effect */}
      <div 
        className="pointer-events-none fixed inset-0 opacity-15 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.15), transparent 80%)`
        }}
      />

      {/* Floating Business Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-blue-300 opacity-10 animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 15}px`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 15}s`
            }}
          >
            {['📈', '💼', '🎯', '⚡', '🌟'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center space-x-4 mb-6 bg-black bg-opacity-30 rounded-full px-6 py-3 border border-blue-400 border-opacity-20">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-emerald-400 font-mono text-sm">{t('business.leadershipExcellence')}</span>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent animate-gradient-x">
            {t('business.title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed font-light">
            {t('business.shortDescription')}
          </p>

          {/* Business Tools */}
          <div className="max-w-2xl mx-auto mt-12 bg-black bg-opacity-40 rounded-2xl p-6 border border-emerald-500 border-opacity-30 backdrop-blur-sm">
            <div className="flex space-x-2 mb-4">
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {businessTools.map((tool, index) => (
                <div key={tool} className="p-3 bg-blue-900 bg-opacity-30 rounded-lg border border-blue-500 border-opacity-20 hover:border-emerald-400 transition-all duration-300">
                  <div className="text-2xl mb-2">
                    {['📊', '🎯', '⚡', '💡'][index]}
                  </div>
                  <span className="text-sm text-blue-300">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Program */}
        <section className={`mb-20 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-black bg-opacity-40 rounded-3xl p-8 border border-emerald-500 border-opacity-20 backdrop-blur-sm relative overflow-hidden">
            {/* Animated Border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-indigo-500 animate-pulse"></div>
            
            <div className="flex items-center mb-8">
              <div className="w-2 h-8 bg-emerald-400 rounded-full mr-4 animate-pulse"></div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                {t('business.about.title')}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  {t('business.about.content1')}
                </p>
                <p className="text-lg text-blue-200 leading-relaxed">
                  {t('business.about.content2')}
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-900 to-blue-900 rounded-2xl p-6 border border-emerald-400 border-opacity-30">
                <h4 className="text-lg font-bold text-white mb-4">{t('business.coreCompetencies')}</h4>
                <div className="grid grid-cols-2 gap-3">
                  {competencies.map((competency, index) => (
                    <div key={competency} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <span className="text-blue-200 text-sm">{competency}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className={`mb-20 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              {t('business.programs.title')}
            </h2>
            <p className="text-blue-200">{t('business.programs.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Program Details */}
            <div className="bg-black bg-opacity-40 rounded-2xl p-8 border border-blue-500 border-opacity-30 backdrop-blur-sm h-fit sticky top-8">
              <div className="text-6xl mb-4 text-center animate-bounce">
                {programs[activeProgram].icon}
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-blue-300">
                {programs[activeProgram].title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-center mb-6">
                {programs[activeProgram].description}
              </p>
              
              {/* Skills */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-emerald-400 mb-3 text-center">{t('business.keySkills')}</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {programs[activeProgram].skills.map((skill, index) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-900 bg-opacity-30 rounded-full text-blue-300 text-xs border border-blue-500 border-opacity-30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white py-3 px-6 rounded-xl font-bold hover:from-emerald-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-emerald-500/25">
                {t('business.startBusinessPath')}
              </button>
            </div>

            {/* Program List */}
            <div className="space-y-4">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border-2 backdrop-blur-sm cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                    activeProgram === index
                      ? `bg-gradient-to-r ${program.color} bg-opacity-20 border-blue-400 shadow-2xl shadow-blue-500/20`
                      : 'bg-black bg-opacity-20 border-blue-700 hover:border-emerald-400'
                  }`}
                  onClick={() => setActiveProgram(index)}
                  onMouseEnter={() => setActiveProgram(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`text-3xl ${activeProgram === index ? 'animate-pulse' : ''}`}>
                      {program.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {program.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {program.skills.slice(0, 2).map((skill, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300 font-mono"
                          >
                            {skill}
                          </span>
                        ))}
                        {program.skills.length > 2 && (
                          <span className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300">
                            +{program.skills.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeProgram === index ? 'bg-blue-400 animate-ping' : 'bg-blue-600'
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
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-8 border border-emerald-400 border-opacity-30 backdrop-blur-sm relative overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-white"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    fontSize: `${Math.random() * 15 + 8}px`
                  }}
                >
                  {['📈', '💼', '🎯'][Math.floor(Math.random() * 3)]}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <h2 className="text-4xl font-bold mb-4 text-white">
                  {t('business.admission.title')}
                </h2>
                <p className="text-emerald-100 text-lg leading-relaxed mb-6">
                  {t('business.admission.description')}
                </p>
                <div className="space-y-3">
                  {admissionSteps.map((step, index) => (
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
                  <div className="text-6xl mb-4 animate-bounce">💼</div>
                  <button className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-emerald-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-emerald-500/25">
                    {t('business.admission.cta')}
                  </button>
                  <p className="text-blue-200 mt-4 text-sm">
                    {t('business.buildFuture')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Floating Action Buttons */}
        <div className="fixed bottom-8 right-8 space-y-4">
          <button className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-bounce">
            <span className="text-xl">💼</span>
          </button>
          <button className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
            <span className="text-xl">📊</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessPrograms;