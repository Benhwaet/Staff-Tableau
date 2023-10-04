const inquirer = require('inquirer');
const { viewDepartmentMenu, departmentAdded } = require('./departments');

const { viewAllRoles, addRole, updateEmployeeRole } = require('../queries/role()')
const { viewAllEmployees, addEmployee } = require('../queries/employee()')

async function mainPrompt() {
    const answer = await inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'Exit'
            ]
        }
    ]);
    switch (answer.choice) {
        case 'View all departments':
            viewDepartmentMenu();
            break;
        case 'View all roles':
            viewAllRoles();
            break;
        case 'View all employees':
            viewAllEmployees();
            break;
        case 'Add a department':
            departmentAdded();
            break;
        case 'Add a role':
            addRole();
            break;
        case 'Add an employee':
            addEmployee();
            break;
        case 'Update an employee role':
            updateEmployeeRole();
            break;
        case 'Exit':
            connection.end();
            break;
    }
}

module.exports = mainPrompt;