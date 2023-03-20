import Dropdown from './Dropdown'
import busService from '../services/Buses'
import React, { useEffect, useState, useRef } from "react";
const BusSelector = ({ allLines }) => {

    const [stopsLoaded, setStopsLoaded] = useState(false)
    const [line, setLine] = useState(null)
    const [allStops, setAllStops] = useState(null)


    const updateBusSelected = (value) => {
        //when selected then update the line selected and call the api for the stops for that line to populate the stop select dropdown
        setLine(value.value)
        console.log(value.value)
    }

    useEffect(() => {
        if (line !== null) {
            busService.getAllStops(line)
                .then(allStops => {
                    setAllStops(allStops)
                    setStopsLoaded(true)
                    console.log(allStops)
                })
        }
    }, [line])

    return (
        <div>
            <Dropdown
                placeHolder="Select Line..."
                options={allLines}
                onChange={(value) => updateBusSelected(value)}
                isSearchable
            />
            {stopsLoaded && (
                <Dropdown
                    placeHolder="Select Stop..."
                    options={allStops}
                    onChange
                    isSearchable
                />
            )}

        </div>
    )
}

export default BusSelector