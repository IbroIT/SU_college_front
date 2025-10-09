import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import './SpecialtiesPage.css';

const SpecialtyDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [isVisible, setIsVisible] = useState(false);
  const [activeCourse, setActiveCourse] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, [id]);

  const specialtiesData = {
    'computer-science': {
      title: t('specialties.computerScience.title'),
      description: t('specialties.computerScience.shortDescription'),
      about: t('specialties.computerScience.about'),
      image: '/images/specialties/computer-science.jpg',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      color: 'blue',
      courses: [
        {
          title: t('specialties.computerScience.courses.foundations.title'),
          description: t('specialties.computerScience.courses.foundations.description'),
          image: '/images/courses/cs-foundations.jpg'
        },
        {
          title: t('specialties.computerScience.courses.ai.title'),
          description: t('specialties.computerScience.courses.ai.description'),
          image: '/images/courses/cs-ai.jpg'
        },
        {
          title: t('specialties.computerScience.courses.web.title'),
          description: t('specialties.computerScience.courses.web.description'),
          image: '/images/courses/cs-web.jpg'
        },
        {
          title: t('specialties.computerScience.courses.mobile.title'),
          description: t('specialties.computerScience.courses.mobile.description'),
          image: '/images/courses/cs-mobile.jpg'
        }
      ]
    },
    'multimedia': {
      title: t('specialties.multimedia.title'),
      description: t('specialties.multimedia.shortDescription'),
      about: t('specialties.multimedia.about'),
      image: '/images/specialties/multimedia.jpg',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </svg>
      ),
      color: 'purple',
      courses: [
        {
          title: t('specialties.multimedia.courses.design.title'),
          description: t('specialties.multimedia.courses.design.description'),
          image: '/images/courses/mm-design.jpg'
        },
        {
          title: t('specialties.multimedia.courses.video.title'),
          description: t('specialties.multimedia.courses.video.description'),
          image: '/images/courses/mm-video.jpg'
        },
        {
          title: t('specialties.multimedia.courses.vr.title'),
          description: t('specialties.multimedia.courses.vr.description'),
          image: '/images/courses/mm-vr.jpg'
        },
        {
          title: t('specialties.multimedia.courses.ar.title'),
          description: t('specialties.multimedia.courses.ar.description'),
          image: '/images/courses/mm-ar.jpg'
        }
      ]
    },
    'mobile-development': {
      title: t('specialties.mobileDevelopment.title'),
      description: t('specialties.mobileDevelopment.shortDescription'),
      about: t('specialties.mobileDevelopment.about'),
      image: '/images/specialties/mobile-development.jpg',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      color: 'green',
      courses: [
        {
          title: t('specialties.mobileDevelopment.courses.foundations.title'),
          description: t('specialties.mobileDevelopment.courses.foundations.description'),
          image: '/images/courses/md-foundations.jpg'
        },
        {
          title: t('specialties.mobileDevelopment.courses.reactNative.title'),
          description: t('specialties.mobileDevelopment.courses.reactNative.description'),
          image: '/images/courses/md-react.jpg'
        },
        {
          title: t('specialties.mobileDevelopment.courses.ios.title'),
          description: t('specialties.mobileDevelopment.courses.ios.description'),
          image: '/images/courses/md-ios.jpg'
        },
        {
          title: t('specialties.mobileDevelopment.courses.android.title'),
          description: t('specialties.mobileDevelopment.courses.android.description'),
          image: '/images/courses/md-android.jpg'
        }
      ]
    }
  };

  const specialty = specialtiesData[id];

  if (!specialty) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Специальность не найдена</p>
          <Link to="/admissions/specialties" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Вернуться к специальностям
          </Link>
        </div>
      </div>
    );
  }

  const colorClasses = {
    blue: {
      gradient: 'from-blue-500 to-blue-700',
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      border: 'border-blue-200',
      light: 'bg-blue-500/10'
    },
    purple: {
      gradient: 'from-purple-500 to-purple-700',
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      border: 'border-purple-200',
      light: 'bg-purple-500/10'
    },
    green: {
      gradient: 'from-green-500 to-green-700',
      bg: 'bg-green-50',
      text: 'text-green-600',
      border: 'border-green-200',
      light: 'bg-green-500/10'
    }
  };

  const colors = colorClasses[specialty.color];

  return (
    <div className="specialty-detail min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <Link 
            to="/admissions/specialties" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-all duration-300 group"
          >
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('specialties.backToSpecialties')}
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`relative py-20 bg-gradient-to-r ${colors.gradient} text-white overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm mr-4">
                {specialty.icon}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">{specialty.title}</h1>
            </div>
            <p className="text-xl text-blue-100 opacity-90 max-w-2xl">{specialty.description}</p>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-36 translate-x-36"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48"></div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <section className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="p-2 bg-blue-100 rounded-xl mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                О программе
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                {specialty.about}
              </p>
            </section>

            {/* Courses Section */}
            <section className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="p-2 bg-blue-100 rounded-xl mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                Ключевые курсы
              </h2>
              
              {/* Course Navigation */}
              <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
                {specialty.courses.map((course, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCourse(index)}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 whitespace-nowrap ${
                      activeCourse === index
                        ? `${colors.bg} ${colors.text} shadow-md`
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {course.title.split(' ').slice(0, 2).join(' ')}
                  </button>
                ))}
              </div>

              {/* Course Content */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-6">
                    <h3 className={`text-2xl font-bold ${colors.text} mb-4`}>
                      {specialty.courses[activeCourse].title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {specialty.courses[activeCourse].description}
                    </p>
                    <div className="flex space-x-2">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        Обязательный
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        144 часа
                      </span>
                    </div>
                  </div>
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={specialty.courses[activeCourse].image}
                      alt={specialty.courses[activeCourse].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/10"></div>
                  </div>
                </div>
              </div>

              {/* Course Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {specialty.courses.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCourse(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeCourse === index
                        ? `${colors.bg} scale-125`
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <div className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 border border-white/20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Информация
              </h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600 p-3 rounded-xl bg-gray-50/50">
                  <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <div className="font-semibold">Срок обучения</div>
                    <div className="text-sm text-gray-500">4 года (бакалавриат)</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-600 p-3 rounded-xl bg-gray-50/50">
                  <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <div className="font-semibold">Студентов</div>
                    <div className="text-sm text-gray-500">120+ на потоке</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-600 p-3 rounded-xl bg-gray-50/50">
                  <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                  <div>
                    <div className="font-semibold">Диплом</div>
                    <div className="text-sm text-gray-500">Государственного образца</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className={`bg-gradient-to-r ${colors.gradient} rounded-3xl shadow-xl p-6 text-white transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h3 className="text-xl font-bold mb-4">Готовы начать?</h3>
              <p className="mb-4 opacity-90 text-blue-100">Присоединяйтесь к нашей программе и начните свой путь в IT</p>
              <button className="w-full bg-white text-blue-600 py-3 px-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Подать заявку</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialtyDetail;
