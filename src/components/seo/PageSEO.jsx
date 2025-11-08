import React from 'react';
import SEO from './SEO';
import StructuredData from './StructuredData';
import { useSEO } from './useSEO';
import { LanguageManager, OGImageConfig } from './LanguageManager';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const PageSEO = ({ 
  pageKey, 
  customTitle, 
  customDescription, 
  customKeywords,
  customImage,
  structuredDataType,
  structuredDataProps = {},
  type = 'website'
}) => {
  const { i18n } = useTranslation();
  const location = useLocation();
  
  // Получить базовые SEO данные
  const { seoProps } = useSEO(pageKey, location.pathname);
  
  // Переопределить данные если переданы кастомные
  const finalSEOProps = {
    ...seoProps,
    title: customTitle || seoProps.title,
    description: customDescription || seoProps.description,
    keywords: customKeywords || seoProps.keywords,
    image: customImage || OGImageConfig[pageKey] || OGImageConfig.default,
    type
  };

  // Генерировать языковые альтернативы для текущего пути
  const cleanPath = LanguageManager.getCleanPath(location.pathname);
  const alternateUrls = LanguageManager.generateHreflangTags(cleanPath);
  
  return (
    <>
      <SEO 
        {...finalSEOProps}
        alternateUrls={alternateUrls}
      />
      
      {structuredDataType && (
        <StructuredData 
          type={structuredDataType}
          data={structuredDataProps}
        />
      )}
    </>
  );
};

export default PageSEO;