import { useTranslation } from 'react-i18next';
import { getSEOConfig, generateAlternateUrls } from './seoConfig';

export const useSEO = (pageKey, customPath = '') => {
  const { i18n } = useTranslation();
  const seoData = getSEOConfig(pageKey, i18n.language);
  const alternateUrls = generateAlternateUrls(customPath);
  const baseUrl = 'https://www.su-college.com';
  
  return {
    seoData,
    alternateUrls,
    seoProps: {
      title: seoData?.title,
      description: seoData?.description,
      keywords: seoData?.keywords,
      url: `${baseUrl}${customPath}`,
      alternateUrls,
      locale: i18n.language
    }
  };
};