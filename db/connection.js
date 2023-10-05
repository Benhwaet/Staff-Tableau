//import dependencies
const mysql = require('mysql2');
require('dotenv').config();

//connect to database
const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        //add your sql server password here
        password: process.env.PASSWORD,
        database: "boring_db",
    },
);

db.connect((err) => {
    if (err) throw err;
    console.log("Connected to database");
});

module.exports = db;
