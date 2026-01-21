
import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.tsx';

// Global error handler to capture silent production failures
window.onerror = function(message, source, lineno, colno, error) {
  console.error('DealBridge Global Error:', message, 'at', source, lineno, colno);
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("Could not find root element to mount to");
} else {
  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <HashRouter>
          <App />
        </HashRouter>
      </React.StrictMode>
    );
    console.log('DealBridge App mounted successfully');
  } catch (err) {
    console.error('DealBridge Mounting Error:', err);
  }
}
