import "./Tube.css";

const Tube = ({ tubeName, tubeStatus, tubeId }) => {

    return (
        <div className="tube-container">
            <div className="tube-container-inner">
                <div className={`tube-name ${tubeId}`} >{tubeName}</div>
                <div className={`tube-status severity${tubeStatus[0].statusSeverity}`} > {tubeStatus[0].statusSeverityDescription}</div>
            </div>
            {//todo remove duplicates when a duplicate happens
                tubeStatus.map(status => (
                    <div className="tube-status-reason" key={status.id} >
                        {status.reason}
                    </div>
                ))
            }
        </div >
    )
}

export default Tube