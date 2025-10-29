import React from 'react';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { 
  FaQuoteLeft,
  FaEnvelope,
  FaHandshake,
  FaUsers,
  FaGraduationCap,
  FaRocket,
  FaAward,
  FaHeart,
  FaGlobe,
  FaCode,
  FaChartLine
} from "react-icons/fa";
import DiretorImg from '../../../assets/NurzatM.jpg';

const CollegeDirectorMessage = () => {
  const { t } = useTranslation();

  const principles = [
    {
      icon: <FaRocket className="text-blue-500" size={24} />,
      title: t('collegeDirector.principles.practicality.title'),
      description: t('collegeDirector.principles.practicality.description')
    },
    {
      icon: <FaUsers className="text-green-500" size={24} />,
      title: t('collegeDirector.principles.people.title'),
      description: t('collegeDirector.principles.people.description')
    },
    {
      icon: <FaGraduationCap className="text-purple-500" size={24} />,
      title: t('collegeDirector.principles.learning.title'),
      description: t('collegeDirector.principles.learning.description')
    }
  ];

  const features = [
    {
      icon: <FaGlobe className="text-red-500" size={20} />,
      text: t('collegeDirector.features.international')
    },
    {
      icon: <FaCode className="text-blue-500" size={20} />,
      text: t('collegeDirector.features.itPrograms')
    },
    {
      icon: <FaChartLine className="text-green-500" size={20} />,
      text: t('collegeDirector.features.businessPrograms')
    },
    {
      icon: <FaAward className="text-purple-500" size={20} />,
      text: t('collegeDirector.features.doubleDiploma')
    }
  ];

  const stats = [
    { number: "2", label: t('collegeDirector.stats.diplomas'), icon: <FaAward className="text-blue-500" /> },
    { number: "100%", label: t('collegeDirector.stats.english'), icon: <FaGlobe className="text-green-500" /> },
    { number: "IT", label: t('collegeDirector.stats.specialties'), icon: <FaCode className="text-purple-500" /> },
    { number: "Малайзия", label: t('collegeDirector.stats.partner'), icon: <FaGraduationCap className="text-red-500" /> }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-50 to-cyan-50"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 8 + Math.random() * 8,
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
            <FaQuoteLeft className="text-xl" />
            <span className="font-semibold">{t('collegeDirector.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
            {t('collegeDirector.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('collegeDirector.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Левая часть - Информация о директоре */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="space-y-6">
              {/* Карточка директора */}
              <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-1"
          >
              {/* Фотография */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl transform rotate-3 transition-transform duration-300 group-hover:rotate-2"></div>
                <div className="relative bg-white rounded-3xl p-2 transform transition-transform duration-300 group-hover:-translate-y-2">
                  <img 
                    src={DiretorImg}
                    alt={t('directorMessage.directorName')}
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                </div>
                
                {/* Бейдж с именем */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-9 py-3 rounded-2xl shadow-xl text-center min-w-64"
                >
                  <h3 className="font-bold text-lg">{t('collegeDirector.directorName')}</h3>
                  <p className="text-sm opacity-90">{t('collegeDirector.directorPosition')}</p>
                </motion.div>
              </motion.div>
              </motion.div>

              {/* Контактная информация */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <FaEnvelope className="text-blue-500" />
                  {t('collegeDirector.contact.title')}
                </h3>
                <motion.a
                  href="mailto:nurzat255@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-2xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <FaEnvelope className="text-sm" />
                  <span>nurzat255@gmail.com</span>
                </motion.a>
                <p className="text-gray-600 text-sm text-center mt-3">
                  {t('collegeDirector.contact.description')}
                </p>
              </motion.div>

              {/* Особенности колледжа */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl p-6 text-white"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <FaAward className="text-white" />
                  {t('collegeDirector.features.title')}
                </h3>
                <div className="space-y-3">
                  {features.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-3 bg-white/20 backdrop-blur-sm p-3 rounded-xl"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <span className="text-sm font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Правая часть - Текст сообщения */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Приветственное сообщение */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-8 text-white relative overflow-hidden"
            >
              <FaQuoteLeft className="absolute top-6 right-6 text-white/20 text-6xl" />
              <p className="text-xl leading-relaxed relative z-10">
                {t('collegeDirector.welcome')}
              </p>
            </motion.div>

            {/* Основной текст */}
            <div className="space-y-6">
              {/* О переходном периоде */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('collegeDirector.transition')}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {t('collegeDirector.understanding')}
                </p>
              </motion.div>

              {/* Принципы обучения */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="grid md:grid-cols-3 gap-4"
              >
                {principles.map((principle, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 text-center"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center mx-auto mb-3">
                      {principle.icon}
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">{principle.title}</h4>
                    <p className="text-gray-600 text-sm">{principle.description}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Программа двойного диплома */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white"
              >
                <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <FaGraduationCap />
                  {t('collegeDirector.program.title')}
                </h4>
                <p className="mb-4 leading-relaxed">
                  {t('collegeDirector.program.description')}
                </p>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <span className="font-bold text-lg">
                    {t('collegeDirector.program.doubleDiploma')}
                  </span>
                </div>
              </motion.div>

              {/* Командная работа и общение */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="grid md:grid-cols-2 gap-6"
              >
                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                    <FaUsers className="text-blue-500" />
                    {t('collegeDirector.teamwork.title')}
                  </h4>
                  <p className="text-blue-700 leading-relaxed">
                    {t('collegeDirector.teamwork.description')}
                  </p>
                </div>
                <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                    <FaHandshake className="text-green-500" />
                    {t('collegeDirector.communication.title')}
                  </h4>
                  <p className="text-green-700 leading-relaxed">
                    {t('collegeDirector.communication.description')}
                  </p>
                </div>
              </motion.div>

              {/* Приоритеты и будущее */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-gradient-to-r from-gray-800 to-blue-700 rounded-2xl p-6 text-white"
              >
                <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <FaHeart className="text-red-400" />
                  {t('collegeDirector.priority.title')}
                </h4>
                <p className="leading-relaxed">
                  {t('collegeDirector.priority.description')}
                </p>
              </motion.div>

              {/* Подпись */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
              >
                <div className="flex items-center justify-center gap-3 mb-3">
                  <FaHandshake className="text-blue-500 text-2xl" />
                  <div>
                    <p className="font-semibold text-blue-900 text-lg">
                      {t('collegeDirector.sincerely')}
                    </p>
                    <p className="text-xl font-bold text-blue-800">
                      {t('collegeDirector.directorName')}
                    </p>
                    <p className="text-gray-600">
                      {t('collegeDirector.directorPosition')}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CollegeDirectorMessage;