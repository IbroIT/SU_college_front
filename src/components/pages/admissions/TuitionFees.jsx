import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaMoneyBillWave,
  FaGraduationCap,
  FaUserGraduate,
  FaAward,
  FaUsers,
  FaTrophy,
  FaPercentage,
  FaHome,
  FaUtensils,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFileAlt,
  FaStar,
  FaHeart,
  FaShieldAlt,
  FaRocket
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const TuitionFees = () => {
  const { t } = useTranslation();
  const [activeProgram, setActiveProgram] = useState("cs");

  const tuitionStats = [
    { number: "3", label: t('tuition.stats.programs') },
    { number: "308K", label: t('tuition.stats.price') },
    { number: "5", label: t('tuition.stats.categories') },
    { number: "100%", label: t('tuition.stats.support') }
  ];

  const tuitionFeatures = [
    {
      icon: <FaPercentage className="text-green-500" size={28} />,
      title: t('tuition.features.installments.title'),
      description: t('tuition.features.installments.description')
    },
    {
      icon: <FaAward className="text-blue-500" size={28} />,
      title: t('tuition.features.performance.title'),
      description: t('tuition.features.performance.description')
    },
    {
      icon: <FaUsers className="text-purple-500" size={28} />,
      title: t('tuition.features.support.title'),
      description: t('tuition.features.support.description')
    },
    {
      icon: <FaTrophy className="text-orange-500" size={28} />,
      title: t('tuition.features.achievements.title'),
      description: t('tuition.features.achievements.description')
    }
  ];

  const studyPrograms = [
    {
      id: "cs",
      name: t('tuition.programs.cs.name'),
      description: t('tuition.programs.cs.description'),
      price: "308,000",
      currency: t('tuition.currency'),
      duration: t('tuition.duration'),
      credits: t('tuition.credits'),
      icon: <FaUserGraduate className="text-3xl" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        t('tuition.programs.cs.features.programming'),
        t('tuition.programs.cs.features.algorithms'),
        t('tuition.programs.cs.features.databases'),
        t('tuition.programs.cs.features.networks')
      ]
    },
    {
      id: "mobile",
      name: t('tuition.programs.mobile.name'),
      description: t('tuition.programs.mobile.description'),
      price: "308,000",
      currency: t('tuition.currency'),
      duration: t('tuition.duration'),
      credits: t('tuition.credits'),
      icon: <FaRocket className="text-3xl" />,
      color: "from-green-500 to-emerald-500",
      features: [
        t('tuition.programs.mobile.features.ios'),
        t('tuition.programs.mobile.features.android'),
        t('tuition.programs.mobile.features.flutter'),
        t('tuition.programs.mobile.features.ui')
      ]
    },
    {
      id: "multimedia",
      name: t('tuition.programs.multimedia.name'),
      description: t('tuition.programs.multimedia.description'),
      price: "308,000",
      currency: t('tuition.currency'),
      duration: t('tuition.duration'),
      credits: t('tuition.credits'),
      icon: <FaStar className="text-3xl" />,
      color: "from-purple-500 to-indigo-500",
      features: [
        t('tuition.programs.multimedia.features.vfx'),
        t('tuition.programs.multimedia.features.premiere'),
        t('tuition.programs.multimedia.features.design'),
        t('tuition.programs.multimedia.features.animation')
      ]
    }
  ];

  const benefitCategories = [
    {
      id: 1,
      title: t('tuition.benefits.category1.title'),
      description: t('tuition.benefits.category1.description'),
      icon: <FaStar className="text-2xl" />,
      requirements: [
        t('tuition.benefits.category1.requirements.excellent'),
        t('tuition.benefits.category1.requirements.noDebt'),
        t('tuition.benefits.category1.requirements.active')
      ],
      benefits: [
        t('tuition.benefits.category1.benefits.discount'),
        t('tuition.benefits.category1.benefits.housing'),
        t('tuition.benefits.category1.benefits.meals')
      ],
      color: "from-yellow-500 to-amber-500"
    },
    {
      id: 2,
      title: t('tuition.benefits.category2.title'),
      description: t('tuition.benefits.category2.description'),
      icon: <FaHeart className="text-2xl" />,
      requirements: [
        t('tuition.benefits.category2.requirements.orphans'),
        t('tuition.benefits.category2.requirements.disabled'),
        t('tuition.benefits.category2.requirements.documentation')
      ],
      benefits: [
        t('tuition.benefits.category2.benefits.significant'),
        t('tuition.benefits.category2.benefits.housing'),
        t('tuition.benefits.category2.benefits.support')
      ],
      color: "from-red-500 to-pink-500"
    },
    {
      id: 3,
      title: t('tuition.benefits.category3.title'),
      description: t('tuition.benefits.category3.description'),
      icon: <FaUsers className="text-2xl" />,
      requirements: [
        t('tuition.benefits.category3.requirements.parents'),
        t('tuition.benefits.category3.requirements.contribution'),
        t('tuition.benefits.category3.requirements.participation')
      ],
      benefits: [
        t('tuition.benefits.category3.benefits.discount'),
        t('tuition.benefits.category3.benefits.priority'),
        t('tuition.benefits.category3.benefits.support')
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 4,
      title: t('tuition.benefits.category4.title'),
      description: t('tuition.benefits.category4.description'),
      icon: <FaTrophy className="text-2xl" />,
      requirements: [
        t('tuition.benefits.category4.requirements.competitions'),
        t('tuition.benefits.category4.requirements.levels'),
        t('tuition.benefits.category4.requirements.achievements')
      ],
      benefits: [
        t('tuition.benefits.category4.benefits.discount'),
        t('tuition.benefits.category4.benefits.recognition'),
        t('tuition.benefits.category4.benefits.support')
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 5,
      title: t('tuition.benefits.category5.title'),
      description: t('tuition.benefits.category5.description'),
      icon: <FaAward className="text-2xl" />,
      requirements: [
        t('tuition.benefits.category5.requirements.firstYear'),
        t('tuition.benefits.category5.requirements.achievements'),
        t('tuition.benefits.category5.requirements.competitions')
      ],
      benefits: [
        t('tuition.benefits.category5.benefits.discount'),
        t('tuition.benefits.category5.benefits.recognition'),
        t('tuition.benefits.category5.benefits.support')
      ],
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const contactInfo = {
    address: t('tuition.contact.address'),
    phones: [
      "+996 778 99 88 89",
      "+996 706 99 88 89"
    ],
    email: "info@salymbekov.com",
    basis: t('tuition.contact.basis')
  };

  const currentProgram = studyPrograms.find(program => program.id === activeProgram);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-100 to-green-100"
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
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-full mb-6"
          >
            <FaMoneyBillWave className="text-xl" />
            <span className="font-semibold">{t('tuition.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            {t('tuition.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('tuition.subtitle')}
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
          {tuitionStats.map((stat, index) => (
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

        {/* Особенности оплаты */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            {t('tuition.features.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tuitionFeatures.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-green-50 mb-4 group-hover:scale-110 transition-transform duration-300">
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

        {/* Стоимость обучения */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="p-8 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-green-50">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    {t('tuition.programs.title')}
                  </h2>
                  <p className="text-gray-600">
                    {t('tuition.programs.subtitle')}
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">{t('tuition.programs.select')}</span>
                </div>
              </div>

              {/* Переключение программ */}
              <div className="flex flex-col sm:flex-row gap-4">
                {studyPrograms.map((program, index) => (
                  <motion.button
                    key={program.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveProgram(program.id)}
                    className={`flex-1 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                      activeProgram === program.id
                        ? `bg-gradient-to-r ${program.color} text-white shadow-lg`
                        : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    {program.icon}
                    <div className="text-left">
                      <div className="font-bold">{program.name}</div>
                      <div className="text-sm opacity-80">{program.duration}</div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Детали программы */}
            <div className="p-8">
              <motion.div
                key={activeProgram}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid lg:grid-cols-2 gap-8"
              >
                {/* Информация о программе */}
                <div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {currentProgram.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {currentProgram.description}
                    </p>
                    
                    <div className="flex items-center gap-6 mb-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600">
                          {currentProgram.price} {currentProgram.currency}
                        </div>
                        <div className="text-sm text-gray-500">{t('tuition.perYear')}</div>
                      </div>
                      <div className="h-12 w-px bg-gray-300"></div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-800">
                          {currentProgram.credits}
                        </div>
                        <div className="text-sm text-gray-500">{t('tuition.creditsLabel')}</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">
                      {t('tuition.programFeatures')}:
                    </h4>
                    <div className="space-y-2">
                      {currentProgram.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center gap-3 py-2"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentProgram.color}`} />
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Условия оплаты */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <FaMoneyBillWave className="text-green-500" />
                    {t('tuition.paymentConditions')}
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">{t('tuition.installmentPlan')}</span>
                      <span className="font-semibold text-gray-800">{t('tuition.available')}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">{t('tuition.paymentParts')}</span>
                      <span className="font-semibold text-gray-800">2-4 {t('tuition.parts')}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">{t('tuition.discounts')}</span>
                      <span className="font-semibold text-green-600">{t('tuition.available')}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600">{t('tuition.scholarships')}</span>
                      <span className="font-semibold text-green-600">{t('tuition.available')}</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full mt-6 bg-gradient-to-r ${currentProgram.color} text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300`}
                  >
                    {t('tuition.applyNow')}
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Льготные категории */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            {t('tuition.benefits.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefitCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-2xl border-2 border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Заголовок категории */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {category.description}
                </p>

                {/* Требования */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                    {t('tuition.requirements')}:
                  </h4>
                  <ul className="space-y-1">
                    {category.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                        <span className="text-blue-500 mt-1">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Льготы */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                    {t('tuition.benefitsList')}:
                  </h4>
                  <ul className="space-y-1">
                    {category.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-green-600">
                        <span className="text-green-500 mt-1">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Контактная информация */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl p-8 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                {t('tuition.contact.title')}
              </h2>
              <p className="text-white/90 mb-6">
                {t('tuition.contact.description')}
              </p>
              
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">{t('tuition.contact.addressLabel')}</p>
                    <p className="font-semibold">{contactInfo.address}</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <FaPhone className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">{t('tuition.contact.phone')}</p>
                    {contactInfo.phones.map((phone, idx) => (
                      <p key={idx} className="font-semibold">{phone}</p>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">{t('tuition.contact.email')}</p>
                    <p className="font-semibold">{contactInfo.email}</p>
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
                <FaFileAlt />
                {t('tuition.contact.basisTitle')}
              </h3>
              <p className="text-white/90 text-sm mb-4">
                {contactInfo.basis}
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white text-blue-600 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300"
              >
                {t('tuition.contact.consultation')}
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TuitionFees;