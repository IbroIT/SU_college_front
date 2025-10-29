import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaBrain,
  FaComments,
  FaUsers,
  FaLightbulb,
  FaGraduationCap,
  FaHeart,
  FaArrowRight,
  FaStar,
  FaQuoteLeft
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const DebateClub = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <FaGraduationCap className="text-blue-500" size={28} />,
      title: t('debate.features.learning.title'),
      description: t('debate.features.learning.description')
    },
    {
      icon: <FaBrain className="text-green-500" size={28} />,
      title: t('debate.features.development.title'),
      description: t('debate.features.development.description')
    },
    {
      icon: <FaHeart className="text-purple-500" size={28} />,
      title: t('debate.features.education.title'),
      description: t('debate.features.education.description')
    },
    {
      icon: <FaComments className="text-orange-500" size={28} />,
      title: t('debate.features.communication.title'),
      description: t('debate.features.communication.description')
    }
  ];

  const advantages = [
    {
      icon: <FaLightbulb className="text-yellow-500" size={24} />,
      text: t('debate.advantages.criticalThinking')
    },
    {
      icon: <FaGraduationCap className="text-blue-500" size={24} />,
      text: t('debate.advantages.differentiation')
    },
    {
      icon: <FaUsers className="text-green-500" size={24} />,
      text: t('debate.advantages.individuation')
    },
    {
      icon: <FaStar className="text-purple-500" size={24} />,
      text: t('debate.advantages.diversity')
    },
    {
      icon: <FaComments className="text-orange-500" size={24} />,
      text: t('debate.advantages.practicalSkills')
    }
  ];

  const stats = [
    { number: "50+", label: t('debate.stats.members') },
    { number: "20+", label: t('debate.stats.tournaments') },
    { number: "15+", label: t('debate.stats.winners') },
    { number: "100+", label: t('debate.stats.debates') }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-100 to-pink-100"
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
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full mb-6"
          >
            <FaComments className="text-xl" />
            <span className="font-semibold">{t('debate.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-purple-600 bg-clip-text text-transparent">
            {t('debate.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('debate.subtitle')}
          </p>
        </motion.div>

        {/* Статистика */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* О клубе */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
              {t('debate.about.title')}
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-center">
                {t('debate.about.description')}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Задачи клуба */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            {t('debate.tasks.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
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

        {/* Преимущества */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            {t('debate.advantages.title')}
          </h2>
          
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex-shrink-0 mt-1">
                    {advantage.icon}
                  </div>
                  <p className="text-white/90 leading-relaxed">
                    {advantage.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Призыв к действию */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-800 to-purple-700 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t('debate.cta.title')}
            </h3>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              {t('debate.cta.description')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center gap-3"
            >
              <span>{t('debate.cta.button')}</span>
              <FaArrowRight className="text-sm" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DebateClub;