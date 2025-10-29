import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaBook,
  FaGraduationCap,
  FaFileAlt,
  FaBalanceScale,
  FaUserTie,
  FaChartLine,
  FaDownload,
  FaArrowRight,
  FaUniversity,
  FaShieldAlt,
  FaAward,
  FaClock
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Regulations = () => {
  const { t } = useTranslation();

  const regulations = [
    {
      icon: <FaGraduationCap className="text-blue-500" size={28} />,
      title: t('regulations.educational.title'),
      description: t('regulations.educational.description'),
      documents: [
        { name: t('regulations.educational.documents.academic'), date: "2024", size: "2.4 MB" },
        { name: t('regulations.educational.documents.curriculum'), date: "2024", size: "1.8 MB" },
        { name: t('regulations.educational.documents.assessment'), date: "2024", size: "3.1 MB" }
      ]
    },
    {
      icon: <FaUserTie className="text-cyan-500" size={28} />,
      title: t('regulations.administrative.title'),
      description: t('regulations.administrative.description'),
      documents: [
        { name: t('regulations.administrative.documents.staff'), date: "2024", size: "1.5 MB" },
        { name: t('regulations.administrative.documents.faculty'), date: "2024", size: "2.2 MB" },
        { name: t('regulations.administrative.documents.organization'), date: "2024", size: "2.8 MB" }
      ]
    },
    {
      icon: <FaShieldAlt className="text-indigo-500" size={28} />,
      title: t('regulations.quality.title'),
      description: t('regulations.quality.description'),
      documents: [
        { name: t('regulations.quality.documents.standards'), date: "2024", size: "2.1 MB" },
        { name: t('regulations.quality.documents.accreditation'), date: "2024", size: "3.5 MB" },
        { name: t('regulations.quality.documents.monitoring'), date: "2024", size: "1.9 MB" }
      ]
    },
    {
      icon: <FaBook className="text-blue-600" size={28} />,
      title: t('regulations.resources.title'),
      description: t('regulations.resources.description'),
      documents: [
        { name: t('regulations.resources.documents.library'), date: "2024", size: "1.7 MB" },
        { name: t('regulations.resources.documents.laboratories'), date: "2024", size: "2.3 MB" },
        { name: t('regulations.resources.documents.digital'), date: "2024", size: "2.6 MB" }
      ]
    }
  ];

  const stats = [
    { number: "50+", label: t('regulations.stats.documents'), icon: <FaFileAlt className="text-blue-500" /> },
    { number: "24/7", label: t('regulations.stats.access'), icon: <FaClock className="text-cyan-500" /> },
    { number: "100%", label: t('regulations.stats.compliance'), icon: <FaAward className="text-indigo-500" /> },
    { number: "2024", label: t('regulations.stats.updated'), icon: <FaChartLine className="text-blue-600" /> }
  ];

  const handleDownload = (documentName) => {
    // Здесь можно добавить логику для скачивания документа
    console.log(`Downloading: ${documentName}`);
    // В реальном приложении здесь будет ссылка на файл
  };

  const handleViewAll = () => {
    // Логика для просмотра всех документов
    window.open('/regulations', '_self');
  };

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
            <FaBalanceScale className="text-xl" />
            <span className="font-semibold">{t('regulations.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
            {t('regulations.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('regulations.subtitle')}
          </p>
        </motion.div>

        

        {/* Основной текст */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-center">
                {t('regulations.description')}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Категории положений */}
        
      </div>
    </div>
  );
};

export default Regulations;