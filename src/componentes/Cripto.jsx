import { useEffect, useState } from "react"
import axios from "axios"

function Cripto () {

    const API_URL = import.meta.env.VITE_API_URL
    const [criptos, setCriptos] = useState()

    useEffect( () => {
        axios.get(`${API_URL}assets`)
        .then((data) => {
          setCriptos(data.data.data)
        })
        .catch(() => {
          console.error("La peticion fallo")
        })
      }, [])
    
      if (!criptos) return <span>Cargando...</span>

    return (
        <>
            { 
                criptos.map(({name, priceUsd, id}) => (
                    <div key={id} className="Card">
                        <p>Nombre: {name}</p>
                        <p>Precios: {priceUsd}</p>
                    </div>
                ))
            }
      </>
    )
}

export default Cripto