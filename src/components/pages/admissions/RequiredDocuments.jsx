import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaFileAlt,
  FaPassport,
  FaUserGraduate,
  FaCamera,
  FaHeartbeat,
  FaShieldAlt,
  FaGlobe,
  FaDownload,
  FaPrint,
  FaCheckCircle,
  FaClock,
  FaExclamationTriangle,
  FaListAlt,
  FaEnvelope,
  FaPhone
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const AdmissionDocuments = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("citizens");

  const documentStats = [
    { number: "6+", label: t('documents.stats.documents') },
    { number: "2", label: t('documents.stats.categories') },
    { number: "100%", label: t('documents.stats.acceptance') },
    { number: "24/7", label: t('documents.stats.support') }
  ];

  const documentFeatures = [
    {
      icon: <FaCheckCircle className="text-green-500" size={28} />,
      title: t('documents.features.complete.title'),
      description: t('documents.features.complete.description')
    },
    {
      icon: <FaClock className="text-blue-500" size={28} />,
      title: t('documents.features.timely.title'),
      description: t('documents.features.timely.description')
    },
    {
      icon: <FaExclamationTriangle className="text-orange-500" size={28} />,
      title: t('documents.features.attention.title'),
      description: t('documents.features.attention.description')
    },
    {
      icon: <FaListAlt className="text-purple-500" size={28} />,
      title: t('documents.features.checklist.title'),
      description: t('documents.features.checklist.description')
    }
  ];

  const documentCategories = [
    {
      id: "citizens",
      title: t('documents.categories.citizens.title'),
      description: t('documents.categories.citizens.description'),
      icon: <FaUserGraduate className="text-3xl" />,
      color: "from-blue-500 to-cyan-500",
      documents: [
        {
          id: 1,
          name: t('documents.categories.citizens.documents.application'),
          description: t('documents.categories.citizens.descriptions.application'),
          icon: <FaFileAlt className="text-lg" />,
          required: true,
          copies: 1,
          format: t('documents.formats.original')
        },
        {
          id: 2,
          name: t('documents.categories.citizens.documents.education'),
          description: t('documents.categories.citizens.descriptions.education'),
          icon: <FaUserGraduate className="text-lg" />,
          required: true,
          copies: 1,
          format: t('documents.formats.originalCopy')
        },
        {
          id: 3,
          name: t('documents.categories.citizens.documents.passport'),
          description: t('documents.categories.citizens.descriptions.passport'),
          icon: <FaPassport className="text-lg" />,
          required: true,
          copies: 1,
          format: t('documents.formats.copy')
        },
        {
          id: 4,
          name: t('documents.categories.citizens.documents.photos'),
          description: t('documents.categories.citizens.descriptions.photos'),
          icon: <FaCamera className="text-lg" />,
          required: true,
          copies: t('documents.formats.photosCount'),
          format: t('documents.formats.photoSizes')
        },
        {
          id: 5,
          name: t('documents.categories.citizens.documents.medical'),
          description: t('documents.categories.citizens.descriptions.medical'),
          icon: <FaHeartbeat className="text-lg" />,
          required: true,
          copies: 1,
          format: t('documents.formats.medicalForm')
        },
        {
          id: 6,
          name: t('documents.categories.citizens.documents.military'),
          description: t('documents.categories.citizens.descriptions.military'),
          icon: <FaShieldAlt className="text-lg" />,
          required: true,
          copies: 1,
          format: t('documents.formats.original')
        }
      ]
    },
    {
      id: "foreigners",
      title: t('documents.categories.foreigners.title'),
      description: t('documents.categories.foreigners.description'),
      icon: <FaGlobe className="text-3xl" />,
      color: "from-green-500 to-emerald-500",
      documents: [
        {
          id: 1,
          name: t('documents.categories.foreigners.documents.application'),
          description: t('documents.categories.foreigners.descriptions.application'),
          icon: <FaFileAlt className="text-lg" />,
          required: true,
          copies: 1,
          format: t('documents.formats.original')
        },
        {
          id: 2,
          name: t('documents.categories.foreigners.documents.passport'),
          description: t('documents.categories.foreigners.descriptions.passport'),
          icon: <FaPassport className="text-lg" />,
          required: true,
          copies: 1,
          format: t('documents.formats.originalCopy')
        },
        {
          id: 3,
          name: t('documents.categories.foreigners.documents.education'),
          description: t('documents.categories.foreigners.descriptions.education'),
          icon: <FaUserGraduate className="text-lg" />,
          required: true,
          copies: 1,
          format: t('documents.formats.certifiedCopy')
        },
        {
          id: 4,
          name: t('documents.categories.foreigners.documents.translation'),
          description: t('documents.categories.foreigners.descriptions.translation'),
          icon: <FaFileAlt className="text-lg" />,
          required: true,
          copies: 1,
          format: t('documents.formats.notarizedTranslation')
        },
        {
          id: 5,
          name: t('documents.categories.foreigners.documents.equivalence'),
          description: t('documents.categories.foreigners.descriptions.equivalence'),
          icon: <FaCheckCircle className="text-lg" />,
          required: true,
          copies: 1,
          format: t('documents.formats.equivalenceCertificate')
        },
        {
          id: 6,
          name: t('documents.categories.foreigners.documents.photos'),
          description: t('documents.categories.foreigners.descriptions.photos'),
          icon: <FaCamera className="text-lg" />,
          required: true,
          copies: t('documents.formats.photosCount'),
          format: t('documents.formats.photoSizes')
        },
        {
          id: 7,
          name: t('documents.categories.foreigners.documents.medical'),
          description: t('documents.categories.foreigners.descriptions.medical'),
          icon: <FaHeartbeat className="text-lg" />,
          required: true,
          copies: 1,
          format: t('documents.formats.medicalResults')
        }
      ]
    }
  ];

  const deadlines = [
    {
      period: t('documents.deadlines.fall.title'),
      date: t('documents.deadlines.fall.date'),
      status: "active"
    },
    {
      period: t('documents.deadlines.spring.title'),
      date: t('documents.deadlines.spring.date'),
      status: "upcoming"
    },
    {
      period: t('documents.deadlines.summer.title'),
      date: t('documents.deadlines.summer.date'),
      status: "upcoming"
    }
  ];

  const contactInfo = {
    phone: "+996 778 99 88 89",
    email: "admission@salymbekov.com",
    address: t('documents.contact.address')
  };

  const currentCategory = documentCategories.find(cat => cat.id === activeCategory);

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
            <FaFileAlt className="text-xl" />
            <span className="font-semibold">{t('documents.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            {t('documents.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('documents.subtitle')}
          </p>
        </motion.div>

        {/* Особенности */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            {t('documents.features.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documentFeatures.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 mb-4 group-hover:scale-110 transition-transform duration-300">
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

        {/* Основной контент */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Заголовок и переключение категорий */}
            <div className="p-8 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    {t('documents.requiredDocuments')}
                  </h2>
                  <p className="text-gray-600">
                    {t('documents.selectCategory')}
                  </p>
                </div>
              </div>

              {/* Переключение категорий */}
              <div className="flex flex-col sm:flex-row gap-4">
                {documentCategories.map((category, index) => (
                  <motion.button
                    key={category.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex-1 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                      activeCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                        : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    {category.icon}
                    <div className="text-left">
                      <div className="font-bold">{category.title}</div>
                      <div className="text-sm opacity-80">{category.description}</div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Список документов */}
            <div className="p-8">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {currentCategory.documents.map((doc, index) => (
                  <motion.div
                    key={doc.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white rounded-2xl border-2 border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${currentCategory.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                        {doc.icon}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-bold text-gray-800">
                            {doc.name}
                          </h3>
                          {doc.required && (
                            <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-lg">
                              {t('documents.required')}
                            </span>
                          )}
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-3">
                          {doc.description}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <FaFileAlt className="text-xs" />
                            {doc.format}
                          </span>
                          <span>
                            {doc.copies}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Дополнительная информация */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid md:grid-cols-2 gap-8"
        >
        </motion.div>
      </div>
    </div>
  );
};

export default AdmissionDocuments;