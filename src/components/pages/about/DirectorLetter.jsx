import React from 'react';
import { useTranslation } from 'react-i18next';
import './DirectorMessage.css';
import DiretorImg from '../../../assets/NurzatM.jpg';
const DirectorMessage = () => {
  const { t } = useTranslation();

  return (
    <section className="director-message bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-800 text-center mb-12">
            {t('directorMessage.title')}
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Левая часть - Фотография */}
            <div className="lg:w-2/5 flex justify-center">
              <div className="relative">
                <div className="w-80 h-96 bg-blue-100 rounded-2xl shadow-xl transform rotate-3 transition-transform duration-300 hover:rotate-0">
                  <img 
                    src={DiretorImg}
                    alt={t('directorMessage.directorName')}
                    className="w-full h-full object-cover rounded-2xl transform -rotate-3 transition-transform duration-300 hover:rotate-0"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-2xl shadow-lg">
                  <h3 className="font-bold text-lg">{t('directorMessage.directorName')}</h3>
                  <p className="text-sm opacity-90">{t('directorMessage.directorPosition')}</p>
                </div>
              </div>
            </div>

            {/* Правая часть - Текст */}
            <div className="lg:w-3/5 space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-2xl border-l-4 border-blue-600">
                <p className="text-blue-900 text-lg leading-relaxed">
                  {t('directorMessage.welcome')}
                </p>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>{t('directorMessage.transition')}</p>
                
                <p>{t('directorMessage.understanding')}</p>

                <div className="bg-blue-50 p-4 rounded-xl my-4">
                  <h4 className="font-semibold text-blue-800 mb-3">{t('directorMessage.beliefs.title')}</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {t('directorMessage.beliefs.practicality')}
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {t('directorMessage.beliefs.people')}
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {t('directorMessage.beliefs.learning')}
                    </li>
                  </ul>
                </div>

                <p>{t('directorMessage.expectations')}</p>

                <div className="bg-white border border-blue-200 p-4 rounded-xl my-4">
                  <h4 className="font-semibold text-blue-800 mb-2">{t('directorMessage.program.title')}</h4>
                  <p className="text-sm">{t('directorMessage.program.description')}</p>
                  <div className="mt-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-2 px-4 rounded-lg">
                    {t('directorMessage.program.doubleDiploma')}
                  </div>
                </div>

                <p>{t('directorMessage.honor')}</p>
                <p>{t('directorMessage.teamwork')}</p>

                <div className="bg-blue-100 p-5 rounded-xl border border-blue-300">
                  <h4 className="font-semibold text-blue-900 mb-3">{t('directorMessage.communication.title')}</h4>
                  <p className="text-blue-800">{t('directorMessage.communication.description')}</p>
                </div>

                <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white p-6 rounded-2xl mt-6">
                  <h4 className="font-bold text-xl mb-3">{t('directorMessage.priority.title')}</h4>
                  <p className="leading-relaxed">{t('directorMessage.priority.description')}</p>
                </div>
              </div>

              {/* Контактная информация */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <p className="font-semibold text-blue-900">{t('directorMessage.sincerely')}</p>
                    <p className="text-lg font-bold text-blue-800">{t('directorMessage.directorName')}</p>
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <a 
                      href="mailto:nurzat255@gmail.com" 
                      className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      nurzat255@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;