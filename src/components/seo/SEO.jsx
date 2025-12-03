import React from 'react';
import { Helmet } from 'react-helmet';
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
      siteName: 'Салымбеков Колледж | Международный Колледж IT и Бизнеса',
      defaultTitle: 'Салымбеков Колледж | Колледж Салымбекова | Международный Колледж IT и Бизнеса',
      defaultDescription: 'Салымбеков Колледж - ведущий международный колледж IT и бизнеса в Кыргызстане. Двойные дипломы с Lincoln и INTI университетами. Колледж Салымбеков Университет.',
      defaultKeywords: 'Салымбеков колледж, Колледж Салымбекова, Колледж Салымбеков университет, Колледж IT и бизнеса, международный колледж, компьютерная наука, мультимедиа, мобильные приложения, двойной диплом, Lincoln университет, INTI университет, IT образование Кыргызстан, бизнес образование, программирование, веб-разработка, колледж Бишкек, IT колледж Кыргызстан'
    },
    en: {
      siteName: 'Salymbekov College | International College of IT and Business',
      defaultTitle: 'Salymbekov College | Salymbekov College | International College of IT and Business',
      defaultDescription: 'Salymbekov College - leading international college of IT and business in Kyrgyzstan. Double degrees with Lincoln and INTI universities.',
      defaultKeywords: 'Salymbekov college, Salymbekov college, Salymbekov university college, IT and business college, international college, computer science, multimedia, mobile applications, double degree, Lincoln university, INTI university, IT education Kyrgyzstan, business education, programming, web development'
    },
    kg: {
      siteName: 'Салымбеков Колледжи | Эларалык IT жана Бизнес Колледжи',
      defaultTitle: 'Салымбеков Колледжи | Салымбеков Колледжи | Эларалык IT жана Бизнес Колледжи',
      defaultDescription: 'Салымбеков Колледжи - Кыргызстандагы IT жана бизнес тармагындагы алдыңкы эларалык колледж. Lincoln жана INTI университеттери менен кош дипломдор.',
      defaultKeywords: 'Салымбеков колледжи, Салымбеков колледжи, Салымбеков университети колледжи, IT жана бизнес колледжи, эларалык колледж, компьютер илими, мультимедиа, мобилдик колдонмолор, кош диплом, Lincoln университети, INTI университети, IT билим берүү Кыргызстан, бизнес билим берүү, программалоо, веб иштеп чыгуу'
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
          "name": "Салымбеков Колледж",
          "alternateName": ["Колледж Салымбекова", "Колледж Салымбеков Университет", "Международный Колледж IT и Бизнеса", "Salymbekov College"],
          "description": "Ведущий международный колледж информационных технологий и бизнеса в Кыргызстане. Двойные дипломы с Lincoln и INTI университетами.",
          "url": baseUrl,
          "logo": `${baseUrl}/images/logo.png`,
          "image": seoImage,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "ул. Малдыбаева 24б",
            "addressLocality": "Бишкек",
            "addressRegion": "Чуйская область",
            "postalCode": "720000",
            "addressCountry": "KG"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+996-706-998-889",
            "contactType": "admissions",
            "availableLanguage": ["Russian", "English", "Kyrgyz"]
          },
          "sameAs": [
            "https://facebook.com/salymbekovuniversity",
            "https://instagram.com/salymbekovuniversity",
            "https://t.me/salymbekovuniversity",
            "https://wa.me/996706998889"
          ],
          "educationalCredentialAwarded": "Двойной диплом",
          "hasEducationalUse": "Высшее образование",
          "knowsAbout": [
            "Компьютерная наука",
            "Бизнес образование",
            "IT технологии",
            "Программирование",
            "Веб-разработка"
          ],
          "areaServed": {
            "@type": "Country",
            "name": "Кыргызстан"
          },
          "foundingDate": "2020",
          "numberOfStudents": "500"
        })}
      </script>
    </Helmet>
  );
};

export default SEO;