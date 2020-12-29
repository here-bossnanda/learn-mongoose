const mongoose = require('./config/connection');
const { Fruit } = require('./models/fruit');

// UPDATE
// UPDATE USING UPDATE ONE
Fruit.updateOne({ _id: '5feadeee82ca9f52e8045edc' }, { name: 'Manggo', ranting: 4, review: 'rasa manggo' }, (err, fruit) => {
    if (err) console.log(err);
    else {
        console.log(fruit, "success update apple to manggo");
        mongoose.connection.close();
    }
})

// DELETE 
// DELETE USING DELETE ONE
Fruit.deleteOne({ _id: '5feadeee82ca9f52e8045edf' }, (err, fruit) => {
    if (err) console.log(err);
    else {
        console.log(fruit, "successfully delete kiwi");
        mongoose.connection.close();
    }
})