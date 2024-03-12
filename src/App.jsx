import { useEffect, useState } from "react"

function App() {

  const [criptos, setCriptos] = useState()

  useEffect( () => {
    fetch("https://api.coincap.io/v2/assets")
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
        { criptos.map(({name, priceUsd}) => (
          <li>Nombre: {name} Precio: {priceUsd}</li>
        )) }
      </ol>
    </>
  )
}

export default App
