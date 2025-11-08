import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageManager } from '../seo/LanguageManager';

const LanguageSwitcher = ({ languages, className = '' }) => {
  const { i18n } = useTranslation();
  const location = useLocation();

  const handleLanguageChange = (newLang) => {
    // Получить чистый путь без языкового префикса
    const cleanPath = LanguageManager.getCleanPath(location.pathname);
    
    // Создать новый URL с языковым префиксом
    const newPath = newLang === 'ru' ? cleanPath || '/' : `/${newLang}${cleanPath || '/'}`;
    
    // Обновить язык и перенаправить
    i18n.changeLanguage(newLang);
    window.location.href = newPath;
  };

  const getCurrentLanguageFromUrl = () => {
    return LanguageManager.getLanguageFromUrl(location.pathname);
  };

  const currentLang = getCurrentLanguageFromUrl();

  return (
    <div className={`language-switcher ${className}`}>
      <div className="flex items-center space-x-2">
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`
              px-3 py-2 text-sm font-medium rounded-md transition-colors
              ${currentLang === language.code
                ? 'bg-blue-600 text-white' 
                : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
              }
            `}
            title={`Переключить на ${language.name}`}
          >
            {language.name}
          </button>
        ))}
      </div>
      
      {/* Отладочная информация */}
      {import.meta.env.DEV && (
        <div className="text-xs text-gray-500 mt-1">
          Current: {currentLang} | Path: {location.pathname}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;