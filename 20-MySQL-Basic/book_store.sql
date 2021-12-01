-- Show Database --
SHOW DATABASES;

-- Create Database --
CREATE DATABASE bookstore;

USE bookstore;
SHOW TABLES;

-- Create Table --
CREATE TABLE `books` (
`id` INT AUTO_INCREMENT PRIMARY KEY,
`author1` VARCHAR(100) NOT NULL,
`author2` VARCHAR(100),
`author3` VARCHAR(100),
`title` VARCHAR(100),
`description` TEXT,
`place_sell` CHAR(3),
`stock` INT DEFAULT 0,
`creation_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- update column --
SELECT * FROM books;
ALTER TABLE books
  ADD `price` INT DEFAULT 0,
  ADD `status` ENUM('available', 'out of stock', 'limited'),
  DROP place_sell;
  
-- insert column -- 
SELECT * FROM books;
INSERT INTO books 
  VALUES ('1', 'a', 'b', 'c', 'buku abc', 'deskripsi buku abc', '10', DEFAULT, 5000, 'available'),
  ('', 'd', 'e', 'f', 'buku def', 'deskripsi buku def', DEFAULT, DEFAULT, 50000, 'out of stock'),
  ('', 'J', 'K', 'Rowling', 'Harry Potter', 'deskripsi buku Harry Potter', 200, DEFAULT, 99000, 'limited');
  
-- select all row --
SELECT * FROM books;

-- alias -- 
SELECT id AS ID, author1 AS A1, author2 AS A2, author3 AS A3 FROM books;

-- select where -- 
SELECT * FROM books
WHERE id=2;

SELECT * FROM books
WHERE id=2 AND author1='d';

SELECT * FROM books
WHERE id=2 OR author1='a';

SELECT * FROM books
WHERE NOT id=2;

SELECT * FROM books
ORDER BY id;

SELECT * FROM books
LIMIT 2;

UPDATE books
SET author1='aa', price=6000
WHERE id=1;

DELETE FROM books
WHERE id=1;




  
