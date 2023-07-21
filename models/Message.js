// Mongodb et Mongoose :
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  contenu: { type: 'String',required: true },
  date_envoi: { type: 'Date' },
});

module.exports = mongoose.model('Message', messageSchema);