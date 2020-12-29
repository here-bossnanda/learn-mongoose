const mongoose = require('./config/connection');
const People = require('./models/people');
const { Fruit } = require('./models/fruit');


// * INSERTED DATA WITH RELATIONSHIP 
// FRUIT TO INSERT
const watermelon = new Fruit({
    name: 'Watermelon',
    rating: 5,
    review: "rasa Watermelon"
})

// INSERT DATA
watermelon.save(err => {
    if (err) {
        console.log(err)
        mongoose.connection.close()
    } else {
        console.log('success add new fruit')
        mongoose.connection.close()
    }
});

// PERSON INSERT
const person = new People({
    name: 'Mochammad Trinanda Noviardy',
    age: 22,
    favoriteFruit: watermelon
})

// INSERT DATA
person.save(err => {
    if (err) {
        console.log(err)
        mongoose.connection.close()
    } else {
        console.log('success add new person')
        mongoose.connection.close()
    }
});