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
  FaBell,
  FaGraduationCap,
  FaBriefcase
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const AcademicCalendar = () => {
  const { t } = useTranslation();
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 8, 1)); // Сентябрь 2025 как начальный месяц
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedCourse, setSelectedCourse] = useState(1);

  // Функция для создания события с переводами
  const createEvent = (id, titleKey, type, startDate, endDate, color, icon, descriptionKey) => ({
    id,
    titleKey,
    type,
    startDate,
    endDate,
    color,
    icon,
    descriptionKey
  });

  // Расписание по курсам на 2025-26 учебный год
  const courseSchedules = {
    1: [
      createEvent(1, "academicCalendar.events.module1", "module", new Date(2025, 10, 3), new Date(2025, 10, 7), "from-blue-500 to-cyan-500", <FaBook className="text-white" />, "academicCalendar.descriptions.module"),
      createEvent(2, "academicCalendar.events.module2", "module", new Date(2026, 0, 12), new Date(2026, 0, 16), "from-blue-500 to-cyan-500", <FaBook className="text-white" />, "academicCalendar.descriptions.module"),
      createEvent(3, "academicCalendar.events.exam1", "exam", new Date(2026, 0, 19), new Date(2026, 0, 23), "from-orange-500 to-red-500", <FaFileAlt className="text-white" />, "academicCalendar.descriptions.exam"),
      createEvent(4, "academicCalendar.events.winterHolidays", "holiday", new Date(2026, 0, 26), new Date(2026, 1, 6), "from-green-500 to-emerald-500", <FaBriefcase className="text-white" />, "academicCalendar.descriptions.holiday"),
      createEvent(5, "academicCalendar.events.module3", "module", new Date(2026, 3, 13), new Date(2026, 3, 17), "from-blue-500 to-cyan-500", <FaBook className="text-white" />, "academicCalendar.descriptions.module"),
      createEvent(6, "academicCalendar.events.module4", "module", new Date(2026, 5, 22), new Date(2026, 5, 26), "from-blue-500 to-cyan-500", <FaBook className="text-white" />, "academicCalendar.descriptions.module"),
      createEvent(7, "academicCalendar.events.exam2", "exam", new Date(2026, 5, 29), new Date(2026, 6, 3), "from-orange-500 to-red-500", <FaFileAlt className="text-white" />, "academicCalendar.descriptions.exam"),
      createEvent(8, "academicCalendar.events.summerHolidays", "holiday", new Date(2026, 6, 6), new Date(2026, 7, 31), "from-green-500 to-emerald-500", <FaBriefcase className="text-white" />, "academicCalendar.descriptions.holiday")
    ],
    2: [
      createEvent(1, "academicCalendar.events.module1", "module", new Date(2025, 9, 27), new Date(2025, 9, 31), "from-blue-500 to-cyan-500", <FaBook className="text-white" />, "academicCalendar.descriptions.module"),
      createEvent(2, "academicCalendar.events.module2", "module", new Date(2025, 11, 15), new Date(2025, 11, 19), "from-blue-500 to-cyan-500", <FaBook className="text-white" />, "academicCalendar.descriptions.module"),
      createEvent(3, "academicCalendar.events.exam1", "exam", new Date(2025, 11, 22), new Date(2025, 11, 26), "from-orange-500 to-red-500", <FaFileAlt className="text-white" />, "academicCalendar.descriptions.exam"),
      createEvent(4, "academicCalendar.events.winterHolidays", "holiday", new Date(2025, 11, 29), new Date(2026, 0, 9), "from-green-500 to-emerald-500", <FaBriefcase className="text-white" />, "academicCalendar.descriptions.holiday"),
      createEvent(5, "academicCalendar.events.module3", "module", new Date(2026, 2, 16), new Date(2026, 2, 20), "from-blue-500 to-cyan-500", <FaBook className="text-white" />, "academicCalendar.descriptions.module"),
      createEvent(6, "academicCalendar.events.module4", "module", new Date(2026, 3, 27), new Date(2026, 4, 1), "from-blue-500 to-cyan-500", <FaBook className="text-white" />, "academicCalendar.descriptions.module"),
      createEvent(7, "academicCalendar.events.exam2", "exam", new Date(2026, 4, 4), new Date(2026, 4, 15), "from-orange-500 to-red-500", <FaFileAlt className="text-white" />, "academicCalendar.descriptions.exam"),
      createEvent(8, "academicCalendar.events.gia", "exam", new Date(2026, 4, 18), new Date(2026, 4, 22), "from-orange-500 to-red-500", <FaGraduationCap className="text-white" />, "academicCalendar.descriptions.gia"),
      createEvent(9, "academicCalendar.events.practice1", "practice", new Date(2026, 4, 25), new Date(2026, 5, 5), "from-purple-600 to-blue-600", <FaBriefcase className="text-white" />, "academicCalendar.descriptions.practice"),
      createEvent(10, "academicCalendar.events.summerHolidays", "holiday", new Date(2026, 5, 29), new Date(2026, 7, 31), "from-green-500 to-emerald-500", <FaBriefcase className="text-white" />, "academicCalendar.descriptions.holiday")
    ],
    3: [
      createEvent(1, "academicCalendar.events.module1", "module", new Date(2025, 9, 27), new Date(2025, 9, 31), "from-blue-500 to-cyan-500", <FaBook className="text-white" />, "academicCalendar.descriptions.module"),
      createEvent(2, "academicCalendar.events.module2", "module", new Date(2025, 11, 15), new Date(2025, 11, 19), "from-blue-500 to-cyan-500", <FaBook className="text-white" />, "academicCalendar.descriptions.module"),
      createEvent(3, "academicCalendar.events.exam1", "exam", new Date(2025, 11, 22), new Date(2025, 11, 26), "from-orange-500 to-red-500", <FaFileAlt className="text-white" />, "academicCalendar.descriptions.exam"),
      createEvent(4, "academicCalendar.events.winterHolidays", "holiday", new Date(2025, 11, 29), new Date(2026, 0, 9), "from-green-500 to-emerald-500", <FaBriefcase className="text-white" />, "academicCalendar.descriptions.holiday"),
      createEvent(5, "academicCalendar.events.practice1", "practice", new Date(2026, 0, 12), new Date(2026, 1, 6), "from-purple-600 to-blue-600", <FaBriefcase className="text-white" />, "academicCalendar.descriptions.practice"),
      createEvent(6, "academicCalendar.events.module3", "module", new Date(2026, 2, 9), new Date(2026, 2, 13), "from-blue-500 to-cyan-500", <FaBook className="text-white" />, "academicCalendar.descriptions.module"),
      createEvent(7, "academicCalendar.events.exam2", "exam", new Date(2026, 3, 20), new Date(2026, 3, 24), "from-orange-500 to-red-500", <FaFileAlt className="text-white" />, "academicCalendar.descriptions.exam"),
      createEvent(8, "academicCalendar.events.practice1", "practice", new Date(2026, 3, 27), new Date(2026, 4, 22), "from-purple-600 to-blue-600", <FaBriefcase className="text-white" />, "academicCalendar.descriptions.practice"),
      createEvent(9, "academicCalendar.events.preparation", "practice", new Date(2026, 4, 25), new Date(2026, 5, 5), "from-indigo-600 to-purple-600", <FaGraduationCap className="text-white" />, "academicCalendar.descriptions.preparation"),
      createEvent(10, "academicCalendar.events.gia", "exam", new Date(2026, 5, 8), new Date(2026, 5, 12), "from-orange-500 to-red-500", <FaGraduationCap className="text-white" />, "academicCalendar.descriptions.gia")
    ]
  };

  const academicSchedule = courseSchedules[selectedCourse];

  // Ближайшие события для выбранного курса
  const getUpcomingEvents = () => {
    const today = new Date();
    return academicSchedule
      .filter(event => event.endDate >= today)
      .slice(0, 3)
      .map(event => ({
        id: event.id,
        title: event.title,
        date: event.startDate,
        type: event.type,
        daysLeft: Math.ceil((event.startDate - today) / (1000 * 60 * 60 * 24))
      }));
  };

  const upcomingEvents = getUpcomingEvents();

  const stats = [
    { 
      number: academicSchedule.filter(e => e.type === 'module').length, 
      label: t('academicCalendar.stats.modules'), 
      icon: <FaBook className="text-blue-500" /> 
    },
    { 
      number: academicSchedule.filter(e => e.type === 'exam').length, 
      label: t('academicCalendar.stats.exams'), 
      icon: <FaFileAlt className="text-red-500" /> 
    },
    { 
      number: academicSchedule.filter(e => e.type === 'practice').length, 
      label: t('academicCalendar.stats.practices'), 
      icon: <FaBriefcase className="text-green-500" /> 
    },
    { 
      number: academicSchedule.filter(e => e.type === 'holiday').length, 
      label: t('academicCalendar.stats.holidays'), 
      icon: <FaUniversity className="text-purple-500" /> 
    }
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
    return t(`academicCalendar.eventTypes.${type}`, { defaultValue: type });
  };

  // Получение переводного заголовка события
  const getEventTitle = (event) => {
    return event.titleKey ? t(event.titleKey) : event.title;
  };

  // Получение переводного описания события  
  const getEventDescription = (event) => {
    return event.descriptionKey ? t(event.descriptionKey) : event.description;
  };

  // Дни недели
  const weekDays = [
    t('academicCalendar.weekDays.monday'),
    t('academicCalendar.weekDays.tuesday'), 
    t('academicCalendar.weekDays.wednesday'),
    t('academicCalendar.weekDays.thursday'),
    t('academicCalendar.weekDays.friday'),
    t('academicCalendar.weekDays.saturday'),
    t('academicCalendar.weekDays.sunday')
  ];

  // Функция для получения стилей дня с анимацией
  const getDayStyles = (date, event, isToday, isSelected) => {
    const baseStyles = `h-12 md:h-16 rounded-xl border-2 transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden
      ${isToday ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}
      ${isSelected ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`;

    if (event) {
      return `${baseStyles} bg-gradient-to-br ${event.color} text-white border-transparent shadow-lg`;
    } else {
      return `${baseStyles} hover:bg-gray-50`;
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-20">
        {/* Герой секция */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >

          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
            {t('academicCalendar.title')}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {t('academicCalendar.subtitle')}
          </p>

          {/* Выбор курса */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-8">
            {[1, 2, 3].map((course) => (
              <motion.button
                key={course}
                onClick={() => {
                  setSelectedCourse(course);
                  // Устанавливаем начальный месяц в зависимости от курса
                  const firstEvent = courseSchedules[course][0];
                  setCurrentMonth(new Date(firstEvent.startDate.getFullYear(), firstEvent.startDate.getMonth(), 1));
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 md:px-6 py-3 md:py-3 rounded-2xl font-semibold transition-all text-sm md:text-base ${
                  selectedCourse === course
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
{t('academicCalendar.course', { number: course })}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 order-2 lg:order-1"
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-4 md:p-6">
              {/* Заголовок календаря */}
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <motion.button
                  onClick={() => navigateMonth(-1)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 md:w-10 md:h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <FaArrowLeft className="text-gray-600 text-sm md:text-base" />
                </motion.button>

                <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                  {currentMonth.toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' })}
                </h2>

                <motion.button
                  onClick={() => navigateMonth(1)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 md:w-10 md:h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <FaArrowRight className="text-gray-600 text-sm md:text-base" />
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
                      className={getDayStyles(date, event, isToday, isSelected)}
                      animate={{
                        scale: event ? [1, 1.02, 1] : 1,
                        boxShadow: event ? 
                          ['0 4px 6px -1px rgba(0, 0, 0, 0.1)', '0 10px 15px -3px rgba(0, 0, 0, 0.2)', '0 4px 6px -1px rgba(0, 0, 0, 0.1)'] : 
                          'none'
                      }}
                      transition={{
                        duration: event ? 2 : 0.3,
                        repeat: event ? Infinity : 0,
                        repeatType: "reverse"
                      }}
                    >
                      <span className={`text-xs md:text-sm font-semibold ${event ? 'text-white' : 'text-gray-700'}`}>
                        {date.getDate()}
                      </span>
                      {event && (
                        <motion.div 
                          className="w-2 h-2 bg-white rounded-full mt-1 opacity-80"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Легенда */}
              <div className="flex flex-wrap gap-2 md:gap-4 mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-200">
                <div className="flex items-center gap-1 md:gap-2">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded"></div>
                  <span className="text-xs md:text-sm text-gray-600">{t('academicCalendar.legend.modules')}</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-gradient-to-br from-orange-500 to-red-500 rounded"></div>
                  <span className="text-xs md:text-sm text-gray-600">{t('academicCalendar.legend.exams')}</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded"></div>
                  <span className="text-xs md:text-sm text-gray-600">{t('academicCalendar.legend.practices')}</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded"></div>
                  <span className="text-xs md:text-sm text-gray-600">{t('academicCalendar.legend.holidays')}</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <div className="w-3 h-3 md:w-4 md:h-4 border-2 border-blue-500 bg-blue-50 rounded"></div>
                  <span className="text-xs md:text-sm text-gray-600">{t('academicCalendar.legend.today')}</span>
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
            className="space-y-4 md:space-y-6 order-1 lg:order-2"
          >
            {/* Статистика */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">
                {t('academicCalendar.courseStats', { course: selectedCourse })}
              </h3>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-2 md:p-3 bg-gray-50 rounded-xl"
                  >
                    <div className="flex justify-center mb-1 md:mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-gray-800">{stat.number}</div>
                    <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Выбранная дата */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">
                {formatDate(selectedDate)}
              </h3>
              {getEventForDate(selectedDate) ? (
                <div className="space-y-2 md:space-y-3">
                  {academicSchedule
                    .filter(event => isDateInRange(selectedDate, event.startDate, event.endDate))
                    .map((event) => (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={`p-3 md:p-4 rounded-2xl bg-gradient-to-r ${event.color} text-white shadow-lg`}
                      >
                        <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                          {event.icon}
                          <span className="font-semibold text-sm md:text-base">{getEventTitle(event)}</span>
                        </div>
                        <p className="text-white/90 text-xs md:text-sm">{getEventDescription(event)}</p>
                        <div className="text-xs text-white/70 mt-1 md:mt-2">
                          {event.startDate.toLocaleDateString('ru-RU')} - {event.endDate.toLocaleDateString('ru-RU')}
                        </div>
                      </motion.div>
                    ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-3 md:py-4 text-sm md:text-base">
                  {t('academicCalendar.noEvents')}
                </p>
              )}
            </div>

            {/* Ближайшие события */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
                <FaBell className="text-blue-500 text-sm md:text-base" />
                {t('academicCalendar.upcomingEvents')}
              </h3>
              <div className="space-y-2 md:space-y-3">
                {upcomingEvents.map((event) => (
                  <motion.div
                    key={event.id}
                    whileHover={{ scale: 1.02 }}
                    className="p-2 md:p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors border-l-4 border-blue-500"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-1">
                      <span className="font-semibold text-gray-800 text-sm md:text-base">{getEventTitle(academicSchedule.find(e => e.id === event.id))}</span>
                      <span className="text-xs md:text-sm text-gray-500 sm:text-right">
                        {event.date.toLocaleDateString('ru-RU')}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                      <span className={`text-xs px-2 py-1 rounded-full w-fit ${
                        event.type === 'exam' ? 'bg-red-100 text-red-600' :
                        event.type === 'module' ? 'bg-blue-100 text-blue-600' :
                        event.type === 'practice' ? 'bg-purple-100 text-purple-600' :
                        'bg-green-100 text-green-600'
                      }`}>
                        {getEventTypeLabel(event.type)}
                      </span>
                      <span className="text-xs md:text-sm text-gray-500">
                        {t('academicCalendar.daysLeft', { count: event.daysLeft })}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* График семестра */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12 md:mb-20"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12">
            {t('academicCalendar.yearSchedule', { course: selectedCourse })}
          </h2>
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-4 md:p-6">
            <div className="space-y-3 md:space-y-4">
              {academicSchedule.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col sm:flex-row sm:items-center gap-3 md:gap-4 p-3 md:p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors group border-l-4 border-blue-500"
                >
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-800 text-sm md:text-base">{getEventTitle(item)}</h4>
                    <p className="text-gray-600 text-xs md:text-sm">{getEventDescription(item)}</p>
                  </div>
                  <div className="text-right sm:text-left">
                    <div className="font-semibold text-gray-800 text-xs md:text-sm">
                      {item.startDate.toLocaleDateString('ru-RU')} - {item.endDate.toLocaleDateString('ru-RU')}
                    </div>
                    <div className={`text-xs md:text-sm font-medium ${
                      item.type === 'exam' ? 'text-red-600' : 
                      item.type === 'module' ? 'text-blue-600' :
                      item.type === 'practice' ? 'text-purple-600' : 'text-green-600'
                    }`}>
                      {getEventTypeLabel(item.type)}
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