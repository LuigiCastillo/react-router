import { useEffect, useState } from "react"

function App() {

  const API_URL = import.meta.env.VITE_API_URL
  const [criptos, setCriptos] = useState()

  useEffect( () => {
    fetch(`${API_URL}assets`)
    .then((resp) => resp.json())
    .then((data) => {
      setCriptos(data.data)
    })
    .catch(() => {
      console.error("La peticion fallo")
    })
  }, [])

  if (!criptos) return <span>Cargando...</span>

  return (
    <>
      <h1>Lista de criptomonedas</h1>
      <ol>
        { 
          criptos.map(({name, priceUsd}) => (
          <li key={"id"}>Nombre: {name} Precio: {priceUsd}</li>
          ))
        }
      </ol>
    </>
  )
}

export default App
