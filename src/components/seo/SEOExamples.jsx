// Примеры использования SEO компонентов

import React from 'react';
import PageSEO from '../seo/PageSEO';
import SEO from '../seo/SEO';
import StructuredData from '../seo/StructuredData';
import { SEOHelpers } from '../seo/LanguageManager';

// 1. ПРОСТОЕ ИСПОЛЬЗОВАНИЕ PAGESEO
const SimplePageExample = () => {
  return (
    <>
      <PageSEO pageKey="about" />
      <div>Содержимое страницы</div>
    </>
  );
};

// 2. КАСТОМИЗИРОВАННОЕ SEO
const CustomSEOExample = () => {
  return (
    <>
      <PageSEO 
        pageKey="programs"
        customTitle="Специальная программа по AI"
        customDescription="Изучайте искусственный интеллект с ведущими экспертами"
        customKeywords="AI, искусственный интеллект, машинное обучение"
        structuredDataType="Course"
        structuredDataProps={{
          name: "Программа по искусственному интеллекту",
          description: "Комплексная программа изучения AI",
          duration: "P2Y",
          teaches: ["Machine Learning", "Neural Networks", "Deep Learning"]
        }}
      />
      <div>Содержимое страницы курса</div>
    </>
  );
};

// 3. НОВОСТНАЯ СТАТЬЯ
const NewsArticleExample = ({ article }) => {
  const newsSEO = SEOHelpers.generateNewsSEO(article);
  
  return (
    <>
      <SEO 
        title={newsSEO.title}
        description={newsSEO.description}
        keywords={newsSEO.keywords}
        image={newsSEO.image}
        type="article"
      />
      <StructuredData 
        type="NewsArticle"
        data={{
          headline: article.title,
          description: article.excerpt,
          image: article.image,
          datePublished: article.created_at,
          dateModified: article.updated_at,
          author: {
            "@type": "Organization",
            "name": "Международный колледж IT и бизнеса"
          }
        }}
      />
      <article>
        <h1>{article.title}</h1>
        <div>{article.content}</div>
      </article>
    </>
  );
};

// 4. FAQ СТРАНИЦА С ДИНАМИЧЕСКИМИ ДАННЫМИ
const FAQPageExample = ({ faqData }) => {
  const faqSEO = SEOHelpers.generateFAQSEO(faqData);
  
  return (
    <>
      <SEO {...faqSEO} />
      <StructuredData 
        type="FAQPage"
        data={{
          questions: faqData.map(item => ({
            question: item.question,
            answer: item.answer
          }))
        }}
      />
      <div>
        {faqData.map((faq, index) => (
          <div key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </>
  );
};

// 5. СТРАНИЦА ПРОГРАММЫ С БОГАТОЙ РАЗМЕТКОЙ
const ProgramPageExample = ({ program }) => {
  return (
    <>
      <PageSEO 
        pageKey="programs"
        customTitle={program.title}
        customDescription={program.description}
        customKeywords={`${program.title}, программирование, IT образование, ${program.skills?.join(', ')}`}
        customImage={program.image}
        structuredDataType="Course"
        structuredDataProps={{
          name: program.title,
          description: program.description,
          courseCode: program.code,
          teaches: program.skills,
          timeRequired: program.duration,
          coursePrerequisites: program.prerequisites,
          occupationalCategory: "15-1131.00", // Computer Programmers SOC code
          offers: {
            "@type": "Offer",
            "category": "Education",
            "priceCurrency": "KGS",
            "price": program.price
          },
          provider: {
            "@type": "EducationalOrganization",
            "name": "Международный колледж IT и бизнеса",
            "url": "https://www.su-college.com"
          }
        }}
      />
      
      {/* Дополнительная разметка для программы */}
      <StructuredData 
        type="EducationalOccupationalProgram"
        data={{
          name: program.title,
          description: program.description,
          programType: "Certificate",
          timeToComplete: program.duration,
          occupationalCategory: {
            "@type": "CategoryCode",
            "codeValue": "15-1131.00",
            "codingSystem": "SOC-2010"
          },
          programPrerequisites: {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "HighSchool"
          }
        }}
      />
      
      <div>
        <h1>{program.title}</h1>
        <p>{program.description}</p>
        <h2>Что вы изучите:</h2>
        <ul>
          {program.skills?.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

// 6. КОНТАКТНАЯ СТРАНИЦА С LOCAL BUSINESS РАЗМЕТКОЙ
const ContactPageExample = () => {
  return (
    <>
      <PageSEO 
        pageKey="contacts"
        structuredDataType="ContactPage"
      />
      
      {/* Дополнительная Local Business разметка */}
      <StructuredData 
        type="LocalBusiness"
        data={{
          "@type": ["LocalBusiness", "EducationalOrganization"],
          name: "Международный колледж IT и бизнеса",
          image: "https://www.su-college.com/images/college-building.jpg",
          address: {
            "@type": "PostalAddress",
            streetAddress: "ул. Токтогула 164/1",
            addressLocality: "Бишкек",
            postalCode: "720001",
            addressCountry: "KG"
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "42.8746",
            longitude: "74.5698"
          },
          telephone: "+996 312 545454",
          email: "info@su-college.com",
          url: "https://www.su-college.com",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "18:00"
            }
          ],
          sameAs: [
            "https://www.facebook.com/salymbekov.university",
            "https://www.instagram.com/salymbekov_university"
          ]
        }}
      />
      
      <div>Контактная информация и форма</div>
    </>
  );
};

// 7. ВАКАНСИИ С JOB POSTING РАЗМЕТКОЙ
const JobPostingExample = ({ job }) => {
  return (
    <>
      <PageSEO 
        pageKey="vacancies"
        customTitle={`${job.title} - Вакансия в колледже`}
        customDescription={job.description}
        structuredDataType="JobPosting"
        structuredDataProps={{
          title: job.title,
          description: job.description,
          datePosted: job.posted_date,
          validThrough: job.valid_until,
          employmentType: job.employment_type,
          baseSalary: {
            "@type": "MonetaryAmount",
            currency: "KGS",
            value: {
              "@type": "QuantitativeValue",
              minValue: job.salary_min,
              maxValue: job.salary_max,
              unitText: "MONTH"
            }
          },
          qualifications: job.requirements,
          responsibilities: job.responsibilities
        }}
      />
      
      <div>
        <h1>{job.title}</h1>
        <p>{job.description}</p>
        <h3>Требования:</h3>
        <ul>
          {job.requirements?.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export {
  SimplePageExample,
  CustomSEOExample,
  NewsArticleExample,
  FAQPageExample,
  ProgramPageExample,
  ContactPageExample,
  JobPostingExample
};