# Staff-Tableau

View and manage the departments, roles, and employees in a company using MySQL queries in Nodejs, using the Inquirer package.

## Description

This application is a command-line application that allows the user to view and manage the departments, roles, and employees in a company. The user can add departments, roles, and employees, view departments, roles, and employees, update employee roles, update an employee's manager, view employees by manager, view employees by department, delete a department, delete a role, delete an employee, and view the total utilized budget of a department.

Please note that this project is not optimized and the Update Employee Role function does not work. The program will be updated in the future to fix these issues.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Questions](#questions)
* [Credits](#credits)

## Installation

To install the program, clone it from GitHub using the command below:

```git clone git@github.com:Benhwaet/Staff-Tableau.git``` for use with a password=protected SSH key. Or,

```git clone https://github.com/Benhwaet/Staff-Tableau.git"``` for use with HTTPS.

To install necessary dependencies, run the following command:

```npm install```

The MySQL shell must be installed before running the program. The database and tables can be created by running the following commands through the shell in the command line:

```source db/schema.sql```

```source db/seeds.sql```

The corresponding files can also be run through MySQL Workbench.

## Usage

Once the database and tables are created, the program can be run by entering the following command in the command line:

```node index.js```

The user will be presented with a list of options to choose from.
The user can choose to:

* view all departments,
* view all roles,
* view all employees,
* add a department,
* add a role,
* add an employee,
* update an employee's role,
* delete an employee,
* or exit the program.

The user can navigate through the program by using the arrow keys to select an option and pressing enter. The user can also exit the program at any time by selecting the "Exit" option from the main menu.

## License

This project uses the MIT License. See the full license in the repository here: [MIT License](./LICENSE).

## Questions

Have any questions for the author? Contact this author via [Email](mailto:benhwaet@gmail.com) or through [GitHub](https://github.com/Benhwaet).

## Credits

This project was created by Benhwaet in the course of a full-stack web development bootcamp at the University of New Brunswick given by [edX](https://www.edx.org). Instructions and project development details and requirements are found in the References folder README.md file.

I consulted some of the following GitHub repositories for help with this project, as they were the most comprehensive examples provided when searching for use of SQL queries in JavaScript, using Nodejs and Inquirer:

<https://github.com/viakeegan/sql-employee-tracker-12>
<https://github.com/jpd61/employee-tracker>
<https://github.com/xNoirNightx/Employee-Tracker-SQL>
