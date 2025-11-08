// src/pages/HomePage.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import ITHeroBanner from './home/Banner';
import AboutUs from './home/AboutUs';
import NewsBanner from './home/NewsBanner';
import NewsSlider from './home/NewsSlider';
import PhotoGallery from './home/PhotoGallery';
import ApplicantBanner from './home/ApplicantBanner';
import PageSEO from '../seo/PageSEO';
import SEO from '../seo/SEO';
import StructuredData from '../seo/StructuredData';

const HomePage = () => {
  return (
    <>
      {/* Простой тест Helmet */}
      <Helmet>
        <title>Главная страница - Международный колледж IT и бизнеса | Салымбеков Университет</title>
        <meta name="description" content="Международный колледж информационных технологий и бизнеса при Салымбеков Университете. Получите двойной диплом и качественное IT-образование на русском и английском языках." />
        <meta name="keywords" content="IT колледж Кыргызстан, компьютерная наука Бишкек, мультимедиа образование, мобильные приложения обучение" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Международный колледж IT и бизнеса | Салымбеков Университет" />
        <meta property="og:description" content="Получите двойной диплом и качественное IT-образование. Партнерство с Lincoln и INTI университетами." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.su-college.com/" />
        <meta property="og:image" content="https://www.su-college.com/images/og-home.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Международный колледж IT и бизнеса | Салымбеков Университет" />
        <meta name="twitter:description" content="Получите двойной диплом и качественное IT-образование. Партнерство с Lincoln и INTI университетами." />
        <meta name="twitter:image" content="https://www.su-college.com/images/og-home.jpg" />
      </Helmet>

      <StructuredData 
        type="EducationalOrganization" 
        data={{
          "@type": ["EducationalOrganization", "CollegeOrUniversity"],
          "hasCredential": [{
            "@type": "EducationalOccupationalCredential",
            "name": "Диплом по компьютерным наукам",
            "credentialCategory": "degree"
          }]
        }} 
      />

      <div className="bg-white">
          <ITHeroBanner />
          <AboutUs />
          <NewsBanner />
          {/* <ApplicantBanner /> */}
          <NewsSlider />
          <PhotoGallery   />
      </div>
    </>
  );
};

export default HomePage;