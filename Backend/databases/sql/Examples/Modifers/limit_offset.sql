/*
    //  LIMIT   //
    - Show only the first 5 products on a homepage
*/

SELECT name, price FROM products
LIMIT 5;

/*
    //  OFFSET   //
    - Load the third page of products (page size = 5).
*/

SELECT name, price FROM products
LIMIT 5 OFFSET 10;

/*
    //  Pagination Example   //
*/

SELECT name, price FROM products
ORDER BY name ASC
LIMIT 10 OFFSET 20;
