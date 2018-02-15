const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const backs = new Schema(
    {
        back1: String,
        back2: String,
        back3: String
    }
);

module.exports = { Mongoose: mongoose, Backs: backs}