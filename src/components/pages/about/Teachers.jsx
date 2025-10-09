// TeachersSection.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const TeachersSection = () => {
  const { t } = useTranslation();

  // Динамические данные преподавателей
  const teachers = [
    {
      id: 1,
      name: t('teachers.ivanov.name'),
      subject: t('teachers.ivanov.subject'),
      image: '/images/teachers/teacher1.jpg',
      experience: t('teachers.ivanov.experience'),
      description: t('teachers.ivanov.description')
    },
    {
      id: 2,
      name: t('teachers.petrov.name'),
      subject: t('teachers.petrov.subject'),
      image: '/images/teachers/teacher2.jpg',
      experience: t('teachers.petrov.experience'),
      description: t('teachers.petrov.description')
    },
    {
      id: 3,
      name: t('teachers.sidorova.name'),
      subject: t('teachers.sidorova.subject'),
      image: '/images/teachers/teacher3.jpg',
      experience: t('teachers.sidorova.experience'),
      description: t('teachers.sidorova.description')
    },
    {
      id: 4,
      name: t('teachers.kuznetsov.name'),
      subject: t('teachers.kuznetsov.subject'),
      image: '/images/teachers/teacher4.jpg',
      experience: t('teachers.kuznetsov.experience'),
      description: t('teachers.kuznetsov.description')
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            {t('teachers.title')}
          </h1>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            {t('teachers.subtitle')}
          </p>
        </div>

        {/* Сетка карточек преподавателей */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Компонент карточки преподавателя
const TeacherCard = ({ teacher }) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-blue-100">
      {/* Аватар */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={teacher.image}
          alt={teacher.name}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Бейдж опыта */}
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {teacher.experience}
        </div>
      </div>

      {/* Информация */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">
          {teacher.name}
        </h3>
        
        <div className="flex items-center mb-3">
          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
          <span className="text-blue-600 font-medium text-lg">
            {teacher.subject}
          </span>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {teacher.description}
        </p>
      </div>
    </div>
  );
};

export default TeachersSection;