import axios from "axios"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import "./Login.css"

const Login = () => {

    const navigation = useNavigate()

    // Manejo de campos de formulario con useState
    const [user, setUser] = useState ({
        email: "",
        password: ""
    })

    const [ cargando, setCargando] = useState(false)
    const [ error, setError] = useState()

    const submit = (e) => {
        setCargando(true)
        setError(null)
        e.preventDefault()
        axios.post(`https://reqres.in/api/login`, user)
        .then(data => {
            setCargando(false)
            localStorage.setItem("tokenEDmarket", data.data.token)
            navigation("/")
        })
        .catch(e => {
            setCargando(false)
            console.error(e)
            setError(e.response.data.error)
        })
    }

    if ( localStorage.getItem("tokenEDmarket")) return <Navigate to="/"/>

    return (
        <div className="login-container">
            <h1 className="title">Iniciar sesión</h1>
            <form onSubmit={submit} className="form-container">
                <div className="field">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input required onChange={(e) => {
                        setUser({
                            ...user,
                            email: e.target.value
                        })
                    }} type="email" name="email" />
                </div>
                <div className="field">
                    <label htmlFor="password">Contraseña</label>
                    <input required onChange={(e) => {
                        setUser({
                            ...user,
                            password: e.target.value
                        })
                    }} type="password" name="password"/>
                </div>
                <div className="submit">
                    <input 
                    className="ingresar" 
                    type="submit" 
                    value={cargando ? "cargando..." : "Ingresar"} 
                />
                </div>
            </form>
            {
                error && <span className="error">{error}</span>
            }
        </div>
    )
}

export default Login