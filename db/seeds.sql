INSERT INTO department (name)
VALUES ("Regional"),
("Circulation"),
("Reference"),
("Adult/YA"),
("Children's");

INSERT INTO role (title, salary)
VALUES 
("Head of Department", 70,000),
("Library Assistant", 50,000),
("Library Clerk", 48,000),
("Security Guard", 45,000),
("Social Worker", 65,000);

INSERT INTO employee (first_name, last_name, role_id, department_id, manager_id)
VALUES ("Parvati", "Gupta", 1, 1, 1),
("Kadar", "Ngambe", 1, 2, 2),
("Ocean", "Vong", 3, 2),
("Erica", "Parson", 3, 2),
("Carol", "Richards", 3, 2),
("Lindsay", "Pitre", 3, 2),
("Blanche", "Dubois", 3, 3),
("Hakumi", "Sato", 1, 3, 3),
("Sakura", "Mizumi", 2, 3),
("Bokyung", "Kim", 1, 4, 4)
("Marisol", "Fernandez", 2, 4),
("Karim", "Abdulah", 2, 4)
("Freya", "Bjornsdottir", 2, 5),
("Hassan", "Ben Kemoun", 2, 5),
("Beatriz", "Almeida", 2, 5),
("Lorelei", "McKinnon", 1, 5, 5),
("Valerie, DesChamps", 5, 1);
