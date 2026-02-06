# 🛢️ Structured Query Language (SQL)

Structured Query Language (SQL) is a programming language designed to store, query, modify, and manage data in relational databases.\
A relational database stores information in the form of tables, made up of rows (records) and columns (attributes), allowing relationships between different data sets to be efficiently and securely defined.

---

## 📑 Table of Contents

- [Why is SQL important?](#-why-is-sql-important)
- [Components of an SQL system](#-components-of-an-sql-system)
- [SQL applications in companies](#-sql-applications-in-companies)
- [Advantages of using SQL](#-advantages-of-using-sql)
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

## ❓ Why is SQL important?

SQL is one of the most widely used languages in the world of software development and data analysis. Its importance lies in the fact that it:

- Is a standard language supported by multiple database engines
- Integrates easily with languages such as JavaScript, Python, Java, PHP, and C#
- Allows efficient querying of large volumes of data
- Is essential for roles such as backend developer, data analyst, and data engineer

For these reasons, SQL is a key skill in almost any modern application.

---

## 🧩 Components of an SQL system

An SQL system relies on a Relational Database Management System (RDBMS), which is responsible for storing, organizing, and protecting data.

Main components:

- Database: a collection of related tables
- Tables: structures that store data
- Queries: SQL instructions
- Indexes: improve query performance
- Relationships: links between tables using keys

Popular Relational Database Management Systems examples:

- MySQL
- PostgreSQL
- Microsoft SQL Server
- Oracle Database
- SQLite
- MS Access

---

## 🏢 SQL applications in companies

SQL is the most common standard language for managing business data. It is used across many areas, such as:

- 📋 Record management
- 👥 Customer and user management
- 📊 Data analysis and reporting
- 🛒 Sales and billing systems
- 📦 Inventory control
- 🔐 Permissions and security management

Thanks to its flexibility, SQL can handle everything from small databases to systems with millions of records.

---

## 🚀 Advantages of using SQL

- Easy to learn and read
- Highly efficient for large data volumes
- Declarative language (you specify what you want, not how)
- Wide support and strong community
- Scalable and secure

---

## 📊 Data Querying

This section focuses on retrieving information from a database using SQL queries.
It introduces basic statements such as SELECT to read data from one or more table columns.

- `SELECT`
- Selecting specific columns
- Using `FROM`
- Simple queries

```SQL
SELECT * FROM users;

-- Selecting Specific Columns
SELECT title, price FROM books;
```

> [!TIP]
> Use `SELECT *` while learning or exploring a table, but prefer selecting specific columns in real projects to improve performance and readability.

---

## 🎛️ Modifiers

Modifiers allow you to filter, sort, and limit query results so you only get the data you need.

- `WHERE`
- `ORDER BY`
- `LIMIT` and `OFFSET`
- Logical operators (`AND`, `OR`, `NOT`)
- Comparisons and pattern matching (`LIKE`, `IN`, `BETWEEN`)

```SQL
SELECT name, price FROM products
WHERE price BETWEEN 20 AND 100
ORDER BY price ASC
LIMIT 10;
```

👉 **[View Modifiers examples](./Examples/modifiers.sql)**

---

## ✍️ Data Writing

This section focuses on inserting, updating, and deleting data within database tables.

- `INSERT INTO`
- `UPDATE`
- `DELETE`
- Safe data manipulation
- Best practices when modifying records

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
