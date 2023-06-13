const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    firstname: {type : 'String', required: true},
    lastname: {type : 'String'},
    email: {type : 'String', required: true, unique: true},
    message: {type : 'String'}
})

module.exports = mongoose.model('Contact', contactSchema);