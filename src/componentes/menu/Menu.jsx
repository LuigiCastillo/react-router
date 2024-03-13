import { NavLink } from "react-router-dom"
import "./Menu.css"

const Menu = () => (
    <nav className="main-menu">
        <ul>
            <li><NavLink to="/">Inicio</NavLink> </li>
            <li><NavLink to="/contact">Contactos</NavLink> </li>
            <li><NavLink to="/otros">otros</NavLink> </li>
        </ul>
    </nav>
)

export default Menu