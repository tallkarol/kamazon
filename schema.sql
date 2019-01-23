DROP DATABASE IF EXISTS kamazon_DB;
CREATE DATABASE kamazon_DB;

USE kamazon_DB;
-- SELECT * FROM products;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Socks", "Clothing", 8.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tennis Ball", "Sports", 2.75, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pencil", "Craft", .75, 400);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("T-Shirt", "Clothing", 10.50, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Headphones", "Electronics", 20.00, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Camera", "Electronics", 400.00, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apple", "Grocery", 1.00, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Paper", "Craft", 20.00, 350);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Basketball", "Sports", 18.25, 150);