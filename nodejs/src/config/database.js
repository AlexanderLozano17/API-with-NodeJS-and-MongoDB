// Connect database mongo
const mongoose = require('mongoose');
const enviroment = require('../enviroments/enviroments');

/**
 * @param {string} pro = producción
 * 
 */
const urlConnection = enviroment.getConnection('dev');

mongoose.connect(urlConnection.url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(db => console.log(urlConnection.messageConnection))
    .catch(err => console.error(err));