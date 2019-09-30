const argv = require('yargs').options({
    direccion: {
        demand: true,
        desc: 'Direccion de la ciudad para obtener el clima',
        alias: 'd'
    }
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

let getInfo = async(direccion) => {

    try {
        let lugar2 = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(lugar2.lat, lugar2.lng);
        return `El clima de ${lugar2.direccion} es de ${temp}`;
    } catch (err) {
        return `No se puede determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion).then(resp => {
    console.log(resp);
}).catch(err => {
    console.log(err);
});