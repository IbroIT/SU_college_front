import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaMusic, 
  FaLanguage, 
  FaComments,
  FaGamepad,
  FaChess,
  FaArrowRight,
  FaUsers,
  FaLightbulb,
  FaStar,
  FaHeart,
  FaTheaterMasks 
} from "react-icons/fa";

import { useTranslation } from "react-i18next";

const CreativeClubs = () => {
  const { t } = useTranslation();
  const [hoveredClub, setHoveredClub] = useState(null);

  const clubFeatures = [
    {
      icon: <FaMusic className="text-purple-500" size={28} />,
      title: t('clubs.features.creative.title'),
      description: t('clubs.features.creative.description')
    },
    {
      icon: <FaLightbulb className="text-yellow-500" size={28} />,
      title: t('clubs.features.skills.title'),
      description: t('clubs.features.skills.description')
    },
    {
      icon: <FaUsers className="text-green-500" size={28} />,
      title: t('clubs.features.community.title'),
      description: t('clubs.features.community.description')
    },
    {
      icon: <FaHeart className="text-red-500" size={28} />,
      title: t('clubs.features.development.title'),
      description: t('clubs.features.development.description')
    }
  ];

  const availableClubs = [
    {
      id: 1,
      icon: <FaTheaterMasks  className="text-3xl" />,
      title: t('clubs.clubs.dancing.title'),
      description: t('clubs.clubs.dancing.description'),
      members: 45,
      level: t('clubs.levels.all'),
      schedule: t('clubs.schedule.twiceWeekly'),
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50",
      borderColor: "border-pink-200"
    },
    {
      id: 2,
      icon: <FaLanguage className="text-3xl" />,
      title: t('clubs.clubs.english.title'),
      description: t('clubs.clubs.english.description'),
      members: 60,
      level: t('clubs.levels.all'),
      schedule: t('clubs.schedule.weekly'),
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200"
    },
    {
      id: 3,
      icon: <FaComments className="text-3xl" />,
      title: t('clubs.clubs.debates.title'),
      description: t('clubs.clubs.debates.description'),
      members: 35,
      level: t('clubs.levels.intermediate'),
      schedule: t('clubs.schedule.twiceWeekly'),
      color: "from-orange-500 to-amber-500",
      bgColor: "from-orange-50 to-amber-50",
      borderColor: "border-orange-200"
    },
    {
      id: 4,
      icon: <FaGamepad className="text-3xl" />,
      title: t('clubs.clubs.esports.title'),
      description: t('clubs.clubs.esports.description'),
      members: 80,
      level: t('clubs.levels.all'),
      schedule: t('clubs.schedule.flexible'),
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50",
      borderColor: "border-purple-200"
    },
    {
      id: 5,
      icon: <FaChess className="text-3xl" />,
      title: t('clubs.clubs.sports.title'),
      description: t('clubs.clubs.sports.description'),
      members: 55,
      level: t('clubs.levels.all'),
      schedule: t('clubs.schedule.weekly'),
      color: "from-emerald-500 to-green-500",
      bgColor: "from-emerald-50 to-green-50",
      borderColor: "border-emerald-200"
    }
  ];

  const stats = [
    { number: "5+", label: t('clubs.stats.clubs') },
    { number: "275+", label: t('clubs.stats.participants') },
    { number: "50+", label: t('clubs.stats.events') },
    { number: "12", label: t('clubs.stats.achievements') }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
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
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full mb-6"
          >
            <FaStar className="text-xl" />
            <span className="font-semibold">{t('clubs.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            {t('clubs.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('clubs.subtitle')}
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

        {/* О творческих коллективах */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            {t('clubs.about.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clubFeatures.map((feature, index) => (
              <motion.div
                key={index}
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

        {/* Доступные кружки */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            {t('clubs.availableClubs')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {availableClubs.map((club, index) => (
              <motion.div
                key={club.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                onHoverStart={() => setHoveredClub(club.id)}
                onHoverEnd={() => setHoveredClub(null)}
                className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden hover:shadow-3xl transition-all duration-500 group cursor-pointer relative"
              >
                {/* Анимированный фон */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: hoveredClub === club.id 
                      ? [
                          'linear-gradient(45deg, rgba(168, 85, 247, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%)',
                          'linear-gradient(135deg, rgba(168, 85, 247, 0.08) 0%, rgba(236, 72, 153, 0.08) 100%)',
                          'linear-gradient(225deg, rgba(168, 85, 247, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%)'
                        ]
                      : 'linear-gradient(45deg, rgba(168, 85, 247, 0) 0%, rgba(236, 72, 153, 0) 100%)'
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                {/* Верхняя часть с иконкой и градиентом */}
                <div className={`relative h-32 bg-gradient-to-r ${club.color} overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      className="text-white"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {club.icon}
                    </motion.div>
                  </div>
                  
                  {/* Декоративные элементы */}
                  <motion.div
                    className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full"
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
                  
                  {/* Уровень сложности */}
                  <motion.div 
                    className="absolute bottom-4 left-4"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                  >
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl px-3 py-1">
                      <p className="text-white text-sm font-medium">
                        {club.level}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Информация о кружке */}
                <div className="relative p-6">
                  {/* Название кружка */}
                  <motion.h3 
                    className="text-xl font-bold text-gray-800 mb-3 text-center"
                    whileHover={{ color: "#8b5cf6" }}
                    transition={{ duration: 0.2 }}
                  >
                    {club.title}
                  </motion.h3>
                  
                  {/* Описание */}
                  <div className="mb-6 relative">
                    <motion.div
                      className="absolute -left-2 top-0 w-1 h-8 bg-purple-500 rounded-full"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    />
                    <p className="text-gray-600 text-sm leading-relaxed pl-4 mb-4">
                      {club.description}
                    </p>
                  </div>
                  
                  {/* Детали кружка */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">{t('clubs.details.members')}:</span>
                      <span className="font-semibold text-gray-700">{club.members}+</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">{t('clubs.details.schedule')}:</span>
                      <span className="font-semibold text-gray-700">{club.schedule}</span>
                    </div>
                  </div>
                  
                  {/* Кнопка присоединения */}
                  <motion.button 
                    className={`w-full bg-gradient-to-r ${club.color} text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{t('clubs.joinButton')}</span>
                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Анимированный бордер */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${club.color} bg-clip-padding`}
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
      </div>
    </div>
  );
};

export default CreativeClubs;