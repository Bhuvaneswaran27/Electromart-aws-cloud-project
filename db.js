const mysql = require("mysql2");

const pool = mysql.createPool({
    host: process.env.DB_"electromart-db.c7su62cgo0bo.ap-south-1.rds.amazonaws.com",
    user: process.env.DB_"admin",
    password: process.env.DB_"RkQ5fPAe72d224W",
    database: process.env.DB_"Electromart",
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
