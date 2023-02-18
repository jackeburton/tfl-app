
const Tube = ({ tubeName, tubeStatus }) => {

    return (
        <div>
            <h3>{tubeName}</h3>
            <ul>
                {tubeStatus.map(status => (
                    <li key={status.id}>
                        {status.statusSeverityDescription}<br></br>
                        {status.reason}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Tube