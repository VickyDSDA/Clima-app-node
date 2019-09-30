const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=92f5cb40bfb82798c69d21e0d118f91c&units=metric`);


    return resp.data.main.temp;
}

module.exports = {
    getClima
}