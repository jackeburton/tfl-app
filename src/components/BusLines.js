import Bus from './Bus'
const BusLines = ({ lineInfo }) => {
    if (lineInfo.length !== 0) {
        console.log(typeof lineInfo[0].lineStatuses)
        console.log(lineInfo[0].lineStatuses)
        return (
            <div>
                {lineInfo.map(line =>
                    <Bus
                        key={line.id}
                        busName={line.lineName}
                        busStatus={line.expectedArrival}
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

export default BusLines