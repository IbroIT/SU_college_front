import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  FaBook, 
  FaLaptop, 
  FaDatabase, 
  FaNewspaper,
  FaSearch,
  FaBookOpen,
  FaBookReader,
  FaArrowRight,
  FaSpinner,
  FaExclamationTriangle
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const EducationalResources = () => {
  const { t, i18n } = useTranslation();
  const [hoveredResource, setHoveredResource] = useState(null);
  const [resourcesData, setResourcesData] = useState({
    resources: [],
    features: [],
    stats: [],
    hours: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Загрузка данных с бэкенда
  useEffect(() => {
    const fetchResourcesData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
        const language = i18n.language;
        
        const url = `${API_BASE_URL}/api/resources/data/all_data/?lang=${language}`;
        console.log("🔍 Fetching resources data from:", url);
        
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("✅ Received resources data:", data);
        
        // Сортировка: pinned сначала, затем по дате (если есть)
        const sortedResources = [...(data.resources || [])].sort((a, b) => {
          const aPinned = a.pinned === true || a.pinned === "true";
          const bPinned = b.pinned === true || b.pinned === "true";
          if (aPinned === bPinned) {
            // Если есть поле date, сортируем по нему, иначе не сортируем
            if (a.date && b.date) {
              return new Date(b.date) - new Date(a.date);
            }
            return 0;
          }
          return aPinned ? -1 : 1;
        });
        setResourcesData({ ...data, resources: sortedResources });
        
      } catch (err) {
        console.error('❌ Error fetching resources data:', err);
        setError(err.message);
        setResourcesData({
          resources: [],
          features: [],
          stats: [],
          hours: []
        });
      } finally {
        setLoading(false);
      }
    };

    fetchResourcesData();
  }, [i18n.language]);

  // Функция для получения иконки по названию
  const getIconComponent = (iconName) => {
    const iconMap = {
      'FaBook': FaBook,
      'FaLaptop': FaLaptop,
      'FaDatabase': FaDatabase,
      'FaNewspaper': FaNewspaper,
      'FaSearch': FaSearch,
      'FaBookOpen': FaBookOpen,
      'FaBookReader': FaBookReader
    };
    
    const IconComponent = iconMap[iconName] || FaBook;
    return <IconComponent className="text-3xl" />;
  };

  // Обработчики кликов
  const handleAccessClick = (url) => {
    if (!url || typeof url !== 'string') {
      alert('Нет URL для доступа к ресурсу');
      return;
    }
    const trimmedUrl = url.trim();
    if (!/^https?:\/\//i.test(trimmedUrl)) {
      alert('Некорректная ссылка: ' + trimmedUrl);
      return;
    }
    window.open(trimmedUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDownloadClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
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
          <p className="text-gray-600">Загрузка ресурсов...</p>
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
            className="absolute rounded-full bg-gradient-to-r from-blue-100 to-indigo-100"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5
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
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-full mb-6"
          >
            <FaBook className="text-xl" />
            <span className="font-semibold">{t('resources.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            {t('resources.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('resources.subtitle')}
          </p>
        </motion.div>

        {/* Статистика */}
        {resourcesData.stats.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {resourcesData.stats.map((stat, index) => (
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

        {/* О библиотеке */}
        {resourcesData.features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              {t('resources.about.title')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resourcesData.features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div 
                    className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ 
                      backgroundColor: `${feature.color}20`,
                      border: `1px solid ${feature.color}40`
                    }}
                  >
                    <div style={{ color: feature.color }}>
                      {getIconComponent(feature.icon)}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Ресурсы библиотеки */}
        {resourcesData.resources.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              {t('resources.availableResources')}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resourcesData.resources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onHoverStart={() => setHoveredResource(resource.id)}
                  onHoverEnd={() => setHoveredResource(null)}
                  className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden hover:shadow-3xl transition-all duration-500 group cursor-pointer relative"
                >
                  {/* Анимированный фон */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      background: hoveredResource === resource.id 
                        ? [
                            'linear-gradient(45deg, rgba(59, 130, 246, 0.05) 0%, rgba(99, 102, 241, 0.05) 100%)',
                            'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(99, 102, 241, 0.08) 100%)',
                            'linear-gradient(225deg, rgba(59, 130, 246, 0.05) 0%, rgba(99, 102, 241, 0.05) 100%)'
                          ]
                        : 'linear-gradient(45deg, rgba(59, 130, 246, 0) 0%, rgba(99, 102, 241, 0) 100%)'
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  {/* Верхняя часть с иконкой и градиентом */}
                  <div className={`relative h-32 bg-gradient-to-r ${resource.category.color} overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        className="text-white"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {getIconComponent(resource.category.icon)}
                      </motion.div>
                    </div>
                    
                    {/* Количество ресурсов */}
                    <motion.div 
                      className="absolute top-4 left-4"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                    >
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl px-3 py-1">
                        <p className="text-white text-sm font-bold">
                          {resource.count}
                        </p>
                      </div>
                    </motion.div>

                    {/* Тип ресурса */}
                    <motion.div 
                      className="absolute bottom-4 right-4"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                    >
                      <div className="bg-black/20 backdrop-blur-sm rounded-xl px-3 py-1">
                        <p className="text-white text-xs font-medium">
                          {resource.resource_type}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Информация о ресурсе */}
                  <div className="relative p-6">
                    {/* Название ресурса */}
                    <motion.h3 
                      className="text-xl font-bold text-gray-800 mb-3"
                      whileHover={{ color: "#3b82f6" }}
                      transition={{ duration: 0.2 }}
                    >
                      {resource.title}
                    </motion.h3>
                    
                    {/* Описание */}
                    <div className="mb-6 relative">
                      <motion.div
                        className="absolute -left-2 top-0 w-1 h-8 bg-blue-500 rounded-full"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      />
                      <p className="text-gray-600 text-sm leading-relaxed pl-4 mb-4">
                        {resource.description}
                      </p>
                    </div>
                    

                    
                    {/* Кнопка доступа */}
                    <motion.button 
                      onClick={() => {
                        handleAccessClick(resource.access_url);
                      }}
                      className={`w-full bg-gradient-to-r ${resource.category.color} text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg hover:scale-105`}
                      whileHover={resource.access_url ? { scale: 1.02 } : {}}
                      whileTap={resource.access_url ? { scale: 0.98 } : {}}
                      style={{zIndex: 50, position: 'relative'}} 
                    >
                      <span>{t('resources.accessButton')}</span>
                      <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>

                  {/* Анимированный бордер */}
                  <motion.div
                    className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${resource.category.color} bg-clip-padding`}
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
            </div>
          </motion.div>
        ) : (
          <div className="text-center py-20">
            <div className="text-gray-400 text-6xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">Ресурсы не найдены</h3>
            <p className="text-gray-500">Скоро здесь появятся образовательные ресурсы</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationalResources;