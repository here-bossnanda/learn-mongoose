const mongoose = require('./config/connection');
const Fruit = require('./models/model');

// READ ALL DATA
Fruit.find((err, fruits) => {
    if (err) console.log(err);
    else {
        mongoose.connection.close();
        console.log(fruits, "from find");
    }
})

// READ BY FIND BY ID
Fruit.findById('5feadeee82ca9f52e8045edc', (err, fruit) => {
    if (err) console.log(err);
    else {
        mongoose.connection.close();
        console.log(fruit, "from find by id");
    }
})

// READ BY FIND ONE
Fruit.findOne({ name: 'Banana' }, (err, fruit) => {
    if (err) console.log(err);
    else {
        mongoose.connection.close();
        console.log(fruit, 'from find one');
    }
})