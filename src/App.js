import { useEffect, useState } from 'react';
import './App.css';
import TubeLines from './components/TubeLines'
import BusLines from './components/BusLines'
import Dropdown from './components/Dropdown'
import lineService from './services/Lines'
import busStopService from './services/BusStops'

const dbBusLines = '188'
const dbBusStops = '490005231K'

function App() {
  const [lineInfo, setLineInfo] = useState([])
  const [busInfo, setBusInfo] = useState([])
  const [lineSelected, setLineSelected] = useState(null)
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
  const [allLines, setAllLines] = useState([])

  useEffect(() => {

    lineService
      .getArrival(dbBusLines, dbBusStops)
      .then(initialBusLines => {
        setBusInfo(initialBusLines)
      })

    lineService
      .getAllTubeLines()
      .then(initialTubeLines => {
        setAllLines(initialTubeLines)
      })

    //busStopService.getAllStops()

  }, [])

  useEffect(() => {
    if (lineSelected) {
      lineService
        .getLineStatus(lineSelected)
        .then(Lines => {
          setLineInfo(Lines)
        })
    }
  }, [lineSelected])

  const updateLineSelected = (newSelectedLines) => {
    setLineSelected(newSelectedLines)
  }

  return (
    <div>
      <TubeLines lineInfo={lineInfo} />
      <BusLines lineInfo={busInfo} />
      <Dropdown
        isMulti placeHolder="Select..."
        options={allLines}
        onChange={(value) => updateLineSelected(value)}
      />
    </div>
  );
}

export default App;
