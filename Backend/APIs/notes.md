# 🔌 Application Programming Interface (API)

An Application Programming Interface (API) is a set of rules and definitions that allows different software applications to communicate with each other, exchange data, and share functionality without needing to know the internal implementation of the other system.

APIs act as an intermediary layer between systems, enabling integration, automation, and scalability across platforms and services.

---

## 📑 Table of Contents

- [What is an API?](#-what-is-an-api)
- [Why APIs are Important](#-why-apis-are-important)
- [Common API Types](#-common-api-types)
- [API Communication styles](#-api-communication-styles)
- [Basic API Concepts](#-basic-api-concepts)
- [Asynchronous JavaScript And XML (AJAX)](#-asynchronous-javascript-and-xml-ajax)
- [Representational State Transfer (REST)](#-representational-state-transfer-rest)

---

## 📌 What is an API?

An API defines how requests and responses should be structured, what data can be accessed, and what operations are allowed. Instead of interacting directly with a database or service, applications communicate through APIs using standardized protocols.

---

## ⭐ Why APIs are Important

- Enable communication between different systems
- Promote code reusability
- Improve security by exposing only necessary data
- Allow scalability and modular architecture
- Facilitate integration with third-party services

---

## 🧩 Common API Types

- REST APIs – Use HTTP methods and JSON data format
- SOAP APIs – XML-based and highly structured
- GraphQL APIs – Allow clients to request specific data
- Web APIs – Accessible over the web via HTTP/HTTPS
- Internal APIs – Used within the same organization

---

## 🔄 API Communication Styles

- Client–Server
- Request–Response
- Stateless communication
- Synchronous and Asynchronous calls

---

## 🧠 Basic API Concepts

- Endpoint – A specific URL where requests are sent
- HTTP Methods:
  - GET – Retrieve data
  - POST – Send data
  - PUT / PATCH – Update data
  - DELETE – Remove data
- Headers – Metadata (authentication, content type)
- Status Codes – Response results (200, 404, 500, etc.)
- Authentication – API keys, tokens, OAuth

---

## 🔄 Asynchronous JavaScript And XML (AJAX)

AJAX allows web applications to communicate with a server asynchronously, sending and receiving data without reloading the page, which improves performance and user experience.

---

### XMLHttpRequest (XHR)

XMLHttpRequest (XHR) is a native JavaScript object used to make asynchronous HTTP requests.
It is older and more verbose, but widely supported.

👉 **[Explore XHR examples](./examples/xhr.js)**

---

### Fetch API

Fetch is a modern, promise-based API for making HTTP requests.
It provides cleaner syntax and supports async/await.

👉 **[Explore Fetch examples](./examples/fetch.js)**

---

### Axios

Axios is a promise-based HTTP client for browsers and Node.js.
It offers automatic JSON handling and better error management.

```HTML
<head>
  <!-- Axios -->
  <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js" defer></script>
</head>
```

👉 **[Explore Axios examples](./examples/axios.js)**

---

## 🔁 Representational State Transfer (REST)

REST (Representational State Transfer) is an architectural style based on a set of constraints used to build scalable and maintainable web services.
RESTful APIs follow the HTTP protocol, using standard methods to perform operations on resources.

---

### Key REST Principles

- Client–Server architecture
- Stateless requests
- Resource-based URLs
- Use of standard HTTP methods
- Uniform interface

---

### Common HTTP Methods

- GET – Retrieve data
- POST – Create new resources
- PUT / PATCH – Update existing resources
- DELETE – Remove resources

---

### Project Setup

Initialize the project

```bash
npm init -y
```

Install dependencies

```bash
npm install -S express
```

---

### ▶️ Run the API

Use Node.js to start the server:

```bash
node ./api.js
```

---

[🡨 Back](/README.md)
