import Bus from './Bus'
const BusLines = ({ lineInfo }) => {
    if (lineInfo.length !== 0) {
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