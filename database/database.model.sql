
/*  CREATE DATABASE gest_funcionario */
CREATE DATABASE gest_funcionario;
USE gest_funcionario;


/*  CREATE A TABLE DEPARTAMENT */
CREATE TABLE IF NOT EXISTS department(
id_department int PRIMARY KEY AUTO_INCREMENT,
name_department varchar(100) NOT NULL,
data_create DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

/*  CREATE A TABLE FUNCIONARY */

CREATE TABLE IF NOT EXISTS funcionary(
id_funcionary INT PRIMARY KEY AUTO_INCREMENT,
name_funcionary VARCHAR(200) NOT NULL,
email_funcionary VARCHAR(200) NOT NULL UNIQUE,
phone_funcionary VARCHAR(20) NOT NULL UNIQUE,
salary_funcionary DECIMAL(10,2) NOT NULL,
status_funcionary ENUM('ACTIVO', 'INACTIVO') NOT NULL DEFAULT 'ACTIVO',
date_admition DATE NOT NULL,
departament_id INT NOT NULL,


FOREIGN KEY (departament_id) REFERENCES department(id_department)
)