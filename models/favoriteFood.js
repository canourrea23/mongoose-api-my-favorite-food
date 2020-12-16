const mongoose = require('mongoose');

const favoriteFoodSchema = new mongoose.Schema({
    name: String,
    foodType: String,
    origin: String,
    calories: Number,
})

module.exports =  mongoose.model('fave', favoriteFoodSchema);