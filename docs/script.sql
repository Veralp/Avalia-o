-- SQL do banco de dados de Tarefas a fazer
DROP DATABASE IF EXISTS vendas;
CREATE DATABASE vendas CHARSET=UTF8 COLLATE utf8_general_ci;
USE vendas;
-- DDL Criação da estrutura da tabela
CREATE TABLE vendedores(
    id integer not null primary key auto_increment,
    nome varchar(50) not null,
   matricula integer not null 
);
CREATE TABLE produtos(
    id integer not null primary key auto_increment,
    nome varchar(50) not null,
   valor integer not null 
   FOREIGN KEY (vendedores_id) REFERENCES vendedores(id)
);
CREATE TABLE vendas(
    id integer not null primary key auto_increment,
    data varchar(50) not null,
   quantidade integer not null,
   produto varchar(30)not null,
    FOREIGN KEY (produtos_id) REFERENCES produtos(id),
     
);

INSERT INTO vendedores VALUES
(null,"Stefany Antonella ","14644"),
(null,"Stella Viana","1516"),
(null,"Tomaz Isaac","14644"),
(null,"Osvaldo Galvão","72193");


INSERT INTO produtos VALUES
(null,"Samsung Galaxy M53","2211.11");
(null,"Motorola Moto G42","1499.00");
(null,"Rainha das Chamas","36.90");
(null,"Cronicas Saxonicas- ) cavaleiro da morte","57.90");
(null,"O milagre da manhã","56.59");
(null,"Lavadoura de roupas Brastemp","2199.00");
(null,"Fogão Atlas 4 bocas","899.00");

INSERT INTO vendas VALUES
(null,"2023-04-18 09:08:39","2","1");
(null,"2023-04-18 09:08:39","1","2");
(null,"2023-04-18 09:08:39","3","1");
(null,"2023-04-18 09:08:39","4","3");
(null,"2023-04-18 09:08:39","2","2");
(null,"2023-04-18 09:08:39","1","3");



