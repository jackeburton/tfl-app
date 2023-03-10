import Tube from './Tube'
const TubeLines = ({ lineInfo }) => {
    if (lineInfo.length !== 0) {
        return (
            <div>
                {lineInfo.map(line =>
                    <Tube
                        key={line.id}
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