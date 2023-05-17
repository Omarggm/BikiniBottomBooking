DROP DATABASE IF EXISTS mvc_orders_db;
CREATE DATABASE mvc_orders_db;
-- USE mvc_orders_db;

-- CREATE TABLE Users (
--     user_id INT NOT NULL AUTO_INCREMENT,
--     username VARCHAR(50) NOT NULL,
--     password VARCHAR(50) NOT NULL,
--     email VARCHAR(50) NOT NULL,
--     PRIMARY KEY (user_id)
-- );

-- CREATE TABLE KrustyKrabMenu (
--     menu_id INT NOT NULL AUTO_INCREMENT,
--     item_name VARCHAR(50) NOT NULL,
--     item_description VARCHAR(50) NOT NULL,
--     item_price DECIMAL(10,2) NOT NULL,
--     PRIMARY KEY (menu_id),
--     -- FOREIGN KEY (user_id) REFERENCES Users(user_id)
-- );

-- CREATE TABLE ChumBucketMenu (
--     menu_id INT NOT NULL AUTO_INCREMENT,
--     item_name VARCHAR(50) NOT NULL,
--     item_description VARCHAR(50) NOT NULL,
--     item_price DECIMAL(10,2) NOT NULL,
--     PRIMARY KEY (menu_id),
--     FOREIGN KEY (user_id) REFERENCES Users(user_id)
-- );
-- CREATE TABLE ordersKrustyKrab (
--     order_id INT NOT NULL AUTO_INCREMENT,
--     user_id INT NOT NULL,
--     PRIMARY KEY (order_id),
--     FOREIGN KEY (user_id) REFERENCES Users(user_id),
--     FOREIGN KEY (menu_id) REFERENCES KrustyKrabMenu(menu_id),
-- );
-- CREATE TABLE ordersChumBucket (
--     order_id INT NOT NULL AUTO_INCREMENT,
--     user_id INT NOT NULL,
--     PRIMARY KEY (order_id),
--     FOREIGN KEY (user_id) REFERENCES Users(user_id),
--     FOREIGN KEY (menu_id) REFERENCES ChumBucketMenu(menu_id),
-- );



