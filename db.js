const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "electromart-db.c7su62cgo0bo.ap-south-1.rds.amazonaws.com",
    user: "admin",
    password: "RkQ5fPAe72d224W",
    database: "Electromart",
    waitforConnections: true,
    Connectionlimit: 10,
    queuelimit: 0
});

pool.getConnection((err, connection) => {
    if (err) {
        console.log("Database connection failed:", err);
    } else {
        console.log("Connected to Amazon RDS");
        connection.release();
    }
});

module.exports = Pool;
