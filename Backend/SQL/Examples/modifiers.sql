/*  
    //  WHERE   //
    - The ORDER BY clause sorts the result set. 
*/

SELECT * FROM users 
WHERE age > 18;
-- ✅ Retrieves all columns for users older than 18.

/*  
    //  ORDER BY   // 
    - ASC / DESC
    - The ORDER BY clause sorts the result set. 
*/

SELECT name, price FROM products
ORDER BY price ASC; -- ✅ Sorts products by price from lowest to highest.

SELECT name, price FROM products
ORDER BY price DESC; -- ✅ Sorts products by price from highest to lowest.

/*
    //  LIMIT and OFFSET   // 
    - LIMIT restricts the number of results, while OFFSET skips a specific number of rows. 
*/

SELECT * FROM users
LIMIT 5; -- ✅ Returns only the first 5 users.

SELECT * FROM users
LIMIT 5 OFFSET 10; -- ✅ Skips the first 10 users and returns the next 5.

/*  
    //  Logical Operators (AND, OR, NOT)  //
    - Logical operators allow you to combine multiple conditions. 
*/

SELECT * FROM users
WHERE age > 18 AND country = 'Chile'; -- ✅ Retrieves adult users from Chile.

SELECT * FROM users
WHERE role = 'admin' OR role = 'moderator'; -- ✅ Retrieves users with admin or moderator roles.

SELECT * FROM users
WHERE NOT status = 'inactive'; -- ✅ Retrieves all users except inactive ones.

/*  
    //  Comparisons and Pattern Matching (LIKE, IN, BETWEEN)  // 
*/

-- //   LIKE    // Used to search for a specific pattern. 
SELECT * FROM users
WHERE email LIKE '%@gmail.com'; -- ✅ Retrieves users with Gmail accounts.

--  //  IN  // Used to match values from a list. 
SELECT * FROM orders
WHERE status IN ('pending', 'shipped'); -- ✅ Retrieves orders that are pending or shipped.

--  //  BETWEEN  // Used to filter values within a range.
SELECT * FROM products
WHERE price BETWEEN 10 AND 50; -- ✅ Retrieves products priced between 10 and 50.

