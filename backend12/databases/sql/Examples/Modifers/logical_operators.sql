/*
    //  AND  //
    - Show products that are available and above a minimum price.
*/ 

SELECT name, price, stock FROM products
WHERE price > 20 AND stock > 0;

/*
    //  OR  //
    - Filter products by multiple categories.
*/

SELECT name, price FROM products
WHERE category = 'Books' OR category = 'Electronics';

/*
    //  NOT  //
    - Display only active users in an admin panel.
*/

SELECT id, email FROM users
WHERE NOT status = 'banned';

/*
    //  Combining Logical Operators  //
    - Show available products from selected categories.
*/

SELECT name, price, stock FROM products
WHERE (category = 'Books' OR category = 'Electronics') AND stock > 0;