import { useParams } from "react-router-dom"
import "./CriptoPage.css"
import dayjs from "dayjs"
import usePetition from "../../hooks/usePetition"

const CriptoPage = () => {

    const params = useParams()
    const criptos = usePetition(`assets/${params.id}`)
    const history = usePetition(`assets/${params.id}/history?interval=d1`)

    return (
        <>
            <div className="cripto-page-container">
                {/* Informacion  y validacion condicional*/}
                {
                    criptos && (
                        <div className="info">
                        <div className="main-info">
                            <span>Ranking: {criptos.rank}</span>
                            <h1>{criptos.name}</h1>
                            <span className="symbol">Simbolo: {criptos.symbol}</span>
                        </div>
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
                    )
                }
                {/* Historial y validacion condicional*/}
                <div className="history">
                    {
                        history && (
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
                            )
                    }
                </div>
            </div>
        </>
    )
}

export default CriptoPage