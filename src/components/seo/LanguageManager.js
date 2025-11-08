// Утилита для управления языковыми версиями URL и SEO
import { seoConfig } from './seoConfig';

export const LanguageManager = {
  // Получить языковую версию URL
  getLocalizedUrl: (path, language = 'ru') => {
    const baseUrl = 'https://www.su-college.com';
    const langPrefix = language === 'ru' ? '' : `/${language}`;
    return `${baseUrl}${langPrefix}${path}`;
  },

  // Генерировать hreflang теги для всех языков
  generateHreflangTags: (path) => {
    const languages = ['ru', 'en', 'kg'];
    const hreflangMap = {};
    
    languages.forEach(lang => {
      hreflangMap[lang] = LanguageManager.getLocalizedUrl(path, lang);
    });
    
    // Добавить x-default
    hreflangMap['x-default'] = LanguageManager.getLocalizedUrl(path, 'ru');
    
    return hreflangMap;
  },

  // Получить мета-данные для текущего языка
  getMetaData: (pageKey, language = 'ru') => {
    const config = seoConfig[pageKey];
    if (!config) return null;
    
    const langData = config[language] || config.ru;
    return {
      ...langData,
      url: LanguageManager.getLocalizedUrl('', language),
      hreflang: LanguageManager.generateHreflangTags('')
    };
  },

  // Проверить, является ли текущий язык поддерживаемым
  isSupportedLanguage: (language) => {
    return ['ru', 'en', 'kg'].includes(language);
  },

  // Получить язык по умолчанию
  getDefaultLanguage: () => 'ru',

  // Определить язык из URL
  getLanguageFromUrl: (pathname) => {
    const pathSegments = pathname.split('/').filter(Boolean);
    const firstSegment = pathSegments[0];
    
    if (LanguageManager.isSupportedLanguage(firstSegment)) {
      return firstSegment;
    }
    
    return LanguageManager.getDefaultLanguage();
  },

  // Очистить URL от языкового префикса
  getCleanPath: (pathname) => {
    const pathSegments = pathname.split('/').filter(Boolean);
    const firstSegment = pathSegments[0];
    
    if (LanguageManager.isSupportedLanguage(firstSegment)) {
      return '/' + pathSegments.slice(1).join('/');
    }
    
    return pathname;
  }
};

// Конфигурация для Open Graph изображений по типам страниц
export const OGImageConfig = {
  home: '/images/og/home-og.jpg',
  about: '/images/og/about-og.jpg',
  news: '/images/og/news-og.jpg',
  programs: '/images/og/programs-og.jpg',
  admissions: '/images/og/admissions-og.jpg',
  student: '/images/og/student-og.jpg',
  contacts: '/images/og/contacts-og.jpg',
  faq: '/images/og/faq-og.jpg',
  vacancies: '/images/og/vacancies-og.jpg',
  default: '/images/og/default-og.jpg'
};

// SEO хелперы для конкретных типов страниц
export const SEOHelpers = {
  // Генерировать мета-теги для страницы новостей
  generateNewsSEO: (newsItem, language = 'ru') => {
    return {
      title: newsItem.title,
      description: newsItem.excerpt || newsItem.description,
      keywords: `новости колледжа, ${newsItem.title}, IT новости, образование`,
      image: newsItem.image,
      type: 'article',
      structuredData: {
        type: 'NewsArticle',
        data: {
          headline: newsItem.title,
          description: newsItem.description,
          image: newsItem.image,
          datePublished: newsItem.created_at,
          dateModified: newsItem.updated_at
        }
      }
    };
  },

  // Генерировать мета-теги для программ обучения
  generateProgramSEO: (program, language = 'ru') => {
    return {
      title: program.title,
      description: program.description,
      keywords: `${program.title}, IT программа, обучение программированию, колледж`,
      image: program.image,
      type: 'website',
      structuredData: {
        type: 'Course',
        data: {
          name: program.title,
          description: program.description,
          teaches: program.skills || [],
          duration: program.duration
        }
      }
    };
  },

  // Генерировать мета-теги для FAQ
  generateFAQSEO: (faqData, language = 'ru') => {
    const baseConfig = seoConfig.faq[language] || seoConfig.faq.ru;
    return {
      ...baseConfig,
      structuredData: {
        type: 'FAQPage',
        data: {
          questions: faqData.map(item => ({
            question: item.question,
            answer: item.answer
          }))
        }
      }
    };
  }
};

export default LanguageManager;