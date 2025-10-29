import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import DefaultLogo from "../../assets/logo-salymbekov-university-site2.png";
import ScrolledLogo from "../../assets/Logo_white3.png";

const Navbar = ({ currentLanguage, languages = [], changeLanguage }) => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [nestedMenu, setNestedMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const menuRef = useRef(null);
  const langRef = useRef(null);

  useEffect(() => {
    if (currentLanguage && i18n.language !== currentLanguage) {
      i18n.changeLanguage(currentLanguage);
    }
  }, [currentLanguage, i18n]);

  const handleLanguageChange = (langCode) => {
    if (changeLanguage) {
      changeLanguage(langCode);
    } else {
      i18n.changeLanguage(langCode);
    }
    setIsLangOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
        setNestedMenu(null);
      }
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Данные меню для Международного Колледжа IT и бизнеса
  const menuData = {
    about: {
      title: t('nav.about_college', 'О колледже'),
      submenu: [
        { title: t('nav.salymbekov_university', 'Салымбеков Университет'), link: 'https://salymbekov.com/en/' },
        { title: t('nav.about_college', 'О колледже'), link: '/about' },
        { title: t('nav.director_letter', 'Письмо Директора'), link: '/about/director-letter' },
        { title: t('nav.teachers', 'Преподаватели'), link: '/about/teachers' },
        { title: t('nav.news', 'Новости'), link: '/news' },
        { 
          title: t('nav.our_partners', 'Наши партнеры'), 
          hasNested: true,
          nestedItems: [
            { title: 'Lincoln University', link: 'https://www.lincoln.edu.my' },
            { title: 'INTI University', link: 'https://newinti.edu.my' },
          ]
        },
      ]
    },
    applicant: {
      title: t('nav.applicant', 'Абитуриенту'),
      submenu: [
        { title: t('nav.admission_committee', 'Приемная комиссия'), link: '/admissions/committee' },
        { 
          title: t('nav.programs', 'Программы'), 
          hasNested: true,
          nestedItems: [
            { title: t('nav.computer_science', 'Компьютерная наука'), link: '/programs/computer-science' },
            { title: t('nav.multimedia_programs', 'Мультимедийные программы'), link: '/programs/multimedia' },
            { title: t('nav.mobile_applications', 'Мобильные приложения'), link: '/programs/mobile' },
            { title: t('nav.webdev', 'Веб-разработка'), link: '/programs/webdev' },
            { title: t('nav.business', 'Бизнес'), link: '/programs/business' },
          ]
        },
        { title: t('nav.admission_rules', 'Правила и план приема'), link: '/admissions/rules' },
        { title: t('nav.required_documents', 'Необходимые документы'), link: '/admissions/documents' },
        { title: t('nav.selection_schedule', 'График отбора'), link: '/admissions/schedule' },
        { title: t('nav.tuition_fees', 'Стоимость обучения'), link: '/admissions/tuition' },
      ]
    },
    student: {
      title: t('nav.student', 'Студенту'),
      submenu: [
        { title: t('nav.student_projects', 'Проекты наших студентов'), link: '/student/projects' },
          {title: t('nav.info_system', 'Информационная система'), 
            hasNested: true,
            nestedItems: [
              { title: 'Ebilim', link: 'https://ebilim.salymbekov.com/Account/Login?ReturnUrl=%2F' },
              { title: 'Lincoln', link: 'https://online.collaborative.lincoln.edu.my' },
    ]
  },
        { 
          title: t('nav.student_communities', 'Студенческие сообщества'), 
          hasNested: true,
          nestedItems: [
            { title: t('nav.student_council', 'Студенческий совет'), link: '/student/council' },
            { title: t('nav.debate_club', 'Дебатный клуб'), link: '/student/debate' },
            { title: t('nav.creative_groups', 'Творческие коллективы и кружки'), link: '/student/creative' },
          ]
        },
        { title: t('nav.report_2024', 'Отчет с диаграммами 2024'), link: '/student/report-2024' },
        { 
          title: t('nav.electronic_resources', 'Электронные ресурсы'), 
          hasNested: true,
          nestedItems: [
            { title: t('nav.instructions', 'Инструкция и положения'), link: '/student/instructions' },
            { title: t('nav.educational_resources', 'Образовательные ресурсы'), link: '/student/resources' },
          ]
        },
        { 
          title: t('nav.schedules', 'Графики и расписания'), 
          hasNested: true,
          nestedItems: [
            { title: t('nav.modules_exams', 'Графики модулей и экзаменов'), link: '/student/modules' },
            { title: t('nav.college_schedule', 'Расписание колледжа'), link: '/student/timetable' },
            { title: t('nav.academic_calendar', 'График учебного процесса'), link: '/student/calendar' },
          ]
        },
      ]
    },
    documents: {
      title: t('nav.documents', 'Документы'),
      submenu: [
        { 
          title: t('nav.curriculum', 'Учебные планы'), 
          hasNested: true,
          nestedItems: [
            { title: t('nav.computer_science', 'Компьютерная наука'), link: '/curriculum/computer-science' },
            { title: t('nav.multimedia_computing', 'Мультимедийные Вычисления'), link: '/curriculum/multimedia-computing' },
            { title: t('nav.multimedia_programs', 'Мультимедийные программы'), link: '/curriculum/multimedia-programs' },
            { title: 'Diploma Multimedia Programs', link: '/curriculum/diploma-multimedia' },
            { title: 'Diploma Mobile Computing', link: '/curriculum/diploma-mobile' },
            { title: 'Diploma Computer Science', link: '/curriculum/diploma-cs' },
          ]
        },
        { title: t('nav.license', 'Лицензия'), link: '/documents/license' },
        { title: t('nav.international_accreditation', 'Международная институциональная аккредитация'), link: '/documents/accreditation' },
        { title: t('nav.program_accreditation', 'Программная аккредитация'), link: '/documents/program-accreditation' },
      ]
    },
    contacts: {
      title: t('nav.contacts', 'Контакты'),
      submenu: [
        { title: t('nav.contacts', 'Контакты'), link: '/contacts' },
        { title: t('nav.faq', 'Вопросы и ответы'), link: '/faq' },
        { title: t('nav.vacancies', 'Вакансии'), link: '/vacancies' },
      ]
    }
  };

  return (
    <nav
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white py-2 shadow-lg border-b border-blue-100'
          : 'bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 py-1'
      }`}
      ref={menuRef}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Логотип - левая часть */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center group">
              <div
                className="h-14 px-3 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
              >
                <img
                  src={isScrolled ? DefaultLogo : ScrolledLogo}
                  alt="Logo"
                  className="h-10 w-auto object-contain transition-opacity duration-300"
                />
              </div>
            </a>
          </div>

          {/* Центральное меню - скрыто на мобильных */}
          <div className="flex items-center space-x-6">
            <div className="hidden min-[1000px]:flex flex-1 justify-center">
              {Object.entries(menuData).map(([key, item]) => (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => {
                    setActiveMenu(key);
                    setHoveredMenu(key);
                  }}
                  onMouseLeave={() => {
                    setHoveredMenu(null);
                    setTimeout(() => {
                      if (hoveredMenu !== key) {
                        setActiveMenu(null);
                        setNestedMenu(null);
                      }
                    }, 200);
                  }}
                >
                  {/* Все пункты меню имеют выпадающее меню */}
                  <>
                    <button
                      className={`relative px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 group ${
                        activeMenu === key
                          ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg'
                          : isScrolled
                            ? 'text-blue-800 hover:text-blue-700 hover:bg-blue-50'
                            : 'text-white hover:text-white hover:bg-white/20'
                      }`}
                    >
                      <span className="relative z-10">{item.title}</span> 
                    </button>
                    
                    {/* Выпадающее меню с анимацией */}
                    {activeMenu === key && (
                      <div
                        className="absolute left-1/2 transform -translate-x-1/2 mt-2 min-w-[18rem] rounded-xl shadow-2xl bg-white/95 backdrop-blur-md ring-1 ring-blue-100 overflow-visible z-50 transition-all duration-300"
                        style={{ transformOrigin: 'top center' }}
                        onMouseEnter={() => setActiveMenu(key)}
                        onMouseLeave={() => {
                          setActiveMenu(null);
                          setNestedMenu(null);
                        }}
                      >
                        <div className="py-2">
                          {item.submenu.map((subItem, index) => (
                            <div
                              key={index}
                              className="relative"
                              onMouseEnter={() => {
                                if (subItem.hasNested) setNestedMenu(`${key}-${index}`);
                                else setNestedMenu(null);
                              }}
                              onMouseLeave={() => {
                                setNestedMenu(prev => (prev === `${key}-${index}` ? null : prev));
                              }}
                            >
                              {subItem.hasNested ? (
                                <>
                                  <button
                                    className="flex justify-between items-center w-full px-4 py-3 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 border-l-4 border-transparent hover:border-blue-500"
                                  >
                                    <span>{subItem.title}</span>
                                    <svg
                                      className="h-4 w-4 text-gray-400"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </button>

                                  {/* Вложенное меню */}
                                  {subItem.hasNested && nestedMenu === `${key}-${index}` && (
                                    <div
                                      className="absolute left-full top-0 ml-[1px] w-56 rounded-xl shadow-2xl bg-white/95 backdrop-blur-md ring-1 ring-blue-100 z-50 transition-all duration-200"
                                      onMouseEnter={() => setNestedMenu(`${key}-${index}`)}
                                      onMouseLeave={() => setNestedMenu(null)}
                                    >
                                      <div className="py-2">
                                        {subItem.nestedItems.map((nestedItem, nestedIndex) => (
                                          <a
                                            key={nestedIndex}
                                            href={nestedItem.link}
                                            className="block px-4 py-3 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 border-l-4 border-transparent hover:border-blue-600"
                                          >
                                            {nestedItem.title}
                                          </a>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </>
                              ) : (
                                <a
                                  href={subItem.link}
                                  className="flex justify-between items-center px-4 py-3 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 border-l-4 border-transparent hover:border-blue-500"
                                >
                                  <span>{subItem.title}</span>
                                </a>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                </div>
              ))}
            </div>
          </div>

          {/* Правая часть: язык и мобильное меню */}
          <div className="flex items-center space-x-3">
            {/* Переключатель языка */}
            <div className="relative" ref={langRef}>
              <LanguageSwitcher
                variant={isScrolled ? 'outline' : 'default'}
                showText={true}
                onChange={handleLanguageChange}
                languages={languages}
                currentLanguage={currentLanguage}
              />
            </div>

            {/* Кнопка мобильного меню */}
            <div className="block min-[1000px]:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`inline-flex items-center justify-center p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                  isScrolled
                    ? 'text-blue-700 hover:bg-blue-50 border border-blue-200'
                    : 'text-white hover:bg-white/20 border border-white/30'
                } focus:outline-none backdrop-blur-sm`}
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Мобильное меню с анимацией */}
      {isMenuOpen && (
        <div className="block min-[1000px]:hidden bg-gradient-to-b from-white to-blue-50/80 backdrop-blur-md shadow-xl border-t border-blue-100 transform transition-all duration-300 ease-out animate-in slide-in-from-top-2 fade-in">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {Object.entries(menuData).map(([key, item]) => (
              <div key={key} className="relative">
                {/* Кнопка с раскрывающимся меню для всех пунктов */}
                <>
                  <button
                    onClick={() => setActiveMenu(activeMenu === key ? null : key)}
                    className={`w-full text-left flex justify-between items-center px-4 py-4 rounded-xl text-base font-semibold transition-colors duration-200 border-l-4 ${
                      activeMenu === key
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg border-blue-500'
                        : 'text-blue-800 hover:bg-blue-50 hover:text-blue-700 border-transparent hover:border-blue-500'
                    }`}
                  >
                    {item.title}
                    <svg
                      className={`h-5 w-5 transition-transform duration-300 ${activeMenu === key ? 'rotate-180' : ''}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>

                  {activeMenu === key && (
                    <div className="pl-6 mt-2 space-y-2 transition-all duration-300">
                      {item.submenu.map((subItem, index) => (
                        <div key={index}>
                          {subItem.hasNested ? (
                            <div>
                              <button
                                onClick={() => setNestedMenu(nestedMenu === `${key}-${index}` ? null : `${key}-${index}`)}
                                className="w-full text-left flex justify-between items-center px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 border-l-4 border-transparent hover:border-blue-600"
                              >
                                {subItem.title}
                                <svg
                                  className={`h-4 w-4 transition-transform duration-300 ${nestedMenu === `${key}-${index}` ? 'rotate-90' : ''}`}
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </button>

                              {nestedMenu === `${key}-${index}` && (
                                <div className="pl-4 mt-1 space-y-1">
                                  {subItem.nestedItems.map((nestedItem, nestedIndex) => (
                                    <a
                                      key={nestedIndex}
                                      href={nestedItem.link}
                                      className="block px-4 py-3 rounded-lg text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 border-l-4 border-transparent hover:border-blue-600"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {nestedItem.title}
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            <a
                              href={subItem.link}
                              className="block px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 border-l-4 border-transparent hover:border-blue-500"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.title}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;