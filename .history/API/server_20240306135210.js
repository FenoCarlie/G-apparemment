const express = require("express");
const bodyParser = require("body-parser");
const Appartement = require("./src/config");
const _ = require("lodash");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Route POST pour l'insertion de données
app.post("/api/create", async (req, res) => {
    try {
        const nouvelAppartement = new Appartement({
            numApp: req.body.numApp,
            design: req.body.design,
            loyer: req.body.loyer,
        });

        const appartementSauvegarde = await nouvelAppartement.save();

        res.status(201).json(appartementSauvegarde);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
