const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const cors = require("cors");
const Appartement = require("./src/conectionDb");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Corrected from 'express.urlencoded' to 'bodyParser.urlencoded'
app.use(cors());

const registerAppartement = async (req, res, existingNumApp) => {
    try {
        let numApp = req.body.numApp;
        let design = req.body.design;
        let loyer = req.body.loyer;

        // Additional input validation
        if (!loyer || loyer.length < 2) {
            // Corrected condition
            return res
                .status(400)
                .send("loyer must be at least 2 characters long.");
        }

        const existingAppartement = await Appartement.findOne({ numApp }); // Corrected variable name
        if (existingAppartement) {
            return res.status(400).send("numApp already registered.");
        }

        if (!design) {
            return res.status(400).send("design is required.");
        }

        if (!numApp || numApp.length < 2) {
            return res.status(400).send("numApp is required.");
        }

        const newAppartement = new Appartement({
            numApp,
            design,
            loyer,
        });

        await newAppartement.save();
        res.status(201).send("Appart registered successfully.");
    } catch (error) {
        console.error("Error while registering the appart:", error);
        res.status(500).send("Error while registering the appart.");
    }
};

app.post("/api/create", (req, res) => {
    registerAppartement(req, res); // Removed unnecessary parameters
});

/*app.get("/api/create", (req, res) => {
    res.send("GET request received");
});*/

const port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
