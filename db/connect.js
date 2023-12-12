const mongoose= require('mongoose');

const connectDB = (url) => {
    mongoose
        .connect(url, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });

    console.log("Server is connected to the DB");
};

module.exports = connectDB;
