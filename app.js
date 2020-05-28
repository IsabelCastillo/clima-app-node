const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');


const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'Dirección de la ciudad para obtener el clima',
            demand: true
        }
    })
    .argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log)


const getInfo = async(direccion) => {

    try {

        const cordenadas = await lugar.getLugarLatLng(direccion); // direccion si sale mal
        const temperatura = await clima.getClima(cordenadas.lat, cordenadas.lng);

        return `El clima de ${cordenadas.direccion} es de ${temperatura}.`;


    } catch (e) {
        return `No se determino el clima de ${direccion}`;
    }


}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);