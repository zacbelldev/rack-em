var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    hostId: {type: number, required: true},
    numOfPlayers: {type: number}
});

module.exports = mongoose.model('games', schema);