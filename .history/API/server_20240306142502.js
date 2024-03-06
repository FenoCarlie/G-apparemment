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

const registerAppartement = async (req, res, existingNumApp) => {
    try {
        let numApp = req.body.numApp;
        let design = req.body.design;
        let loyer = req.body.loyer;

        const existingNumApp = await Appartement.findOne({ numApp });
        if (existingNumApp) {
            return res.status(400).send("NumApp already registered.");
        }

        if (!design) {
            return res.status(400).send("design is required.");
        }

        if (!loyer) {
            return res.status(400).send("loyer is required.");
        }

        if (!numApp || numApp.length < 2) {
            return res.status(400).send("numApp is required.");
        } else if (existingNumApp) {
            const existingAppartementWithExistingNumApp =
                await Appartement.findOne({
                    numApp: existingNumApp,
                });
            if (existingAppartementWithExistingNumApp) {
                return res
                    .status(400)
                    .send("The existing numApp is already registered.");
            }
        }

        const newAppartement = new Appartement({
            numApp,
            design,
            loyer,
        });

        await newAppartement.save();
        res.status(201).send("Appartement registered successfully.");
    } catch (error) {
        console.error("Error while registering the appartement:", error);
        res.status(500).send("Error while registering the appartement.");
    }
};

app.get("/api/appartements", async (req, res) => {
    try {
        const appartements = await Appartement.find({});
        res.status(200).send(appartements);
    } catch (error) {
        console.error("Error while fetching appartements:", error);
        res.status(500).send("Error while fetching appartements.");
    }
});

app.post("/api/create", (req, res) => {
    const existingNumApp = req.query.existingNumApp;
    registerAppartement(req, res, existingNumApp);
});

app.put("/api/update/:_id", async (req, res) => {
    try {
        const _id = req.params._id;
        const { numApp, design, loyer } = req.body;

        const existingAppartement = await Appartement.findById(_id);
        if (!existingAppartement) {
            return res.status(404).send("Appartement not found.");
        }

        if (numApp) existingAppartement.numApp = numApp;
        if (design) existingAppartement.design = design;
        if (loyer) existingAppartement.loyer = loyer;

        await existingAppartement.save();
        res.status(200).send("Appartement updated successfully.");
    } catch (error) {
        console.error("Error while updating the appartement:", error);
        res.status(500).send("Error while updating the appartement.");
    }
});

app.get("/api/appartement/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const appartement = await Appartement.findById(id);
        if (!appartement) {
            return res.status(404).send("Appartement not found.");
        }
        res.status(200).send(appartement);
    } catch (error) {
        console.error("Error while fetching appartement:", error);
        res.status(500).send("Error while fetching appartement.");
    }
});

app.put("/api/update/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const { numApp, design, loyer } = req.body;

        const existingAppartement = await Appartement.findById(id);
        if (!existingAppartement) {
            return res.status(404).send("Appartement not found.");
        }

        if (numApp) existingAppartement.numApp = numApp;
        if (design) existingAppartement.design = design;
        if (loyer) existingAppartement.loyer = loyer;

        await existingAppartement.save();
        res.status(200).send("Appartement updated successfully.");
    } catch (error) {
        console.error("Error while updating the appartement:", error);
        res.status(500).send("Error while updating the appartement.");
    }
});

app.delete("/api/appartement/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Appartement.deleteOne({ _id: id });
        if (result.deletedCount === 0) {
            return res.status(404).send("Appartement not found.");
        }
        res.status(200).send("Appartement deleted successfully.");
    } catch (error) {
        console.error("Error while deleting the appartement:", error);
        res.status(500).send("Error while deleting the appartement.");
    }
});

app.get("/api/loyers", async (req, res) => {
    try {
        const totalLoyer = await Appartement.aggregate([
            { $group: { _id: null, totalLoyer: { $sum: "$loyer" } } },
        ]);

        const minLoyer = await Appartement.find().sort({ loyer: 1 }).limit(1);
        const maxLoyer = await Appartement.find().sort({ loyer: -1 }).limit(1);

        res.status(200).send({
            totalLoyer: totalLoyer[0]?.totalLoyer || 0,
            minLoyer: minLoyer[0]?.loyer || 0,
            maxLoyer: maxLoyer[0]?.loyer || 0,
        });
    } catch (error) {
        console.error("Error while fetching loyers:", error);
        res.status(500).send("Error while fetching loyers.");
    }
});

const port = process.env.PORT || 7000; // Use environment variable for port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
