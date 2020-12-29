const mongoose = require('./config/connection');
const Fruit = require('./models/model');

// * SINGLE INSERT FRUIT
// DATA TO INSERTED
const apple = new Fruit({
    name: 'Apple',
    rating: 8,
    review: "rasa apple"
})

// INSERT DATA
apple.save(err => {
    if (err) {
        console.log(err)
        mongoose.connection.close()
    } else {
        console.log('success add new fruit')
        mongoose.connection.close()
    }
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
    return new Fruit(el)
});

// INSERT MULTIPLE FRUIT
Fruit.insertMany(fruits, err => {
    if (err) {
        console.log(err)
        mongoose.connection.close()
    } else {
        console.log('success add multiple new fruit')
        mongoose.connection.close()
    }
})