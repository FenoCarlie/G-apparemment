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

app.post("/api/create", async (req, res) => {
    try {
        // Créer une nouvelle instance de l'Appartement modèle avec les données reçues
        const nouvelAppartement = new Appartement({
            numApp: req.body.numApp,
            design: req.body.design,
            loyer: req.body.loyer,
        });

        // Sauvegarder l'appartement dans la base de données
        const appartementSauvegarde = await nouvelAppartement.save();

        res.status(201).json(appartementSauvegarde); // Retourner l'appartement ajouté en réponse
    } catch (error) {
        res.status(500).json({ message: error.message }); // Gérer les erreurs
    }
});

const port = process.env.PORT || 7000; // Use environment variable for port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
