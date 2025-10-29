import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaQuestionCircle,
  FaGraduationCap,
  FaUserGraduate,
  FaMoneyBillWave,
  FaBriefcase,
  FaGlobeAmericas,
  FaUsers,
  FaStar,
  FaChevronDown,
  FaChevronUp,
  FaSearch,
  FaPhone,
  FaEnvelope
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const faqCategories = [
    {
      id: "admission",
      icon: <FaUserGraduate className="text-xl" />,
      title: t('faq.categories.admission'),
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "education",
      icon: <FaGraduationCap className="text-xl" />,
      title: t('faq.categories.education'),
      color: "from-green-500 to-emerald-500"
    },
    {
      id: "finance",
      icon: <FaMoneyBillWave className="text-xl" />,
      title: t('faq.categories.finance'),
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: "career",
      icon: <FaBriefcase className="text-xl" />,
      title: t('faq.categories.career'),
      color: "from-orange-500 to-amber-500"
    },
    {
      id: "international",
      icon: <FaGlobeAmericas className="text-xl" />,
      title: t('faq.categories.international'),
      color: "from-red-500 to-pink-500"
    },
    {
      id: "campus",
      icon: <FaUsers className="text-xl" />,
      title: t('faq.categories.campus'),
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const faqStats = [
    { number: "12+", label: t('faq.stats.questions') },
    { number: "100%", label: t('faq.stats.answered') },
    { number: "24/7", label: t('faq.stats.support') },
    { number: "500+", label: t('faq.stats.students') }
  ];

  const contactInfo = [
    {
      icon: <FaPhone className="text-lg" />,
      title: t('faq.contact.phone'),
      details: ["+996 778 99 88 89", "+996 706 99 88 89"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaEnvelope className="text-lg" />,
      title: t('faq.contact.email'),
      details: ["info@salymbekov.com"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  // Получаем вопросы из переводов
  const questions = t('faq.questions', { returnObjects: true });

  const filteredQuestions = questions.filter(q => 
    q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    q.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

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

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
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
            <FaQuestionCircle className="text-xl" />
            <span className="font-semibold">{t('faq.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            {t('faq.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('faq.subtitle')}
          </p>
        </motion.div>
        
        {/* Поиск и категории */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          {/* Поиск */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="text"
                placeholder={t('faq.search.placeholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg shadow-lg"
              />
            </div>
          </div>

          {/* Категории */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {faqCategories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`bg-gradient-to-r ${category.color} text-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-2`}
              >
                {category.icon}
                <span className="text-sm font-semibold text-center">{category.title}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Вопросы и ответы */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="p-8 border-b border-gray-200">
              <h2 className="text-3xl font-bold text-gray-800">
                {t('faq.questionsTitle')}
              </h2>
              <p className="text-gray-600 mt-2">
                {t('faq.questionsCount', { count: filteredQuestions.length })}
              </p>
            </div>

            <div className="divide-y divide-gray-100">
              {filteredQuestions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full px-8 py-6 text-left hover:bg-gray-50 transition-colors duration-300 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center mt-1">
                        <FaQuestionCircle className="text-blue-600 text-sm" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2 text-left">
                          {item.question}
                        </h3>
                        <motion.div
                          initial={false}
                          animate={{ height: activeQuestion === index ? "auto" : 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-600 leading-relaxed text-left">
                            {item.answer}
                          </p>
                        </motion.div>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: activeQuestion === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center"
                    >
                      <FaChevronDown className="text-gray-600 text-xs" />
                    </motion.div>
                  </button>

                  {/* Раскрытый ответ */}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Контактная информация */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Не нашли ответ? */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl p-8 text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <FaStar className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold">{t('faq.contact.title')}</h3>
            </div>
            
            <p className="text-white/90 mb-6 text-lg">
              {t('faq.contact.description')}
            </p>

            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center`}>
                    {contact.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{contact.title}</p>
                    {contact.details.map((detail, idx) => (
                      <p key={idx} className="text-white/80">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Быстрые ссылки */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                <FaUsers className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{t('faq.links.title')}</h3>
            </div>
            
            <div className="space-y-3">
              {[
                { label: t('faq.links.admission'), color: "from-blue-500 to-cyan-500" },
                { label: t('faq.links.programs'), color: "from-green-500 to-emerald-500" },
                { label: t('faq.links.scholarships'), color: "from-purple-500 to-indigo-500" },
                { label: t('faq.links.contact'), color: "from-orange-500 to-amber-500" }
              ].map((link, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-gradient-to-r ${link.color} text-white py-4 px-6 rounded-2xl font-semibold text-left flex items-center justify-between group hover:shadow-lg transition-all duration-300`}
                >
                  <span>{link.label}</span>
                  <FaChevronDown className="text-sm transform -rotate-90 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;