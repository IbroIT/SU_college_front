import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  FaUsers, 
  FaHandshake, 
  FaLightbulb, 
  FaCalendarAlt,
  FaMicrophone,
  FaGraduationCap,
  FaArrowRight,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaSpinner
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const StudentCouncil = () => {
  const { t, i18n } = useTranslation();
  const [hoveredMember, setHoveredMember] = useState(null);
  const [councilData, setCouncilData] = useState({
    features: [],
    members: [],
    events: [],
    stats: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Загрузка данных с бэкенда
  useEffect(() => {
    const fetchCouncilData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
        const language = i18n.language;
        
        const url = `${API_BASE_URL}/api/council/data/all_data/?lang=${language}`;
        console.log("🔍 Fetching council data from:", url);
        
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("✅ Received council data:", data);
        
        setCouncilData(data);
        
      } catch (err) {
        console.error('❌ Error fetching council data:', err);
        setError(err.message);
        // Fallback to empty data
        setCouncilData({
          features: [],
          members: [],
          events: [],
          stats: []
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCouncilData();
  }, [i18n.language]);

  // Функция для получения иконки по названию
  const getIconComponent = (iconName) => {
    const iconMap = {
      'FaHandshake': FaHandshake,
      'FaLightbulb': FaLightbulb,
      'FaCalendarAlt': FaCalendarAlt,
      'FaMicrophone': FaMicrophone,
      'FaUsers': FaUsers,
      'FaGraduationCap': FaGraduationCap
    };
    
    const IconComponent = iconMap[iconName] || FaUsers;
    return <IconComponent size={28} />;
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
          <p className="text-gray-600">Загрузка данных совета...</p>
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
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full mb-6"
          >
            <FaUsers className="text-xl" />
            <span className="font-semibold">{t('council.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            {t('council.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('council.subtitle')}
          </p>
        </motion.div>

        {/* Статистика */}
        {councilData.stats.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {councilData.stats.map((stat, index) => (
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

        {/* Основные функции */}
        {councilData.features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              {t('council.mission.title')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {councilData.features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div 
                    className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 mb-4 group-hover:scale-110 transition-transform duration-300"
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

        {/* Члены совета */}
        {councilData.members.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              {t('council.team.title')}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {councilData.members.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onHoverStart={() => setHoveredMember(index)}
                  onHoverEnd={() => setHoveredMember(null)}
                  className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden hover:shadow-3xl transition-all duration-500 group cursor-pointer relative"
                >
                  {/* Анимированный фон */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      background: hoveredMember === index 
                        ? [
                            'linear-gradient(45deg, rgba(59, 130, 246, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%)',
                            'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%)',
                            'linear-gradient(225deg, rgba(59, 130, 246, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%)'
                          ]
                        : 'linear-gradient(45deg, rgba(59, 130, 246, 0) 0%, rgba(6, 182, 212, 0) 100%)'
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  {/* Фотография */}
                  <div className="relative h-72 overflow-hidden">
                    {member.image ? (
                      <motion.img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        onError={handleImageError}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                        <FaGraduationCap className="text-white text-6xl" />
                      </div>
                    )}
                    
                    {/* Градиентный оверлей */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                      initial={{ opacity: 0.3 }}
                      whileHover={{ opacity: 0.8 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Должность */}
                    <motion.div 
                      className="absolute bottom-4 left-4 right-4"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                        <p className="text-gray-800 font-bold text-sm text-center">
                          {member.position}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Информация */}
                  <div className="relative p-6">
                    {/* ФИО */}
                    <motion.h3 
                      className="text-xl font-bold text-gray-800 mb-3 text-center"
                      whileHover={{ color: "#3b82f6" }}
                      transition={{ duration: 0.2 }}
                    >
                      {member.name}
                    </motion.h3>
                    
                    {/* О себе */}
                    <div className="mb-6 relative">
                      <motion.div
                        className="absolute -left-2 top-0 w-1 h-8 bg-blue-500 rounded-full"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      />
                      <p className="text-gray-600 text-sm leading-relaxed pl-4 line-clamp-3">
                        {member.bio}
                      </p>
                    </div>
                    
                    {/* Контакты */}
                    <motion.div 
                      className="flex items-center justify-center gap-4 pt-4 border-t border-gray-200"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    >
                      {/* Instagram */}
                      {member.instagram && (
                        <motion.a 
                          href={`https://instagram.com/${member.instagram}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <FaInstagram className="text-lg" />
                        </motion.a>
                      )}
                      
                      {/* Email */}
                      {member.email && (
                        <motion.a 
                          href={`mailto:${member.email}`}
                          whileHover={{ scale: 1.2, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <FaEnvelope className="text-lg" />
                        </motion.a>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
        {/* Предстоящие мероприятия */}
        {councilData.events.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              {t('council.upcomingEvents')}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {councilData.events.map((event, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-xl font-bold">
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <FaUsers className="text-sm" />
                      <span className="text-sm">{event.participants}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {event.description}
                  </p>
                  
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold transition-colors duration-300 flex items-center justify-center gap-2 group-hover:bg-blue-500 group-hover:text-white">
                    <span>{t('council.participate')}</span>
                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default StudentCouncil;