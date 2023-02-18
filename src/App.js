import { useEffect, useState } from 'react';
import './App.css';
import TubeLines from './components/TubeLines'
import lineService from './services/Lines'

const dbTrainLines = 'jubilee,dlr'

function App() {
  const [lineInfo, setLineInfo] = useState([])

  useEffect(() => {
    lineService
      .getLineStatus(dbTrainLines)
      .then(initialLines => {
        setLineInfo(initialLines)
        /*console.log(initialLines)
        console.log(initialLines[0].name)
        console.log(initialLines[0].lineStatuses[0].statusSeverityDescription)

        console.log(initialLines[1].name)
        console.log(initialLines[1].lineStatuses[0].statusSeverityDescription)
        */
      })
  }, [])

  return (
    <div>
      <TubeLines lineInfo={lineInfo} />
    </div>
  );
}

export default App;
