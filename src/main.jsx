import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './componentes/App.jsx'
import "./main.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CONTACT from './componentes/Contact.jsx'
import Pagina404 from './componentes/404.jsx'
import Cuadricula from './componentes/Cuadricula.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}>
                <Route index element={<Cuadricula />}/>
                <Route path="/contact" element={<CONTACT />}/>
            </Route>
            <Route path='*' element={<Pagina404/>}/>
        </Routes>
    </BrowserRouter>
)
