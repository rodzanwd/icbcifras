const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const musicos = new Schema(
    {
        violao: String,
        teclado: String,
        guitarra: String,
        baixo: String,
        bateria: String,
        backs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Backs' }],
    }
);

module.exports = { Mongoose: mongoose, Musicos: musicos}