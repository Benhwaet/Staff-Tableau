-- view all departments
SELECT * FROM department;

--view all roles
SELECT * FROM roles;

--view all employees
SELECT * FROM employee;

--add a department
INSERT INTO department (name)
VALUES ('Test');

--add a role
INSERT INTO roles (title, salary, department_id)
VALUES ('', '', '');

--add an employee
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('', '', '', '');

--update an employee role
UPDATE employee
SET role_id = ''
WHERE id = '';

--update an employee manager
UPDATE employee
SET manager_id = ''
WHERE id = '';

--view employees by manager
SELECT * FROM employee
WHERE manager_id = '';

--view employees by department
SELECT * FROM employee
WHERE department_id = '';

--delete departments
DELETE FROM department
WHERE id = '';

--delete roles
DELETE FROM roles
WHERE id = '';

--delete employees
DELETE FROM employee
WHERE id = '';

--view the total utilized budget of a department -- ie the combined salaries of all employees in that department
SELECT SUM(salary) FROM roles
WHERE department_id = '';






