import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaCalendarAlt,
  FaBook,
  FaFileAlt,
  FaClock,
  FaUniversity,
  FaArrowRight,
  FaArrowLeft,
  FaPrint,
  FaDownload,
  FaBell
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const AcademicCalendar = () => {
  const { t } = useTranslation();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Модули и экзамены на семестр
  const academicSchedule = [
    {
      id: 1,
      title: t('calendar.modules.module1.title'),
      type: 'module',
      startDate: new Date(2024, 0, 15),
      endDate: new Date(2024, 1, 15),
      color: 'from-blue-500 to-cyan-500',
      icon: <FaBook className="text-white" />,
      description: t('calendar.modules.module1.description')
    },
    {
      id: 2,
      title: t('calendar.modules.module2.title'),
      type: 'module',
      startDate: new Date(2024, 1, 16),
      endDate: new Date(2024, 2, 15),
      color: 'from-green-500 to-emerald-500',
      icon: <FaBook className="text-white" />,
      description: t('calendar.modules.module2.description')
    },
    {
      id: 3,
      title: t('calendar.modules.module3.title'),
      type: 'module',
      startDate: new Date(2024, 2, 16),
      endDate: new Date(2024, 3, 15),
      color: 'from-purple-500 to-pink-500',
      icon: <FaBook className="text-white" />,
      description: t('calendar.modules.module3.description')
    },
    {
      id: 4,
      title: t('calendar.exams.midterm.title'),
      type: 'exam',
      startDate: new Date(2024, 3, 16),
      endDate: new Date(2024, 3, 20),
      color: 'from-orange-500 to-red-500',
      icon: <FaFileAlt className="text-white" />,
      description: t('calendar.exams.midterm.description')
    },
    {
      id: 5,
      title: t('calendar.modules.module4.title'),
      type: 'module',
      startDate: new Date(2024, 3, 21),
      endDate: new Date(2024, 4, 20),
      color: 'from-indigo-500 to-blue-500',
      icon: <FaBook className="text-white" />,
      description: t('calendar.modules.module4.description')
    },
    {
      id: 6,
      title: t('calendar.exams.final.title'),
      type: 'exam',
      startDate: new Date(2024, 4, 21),
      endDate: new Date(2024, 4, 31),
      color: 'from-red-500 to-pink-500',
      icon: <FaFileAlt className="text-white" />,
      description: t('calendar.exams.final.description')
    }
  ];

  // Ближайшие события
  const upcomingEvents = [
    {
      id: 1,
      title: t('calendar.upcoming.module1'),
      date: new Date(2024, 0, 15),
      type: 'module',
      daysLeft: 5
    },
    {
      id: 2,
      title: t('calendar.upcoming.exam1'),
      date: new Date(2024, 3, 16),
      type: 'exam',
      daysLeft: 95
    },
    {
      id: 3,
      title: t('calendar.upcoming.holiday'),
      date: new Date(2024, 2, 8),
      type: 'holiday',
      daysLeft: 56
    }
  ];

  const stats = [
    { number: "6", label: t('calendar.stats.modules'), icon: <FaBook className="text-blue-500" /> },
    { number: "2", label: t('calendar.stats.exams'), icon: <FaFileAlt className="text-red-500" /> },
    { number: "150", label: t('calendar.stats.days'), icon: <FaClock className="text-green-500" /> },
    { number: "4.8", label: t('calendar.stats.gpa'), icon: <FaUniversity className="text-purple-500" /> }
  ];

  // Функции для календаря
  const navigateMonth = (direction) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + direction, 1));
  };

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const isDateInRange = (date, startDate, endDate) => {
    return date >= startDate && date <= endDate;
  };

  const getEventForDate = (date) => {
    return academicSchedule.find(event => 
      isDateInRange(date, event.startDate, event.endDate)
    );
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    // Пустые ячейки для первых дней
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Дни месяца
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      days.push(date);
    }

    return days;
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    console.log("Download calendar");
  };

  const calendarDays = generateCalendarDays();

  // Получение перевода для типа события
  const getEventTypeLabel = (type) => {
    switch (type) {
      case 'exam':
        return t('calendar.eventTypes.exam');
      case 'module':
        return t('calendar.eventTypes.module');
      case 'holiday':
        return t('calendar.eventTypes.holiday');
      default:
        return type;
    }
  };

  // Дни недели
  const weekDays = t('calendar.weekDays', { returnObjects: true });

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
            <span className="font-semibold">{t('calendar.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
            {t('calendar.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('calendar.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Календарь */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6">
              {/* Заголовок календаря */}
              <div className="flex items-center justify-between mb-6">
                <motion.button
                  onClick={() => navigateMonth(-1)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <FaArrowLeft className="text-gray-600" />
                </motion.button>

                <h2 className="text-2xl font-bold text-gray-800">
                  {currentMonth.toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' })}
                </h2>

                <motion.button
                  onClick={() => navigateMonth(1)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <FaArrowRight className="text-gray-600" />
                </motion.button>
              </div>

              {/* Дни недели */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {weekDays.map((day) => (
                  <div key={day} className="text-center font-semibold text-gray-500 text-sm py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Ячейки календаря */}
              <div className="grid grid-cols-7 gap-2">
                {calendarDays.map((date, index) => {
                  if (!date) {
                    return <div key={`empty-${index}`} className="h-16" />;
                  }

                  const event = getEventForDate(date);
                  const isToday = date.toDateString() === new Date().toDateString();
                  const isSelected = date.toDateString() === selectedDate.toDateString();

                  return (
                    <motion.button
                      key={date.toISOString()}
                      onClick={() => setSelectedDate(date)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`h-16 rounded-xl border-2 transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden
                        ${isToday ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}
                        ${isSelected ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}
                        ${event ? `bg-gradient-to-br ${event.color} text-white border-transparent` : 'hover:bg-gray-50'}
                      `}
                    >
                      <span className={`text-sm font-semibold ${event ? 'text-white' : 'text-gray-700'}`}>
                        {date.getDate()}
                      </span>
                      {event && (
                        <div className="w-2 h-2 bg-white rounded-full mt-1 opacity-80" />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Легенда */}
              <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded"></div>
                  <span className="text-sm text-gray-600">{t('calendar.legend.modules')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gradient-to-br from-orange-500 to-red-500 rounded"></div>
                  <span className="text-sm text-gray-600">{t('calendar.legend.exams')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-blue-500 bg-blue-50 rounded"></div>
                  <span className="text-sm text-gray-600">{t('calendar.legend.today')}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Боковая панель */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
          >
            {/* Выбранная дата */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {formatDate(selectedDate)}
              </h3>
              {getEventForDate(selectedDate) ? (
                <div className="space-y-3">
                  {academicSchedule
                    .filter(event => isDateInRange(selectedDate, event.startDate, event.endDate))
                    .map((event) => (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={`p-4 rounded-2xl bg-gradient-to-r ${event.color} text-white`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          {event.icon}
                          <span className="font-semibold">{event.title}</span>
                        </div>
                        <p className="text-white/90 text-sm">{event.description}</p>
                      </motion.div>
                    ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-4">
                  {t('calendar.noEvents')}
                </p>
              )}
            </div>

            {/* Ближайшие события */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaBell className="text-blue-500" />
                {t('calendar.upcoming.title')}
              </h3>
              <div className="space-y-3">
                {upcomingEvents.map((event) => (
                  <motion.div
                    key={event.id}
                    whileHover={{ scale: 1.02 }}
                    className="p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold text-gray-800">{event.title}</span>
                      <span className="text-sm text-gray-500">
                        {event.date.toLocaleDateString('ru-RU')}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        event.type === 'exam' ? 'bg-red-100 text-red-600' :
                        event.type === 'module' ? 'bg-blue-100 text-blue-600' :
                        'bg-green-100 text-green-600'
                      }`}>
                        {getEventTypeLabel(event.type)}
                      </span>
                      <span className="text-sm text-gray-500">
                        {t('calendar.daysLeft', { count: event.daysLeft })}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Кнопки действий */}
            <div className="flex gap-3">
              <motion.button
                onClick={handlePrint}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
              >
                <FaPrint />
                <span>{t('calendar.print')}</span>
              </motion.button>
              <motion.button
                onClick={handleDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
              >
                <FaDownload />
                <span>{t('calendar.download')}</span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* График семестра */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            {t('calendar.schedule.title')}
          </h2>
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6">
            <div className="space-y-4">
              {academicSchedule.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors group"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-800">
                      {item.startDate.toLocaleDateString('ru-RU')} - {item.endDate.toLocaleDateString('ru-RU')}
                    </div>
                    <div className={`text-sm ${
                      item.type === 'exam' ? 'text-red-600' : 'text-blue-600'
                    }`}>
                      {item.type === 'exam' ? t('calendar.examPeriod') : t('calendar.studyModule')}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AcademicCalendar;