//import dependencies
const mysql = require('mysql2');
require('dotenv').config();

//connect to database
const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        //add your sql server password here
        password: "Mopipys#1914",
        database: "boring_db",
    },
    console.log('Connected to database')
);

module.exports = db;
