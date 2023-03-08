import axios from 'axios'

const getLine = () => {
    const request = axios.get('https://api.tfl.gov.uk/Line/188/Status')
    return request.then(response => response.data)
}


const getLineStatusOLD = (lines) => {
    let statuses = []
    let promises = []
    for (var i = 0; i < lines.length; i++) {
        promises.push(
            axios
                .get(`https://api.tfl.gov.uk/Line/${lines[i].id}/Status`)
                .then(response => {
                    statuses.push({
                        id: response.data[0].name
                    })
                })
        )
    }
    return statuses

}

const getLineStatus = (lines) => {
    const request = axios.get(`https://api.tfl.gov.uk/Line/${lines}/Status`)
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

const exportedObject = {
    getLine,
    getLineStatus,
    getArrival,
    getAllTubeLines
};

export default exportedObject