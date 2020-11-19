const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const membersSchema = new Schema({
    Name: String,
    Callsign: String,
    StreetAddress: String,
    City: String,
    State: String,
    ZipCode: Number,
    ExpMonth: Number,
    ExpYear: Number
})

const models = mongoose.connection.useDb('models');
module.exports = models.model('Members', membersSchema);
