import './Index.css'
import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WLibroContextProvider } from './context/WLibroContext';
import Container from '@mui/material/Container';
import Comunidad from './components/Comunidad/Comunidad';
import ListadoLibros from './components/Libro/ListadoLibros';
import WEncabezadoNavbar from './components/Navbar/WEncabezadoNavbar';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <BrowserRouter basename={baseUrl}>
        <WLibroContextProvider>
            <WEncabezadoNavbar />
            <Container maxWidth="lg">
                <Routes>
                    <Route path="/" element={ <App /> } />
                    <Route path="/Libros" element={ <ListadoLibros /> } />
                    <Route path="/Comunidad" element={ <Comunidad /> } />
                </Routes>
            </Container>
        </WLibroContextProvider>
    </BrowserRouter>
);
