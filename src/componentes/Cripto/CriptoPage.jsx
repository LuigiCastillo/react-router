import { useParams } from "react-router-dom"

const CriptoPAge = () => {

    const params = useParams()

    return (
        <h1>Soy la criptomoneda {params.id}</h1>
        // Colocar la informacion de la criptomoneda seleccionada
        // Dar estilos
        
    )
}

export default CriptoPAge