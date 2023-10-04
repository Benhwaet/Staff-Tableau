const Departments = require("../queries/department()");
const inquirer = require("inquirer");
const mainPrompt = require("./main");
const consoleTable = require("console.table");

function viewDepartmentMenu() {
    let department = new Departments();
    department
    .viewAllDepartments()
    .then((rows) => {
        console.table(rows);
    })
        .then(() => {
            departmentMenu();
        })
}

function departmentMenu() {
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                "Add a department",
                "Return to main menu"
            ]
        }
    ]).then((answer) => {
        switch (answer.choice) {
            case "Add a department":
                Departments.addDepartment();
                break;
            case "Return to main menu":
                mainPrompt();
                break;
        }
    });
}

function departmentAdded() {
    inquirer.prompt([
        {
            type: "list",
            name: "newDepartment",
            message: "What is the new department's name?",
            validate: (answer) => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a department name.";
            },
        }])
        .then((answer) => {
            const department = new Departments(null, answer.newDepartment);
            addDepartment().then(() => {
                console.log("Department added.");
            })
                .then(() => {
                    departmentMenu();
                })
                .catch((err) => console.log(err));
        });
}



module.exports = { viewDepartmentMenu, departmentAdded };