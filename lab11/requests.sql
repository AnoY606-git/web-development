Создаём базу данных:
CREATE DATABASE university;  


Создаём таблицу студенты:
CREATE TABLE student
(
    student_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    age VARCHAR(3) NOT NULL,
    group_id INT NOT NULL,
    FOREIGN KEY (group_id) REFERENCES study_group(group_id) ON DELETE CASCADE
) DEFAULT CHARACTER SET utf8mb4
  COLLATE `utf8mb4_unicode_ci`
  ENGINE = InnoDB
;


Заполняем таблицу данными о студентах:
INSERT INTO student(first_name, last_name, age, group_id)
VALUES ('Кирилл', 'Санников', '20', 1),
       ('Ирина', 'Коскина', '19', 1),
       ('Дарья', 'Фищенко', '20', 1),
       ('Александр', 'Милютин', '18', 1),
       ('Артём', 'Хорошавин', '20', 1),
       ('Алексей', 'Лебедев', '19', 2),
       ('Александра', 'Садова', '19', 2),
       ('Дмитрий', 'Карташов', '20', 2),
       ('Марина', 'Макарова', '19', 2),
       ('Александр', 'Прохоров', '18', 2),
       ('Анастасия', 'Седёлкина', '19', 3),
       ('Никита', 'Лобанов', '18', 3),
       ('Александр', 'Жулин', '18', 3),
       ('Максим', 'Романов', '19', 3),
       ('Степан', 'Королёв', '19', 3),
       ('Елизавета', 'Киселёва', '18', 4),
       ('Роман', 'Нефёдов', '21', 4),
       ('Иван', 'Макаров', '18', 4),
       ('Сергей', 'Михеев', '18', 4),
       ('Денис', 'Юрьев', '19', 4),
       ('Иван', 'Пакшин', '18', 5),
       ('Кирилл', 'Осокин', '19', 5),
       ('Даниил', 'Заболотских', '18', 5),
       ('Александр', 'Шумков', '19', 5),
       ('Фирдавси', 'Нуров', '18', 5),
       ('Владимир', 'Ласточкин', '18', 6),
       ('Даниил', 'Ясновский', '19', 6),
       ('Александр', 'Мустафин', '18', 6),
       ('Николай', 'Суманеев', '19', 6),
       ('Николай', 'Кузнецов', '18', 6),
       ('Лев', 'Виноградов', '19', 7),
       ('Анастасия', 'Новикова', '18', 7),
       ('Даниил', 'Царегородцев', '19', 7),
       ('Дмитрий', 'Апакаев', '18', 7),
       ('Андрей', 'Иванов', '20', 7),
       ('Антон', 'Герасимов', '19', 8),
       ('Глеб', 'Модин', '18', 8),
       ('Ильсаф', 'Хасанов', '20', 8),
       ('Дмитрий', 'Гриничев', '20', 8),
       ('Дмитрий', 'Андреев', '18', 8),
       ('Анастасия', 'Куликова', '19', 9),
       ('Хератхнаяк', 'Нисансала', '24', 9),
       ('Раджапакша', 'Пубуду', '25', 9),
       ('Константин', 'Андреев', '18', 9),
       ('Анастасия', 'Антропова', '19', 9);
       
       
Создаём таблицу группы:
CREATE TABLE study_group
(
    group_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    faculty_id INT NOT NULL
) DEFAULT CHARACTER SET utf8mb4
  COLLATE `utf8mb4_unicode_ci`
  ENGINE = InnoDB
;    


INSERT INTO study_group(name, faculty_id)
VALUES ('PS-11', 1),
       ('PS-12', 1),
       ('PS-13', 1),
       ('AI-11', 2),
       ('AI-12', 2),
       ('AI-13', 2),
       ('RS-11', 3),
       ('RS-12', 3),
       ('RS-13', 3);


Создаём таблицу факультеты:
CREATE TABLE faculty
(
    faculty_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL
) DEFAULT CHARACTER SET utf8mb4
  COLLATE `utf8mb4_unicode_ci`
  ENGINE = InnoDB
;


Заполняем таблицу данными о факультетах:
INSERT INTO faculty(name)
VALUES ('ФИиВТ'),
       ('ЭФ'),
       ('РТФ');


Запросы
(1)
SELECT * FROM student
WHERE
    age = 19;    


(2)
SELECT * FROM student
WHERE
    group_id = 3;   


(3)
SELECT
    s.first_name AS 'First Name',
    s.last_name AS 'Last Name',
    s.age AS 'Age'
FROM study_group g
LEFT JOIN faculty f ON g.faculty_id = f.faculty_id
LEFT JOIN student s ON s.group_id = g.group_id
WHERE
    f.name = 'ФИиВТ';


(4)
SELECT
    f.name AS 'Faculty',
    g.name AS 'Group'
FROM study_group g
LEFT JOIN faculty f ON g.faculty_id = f.faculty_id
LEFT JOIN student s ON s.group_id = g.group_id
WHERE
    s.student_id=  '19';
    

SELECT
    s.first_name AS 'First Name',
    s.last_name AS 'Last Name',
    s.age AS 'Age'
FROM student s
LEFT JOIN study_group g ON g.group_id = s.group_id
WHERE
    g.name = 'PS-13';    


Удаление записи из таблицы
DELETE FROM study_group
    WHERE group_id = 2;

