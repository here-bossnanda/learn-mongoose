const mongoose = require('./config/connection');
const Fruit = require('./models/model');

// * SINGLE INSERT FRUIT
// DATA TO INSERTED
const cherry = new Fruit({
    name: 'Cherry',
    rating: 5,
    review: "rasa cherry"
})

// INSERT DATA
cherry.save(err => {
    if (err) {
        console.log(err)
        mongoose.connection.close()
    } else {
        mongoose.connection.close()
        console.log('success add new fruit')
    }
});

// * MULTIPLE INSERT FRUIT
// const bunchOfFruit = [{
//     name: 'Banana',
//     rating: 7,
//     review: "rasa banana"
// }, {
//     name: 'Orange',
//     rating: 8,
//     review: "rasa orange"
// }, {
//     name: 'Kiwi',
//     rating: 6,
//     review: "rasa kiwi"
// }];

// // MAKE NEW FRUIT
// const fruits = bunchOfFruit.map(el => {
//     return new Fruit(el)
// });

// INSERT MULTIPLE FRUIT
// Fruit.insertMany(fruits, err => {
//     if (err) err => console.log(err)
//     else {
//         console.log('success add multiple new fruit')
//         mongoose.connection.close()
//     }
// })