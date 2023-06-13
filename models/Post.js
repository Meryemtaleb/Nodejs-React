const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    sujet : {type: 'String'},
    auteur : {type: 'String'},
    description : {type: 'String'},
    date_creation : {type: 'Date'}
})

module.exports = mongoose.model('Post', postSchema);