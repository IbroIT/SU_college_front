import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './DigitalEntrepreneurship.css';

const DigitalEntrepreneurship = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [activeModule, setActiveModule] = useState(0);
  const [businessMetrics, setBusinessMetrics] = useState({
    revenue: 0,
    users: 0,
    growth: 0
  });
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  const modules = [
    {
      name: t('digitalEntrepreneurship.modules.digitalMarketing.title', 'Цифровой маркетинг'),
      icon: '📱',
      color: 'from-blue-500 to-cyan-500',
      description: t('digitalEntrepreneurship.modules.digitalMarketing.description', 'Продвижение бизнеса в цифровой среде'),
      skills: ['SEO/SEM', 'Social Media', 'Content Marketing', 'Email Marketing', 'PPC']
    },
    {
      name: t('digitalEntrepreneurship.modules.ecommerce.title', 'E-commerce'),
      icon: '🛒',
      color: 'from-green-500 to-emerald-500',
      description: t('digitalEntrepreneurship.modules.ecommerce.description', 'Создание и управление интернет-магазинами'),
      skills: ['Shopify', 'WooCommerce', 'Payment Systems', 'Logistics', 'Analytics']
    },
    {
      name: t('digitalEntrepreneurship.modules.fintech.title', 'Финтех и Блокчейн'),
      icon: '💰',
      color: 'from-yellow-500 to-orange-500',
      description: t('digitalEntrepreneurship.modules.fintech.description', 'Финансовые технологии и криптовалюты'),
      skills: ['Blockchain', 'DeFi', 'Payment Solutions', 'Crypto', 'Smart Contracts']
    },
    {
      name: t('digitalEntrepreneurship.modules.dataAnalytics.title', 'Аналитика данных'),
      icon: '📊',
      color: 'from-purple-500 to-pink-500',
      description: t('digitalEntrepreneurship.modules.dataAnalytics.description', 'Принятие решений на основе данных'),
      skills: ['Google Analytics', 'Data Visualization', 'A/B Testing', 'KPI', 'Business Intelligence']
    }
  ];

  const businessTypes = [
    {
      title: t('digitalEntrepreneurship.businessTypes.saas.title', 'SaaS платформы'),
      icon: '☁️',
      description: t('digitalEntrepreneurship.businessTypes.saas.description', 'Программное обеспечение как услуга'),
      examples: ['Slack', 'Notion', 'Canva'],
      potential: '$100k - $10M ARR'
    },
    {
      title: t('digitalEntrepreneurship.businessTypes.marketplace.title', 'Маркетплейсы'),
      icon: '🏪',
      description: t('digitalEntrepreneurship.businessTypes.marketplace.description', 'Платформы для покупателей и продавцов'),
      examples: ['Airbnb', 'Uber', 'Etsy'],
      potential: '$50k - $5M revenue'
    },
    {
      title: t('digitalEntrepreneurship.businessTypes.content.title', 'Контент-бизнес'),
      icon: '🎬',
      description: t('digitalEntrepreneurship.businessTypes.content.description', 'Монетизация контента и аудитории'),
      examples: ['YouTube', 'Podcast', 'Blog'],
      potential: '$10k - $1M annually'
    },
    {
      title: t('digitalEntrepreneurship.businessTypes.mobile.title', 'Мобильные приложения'),
      icon: '📱',
      description: t('digitalEntrepreneurship.businessTypes.mobile.description', 'Приложения для iOS и Android'),
      examples: ['Instagram', 'TikTok', 'WhatsApp'],
      potential: '$20k - $2M revenue'
    }
  ];

  const successStories = [
    {
      name: t('digitalEntrepreneurship.success.story1.name', 'Дмитрий, 24'),
      business: t('digitalEntrepreneurship.success.story1.business', 'E-commerce магазин'),
      revenue: '$250k',
      story: t('digitalEntrepreneurship.success.story1.story', 'Начал с дропшиппинга, развил до собственного бренда'),
      avatar: '👨‍💼'
    },
    {
      name: t('digitalEntrepreneurship.success.story2.name', 'Анна, 26'),
      business: t('digitalEntrepreneurship.success.story2.business', 'SaaS платформа'),
      revenue: '$500k',
      story: t('digitalEntrepreneurship.success.story2.story', 'Создала инструмент для управления социальными сетями'),
      avatar: '👩‍💻'
    },
    {
      name: t('digitalEntrepreneurship.success.story3.name', 'Марк, 22'),
      business: t('digitalEntrepreneurship.success.story3.business', 'Криптопроект'),
      revenue: '$1.2M',
      story: t('digitalEntrepreneurship.success.story3.story', 'Запустил NFT коллекцию и DeFi протокол'),
      avatar: '🚀'
    }
  ];

  const careerPaths = [
    {
      role: t('digitalEntrepreneurship.career.founder', 'Стартап основатель'),
      salary: '$0 - $10M+',
      description: t('digitalEntrepreneurship.career.founderDesc', 'Создание собственного бизнеса')
    },
    {
      role: t('digitalEntrepreneurship.career.growth', 'Growth хакер'),
      salary: '$60k - $120k',
      description: t('digitalEntrepreneurship.career.growthDesc', 'Ускорение роста продукта')
    },
    {
      role: t('digitalEntrepreneurship.career.product', 'Продакт менеджер'),
      salary: '$70k - $150k',
      description: t('digitalEntrepreneurship.career.productDesc', 'Управление цифровыми продуктами')
    },
    {
      role: t('digitalEntrepreneurship.career.digital', 'Digital маркетолог'),
      salary: '$50k - $100k',
      description: t('digitalEntrepreneurship.career.digitalDesc', 'Цифровое продвижение бизнеса')
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    startBusinessAnimation();
    animateMetrics();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const startBusinessAnimation = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const coins = [];
    const charts = [];
    
    // Create floating coins
    for (let i = 0; i < 30; i++) {
      coins.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 20 + 10,
        speed: Math.random() * 2 + 0.5,
        rotation: Math.random() * 360
      });
    }

    // Create chart elements
    for (let i = 0; i < 10; i++) {
      const chartData = [];
      for (let j = 0; j < 10; j++) {
        chartData.push(Math.random() * 100);
      }
      charts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        data: chartData,
        color: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'][Math.floor(Math.random() * 4)]
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw coins
      coins.forEach(coin => {
        coin.y -= coin.speed;
        coin.rotation += 2;
        
        if (coin.y < -coin.size) {
          coin.y = canvas.height + coin.size;
          coin.x = Math.random() * canvas.width;
        }

        ctx.save();
        ctx.translate(coin.x, coin.y);
        ctx.rotate(coin.rotation * Math.PI / 180);
        
        // Draw coin
        ctx.beginPath();
        ctx.arc(0, 0, coin.size / 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(251, 191, 36, 0.7)';
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(0, 0, coin.size / 4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(245, 158, 11, 0.9)';
        ctx.fill();
        
        ctx.restore();
      });

      // Draw mini charts
      charts.forEach(chart => {
        const width = 60;
        const height = 40;
        
        ctx.strokeStyle = chart.color + '80';
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        chart.data.forEach((point, index) => {
          const x = chart.x + (index / chart.data.length) * width;
          const y = chart.y + height - (point / 100) * height;
          
          if (index === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        });
        
        ctx.stroke();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
  };

  const animateMetrics = () => {
    const targetRevenue = 250000;
    const targetUsers = 50000;
    const targetGrowth = 85;

    let currentRevenue = 0;
    let currentUsers = 0;
    let currentGrowth = 0;

    const interval = setInterval(() => {
      if (currentRevenue < targetRevenue) {
        currentRevenue += targetRevenue / 100;
        setBusinessMetrics(prev => ({ ...prev, revenue: Math.floor(currentRevenue) }));
      }
      if (currentUsers < targetUsers) {
        currentUsers += targetUsers / 100;
        setBusinessMetrics(prev => ({ ...prev, users: Math.floor(currentUsers) }));
      }
      if (currentGrowth < targetGrowth) {
        currentGrowth += targetGrowth / 100;
        setBusinessMetrics(prev => ({ ...prev, growth: Math.floor(currentGrowth) }));
      }

      if (currentRevenue >= targetRevenue && currentUsers >= targetUsers && currentGrowth >= targetGrowth) {
        clearInterval(interval);
      }
    }, 50);
  };

  return (
    <div className="digital-entrepreneurship min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
      {/* Business Animation Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
      />

      {/* Floating Business Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-yellow-400 text-2xl opacity-20 animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${20 + Math.random() * 20}s`
            }}
          >
            {['💰', '📈', '🚀', '💡', '🌟', '⚡'][Math.floor(Math.random() * 6)]}
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
              {t('digitalEntrepreneurship.hero.status', 'BUSINESS_READY')}
            </span>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-2xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-gradient">
            {t('digitalEntrepreneurship.title', 'Цифровое предпринимательство')}
          </h2>
          
          <p className="text-xl md:text-2xl text-indigo-200 max-w-4xl mx-auto leading-relaxed font-light">
            {t('digitalEntrepreneurship.shortDescription', 'Создавайте успешные цифровые бизнесы и монетизируйте инновационные идеи')}
          </p>
        </section>

        {/* Modules Section */}
        <section className={`mb-20 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              {t('digitalEntrepreneurship.modules.title', 'Ключевые модули')}
            </h2>
            <p className="text-indigo-200">
              {t('digitalEntrepreneurship.modules.subtitle', 'Освойте все аспекты цифрового бизнеса')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Modules List */}
            <div className="space-y-6">
              {modules.map((module, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border-2 backdrop-blur-sm cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                    activeModule === index
                      ? `bg-gradient-to-r ${module.color} bg-opacity-20 border-opacity-100 shadow-2xl`
                      : 'bg-black bg-opacity-20 border-gray-700 hover:border-opacity-100'
                  } border-opacity-50`}
                  onClick={() => setActiveModule(index)}
                  onMouseEnter={() => setActiveModule(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{module.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {module.name}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">
                        {module.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {module.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-gray-800 bg-opacity-50 rounded-full text-xs text-gray-300 font-mono"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Business Model Canvas */}
            <div className="bg-black bg-opacity-60 rounded-2xl p-6 border border-orange-500 border-opacity-30 backdrop-blur-sm h-fit sticky top-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white">
                  {t('digitalEntrepreneurship.canvas.title', 'Business Model Canvas')}
                </h3>
                <p className="text-gray-400 text-sm">
                  {modules[activeModule].name}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-800 bg-opacity-50 rounded-lg p-3">
                  <div className="text-yellow-400 font-semibold mb-2">
                    {t('digitalEntrepreneurship.canvas.keyPartners', 'Ключевые партнеры')}
                  </div>
                  <div className="text-gray-300 text-xs">
                    {t('digitalEntrepreneurship.canvas.partnersDesc', 'Платформы, инвесторы, поставщики')}
                  </div>
                </div>
                
                <div className="bg-gray-800 bg-opacity-50 rounded-lg p-3">
                  <div className="text-blue-400 font-semibold mb-2">
                    {t('digitalEntrepreneurship.canvas.keyActivities', 'Ключевые активности')}
                  </div>
                  <div className="text-gray-300 text-xs">
                    {t('digitalEntrepreneurship.canvas.activitiesDesc', 'Разработка, маркетинг, поддержка')}
                  </div>
                </div>
                
                <div className="bg-gray-800 bg-opacity-50 rounded-lg p-3">
                  <div className="text-green-400 font-semibold mb-2">
                    {t('digitalEntrepreneurship.canvas.valueProposition', 'Ценностное предложение')}
                  </div>
                  <div className="text-gray-300 text-xs">
                    {t('digitalEntrepreneurship.canvas.valueDesc', 'Уникальная польза для клиентов')}
                  </div>
                </div>
                
                <div className="bg-gray-800 bg-opacity-50 rounded-lg p-3">
                  <div className="text-purple-400 font-semibold mb-2">
                    {t('digitalEntrepreneurship.canvas.revenueStreams', 'Потоки доходов')}
                  </div>
                  <div className="text-gray-300 text-xs">
                    {t('digitalEntrepreneurship.canvas.revenueDesc', 'Подписки, комиссии, реклама')}
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <div className="inline-flex items-center space-x-2 text-orange-300 text-sm">
                  <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
                  <span>
                    {t('digitalEntrepreneurship.canvas.activeModule', 'Активный модуль')}: {modules[activeModule].name}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Types */}
        <section className={`mb-20 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-black bg-opacity-40 rounded-3xl p-8 border border-green-500 border-opacity-20 backdrop-blur-sm">
            <div className="flex items-center mb-8">
              <div className="w-2 h-8 bg-green-400 rounded-full mr-4 animate-pulse"></div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                {t('digitalEntrepreneurship.businessTypes.title', 'Типы цифрового бизнеса')}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {businessTypes.map((type, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {type.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {type.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3">
                        {type.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {type.examples.map((example, exampleIndex) => (
                          <span
                            key={exampleIndex}
                            className="px-2 py-1 bg-green-500 bg-opacity-20 text-green-300 rounded text-xs"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DigitalEntrepreneurship;