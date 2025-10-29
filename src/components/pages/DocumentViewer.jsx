import React, { useEffect, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.mjs',
  import.meta.url
).toString();

const DocumentViewer = ({ documentUrl, documentName = "Документ" }) => {
    const [numPages, setNumPages] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [scale, setScale] = useState(1.5);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const canvasRef = useRef(null);

useEffect(() => {
  let cancelled = false;
  let pdfInstance = null;

  const loadPDF = async () => {
    try {
      setLoading(true);
      const loadingTask = pdfjsLib.getDocument(documentUrl);
      pdfInstance = await loadingTask.promise;
      if (cancelled) return;

      setNumPages(pdfInstance.numPages);
      await renderPage(pdfInstance, currentPage);
    } catch (err) {
      if (!cancelled) {
        console.error("Error loading PDF:", err);
        setError("Ошибка загрузки документа");
      }
    } finally {
      if (!cancelled) setLoading(false);
    }
  };

  if (documentUrl) loadPDF();

  return () => {
    cancelled = true;
    // отменяем загрузку при размонтировании
    if (pdfInstance && pdfInstance.destroy) pdfInstance.destroy();
  };
}, [documentUrl, currentPage, scale]);


    const renderPage = async (pdf, pageNumber) => {
  const canvas = canvasRef.current;
  if (!canvas) return;

  const context = canvas.getContext("2d");

  // Если предыдущая операция ещё не завершена — отменяем
  if (canvas.renderTask) {
    try {
      canvas.renderTask.cancel();
    } catch (e) {
      console.warn("Previous render task cancel failed:", e);
    }
  }

  try {
    const page = await pdf.getPage(pageNumber);
    const viewport = page.getViewport({ scale });

    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderContext = { canvasContext: context, viewport };

    // Создаём задачу рендеринга и сохраняем её
    const renderTask = page.render(renderContext);
    canvas.renderTask = renderTask;

    await renderTask.promise;
  } catch (err) {
    if (err?.name === "RenderingCancelledException") {
      console.log("Previous render was cancelled.");
    } else {
      console.error("Error rendering page:", err);
      setError("Ошибка отображения страницы");
    }
  } finally {
    canvas.renderTask = null;
  }
};



    const nextPage = () => {
        if (currentPage < numPages) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const zoomIn = () => setScale(prev => Math.min(prev + 0.25, 3));
    const zoomOut = () => setScale(prev => Math.max(prev - 0.25, 0.5));
    const resetZoom = () => setScale(1.5);

    const preventDownload = (e) => e.preventDefault();

    if (error) {
        return (
            <div style={{ 
                padding: '40px', 
                textAlign: 'center',
                color: '#dc3545',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <h3>Ошибка</h3>
                <p>{error}</p>
                <button
                    onClick={() => window.location.reload()}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        marginTop: '10px'
                    }}
                >
                    Обновить страницу
                </button>
            </div>
        );
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px',
                boxSizing: 'border-box',
                height: '100vh',
                backgroundColor: '#f5f5f5'
            }}
            onContextMenu={preventDownload}
        >
            {/* Панель управления */}
            <div
                style={{
                    width: '100%',
                    maxWidth: '800px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 20px',
                    backgroundColor: 'white',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    marginBottom: '20px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
            >
                <span style={{ fontWeight: 'bold' }}></span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    {/* Навигация по страницам */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <button onClick={prevPage} disabled={currentPage <= 1 || loading}>←</button>
                        <span>{loading ? '...' : `${currentPage} / ${numPages}`}</span>
                        <button onClick={nextPage} disabled={currentPage >= numPages || loading}>→</button>
                    </div>
                </div>
            </div>

            {/* Область просмотра */}
            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    width: '100%',
                    maxWidth: '800px',
                    overflow: 'auto',
                    backgroundColor: 'white',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    padding: '20px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    position: 'relative'
                }}
            >
                {loading && (
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center'
                    }}>
                        <div style={{ 
                            width: '40px', 
                            height: '40px', 
                            border: '3px solid #f3f3f3',
                            borderTop: '3px solid #007bff',
                            borderRadius: '50%',
                            animation: 'spin 1s linear infinite',
                            margin: '0 auto 16px'
                        }} />
                    </div>
                )}
                
                <canvas 
                    ref={canvasRef}
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                        display: loading ? 'none' : 'block',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                />
            </div>

            <style>
                {`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}
            </style>
        </div>
    );
};

export default DocumentViewer;
