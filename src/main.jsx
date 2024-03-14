import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './componentes/App.jsx'
import "./main.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pagina404 from './componentes/404.jsx'
import Cuadricula from './componentes/Cuadricula.jsx'
import Home from './Home.jsx'
import CriptoPAge from './componentes/Cripto/CriptoPage.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}>
                <Route index element={<Home />}/>
            </Route>
            <Route path='/criptomonedas' element={<App/>}>
                <Route index element={<Cuadricula />}/>
                <Route path=':id' element={<CriptoPAge/>}/>
            </Route>
            <Route path='*' element={<Pagina404/>}/>
        </Routes>
    </BrowserRouter>
)
