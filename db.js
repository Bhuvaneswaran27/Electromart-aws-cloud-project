const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "electromart-db.c7su62cgo0bo.ap-south-1.rds.amazonaws.com",
    user: "admin",
    password: "RkQ5fPAe72d224W",
    database: "electromart"
});

connection.connect((err) => {
    if (err) {
        console.log("Database connection failed:", err);
    } else {
        console.log("Connected to Amazon RDS");
    }
});

module.exports = connection;
