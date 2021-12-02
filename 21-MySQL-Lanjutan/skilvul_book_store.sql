-- Create Database --
CREATE DATABASE skilvulbookstore;
USE skilvulbookstore;
-- Create Table --
CREATE TABLE penerbit(
  id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(50) NULL,
  kota VARCHAR(50) NULL
);

CREATE TABLE penulis(
  id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(50) NULL,
  kota VARCHAR(50) NULL
);

CREATE TABLE buku(
  id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  ISBN VARCHAR(50) NULL,
  judul VARCHAR(50) NULL,
  penulis VARCHAR(50) NULL,
  penerbit INT(10) NULL,
  harga INT(10) NULL,
  stock INT(10) NULL,
  CONSTRAINT fk_penerbit_buku 
    FOREIGN KEY (penerbit)
    REFERENCES penerbit(id),
   
   CONSTRAINT fk_buku_penulis
     FOREIGN KEY (id)
     REFERENCES penulis(id)
);

SELECT * FROM buku
 INNER JOIN penerbit
 ON buku.penerbit=penerbit.id;

SELECT * FROM buku
 LEFT JOIN penerbit
 ON buku.penerbit=penerbit.id;
 
SELECT * FROM buku
 RIGHT JOIN penerbit
 ON buku.penerbit=penerbit.id;
 
SELECT MAX(harga) FROM buku
 WHERE stock<10;
 
SELECT MIN(harga) FROM buku;

SELECT COUNT(id) 
 FROM buku
 WHERE harga<100000;


