# 🏬 Factory method

The Factory Method is a creation design pattern. Its purpose is to provide an interface for creating objects, while allowing subclasses to decide which class to instantiate.

---

## 📑 Table of Contents

- [Purpose](#-purpose)
- [When-to-use-it](#-when-to-use-it)
- [Structure](#-structure)
- [How It Works](#-how-it-works)
- [Advantages](#-advantages)
- [Disadvantages](#-disadvantages)
- [Relationship with Other Patterns](#-relationship-with-other-patterns)

---

## 🎯 Purpose

- Decouple object creation from object usage
- Allow the system to be extended with new product types without changing existing code
- Centralize and encapsulate object creation logic

👉 **[View Purpose examples](./examples/purpose.ts)**

---

## 🧩 When to Use It

Use the Factory Method when:

- ✔ You don’t know in advance which concrete class you need to create
- ✔ You want your code to follow the Open/Closed Principle
- ✔ You want to avoid multiple `new` statements scattered throughout your codebase
- ✔ You want to delegate object creation to subclasses

### 📌 Use cases

- Dynamic UI components
- API services
- Validators
- Theme systems

---

## 📐 Structure

The Factory Method pattern is composed of four main elements:

1. Product
   - Defines a common interface for all objects that the factory can create

2. Concrete Product
   - Implements the Product interface

3. Creator
   - Declares the factory method that returns a Product object
   - May contain business logic that relies on products created by the factory method

4. Concrete Creator
   - Overrides the factory method to return a specific Concrete Product

👉 **[View Structure examples](./examples/structure.ts)**

---

## 🔄 How It Works

Instead of instantiating objects directly using constructors, the client code calls a factory method.

The factory method determines which concrete class to instantiate, while the client only interacts with the Product interface.

This approach allows you to:

- Change the concrete product without affecting client code
- Easily add new product types
- Improve maintainability and scalability

---

## ✅ Advantages

- Reduces coupling between creator and concrete products
- Improves extensibility
- Encourages clean architecture and SOLID principles
- Makes the code easier to test and maintain

---

## ❌ Disadvantages

- Increases complexity due to additional classes
- Requires more abstraction, which may be unnecessary for simple cases

---

## 🧠 Relationship with Other Patterns

- Abstract Factory – A more advanced version that creates families of related objects
- Builder – Focuses on step-by-step object construction
- Prototype – Creates objects by cloning existing ones
- Template Method – Factory Method is often used as part of this pattern

---

[🡨 Back](../notes.md#-catalog-classification)
