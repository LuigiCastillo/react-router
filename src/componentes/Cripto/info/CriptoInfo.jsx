import { parseFloatNumber } from "../../../helpers/numbers"

const CriptoInfo = ({criptos}) => (
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
                    <span>{parseFloatNumber(criptos.priceUsd, 2)}</span>
                </li>
                <li className="detail">
                    <span className="label">En circulación:</span>
                    <span>{parseFloatNumber(criptos.supply, 3)}</span>
                </li>
                <li className="detail">
                    <span className="label">Suministro maximo: </span>
                    <span>{parseFloatNumber(criptos.maxSupply, 3)}</span>
                </li>
                <li className="detail">
                    <span className="label">Variación: </span>
                    <span>{parseFloatNumber(criptos.changePercent24Hr, 3)}</span>
                </li>
                <li className="detail">
                    <span className="label">vwap24Hr: </span>
                    <span>{parseFloatNumber(criptos.vwap24Hr, 3)}</span>
                </li>
            </ul>
        </div>
    </div>
)

export default CriptoInfo