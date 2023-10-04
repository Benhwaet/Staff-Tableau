const db = require('../db/connection');

class Roles {
    constructor(id, title, salary, department_id) {
        this.id = id;
        this.title = title;
        this.salary = salary;
        this.department_id = department_id;
    }

    viewAllRoles() {
        const sql = `SELECT * FROM roles`;
        return db.promise().query(sql, (err, rows) => {
            if (err) {
                console.log(err);
            }
            console.table(rows);
        });
    }

    addRole() {
        const sql = `INSERT INTO roles (title, salary, department_id) 
        VALUES ("${this.title}", "${this.salary}", "${this.department_id}")`;
        return db.promise().query(sql, (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log(`${this.title} added to roles`);
            return result;
            
        });
    }

    updateEmployeeRole() {
        const sql = `UPDATE employee SET role_id = "${this.role_id}", WHERE id = "${this.id}"`;
        return db.promise().query(sql, (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log(`${this.title} updated`);
            return result;     
        });
    }
}

module.exports = Roles;