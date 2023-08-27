const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = (req, res) => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log("DB ka connection successfully"))
        .catch((error) => {
            console.log("db Connection failed");
            console.log(error);
            process.exit(1);
        })
};