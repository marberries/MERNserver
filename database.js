const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', false);

module.exports = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log('Connected to Mongodb......'));
}