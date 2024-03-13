import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './componentes/App.jsx'
import "./main.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CONTACT from './componentes/Contact.jsx'
import Pagina404 from './componentes/404.jsx'
import Menu from './componentes/menu/Menu.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <BrowserRouter>
        <Menu />
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/contact" element={<CONTACT />}/>
                <Route path='*' element={<Pagina404/>}/>
            </Routes>
        </BrowserRouter>
    </>
)
