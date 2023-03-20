import BusStopSelector from './BusStopSelector'
import React, { useEffect, useState, useRef } from "react";
const BusSelector = ({ allLines }) => {

    const [lines, setLines] = useState([
        { id: 0, line: 0, stop: 3 },
        { id: 1, line: 1, stop: 2 },
        { id: 2, line: 2, stop: 1 }])
    const [lineSelected, setLineSelected] = useState({

    })

    const updateBusSelected = (value) => {

    }

    const addDropdown = () => {
        const emptyLine = { id: lines.length, line: '', stop: '' }
        setLines([...lines, emptyLine])
    }
    return (
        <div>
            {lines.map((line) => (
                <BusStopSelector
                    allLines={allLines}
                    key={line.id}
                    onLineUpdated
                    onStopUpdated
                />
            ))}
            <button onClick={addDropdown}>add dropwdown</button>
        </div>
    )
}

export default BusSelector