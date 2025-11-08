// Тестовый компонент для проверки SEO
import React from 'react';
import { Helmet } from 'react-helmet-async';

const TestSEO = () => {
  return (
    <div>
      <Helmet>
        <title>Тест SEO - Международный колледж IT и бизнеса</title>
        <meta name="description" content="Тестовое описание для проверки SEO компонентов" />
        <meta property="og:title" content="Тест Open Graph заголовок" />
        <meta property="og:description" content="Тест Open Graph описание" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.su-college.com/test" />
        <meta property="og:image" content="https://www.su-college.com/images/og-test.jpg" />
        
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Тест Колледж",
          "description": "Тестовые структурированные данные",
          "url": "https://www.su-college.com"
        })}
        </script>
      </Helmet>
      
      <h1>Тестовая страница SEO</h1>
      <p>Эта страница используется для тестирования SEO компонентов.</p>
    </div>
  );
};

export default TestSEO;