const inquirer = require('inquirer');
const fs = require('fs');

inquirer
.prompt({
    {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: ["Add Department", 
        "Add Role", 
        "Add Employee", 
        "Update Employee Role",
        "Update Employee Manager",
        -- "View Employees by Manager",
        -- "View Employees by Department",
        -- "Delete Department",
        -- "Delete Role",
        -- "Delete Employee",
        -- "View Department Employee Budget"
        ]
    },
    {
        type: "input",
        name: "department",
        message: "What is the name of the department?",
        when: (answers) => answers.action === "Add Department",
        validate: (input) => {
            if (input === "") {
                return "Please enter a department name."
            } 
            else if (department already exists) {
                return "This department already exists."
            }
            return true;
        }
    },
    {
        type: "input",
        name: "role-name",
        message: "What is the name of the role?",
        when: (answers) => answers.action === "Add Role",
        validate: (input) => {
            if (input === "") {
                return "Please enter a role name."
            } 
            else if (role already exists) {
                return "This role already exists."
            }
            return true;
        } 
    },
    {
        type: "input",
        name: "role-salary",
        message: "What is the salary of the role?",
        when: -- role-name asked,
        validate: (input) => {
            if (input === "") {
                return "Please enter a salary."
            } 
            else if (salary is not a number) {
                return "Please enter a number."
            }
            return true;
        }
    },
    {
        type: "input",
        name: "role-department",
        message: "What is the name of the department?",
        when: -- role-salary asked,
        validate: (input) => {
            if (input === "") {
                return "Please enter a department name."
            } 
            else if (department does not exist) {
                return "This department does not exist."
            }
            return true;
        } 
    },
    {
        type: "input",
        name: "employee-first_name",
        message: "What is the employee's first name?",
        when: (answers) => answers.action === "Add Employee" 
    },
    {
        type: "input",
        name: "employee-last_name",
        message: "What is the employee's last name?",
        when: -- employee-first_name asked,
        validate: (input) => {
            if (input === "") {
                return "Please enter a last name."
            } 
            return true;
        }
    },
    {
        type: "input",
        name: "employee-role",
        message: "What is the employee's role?",
        when: -- employee-last-name-asked,
        validate: (input) => {
            if (input === "") {
                return "Please enter a role."
            } 
            else if (role does not exist) {
                return "This role does not exist."
            }
            return true;
        }   
    },
    {
        type: "input",
        name: "employees-manager",
        message: "Who is the employee's manager?",
        when: -- employee-role asked,
        validate: (input) => {
            if (input === "") {
                return "Please enter a manager."
            } 
            else if (manager does not exist) {
                return "This manager does not exist."
            }
            return true;
        }
    },
    {
        type: "list",
        name: "update-role",
        message: "Which employee's role would you like to update?",
        when: (answers) => answers.action === "Update Employee Role" 
        choices: [employee list]
    }
});

module.exports = inquirer;