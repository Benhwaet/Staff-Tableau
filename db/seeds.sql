INSERT INTO department (name)
VALUES ("Sales"),
("Finance"),
("Engineering"),
("Legal");

INSERT INTO roles (title, salary, department_id)
VALUES 
("Sales Lead", 110000, 1),
("Salesperson", 80000, 1),
("Account Manager", 160000, 2),
("Accountant", 125000, 2),
("Lead Engineer", 150000, 3),
("Software Engineer", 120000, 3),
("Legal Team Lead", 250000, 4),
("Lawyer", 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, managers_id) 
VALUES 
("Parvati", "Gupta", 1, null),
("Valerie", "DesChamps", 2, 1),
("Kadar", "Ngambe", 3, null),
("Hakumi", "Sato", 4, 3),
("Bokyung", "Kim", 5, null),
("Lorelei", "McKinnon", 6, 5),
("Beatriz", "Almeida", 7, null),
("Ocean", "Vong", 8, 7);


