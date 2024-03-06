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

const port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
