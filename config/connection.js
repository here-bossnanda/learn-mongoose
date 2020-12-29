const mongoose = require('mongoose');

// MAKE CONNECTION TO MONGGO
mongoose.connect('mongodb://localhost:27017/db-learn', { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;