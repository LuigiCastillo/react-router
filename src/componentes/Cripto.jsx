import "./Cripto.css"

const Cripto = ({name, priceUsd, symbol, changePercent24Hr}) => {

    return (
        <div className="cripto">
            <h2>{name}</h2>
            <div className="info">
                <p><span className="label">Precio: </span>{parseFloat(priceUsd).toFixed(4)}</p>
                <p><span className="label">Codigo: </span>{symbol}</p>
                <p>
                    <span className="label">Variacion 24 hrs: </span>
                    <span className={ parseFloat(changePercent24Hr) > 0 ? "positivo" : "negativo"}>{parseFloat(changePercent24Hr).toFixed(4)}</span>
                </p>

            </div>

        </div>
    )
}

export default Cripto