import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaCalendarAlt,
  FaClock,
  FaBook,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBuilding,
  FaBell,
  FaDownload,
  FaPrint,
  FaShare,
  FaFilter,
  FaSearch,
  FaArrowLeft,
  FaArrowRight
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const CollegeSchedule = () => {
  const { t } = useTranslation();
  const [activeDay, setActiveDay] = useState(0);
  const [selectedGroup, setSelectedGroup] = useState("all");
  const [currentWeek, setCurrentWeek] = useState(0);

  const daysOfWeek = [
    { id: 0, name: t('schedule.days.monday'), short: t('schedule.daysShort.monday') },
    { id: 1, name: t('schedule.days.tuesday'), short: t('schedule.daysShort.tuesday') },
    { id: 2, name: t('schedule.days.wednesday'), short: t('schedule.daysShort.wednesday') },
    { id: 3, name: t('schedule.days.thursday'), short: t('schedule.daysShort.thursday') },
    { id: 4, name: t('schedule.days.friday'), short: t('schedule.daysShort.friday') },
    { id: 5, name: t('schedule.days.saturday'), short: t('schedule.daysShort.saturday') }
  ];

  const timeSlots = [
    { id: 1, time: "08:30 - 10:00" },
    { id: 2, time: "10:10 - 11:40" },
    { id: 3, time: "11:50 - 13:20" },
    { id: 4, time: "13:30 - 15:00" },
    { id: 5, time: "15:10 - 16:40" },
    { id: 6, time: "16:50 - 18:20" }
  ];

  const studyGroups = [
    { id: "all", name: t('schedule.groups.all') },
    { id: "cs-1", name: "CS-11" },
    { id: "cs-2", name: "CS-12" },
    { id: "bus-1", name: "BUS-21" },
  ];

  const scheduleData = {
    0: { // Monday
      1: [
        { subject: t('schedule.subjects.math'), teacher: "А.К. Исакова", room: "302", type: "lecture", group: "CS-101" },
        { subject: t('schedule.subjects.physics'), teacher: "М.С. Петров", room: "415", type: "lab", group: "CS-102" }
      ],
      2: [
        { subject: t('schedule.subjects.programming'), teacher: "Н.А. Сидоров", room: t('schedule.rooms.computer1'), type: "practice", group: "CS-101" }
      ],
      4: [
        { subject: t('schedule.subjects.english'), teacher: "С.М. Джонс", room: "205", type: "seminar", group: "CS-101" },
        { subject: t('schedule.subjects.economics'), teacher: "Л.В. Ким", room: "310", type: "lecture", group: "BUS-201" }
      ]
    },
    1: { // Tuesday
      2: [
        { subject: t('schedule.subjects.databases'), teacher: "А.Р. Васильев", room: t('schedule.rooms.computer2'), type: "lab", group: "CS-101" }
      ],
      3: [
        { subject: t('schedule.subjects.webdev'), teacher: "Д.К. Нурматов", room: t('schedule.rooms.computer1'), type: "practice", group: "CS-101" },
        { subject: t('schedule.subjects.accounting'), teacher: "Г.С. Ли", room: "215", type: "seminar", group: "BUS-201" }
      ],
      5: [
        { subject: t('schedule.subjects.pe'), teacher: "П.А. Иванов", room: t('schedule.rooms.gym'), type: "practice", group: "CS-101" }
      ]
    },
    2: { // Wednesday
      1: [
        { subject: t('schedule.subjects.algorithms'), teacher: "М.К. Смирнов", room: "305", type: "lecture", group: "CS-101" }
      ],
      3: [
        { subject: t('schedule.subjects.networks'), teacher: "Р.Т. Козлов", room: t('schedule.rooms.computer3'), type: "lab", group: "CS-101" },
        { subject: t('schedule.subjects.law'), teacher: "А.Б. Юсупов", room: "410", type: "lecture", group: "LAW-301" }
      ],
      4: [
        { subject: t('schedule.subjects.statistics'), teacher: "Е.В. Новикова", room: "320", type: "seminar", group: "CS-101" }
      ]
    },
    3: { // Thursday
      2: [
        { subject: t('schedule.subjects.ai'), teacher: "К.Л. Орлов", room: "305", type: "lecture", group: "CS-101" },
        { subject: t('schedule.subjects.marketing'), teacher: "Т.С. Пак", room: "210", type: "seminar", group: "BUS-201" }
      ],
      4: [
        { subject: t('schedule.subjects.mobiledev'), teacher: "Б.А. Чыныбаев", room: t('schedule.rooms.computer1'), type: "practice", group: "CS-101" }
      ],
      6: [
        { subject: t('schedule.subjects.programmingClub'), teacher: "Н.А. Сидоров", room: t('schedule.rooms.computer2'), type: "club", group: "CS-101" }
      ]
    },
    4: { // Friday
      1: [
        { subject: t('schedule.subjects.cybersecurity'), teacher: "А.С. Беков", room: "305", type: "lecture", group: "CS-101" }
      ],
      3: [
        { subject: t('schedule.subjects.projectWork'), teacher: "Д.К. Нурматов", room: t('schedule.rooms.computer1'), type: "project", group: "CS-101" },
        { subject: t('schedule.subjects.anatomy'), teacher: "Л.М. Джумабаев", room: t('schedule.rooms.lab5'), type: "lab", group: "MED-401" }
      ],
      5: [
        { subject: t('schedule.subjects.consultations'), teacher: "А.К. Исакова", room: "302", type: "consultation", group: "CS-101" }
      ]
    },
    5: { // Saturday
      2: [
        { subject: t('schedule.subjects.datascience'), teacher: "М.К. Смирнов", room: t('schedule.rooms.computer3'), type: "elective", group: "CS-101" }
      ],
      4: [
        { subject: t('schedule.subjects.sports'), teacher: "П.А. Иванов", room: t('schedule.rooms.gym'), type: "sports", group: "CS-101" }
      ]
    }
  };

  const scheduleFeatures = [
    {
      icon: <FaCalendarAlt className="text-blue-500" size={28} />,
      title: t('schedule.features.current.title'),
      description: t('schedule.features.current.description')
    },
    {
      icon: <FaBell className="text-green-500" size={28} />,
      title: t('schedule.features.updates.title'),
      description: t('schedule.features.updates.description')
    },
    {
      icon: <FaDownload className="text-purple-500" size={28} />,
      title: t('schedule.features.download.title'),
      description: t('schedule.features.download.description')
    },
    {
      icon: <FaShare className="text-orange-500" size={28} />,
      title: t('schedule.features.share.title'),
      description: t('schedule.features.share.description')
    }
  ];

  const scheduleStats = [
    { number: "5", label: t('schedule.stats.days') },
    { number: "36", label: t('schedule.stats.hours') },
    { number: "25+", label: t('schedule.stats.teachers') },
    { number: "20+", label: t('schedule.stats.groups') }
  ];

  const getTypeColor = (type) => {
    const colors = {
      lecture: "from-blue-500 to-cyan-500",
      lab: "from-green-500 to-emerald-500",
      practice: "from-purple-500 to-indigo-500",
      seminar: "from-orange-500 to-amber-500",
      project: "from-pink-500 to-rose-500",
      consultation: "from-teal-500 to-cyan-500",
      elective: "from-yellow-500 to-orange-500",
      club: "from-indigo-500 to-purple-500",
      sports: "from-red-500 to-pink-500"
    };
    return colors[type] || "from-gray-500 to-gray-600";
  };

  const getTypeText = (type) => {
    const types = {
      lecture: t('schedule.types.lecture'),
      lab: t('schedule.types.lab'),
      practice: t('schedule.types.practice'),
      seminar: t('schedule.types.seminar'),
      project: t('schedule.types.project'),
      consultation: t('schedule.types.consultation'),
      elective: t('schedule.types.elective'),
      club: t('schedule.types.club'),
      sports: t('schedule.types.sports')
    };
    return types[type] || type;
  };

  const filteredSchedule = scheduleData[activeDay] || {};
  
  const filteredLessons = {};
  Object.keys(filteredSchedule).forEach(timeSlot => {
    const lessons = filteredSchedule[timeSlot].filter(lesson => 
      selectedGroup === "all" || lesson.group === selectedGroup
    );
    if (lessons.length > 0) {
      filteredLessons[timeSlot] = lessons;
    }
  });

  const handleDownloadSchedule = () => {
    console.log("Download schedule");
  };

  const handlePrintSchedule = () => {
    window.print();
  };

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
            <FaCalendarAlt className="text-xl" />
            <span className="font-semibold">{t('schedule.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            {t('schedule.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('schedule.subtitle')}
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
          {scheduleStats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Основное расписание */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Заголовок и управление */}
            <div className="p-8 border-b border-gray-200">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    {t('schedule.currentSchedule')}
                  </h2>
                  <p className="text-gray-600">
                    {t('schedule.academicYear')} 2024-2025
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Выбор группы */}
                  <div className="relative">
                    <select 
                      value={selectedGroup}
                      onChange={(e) => setSelectedGroup(e.target.value)}
                      className="appearance-none bg-white border border-gray-300 rounded-2xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {studyGroups.map(group => (
                        <option key={group.id} value={group.id}>
                          {group.name}
                        </option>
                      ))}
                    </select>
                    <FaFilter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Дни недели */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex overflow-x-auto pb-2 gap-2">
                {daysOfWeek.map(day => (
                  <motion.button
                    key={day.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveDay(day.id)}
                    className={`flex-1 min-w-[120px] px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                      activeDay === day.id
                        ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-sm font-medium">{day.short}</div>
                      <div className="text-lg font-bold">{day.name}</div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Расписание на выбранный день */}
            <div className="p-8">
              <motion.h3 
                key={activeDay}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-bold text-gray-800 mb-8 text-center"
              >
                {daysOfWeek[activeDay]?.name} - {selectedGroup === "all" ? t('schedule.groups.all') : studyGroups.find(g => g.id === selectedGroup)?.name}
              </motion.h3>

              {Object.keys(filteredLessons).length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <FaCalendarAlt className="text-gray-300 text-6xl mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-500 mb-2">
                    {t('schedule.noLessons')}
                  </h4>
                  <p className="text-gray-400">
                    {t('schedule.noLessonsDescription')}
                  </p>
                </motion.div>
              ) : (
                <div className="grid gap-4 max-w-4xl mx-auto">
                  {timeSlots.map(slot => (
                    <motion.div
                      key={slot.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: slot.id * 0.1 }}
                      className={`bg-white rounded-2xl p-6 border-2 transition-all duration-300 ${
                        filteredLessons[slot.id] 
                          ? 'border-blue-200 shadow-lg hover:shadow-xl' 
                          : 'border-gray-100 opacity-50'
                      }`}
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                        {/* Время */}
                        <div className="flex items-center gap-4 min-w-[180px]">
                          <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                            <FaClock className="text-blue-600 text-lg" />
                          </div>
                          <div>
                            <div className="text-lg font-bold text-gray-800">
                              {slot.time}
                            </div>
                            <div className="text-sm text-gray-500">
                              {t('schedule.lesson')} {slot.id}
                            </div>
                          </div>
                        </div>

                        {/* Занятия */}
                        <div className="flex-1 grid gap-3">
                          {filteredLessons[slot.id]?.map((lesson, index) => (
                            <motion.div
                              key={index}
                              whileHover={{ scale: 1.02 }}
                              className={`bg-gradient-to-r ${getTypeColor(lesson.type)} text-white rounded-xl p-4 shadow-lg`}
                            >
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                <div className="flex-1">
                                  <h4 className="font-bold text-lg mb-1">
                                    {lesson.subject}
                                  </h4>
                                  <div className="flex flex-wrap gap-4 text-white/90 text-sm">
                                    <span className="flex items-center gap-1">
                                      <FaChalkboardTeacher className="text-sm" />
                                      {lesson.teacher}
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <FaBuilding className="text-sm" />
                                      {lesson.room}
                                    </span>
                                    <span className="bg-white/20 px-2 py-1 rounded-lg text-xs">
                                      {getTypeText(lesson.type)}
                                    </span>
                                  </div>
                                </div>
                                <div className="bg-white/20 px-3 py-1 rounded-lg text-sm font-semibold">
                                  {lesson.group}
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Легенда типов занятий */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            {t('schedule.legend.title')}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {Object.entries({
              lecture: t('schedule.types.lecture'),
              lab: t('schedule.types.lab'),
              practice: t('schedule.types.practice'),
              seminar: t('schedule.types.seminar'),
              project: t('schedule.types.project')
            }).map(([type, name]) => (
              <motion.div
                key={type}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50"
              >
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${getTypeColor(type)}`} />
                <span className="text-sm font-medium text-gray-700">{name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CollegeSchedule;