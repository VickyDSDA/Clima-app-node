const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: { 'x-rapidapi-key': '0c16f610bbmsh08d3f4aa8ed0180p13c320jsn704b5f1fa0db' }
    })

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw (`No hay resultados para ${dir}`)
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}