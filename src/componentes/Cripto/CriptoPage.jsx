import { useParams } from "react-router-dom"
import "./CriptoPage.css"
import usePetition from "../../hooks/usePetition"
import CriptoInfo from "./info/CriptoInfo"
import History from "./info/CriptoHistory"

const CriptoPage = () => {

    const params = useParams()
    const criptos = usePetition(`assets/${params.id}`)
    const history = usePetition(`assets/${params.id}/history?interval=d1`)

    if (!criptos) return <span>Cargando...</span>

    return (
        <>
            <div className="cripto-page-container">
                {criptos && <CriptoInfo criptos={criptos}/>}
                <div className="history">
                {history && <History history={history}/>}
                </div>
            </div>
        </>
    )
}

export default CriptoPage