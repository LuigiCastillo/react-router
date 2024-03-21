import dayjs from "dayjs"

const History = ({history}) => (
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
)

export default History