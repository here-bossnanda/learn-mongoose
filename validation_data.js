const mongoose = require('./config/connection');
const Fruit = require('./models/model');

// * SINGLE INSERT FRUIT TEST VALIDATION
// DATA TO INSERTED
const cherry = new Fruit({
    // name: 'Cherry',
    rating: 8,
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