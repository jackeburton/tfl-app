import axios from 'axios'
const { convertXML } = require("simple-xml-to-json")

var xml =
    '<?xml version="1.0" encoding="utf-8"?>' +
    '<note importance="high" logged="true">' +
    '    <title>Happy</title>' +
    '    <todo>Work</todo>' +
    '    <todo>Play</todo>' +
    '</note>';

const getAllStops = () => {
    //const request = axios.get('http://naptan.app.dft.gov.uk/DataRequest/Naptan.ashx?format=csv') does not work

    const myJson = convertXML(xml)

    console.log(myJson)

}

const exportedObject = {
    getAllStops
};

export default exportedObject