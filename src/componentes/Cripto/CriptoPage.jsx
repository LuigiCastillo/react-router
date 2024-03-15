import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import "./CriptoPage.css"
import dayjs from "dayjs"

const CriptoPage = () => {

    const params = useParams()
    const API_URL = import.meta.env.VITE_API_URL
    const [criptos, setCriptos] = useState()
    const [history, setHistory] = useState([])



    useEffect( () => {
        axios.get(`${API_URL}assets/${params.id}`)
        .then((data) => {
          setCriptos(data.data.data)
        })
        .catch(() => {
          console.error("La peticion fallo")
        })
      }, [])
  
    useEffect( () => {
        axios.get(`${API_URL}assets/${params.id}/history?interval=d1`)
        .then((data) => {
          setHistory(data.data.data)
        })
        .catch(() => {
          console.error("La peticion fallo")
        })
      }, [])
    
      if (!criptos) return <span>Cargando...</span>

    return (
        <>
            <h1>Datos de la criptomoneda {params.id}</h1>
            <div className="criptopage-container">
                <ul>
                    {/* <li><span className="label">Key: </span>{criptos.key}</li> */}
                    {/* <li><span className="label">Nombre: </span>{criptos.name}</li> */}
                    {/* <li><span className="label">Nombre: </span>{criptos.marketCapUsd}</li> */}
                    {/* <li><span className="label">Nombre: </span>{criptos.volumeUsd24Hr}</li> */}
                    <li>
                        <span className="label">Nombre: </span>
                        <span>{criptos.id}</span>
                    </li>
                    <li>
                        <span className="label">Rango: </span>
                        <span>{criptos.rank}</span>
                    </li>
                    <li>
                        <span className="label">Simbolo: </span>
                        <span>{criptos.symbol}</span>
                    </li>
                    
                    <li>
                        <span className="label">En circulación:</span>
                        <span>{parseFloat(criptos.supply).toFixed(4)}</span>
                    </li>
                    <li>
                        <span className="label">Suministro maximo: </span>
                        <span>{parseFloat(criptos.maxSupply).toFixed(4)}</span>
                    </li>
                    
                    <li>
                        <span className="label">Precio en dolares: </span>
                        <span>{parseFloat(criptos.priceUsd).toFixed(4)}</span>
                    </li>
                    <li>
                        <span className="label">Cambio en las ultimas 24 horas: </span>
                        <span>{parseFloat(criptos.changePercent24Hr).toFixed(4)}</span>
                    </li>
                    <li>
                        <span className="label">Nombre: </span>
                        <span>{parseFloat(criptos.vwap24Hr).toFixed(4)}</span>
                    </li>
                </ul>
            </div>
            <h2>Historial</h2>
            {/* <span>{JSON.stringify(history)}</span> */}
            <table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        history.map(({ date, priceUsd, time}) => (
                            <tr key={time}>
                                <td>{dayjs(date).format(`DD/MM/YYYY`)}</td>
                                <td>{parseFloat(priceUsd).toFixed(4)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default CriptoPage