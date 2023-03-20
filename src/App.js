import { useEffect, useState } from 'react';
import './App.css';
import TubeLines from './components/TubeLines'
import BusLines from './components/BusLines'
import Dropdown from './components/Dropdown'
import lineService from './services/Lines'
import busStopService from './services/BusStops'
import BusSelector from './components/BusSelector'
import './Fonts.css';
import './Settings.css'
const dbBusLines = '188'
const dbBusStops = '490005231K'
const showOnlyBadServiceLines = false

function App() {
  const [lineInfo, setLineInfo] = useState([])
  const [busInfo, setBusInfo] = useState([])
  const [lineSelected, setLineSelected] = useState([])
  const [busSelected, setBusSelected] = useState(null)
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
  const [allBusses, setAllBusses] = useState([])
  const [isTubeMounted, setIsTubeMounted] = useState(false)
  const [isBusMounted, setIsBusMounted] = useState(false)


  useEffect(() => {
    lineService.getAllTubeLines()
      .then(initialTubeLines => {
        setAllLines(initialTubeLines)
        setIsTubeMounted(true)
      })

    lineService.getAllBusLines()
      .then(initialBusLines => {
        setAllBusses(initialBusLines)
        setIsBusMounted(true)
      })
  }, [])

  useEffect(() => {
    if (isTubeMounted && showOnlyBadServiceLines && allLines.length > 0) {
      lineService.getLineStatus(allLines)
        .then(Lines => {
          setLineInfo(Lines)
        })
    }
  }, [allLines, isTubeMounted])

  useEffect(() => {
    if (lineSelected && !showOnlyBadServiceLines && lineSelected.length !== 0) {
      lineService
        .getLineStatus(lineSelected)
        .then(Lines => {
          setLineInfo(Lines)
        })
    } else if (lineSelected.length === 0) {
      setLineInfo([])
    }
  }, [lineSelected])

  const updateLineSelected = (newSelectedLines) => {
    setLineSelected(newSelectedLines)
    console.log('new line selected')
  }

  const updateBusSelected = (newSelectedBuses) => {
    setBusSelected(newSelectedBuses)
  }

  return (
    <div>
      <div style={{ display: "flex" }}>
        <Dropdown
          isMulti placeHolder="Select..."
          options={allLines}
          onChange={(value) => updateLineSelected(value)}
          isSearchable
        />

        <Dropdown
          isMulti placeHolder="Select..."
          options={allBusses}
          onChange={(value) => updateBusSelected(value)}
          isSearchable
        />
        <BusSelector allLines={allBusses} />
        <div>
          <input className='setting checkbox' type="checkbox">

          </input>
        </div>
      </div>
      <TubeLines lineInfo={lineInfo} showOnlyBadServiceLines={showOnlyBadServiceLines} />
      {/*<BusLines lineInfo={busInfo} />*/}
    </div>
  );
}

export default App;
