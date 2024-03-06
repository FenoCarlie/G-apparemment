const mysql = require("mysql");
require("dotenv").config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Promisify the pool's query method
const query = (sql, args) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
            }

            connection.query(sql, args, (err, rows) => {
                connection.release(); // Release the connection back to the pool

                if (err) {
                    reject(err);
                }

                resolve(rows);
            });
        });
    });
};

// Log a success message to the console when the connection is successful
pool.getConnection((err, connection) => {
    if (err) {
        console.error("Error connecting to the database: ", err);
    } else {
        console.log("Connected to the database");
        connection.release();
    }
});

module.exports = { query };
