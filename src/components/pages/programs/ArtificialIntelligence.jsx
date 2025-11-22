import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './ArtificialIntelligence.css';

const ArtificialIntelligence = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [activeArea, setActiveArea] = useState(0);
  const [neuralNetwork, setNeuralNetwork] = useState([]);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  const aiAreas = [
    {
      name: t('ai.areas.machineLearning.title', 'Машинное обучение'),
      icon: '🧠',
      color: 'from-purple-500 to-pink-500',
      description: t('ai.areas.machineLearning.description', 'Создание алгоритмов, которые учатся на данных'),
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas']
    },
    {
      name: t('ai.areas.deepLearning.title', 'Глубокое обучение'),
      icon: '🤖',
      color: 'from-blue-500 to-cyan-500',
      description: t('ai.areas.deepLearning.description', 'Нейронные сети и глубокие архитектуры'),
      technologies: ['Neural Networks', 'CNN', 'RNN', 'LSTM', 'Transformers']
    },
    {
      name: t('ai.areas.nlp.title', 'Обработка языка'),
      icon: '💬',
      color: 'from-green-500 to-emerald-500',
      description: t('ai.areas.nlp.description', 'Понимание и генерация естественного языка'),
      technologies: ['BERT', 'GPT', 'spaCy', 'NLTK', 'Transformers']
    },
    {
      name: t('ai.areas.computerVision.title', 'Компьютерное зрение'),
      icon: '👁️',
      color: 'from-red-500 to-orange-500',
      description: t('ai.areas.computerVision.description', 'Анализ и интерпретация изображений'),
      technologies: ['OpenCV', 'YOLO', 'ResNet', 'GAN', 'Mask R-CNN']
    }
  ];

  const applications = [
    {
      title: t('ai.applications.chatbots.title', 'Чат-боты и ассистенты'),
      icon: '🤖',
      description: t('ai.applications.chatbots.description', 'Интеллектуальные системы общения'),
      examples: ['ChatGPT', 'Siri', 'Alexa']
    },
    {
      title: t('ai.applications.autonomousVehicles.title', 'Автономные транспортные средства'),
      icon: '🚗',
      description: t('ai.applications.autonomousVehicles.description', 'Самоуправляемые автомобили'),
      examples: ['Tesla', 'Waymo', 'Uber']
    },
    {
      title: t('ai.applications.medicalDiagnosis.title', 'Медицинская диагностика'),
      icon: '🏥',
      description: t('ai.applications.medicalDiagnosis.description', 'ИИ в здравоохранении'),
      examples: ['IBM Watson', 'DeepMind', 'Babylon']
    },
    {
      title: t('ai.applications.recommendation.title', 'Системы рекомендаций'),
      icon: '📱',
      description: t('ai.applications.recommendation.description', 'Персонализированные рекомендации'),
      examples: ['Netflix', 'Spotify', 'Amazon']
    }
  ];

  const careerPaths = [
    {
      role: t('ai.career.mlEngineer', 'ML Инженер'),
      salary: '$80,000 - $150,000',
      demand: '95%'
    },
    {
      role: t('ai.career.dataScientist', 'Data Scientist'),
      salary: '$70,000 - $140,000',
      demand: '90%'
    },
    {
      role: t('ai.career.aiResearcher', 'AI Исследователь'),
      salary: '$90,000 - $180,000',
      demand: '85%'
    },
    {
      role: t('ai.career.aiConsultant', 'AI Консультант'),
      salary: '$100,000 - $200,000',
      demand: '88%'
    }
  ];

  const codeExamples = [
    `# Простая нейронная сеть
import tensorflow as tf

model = tf.keras.Sequential([
    tf.keras.layers.Dense(128, activation='relu'),
    tf.keras.layers.Dense(10, activation='softmax')
])

model.compile(optimizer='adam',
              loss='categorical_crossentropy',
              metrics=['accuracy'])`,
    
    `# Обработка изображений
import cv2
import numpy as np

# Загрузка изображения
image = cv2.imread('image.jpg')

# Применение фильтра
filtered = cv2.GaussianBlur(image, (15, 15), 0)

# Детекция объектов
net = cv2.dnn.readNet('yolo.weights', 'yolo.cfg')`,
    
    `# Обработка текста
from transformers import pipeline

# Анализ настроения
classifier = pipeline("sentiment-analysis")
result = classifier("I love machine learning!")

# Генерация текста
generator = pipeline("text-generation")
output = generator("The future of AI is")`,
    
    `# Машинное обучение
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

# Разделение данных
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42)

# Обучение модели
clf = RandomForestClassifier()
clf.fit(X_train, y_train)`
  ];

  useEffect(() => {
    setIsVisible(true);
    startNeuralAnimation();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const startNeuralAnimation = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const layers = [
      { x: 50, neurons: 4 },
      { x: 200, neurons: 6 },
      { x: 350, neurons: 8 },
      { x: 500, neurons: 6 },
      { x: 650, neurons: 3 }
    ];

    const neurons = [];
    const connections = [];

    // Create neurons
    layers.forEach((layer, layerIndex) => {
      const layerNeurons = [];
      for (let i = 0; i < layer.neurons; i++) {
        const neuron = {
          x: layer.x,
          y: (canvas.height / (layer.neurons + 1)) * (i + 1),
          activation: Math.random(),
          layerIndex,
          neuronIndex: i
        };
        layerNeurons.push(neuron);
        neurons.push(neuron);
      }
    });

    // Create connections
    for (let i = 0; i < layers.length - 1; i++) {
      const currentLayer = neurons.filter(n => n.layerIndex === i);
      const nextLayer = neurons.filter(n => n.layerIndex === i + 1);
      
      currentLayer.forEach(neuron1 => {
        nextLayer.forEach(neuron2 => {
          connections.push({
            from: neuron1,
            to: neuron2,
            weight: Math.random() * 2 - 1,
            signal: 0
          });
        });
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update activations
      neurons.forEach(neuron => {
        neuron.activation = 0.5 + 0.5 * Math.sin(Date.now() * 0.001 + neuron.x * 0.01 + neuron.y * 0.01);
      });

      // Draw connections
      connections.forEach(conn => {
        const alpha = Math.abs(conn.weight) * conn.from.activation * 0.8;
        ctx.beginPath();
        ctx.moveTo(conn.from.x, conn.from.y);
        ctx.lineTo(conn.to.x, conn.to.y);
        ctx.strokeStyle = conn.weight > 0 
          ? `rgba(59, 130, 246, ${alpha})` 
          : `rgba(239, 68, 68, ${alpha})`;
        ctx.lineWidth = Math.abs(conn.weight) * 2;
        ctx.stroke();
      });

      // Draw neurons
      neurons.forEach(neuron => {
        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, 8 + neuron.activation * 5, 0, Math.PI * 2);
        
        const intensity = neuron.activation;
        ctx.fillStyle = `rgba(99, 102, 241, ${0.3 + intensity * 0.7})`;
        ctx.fill();
        
        ctx.strokeStyle = `rgba(147, 197, 253, ${0.8 + intensity * 0.2})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
  };

  return (
    <div className="ai-program min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Neural Network Animation Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
      />

      {/* Floating AI Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-400 text-lg md:text-2xl opacity-20 animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 15}s`
            }}
          >
            {['🧠', '🤖', '⚡', '🔮', '💫', '🌟'][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        {/* Hero Section */}
        <section className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-400 font-mono text-xs md:text-sm">
              {t('ai.hero.status', 'AI_INITIALIZED')}
            </span>
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
          
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
    {t('ai.title', 'Искусственный интеллект')}
</h2>






          
          <p className="text-base md:text-lg lg:text-xl text-purple-200 max-w-4xl mx-auto leading-relaxed font-light">
            {t('ai.shortDescription', 'Создавайте интеллектуальные системы, которые учатся, адаптируются и решают сложные задачи')}
          </p>

          {/* AI Brain Visualization */}
          <div className="max-w-3xl mx-auto mt-6 md:mt-10 relative">
            <div className="bg-black bg-opacity-40 rounded-3xl p-3 md:p-5 lg:p-7 border border-purple-500 border-opacity-30 backdrop-blur-sm">
              <div className="text-3xl md:text-5xl lg:text-7xl mb-4 animate-pulse">🧠</div>
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-white mb-4">
                {t('ai.hero.brainTitle', 'Нейронная сеть в действии')}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 lg:gap-4 text-xs md:text-sm">
                <div className="text-center">
                  <div className="text-cyan-400 font-mono text-xs md:text-base">1.2M</div>
                  <div className="text-gray-400 text-xs md:text-sm">{t('ai.hero.parameters', 'Параметры')}</div>
                </div>
                <div className="text-center">
                  <div className="text-green-400 font-mono text-xs md:text-base">95.7%</div>
                  <div className="text-gray-400 text-xs md:text-sm">{t('ai.hero.accuracy', 'Точность')}</div>
                </div>
                <div className="text-center">
                  <div className="text-yellow-400 font-mono text-xs md:text-base">0.03s</div>
                  <div className="text-gray-400 text-xs md:text-sm">{t('ai.hero.inference', 'Вывод')}</div>
                </div>
                <div className="text-center">
                  <div className="text-purple-400 font-mono text-xs md:text-base">∞</div>
                  <div className="text-gray-400 text-xs md:text-sm">{t('ai.hero.potential', 'Потенциал')}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Areas */}
        <section className={`mb-12 md:mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {t('ai.areas.title', 'Области изучения')}
            </h2>
            <p className="text-purple-200">
              {t('ai.areas.subtitle', 'Погрузитесь в ключевые направления искусственного интеллекта')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Areas List */}
            <div className="space-y-4 md:space-y-6">
              {aiAreas.map((area, index) => (
                <div
                  key={index}
                  className={`p-3 md:p-5 rounded-2xl border-2 backdrop-blur-sm cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                    activeArea === index
                      ? `bg-gradient-to-r ${area.color} bg-opacity-20 border-opacity-100 shadow-2xl`
                      : 'bg-black bg-opacity-20 border-gray-700 hover:border-opacity-100'
                  } border-opacity-50`}
                  onClick={() => setActiveArea(index)}
                  onMouseEnter={() => setActiveArea(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl md:text-4xl">{area.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-bold text-white mb-2">
                        {area.name}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">
                        {area.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {area.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 md:px-3 py-1 bg-gray-800 bg-opacity-50 rounded-full text-xs text-gray-300 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      activeArea === index ? 'bg-cyan-400 animate-pulse' : 'bg-gray-600'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Code Preview */}
            <div className="bg-black bg-opacity-60 rounded-2xl p-3 md:p-5 border border-cyan-500 border-opacity-30 backdrop-blur-sm h-fit sticky top-8">
              <div className="flex space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400 h-64 md:h-80 overflow-auto">
                <pre>
                  <code>{codeExamples[activeArea]}</code>
                </pre>
              </div>
              <div className="mt-4 text-center">
                <div className="inline-flex items-center space-x-2 text-cyan-300 text-sm">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                  <span>
                    {t('ai.codePreview.title', 'Пример кода')} - {aiAreas[activeArea].name}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className={`mb-12 md:mb-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-black bg-opacity-40 rounded-3xl p-4 md:p-6 border border-cyan-500 border-opacity-20 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <div className="w-2 h-8 bg-cyan-400 rounded-full mr-4 animate-pulse"></div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {t('ai.applications.title', 'Применения ИИ')}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {applications.map((app, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-3 md:p-5 border border-gray-700 hover:border-cyan-500 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300">
                      {app.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-bold text-white mb-2">
                        {app.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3">
                        {app.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {app.examples.map((example, exampleIndex) => (
                          <span
                            key={exampleIndex}
                            className="px-1.5 md:px-2 py-1 bg-cyan-500 bg-opacity-20 text-cyan-300 rounded text-xs"
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

export default ArtificialIntelligence;