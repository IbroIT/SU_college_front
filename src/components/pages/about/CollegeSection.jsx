import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  FaGraduationCap, 
  FaGlobe, 
  FaLaptopCode, 
  FaMobileAlt, 
  FaPalette, 
  FaBrain, 
  FaDollarSign, 
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaArrowRight,
  FaUsers,
  FaCertificate,
  FaLanguage,
  FaRocket
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const CollegeSection = () => {
  const { t } = useTranslation();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [3, -3]);
  const rotateY = useTransform(x, [-100, 100], [-3, 3]);

  const [activeFeature, setActiveFeature] = useState(0);

  // Данные из переводов
  const features = [
    {
      icon: <FaGraduationCap className="text-blue-400" size={32} />,
      title: t('college.features.doubleDiploma.title'),
      description: t('college.features.doubleDiploma.description')
    },
    {
      icon: <FaGlobe className="text-green-400" size={32} />,
      title: t('college.features.international.title'),
      description: t('college.features.international.description')
    },
    {
      icon: <FaLaptopCode className="text-purple-400" size={32} />,
      title: t('college.features.practical.title'),
      description: t('college.features.practical.description')
    },
    {
      icon: <FaUsers className="text-red-400" size={32} />,
      title: t('college.features.teachers.title'),
      description: t('college.features.teachers.description')
    }
  ];

  const programs = [
    {
      icon: <FaLaptopCode className="text-cyan-400" size={28} />,
      name: t('college.programs.softwareDevelopment'),
      duration: "2-3 года"
    },
    {
      icon: <FaMobileAlt className="text-emerald-400" size={28} />,
      name: t('college.programs.mobileDevelopment'),
      duration: "2-3 года"
    },
    {
      icon: <FaPalette className="text-pink-400" size={28} />,
      name: t('college.programs.multimedia'),
      duration: "2-3 года"
    },
    {
      icon: <FaBrain className="text-amber-400" size={28} />,
      name: t('college.programs.ai'),
      duration: "2-3 года"
    }
  ];

  const pricing = [
    {
      program: t('college.pricing.computerScience.program'),
      price: t('college.pricing.computerScience.price'),
      usd: t('college.pricing.computerScience.usd')
    },
    {
      program: t('college.pricing.ai.program'),
      price: t('college.pricing.ai.price'),
      usd: t('college.pricing.ai.usd')
    },
    {
      program: t('college.pricing.webDevelopment.program'),
      price: t('college.pricing.webDevelopment.price'),
      usd: t('college.pricing.webDevelopment.usd')
    },
    {
      program: t('college.pricing.business.program'),
      price: t('college.pricing.business.price'),
      usd: t('college.pricing.business.usd')
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      x.set(e.clientX - window.innerWidth / 2);
      y.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);

    const featureInterval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(featureInterval);
    };
  }, [features.length]);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden py-20">
      {/* Анимированный фон */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, #1e3a8a 0%, #000 70%)",
            "radial-gradient(circle at 80% 20%, #7c3aed 0%, #000 70%)",
            "radial-gradient(circle at 40% 80%, #059669 0%, #000 70%)"
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      {/* Плавающие элементы кода */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="text-blue-400/20 text-sm font-mono absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            rotateZ: [0, 180, 360]
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
        >
          {`<${Math.random() > 0.5 ? "div" : "code"}>`}
        </motion.div>
      ))}

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4"
        style={{ rotateX, rotateY }}
      >
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              {t('college.title')}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-300 max-w-4xl mx-auto leading-relaxed">
            {t('college.subtitle')}
          </p>
        </motion.div>

        {/* Основная информация */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white mb-6">{t('college.about.title')}</h2>
            
            <div className="space-y-4 text-blue-100 text-lg leading-relaxed">
              <p>{t('college.about.description1')}</p>
              <p>{t('college.about.description2')}</p>
              <p>{t('college.about.description3')}</p>
              <p>{t('college.about.description4')}</p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 group">
                <span>{t('college.applyButton')}</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FaCertificate className="text-yellow-400" />
                {t('college.features.title')}
              </h3>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className={`p-4 rounded-xl transition-all duration-300 ${
                      activeFeature === index 
                        ? 'bg-blue-600/30 border border-blue-400' 
                        : 'bg-white/5 border border-transparent'
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start gap-4">
                      {feature.icon}
                      <div>
                        <h4 className="text-white font-semibold text-lg mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-blue-200 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Направления обучения */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            {t('college.programs.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="inline-block p-4 rounded-full bg-black/50 mb-4 group-hover:bg-cyan-900/30 transition-colors">
                    {program.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {program.name}
                  </h3>
                  <p className="text-blue-300 text-sm">{program.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Стоимость обучения */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            {t('college.pricing.title')}
          </h2>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30">
            <div className="grid md:grid-cols-2 gap-8">
              {pricing.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex justify-between items-center p-4 rounded-lg bg-black/30 hover:bg-blue-600/20 transition-all duration-300"
                >
                  <div>
                    <h4 className="text-white font-semibold text-lg">{item.program}</h4>
                    <p className="text-blue-300 text-sm">{item.usd}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-cyan-400 font-bold text-xl">{item.price}</div>
                    <div className="text-green-400 text-sm">{t('college.pricing.perYear')}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-center text-blue-300 mt-6 text-sm"
            >
              {t('college.pricing.note')}
            </motion.p>
          </div>
        </motion.div>

        {/* Контакты */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            {t('college.contacts.title')}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-xl bg-black/30 hover:bg-blue-600/20 transition-all duration-300"
            >
              <FaMapMarkerAlt className="text-red-400 text-3xl mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">{t('college.contacts.address')}</h3>
              <p className="text-blue-300">{t('college.contacts.addressValue')}</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-xl bg-black/30 hover:bg-green-600/20 transition-all duration-300"
            >
              <FaPhone className="text-green-400 text-3xl mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">{t('college.contacts.phone')}</h3>
              <p className="text-blue-300">{t('college.contacts.phoneValue1')}</p>
              <p className="text-blue-300">{t('college.contacts.phoneValue2')}</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-xl bg-black/30 hover:bg-purple-600/20 transition-all duration-300"
            >
              <FaEnvelope className="text-purple-400 text-3xl mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">{t('college.contacts.email')}</h3>
              <p className="text-blue-300">{t('college.contacts.emailValue')}</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CollegeSection;