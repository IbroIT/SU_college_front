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
  FaBell,
  FaGraduationCap,
  FaBriefcase
} from "react-icons/fa";

const AcademicCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 8, 1)); // Сентябрь 2025 как начальный месяц
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedCourse, setSelectedCourse] = useState(1);

  // Расписание по курсам на 2025-26 учебный год
  const courseSchedules = {
    1: [
      {
        id: 1,
        title: "Первый модуль",
        type: "module",
        startDate: new Date(2025, 10, 3), // Ноябрь 2025
        endDate: new Date(2025, 10, 7),
        color: "from-blue-500 to-cyan-500",
        icon: <FaBook className="text-white" />,
        description: "Учебный модуль"
      },
      {
        id: 2,
        title: "Второй модуль",
        type: "module",
        startDate: new Date(2026, 0, 12), // Январь 2026
        endDate: new Date(2026, 0, 16),
        color: "from-green-500 to-emerald-500",
        icon: <FaBook className="text-white" />,
        description: "Учебный модуль"
      },
      {
        id: 3,
        title: "Первый экзамен",
        type: "exam",
        startDate: new Date(2026, 0, 19),
        endDate: new Date(2026, 0, 23),
        color: "from-orange-500 to-red-500",
        icon: <FaFileAlt className="text-white" />,
        description: "Экзаменационная сессия"
      },
      {
        id: 4,
        title: "Каникулы",
        type: "holiday",
        startDate: new Date(2026, 0, 26),
        endDate: new Date(2026, 1, 6), // Февраль 2026
        color: "from-purple-500 to-pink-500",
        icon: <FaBriefcase className="text-white" />,
        description: "Зимние каникулы"
      },
      {
        id: 5,
        title: "Третий модуль",
        type: "module",
        startDate: new Date(2026, 3, 13), // Апрель 2026
        endDate: new Date(2026, 3, 17),
        color: "from-indigo-500 to-blue-500",
        icon: <FaBook className="text-white" />,
        description: "Учебный модуль"
      },
      {
        id: 6,
        title: "Четвертый модуль",
        type: "module",
        startDate: new Date(2026, 5, 22), // Июнь 2026
        endDate: new Date(2026, 5, 26),
        color: "from-teal-500 to-green-500",
        icon: <FaBook className="text-white" />,
        description: "Учебный модуль"
      },
      {
        id: 7,
        title: "Второй экзамен",
        type: "exam",
        startDate: new Date(2026, 5, 29),
        endDate: new Date(2026, 6, 3), // Июль 2026
        color: "from-red-500 to-pink-500",
        icon: <FaFileAlt className="text-white" />,
        description: "Экзаменационная сессия"
      },
      {
        id: 8,
        title: "Летние каникулы",
        type: "holiday",
        startDate: new Date(2026, 6, 6),
        endDate: new Date(2026, 7, 31), // Август 2026
        color: "from-yellow-500 to-orange-500",
        icon: <FaBriefcase className="text-white" />,
        description: "Летние каникулы"
      }
    ],
    2: [
      {
        id: 1,
        title: "Первый модуль",
        type: "module",
        startDate: new Date(2025, 9, 27), // Октябрь 2025
        endDate: new Date(2025, 9, 31),
        color: "from-blue-500 to-cyan-500",
        icon: <FaBook className="text-white" />,
        description: "Учебный модуль"
      },
      {
        id: 2,
        title: "Второй модуль",
        type: "module",
        startDate: new Date(2025, 11, 15), // Декабрь 2025
        endDate: new Date(2025, 11, 19),
        color: "from-green-500 to-emerald-500",
        icon: <FaBook className="text-white" />,
        description: "Учебный модуль"
      },
      {
        id: 3,
        title: "Первый экзамен",
        type: "exam",
        startDate: new Date(2025, 11, 22),
        endDate: new Date(2025, 11, 26),
        color: "from-orange-500 to-red-500",
        icon: <FaFileAlt className="text-white" />,
        description: "Экзаменационная сессия"
      },
      {
        id: 4,
        title: "Зимние каникулы",
        type: "holiday",
        startDate: new Date(2025, 11, 29),
        endDate: new Date(2026, 0, 9), // Январь 2026
        color: "from-purple-500 to-pink-500",
        icon: <FaBriefcase className="text-white" />,
        description: "Зимние каникулы"
      },
      {
        id: 5,
        title: "Третий модуль",
        type: "module",
        startDate: new Date(2026, 2, 16), // Март 2026
        endDate: new Date(2026, 2, 20),
        color: "from-indigo-500 to-blue-500",
        icon: <FaBook className="text-white" />,
        description: "Учебный модуль"
      },
      {
        id: 6,
        title: "Четвертый модуль",
        type: "module",
        startDate: new Date(2026, 3, 27), // Апрель 2026
        endDate: new Date(2026, 3, 1),
        color: "from-teal-500 to-green-500",
        icon: <FaBook className="text-white" />,
        description: "Учебный модуль"
      },
      {
        id: 7,
        title: "Второй экзамен",
        type: "exam",
        startDate: new Date(2026, 4, 4), // Май 2026
        endDate: new Date(2026, 4, 15),
        color: "from-red-500 to-pink-500",
        icon: <FaFileAlt className="text-white" />,
        description: "Экзаменационная сессия"
      },
      {
        id: 8,
        title: "ГИА",
        type: "exam",
        startDate: new Date(2026, 4, 18),
        endDate: new Date(2026, 4, 22),
        color: "from-red-600 to-orange-600",
        icon: <FaGraduationCap className="text-white" />,
        description: "Государственная итоговая аттестация"
      },
      {
        id: 9,
        title: "Практика",
        type: "practice",
        startDate: new Date(2026, 4, 25),
        endDate: new Date(2026, 5, 5), // Июнь 2026
        color: "from-purple-600 to-blue-600",
        icon: <FaBriefcase className="text-white" />,
        description: "Учебная практика"
      },
      {
        id: 10,
        title: "Летние каникулы",
        type: "holiday",
        startDate: new Date(2026, 5, 29),
        endDate: new Date(2026, 7, 31), // Август 2026
        color: "from-yellow-500 to-orange-500",
        icon: <FaBriefcase className="text-white" />,
        description: "Летние каникулы"
      }
    ],
    3: [
      {
        id: 1,
        title: "Первый модуль",
        type: "module",
        startDate: new Date(2025, 9, 27), // Октябрь 2025
        endDate: new Date(2025, 9, 31),
        color: "from-blue-500 to-cyan-500",
        icon: <FaBook className="text-white" />,
        description: "Учебный модуль"
      },
      {
        id: 2,
        title: "Второй модуль",
        type: "module",
        startDate: new Date(2025, 11, 15), // Декабрь 2025
        endDate: new Date(2025, 11, 19),
        color: "from-green-500 to-emerald-500",
        icon: <FaBook className="text-white" />,
        description: "Учебный модуль"
      },
      {
        id: 3,
        title: "Первый экзамен",
        type: "exam",
        startDate: new Date(2025, 11, 22),
        endDate: new Date(2025, 11, 26),
        color: "from-orange-500 to-red-500",
        icon: <FaFileAlt className="text-white" />,
        description: "Экзаменационная сессия"
      },
      {
        id: 4,
        title: "Зимние каникулы",
        type: "holiday",
        startDate: new Date(2025, 11, 29),
        endDate: new Date(2026, 0, 9), // Январь 2026
        color: "from-purple-500 to-pink-500",
        icon: <FaBriefcase className="text-white" />,
        description: "Зимние каникулы"
      },
      {
        id: 5,
        title: "Практика",
        type: "practice",
        startDate: new Date(2026, 0, 12),
        endDate: new Date(2026, 1, 6), // Февраль 2026
        color: "from-purple-600 to-blue-600",
        icon: <FaBriefcase className="text-white" />,
        description: "Учебная практика"
      },
      {
        id: 6,
        title: "Третий модуль",
        type: "module",
        startDate: new Date(2026, 2, 9), // Март 2026
        endDate: new Date(2026, 2, 13),
        color: "from-indigo-500 to-blue-500",
        icon: <FaBook className="text-white" />,
        description: "Учебный модуль"
      },
      {
        id: 7,
        title: "Второй экзамен",
        type: "exam",
        startDate: new Date(2026, 3, 20), // Апрель 2026
        endDate: new Date(2026, 3, 24),
        color: "from-red-500 to-pink-500",
        icon: <FaFileAlt className="text-white" />,
        description: "Экзаменационная сессия"
      },
      {
        id: 8,
        title: "Практика",
        type: "practice",
        startDate: new Date(2026, 3, 27),
        endDate: new Date(2026, 4, 22), // Май 2026
        color: "from-purple-600 to-blue-600",
        icon: <FaBriefcase className="text-white" />,
        description: "Учебная практика"
      },
      {
        id: 9,
        title: "Подготовка к квалификационной работе",
        type: "practice",
        startDate: new Date(2026, 4, 25),
        endDate: new Date(2026, 5, 5), // Июнь 2026
        color: "from-indigo-600 to-purple-600",
        icon: <FaGraduationCap className="text-white" />,
        description: "Подготовка к квалификационной работе"
      },
      {
        id: 10,
        title: "ГИА",
        type: "exam",
        startDate: new Date(2026, 5, 8),
        endDate: new Date(2026, 5, 12),
        color: "from-red-600 to-orange-600",
        icon: <FaGraduationCap className="text-white" />,
        description: "Государственная итоговая аттестация"
      }
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
      label: "Модули", 
      icon: <FaBook className="text-blue-500" /> 
    },
    { 
      number: academicSchedule.filter(e => e.type === 'exam').length, 
      label: "Экзамены", 
      icon: <FaFileAlt className="text-red-500" /> 
    },
    { 
      number: academicSchedule.filter(e => e.type === 'practice').length, 
      label: "Практики", 
      icon: <FaBriefcase className="text-green-500" /> 
    },
    { 
      number: academicSchedule.filter(e => e.type === 'holiday').length, 
      label: "Каникулы", 
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
    switch (type) {
      case 'exam':
        return 'Экзамен';
      case 'module':
        return 'Модуль';
      case 'holiday':
        return 'Каникулы';
      case 'practice':
        return 'Практика';
      default:
        return type;
    }
  };

  // Дни недели
  const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  // Функция для получения стилей дня с анимацией
  const getDayStyles = (date, event, isToday, isSelected) => {
    const baseStyles = `h-16 rounded-xl border-2 transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Герой секция */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full mb-6"
          >
            <FaCalendarAlt className="text-xl" />
            <span className="font-semibold">Академический календарь 2025-26</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
            Учебный график
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Расписание модулей, экзаменов и каникул для всех курсов на 2025-26 учебный год
          </p>

          {/* Выбор курса */}
          <div className="flex justify-center gap-4 mb-8">
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
                className={`px-6 py-3 rounded-2xl font-semibold transition-all ${
                  selectedCourse === course
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {course} курс
              </motion.button>
            ))}
          </div>
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
                      <span className={`text-sm font-semibold ${event ? 'text-white' : 'text-gray-700'}`}>
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
              <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded"></div>
                  <span className="text-sm text-gray-600">Модули</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gradient-to-br from-orange-500 to-red-500 rounded"></div>
                  <span className="text-sm text-gray-600">Экзамены</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded"></div>
                  <span className="text-sm text-gray-600">Практика</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gradient-to-br from-yellow-500 to-orange-500 rounded"></div>
                  <span className="text-sm text-gray-600">Каникулы</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-blue-500 bg-blue-50 rounded"></div>
                  <span className="text-sm text-gray-600">Сегодня</span>
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
            {/* Статистика */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {selectedCourse} курс - Статистика
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-3 bg-gray-50 rounded-xl"
                  >
                    <div className="flex justify-center mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

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
                        className={`p-4 rounded-2xl bg-gradient-to-r ${event.color} text-white shadow-lg`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          {event.icon}
                          <span className="font-semibold">{event.title}</span>
                        </div>
                        <p className="text-white/90 text-sm">{event.description}</p>
                        <div className="text-xs text-white/70 mt-2">
                          {event.startDate.toLocaleDateString('ru-RU')} - {event.endDate.toLocaleDateString('ru-RU')}
                        </div>
                      </motion.div>
                    ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-4">
                  Нет событий на эту дату
                </p>
              )}
            </div>

            {/* Ближайшие события */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaBell className="text-blue-500" />
                Ближайшие события
              </h3>
              <div className="space-y-3">
                {upcomingEvents.map((event) => (
                  <motion.div
                    key={event.id}
                    whileHover={{ scale: 1.02 }}
                    className="p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors border-l-4 border-blue-500"
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
                        event.type === 'practice' ? 'bg-purple-100 text-purple-600' :
                        'bg-yellow-100 text-yellow-600'
                      }`}>
                        {getEventTypeLabel(event.type)}
                      </span>
                      <span className="text-sm text-gray-500">
                        через {event.daysLeft} {event.daysLeft === 1 ? 'день' : event.daysLeft < 5 ? 'дня' : 'дней'}
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
                <span>Печать</span>
              </motion.button>
              <motion.button
                onClick={handleDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
              >
                <FaDownload />
                <span>Скачать</span>
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
            График учебного года - {selectedCourse} курс
          </h2>
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6">
            <div className="space-y-4">
              {academicSchedule.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors group border-l-4 border-blue-500"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
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
                    <div className={`text-sm font-medium ${
                      item.type === 'exam' ? 'text-red-600' : 
                      item.type === 'module' ? 'text-blue-600' :
                      item.type === 'practice' ? 'text-purple-600' : 'text-yellow-600'
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