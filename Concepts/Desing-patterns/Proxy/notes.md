# 📌 Proxy

The Proxy pattern is a structural design pattern that provides a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform additional actions such as caching, access control, or lazy initialization, while keeping the same interface as the real object.

---

## 📑 Table of Contents

- [Purpose](#-purpose)
- [Structure](#-structure)
- [Common use cases](#-common-use-cases)
- [Advantages](#-advantages)
- [Disadvantages](#-disadvantages)
- [Relationship whit other patterns](#-relationship-with-other-patterns)

---

## 🎯 Purpose

- Control access to an object that is expensive to create or slow to respond
- Add extra behavior (caching, logging, access control) without modifying the original class
- Allow the client to use the proxy and the real object transparently, since both share the same interface

## 📦 Structure

The main participants in the Proxy pattern are:

1. Service Interface

   Declares the operations that both the proxy and the real service must implement.

2. Real Service (RealSubject)

   The class that contains the core business logic.

3. Proxy

   Maintains a reference to the real service and controls access to it. \
   It can perform extra logic such as caching, access checks, logging, or lazy initialization.

4. Client

   Works with the service through the common interface, without knowing whether it is using a proxy or the real object.

---

## 🚀 Common Use Cases

| Proxy Type                              | Description                                                       |
| --------------------------------------- | ----------------------------------------------------------------- |
| **Virtual Proxy (Lazy Initialization)** | Delays the creation of a heavy object until it is actually needed |
| **Protection Proxy**                    | Controls access based on permissions                              |
| **Caching Proxy**                       | Stores results of expensive operations for reuse                  |
| **Remote Proxy**                        | Represents an object located on a remote server                   |
| **Logging / Auditing Proxy**            | Intercepts requests to log or audit operations                    |

---

## ✅ Advantages

- You can control access to the real object transparently
- The proxy can manage the lifecycle of the real object
- Enables additional behaviors like caching and logging
- Follows the Open/Closed Principle (new proxies can be added without modifying existing code)

---

## ❌ Disadvantages

- Adds more classes and increases code complexity
- May introduce slight latency due to extra processing in the proxy

---

## 🔄 Relationship with Other Patterns

- Adapter: Changes the interface of an existing object. Proxy keeps the same interface.
- Decorator: Adds responsibilities dynamically. Proxy focuses on access control and resource management.
- Facade: Simplifies an interface, while Proxy provides controlled access to an existing one.

---

[🡨 Back](../notes.md#-catalog-classification)
