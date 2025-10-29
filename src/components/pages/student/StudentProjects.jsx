import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaRocket,
  FaSpinner,
  FaExclamationTriangle
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const StudentProjects = () => {
  const { t, i18n } = useTranslation();
  const [projectsData, setProjectsData] = useState({
    projects: [],
    stats: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Загрузка данных с бэкенда
  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
        const language = i18n.language;
        
        const url = `${API_BASE_URL}/api/projects/data/all_data/?lang=${language}`;
        console.log("🔍 Fetching projects data from:", url);
        
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("✅ Received projects data:", data);
        
        setProjectsData(data);
        
      } catch (err) {
        console.error('❌ Error fetching projects data:', err);
        setError(err.message);
        setProjectsData({
          projects: [],
          stats: []
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProjectsData();
  }, [i18n.language]);

  const handleGithubClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleWebsiteClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Обработчик ошибок загрузки изображений
  const handleImageError = (e) => {
    console.log('❌ Image failed to load:', e.target.src);
    e.target.style.display = 'none';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
          />
          <p className="text-gray-600">Загрузка проектов...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Ошибка загрузки</h3>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Попробовать снова
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-100 to-cyan-100"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.08, 1]
            }}
            transition={{
              duration: 9 + Math.random() * 9,
              repeat: Infinity,
              delay: Math.random() * 4
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Герой секция */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full mb-6"
          >
            <FaCode className="text-xl" />
            <span className="font-semibold">{t('projects.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
            {t('projects.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* Статистика */}
        {projectsData.stats.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {projectsData.stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Проекты студентов */}
        {projectsData.projects.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-16"
          >
            {projectsData.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden hover:shadow-3xl transition-all duration-500 group"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Левая часть - изображение */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-80 md:h-full overflow-hidden"
                  >
                    {project.image ? (
                      <motion.img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        onError={handleImageError}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                        <FaRocket className="text-white text-8xl opacity-80" />
                      </div>
                    )}
                    
                    {/* Градиентный оверлей */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                      initial={{ opacity: 0.3 }}
                      whileHover={{ opacity: 0.8 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Наклейка с именем */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="absolute top-6 left-6 bg-black/80 text-white px-4 py-2 rounded-xl backdrop-blur-sm"
                    >
                      <h3 className="font-bold text-lg">{project.name}</h3>
                    </motion.div>

                    {/* Технологии */}
                    {project.technologies.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2"
                      >
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                            className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-lg text-sm font-medium"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </motion.div>
                    )}

                    {/* Декоративный элемент */}
                    <motion.div
                      className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    />
                  </motion.div>

                  {/* Правая часть - контент */}
                  <div className="p-8 md:p-10">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="mb-6"
                    >
                      <h2 className="text-3xl font-bold text-gray-800 mb-3">
                        {project.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {project.description}
                      </p>
                    </motion.div>

                    {/* Особенности */}
                    {project.features.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mb-8"
                      >
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">
                          {t('projects.features')}
                        </h4>
                        <div className="grid gap-3">
                          {project.features.map((feature, featureIndex) => (
                            <motion.div
                              key={featureIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                              className="flex items-center gap-3"
                            >
                              <motion.div
                                className="w-2 h-2 bg-blue-500 rounded-full"
                                whileHover={{ scale: 1.5 }}
                                transition={{ duration: 0.2 }}
                              />
                              <span className="text-gray-700">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Кнопки */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="flex flex-wrap gap-4"
                    >
                      {project.github && (
                        <motion.button
                          onClick={() => handleGithubClick(project.github)}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-3 bg-gray-800 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          <FaGithub className="text-xl" />
                          <span>GitHub</span>
                        </motion.button>
                      )}

                      {project.website && (
                        <motion.button
                          onClick={() => handleWebsiteClick(project.website)}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-2xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          <FaExternalLinkAlt className="text-lg" />
                          <span>{t('projects.visit')}</span>
                        </motion.button>
                      )}
                    </motion.div>
                  </div>
                </div>

                {/* Анимированный бордер */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-padding pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude'
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20">
            <div className="text-gray-400 text-6xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">Проекты не найдены</h3>
            <p className="text-gray-500">Скоро здесь появятся студенческие проекты</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentProjects;