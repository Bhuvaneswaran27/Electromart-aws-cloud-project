const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "electromart-db.c7su62cgo0bo.ap-south-1.rds.amazonaws.com",
    user: "admin",
    password: "RkQ5fPAe72d224W",
    database: "Electromart",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
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
