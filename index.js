
const inquirer = require('inquirer');
const prompts = require('./prompts');
const queries = require('./queries');
const util = require('util');
const db = require('./db/connection');
const cTable = require('console.table');


//turn database queries into a promise (from github.com/WilliamCrownover)

db.query = util.promisify(db.query);


const viewAllDepartments = async () => {
    try {
        const departmentTable = await db.query(queries.allDepartments);
        console.table(departmentTable);
        return mainMenu();
    } catch (err) {
        console.log(err);
    }
};

const addDepartment = () => {
    inquirer.prompt(prompts.addDepartment)
        .then(async (answer) => {

            const newDepartment = answer.name;

            try {
                await db.query(queries.addDepartment, newDepartment);

                console.log(`Added ${newDepartment} to the database.`)

                return mainMenu();
            } catch (err) {
                console.log(err);
            }
        })
}

const viewDepartmentMenu = async () => {
    inquirer.prompt(prompts.departmentMenu)
        .then((answer) => {
            switch (answer.departmentMenu) {
                case "View all departments":
                    return viewAllDepartments();

                case "Add a department":
                    return addDepartment();

                case "Return to main menu":
                    return mainMenu();
            }
        })
}

const viewAllRoles = async () => {
    try {
        const roleTable = await db.query(queries.allRoles);
        console.table(roleTable);
        return mainMenu();
    } catch (err) {
        console.log(err);
    }
}

const addRole = () => {
    inquirer.prompt(prompts.addRole)
        .then(async (answer) => {

            const { title, salary, department_id } = answer;

            try {
                await db.query(queries.addRole, [title, salary, department_id]);

                console.log(`Added ${title} to roles.`)

                return mainMenu();
            } catch (err) {
                console.log(err);
            }
        })
};

const viewRoleMenu = async () => {
    inquirer.prompt(prompts.roleMenu)
        .then((answer) => {
            switch (answer.roleMenu) {
                case "View all roles":
                    return viewAllRoles();

                case "Add a role":
                    return addRole();

                case "Return to main menu":
                    return mainMenu();
            }
        })
};

const viewAllEmployees = async () => {
    try {
        const employeeTable = await db.query(queries.allEmployees);
        console.table(employeeTable);
        return mainMenu();
    } catch (err) {
        console.log(err);
    }
}

const addEmployee = () => {
    inquirer.prompt(prompts.addEmployee)
        .then(async (answer) => {

            const { first_name, last_name, role_id, manager_id } = answer;

            try {
                await db.query(queries.addEmployee, [first_name, last_name, role_id, manager_id]);

                console.log(`Added ${first_name} ${last_name} to employees.`)

                return mainMenu();
            } catch (err) {
                console.log(err);
            }
        })
};

const updateEmployeeRole = () => {
    inquirer.prompt(prompts.updateEmployeeRole)
        .then(async (answer) => {

            const { employee_id, role_id } = answer;

            try {
                await db.query(queries.updateRole, [employee_id, role_id]);

                console.log(`Updated employee role.`)

                return mainMenu();
            } catch (err) {
                console.log(err);
            }
        }
        )
}

const deleteEmployee = () => {
    inquirer.prompt(prompts.deleteEmployee)
        .then(async (answer) => {
            const { id } = answer;
            try {
                await db.query(queries.deleteEmployee, id);
                console.log(`Deleted employee.`);
                return mainMenu();
            } catch (err) {
                console.log(err);
            }
        })
};

const viewEmployeeMenu = async () => {
    inquirer.prompt(prompts.employeeMenu)
        .then((answer) => {
            switch (answer.employeeMenu) {
                case "View all employees":
                    return viewAllEmployees();

                case "Add an employee":
                    return addEmployee();

                case "Delete an employee":
                    return deleteEmployee();   

                case "Update an employee's role":
                    return updateEmployeeRole();

                case "Return to main menu":
                    return mainMenu();
            }
        })
};


//main prompt function
const mainMenu = () => {
    inquirer.prompt(prompts.main)
        .then((answer) => {
            switch (answer.menu) {
                case "Departments":
                    viewDepartmentMenu();
                    break;
                case "Roles":
                    viewRoleMenu();
                    break;
                case "Employees":
                    viewEmployeeMenu();
                    break;
                case "Exit Application":
                    process.exit(0);
            }
        })
};

mainMenu();