const mysql = require("mysql");
require("dotenv").config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 10, // Optional - limit the number of connections in the pool
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

module.exports = { query };
