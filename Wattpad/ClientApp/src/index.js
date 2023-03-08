import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { WLibroContextProvider } from './context/WLibroContext';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <BrowserRouter basename={baseUrl}>
        <WLibroContextProvider>
            <App />
        </WLibroContextProvider>
    </BrowserRouter>
);
