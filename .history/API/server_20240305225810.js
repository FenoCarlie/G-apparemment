const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const cors = require("cors");
const Appartement = require("./src/conectionDb");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const registerAppartement = async (req, res) => {
    try {
        let numApp = req.body.numApp;
        let design = req.body.design;
        let loyer = req.body.loyer;

        if (!loyer || loyer.length < 2) {
            return res
                .status(400)
                .send("loyer must be at least 2 characters long.");
        }

        const existingAppartement = await Appartement.findOne({ numApp });
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

app.post("/api/create", registerAppartement);

app.get("/", async (req, res) => {
    try {
        const appartements = await Appartement.find();
        res.status(200).json(appartements);
    } catch (error) {
        console.error("Error while fetching the appartments:", error);
        res.status(500).send("Error while fetching the appartments.");
    }
});

const port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
