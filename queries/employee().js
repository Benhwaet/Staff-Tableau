const db = require('../db/connection');


class Employees {
    constructor(id, first_name, last_name, role_id, manager_id) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.role_id = role_id;
        this.manager_id = manager_id;
    }

    viewAllEmployees() {
        const sql = `SELECT * FROM employees`;
        return db.promise().query(sql, (err, rows => {
            if (err) {
                console.log(err);
            }
            console.table(rows);
        }));
    }

    addEmployee() {
        const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) 
        VALUES ("${this.first_name}", "${this.last_name}", "${this.role_id}", "${this.manager_id}")`;
        return db.promise().query(sql, (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log(`${this.first_name} ${this.last_name} added to employees`);
            return result;
        });
    }
}

module.exports = Employees;