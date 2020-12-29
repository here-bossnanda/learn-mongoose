const mongoose = require('mongoose');

// MAKE CONNECTION TO MONGGO
mongoose.connect('mongodb://localhost:27017/db-learn', { useNewUrlParser: true, useUnifiedTopology: true });

// MAKE NEW SCHEMA
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
})

// CREATE MODEL FRUIT
const Fruit = mongoose.model('Fruit', fruitSchema);

// * SINGLE INSERT FRUIT

// DATA TO INSERTED
const apple = new Fruit({
    name: 'Apple',
    rating: 8,
    review: "rasa apple"
})

// INSERT DATA
apple.save(err => {
    if (err) err => console.log(err)
    else console.log('success add new fruit')
});

// * MULTIPLE INSERT FRUIT
const bunchOfFruit = [{
    name: 'Banana',
    rating: 7,
    review: "rasa banana"
}, {
    name: 'Orange',
    rating: 8,
    review: "rasa orange"
}, {
    name: 'Kiwi',
    rating: 6,
    review: "rasa kiwi"
}];

// MAKE NEW FRUIT

const fruits = bunchOfFruit.map(el => {
    let newData = new Fruit({ name: el['name'], rating: el['rating'], review: el['review'] });
    return newData
});

Fruit.insertMany(fruits, err => {
    if (err) err => console.log(err)
    else {
        console.log('success add multiple new fruit')
        mongoose.connection.close()
    }
})