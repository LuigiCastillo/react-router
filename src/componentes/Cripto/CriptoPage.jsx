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
            <div className="cripto-page-container">
                {/* Informacion */}
                <div className="info">
                    {/* Informacion principal */}
                    <div className="main-info">
                        <span>Ranking: {criptos.rank}</span>
                        <h1>{criptos.name}</h1>
                        <span className="symbol">Simbolo: {criptos.symbol}</span>
                    </div>
                    {/* Informacion detallada */}
                    <div className="details">
                        <ul>
                            <li className="detail">
                                <span className="label">Precio en dolares: </span>
                                <span>{parseFloat(criptos.priceUsd).toFixed(4)}</span>
                            </li>
                            <li className="detail">
                                <span className="label">En circulación:</span>
                                <span>{parseFloat(criptos.supply).toFixed(4)}</span>
                            </li>
                            <li className="detail">
                                <span className="label">Suministro maximo: </span>
                                <span>{parseFloat(criptos.maxSupply).toFixed(4)}</span>
                            </li>
                            <li className="detail">
                                <span className="label">Variación: </span>
                                <span>{parseFloat(criptos.changePercent24Hr).toFixed(4)}</span>
                            </li>
                            <li className="detail">
                                <span className="label">vwap24Hr: </span>
                                <span>{parseFloat(criptos.vwap24Hr).toFixed(4)}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Historial */}
                <div className="history">
                    <table>
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {history.map(({ date, priceUsd, time}) => (
                                <tr key={time}>
                                    <td>{dayjs(date).format(`DD/MM/YYYY`)}</td>
                                    <td>{parseFloat(priceUsd).toFixed(3)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default CriptoPage