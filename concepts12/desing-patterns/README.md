# 🧩 Design Patterns

Design patterns are reusable solutions to common problems in software design.
They are not ready-to-use code snippets, but rather guidelines or blueprints that can be adapted to different contexts to improve code quality, maintainability, and scalability.

- [Refactoring Guru](https://refactoring.guru/design-patterns/catalog)

---

## 📑 Table of Contents

- [What are Design Patterns?](#-what-are-design-patterns)
- [Advantages of Design Patterns](#-advantages-of-design-patterns)
- [Creation Patterns](#️-creation-patterns)
- [Structural Patterns](#-structural-patterns)
- [Behavioral Patterns](#-behavioral-patterns)
- [When to Use Design Patterns](#-when-to-use-design-patterns)
- [Catalog Classification](#-catalog-classification)

---

## 🧠 What are Design Patterns?

Design patterns represent best practices derived from the experience of developers solving recurring problems.
They help produce cleaner, more flexible, and easier-to-maintain code by avoiding improvised or tightly coupled solutions.

> [!TIP]
> Patterns do not enforce a single solution; they provide a proven structure.

---

## ✨ Advantages of Design Patterns

Design patterns work as a toolbox for software development.

- ♻️ Reuse of proven solutions
- 🧩 More modular and scalable code
- 🗣️ Common language among developers
- 🛠️ Easier maintenance
- 🧪 Improved testability
- 🔄 Reduced coupling between components

---

## 🏗️ Creation Patterns

Focus on object creation mechanisms, hiding the instantiation logic.

> [!NOTE]
> Useful when object creation is complex or must be controlled.

- Singleton → Ensures a single instance of a class
- Factory Method → Delegates object creation
- Abstract Factory → Creates families of related objects
- Builder → Step-by-step construction of complex objects
- Prototype → Clones existing objects

---

## 🧱 Structural Patterns

Deal with how classes and objects are composed to form larger structures.

> [!NOTE]
> Help organize code and reduce dependencies.

- Adapter → Adapts incompatible interfaces
- Decorator → Adds responsibilities dynamically
- Facade → Simplifies complex subsystems
- Composite → Treats individual and composite objects uniformly
- Proxy → Controls access to an object

---

## 🤝 Behavioral Patterns

Define how objects interact and communicate, distributing responsibilities.

> [!NOTE]
> Improve communication and control flow.

- Observer → Notifies multiple objects about state changes
- Strategy → Switches algorithms dynamically
- Command → Encapsulates requests as objects
- State → Changes behavior based on state
- Iterator → Traverses collections without exposing structure

---

## 📌 When to Use Design Patterns

Use design patterns when:

- The problem has already been solved before
- You need scalability and flexibility
- You are working in a team
- The system is expected to grow over time

🚫 Avoid patterns when they only add unnecessary complexity.

---

## 📘 Catalog Classification

Design patterns are grouped according to their general purpose within system design:

### Creation Patterns

These patterns focus on object creation mechanisms, increasing flexibility and code reuse.

- [Factory Method](./factory-method/README.md)
- Abstract Factory
- Builder
- Prototype
- Singleton

### Structural Patterns

These patterns explain how to compose classes and objects into larger, flexible structures.

- Adapter
- Bridge
- Composite
- Decorator
- Facade
- Flyweight
- [Proxy](./proxy/)

### Behavioral Patterns

These patterns focus on communication and responsibility assignment between objects.

- Chain of Responsibility
- Command
- Iterator
- Mediator
- Memento
- [Observer](./observer/README.md)
- State
- Strategy
- Template Method
- Visitor

---

[🡨 Back](/README.md)
