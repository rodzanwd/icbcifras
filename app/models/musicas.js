const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const musicas = new Schema(
    {
        cifra: String,
        letra: String,
        video: String
    }, { collection: 'musicas' }
);

module.exports = { Mongoose: mongoose, Musicas: musicas}