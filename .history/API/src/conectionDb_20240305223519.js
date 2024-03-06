const mongoose = require("mongoose");
require("dotenv").config();

const Url = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authMechanism=DEFAULT&authSource=admin`;
//const Url = `mongodb://userAdmin:adminpwd@localhost:27017/?authMechanism=DEFAULT`;

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
            type: int,
            required: true,
        },
    },
    { timestamps: true }
);

const Appartement = mongoose.model("Appartement", appartSchema);

module.exports = Appartement;
