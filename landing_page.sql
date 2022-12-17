CREATE DATABASE landing_page;

/* Poner en uso la base de datos */
USE landing_page;

/* Crear tabla Pedido */
DROP TABLE IF EXISTS MATRICULA;
CREATE TABLE MATRICULA
(
     NOMMAT varchar(70),
     EMAMAT varchar(70),
     CELMAT char(9),
     ASUMAT varchar(120),
     DESCMAT varchar(120),
     PRIMARY KEY (NOMMAT)
);

/* Insertar registros */
INSERT INTO MATRICULA
(NOMMAT, EMAMAT, CELMAT, ASUMAT, DESCMAT)
VALUES
('Ana Guerra Solano', 'anaguerra@gmail.com', '987654321' , 'Matricula para 3er grado', 'Quiero matricular a mi menor hijo de nombre...');

/* Listar los registros de la tabla PEDIDO */
SELECT * FROM MATRICULA;
SELECT
	NOMMAT AS 'NOMBRE',
    EMAMAT AS 'E-MAIL',
    CELMAT AS 'CELULAR',
    ASUMAT AS 'ASUNTO',
    DESCMAT AS 'DESCRIPCIÓN'
FROM MATRICULA;