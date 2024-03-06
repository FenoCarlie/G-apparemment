const mongoose = require("mongoose");
require("dotenv").config();

const Url = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/?authMechanism=DEFAULT`;
//const Url = `mongodb://userAdmin:adminpwd@localhost:27017/?authMechanism=DEFAULT`;

mongodb: mongoose
    .connect(Url)
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((error) => {
        console.log("Database connection failed:", error);
    });

const appartSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Appartement = mongoose.model(`nodeDb.Appartement`, appartSchema);

module.exports = Appartement;
