import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios";
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
  FaArrowRight,
  FaSpinner
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const CollegeSchedule = () => {
  const { t, i18n } = useTranslation();
  const [activeDay, setActiveDay] = useState(1); // 1 = Monday (backend format)
  const [selectedGroup, setSelectedGroup] = useState(null); // Start with no group selected
  const [currentWeek, setCurrentWeek] = useState(0);
  
  // State for API data
  const [schedules, setSchedules] = useState([]);
  const [studyGroups, setStudyGroups] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // API base URL
  const API_BASE_URL = 'https://su-college-back-0fa585fe0710.herokuapp.com/api';

  // Load data from API
  useEffect(() => {
    // Функция для загрузки всех страниц групп
    const fetchAllGroups = async (url, acc = []) => {
      const res = await axios.get(url);
      const results = res.data.results || res.data || [];
      const all = [...acc, ...results];
      if (res.data.next) {
        return fetchAllGroups(res.data.next, all);
      }
      return all;
    };

    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch all groups (pagination)
        const allGroups = await fetchAllGroups(`${API_BASE_URL}/schedule/api/groups/`);
        // Fetch time slots
        const timeSlotsRes = await axios.get(`${API_BASE_URL}/schedule/api/timeslots/`);

        const groups = [
          { id: "all", name: t('schedule.groups.all') },
          ...allGroups
        ];
        setStudyGroups(groups);
        console.log('Группы для фильтра:', groups);
        setTimeSlots(timeSlotsRes.data.results || timeSlotsRes.data || []);

        // Don't fetch schedule automatically - wait for user to select a group

      } catch (err) {
        console.error('Error fetching schedule data:', err);
        setError(err.message);
        // Fallback to demo data if API fails
        setDemoData();
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [t, i18n.language]);

  const setDemoData = () => {
    // Fallback demo data if API is not available
    setTimeSlots([
      { id: 1, number: 1, start_time: "09:00", end_time: "10:20" },
      { id: 2, number: 2, start_time: "10:30", end_time: "11:50" },
      { id: 3, number: 3, start_time: "12:00", end_time: "13:20" },
      { id: 4, number: 4, start_time: "14:00", end_time: "15:20" },
      { id: 5, number: 5, start_time: "15:30", end_time: "16:50" },
      { id: 6, number: 6, start_time: "17:00", end_time: "18:20" }
    ]);
    
    setStudyGroups([
      { id: "all", name: t('schedule.groups.all') },
      { id: 1, name: "CS-101" },
      { id: 2, name: "CS-102" },
      { id: 3, name: "BUS-201" }
    ]);
    
    // Demo schedule data - ensure arrays for each time slot
    setSchedules({
      1: { // Monday
        1: [
          { subject: "Mathematics", teacher: "J. Smith", room: "A-101", type: "lecture", group: "CS-101" },
          { subject: "Physics", teacher: "J. Doe", room: "A-201", type: "lecture", group: "CS-102" }
        ],
        2: [
          { subject: "Programming", teacher: "B. Johnson", room: "A-102", type: "practice", group: "CS-101" }
        ],
        3: [
          { subject: "English", teacher: "A. Brown", room: "A-101", type: "seminar", group: "CS-101" }
        ]
      },
      2: { // Tuesday
        1: [
          { subject: "Physics", teacher: "J. Doe", room: "A-201", type: "lecture", group: "CS-101" }
        ],
        2: [
          { subject: "Mathematics", teacher: "J. Smith", room: "A-101", type: "lecture", group: "CS-102" }
        ],
        3: [
          { subject: "Economics", teacher: "M. Wilson", room: "A-201", type: "lecture", group: "BUS-201" }
        ]
      },
      3: { // Wednesday
        1: [
          { subject: "Programming", teacher: "B. Johnson", room: "A-102", type: "lab", group: "CS-101" }
        ],
        2: [
          { subject: "Programming", teacher: "B. Johnson", room: "A-102", type: "lab", group: "CS-102" }
        ]
      }
    });
    
    console.log('Demo data set successfully');
  };

  // Refetch schedules when group changes
  useEffect(() => {
    if (selectedGroup && selectedGroup !== "all" && !loading) {
      fetchScheduleForGroup(selectedGroup);
    }
  }, [selectedGroup]);

  const fetchScheduleForGroup = async (groupId) => {
    try {
      setLoading(true);
      
      if (groupId === "all") {
        // If "all" is selected, try to find a group with actual schedule data
        console.log('Fetching schedule for all groups...');
        
        // First try to get any schedule data
        const allScheduleResponse = await axios.get(`${API_BASE_URL}/schedule/api/schedules/weekly_schedule/`);
        console.log('All schedule response:', allScheduleResponse.data);
        
        const allScheduleData = allScheduleResponse.data.schedule || {};
        const hasAnySchedule = Object.keys(allScheduleData).some(day => 
          Array.isArray(allScheduleData[day]) ? allScheduleData[day].length > 0 : false
        );
        
        if (hasAnySchedule) {
          setSchedules(allScheduleData);
        } else {
          // If no schedule in "all", try to find first group with schedule
          console.log('No schedule found for all groups, trying individual groups...');
          let foundGroupWithSchedule = false;
          
          for (const group of studyGroups) {
            if (group.id !== "all") {
              try {
                const groupResponse = await axios.get(`${API_BASE_URL}/schedule/api/schedules/by_group/`, {
                  params: { group_id: group.id }
                });
                
                if (groupResponse.data && groupResponse.data.length > 0) {
                  console.log(`Found schedule for group ${group.name}, switching to it`);
                  setSelectedGroup(group.id);
                  foundGroupWithSchedule = true;
                  
                  // Process the schedule data
                  const groupedSchedule = {};
                  groupResponse.data.forEach(schedule => {
                    const weekday = schedule.weekday;
                    if (!groupedSchedule[weekday]) {
                      groupedSchedule[weekday] = [];
                    }
                    groupedSchedule[weekday].push(schedule);
                  });
                  
                  setSchedules(groupedSchedule);
                  
                  // Auto-switch to first available day
                  const availableDays = Object.keys(groupedSchedule).map(Number);
                  if (availableDays.length > 0 && !availableDays.includes(activeDay)) {
                    const firstAvailableDay = Math.min(...availableDays);
                    console.log('Switching to first available day:', firstAvailableDay);
                    setActiveDay(firstAvailableDay);
                  }
                  
                  break;
                }
              } catch (err) {
                console.log(`No schedule found for group ${group.name}`);
              }
            }
          }
          
          if (!foundGroupWithSchedule) {
            console.log('No schedules found for any group');
            setSchedules({});
          }
        }
      } else {
        // Fetch schedule for specific group
        const response = await axios.get(`${API_BASE_URL}/schedule/api/schedules/by_group/`, {
          params: { group_id: groupId }
        });
        
        console.log('Group schedule response:', response.data);
        
        // Group schedule data by weekday (keep as arrays)
        const groupedSchedule = {};
        (response.data || []).forEach(schedule => {
          const weekday = schedule.weekday;
          
          if (!groupedSchedule[weekday]) {
            groupedSchedule[weekday] = [];
          }
          
          groupedSchedule[weekday].push(schedule);
        });
        
        console.log('Grouped schedule:', groupedSchedule);
        setSchedules(groupedSchedule);
        
        // Auto-switch to first available day if current day has no schedule
        const availableDays = Object.keys(groupedSchedule).map(Number);
        if (availableDays.length > 0 && !availableDays.includes(activeDay)) {
          const firstAvailableDay = Math.min(...availableDays);
          console.log('Switching to first available day:', firstAvailableDay);
          setActiveDay(firstAvailableDay);
        }
      }
    } catch (err) {
      console.error('Error fetching group schedule:', err);
      setError(err.message);
      // Keep existing schedules on error
    } finally {
      setLoading(false);
    }
  };

  const daysOfWeek = [
    { id: 1, name: t('schedule.days.monday'), short: t('schedule.daysShort.monday') },
    { id: 2, name: t('schedule.days.tuesday'), short: t('schedule.daysShort.tuesday') },
    { id: 3, name: t('schedule.days.wednesday'), short: t('schedule.daysShort.wednesday') },
    { id: 4, name: t('schedule.days.thursday'), short: t('schedule.daysShort.thursday') },
    { id: 5, name: t('schedule.days.friday'), short: t('schedule.daysShort.friday') },
    { id: 6, name: t('schedule.days.saturday'), short: t('schedule.daysShort.saturday') }
  ];

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
    { number: "6", label: t('schedule.stats.days') },
    { number: timeSlots.length.toString(), label: t('schedule.stats.timeslots') },
    { number: "25+", label: t('schedule.stats.teachers') },
    { number: studyGroups.length > 1 ? (studyGroups.length - 1).toString() : "0", label: t('schedule.stats.groups') }
  ];

  // Get filtered lessons for current day
  const dayScheduleData = schedules[activeDay] || [];
  
  console.log('Current activeDay:', activeDay);
  console.log('Current selectedGroup:', selectedGroup);
  console.log('Current schedules:', schedules);
  console.log('Day schedule data:', dayScheduleData);
  console.log('Available days in schedules:', Object.keys(schedules));
  
  // Convert array of schedule items to grouped by time slot
  const filteredLessons = {};
  
  if (Array.isArray(dayScheduleData)) {
    console.log('Processing', dayScheduleData.length, 'schedule items for day', activeDay);
    dayScheduleData.forEach(scheduleItem => {
      console.log('Processing schedule item:', scheduleItem);
      
      // Extract time slot number - now it comes directly as a number
      const timeSlot = scheduleItem.time_slot || '1';
      console.log('Extracted time slot:', timeSlot);
      
      // Create lesson object from schedule item
      const lesson = {
        subject: scheduleItem.subject_name || scheduleItem.subject?.name_ru || 'Unknown Subject',
        teacher: scheduleItem.teacher_name || scheduleItem.teacher?.short_name || 'Unknown Teacher',
        room: scheduleItem.room_name || scheduleItem.room?.full_name || 'Unknown Room',
        type: scheduleItem.lesson_type || 'lecture',
        group: scheduleItem.group_name || scheduleItem.group?.name || 'Unknown Group',
        groupId: scheduleItem.group_id || scheduleItem.group?.id
      };
      
      console.log('Created lesson:', lesson);
      
      // Filter by selected group - compare by group ID, not name
      const groupMatches = selectedGroup === "all" || 
                          String(selectedGroup) === String(lesson.groupId) ||
                          selectedGroup === lesson.group;
      
      console.log('Group filter check:', {
        selectedGroup,
        lessonGroupId: lesson.groupId,
        lessonGroupName: lesson.group,
        matches: groupMatches
      });
      
      if (groupMatches) {
        console.log('Lesson matches group filter, adding to timeSlot:', timeSlot);
        if (!filteredLessons[timeSlot]) {
          filteredLessons[timeSlot] = [];
        }
        filteredLessons[timeSlot].push(lesson);
      } else {
        console.log('Lesson does not match group filter');
      }
    });
  }
  
  console.log('Final filtered lessons:', filteredLessons);

  // Function to format time without seconds
  const formatTimeRange = (slot) => {
    // Use formatted fields from API if available, otherwise format manually
    const startTime = slot.start_time_formatted || (slot.start_time ? slot.start_time.substring(0, 5) : '');
    const endTime = slot.end_time_formatted || (slot.end_time ? slot.end_time.substring(0, 5) : '');
    
    return `${startTime} - ${endTime}`;
  };

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

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-16 lg:py-20">
        {/* Error Display */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded-lg mb-6"
          >
            <div className="flex items-center">
              <FaBell className="mr-2" />
              <div>
                <strong className="font-bold">{t('schedule.apiError')}: </strong>
                <span>{t('schedule.usingDemoData')}</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Loading State */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center items-center py-20"
          >
            <FaSpinner className="animate-spin text-4xl text-blue-500 mr-4" />
            <span className="text-xl text-gray-600">{t('schedule.loading')}</span>
          </motion.div>
        )}
        {/* Main Content - показываем только когда данные загружены */}
        {!loading && !error && (
          <>
            {/* Герой секция */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 md:mb-16 lg:mb-20"
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

              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                {t('schedule.title')}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {t('schedule.subtitle')}
              </p>
            </motion.div>

            {/* Выбор группы */}
            {(!selectedGroup || selectedGroup === "all") && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12 md:mb-16 lg:mb-20"
              >
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 md:p-8 lg:p-12 max-w-2xl mx-auto">
                  <FaUserGraduate className="text-6xl text-blue-500 mx-auto mb-6" />
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                    Выберите группу
                  </h2>
                  <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
                    Для просмотра расписания выберите вашу учебную группу из списка ниже
                  </p>
                  <div className="relative max-w-md mx-auto">
                    <select
                      value={selectedGroup || ""}
                      onChange={(e) => setSelectedGroup(e.target.value)}
                      className="w-full appearance-none bg-white border border-gray-300 rounded-2xl px-6 py-4 pr-12 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="" disabled>Выберите группу...</option>
                      {studyGroups.filter(group => group.id !== "all").map(group => (
                        <option key={group.id} value={group.id}>
                          {group.name}
                        </option>
                      ))}
                    </select>
                    <FaFilter className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Основное расписание - показываем только когда выбрана конкретная группа */}
            {selectedGroup && selectedGroup !== "all" && (
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Заголовок и управление */}
            <div className="p-6 md:p-8 border-b border-gray-200">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
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
            <div className="p-4 md:p-6 border-b border-gray-200">
              <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-hide">
                {daysOfWeek.map(day => {
                  const hasSchedule = schedules[day.id] && schedules[day.id].length > 0;
                  return (
                    <motion.button
                      key={day.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveDay(day.id)}
                      className={`flex-1 min-w-[110px] md:min-w-[120px] px-3 md:px-6 py-4 md:py-4 rounded-2xl font-semibold transition-all duration-300 relative ${
                        activeDay === day.id
                          ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg transform scale-105'
                          : hasSchedule 
                            ? 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:shadow-md' 
                            : 'bg-gray-50 text-gray-400 opacity-50'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-sm md:text-sm font-medium mb-1">{day.short}</div>
                        <div className="text-sm md:text-lg font-bold leading-tight">{day.name}</div>
                        {hasSchedule && (
                          <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
              {/* Индикатор скролла для мобильных */}
              <div className="flex justify-center mt-3 md:hidden">
                <div className="flex gap-1">
                  {daysOfWeek.map(day => (
                    <div
                      key={day.id}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeDay === day.id ? 'bg-blue-500 w-6' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Расписание на выбранный день */}
            <div className="p-6 md:p-8">
              <motion.h3 
                key={activeDay}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xl md:text-2xl font-bold text-gray-800 mb-6 md:mb-8 text-center"
              >
                {daysOfWeek.find(day => day.id === activeDay)?.name} - {selectedGroup === "all" ? t('schedule.groups.all') : studyGroups.find(g => g.id == selectedGroup)?.name}
              </motion.h3>

              {Object.keys(filteredLessons).length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <FaCalendarAlt className="text-gray-300 text-6xl mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-500 mb-2">
                    {loading ? "Поиск расписания..." : t('schedule.noLessons')}
                  </h4>
                  <p className="text-gray-400">
                    {loading 
                      ? "Автоматически выбираем группу с доступным расписанием..." 
                      : (selectedGroup === "all" 
                        ? "Для просмотра расписания выберите конкретную группу" 
                        : t('schedule.noLessonsDescription')
                      )
                    }
                  </p>
                </motion.div>
              ) : (
                <div className="grid gap-4 max-w-4xl mx-auto">
                  {timeSlots.map(slot => {
                    const slotNumber = slot.number || slot.id;
                    const slotKey = slot.id || slot.number || Math.random();
                    
                    return (
                      <motion.div
                        key={slotKey}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (slotNumber || 1) * 0.1 }}
                        className={`bg-white rounded-2xl p-4 md:p-6 border-2 transition-all duration-300 ${
                          filteredLessons[slotNumber] 
                            ? 'border-blue-200 shadow-lg hover:shadow-xl' 
                            : 'border-gray-100 opacity-50'
                        }`}
                      >
                        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                          {/* Время */}
                          <div className="flex items-center gap-3 md:gap-4 min-w-[160px] md:min-w-[180px]">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                              <FaClock className="text-blue-600 text-base md:text-lg" />
                            </div>
                            <div>
                              <div className="text-base md:text-lg font-bold text-gray-800">
                                {formatTimeRange(slot)}
                              </div>
                              <div className="text-xs md:text-sm text-gray-500">
                                {t('schedule.lesson')} {slotNumber}
                              </div>
                            </div>
                          </div>

                          {/* Занятия */}
                          <div className="flex-1 grid gap-3">
                            {filteredLessons[slotNumber]?.map((lesson, index) => (
                              <motion.div
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                className={`bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl p-3 md:p-4 shadow-lg`}
                              >
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                  <div className="flex-1">
                                    <h4 className="font-bold text-base md:text-lg mb-1">
                                      {lesson.subject}
                                    </h4>
                                    <div className="flex flex-wrap gap-3 md:gap-4 text-white/90 text-xs md:text-sm">
                                      <span className="flex items-center gap-1">
                                        <FaChalkboardTeacher className="text-sm" />
                                        {lesson.teacher}
                                      </span>
                                      <span className="flex items-center gap-1">
                                        <FaBuilding className="text-sm" />
                                        {lesson.room}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="bg-white/20 px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm font-semibold">
                                    {lesson.group}
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
            )}

            </>
        )}
      </div>
    </div>
  );
};

export default CollegeSchedule;