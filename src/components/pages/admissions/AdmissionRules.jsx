import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaFileAlt,
  FaCalendar,
  FaListAlt,
  FaCheckCircle,
  FaClock,
  FaGraduationCap,
  FaBook,
  FaUserCheck,
  FaMoneyBillWave,
  FaDownload,
  FaPrint,
  FaQuestionCircle,
  FaArrowRight,
  FaExclamationTriangle
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const AdmissionRules = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('rules');

  const admissionSchedule = [
    {
      stage: t('admissionRules.schedule.stage1.stage'),
      period: t('admissionRules.schedule.stage1.period'),
      description: t('admissionRules.schedule.stage1.description'),
      status: 'current',
      icon: <FaFileAlt className="text-blue-500" />
    },
    {
      stage: t('admissionRules.schedule.stage2.stage'),
      period: t('admissionRules.schedule.stage2.period'),
      description: t('admissionRules.schedule.stage2.description'),
      status: 'upcoming',
      icon: <FaListAlt className="text-green-500" />
    },
    {
      stage: t('admissionRules.schedule.stage3.stage'),
      period: t('admissionRules.schedule.stage3.period'),
      description: t('admissionRules.schedule.stage3.description'),
      status: 'upcoming',
      icon: <FaUserCheck className="text-purple-500" />
    },
    {
      stage: t('admissionRules.schedule.stage4.stage'),
      period: t('admissionRules.schedule.stage4.period'),
      description: t('admissionRules.schedule.stage4.description'),
      status: 'upcoming',
      icon: <FaCheckCircle className="text-orange-500" />
    }
  ];

  const requirements = [
    {
      category: t('admissionRules.requirements.documents.category'),
      items: [
        t('admissionRules.requirements.documents.item1'),
        t('admissionRules.requirements.documents.item2'),
        t('admissionRules.requirements.documents.item3'),
        t('admissionRules.requirements.documents.item4'),
        t('admissionRules.requirements.documents.item5')
      ],
      icon: <FaFileAlt className="text-blue-500" />
    },
    {
      category: t('admissionRules.requirements.academic.category'),
      items: [
        t('admissionRules.requirements.academic.item1'),
        t('admissionRules.requirements.academic.item2'),
        t('admissionRules.requirements.academic.item3'),
        t('admissionRules.requirements.academic.item4')
      ],
      icon: <FaGraduationCap className="text-green-500" />
    },
    {
      category: t('admissionRules.requirements.exams.category'),
      items: [
        t('admissionRules.requirements.exams.item1'),
        t('admissionRules.requirements.exams.item2'),
        t('admissionRules.requirements.exams.item3')
      ],
      icon: <FaBook className="text-purple-500" />
    }
  ];

  const importantDates = [
    {
      title: t('admissionRules.dates.start.title'),
      date: t('admissionRules.dates.start.date'),
      description: t('admissionRules.dates.start.description'),
      icon: <FaCalendar className="text-blue-500" />
    },
    {
      title: t('admissionRules.dates.deadline.title'),
      date: t('admissionRules.dates.deadline.date'),
      description: t('admissionRules.dates.deadline.description'),
      icon: <FaClock className="text-red-500" />
    },
    {
      title: t('admissionRules.dates.exams.title'),
      date: t('admissionRules.dates.exams.date'),
      description: t('admissionRules.dates.exams.description'),
      icon: <FaBook className="text-green-500" />
    },
    {
      title: t('admissionRules.dates.results.title'),
      date: t('admissionRules.dates.results.date'),
      description: t('admissionRules.dates.results.description'),
      icon: <FaCheckCircle className="text-purple-500" />
    }
  ];


  const handleDownloadRules = () => {
    // Логика скачивания правил приема
    console.log("Download admission rules");
  };

  const handlePrintSchedule = () => {
    window.print();
  };

  const handleApplyNow = () => {
    window.open('/apply', '_self');
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
            <FaFileAlt className="text-xl" />
            <span className="font-semibold">{t('admissionRules.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
            {t('admissionRules.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('admissionRules.subtitle')}
          </p>
        </motion.div>
        {/* Табы */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 mb-8 justify-center"
        >
          {['rules', 'schedule', 'dates'].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {t(`admissionRules.tabs.${tab}`)}
            </motion.button>
          ))}
        </motion.div>

        {/* Контент табов */}
        <div className="mb-20">
          {/* Правила приема */}
          {activeTab === 'rules' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  {t('admissionRules.rules.title')}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {t('admissionRules.rules.description')}
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  {requirements.map((requirement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center">
                          {requirement.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {requirement.category}
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {requirement.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-gray-600">
                            <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" size={14} />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* План приема */}
          {activeTab === 'schedule' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  {t('admissionRules.schedule.title')}
                </h2>
                
                <div className="space-y-6">
                  {admissionSchedule.map((stage, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className={`flex items-start gap-6 p-6 rounded-2xl border-2 transition-all duration-300 ${
                        stage.status === 'current'
                          ? 'border-blue-500 bg-blue-50'
                          : stage.status === 'upcoming'
                          ? 'border-gray-200 bg-gray-50'
                          : 'border-green-200 bg-green-50'
                      }`}
                    >
                      <div className="flex-shrink-0">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                          stage.status === 'current' ? 'bg-blue-500' : 'bg-gray-400'
                        }`}>
                          {stage.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-800">
                            {stage.stage}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            stage.status === 'current'
                              ? 'bg-blue-500 text-white'
                              : stage.status === 'upcoming'
                              ? 'bg-gray-500 text-white'
                              : 'bg-green-500 text-white'
                          }`}>
                            {stage.period}
                          </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {stage.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Важные даты */}
          {activeTab === 'dates' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  {t('admissionRules.dates.title')}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {importantDates.map((date, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                        {date.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800 mb-2">
                          {date.title}
                        </h3>
                        <div className="text-2xl font-bold text-blue-600 mb-2">
                          {date.date}
                        </div>
                        <p className="text-gray-600 text-sm">
                          {date.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Кнопки действий */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <motion.button
            onClick={handleDownloadRules}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-colors duration-300"
          >
            <FaDownload />
            <span>{t('admissionRules.actions.download')}</span>
          </motion.button>
          
          <motion.button
            onClick={handlePrintSchedule}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl font-bold hover:bg-gray-200 transition-colors duration-300"
          >
            <FaPrint />
            <span>{t('admissionRules.actions.print')}</span>
          </motion.button>
        </motion.div>

        {/* Важная информация */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-8 text-white"
        >
          <div className="flex items-start gap-4">
            <FaExclamationTriangle className="text-2xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-4">
                {t('admissionRules.important.title')}
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                {t('admissionRules.important.description1')}
              </p>
              <p className="text-lg leading-relaxed">
                {t('admissionRules.important.description2')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdmissionRules;