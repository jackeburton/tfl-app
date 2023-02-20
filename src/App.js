import { useEffect, useState } from 'react';
import './App.css';
import TubeLines from './components/TubeLines'
import BusLines from './components/BusLines'
import lineService from './services/Lines'

const dbTrainLines = 'jubilee,dlr'
const dbBusLines = '188'
const dbBusStops = '490005231K'

function App() {
  const [lineInfo, setLineInfo] = useState([])
  const [busInfo, setBusInfo] = useState([])

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
  }, [])

  return (
    <div>
      <TubeLines lineInfo={lineInfo} />
      <BusLines lineInfo={busInfo} />
    </div>
  );
}

export default App;
