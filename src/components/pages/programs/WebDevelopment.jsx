import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './WebDevelopment.css';

const WebDevelopment = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [activeTech, setActiveTech] = useState(0);
  const [codeLines, setCodeLines] = useState([]);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  const technologies = [
    {
      name: t('webDevelopment.technologies.htmlCss.title'),
      icon: '🌐',
      color: 'from-orange-500 to-red-500',
      description: t('webDevelopment.technologies.htmlCss.description'),
      examples: t('webDevelopment.technologies.htmlCss.examples', { returnObjects: true })
    },
    {
      name: t('webDevelopment.technologies.javascript.title'),
      icon: '⚡',
      color: 'from-yellow-400 to-yellow-600',
      description: t('webDevelopment.technologies.javascript.description'),
      examples: t('webDevelopment.technologies.javascript.examples', { returnObjects: true })
    },
    {
      name: t('webDevelopment.technologies.react.title'),
      icon: '⚛️',
      color: 'from-cyan-400 to-blue-500',
      description: t('webDevelopment.technologies.react.description'),
      examples: t('webDevelopment.technologies.react.examples', { returnObjects: true })
    },
    {
      name: t('webDevelopment.technologies.nodejs.title'),
      icon: '🟢',
      color: 'from-green-500 to-green-700',
      description: t('webDevelopment.technologies.nodejs.description'),
      examples: t('webDevelopment.technologies.nodejs.examples', { returnObjects: true })
    }
  ];

  const projects = t('webDevelopment.projects.list', { returnObjects: true });

  const careerPaths = t('webDevelopment.career.paths', { returnObjects: true });

  const codeSnippets = t('webDevelopment.codeSnippets', { returnObjects: true });

  useEffect(() => {
    setIsVisible(true);
    startNetworkAnimation();
    generateCodeLines();
    
    const interval = setInterval(generateCodeLines, 3000);
    return () => {
      clearInterval(interval);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const startNetworkAnimation = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const nodes = [];
    const connections = [];
    const nodeCount = 50;

    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.6)';
        ctx.fill();
      });

      // Draw connections
      nodes.forEach((nodeA, i) => {
        nodes.forEach((nodeB, j) => {
          if (i < j) {
            const dx = nodeA.x - nodeB.x;
            const dy = nodeA.y - nodeB.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
              ctx.beginPath();
              ctx.moveTo(nodeA.x, nodeA.y);
              ctx.lineTo(nodeB.x, nodeB.y);
              ctx.strokeStyle = `rgba(99, 102, 241, ${0.2 * (1 - distance / 150)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
  };

  const generateCodeLines = () => {
    const lines = [];
    for (let i = 0; i < 15; i++) {
      const length = Math.floor(Math.random() * 30) + 10;
      const chars = '<>/{}</>[]=+-*;.constletfunction';
      let line = '';
      for (let j = 0; j < length; j++) {
        line += chars[Math.floor(Math.random() * chars.length)];
      }
      lines.push(line);
    }
    setCodeLines(lines);
  };

  return (
    <div className="web-development min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Network Animation Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 font-mono text-xs opacity-20 animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${20 + Math.random() * 20}s`
            }}
          >
            {['<div>', '</div>', '{ }', 'function', 'const', '=>', 'import', 'export'][Math.floor(Math.random() * 8)]}
          </div>
        ))}
      </div>

      {/* Animated Code Rain */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {codeLines.map((line, index) => (
          <div
            key={index}
            className="absolute font-mono text-green-300 text-xs opacity-30 animate-code-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          >
            {line}
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
            <span className="text-green-400 font-mono text-sm">
              {t('webDevelopment.hero.status')}
            </span>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-yellow-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
            {t('webDevelopment.title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed font-light">
            {t('webDevelopment.shortDescription')}
          </p>

          {/* Interactive Browser Preview */}
          <div className="max-w-4xl mx-auto mt-12 bg-gray-800 rounded-2xl overflow-hidden border border-gray-600 shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <div className="bg-gray-700 px-4 py-3 flex items-center space-x-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 bg-gray-600 rounded px-3 py-1 text-xs text-gray-300 font-mono">
                {t('webDevelopment.browser.url')}
              </div>
            </div>
            <div className="p-8 bg-gradient-to-br from-blue-500 to-purple-600">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {t('webDevelopment.browser.sections', { returnObjects: true }).map((section, index) => (
                  <div key={index} className="bg-white bg-opacity-20 rounded-xl p-4 text-center backdrop-blur-sm border border-white border-opacity-30">
                    <div className="text-2xl mb-2">{section.emoji}</div>
                    <h3 className="font-bold text-white">{section.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Stack */}
        <section className={`mb-20 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              {t('webDevelopment.technologies.title')}
            </h2>
            <p className="text-blue-200">
              {t('webDevelopment.technologies.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Tech List */}
            <div className="space-y-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border-2 backdrop-blur-sm cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                    activeTech === index
                      ? `bg-gradient-to-r ${tech.color} bg-opacity-20 border-opacity-100 shadow-2xl`
                      : 'bg-black bg-opacity-20 border-gray-700 hover:border-opacity-100'
                  } border-opacity-50`}
                  onClick={() => setActiveTech(index)}
                  onMouseEnter={() => setActiveTech(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{tech.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {tech.name}
                      </h3>
                      <p className="text-gray-300 text-sm mb-3">
                        {tech.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {tech.examples.map((example, exampleIndex) => (
                          <span
                            key={exampleIndex}
                            className="px-2 py-1 bg-gray-800 bg-opacity-50 rounded text-xs text-gray-300 font-mono"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeTech === index ? 'bg-green-400 animate-pulse' : 'bg-gray-600'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Live Code Preview */}
            <div className="bg-black bg-opacity-60 rounded-2xl p-6 border border-green-500 border-opacity-30 backdrop-blur-sm h-fit sticky top-8">
              <div className="flex space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400 h-64 overflow-auto">
                <pre>
                  <code>{codeSnippets[activeTech]}</code>
                </pre>
              </div>
              <div className="mt-4 text-center">
                <div className="inline-flex items-center space-x-2 text-yellow-300 text-sm">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                  <span>
                    {t('webDevelopment.codePreview.title')} - {technologies[activeTech].name}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Showcase */}
        <section className={`mb-20 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-black bg-opacity-40 rounded-3xl p-8 border border-purple-500 border-opacity-20 backdrop-blur-sm">
            <div className="flex items-center mb-8">
              <div className="w-2 h-8 bg-purple-400 rounded-full mr-4 animate-pulse"></div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {t('webDevelopment.projects.title')}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {project.emoji}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm font-mono">
                    {project.tech}
                  </p>
                  <div className="mt-4 flex space-x-2">
                    <span className="px-2 py-1 bg-purple-500 bg-opacity-20 text-purple-300 rounded text-xs">
                      {t('webDevelopment.projects.liveDemo')}
                    </span>
                    <span className="px-2 py-1 bg-blue-500 bg-opacity-20 text-blue-300 rounded text-xs">
                      {t('webDevelopment.projects.sourceCode')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Path */}
        <section className={`transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-orange-900 to-yellow-900 rounded-3xl p-8 border border-orange-400 border-opacity-30 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-4 text-white">
                  {t('webDevelopment.career.title')}
                </h2>
                <p className="text-orange-100 text-lg leading-relaxed mb-6">
                  {t('webDevelopment.career.description')}
                </p>
                <div className="space-y-4">
                  {careerPaths.map((job, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-black bg-opacity-30 rounded-lg">
                      <span className="text-white font-semibold">{job.role}</span>
                      <span className="text-yellow-400 font-mono">{job.salary}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <div className="inline-block p-8 bg-black bg-opacity-30 rounded-2xl border border-orange-500 border-opacity-20">
                  <div className="text-6xl mb-4">💻</div>
                  <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                    {t('webDevelopment.career.cta')}
                  </button>
                  <p className="text-orange-200 mt-4 text-sm">
                    {t('webDevelopment.career.subtitle')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WebDevelopment;