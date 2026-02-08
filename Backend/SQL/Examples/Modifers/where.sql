/*
    //  Equal to ( = )  //
    - Show users from a selected country in an admin panel.
*/

SELECT id, name, country FROM users
WHERE country = 'Chile';

/*
    //  Not equal to ( != )  //    
    - Hide discontinued products from the store.
*/

SELECT name, price FROM products
WHERE status != 'discontinued';

/*
    //  Less than ( < )  //
    - Inventory alert system.
*/

SELECT name, stock FROM products
WHERE stock < 10;

/*
    //  Less than or equal to ( <= )  //    
    - apply free shipping to small orders.
*/

SELECT id, total FROM orders
WHERE total <= 100;

/*
    //  Greater than ( > )  //
    - restrict content to adults.    
*/

SELECT name, age FROM users
WHERE age > 18;

/*
    //  Greater than or equal to ( >= )  //
    - Get products released from 2024 onwards.
*/

SELECT title, release_year FROM movies
WHERE release_year >= 2024;

/*
    //  Combining multiple conditions  //
    - Display available products within a price range.
*/

SELECT name, price, stock FROM products
WHERE price >= 20 AND stock > 0;