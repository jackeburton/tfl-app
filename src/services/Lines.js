import axios from 'axios'



const getLineStatus = (lines) => {

    if (Array.isArray(lines)) {
        let strlines = ""
        lines.forEach(line => {
            strlines = strlines + "," + line.value
        })
        lines = strlines
    }

    const request = axios.get(`https://api.tfl.gov.uk/Line/${lines}/Status`)
    console.log({ lines })
    return request.then(response => response.data)

}

const getArrival = (lines, stop) => {
    const request = axios.get(`https://api.tfl.gov.uk/Line/${lines}/Arrivals/${stop}`)
    return request.then(response => response.data)
}

//https://naptan.api.dft.gov.uk/v1/access-nodes?atcoAreaCodes=490&dataFormat=xml - GETS ALL NAPTAN CODES FOR STOPS IN LONDON

const getAllTubeLines = () => {
    return axios.get('https://api.tfl.gov.uk/Line/Mode/tube/Route')
        .then(response => {
            const data = response.data;
            const tubeLines = data.map(item => {
                return {
                    label: item.name,
                    value: item.id
                };
            });
            return tubeLines;
        })
        .catch(error => {
            console.error(error);
        });
}

const getAllBusLines = () => {
    return axios.get('https://api.tfl.gov.uk/Line/Mode/bus/Route')
        .then(response => {
            const data = response.data;
            const tubeLines = data.map(item => {
                return {
                    label: item.name,
                    value: item.id
                };
            });
            return tubeLines;
        })
        .catch(error => {
            console.error(error);
        });
}

const exportedObject = {
    getLineStatus,
    getAllBusLines,
    getArrival,
    getAllTubeLines
};

export default exportedObject