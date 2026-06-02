# 🛢️ Structured Query Language (SQL)

Structured Query Language (SQL) is a programming language used to store, query, modify, and manage data in relational databases.

- Compatible with multiple database systems
- Integrates with languages like JavaScript, Python, Java, PHP, and C#
- Efficient for handling large volumes of data
- Essential for roles such as backend developer, data analyst, and data engineer

---

## 📑 Table of Contents

- [SQL Ecosystem](#-sql-ecosystem)
- []()
- [Data querying](#-data-querying)
- [Modifiers](#️-modifiers)
- [Data Writing](#️-data-writing)
- [Database Administration](#️-database-administration)
- [Table Administration](#-table-administration)
- [Relationships Between Tables](#-relationships-between-tables)
- [Creating Related Tables](#️-creating-related-tables)
- [Storing Related Data](#-storing-related-data)
- [Querying Related Data](#-querying-related-data)
- [Advanced Concepts](#-advanced-concepts)

---

## 🧩 SQL Ecosystem

An SQL-based system relies on a **Relational Database Management System** (RDBMS).

Key components:

- Database – Collection of tables
- Tables – Data in rows and columns
- Queries – SQL commands
- Indexes – Improve performance
- Relationships – Connect tables

**Popular RDBMS**:
MySQL, PostgreSQL, SQL Server, Oracle Database, SQLite

---

### /// restructure the layout and content ///

---

## 📊 Data Querying

This section focuses on retrieving information from a database using SQL queries.
It introduces basic statements such as SELECT to read data from one or more table columns.

- `SELECT`
- Selecting specific columns
- Using `FROM`
- Simple queries

```SQL
SELECT * FROM users; -- All Columns
SELECT title, price FROM books; -- Selecting Specific Columns
```

> [!TIP]
> Use `SELECT *` while learning or exploring a table, but prefer selecting specific columns in real projects to improve performance and readability.

---

## 🎛️ Modifiers

Modifiers allow you to filter, sort, and limit query results so you only get the data you need.

---

### `WHERE` & Comparison Operators

The `WHERE` clause is used to filter rows based on one or more conditions.
Comparison operators allow you to compare column values within those conditions.

Common comparison operators (`=`, `!=`, `<`, `<=`, `>`, `>=`)

```SQL
SELECT name, price FROM products
WHERE price > 50;
```

👉 **[View WHERE examples](./Examples/Modifers/where.sql)**

---

### Logical Operators

Logical operators let you combine multiple conditions in a single query.

- `AND` – all conditions must be true
- `OR` – at least one condition must be true
- `NOT` – negates a condition

```SQL
SELECT * FROM products
WHERE price > 20 AND stock > 0;
```

👉 **[View Logical Operators examples](./Examples/Modifers/logical_operators.sql)**

---

### Pattern Matching & Sets

`LIKE` Used for pattern matching with wildcards

- **%** → matches any number of characters
- **\_** → matches a single character

```SQL
SELECT id, email FROM users
WHERE email LIKE '%@gmail.com';
```

`IN` Checks if a value exists in a list.

```SQL
SELECT name, category FROM products
WHERE category IN ('Books', 'Electronics');
```

`BETWEEN` Filters values within a range.

```SQL
SELECT name, price FROM products
WHERE price BETWEEN 20 AND 100;
```

---

### ORDER BY

The ORDER BY clause is used to sort results.

- `ASC` → ascending (default)
- `DESC` → descending

```SQL
SELECT name, price FROM products
ORDER BY price DESC;
```

👉 **[View ORDER BY examples](./Examples/Modifers/order_by.sql)**

---

### LIMIT & OFFSET

These clauses are used to limit the number of rows returned and implement pagination.

```SQL
SELECT name, price FROM products
LIMIT 5 OFFSET 10;
```

👉 **[View LIMIT & OFFSET examples](./Examples/Modifers/limit_offset.sql)**

---

## ✍️ Data Writing

This section focuses on inserting, updating, and deleting data within database tables.

- `INSERT INTO`
- `UPDATE`
- `DELETE`
- Safe data manipulation
- Best practices when modifying records

```SQL
INSERT INTO users (name, email)
VALUES ('Alice', 'alice@email.com');
```

---

## 🗄️ Database Administration

Here you learn operations used to manage the overall database structure, such as creating or deleting databases.

- Creating databases
- Dropping databases
- Understanding the database lifecycle
- Maintenance considerations

---

## 📋 Table Administration

You will learn how to create, modify, and delete tables, as well as define columns and data types.

- `CREATE TABLE`
- `ALTER TABLE`
- `DROP TABLE`
- Data types
- Basic constraints

---

## 🔗 Relationships Between Tables

This section explains how to connect multiple tables to avoid data duplication and improve organization.

- Primary keys (`PRIMARY KEY`)
- Foreign keys (`FOREIGN KEY`)
- One-to-one and one-to-many relationships
- Basic normalization

---

## 🏗️ Creating Related Tables

This section dives deeper into defining tables that are connected to each other, establishing relationships from the initial design stage.

- Defining foreign keys
- Referential integrity
- Table dependencies
- Good schema design

---

## 💾 Storing Related Data

This section shows how to insert data while respecting table relationships.

- Inserting data into related tables
- Correct insertion order
- Handling dependencies
- Data consistency

---

## 🔍 Querying Related Data

Here you learn how to retrieve data from multiple tables at the same time using joins.

- `JOIN`
- `INNER JOIN`, `LEFT JOIN`
- Multi-table queries
- Combined result sets

---

## 🚀 Advanced Concepts

This section covers more advanced topics for complex queries and data analysis.

- Aggregate functions (`COUNT`, `SUM`, `AVG`)
- `GROUP BY`
- `HAVING`
- Subqueries
- Set operations (`UNION`, `INTERSECT`)

---

[🡨 Back](/README.md#️technologies--notes)
