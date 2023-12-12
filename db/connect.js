const mongoose= require('mongoose');
require('dotenv').config();

const connectionString = process.env.MONGO_DB_URI;

const connectDB = (url) => {
    mongoose
        .connect(connectionString, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
};

module.exports = connectDB;
