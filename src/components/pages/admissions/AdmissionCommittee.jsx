import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaUserGraduate,
  FaUniversity,
  FaRocket,
  FaUsers,
  FaAward,
  FaArrowRight,
  FaCalendarAlt,
  FaGraduationCap
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Admissions = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-blue-500" size={24} />,
      title: t('admissions.contact.address.title'),
      content: t('admissions.contact.address.content'),
      description: t('admissions.contact.address.description')
    },
    {
      icon: <FaPhone className="text-green-500" size={24} />,
      title: t('admissions.contact.phone.title'),
      content: t('admissions.contact.phone.content'),
      description: t('admissions.contact.phone.description')
    },
    {
      icon: <FaEnvelope className="text-purple-500" size={24} />,
      title: t('admissions.contact.email.title'),
      content: t('admissions.contact.email.content'),
      description: t('admissions.contact.email.description')
    }
  ];

  const features = [
    {
      icon: <FaUniversity className="text-blue-500" size={28} />,
      title: t('admissions.features.modern.title'),
      description: t('admissions.features.modern.description')
    },
    {
      icon: <FaRocket className="text-green-500" size={28} />,
      title: t('admissions.features.innovative.title'),
      description: t('admissions.features.innovative.description')
    },
    {
      icon: <FaUsers className="text-purple-500" size={28} />,
      title: t('admissions.features.community.title'),
      description: t('admissions.features.community.description')
    },
    {
      icon: <FaAward className="text-orange-500" size={28} />,
      title: t('admissions.features.quality.title'),
      description: t('admissions.features.quality.description')
    }
  ];

  const programs = [
    {
      title: t('admissions.programs.it.title'),
      description: t('admissions.programs.it.description'),
      icon: "💻",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: t('admissions.programs.business.title'),
      description: t('admissions.programs.business.description'),
      icon: "📊",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: t('admissions.programs.design.title'),
      description: t('admissions.programs.design.description'),
      icon: "🎨",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const stats = [
    { number: "2021", label: t('admissions.stats.founded'), icon: <FaCalendarAlt className="text-blue-500" /> },
    { number: "500+", label: t('admissions.stats.students'), icon: <FaUserGraduate className="text-green-500" /> },
    { number: "25+", label: t('admissions.stats.teachers'), icon: <FaUsers className="text-purple-500" /> },
    { number: "4+", label: t('admissions.stats.programs'), icon: <FaAward className="text-orange-500" /> }
  ];

  const [activeProgram, setActiveProgram] = useState(0);

  const handleApplyClick = () => {
    // Логика для подачи заявки
    window.open('/apply', '_self');
  };

  const handleContactClick = (type, value) => {
    switch (type) {
      case 'phone':
        window.open(`tel:${value}`, '_self');
        break;
      case 'email':
        window.open(`mailto:${value}`, '_self');
        break;
      case 'address':
        window.open('https://maps.google.com/?q=ул. Малдыбаева, 24б / Ахунбаева, 125', '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
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
            <FaUserGraduate className="text-xl" />
            <span className="font-semibold">{t('admissions.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
            {t('admissions.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('admissions.subtitle')}
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
              <div className="flex justify-center mb-3">
                <div className="text-2xl">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Контактная информация */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                {t('admissions.contact.title')}
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-2xl border-2 border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300 cursor-pointer group ${
                      index === 0 ? 'bg-blue-50 border-blue-200' : ''
                    }`}
                    onClick={() => {
                      const type = index === 0 ? 'address' : index === 1 ? 'phone' : 'email';
                      handleContactClick(type, item.content);
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white border border-gray-200 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 font-semibold text-lg mb-1">
                          {item.content}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Кнопка подачи заявки */}
              <motion.button
                onClick={handleApplyClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-8 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 rounded-2xl font-bold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FaGraduationCap className="text-sm" />
                <span>{t('admissions.applyButton')}</span>
                <FaArrowRight className="text-sm" />
              </motion.button>
            </div>
          </motion.div>

          {/* Приветственное сообщение */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">
                {t('admissions.welcome.title')}
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                {t('admissions.welcome.description1')}
              </p>
              <p className="text-lg leading-relaxed mb-6">
                {t('admissions.welcome.description2')}
              </p>
              <p className="text-lg leading-relaxed">
                {t('admissions.welcome.description3')}
              </p>
            </div>

          </motion.div>
        </div>

        {/* Призыв к действию */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-800 to-blue-700 rounded-3xl p-8 md:p-12 text-white">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <FaUniversity className="text-xl" />
              <span className="font-semibold">{t('admissions.cta.badge')}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t('admissions.cta.title')}
            </h3>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              {t('admissions.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors duration-300 inline-flex items-center gap-3"
              >
                <FaPhone className="text-sm" />
                <span>{t('admissions.cta.contactButton')}</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Admissions;