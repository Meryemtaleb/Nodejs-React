const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    titre: {type : 'String'},
   username: {type : 'String'},
  imagename: {type : 'String'},
  

})

module.exports = mongoose.model('Blog', blogSchema);