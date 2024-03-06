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

const registerUser = async (req, res, existingNumApp) => {
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

        const existingUser = await User.findOne({ numApp });
        if (existingUser) {
            return res.status(400).send("numApp already registered.");
        }

        if (!design) {
            return res.status(400).send("design is required.");
        }

        if (!numApp || numApp.length < 2) {
            return res.status(400).send("numApp is required.");
        } else if (existingNumApp) {
            const existingUserWithExistingNumApp = await Appartement.findOne({
                numApp: existingNumApp,
            });
            if (existingUserWithExistingNumApp) {
                return res
                    .status(400)
                    .send("The existing NumApp is already registered.");
            }
        }
        const newUser = new User({
            numApp,
            design,
            loyer,
        });

        await newUser.save();
        res.status(201).send("User registered successfully.");
    } catch (error) {
        console.error("Error while registering the user:", error);
        res.status(500).send("Error while registering the user.");
    }
};

app.post("/api/register", (req, res) => {
    const existingEmail = req.query.existingEmail;
    const existingPhone = req.query.existingPhone;
    registerUser(req, res, existingEmail, existingPhone);
});

const port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
