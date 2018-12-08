var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    playerId: {type: string},
    hostId: {type: number},
    roundId: {type: number},
    rack: [{type: number}]
});

module.exports = mongoose.model('racks', schema);