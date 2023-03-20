import axios from 'axios'

const getAllBusLines = () => {
    return axios.get('https://api.tfl.gov.uk/Line/Mode/bus/Route')
        .then(response => {
            const data = response.data;
            const busLines = data.map(item => {
                return {
                    label: item.name,
                    value: item.id
                };
            });
            return busLines;
        })
        .catch(error => {
            console.error(error);
        });
}

const getAllStops = (line) => {
    return axios.get(`https://api.tfl.gov.uk/line/${line}/stoppoints`)
        .then(response => {
            const data = response.data;
            const busStops = data.map(item => {
                return {
                    label: item.commonName,
                    value: item.id
                };
            });
            return busStops;
        })
        .catch(error => {
            console.error(error);
        });
}

const exportedObject = {

    getAllBusLines,
    getAllStops

};

export default exportedObject