/*
    //  Ascending Order (ASC)   //
    - Display products from the cheapest to the most expensive.
*/

SELECT name, price FROM products
ORDER BY price ASC;

/*
    //  Descending Order (DESC)  //
    - Show the most expensive products first.
*/

SELECT name, price FROM products
ORDER BY price DESC;

/*
    \\  Sorting by Multiple Columns  \\
    - Group products by category and sort each group by price.
*/

SELECT name, category, price FROM products
ORDER BY category ASC, price DESC;