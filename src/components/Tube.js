
import "./Tube.css";

const Tube = ({ tubeName, tubeStatus, tubeId }) => {

    return (
        <div className="tube-container">
            <h3 className={`tube-name ${tubeId}`} >{tubeName}</h3>
            {tubeStatus.map(status => (
                <div className="tube-status" key={status.id}>
                    <div className="tube-status-severity">{status.statusSeverityDescription}</div>
                    <div className="tube-status-reason">{status.reason}</div>
                </div>
            ))}
        </div>
    )
}

export default Tube