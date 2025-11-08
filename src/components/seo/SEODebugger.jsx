import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const SEODebugger = ({ enabled = false }) => {
  const { i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [seoData, setSeoData] = useState({});
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  if (!enabled) return null;

  // Получить все мета-теги из head
  const getMetaTags = () => {
    const metaTags = {};
    const metas = document.querySelectorAll('meta');
    
    metas.forEach(meta => {
      if (meta.name) {
        metaTags[meta.name] = meta.content;
      } else if (meta.property) {
        metaTags[meta.property] = meta.content;
      }
    });

    return metaTags;
  };

  // Обновлять данные SEO при изменении видимости или языка
  React.useEffect(() => {
    if (isVisible) {
      const updateSEOData = () => {
        const metaTags = getMetaTags();
        const structuredData = getStructuredData();
        const title = document.title;
        const canonical = document.querySelector('link[rel="canonical"]')?.href;
        const hreflangs = Array.from(document.querySelectorAll('link[rel="alternate"]')).map(link => ({
          hreflang: link.hreflang,
          href: link.href
        }));

        setSeoData({
          metaTags,
          structuredData,
          title,
          canonical,
          hreflangs
        });
        setLastUpdate(Date.now());
      };

      // Обновляем сразу и с задержкой (для загрузки мета-тегов)
      updateSEOData();
      const timeout = setTimeout(updateSEOData, 500);
      
      return () => clearTimeout(timeout);
    }
  }, [isVisible, i18n.language]);

  const getStructuredData = () => {
    const scripts = document.querySelectorAll('script[type="application/ld+json"]');
    const structuredData = [];
    
    scripts.forEach(script => {
      try {
        const data = JSON.parse(script.textContent);
        structuredData.push(data);
      } catch (e) {
        console.error('Error parsing structured data:', e);
      }
    });

    return structuredData;
  };

  // Использовать закэшированные данные или получить новые
  const { metaTags = {}, structuredData = [], title = '', canonical = '', hreflangs = [] } = seoData;

  return (
    <>
      {/* Кнопка для показа/скрытия отладчика */}
      <div 
        style={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          zIndex: 9999,
          background: '#007bff',
          color: 'white',
          padding: '8px 12px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '12px',
          fontFamily: 'monospace'
        }}
        onClick={() => setIsVisible(!isVisible)}
      >
        🔍 SEO Debug
      </div>

      {/* Кнопка обновления */}
      {isVisible && (
        <div 
          style={{
            position: 'fixed',
            top: '10px',
            right: '140px',
            zIndex: 9999,
            background: '#28a745',
            color: 'white',
            padding: '8px 12px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px',
            fontFamily: 'monospace'
          }}
          onClick={() => {
            const metaTags = getMetaTags();
            const structuredData = getStructuredData();
            const title = document.title;
            const canonical = document.querySelector('link[rel="canonical"]')?.href;
            const hreflangs = Array.from(document.querySelectorAll('link[rel="alternate"]')).map(link => ({
              hreflang: link.hreflang,
              href: link.href
            }));

            setSeoData({
              metaTags,
              structuredData,
              title,
              canonical,
              hreflangs
            });
            setLastUpdate(Date.now());
          }}
        >
          🔄 Обновить
        </div>
      )}

      {/* Панель отладки */}
      {isVisible && (
        <div
          style={{
            position: 'fixed',
            top: '50px',
            right: '10px',
            width: '400px',
            maxHeight: '80vh',
            background: 'white',
            border: '2px solid #007bff',
            borderRadius: '8px',
            padding: '16px',
            fontSize: '12px',
            fontFamily: 'monospace',
            overflow: 'auto',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            zIndex: 9998
          }}
        >
          <div style={{ marginBottom: '16px', fontWeight: 'bold', color: '#007bff' }}>
            🔍 SEO Debug Panel (Язык: {i18n.language})
            <div style={{ fontSize: '10px', color: '#6c757d' }}>
              Обновлено: {new Date(lastUpdate).toLocaleTimeString()}
            </div>
          </div>

          {/* Заголовок */}
          <div style={{ marginBottom: '12px' }}>
            <strong style={{ color: '#28a745' }}>📝 Title:</strong>
            <div style={{ background: '#f8f9fa', padding: '4px', margin: '4px 0', borderRadius: '3px' }}>
              {title} ({title.length} символов)
            </div>
          </div>

          {/* Описание */}
          <div style={{ marginBottom: '12px' }}>
            <strong style={{ color: '#28a745' }}>📖 Description:</strong>
            <div style={{ background: '#f8f9fa', padding: '4px', margin: '4px 0', borderRadius: '3px' }}>
              {metaTags.description || 'Не найдено'} ({(metaTags.description || '').length} символов)
            </div>
          </div>

          {/* Ключевые слова */}
          <div style={{ marginBottom: '12px' }}>
            <strong style={{ color: '#28a745' }}>🔑 Keywords:</strong>
            <div style={{ background: '#f8f9fa', padding: '4px', margin: '4px 0', borderRadius: '3px' }}>
              {metaTags.keywords || 'Не найдено'}
            </div>
          </div>

          {/* Canonical URL */}
          <div style={{ marginBottom: '12px' }}>
            <strong style={{ color: '#17a2b8' }}>🔗 Canonical:</strong>
            <div style={{ background: '#f8f9fa', padding: '4px', margin: '4px 0', borderRadius: '3px' }}>
              {canonical || 'Не найдено'}
            </div>
          </div>

          {/* Open Graph */}
          <div style={{ marginBottom: '12px' }}>
            <strong style={{ color: '#fd7e14' }}>📱 Open Graph:</strong>
            {['og:title', 'og:description', 'og:type', 'og:url', 'og:image'].map(prop => (
              <div key={prop} style={{ background: '#f8f9fa', padding: '2px 4px', margin: '2px 0', borderRadius: '3px' }}>
                <span style={{ color: '#6c757d' }}>{prop}:</span> {metaTags[prop] || 'Не найдено'}
              </div>
            ))}
          </div>

          {/* Twitter Card */}
          <div style={{ marginBottom: '12px' }}>
            <strong style={{ color: '#1da1f2' }}>🐦 Twitter Card:</strong>
            {['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image'].map(prop => (
              <div key={prop} style={{ background: '#f8f9fa', padding: '2px 4px', margin: '2px 0', borderRadius: '3px' }}>
                <span style={{ color: '#6c757d' }}>{prop}:</span> {metaTags[prop] || 'Не найдено'}
              </div>
            ))}
          </div>

          {/* Hreflang */}
          <div style={{ marginBottom: '12px' }}>
            <strong style={{ color: '#6f42c1' }}>🌐 Hreflang:</strong>
            {hreflangs.length > 0 ? (
              hreflangs.map((lang, index) => (
                <div key={index} style={{ background: '#f8f9fa', padding: '2px 4px', margin: '2px 0', borderRadius: '3px' }}>
                  <span style={{ color: '#6c757d' }}>{lang.hreflang}:</span> {lang.href}
                </div>
              ))
            ) : (
              <div style={{ background: '#fff3cd', padding: '4px', margin: '4px 0', borderRadius: '3px' }}>
                Не найдено
              </div>
            )}
          </div>

          {/* Структурированные данные */}
          <div style={{ marginBottom: '12px' }}>
            <strong style={{ color: '#e83e8c' }}>📊 Structured Data:</strong>
            {structuredData.length > 0 ? (
              structuredData.map((data, index) => (
                <div key={index} style={{ background: '#f8f9fa', padding: '4px', margin: '4px 0', borderRadius: '3px' }}>
                  <div style={{ color: '#28a745', fontWeight: 'bold' }}>
                    {data['@type']} Schema
                  </div>
                  <pre style={{ fontSize: '10px', overflow: 'auto', maxHeight: '100px' }}>
                    {JSON.stringify(data, null, 2)}
                  </pre>
                </div>
              ))
            ) : (
              <div style={{ background: '#fff3cd', padding: '4px', margin: '4px 0', borderRadius: '3px' }}>
                Не найдено
              </div>
            )}
          </div>

          {/* Рекомендации */}
          <div style={{ background: '#d1ecf1', padding: '8px', borderRadius: '4px', border: '1px solid #bee5eb' }}>
            <strong style={{ color: '#0c5460' }}>💡 Рекомендации:</strong>
            <ul style={{ margin: '4px 0', paddingLeft: '16px' }}>
              {title.length < 30 && <li style={{ color: '#856404' }}>Заголовок слишком короткий (&lt;30)</li>}
              {title.length > 60 && <li style={{ color: '#721c24' }}>Заголовок слишком длинный (&gt;60)</li>}
              {!metaTags.description && <li style={{ color: '#721c24' }}>Отсутствует description</li>}
              {metaTags.description && metaTags.description.length < 120 && <li style={{ color: '#856404' }}>Описание слишком короткое (&lt;120)</li>}
              {metaTags.description && metaTags.description.length > 160 && <li style={{ color: '#721c24' }}>Описание слишком длинное (&gt;160)</li>}
              {!metaTags['og:image'] && <li style={{ color: '#856404' }}>Отсутствует OG изображение</li>}
              {structuredData.length === 0 && <li style={{ color: '#856404' }}>Нет структурированных данных</li>}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default SEODebugger;