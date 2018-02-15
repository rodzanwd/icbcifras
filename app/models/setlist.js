const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const musicos = require('./musicos');

const URI = 'mongodb://cifras:Seilad12@ds235788.mlab.com:35788/icbcifras';

mongoose.connection.on('connected', function () {  
    console.log('Mogoose conectado!!! Upa Lelê!!! Power Rangers Go Here =>> ' + URI);
});

mongoose.connection.on('error',function (err) {  
    console.log('Ai, ai, ai, ai, ai... deu erro aki sô: ' + err);
});

mongoose.connection.on('disconnected', function () {  
    console.log('Atenção: Mongoose desconectado" :O');
});

mongoose.connection.on('open', function () {  
    console.log("Conexão com o  Mongoose aberta! Let's Go Kamen Riders!!! o/");
});

process.on('SIGINT', function() {  
    mongoose.connection.close(function () {
      console.log('Fim da aplicação - Mongoose desconectado');
      process.exit(0);
    });
});

const setList = new Schema(
    {
        dataMinistracao: Date,
        ministro: String,
        musicas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Musicas' }],
        musicos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Musicos' }],
    }, { collection: 'setList'}
);

module.exports = { Mongoose: mongoose, SetList: setList, URI }
