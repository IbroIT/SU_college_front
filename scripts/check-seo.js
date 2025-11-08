#!/usr/bin/env node

// Скрипт для проверки SEO оптимизации
import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🔍 Проверка SEO оптимизации...\n');

// Проверка robots.txt
const robotsPath = join(__dirname, '..', 'public', 'robots.txt');
if (existsSync(robotsPath)) {
  console.log('✅ robots.txt найден');
  const robotsContent = readFileSync(robotsPath, 'utf8');
  console.log('📝 Содержимое robots.txt:');
  console.log(robotsContent.substring(0, 200) + '...\n');
} else {
  console.log('❌ robots.txt НЕ найден\n');
}

// Проверка sitemap.xml
const sitemapPath = join(__dirname, '..', 'public', 'sitemap.xml');
if (existsSync(sitemapPath)) {
  console.log('✅ sitemap.xml найден');
  const sitemapContent = readFileSync(sitemapPath, 'utf8');
  const urlCount = (sitemapContent.match(/<url>/g) || []).length;
  console.log(`📊 Количество URL в sitemap: ${urlCount}`);
  
  // Проверка языковых альтернатив
  const hreflangCount = (sitemapContent.match(/hreflang/g) || []).length;
  console.log(`🌐 Количество hreflang тегов: ${hreflangCount}\n`);
} else {
  console.log('❌ sitemap.xml НЕ найден\n');
}

// Проверка index.html
const indexPath = join(__dirname, '..', 'index.html');
if (existsSync(indexPath)) {
  console.log('✅ index.html найден');
  const indexContent = readFileSync(indexPath, 'utf8');
  
  // Проверка базовых мета-тегов
  const hasTitle = indexContent.includes('<title>');
  const hasDescription = indexContent.includes('name="description"');
  const hasKeywords = indexContent.includes('name="keywords"');
  const hasViewport = indexContent.includes('name="viewport"');
  const hasOG = indexContent.includes('property="og:');
  const hasTwitter = indexContent.includes('name="twitter:');
  const hasCanonical = indexContent.includes('rel="canonical"');
  const hasHreflang = indexContent.includes('rel="alternate"');
  
  console.log(`📝 Базовые мета-теги в index.html:`);
  console.log(`  Title: ${hasTitle ? '✅' : '❌'}`);
  console.log(`  Description: ${hasDescription ? '✅' : '❌'}`);
  console.log(`  Keywords: ${hasKeywords ? '✅' : '❌'}`);
  console.log(`  Viewport: ${hasViewport ? '✅' : '❌'}`);
  console.log(`  Open Graph: ${hasOG ? '✅' : '❌'}`);
  console.log(`  Twitter Card: ${hasTwitter ? '✅' : '❌'}`);
  console.log(`  Canonical: ${hasCanonical ? '✅' : '❌'}`);
  console.log(`  Hreflang: ${hasHreflang ? '✅' : '❌'}\n`);
} else {
  console.log('❌ index.html НЕ найден\n');
}

// Проверка SEO компонентов
const seoComponentsPath = join(__dirname, '..', 'src', 'components', 'seo');
if (existsSync(seoComponentsPath)) {
  console.log('✅ Папка SEO компонентов найдена');
  
  const requiredFiles = [
    'SEO.jsx',
    'PageSEO.jsx', 
    'StructuredData.jsx',
    'seoConfig.js',
    'useSEO.js',
    'LanguageManager.js',
    'SEODebugger.jsx'
  ];
  
  console.log('📁 Проверка SEO компонентов:');
  requiredFiles.forEach(file => {
    const exists = existsSync(join(seoComponentsPath, file));
    console.log(`  ${file}: ${exists ? '✅' : '❌'}`);
  });
  console.log();
} else {
  console.log('❌ Папка SEO компонентов НЕ найдена\n');
}

// Рекомендации для проверки
console.log('📋 Рекомендации для дальнейшей проверки SEO:');
console.log('');
console.log('🌐 Онлайн инструменты:');
console.log('  1. Google Search Console: https://search.google.com/search-console');
console.log('  2. Rich Results Test: https://search.google.com/test/rich-results');
console.log('  3. Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/');
console.log('  4. Twitter Card Validator: https://cards-dev.twitter.com/validator');
console.log('  5. Google PageSpeed Insights: https://pagespeed.web.dev/');
console.log('');
console.log('🔧 Локальная проверка:');
console.log('  1. Запустите: npm run dev');
console.log('  2. Откройте: http://localhost:5173');
console.log('  3. Кликните на кнопку "🔍 SEO Debug" в правом верхнем углу');
console.log('  4. Проверьте robots.txt: http://localhost:5173/robots.txt');
console.log('  5. Проверьте sitemap.xml: http://localhost:5173/sitemap.xml');
console.log('');
console.log('📱 Мобильная проверка:');
console.log('  - Используйте Chrome DevTools > Mobile Device Simulation');
console.log('  - Проверьте viewport мета-тег');
console.log('  - Тестируйте скорость загрузки на мобильных устройствах');
console.log('');
console.log('🌍 Многоязычность:');
console.log('  - Переключите язык в навигации сайта');
console.log('  - Проверьте что мета-теги обновляются');
console.log('  - Убедитесь что hreflang теги корректны');

console.log('\n🎉 Проверка завершена!');
console.log('💡 Используйте SEO Debugger на сайте для детальной информации.');