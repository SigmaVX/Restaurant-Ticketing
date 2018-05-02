DROP DATABASE IF EXISTS orders_db; 
CREATE DATABASE orders_db;
USE orders_db;

CREATE TABLE orders(
  id INT NOT NULL AUTO_INCREMENT,
  menu_item VARCHAR(100) NOT NULL,
  quantity INT(2) NOT NULL,
  check_number VARCHAR(4) NOT NULL,
  table_number INT(1) NOT NULL,
  order_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  filled_time TIMESTAMP,
  order_filled BOOLEAN  NOT NULL DEFAULT FALSE,
  PRIMARY KEY (id)
);

INSERT INTO orders (menu_item, quantity, check_number, table_number) VALUE
("Nachos",1,"A342",4),
("Tex Mex Burger",2,"T288",2),
("Caesar Salad",2,"R911",2),
("Milk Shake",4, "G198",1)
;

