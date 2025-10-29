import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  FaChalkboardTeacher,
  FaGraduationCap,
  FaLaptopCode,
  FaShieldAlt,
  FaPalette,
  FaShoppingCart,
  FaCogs,
  FaCalendarAlt,
  FaEnvelope,
  FaClock,
  FaUserGraduate,
  FaLightbulb,
  FaHandshake,
  FaRocket,
  FaArrowRight,
  FaSpinner,
  FaExclamationTriangle
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Vacancies = () => {
  const { t, i18n } = useTranslation();
  const [activeVacancy, setActiveVacancy] = useState(0);
  const [vacanciesData, setVacanciesData] = useState({
    vacancies: [],
    benefits: [],
    stats: [],
    applicationInfo: {}
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Загрузка данных с бэкенда
  useEffect(() => {
    const fetchVacanciesData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
        const language = i18n.language;
        
        const url = `${API_BASE_URL}/api/vacancies/data/all_data/?lang=${language}`;
        console.log("🔍 Fetching vacancies data from:", url);
        
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("✅ Received vacancies data:", data);
        
        setVacanciesData(data);
        
      } catch (err) {
        console.error('❌ Error fetching vacancies data:', err);
        setError(err.message);
        setVacanciesData({
          vacancies: [],
          benefits: [],
          stats: [],
          applicationInfo: {}
        });
      } finally {
        setLoading(false);
      }
    };

    fetchVacanciesData();
  }, [i18n.language]);

  // Функция для получения иконки по названию
  const getIconComponent = (iconName) => {
    const iconMap = {
      'FaLaptopCode': FaLaptopCode,
      'FaShoppingCart': FaShoppingCart,
      'FaCogs': FaCogs,
      'FaPalette': FaPalette,
      'FaShieldAlt': FaShieldAlt,
      'FaRocket': FaRocket,
      'FaGraduationCap': FaGraduationCap,
      'FaHandshake': FaHandshake,
      'FaLightbulb': FaLightbulb
    };
    
    const IconComponent = iconMap[iconName] || FaLaptopCode;
    return <IconComponent className="text-3xl" />;
  };

  // Обработчик подачи заявки
  const handleApplyClick = (vacancy) => {
    const email = vacancy.contact_email || vacanciesData.applicationInfo.email;
    const subject = `${vacanciesData.applicationInfo.subject || 'Заявка на вакансию'} - ${vacancy.title}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
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
          <p className="text-gray-600">Загрузка вакансий...</p>
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
            className="absolute rounded-full bg-gradient-to-r from-blue-100 to-purple-100"
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
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full mb-6"
          >
            <FaChalkboardTeacher className="text-xl" />
            <span className="font-semibold">{t('vacancies.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            {t('vacancies.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('vacancies.subtitle')}
          </p>
        </motion.div>

        {/* Статистика */}
        {vacanciesData.stats.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {vacanciesData.stats.map((stat, index) => (
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

        {/* Вакансии */}
        {vacanciesData.vacancies.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              {t('vacancies.availablePositions')}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vacanciesData.vacancies.map((vacancy, index) => (
                <motion.div
                  key={vacancy.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden hover:shadow-3xl transition-all duration-500 group cursor-pointer relative"
                >
                  {/* Верхняя часть с иконкой */}
                  <div className={`relative h-32 bg-gradient-to-r ${vacancy.category.color} overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        className="text-white"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {getIconComponent(vacancy.category.icon)}
                      </motion.div>
                    </div>
                    
                    {/* Срочная вакансия */}
                    {vacancy.is_urgent && (
                      <motion.div 
                        className="absolute top-4 left-4"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                      >
                        <div className="bg-red-500 text-white px-3 py-1 rounded-xl text-xs font-bold">
                          Срочно!
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Информация о вакансии */}
                  <div className="relative p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                      {vacancy.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center">
                      {vacancy.description}
                    </p>
                    
                    {/* Требования */}
                    {vacancy.requirements && vacancy.requirements.length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <FaUserGraduate className="text-blue-500" />
                          {t('vacancies.requirements')}:
                        </h4>
                        <ul className="space-y-2">
                          {vacancy.requirements.map((requirement, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.1 }}
                              className="flex items-start gap-2 text-sm text-gray-600"
                            >
                              <span className="text-blue-500 mt-1">•</span>
                              {requirement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Условия работы */}
                    {(vacancy.salary || vacancy.work_schedule) && (
                      <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                        {vacancy.salary && (
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-600">Зарплата:</span>
                            <span className="font-semibold text-green-600">{vacancy.salary}</span>
                          </div>
                        )}
                        {vacancy.work_schedule && (
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">График:</span>
                            <span className="font-semibold text-gray-700">{vacancy.work_schedule}</span>
                          </div>
                        )}
                      </div>
                    )}
                    
                    {/* Кнопка подачи заявки */}
                    <motion.button 
                      onClick={() => handleApplyClick(vacancy)}
                      className={`w-full bg-gradient-to-r ${vacancy.category.color} text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>{t('vacancies.applyButton')}</span>
                      <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <div className="text-center py-20">
            <div className="text-gray-400 text-6xl mb-4">💼</div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">Вакансии не найдены</h3>
            <p className="text-gray-500">В данный момент нет открытых вакансий</p>
          </div>
        )}

        {/* Мы предлагаем */}
        {vacanciesData.benefits.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              {t('vacancies.weOffer')}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {vacanciesData.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {getIconComponent(benefit.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Информация о подаче заявки */}
        {vacanciesData.applicationInfo && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-8 text-white"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  {t('vacancies.application.title')}
                </h2>
                <p className="text-white/90 mb-6 text-lg">
                  {t('vacancies.application.description')}
                </p>
                
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <FaEnvelope className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">{t('vacancies.application.email')}</p>
                      <p className="text-white/80">{vacanciesData.applicationInfo.email}</p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <FaClock className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">{t('vacancies.application.deadlineTitle')}</p>
                      <p className="text-white/80">{vacanciesData.applicationInfo.deadline}</p>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <FaCalendarAlt />
                  {t('vacancies.application.requirements')}
                </h3>
                <ul className="space-y-2">
                  {vacanciesData.applicationInfo.documents && vacanciesData.applicationInfo.documents.map((doc, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 text-white/90"
                    >
                      <div className="w-2 h-2 bg-white rounded-full" />
                      {doc}
                    </motion.li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-white text-blue-600 py-3 rounded-xl font-bold mt-6 hover:bg-gray-100 transition-colors duration-300"
                  onClick={() => window.location.href = `mailto:${vacanciesData.applicationInfo.email}?subject=${vacanciesData.applicationInfo.subject}`}
                >
                  {t('vacancies.application.applyNow')}
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Vacancies;