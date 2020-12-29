const mongoose = require('../config/connection');

// MAKE NEW SCHEMA
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    rating: {
        type: Number,
        min: [1, 'Too few ranting'],
        max: 5

    },
    review: {
        type: String,
        required: [true, 'review is required']
    }
})

// CREATE MODEL FRUIT
const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;