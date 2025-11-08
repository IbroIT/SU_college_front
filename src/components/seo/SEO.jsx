import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  locale,
  alternateUrls = {}
}) => {
  const { i18n } = useTranslation();
  
  const currentLang = locale || i18n.language;
  const baseUrl = 'https://www.su-college.com';
  
  // Дефолтные значения для каждого языка
  const seoDefaults = {
    ru: {
      siteName: 'Международный колледж IT и бизнеса - Салымбеков Университет',
      defaultTitle: 'Международный колледж IT и бизнеса | Салымбеков Университет',
      defaultDescription: 'Международный колледж информационных технологий и бизнеса при Салымбеков Университете. Двойные дипломы, программы на английском языке, партнерство с Lincoln и INTI университетами.',
      defaultKeywords: 'колледж, IT образование, компьютерная наука, мультимедиа, мобильные приложения, международный диплом, Салымбеков Университет, Lincoln University, INTI, программирование, веб разработка'
    },
    en: {
      siteName: 'International College of IT and Business - Salymbekov University',
      defaultTitle: 'International College of IT and Business | Salymbekov University',
      defaultDescription: 'International College of Information Technology and Business at Salymbekov University. Double degrees, English-taught programs, partnership with Lincoln and INTI universities.',
      defaultKeywords: 'college, IT education, computer science, multimedia, mobile applications, international degree, Salymbekov University, Lincoln University, INTI, programming, web development'
    },
    kg: {
      siteName: 'Эларалык IT жана бизнес колледжи - Салымбеков Университети',
      defaultTitle: 'Эларалык IT жана бизнес колледжи | Салымбеков Университети',
      defaultDescription: 'Салымбеков Университетиндеги Эларалык информатика технологиялары жана бизнес колледжи. Кош дипломдор, англис тилиндеги программалар, Lincoln жана INTI университеттери менен өнөктөштүк.',
      defaultKeywords: 'колледж, IT билим берүү, компьютер илими, мультимедиа, мобилдик колдонмолор, эларалык диплом, Салымбеков Университети, Lincoln University, INTI, программалоо, веб иштеп чыгуу'
    }
  };

  const defaults = seoDefaults[currentLang] || seoDefaults.ru;
  
  const seoTitle = title ? `${title} | ${defaults.siteName}` : defaults.defaultTitle;
  const seoDescription = description || defaults.defaultDescription;
  const seoKeywords = keywords || defaults.defaultKeywords;
  const seoImage = image || `${baseUrl}/images/og-image.jpg`;
  const seoUrl = url || baseUrl;

  return (
    <Helmet>
      {/* Основные мета теги */}
      <html lang={currentLang} />
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content="Салымбеков Университет" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph теги */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={defaults.siteName} />
      <meta property="og:locale" content={currentLang === 'ru' ? 'ru_RU' : currentLang === 'kg' ? 'ky_KG' : 'en_US'} />
      
      {/* Twitter теги */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seoUrl} />
      
      {/* Альтернативные языковые версии */}
      {Object.keys(alternateUrls).map(lang => (
        <link key={lang} rel="alternate" hrefLang={lang} href={alternateUrls[lang]} />
      ))}
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": defaults.siteName,
          "description": seoDescription,
          "url": baseUrl,
          "logo": `${baseUrl}/images/logo.png`,
          "image": seoImage,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "ул. Токтогула 164/1",
            "addressLocality": "Бишкек",
            "addressCountry": "KG"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+996 312 545454",
            "contactType": "customer service",
            "availableLanguage": ["Russian", "English", "Kyrgyz"]
          },
          "sameAs": [
            "https://www.facebook.com/salymbekov.university",
            "https://www.instagram.com/salymbekov_university"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;