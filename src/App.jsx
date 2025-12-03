import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/pages/Footer';
import { useTranslation } from 'react-i18next';
import SEODebugger from './components/seo/SEODebugger';
import LanguageRouter from './components/routing/LanguageRouter';
import MultiLanguageRoutes from './components/routing/MultiLanguageRoutes';
import LanguageDetector from './components/routing/LanguageDetector';

function App() {
  const languages = [
    { code: 'ru', name: 'Русский' },
    { code: 'kg', name: 'Кыргызча' },
    { code: 'en', name: 'English' }
  ];

  return (
    <Router>
      {/* <LanguageRouter> */}
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          
          <main>
            <LanguageDetector />
            <MultiLanguageRoutes />
          </main>
          
          <Footer />
          
          {/* SEO Debugger - только в режиме разработки */}
          {/* <SEODebugger enabled={import.meta.env.DEV} /> */}
        </div>
      {/* </LanguageRouter> */}
    </Router>
  );
}

export default App;