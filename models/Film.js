const mongoose = require('mongoose');

const filmSchema = mongoose.Schema({
    nom : {type : 'String'},
    date : {type : 'String'},
    realisateur : {type : 'String'},
    genre : {type : 'String'},
    date_sortie : {type : 'Date'},
    date_creation : {type: 'Date'}
})

module.exports = mongoose.model('Film', filmSchema);