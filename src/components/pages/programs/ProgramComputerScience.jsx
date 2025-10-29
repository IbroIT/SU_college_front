import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './ComputerScience.css';

const ComputerScience = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [activeCourse, setActiveCourse] = useState(0);
  const canvasRef = useRef(null);

  const courses = [
    {
      title: t('computerScience.courses.foundations.title'),
      description: t('computerScience.courses.foundations.description'),
      icon: '⚡',
      tech: ['Python', 'JavaScript', 'Algorithms']
    },
    {
      title: t('computerScience.courses.ai.title'),
      description: t('computerScience.courses.ai.description'),
      icon: '🧠',
      tech: ['Machine Learning', 'Neural Networks', 'TensorFlow']
    },
    {
      title: t('computerScience.courses.web.title'),
      description: t('computerScience.courses.web.description'),
      icon: '🌐',
      tech: ['React', 'Node.js', 'Databases']
    },
    {
      title: t('computerScience.courses.mobile.title'),
      description: t('computerScience.courses.mobile.description'),
      icon: '📱',
      tech: ['iOS', 'Android', 'Flutter']
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    startMatrixAnimation();
  }, []);

  const startMatrixAnimation = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const chars = "01010101010101010101010101010101010101010101010101";
    const charArray = chars.split("");
    const font_size = 12;
    const columns = canvas.width / font_size;
    const drops = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = Math.random() * canvas.height;
    }

    const draw = () => {
      ctx.fillStyle = "rgba(15, 23, 42, 0.04)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = "#0ea5e9";
      ctx.font = font_size + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);
        
        if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 35);
    return () => clearInterval(interval);
  };

  return (
    <div className="computer-science min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Matrix Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-20"
      />

      {/* Animated Binary Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 text-xs opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 20}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-mono text-sm">COMPUTER_SCIENCE.EXE</span>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
            {t('computerScience.title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed font-light">
            {t('computerScience.shortDescription')}
          </p>

          {/* Animated Code Preview */}
          <div className="max-w-2xl mx-auto mt-12 bg-black bg-opacity-50 rounded-2xl p-6 border border-blue-500 border-opacity-30 backdrop-blur-sm">
            <div className="flex space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <pre className="text-green-400 font-mono text-sm overflow-x-auto">
              <code>
{`// ${t('computerScience.codePreview.welcome')}
function createFuture() {
  const innovation = learn();
  const creativity = build();
  return innovation + creativity;
}

while(true) {
  createFuture();
  break; // ${t('computerScience.codePreview.joke')}
}`}
              </code>
            </pre>
          </div>
        </section>

        {/* About Program */}
        <section className={`mb-20 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-black bg-opacity-40 rounded-3xl p-8 border border-cyan-500 border-opacity-20 backdrop-blur-sm">
            <div className="flex items-center mb-8">
              <div className="w-2 h-8 bg-cyan-400 rounded-full mr-4 animate-pulse"></div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {t('computerScience.about.title')}
              </h2>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed whitespace-pre-line">
              {t('computerScience.about.content')}
            </p>
            
            {/* Tech Stack */}
            <div className="mt-8 flex flex-wrap gap-4">
              {t('computerScience.techStack', { returnObjects: true }).map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-cyan-900 bg-opacity-30 rounded-full text-cyan-300 border border-cyan-500 border-opacity-30 text-sm font-mono animate-pulse"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className={`mb-20 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t('computerScience.courses.title')}
            </h2>
            <p className="text-blue-200">{t('computerScience.courses.choose')}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Course List */}
            <div className="space-y-4">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border-2 backdrop-blur-sm cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                    activeCourse === index
                      ? 'bg-blue-900 bg-opacity-30 border-cyan-400 shadow-2xl shadow-cyan-500/20'
                      : 'bg-black bg-opacity-20 border-gray-700 hover:border-cyan-600'
                  }`}
                  onClick={() => setActiveCourse(index)}
                  onMouseEnter={() => setActiveCourse(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{course.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {course.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {course.tech.map((item, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300 font-mono"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeCourse === index ? 'bg-green-400 animate-pulse' : 'bg-gray-600'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Course Details */}
            <div className="bg-black bg-opacity-40 rounded-2xl p-8 border border-purple-500 border-opacity-30 backdrop-blur-sm h-fit sticky top-8">
              <div className="text-6xl mb-4 text-center">
                {courses[activeCourse].icon}
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-purple-300">
                {courses[activeCourse].title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-center mb-6">
                {courses[activeCourse].description}
              </p>
              
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>{t('computerScience.courses.progress')}</span>
                  <span>25%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full transition-all duration-1000"
                    style={{ width: '25%' }}
                  ></div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-xl font-bold hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300">
                {t('computerScience.courses.startLearning')} →
              </button>
            </div>
          </div>
        </section>

        {/* Admission Section */}
        <section className={`transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-cyan-900 to-blue-900 rounded-3xl p-8 border border-cyan-400 border-opacity-30 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-4 text-white">
                  {t('computerScience.admission.title')}
                </h2>
                <p className="text-cyan-100 text-lg leading-relaxed mb-6">
                  {t('computerScience.admission.description')}
                </p>
                <div className="space-y-3">
                  {t('computerScience.admission.steps', { returnObjects: true }).map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                        <span className="text-black text-xs font-bold">✓</span>
                      </div>
                      <span className="text-white">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <div className="inline-block p-8 bg-black bg-opacity-30 rounded-2xl border border-cyan-500 border-opacity-20">
                  <div className="text-6xl mb-4">🚀</div>
                  <button className="bg-white text-gray-900 py-4 px-8 rounded-xl font-bold text-lg hover:bg-cyan-100 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                    {t('computerScience.admission.cta')}
                  </button>
                  <p className="text-cyan-200 mt-4 text-sm">
                    {t('computerScience.admission.startToday')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Floating Elements */}
        <div className="fixed bottom-8 right-8 space-y-4">
          <button className="w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-bounce">
            <span className="text-xl">👋</span>
          </button>
          <button className="w-14 h-14 bg-blue-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
            <span className="text-xl">💬</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComputerScience;