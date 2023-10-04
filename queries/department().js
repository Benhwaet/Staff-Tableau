const db = require('../db/connection');
const consoleTable = require('console.table');

class Departments {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    viewAllDepartments() {
        const sql = `SELECT * FROM departments`;
        return db.promise().query(sql, (err, rows) => {
            if (err) {
                console.log(err);
            }
            consoleTable(rows);
        });
    }

    addDepartment() {
        const sql = `INSERT INTO departments (name) 
        VALUES ("${this.name}")`;
        return db.promise().query(sql, (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log(`${this.name} added to departments`);
            return result;
        }
        )};
    }

module.exports = Departments;