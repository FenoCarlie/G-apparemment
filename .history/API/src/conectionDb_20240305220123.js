const mongoose = require("mongoose");
require("dotenv").config();

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

const Url = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@localhost:27017/${DB_NAME}?authMechanism=DEFAULT`;

mongoose
    .connect(Url)
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((error) => {
        console.log("Database connection failed:", error);
    });

const appartSchema = new mongoose.Schema(
    {
        numApp: {
            type: String,
            required: true,
        },
        design: {
            type: String,
            required: true,
        },
        loyer: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Appartement = mongoose.model("Appartement", appartSchema);

module.exports = Appartement;
