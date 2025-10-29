import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaCalendarAlt,
  FaBook,
  FaGraduationCap,
  FaClock,
  FaExclamationTriangle,
  FaCheckCircle,
  FaArrowRight,
  FaArrowLeft,
  FaPrint,
  FaDownload,
  FaSearch,
  FaFilter,
  FaUniversity,
  FaUserGraduate,
  FaChartLine,
  FaCalendarCheck,
  FaTasks
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ScheduleMod = () => {
  const { t } = useTranslation();
  const [activeTerm, setActiveTerm] = useState("fall");
  const [selectedProgram, setSelectedProgram] = useState("all");
  const [currentView, setCurrentView] = useState("modules");

  const academicTerms = [
    { id: "fall", name: t('scheduleMod.terms.fall'), period: "Сентябрь - Декабрь 2025" },
    { id: "spring", name: t('scheduleMod.terms.spring'), period: "Январь - Май 2026" },
    { id: "summer", name: t('scheduleMod.terms.summer'), period: "Июнь - Август 2026" }
  ];

  const studyPrograms = [
    { id: "all", name: t('scheduleMod.programs.all'), faculty: "Все программы" },
    { id: "software", name: "Разработка ПО", faculty: "Факультет IT" },
    { id: "mobile", name: "Мобильная разработка", faculty: "Факультет IT" },
    { id: "multimedia", name: "Мультимедиа", faculty: "Факультет дизайна" },
    { id: "ecommerce", name: "Электронная коммерция", faculty: "Бизнес-факультет" }
  ];

  const modStats = [
    { number: "6", label: t('scheduleMod.stats.modules') },
    { number: "24", label: t('scheduleMod.stats.credits') },
    { number: "36", label: t('scheduleMod.stats.weeks') },
    { number: "18", label: t('scheduleMod.stats.exams') }
  ];

  const modFeatures = [
    {
      icon: <FaCalendarCheck className="text-blue-500" size={28} />,
      title: t('scheduleMod.features.structured.title'),
      description: t('scheduleMod.features.structured.description')
    },
    {
      icon: <FaTasks className="text-green-500" size={28} />,
      title: t('scheduleMod.features.progressive.title'),
      description: t('scheduleMod.features.progressive.description')
    },
    {
      icon: <FaExclamationTriangle className="text-orange-500" size={28} />,
      title: t('scheduleMod.features.deadlines.title'),
      description: t('scheduleMod.features.deadlines.description')
    },
    {
      icon: <FaCheckCircle className="text-purple-500" size={28} />,
      title: t('scheduleMod.features.assessment.title'),
      description: t('scheduleMod.features.assessment.description')
    }
  ];

  const academicSchedule = {
    fall: {
      modules: [
        {
          id: 1,
          name: t('scheduleMod.modules.fall.mod1.name'),
          code: "MOD-101",
          period: "01.09.2025 - 15.10.2025",
          duration: "6 недель",
          credits: 4,
          status: "current",
          type: "basic",
          subjects: [
            { name: t('scheduleMod.modules.fall.mod1.subjects.math'), hours: 54, type: "лекция" },
            { name: t('scheduleMod.modules.fall.mod1.subjects.programming'), hours: 72, type: "практика" },
            { name: t('scheduleMod.modules.fall.mod1.subjects.english'), hours: 36, type: "семинар" }
          ],
          assessments: [
            { type: "промежуточный", date: "10.10.2025", weight: 30 },
            { type: "финальный экзамен", date: "16.10.2025", weight: 70 }
          ]
        },
        {
          id: 2,
          name: t('scheduleMod.modules.fall.mod2.name'),
          code: "MOD-102",
          period: "20.10.2025 - 30.11.2025",
          duration: "6 недель",
          credits: 4,
          status: "upcoming",
          type: "advanced",
          subjects: [
            { name: t('scheduleMod.modules.fall.mod2.subjects.algorithms'), hours: 60, type: "лекция" },
            { name: t('scheduleMod.modules.fall.mod2.subjects.databases'), hours: 48, type: "лабораторная" },
            { name: t('scheduleMod.modules.fall.mod2.subjects.web'), hours: 54, type: "практика" }
          ],
          assessments: [
            { type: "проект", date: "25.11.2025", weight: 40 },
            { type: "финальный экзамен", date: "01.12.2025", weight: 60 }
          ]
        }
      ],
      examSessions: [
        {
          id: 1,
          name: t('scheduleMod.exams.fall.winter'),
          period: "15.12.2025 - 30.12.2025",
          type: "экзаменационная сессия",
          status: "scheduled",
          schedule: [
            { date: "15.12.2025", subject: t('scheduleMod.modules.fall.mod1.subjects.math'), time: "09:00", room: "Аудитория 301" },
            { date: "18.12.2025", subject: t('scheduleMod.modules.fall.mod1.subjects.programming'), time: "14:00", room: "Компьютерный класс 1" },
            { date: "22.12.2025", subject: t('scheduleMod.modules.fall.mod2.subjects.algorithms'), time: "10:30", room: "Аудитория 415" }
          ]
        }
      ]
    },
    spring: {
      modules: [
        {
          id: 3,
          name: t('scheduleMod.modules.spring.mod3.name'),
          code: "MOD-201",
          period: "10.01.2026 - 20.02.2026",
          duration: "6 недель",
          credits: 4,
          status: "planned",
          type: "specialized",
          subjects: [
            { name: t('scheduleMod.modules.spring.mod3.subjects.networks'), hours: 54, type: "лекция" },
            { name: t('scheduleMod.modules.spring.mod3.subjects.security'), hours: 48, type: "лабораторная" },
            { name: t('scheduleMod.modules.spring.mod3.subjects.design'), hours: 42, type: "семинар" }
          ],
          assessments: [
            { type: "лабораторные работы", date: "15.02.2026", weight: 35 },
            { type: "финальный экзамен", date: "21.02.2026", weight: 65 }
          ]
        },
        {
          id: 4,
          name: t('scheduleMod.modules.spring.mod4.name'),
          code: "MOD-202",
          period: "01.03.2026 - 15.04.2026",
          duration: "6 недель",
          credits: 4,
          status: "planned",
          type: "project",
          subjects: [
            { name: t('scheduleMod.modules.spring.mod4.subjects.mobile'), hours: 66, type: "практика" },
            { name: t('scheduleMod.modules.spring.mod4.subjects.ai'), hours: 54, type: "лекция" },
            { name: t('scheduleMod.modules.spring.mod4.subjects.project'), hours: 78, type: "проект" }
          ],
          assessments: [
            { type: "презентация проекта", date: "10.04.2026", weight: 50 },
            { type: "защита проекта", date: "16.04.2026", weight: 50 }
          ]
        }
      ],
      examSessions: [
        {
          id: 2,
          name: t('scheduleMod.exams.spring.summer'),
          period: "20.05.2026 - 10.06.2026",
          type: "экзаменационная сессия",
          status: "scheduled",
          schedule: [
            { date: "20.05.2026", subject: t('scheduleMod.modules.spring.mod3.subjects.networks'), time: "11:00", room: "Аудитория 305" },
            { date: "25.05.2026", subject: t('scheduleMod.modules.spring.mod4.subjects.mobile'), time: "09:30", room: "Компьютерный класс 2" },
            { date: "01.06.2026", subject: t('scheduleMod.modules.spring.mod4.subjects.ai'), time: "13:00", room: "Аудитория 410" }
          ]
        }
      ]
    }
  };

  const getStatusConfig = (status) => {
    const configs = {
      current: { color: "from-green-500 to-emerald-500", text: t('scheduleMod.status.current') },
      upcoming: { color: "from-blue-500 to-cyan-500", text: t('scheduleMod.status.upcoming') },
      planned: { color: "from-purple-500 to-indigo-500", text: t('scheduleMod.status.planned') },
      completed: { color: "from-gray-500 to-gray-600", text: t('scheduleMod.status.completed') },
      scheduled: { color: "from-orange-500 to-amber-500", text: t('scheduleMod.status.scheduled') }
    };
    return configs[status] || configs.planned;
  };

  const getTypeConfig = (type) => {
    const configs = {
      basic: { color: "bg-blue-100 text-blue-800", text: "Базовый" },
      advanced: { color: "bg-green-100 text-green-800", text: "Продвинутый" },
      specialized: { color: "bg-purple-100 text-purple-800", text: "Специализированный" },
      project: { color: "bg-orange-100 text-orange-800", text: "Проектный" }
    };
    return configs[type] || configs.basic;
  };

  const currentSchedule = academicSchedule[activeTerm];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-100 to-cyan-100"
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
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full mb-6"
          >
            <FaCalendarAlt className="text-xl" />
            <span className="font-semibold">{t('scheduleMod.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            {t('scheduleMod.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('scheduleMod.subtitle')}
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
          {modStats.map((stat, index) => (
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

        {/* Особенности модульной системы */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            {t('scheduleMod.features.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modFeatures.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 mb-4 group-hover:scale-110 transition-transform duration-300">
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

        {/* Основной график */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Панель управления */}
            <div className="p-8 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-cyan-50">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    {t('scheduleMod.academicSchedule')}
                  </h2>
                  <p className="text-gray-600">
                    {t('scheduleMod.academicYear')} 2025-2026
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Выбор программы */}
                  <div className="relative">
                    <select 
                      value={selectedProgram}
                      onChange={(e) => setSelectedProgram(e.target.value)}
                      className="appearance-none bg-white border border-gray-300 rounded-2xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                    >
                      {studyPrograms.map(program => (
                        <option key={program.id} value={program.id}>
                          {program.name} - {program.faculty}
                        </option>
                      ))}
                    </select>
                    <FaFilter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>

                  {/* Кнопки действий */}
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-blue-600 transition-colors shadow-lg"
                    >
                      <FaDownload className="text-sm" />
                      <span>{t('scheduleMod.actions.download')}</span>
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Переключение периодов и видов */}
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                {/* Академические периоды */}
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {academicTerms.map(term => (
                    <motion.button
                      key={term.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveTerm(term.id)}
                      className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 whitespace-nowrap min-w-max ${
                        activeTerm === term.id
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                          : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      <div className="text-center">
                        <div className="font-bold">{term.name}</div>
                        <div className="text-xs opacity-80">{term.period}</div>
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Переключение вида */}
                <div className="flex bg-white rounded-2xl p-1 border border-gray-200 shadow-sm">
                  <button
                    onClick={() => setCurrentView("modules")}
                    className={`px-6 py-2 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                      currentView === "modules"
                        ? 'bg-blue-500 text-white shadow-sm'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    <FaBook className="text-sm" />
                    {t('scheduleMod.view.modules')}
                  </button>
                  <button
                    onClick={() => setCurrentView("exams")}
                    className={`px-6 py-2 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                      currentView === "exams"
                        ? 'bg-blue-500 text-white shadow-sm'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    <FaGraduationCap className="text-sm" />
                    {t('scheduleMod.view.exams')}
                  </button>
                </div>
              </div>
            </div>

            {/* Контент */}
            <div className="p-8">
              {currentView === "modules" ? (
                <div className="grid lg:grid-cols-2 gap-8">
                  {currentSchedule.modules.map((module, index) => (
                    <motion.div
                      key={module.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-2xl border-2 border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group"
                    >
                      {/* Заголовок модуля */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${getTypeConfig(module.type).color}`}>
                              {getTypeConfig(module.type).text}
                            </span>
                            <span className="text-sm text-gray-500 font-mono">{module.code}</span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">
                            {module.name}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600 flex-wrap">
                            <span className="flex items-center gap-1">
                              <FaClock className="text-blue-500" />
                              {module.period}
                            </span>
                            <span>{module.duration}</span>
                            <span>{module.credits} {t('scheduleMod.credits')}</span>
                          </div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getStatusConfig(module.status).color}`}>
                          {getStatusConfig(module.status).text}
                        </div>
                      </div>

                      {/* Дисциплины модуля */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <FaBook className="text-green-500" />
                          {t('scheduleMod.subjects')}:
                        </h4>
                        <div className="space-y-2">
                          {module.subjects.map((subject, idx) => (
                            <div
                              key={idx}
                              className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg"
                            >
                              <span className="text-sm font-medium text-gray-700">
                                {subject.name}
                              </span>
                              <div className="text-right text-xs text-gray-500">
                                <div>{subject.hours} часов</div>
                                <div>{subject.type}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Оценки */}
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <FaChartLine className="text-orange-500" />
                          {t('scheduleMod.assessments')}:
                        </h4>
                        <div className="space-y-2">
                          {module.assessments.map((assessment, idx) => (
                            <div
                              key={idx}
                              className="flex justify-between items-center py-2 px-3 bg-orange-50 rounded-lg border border-orange-100"
                            >
                              <div>
                                <div className="text-sm font-medium text-gray-700">
                                  {assessment.type}
                                </div>
                                <div className="text-xs text-orange-600">
                                  Вес: {assessment.weight}%
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-semibold text-gray-800">
                                  {assessment.date}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {currentSchedule.examSessions.map((session, index) => (
                    <motion.div
                      key={session.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200"
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-1">
                            {session.name}
                          </h3>
                          <p className="text-gray-600">{session.period}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="px-4 py-2 bg-white rounded-xl border border-blue-200">
                            <span className="text-blue-600 font-semibold">
                              {getStatusConfig(session.status).text}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {session.schedule.map((exam, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow-md transition-shadow group"
                          >
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-lg font-bold text-blue-600">
                                {exam.date}
                              </span>
                              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                {exam.time}
                              </span>
                            </div>
                            <p className="text-gray-800 font-medium mb-2">
                              {exam.subject}
                            </p>
                            <p className="text-sm text-gray-600 flex items-center gap-1">
                              <FaUniversity className="text-gray-400" />
                              {exam.room}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
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
          {/* Ключевые даты */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                <FaCalendarCheck className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{t('scheduleMod.keyDates.title')}</h3>
            </div>
            
            <div className="space-y-4">
              {[
                { event: t('scheduleMod.keyDates.start'), date: "01.09.2025", type: "начало" },
                { event: t('scheduleMod.keyDates.midterm'), date: "15.10.2025", type: "промежуточный" },
                { event: t('scheduleMod.keyDates.winterBreak'), date: "01.01.2026", type: "каникулы" },
                { event: t('scheduleMod.keyDates.graduation'), date: "30.06.2026", type: "окончание" }
              ].map((date, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
                >
                  <div>
                    <span className="text-gray-700 font-medium">{date.event}</span>
                    <span className="ml-2 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {date.type}
                    </span>
                  </div>
                  <span className="text-gray-800 font-bold">{date.date}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Учебный процесс */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-8 text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <FaUserGraduate className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold">{t('scheduleMod.academicProcess.title')}</h3>
            </div>
            
            <div className="space-y-4">
              {[
                { label: t('scheduleMod.academicProcess.totalCredits'), value: "24 ECTS" },
                { label: t('scheduleMod.academicProcess.contactHours'), value: "720 часов" },
                { label: t('scheduleMod.academicProcess.selfStudy'), value: "480 часов" },
                { label: t('scheduleMod.academicProcess.assessment'), value: "6 модулей" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex justify-between items-center py-3 border-b border-white/20 last:border-b-0"
                >
                  <span className="text-white/90">{item.label}</span>
                  <span className="font-bold">{item.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ScheduleMod;