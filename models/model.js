const mongoose = require('../config/connection');

// MAKE NEW SCHEMA
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
})

// CREATE MODEL FRUIT
const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;