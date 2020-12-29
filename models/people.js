const mongoose = require('../config/connection');
const { fruitSchema } = require('./fruit');

// MAKE NEW SCHEMA
const peopleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    age: {
        type: Number,
        min: [1, 'Too young'],
        max: 100

    },
    favoriteFruit: fruitSchema
})

// CREATE MODEL PEOPLE
const People = mongoose.model('People', peopleSchema);

module.exports = People;