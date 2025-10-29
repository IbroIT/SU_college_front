import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  FaGraduationCap, 
  FaAward, 
  FaStar, 
  FaChalkboardTeacher,
  FaSpinner,
  FaExclamationTriangle,
  FaTimes,
  FaLinkedin,
  FaGlobe,
  FaEnvelope
} from 'react-icons/fa';

const TeachersSection = () => {
  const { t, i18n } = useTranslation();
  const [hoveredTeacher, setHoveredTeacher] = useState(null);
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Правильный маппинг языков
  const getBackendLanguage = (i18nLanguage) => {
    const map = {
      'kg': 'kg',
      'ru': 'ru',
      'en': 'en'
    };
    return map[i18nLanguage] || 'ru';
  };

  // Загрузка данных с бэкенда
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
        const backendLanguage = getBackendLanguage(i18n.language);
      
        const url = `${API_BASE_URL}/api/teachers/with_translations/?lang=${backendLanguage}`;
        
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setTeachers(data);
      } catch (err) {
        setError(err.message);
        setTeachers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, [i18n.language]);

  // Функции для работы с модальным окном
  const openTeacherModal = (teacher) => {
    setSelectedTeacher(teacher);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
  };

  const closeTeacherModal = () => {
    setIsModalOpen(false);
    setSelectedTeacher(null);
    document.body.style.overflow = 'unset'; // Разблокируем скролл страницы
  };

  // Закрытие по клику на оверлей
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeTeacherModal();
    }
  };

  // Закрытие по ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.keyCode === 27) closeTeacherModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const teacherCount = Array.isArray(teachers) ? teachers.length : 0;

  const stats = [
    { number: teacherCount.toString(), label: t('teachers.stats.experts') },
    { number: "15+", label: t('teachers.stats.experience') },
    { number: "1000+", label: t('teachers.stats.students') },
    { number: "4.8", label: t('teachers.stats.rating') }
  ];

  // Состояния загрузки и ошибок
  if (loading) {
    return <LoadingState />;
  }

  if (error && teachers.length === 0) {
    return <ErrorState error={error} onRetry={() => window.location.reload()} />;
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-100 to-cyan-100"
            style={{
              width: Math.random() * 80 + 40,
              height: Math.random() * 80 + 40,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 8 + Math.random() * 8,
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
            <FaChalkboardTeacher className="text-xl" />
            <span className="font-semibold">{t('teachers.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            {t('teachers.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('teachers.subtitle')}
          </p>
        </motion.div>

        {/* Сообщение об ошибке, если есть учителя но также есть ошибка */}
        {error && teachers.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8 max-w-2xl mx-auto"
          >
            <div className="flex items-center gap-3">
              <FaExclamationTriangle className="text-yellow-500 flex-shrink-0" />
              <p className="text-yellow-800 text-sm">
                {t('teachers.partialError')} {error}
              </p>
            </div>
          </motion.div>
        )}

        {/* Сетка преподавателей */}
        {teachers.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teachers.map((teacher, index) => (
              <TeacherCard 
                key={teacher.id} 
                teacher={teacher} 
                index={index}
                isHovered={hoveredTeacher === teacher.id}
                onHover={() => setHoveredTeacher(teacher.id)}
                onLeave={() => setHoveredTeacher(null)}
                onClick={() => openTeacherModal(teacher)}
              />
            ))}
          </motion.div>
        ) : (
          <EmptyState />
        )}
      </div>

      {/* Модальное окно преподавателя */}
      <AnimatePresence>
        {isModalOpen && selectedTeacher && (
          <TeacherModal 
            teacher={selectedTeacher} 
            onClose={closeTeacherModal}
            onOverlayClick={handleOverlayClick}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

// Компонент карточки преподавателя
const TeacherCard = ({ teacher, index, isHovered, onHover, onLeave, onClick }) => {
  const { t } = useTranslation();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      onClick={onClick}
      className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden hover:shadow-3xl transition-all duration-500 group cursor-pointer relative"
    >
      {/* Анимированный фон */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          background: isHovered 
            ? [
                'linear-gradient(45deg, rgba(59, 130, 246, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%)',
                'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%)',
                'linear-gradient(225deg, rgba(59, 130, 246, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%)'
              ]
            : 'linear-gradient(45deg, rgba(59, 130, 246, 0) 0%, rgba(6, 182, 212, 0) 100%)'
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Верхняя часть с фото */}
      <div className="relative h-64 overflow-hidden">
        {teacher.image && !imageError ? (
          <>
            <motion.img 
              src={teacher.image} 
              alt={teacher.name}
              className={`w-full h-full object-cover ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              } transition-opacity duration-300`}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              onLoad={() => setImageLoaded(true)}
              onError={handleImageError}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                <FaSpinner className="text-gray-400 text-2xl animate-spin" />
              </div>
            )}
          </>
        ) : (
          <div className={`w-full h-full bg-gradient-to-r ${teacher.color || 'from-blue-500 to-cyan-500'} flex items-center justify-center`}>
            <FaGraduationCap className="text-white text-4xl" />
          </div>
        )}
        
        {/* Градиентный оверлей */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
          initial={{ opacity: 0.3 }}
          whileHover={{ opacity: 0.8 }}
          transition={{ duration: 0.3 }}
        />

        {/* Опыт */}
        {teacher.experience && (
          <motion.div 
            className="absolute bottom-4 right-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
          >
            <div className="bg-black/60 backdrop-blur-sm rounded-xl px-3 py-1">
              <p className="text-white text-sm font-medium">
                {teacher.experience}
              </p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Информация */}
      <div className="relative p-6">
        {/* Имя и предмет */}
        <motion.h3 
          className="text-xl font-bold text-gray-800 mb-2 text-center line-clamp-1"
          whileHover={{ color: "#3b82f6" }}
          transition={{ duration: 0.2 }}
        >
          {teacher.name}
        </motion.h3>
        
        <motion.p 
          className="text-gray-600 text-center mb-3 font-medium line-clamp-1"
          whileHover={{ color: "#6b7280" }}
        >
          {teacher.subject}
        </motion.p>

        {/* Описание */}
        {teacher.description && (
          <div className="mb-6 relative">
            <motion.div
              className="absolute -left-2 top-0 w-1 h-8 bg-blue-500 rounded-full"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            />
            <p className="text-gray-600 text-sm leading-relaxed pl-4 line-clamp-3">
              {teacher.description}
            </p>
          </div>
        )}

        {/* Кнопка "Подробнее" */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
          className="text-center"
        >
          <button
            className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 font-medium text-sm transition-colors"
          >
            {t('teachers.more')} {/* например: "Подробнее" */}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

        </motion.div>
      </div>

      {/* Анимированный бордер */}
      <motion.div
        className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-padding"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude'
        }}
      />
    </motion.div>
  );
};

// Компонент модального окна преподавателя
const TeacherModal = ({ teacher, onClose, onOverlayClick }) => {
  const { t } = useTranslation();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onOverlayClick}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
      >
        {/* Заголовок модального окна */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">{t('teachers.modal.title')}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <FaTimes className="text-gray-500 text-xl" />
          </button>
        </div>

        {/* Контент модального окна */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="p-6">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Левая колонка - фото и основная информация */}
              <div className="lg:w-1/3">
                <div className="relative h-80 rounded-2xl overflow-hidden mb-4">
                  {teacher.image && !imageError ? (
                    <>
                      <img 
                        src={teacher.image} 
                        alt={teacher.name}
                        className={`w-full h-full object-cover ${
                          imageLoaded ? 'opacity-100' : 'opacity-0'
                        } transition-opacity duration-300`}
                        onLoad={() => setImageLoaded(true)}
                        onError={handleImageError}
                      />
                      {!imageLoaded && (
                        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                          <FaSpinner className="text-gray-400 text-2xl animate-spin" />
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                      <FaGraduationCap className="text-white text-6xl" />
                    </div>
                  )}
                </div>

                {/* Основная информация */}
                <div className="space-y-4">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-1">{teacher.name}</h1>
                    <p className="text-lg text-gray-600 font-medium">{teacher.subject}</p>
                  </div>

                  {teacher.experience && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaAward className="text-blue-500" />
                      <span className="font-medium">{teacher.experience}</span>
                    </div>
                  )}

                  {/* Социальные сети (если есть) */}
                  <div className="flex gap-3 pt-2">
                    {teacher.linkedin && (
                      <a href={teacher.linkedin} target="_blank" rel="noopener noreferrer" 
                         className="p-2 bg-gray-100 hover:bg-blue-100 rounded-lg transition-colors">
                        <FaLinkedin className="text-blue-600 text-lg" />
                      </a>
                    )}
                    {teacher.website && (
                      <a href={teacher.website} target="_blank" rel="noopener noreferrer"
                         className="p-2 bg-gray-100 hover:bg-green-100 rounded-lg transition-colors">
                        <FaGlobe className="text-green-600 text-lg" />
                      </a>
                    )}
                    {teacher.email && (
                      <a href={`mailto:${teacher.email}`}
                         className="p-2 bg-gray-100 hover:bg-red-100 rounded-lg transition-colors">
                        <FaEnvelope className="text-red-600 text-lg" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Правая колонка - детальная информация */}
              <div className="lg:w-2/3 space-y-6">
                {/* Описание */}
                {teacher.description && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <FaGraduationCap className="text-blue-500" />
                    {t('teachers.about')} {/* например: "О преподавателе" */}
                  </h3>
                    <p className="text-gray-600 leading-relaxed">{teacher.description}</p>
                  </div>
                )}

                {/* Достижения */}
                {teacher.achievements && teacher.achievements.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <FaAward className="text-yellow-500" />
                      {t('teachers.modal.achievements')}
                    </h3>
                    <ul className="space-y-2">
                      {teacher.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-600">
                          <span className="text-blue-500 mt-1 flex-shrink-0">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Образование */}
                {teacher.education && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <FaGraduationCap className="text-green-500" />
                      {t('teachers.modal.education')}
                    </h3>       
                    <p className="text-gray-600">{teacher.education}</p>
                  </div>
                )}

                {/* Методика преподавания */}
                {teacher.teaching_method && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <FaChalkboardTeacher className="text-purple-500" />
                      {t('teachers.modal.method')}
                    </h3>
                    <p className="text-gray-600">{teacher.teaching_method}</p>
                  </div>
                )}

                {/* Дополнительная информация */}
                {teacher.additional_info && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('teachers.modal.additional')}</h3>

                    <p className="text-gray-600">{teacher.additional_info}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Компонент состояния загрузки
const LoadingState = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
        />
        <p className="text-gray-600">{t('teachers.loading')}</p>
      </div>
    </div>
  );
};

// Компонент состояния ошибки
const ErrorState = ({ error, onRetry }) => {
  const { t } = useTranslation(); 

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center max-w-md mx-auto">
        <FaExclamationTriangle className="text-red-500 text-5xl mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-800 mb-2">{t('teachers.error.title')}</h3>
        <p className="text-gray-600 mb-4">{t('teachers.error.text', { error })}</p>
        <button
          onClick={onRetry}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          {t('teachers.error.retry')}
        </button>
      </div>
    </div>
  );
};


// Компонент пустого состояния
const EmptyState = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center py-20">
      <FaGraduationCap className="text-gray-400 text-6xl mx-auto mb-4" />
      <h3 className="text-2xl font-bold text-gray-600 mb-2">{t('teachers.empty.title')}</h3>
      <p className="text-gray-500">{t('teachers.empty.subtitle')}</p>
    </div>
  );
};


export default TeachersSection;