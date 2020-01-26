const mongoose = require('mongoose');

module.exports = mongoose.model('Game',{
    name:String,
    email:String,
    password:String,
    createAd:String
});