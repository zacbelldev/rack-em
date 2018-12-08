var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  "hostId": {type: number, required: true},
  "playerId": {type: string, required: true},
  "roundId": {type: number},
  "cardId": [{type: number}]
});

module.exports = mongoose.model('draw-pile', schema);
