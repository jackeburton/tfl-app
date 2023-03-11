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

const getLineStatus = (lines, showOnlyBadServiceLines = false) => {

    if (Array.isArray(lines)) {
        let strlines = ""
        lines.forEach(line => {
            strlines = strlines + "," + line.value
        })
        lines = strlines
    }

    const request = axios.get(`https://api.tfl.gov.uk/Line/${lines}/Status`)
    return request.then(response => {
        if (showOnlyBadServiceLines) {
            var i = 0;
            while (i < response.length) {
                if (response[i].lineStatuses[0].lineStatuses[0].statusSeverity !== 10) {
                    console.log(response[i].lineStatuses[0].lineStatuses[0].statusSeverity)
                    response.splice(i, 1);
                } else {
                    ++i;
                }
            }

            return response.data
        }
        return response.data
    })
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