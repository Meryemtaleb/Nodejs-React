// Mongodb et Mongoose :
const mongoose = require('mongoose');

const messageRecuSchema = new mongoose.Schema({
  msgRecu: { 			'type': {type: String},
  'value': [String]} 
 
});

module.exports = mongoose.model('MessageRecu', messageRecuSchema);