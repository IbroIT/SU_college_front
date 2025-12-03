import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageManager } from '../seo/LanguageManager';

const LanguageDetector = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const hasInitialized = useRef(false);

  useEffect(() => {
    // Запускать только один раз при инициализации приложения
    if (hasInitialized.current) return;
    
    // Получить язык из URL
    const urlLanguage = LanguageManager.getLanguageFromUrl(location.pathname);
    
    // Если это первый визит (главная страница без языкового префикса)
    if (urlLanguage === 'ru' && location.pathname === '/') {
      // Определить предпочитаемый язык браузера
      const browserLanguage = navigator.language || navigator.languages?.[0];
      
      let preferredLang = 'ru'; // по умолчанию русский
      
      if (browserLanguage) {
        if (browserLanguage.startsWith('en')) {
          preferredLang = 'en';
        } else if (browserLanguage.startsWith('ky') || browserLanguage.startsWith('kg')) {
          preferredLang = 'kg';
        }
      }
      
      // Проверить сохраненный язык в localStorage
      const savedLanguage = localStorage.getItem('i18nextLng');
      if (savedLanguage && LanguageManager.isSupportedLanguage(savedLanguage)) {
        preferredLang = savedLanguage;
      }
      
      // Если предпочитаемый язык не русский, перенаправить
      if (preferredLang !== 'ru') {
        const newPath = `/${preferredLang}/`;
        navigate(newPath);
        i18n.changeLanguage(preferredLang);
      }
    }
    
    hasInitialized.current = true;
  }, []); // Пустой массив зависимостей - запускается только один раз

  return null; // Этот компонент ничего не рендерит
};

export default LanguageDetector;