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
import PageSEO from '../seo/PageSEO';

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
    <>
      <PageSEO 
        pageKey="vacancies"
        structuredDataType="JobPosting"
      />
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
    </>
  );
};

export default Vacancies;