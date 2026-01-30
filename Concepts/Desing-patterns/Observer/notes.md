# 👀 Observer

The Observer (also called Event-Subscriber, Listener or Publication–Subscription) is a behavioral design pattern.
It lets you define a subscription mechanism so that multiple objects can be notified automatically when the state of another object changes

---

## 📑 Table of Contents

- [Purpose](#-purpose)
- [Structure](#-structure)
- [Real Word Analogy](#-real-world-analogy)
- [When to use](#-when-to-use)
- [How to Implement](#️-how-to-implement)
- [Advantages](#-advantages)
- [Disadvantages](#-disadvantages)
- [Relationship whit other patters](#-relationship-with-other-patterns)

---

## 🎯 Purpose

- Provide a way for objects to react to changes in another object’s state
- Decouple the subject (publisher) from the observers (subscribers)
- Allow dynamic and configurable relationships between objects at runtime

### 📌 Common use cases

- State management
- Event systems
- WebSockets
- Notifications

---

## 🧱 Structure

- Subject
  - Maintains a list of subscribers
  - Has methods to add/remove observers
  - Notifies subscribers on state change

- Observer Interface
  - Declares the `update()` method used for notification

- Concrete Observers
  - Implement the observer interface and react to updates

- Client
  - Creates and registers observers with subjects

---

## 🔁 Real-World Analogy

Think about subscribing to a magazine.

- You don’t visit the store every week to check for new issues
- Instead, the magazine sends you the newest edition when it’s published

This is exactly how the Observer works: the publisher pushes updates to subscribers when events occur.

---

## 📌 When to Use

Use Observer when:

- Changes in one object may affect others
- The set of dependent objects is unknown or variable at runtime
- You want loose coupling between subjects and observers

---

## ⚙️ How to Implement

1. Identify the subject and the observers
2. Create an observer interface with an update() (or similar) method
3. Let the subject maintain a list of observers and notify them on change
4. Add methods in the subject to subscribe/unsubscribe observers
5. Implement concrete observers that react to notification

---

## ✅ Advantages

- Follows the Open/Closed Principle
  - You can add new observers without modifying the subject code
- Observer relationships can be established at runtime

---

## ❌ Disadvantages

- Observers may be notified in an unpredictable order
- Too many observers may complicate state tracking

---

## 🔄 Relationship with Other Patterns

The Observer pattern relates to several behavioral patterns:

- Chain of Responsibility — passes a request along a chain of handlers
- Command — encapsulates requests as objects
- Mediator — centralizes interactions between components
- Observer — lets receivers dynamically subscribe/unsubscribe to senders

---

[🡨 Back](../notes.md#-catalog-classification)
