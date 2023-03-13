import Tube from './Tube'

import "./Tube.css";
const TubeLines = ({ lineInfo, showOnlyBadServiceLines }) => {
    if (lineInfo.length !== 0) {
        return (
            <div className='tubeline-container'>
                {
                    lineInfo.map(line =>
                        (showOnlyBadServiceLines && line.lineStatuses[0].statusSeverity === 10) ?
                            null :
                            <Tube
                                key={line.id}
                                tubeId={line.id}
                                tubeName={line.name}
                                tubeStatus={line.lineStatuses}
                            />

                    )}

            </div>
        )
    } else {
        return (
            <div>
                Please select some tube lines
            </div>
        )
    }


}

export default TubeLines