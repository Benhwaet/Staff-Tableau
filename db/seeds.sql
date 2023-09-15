INSERT INTO department (name)
VALUES ("Regional"),
("Circulation"),
("Reference"),
("Adult/YA"),
("Children's");

INSERT INTO roles (title, salary)
VALUES 
("Head of Department", 70,000),
("Library Assistant", 50,000),
("Library Clerk", 48,000),
("Security Guard", 45,000),
("Social Worker", 65,000);

INSERT INTO employee (first_name, last_name, role_id, department_id, managers_id) --managers_id is basically the manager's employee_id
VALUES ("Parvati", "Gupta", 1, 1, 0),
("Valerie, DesChamps", 5, 1, 1)
("Kadar", "Ngambe", 1, 2, 1),
("Hakumi", "Sato", 1, 3, 1),
("Bokyung", "Kim", 1, 4, 1)
("Lorelei", "McKinnon", 1, 5, 1),
("Ocean", "Vong", 3, 2, 2),
("Erica", "Parson", 3, 2, 2),
("Carol", "Richards", 3, 2, 2),
("Lindsay", "Pitre", 3, 2, 2),
("Blanche", "Dubois", 3, 2, 3),
("Marisol", "Fernandez", 2, 4, 3),
("Aliyana", "Dobrev", 2, 4, 3),
("Dov", "Goldstein", 2, 4, 3)
("Freya", "Bjornsdottir", 2, 5, 4),
("Hassan", "Ben Kemoun", 2, 5, 4),
("Beatriz", "Almeida", 2, 5, 4),

