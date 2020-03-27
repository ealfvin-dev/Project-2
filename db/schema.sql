CREATE DATABASE art_db;

USE art_db;

CREATE TABLE collection1 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    picture VARCHAR NOT NULL,
    title VARCHAR,
    creator VARCHAR
);