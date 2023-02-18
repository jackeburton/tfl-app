import Tube from './Tube'
const TubeLines = ({ lineInfo }) => {
    if (lineInfo.length !== 0) {
        console.log(typeof lineInfo[0].lineStatuses)
        console.log(lineInfo[0].lineStatuses)
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
                loading...
            </div>
        )
    }


}

export default TubeLines