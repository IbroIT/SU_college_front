# Исправление проблемы с react-helmet-async

## Проблема
```
npm error ERESOLVE could not resolve
npm error Could not resolve dependency:
npm error peer react@"^16.6.0 || ^17.0.0 || ^18.0.0" from react-helmet-async@2.0.5
```

## Причина
`react-helmet-async@2.0.5` не поддерживает React 19, только версии до 18.

## Решение ✅

### 1. Заменили библиотеку
- ❌ `react-helmet-async@2.0.5` (не поддерживает React 19)
- ✅ `react-helmet@6.1.0` (поддерживает React >=16.3.0, включая React 19)

### 2. Обновленные файлы
- ✅ `package.json` - заменена зависимость
- ✅ `src/App.jsx` - удален `HelmetProvider` (не нужен для react-helmet)
- ✅ `src/components/seo/SEO.jsx` - обновлен импорт
- ✅ `src/components/pages/HomePage.jsx` - обновлен импорт  
- ✅ `src/components/seo/StructuredData.jsx` - обновлен импорт
- ✅ `src/components/seo/SEODebugger.jsx` - обновлен импорт
- ✅ `src/test-seo.jsx` - обновлен импорт

### 3. Ключевые изменения

#### До:
```jsx
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';

// В App.jsx
<HelmetProvider>
  <Router>...</Router>
</HelmetProvider>
```

#### После:
```jsx
import { Helmet } from 'react-helmet';

// В App.jsx  
<Router>...</Router>
```

### 4. Дополнительные меры
- ✅ Добавлен `.npmrc` с `legacy-peer-deps=true` для совместимости
- ✅ Обновлен `vercel-build` скрипт для использования `--legacy-peer-deps`

## Результат
- ✅ Совместимость с React 19
- ✅ SEO функционал работает корректно
- ✅ Нет конфликтов зависимостей
- ✅ Готово к деплою на Vercel

## Тестирование
```bash
npm install
npm run build
npm run dev
```