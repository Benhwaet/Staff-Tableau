const queries = {
    allDepartments: `SELECT * FROM department`,

    addDepartment: `INSERT INTO department (name) VALUES (?)`,

    deleteDepartment: `DELETE FROM department WHERE id = ?`,

    allRoles: `SELECT * FROM roles`,

    addRole: `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`,

    deleteRole: `DELETE FROM roles WHERE id = ?`,

    allEmployees: `SELECT * FROM employee`,

    addEmployee: `INSERT INTO employee (first_name, last_name, role_id, managers_id) VALUES (?, ?, ?, ?)`,

    deleteEmployee: `DELETE FROM employee WHERE id = ?`,

    updateEmployeeRole: `UPDATE employee SET role_id = ? WHERE id = ?`
};

module.exports = queries;