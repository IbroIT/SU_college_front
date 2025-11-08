// Главный индекс файл для всех SEO компонентов
export { default as SEO } from './SEO';
export { default as PageSEO } from './PageSEO';
export { default as StructuredData } from './StructuredData';
export { useSEO } from './useSEO';
export { seoConfig, getSEOConfig, generateAlternateUrls } from './seoConfig';
export { LanguageManager, OGImageConfig, SEOHelpers } from './LanguageManager';
export * from './SEOExamples';

// Для быстрого импорта всех SEO инструментов:
// import { PageSEO, SEO, StructuredData, useSEO } from '../seo';