import { useEffect, useState } from 'react';
import './App.css';
import TubeLines from './components/TubeLines'
import BusLines from './components/BusLines'
import Dropdown from './components/Dropdown'
import lineService from './services/Lines'
import busStopService from './services/BusStops'
import './Fonts.css';
import './Settings.css'
const dbBusLines = '188'
const dbBusStops = '490005231K'
const showOnlyBadServiceLines = true

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
    if (showOnlyBadServiceLines) {
      lineService
        .getLineStatus(allLines, showOnlyBadServiceLines)
        .then(Lines => {
          setLineInfo(Lines)
        })
    }
  }, [allLines])

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
      <div style={{ display: "flex" }}>
        <Dropdown
          isMulti placeHolder="Select..."
          options={allLines}
          onChange={(value) => updateLineSelected(value)}
        />
        <div>
          <input className='setting checkbox' type="checkbox">

          </input>
        </div>
      </div>
      <TubeLines lineInfo={lineInfo} />
      {/*<BusLines lineInfo={busInfo} />*/}
    </div>
  );
}

export default App;
