import { useEffect, useState } from 'react';
import './App.css';
import TubeLines from './components/TubeLines'
import BusLines from './components/BusLines'
import lineService from './services/Lines'
import busStopService from './services/BusStops'

const dbTrainLines = 'jubilee,dlr'
const dbBusLines = '188'
const dbBusStops = '490005231K'

function App() {
  const [lineInfo, setLineInfo] = useState([])
  const [busInfo, setBusInfo] = useState([])
  const [lineSelected, setLineSelected] = useState(dbTrainLines)
  const [busLineStop, setBusLineStop] = useState(
    [
      {
        'line': '188',
        'stops': '490005231K'
      },
      {
        'line': '422',
        'stops': 'other stop'
      }
    ]
  )

  useEffect(() => {
    lineService
      .getLineStatus(dbTrainLines)
      .then(initialLines => {
        setLineInfo(initialLines)
      })

    lineService
      .getArrival(dbBusLines, dbBusStops)
      .then(initialBusLines => {
        setBusInfo(initialBusLines)
      })

    //busStopService.getAllStops()

  }, [])

  return (
    <div>
      <TubeLines lineInfo={lineInfo} />
      <BusLines lineInfo={busInfo} />
    </div>
  );
}

export default App;
