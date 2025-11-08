import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageManager } from '../seo/LanguageManager';

const LanguageRouter = ({ children }) => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Определить язык из URL
    const currentLang = LanguageManager.getLanguageFromUrl(location.pathname);
    
    // Если язык в URL отличается от текущего языка i18n, обновить i18n
    if (currentLang !== i18n.language) {
      i18n.changeLanguage(currentLang);
    }
  }, [location.pathname, i18n]);

  // Функция для переключения языка с обновлением URL
  const changeLanguageWithUrl = (newLang) => {
    const cleanPath = LanguageManager.getCleanPath(location.pathname);
    const newUrl = LanguageManager.getLocalizedUrl(cleanPath, newLang);
    
    // Обновить i18n
    i18n.changeLanguage(newLang);
    
    // Навигация к новому URL
    const newPath = newLang === 'ru' ? cleanPath : `/${newLang}${cleanPath}`;
    navigate(newPath);
  };

  return React.cloneElement(children, { 
    currentLanguage: i18n.language,
    changeLanguage: changeLanguageWithUrl
  });
};

export default LanguageRouter;