const mongoose = require('mongoose');
const connectDb = () => {
    const mongoURI = 'mongodb://localhost:27017';
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Database connected");
        })
        .catch((err) => {
            console.log(err);
        });
};
module.exports = connectDb;