CREATE DATABASE creditosedu;
USE creditosedu;

CREATE TABLE credit_request (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    purpose VARCHAR(200),
    amount DECIMAL(10,2),
    status INT
);

CREATE TABLE User (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(200),
    password VARCHAR(400)
);