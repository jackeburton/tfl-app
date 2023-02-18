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

const exportedObject = {
    getLine,
    getLineStatus
};

export default exportedObject