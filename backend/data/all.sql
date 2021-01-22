--------------------- CATEGORIES
    CREATE TABLE IF NOT EXISTS categories
(
    id INTEGER PRIMARY KEY GENERATED ALWAYS  AS IDENTITY,
    name VARCHAR (500) NOT NULL
    );


--------------------- PRODUCTS
    CREATE TABLE
IF NOT EXISTS 

    products
(

    id INTEGER PRIMARY KEY GENERATED ALWAYS  AS IDENTITY,
    name VARCHAR (500) NOT NULL,
    description VARCHAR (500) NOT NULL,
    brand VARCHAR (500) NOT NULL,
    imgurl VARCHAR (500) NOT NULL,
    price INTEGER NOT NULL,
    category_id INTEGER,
    FOREIGN KEY (category_id) REFERENCES categories (id)
  

    );


--------------------- USERS
    CREATE TABLE IF NOT EXISTS users
(
    id INTEGER PRIMARY KEY GENERATED ALWAYS  AS IDENTITY,
    name VARCHAR (500) NOT NULL
    );


--------------------- REVIEWS

    CREATE TABLE IF NOT EXISTS reviews
(

    id INTEGER PRIMARY KEY GENERATED ALWAYS  AS IDENTITY,
    comment VARCHAR (500) NOT NULL,
    rate integer NOT NULL,
    product_id INTEGER NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products (id),
    user_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id)
    
    );






--------------------- CART
    CREATE TABLE IF NOT EXISTS carts
(
    id INTEGER PRIMARY KEY GENERATED ALWAYS  AS IDENTITY,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id),
    product_id INTEGER NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products (id)
    );

