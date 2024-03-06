const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const cors = require("cors");
const Appartement = require("./src/conectionDb");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const registerAppartement = async (req, res, existingNumApp) => {
    try {
        let numApp = req.body.numApp;
        let design = req.body.design;
        let loyer = req.body.loyer;

        // Additional input validation
        if (!loyer) {
            return res
                .status(400)
                .send("loyer must be at least 2 characters long.");
        }

        const existingNumApp = await Appartement.findOne({ numApp });
        if (existingNumApp) {
            return res.status(400).send("numApp already registered.");
        }

        if (!design) {
            return res.status(400).send("design is required.");
        }

        if (!numApp || numApp.length < 2) {
            return res.status(400).send("numApp is required.");
        } else if (existingNumApp) {
            const existingNumAppWithExistingNumApp = await Appartement.findOne({
                numApp: existingNumApp,
            });
            if (existingNumAppWithExistingNumApp) {
                return res
                    .status(400)
                    .send("The existing NumApp is already registered.");
            }
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

app.post("/api/creat", (req, res) => {
    const existingEmail = req.query.existingEmail;
    const existingPhone = req.query.existingPhone;
    registerAppartement(req, res, existingEmail, existingPhone);
});

const port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
