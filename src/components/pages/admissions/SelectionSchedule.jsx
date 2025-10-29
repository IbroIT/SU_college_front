import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaCalendarAlt,
  FaClock,
  FaUserCheck,
  FaListAlt,
  FaExclamationTriangle,
  FaDownload,
  FaPrint,
  FaArrowRight,
  FaUniversity,
  FaCheckCircle,
  FaRegCalendarCheck
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const SelectionSchedule = () => {
  const { t } = useTranslation();
  const [activeTour, setActiveTour] = useState(0);

  const selectionTours = [
    {
      tour: t('selectionSchedule.tours.tour1.tour'),
      actions: [
        {
          action: t('selectionSchedule.tours.tour1.actions.action1.action'),
          date: t('selectionSchedule.tours.tour1.actions.action1.date'),
          status: 'completed',
          icon: <FaUserCheck className="text-green-500" />
        },
        {
          action: t('selectionSchedule.tours.tour1.actions.action2.action'),
          date: t('selectionSchedule.tours.tour1.actions.action2.date'),
          status: 'current',
          icon: <FaClock className="text-blue-500" />
        }
      ],
      color: "from-blue-500 to-cyan-500",
      status: 'current'
    },
    {
      tour: t('selectionSchedule.tours.tour2.tour'),
      actions: [
        {
          action: t('selectionSchedule.tours.tour2.actions.action1.action'),
          date: t('selectionSchedule.tours.tour2.actions.action1.date'),
          status: 'upcoming',
          icon: <FaRegCalendarCheck className="text-orange-500" />
        },
        {
          action: t('selectionSchedule.tours.tour2.actions.action2.action'),
          date: t('selectionSchedule.tours.tour2.actions.action2.date'),
          status: 'upcoming',
          icon: <FaClock className="text-orange-500" />
        }
      ],
      color: "from-green-500 to-emerald-500",
      status: 'upcoming'
    },
    {
      tour: t('selectionSchedule.tours.tour3.tour'),
      actions: [
        {
          action: t('selectionSchedule.tours.tour3.actions.action1.action'),
          date: t('selectionSchedule.tours.tour3.actions.action1.date'),
          status: 'upcoming',
          icon: <FaRegCalendarCheck className="text-purple-500" />
        },
        {
          action: t('selectionSchedule.tours.tour3.actions.action2.action'),
          date: t('selectionSchedule.tours.tour3.actions.action2.date'),
          status: 'upcoming',
          icon: <FaClock className="text-purple-500" />
        }
      ],
      color: "from-purple-500 to-pink-500",
      status: 'upcoming'
    },
    {
      tour: t('selectionSchedule.tours.tour4.tour'),
      actions: [
        {
          action: t('selectionSchedule.tours.tour4.actions.action1.action'),
          date: t('selectionSchedule.tours.tour4.actions.action1.date'),
          status: 'upcoming',
          icon: <FaRegCalendarCheck className="text-red-500" />
        },
        {
          action: t('selectionSchedule.tours.tour4.actions.action2.action'),
          date: t('selectionSchedule.tours.tour4.actions.action2.date'),
          status: 'upcoming',
          icon: <FaClock className="text-red-500" />
        }
      ],
      color: "from-orange-500 to-red-500",
      status: 'upcoming'
    }
  ];

  const importantNotes = [
    t('selectionSchedule.notes.note1'),
    t('selectionSchedule.notes.note2'),
    t('selectionSchedule.notes.note3'),
    t('selectionSchedule.notes.note4')
  ];

  const stats = [
    { number: "4", label: t('selectionSchedule.stats.tours'), icon: <FaListAlt className="text-blue-500" /> },
    { number: "17.07", label: t('selectionSchedule.stats.start'), icon: <FaCalendarAlt className="text-green-500" /> },
    { number: "28.08", label: t('selectionSchedule.stats.end'), icon: <FaClock className="text-purple-500" /> },
    { number: "100", label: t('selectionSchedule.stats.places'), icon: <FaUserCheck className="text-orange-500" /> }
  ];

  const handleDownloadSchedule = () => {
    // Логика скачивания графика
    console.log("Download selection schedule");
  };

  const handlePrintSchedule = () => {
    window.print();
  };

  const handleRegisterNow = () => {
    window.open('/registration', '_self');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'current':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'upcoming':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed':
        return t('selectionSchedule.status.completed');
      case 'current':
        return t('selectionSchedule.status.current');
      case 'upcoming':
        return t('selectionSchedule.status.upcoming');
      default:
        return t('selectionSchedule.status.unknown');
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-50 to-cyan-50"
            style={{
              width: Math.random() * 80 + 40,
              height: Math.random() * 80 + 40,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.03, 1]
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 3
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
            <FaCalendarAlt className="text-xl" />
            <span className="font-semibold">{t('selectionSchedule.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
            {t('selectionSchedule.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            {t('selectionSchedule.subtitle')}
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            {t('selectionSchedule.description')}
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
              <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Навигация по турам */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 sticky top-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {t('selectionSchedule.toursTitle')}
              </h2>
              <div className="space-y-3">
                {selectionTours.map((tour, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveTour(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-300 ${
                      activeTour === index
                        ? `border-blue-500 bg-gradient-to-r ${tour.color} text-white shadow-lg`
                        : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{tour.tour}</span>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        activeTour === index
                          ? 'bg-white/20 text-white'
                          : getStatusColor(tour.status)
                      }`}>
                        {getStatusText(tour.status)}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Детали тура */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    {selectionTours[activeTour].tour}
                  </h2>
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${getStatusColor(selectionTours[activeTour].status)}`}>
                    <span className="text-sm font-semibold">
                      {getStatusText(selectionTours[activeTour].status)}
                    </span>
                  </div>
                </div>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${selectionTours[activeTour].color} flex items-center justify-center text-white text-2xl`}>
                  {activeTour + 1}
                </div>
              </div>

              {/* Таблица действий */}
              <div className="overflow-hidden rounded-2xl border border-gray-200">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-4 text-left font-semibold text-gray-700 border-b border-gray-200">
                        {t('selectionSchedule.table.action')}
                      </th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-700 border-b border-gray-200">
                        {t('selectionSchedule.table.date')}
                      </th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-700 border-b border-gray-200">
                        {t('selectionSchedule.table.status')}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectionTours[activeTour].actions.map((action, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-200"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                              {action.icon}
                            </div>
                            <span className="font-medium text-gray-800">
                              {action.action}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-gray-700 font-semibold">
                            {action.date}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(action.status)}`}>
                            {getStatusText(action.status)}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Дополнительная информация */}
              <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <FaExclamationTriangle className="text-blue-500" />
                  {t('selectionSchedule.important.title')}
                </h4>
                <ul className="space-y-2">
                  {importantNotes.map((note, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" size={14} />
                      <span className="text-sm">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Кнопки действий */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <motion.button
            onClick={handleDownloadSchedule}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-colors duration-300"
          >
            <FaDownload />
            <span>{t('selectionSchedule.actions.download')}</span>
          </motion.button>
          
          <motion.button
            onClick={handlePrintSchedule}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl font-bold hover:bg-gray-200 transition-colors duration-300"
          >
            <FaPrint />
            <span>{t('selectionSchedule.actions.print')}</span>
          </motion.button>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center text-white shadow-2xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6"
          >
            <FaUniversity />
            <span className="font-semibold">{t('selectionSchedule.cta.badge')}</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('selectionSchedule.cta.title')}
          </h2>
          
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            {t('selectionSchedule.cta.description')}
          </p>
          
          <motion.button
            onClick={handleRegisterNow}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            <span>{t('selectionSchedule.cta.button')}</span>
            <FaArrowRight />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default SelectionSchedule;