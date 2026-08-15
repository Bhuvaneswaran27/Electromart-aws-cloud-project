const mysql = require("mysql2");

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "Electromart",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.on("error", (err) => {
    console.error("MySQL pool error:", err);
});

pool.getConnection((err, connection) => {
    if (err) {
        console.log("Database connection failed:", err);
    } else {
        console.log("Connected to Amazon RDS");
        connection.release();
    }
});

module.exports = pool;
