const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const cors = require("cors");
const mysql = require("mysql");
require("dotenv").config();
//const { query } = require("./src/conectionDb"); // Assuming your connection file is named 'connection.js'

const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const db = mysql.createConnection({
    host: localhost,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

/*app.get("/", async (req, res) => {
    try {
        const rows = await query("SELECT * FROM appartement");
        res.send(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal server error");
    }
});*/

app.get("/", (req, res) => {
    const sql = "SELECT * FROM appartement";
    db.query(sql, (err, data) => {
        if (err) {
            console.error("Error retrieving data: " + err.message);
            return res.status(500).json({ error: "Error retrieving data" }); // Return an error response
        }
        return res.json(data);
    });
});

const port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
