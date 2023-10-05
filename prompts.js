const prompts = {
    main : [
        {
            type: "list",
            name: "menu",
            message: "Which category would you like to view?",
            choices: [
                "Departments",
                "Roles",
                "Employees",
                "Exit"
            ]
        }
    ],
    
    departmentMenu: [
        {
            type: "list",
            name: "departmentMenu",
            message: "What would you like to do?",
            choices: [
                "View all departments",
                "Add a department",
                "Exit"
            ]
        }
    ],

    addDepartment: [
        {
            type: "input",
            name: "name",
            message: "What is the name of the new department?",
            validate: (answer) => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the department\'s name.";
            },
        }
    ],

    deleteDepartment: [
        {
            type: "input",
            name: "id",
            message: "What is the ID of the department you would like to delete?",
            validate: (answer) => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the department\'s ID.";
            },
        }
    ],

    roleMenu: [
        {
            type: "list",
            name: "roleMenu",
            message: "What would you like to do?",
            choices: [
                "View all roles",
                "Add a role",
                "Exit"
            ]
        }
    ],

    addRole: [
        {
            type: "input",
            name: "title",
            message: "What is the title of the new role?",
            validate: (answer) => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the role\'s title.";
            },
        },
        {
            type: "input",
            name: "salary",
            message: "What is the salary of the new role?",
            validate: (answer) => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the role\'s salary.";
            },
        },
        {
            type: "input",
            name: "department_id",
            message: "What is the department ID of the new role?",
            validate: (answer) => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the role\'s department ID.";
            },
        }
    ],

    deleteRole: [
        {
            type: "input",
            name: "id",
            message: "What is the ID of the role you would like to delete?",
            validate: (answer) => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the role\'s ID.";
            },
        }
    ],

    employeeMenu: [
        {
            type: "list",
            name: "employeeMenu",
            message: "What would you like to do?",
            choices: [
                "View all employees",
                "Add an employee",
                "Delete an employee",
                "Update an employee's role",
                "Exit"
            ]
        }
    ],

    addEmployee: [
        {
            type: "input",
            name: "first_name",
            message: "What is the employee's first name?",
            validate: (answer) => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the employee\'s first name.";
            },
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the employee's last name?",
            validate: (answer) => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the employee\'s last name.";
            },
        },
        {
            type: "input",
            name: "role_id",
            message: "What is the employee's role ID?",
            validate: (answer) => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the employee\'s role ID.";
            },
        },
        {
            type: "input",
            name: "manager_id",
            message: "What is the employee's manager ID?",
            validate: (answer) => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the employee\'s manager ID.";
            },
        }
    ],

    deleteEmployee: [
        {
            type: "input",
            name: "id",
            message: "What is the ID of the employee you would like to delete?",
            validate: (answer) => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the employee\'s ID.";
            },
        }
    ],

    updateRole: [
        {
            type: "input",
            name: "employee_id",
            message: "What is the ID of the employee you would like to update?",
            validate: (answer) => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the employee\'s ID.";
            },
        },
        {
            type: "input",
            name: "role-id",
            message: "What is the employee's new role ID?",
            validate: (answer) => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the employee\'s new role ID.";
            },
        }
    ]
};

module.exports = prompts;