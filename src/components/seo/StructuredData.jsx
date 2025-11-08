import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const StructuredData = ({ type, data }) => {
  const { i18n } = useTranslation();
  const baseUrl = 'https://www.su-college.com';
  
  const generateSchemaData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type
    };

    switch (type) {
      case 'EducationalOrganization':
        return {
          ...baseData,
          "name": "Международный колледж информационных технологий и бизнеса",
          "alternateName": "International College of IT and Business",
          "url": baseUrl,
          "logo": `${baseUrl}/images/logo.png`,
          "description": i18n.language === 'ru' 
            ? "Международный колледж информационных технологий и бизнеса при Салымбеков Университете. Двойные дипломы, программы на английском языке."
            : i18n.language === 'en'
            ? "International College of Information Technology and Business at Salymbekov University. Double degrees, English-taught programs."
            : "Салымбеков Университетиндеги Эларалык информатика технологиялары жана бизнес колледжи. Кош дипломдор, англис тилиндеги программалар.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "ул. Токтогула 164/1",
            "addressLocality": "Бишкек",
            "postalCode": "720001",
            "addressCountry": "KG"
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+996 312 545454",
              "contactType": "customer service",
              "availableLanguage": ["Russian", "English", "Kyrgyz"]
            }
          ],
          "sameAs": [
            "https://www.facebook.com/salymbekov.university",
            "https://www.instagram.com/salymbekov_university"
          ],
          "parentOrganization": {
            "@type": "University",
            "name": "Салымбеков Университет"
          },
          ...data
        };

      case 'Course':
        return {
          ...baseData,
          "name": data?.name || "IT Программы",
          "description": data?.description || "Современные IT программы обучения",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Международный колледж IT и бизнеса"
          },
          "courseMode": "full-time",
          "educationalLevel": "College",
          "teaches": data?.teaches || ["Программирование", "Веб-разработка", "Мобильная разработка"],
          "timeRequired": data?.duration || "P2Y",
          "offers": {
            "@type": "Offer",
            "category": "Education",
            "priceCurrency": "KGS"
          },
          ...data
        };

      case 'NewsArticle':
        return {
          ...baseData,
          "headline": data?.title || "",
          "description": data?.description || "",
          "image": data?.image || `${baseUrl}/images/news-default.jpg`,
          "datePublished": data?.datePublished || new Date().toISOString(),
          "dateModified": data?.dateModified || new Date().toISOString(),
          "author": {
            "@type": "Organization",
            "name": "Международный колледж IT и бизнеса"
          },
          "publisher": {
            "@type": "EducationalOrganization",
            "name": "Салымбеков Университет",
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/images/logo.png`
            }
          },
          ...data
        };

      case 'FAQPage':
        return {
          ...baseData,
          "mainEntity": data?.questions?.map(q => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": q.answer
            }
          })) || [],
          ...data
        };

      case 'ContactPage':
        return {
          ...baseData,
          "mainEntity": {
            "@type": "EducationalOrganization",
            "name": "Международный колледж IT и бизнеса",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "ул. Токтогула 164/1",
              "addressLocality": "Бишкек",
              "postalCode": "720001",
              "addressCountry": "KG"
            },
            "telephone": "+996 312 545454",
            "email": "info@su-college.com",
            "openingHours": "Mo-Fr 09:00-18:00"
          },
          ...data
        };

      case 'JobPosting':
        return {
          ...baseData,
          "title": data?.title || "Вакансии в колледже",
          "description": data?.description || "Открытые позиции в нашем колледже",
          "hiringOrganization": {
            "@type": "EducationalOrganization",
            "name": "Международный колледж IT и бизнеса",
            "sameAs": baseUrl
          },
          "jobLocation": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Бишкек",
              "addressCountry": "KG"
            }
          },
          "datePosted": data?.datePosted || new Date().toISOString(),
          "employmentType": data?.employmentType || "FULL_TIME",
          ...data
        };

      default:
        return { ...baseData, ...data };
    }
  };

  const schemaData = generateSchemaData();

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;