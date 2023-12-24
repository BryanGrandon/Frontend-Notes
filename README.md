# Frontend Learning Path

## _Table of content_

1. _[Introduction](#introduction)_
2. _[Internet](#internet)_
3. _[HTML](#html)_
4. _[CSS](#css)_
5. _[JavaScript](#javascript)_
6. _[Version Control System](#version-control-systems)_
7. _[Package Managers](#package-managers)_
8. _[Framework](#framework)_
9. _[Type Checkers](#type-checkers--ts)_

## _Introduction_

This project is where i add what i learn about the technologies used in Frontend. Besides having a sort of record of what i've learned, it's a quick way to find information that I've forgotten.

## _Internet_

The Internet is a global network of computers connected to each other which communicate through a standardized set of protocols.

- Network **communication** protocol: Basic packet communication protocols such s TCP/IP and **_HTTP_**.
- Network **security** protocols: Implement security in network communications between server, including HTTPS, SSL and SFTP.
- Network **management** protocols: provide network maintenance and governance, including Simple Network Management Protocol and ICMP.

**_HyperText Transfer Protocol ( HTTP ):_** It's the foundation of communication over the World Wide Web. It's an application layer protocol that defines how clients ans servers communicate with each other.

**_Web Hosting:_** It is a service that allows individuals and businesses to make their websites accessible on the internet. When a website is created, its files need to be stored on a **_server_** so that they can be accessed by visitors to the site.

**_Domain Name:_** It is a unique name that identifies a website on the internet. The **_Domain Name System (DNS)_** is a hierarchical naming system that translates domain names into IP addresses, which are used by computers to communicate over the internet.

**_Browser:_** It is a software application that enables a user to access and display web pages or other online content through its graphical user interface.

## _HTML_

HTML stands for **HyperText Markup Language**. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.

**_[Code](/code/html-note.html)_**

## _CSS_

CSS or **Cascading Style Sheets** is the language used to style the frontend of any website. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.

**_CSS Architecture:_** Consists of managing CSS code with a set of rules and patterns to facilitate its readability, maintainability and scalability.

- _[BEM](/code/css/bem.css)_

**_CSS Preprocessor:_** These are scripting languages that extend the default capabilities of CSS.

- _[Sass](/code/css/sass.scss)_

## _JavaScript_

An interpreted programming language used on the client side (front-end) to provide dynamic and interactive enhancements to web pages.

### DOM

In Javascript, when we refer to the **_Document Object Model ( DOM )_** we refer to this tree structure, through which we can access it and modify the HTML elements from Javascript.

### API

**_Application Programming Interface ( API )_** is a piece of code that allows different applications to communicate with each other and share information and functionality

## _Version Control Systems_

Version control systems allow you to track changes to your codebase/files over time. They allow you to go back to some previous version of the codebase without any issues. Also, they help in collaborating with people working on the same code.

### Git

Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

**_Best practices for writing commits in Git:_**

1. Use the imperative verb (add, change, fix remove, ...).
   - `add`: Means that a new file is added.
   - `change`: Means that an existing file is modified.
   - `fix`: Means that a bug is fixed.
   - `remove`: Means that the file is removed.
2. Do not use periods or ellipses in **your messages**.
3. Use a maximum of 50 characters for your commit message.
4. Add any necessary context in the body of the commit message.
5. Use a prefix for your commits to make then more semantic.
   - `<type-of-commit>[scope]: <description>`
     ```bash
       feat(backend): add filter for cars
       fix(web): remove wrong color
     ```
   - `feat`: A new feature for the user.
   - `fix`: Fixed a bug that affects the user.
   - `pref`: Changes that improve site performance.
   - `build`: Changes in the build system, deployment tasks or installation.
   - `ci`: Changes in continuous integration.
   - `docs`: Changes in documentation.
   - `refactor`: Refactoring of code such as variable or function name changes.
   - `style`: Formatting changes, tabs, spaces or semicolons, etx; do not affect the use.
   - `test`: Add tests or refactor an existing one.

### Repo Hosting Services

There are different repository hosting services, the most famous being GitHub, GitLab and BitBuck.

## _Package Managers_

Package managers allow you to manage the dependencies ( external code written by you or someone else ) that your project needs to work correctly.

### npm

npm is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js.

### [pnpm](https://pnpm.io/)

PNPM is an alternative package manager for Node.js which stands for "performant NPM". The main purpose of PNPM is to hold all the packages at a global ( centralized ) store and use them if needed by other projects too by creating hard links to it.

### [Yarn](https://classic.yarnpkg.com/en/docs/getting-started)

Yarn is a software packaging system developed in 2016 by Facebook for Node.js JavaScript runtime environment that provides speed, consistency, stability, and security as an alternative to npm ( package manager )

## _Framework_

Web frameworks are designed to write web applications. Frameworks are collections of libraries that aid in the development of a software product or website.

### React

React is an open source JavaScript library for creating user interfaces.

- [Web Application Packager](/framework/react/cli-tools.md)
- [JSX](/framework/react/jsxml.jsx)
- [Components](/framework/react/components.jsx)
- [Rendering](/framework/react/rendering.jsx)
- [Hooks](/framework/react/hooks.jsx)

<!-- ## _Build Tools_ -->
<!-- ## _Testing your Apps_ -->
<!-- ## _Authentication Strategies_ -->
<!-- ## _Web Security Basics_ -->
<!-- ## _Web Components_ -->

## _Type Checkers ( TS )_

TypeScript is an open source language developed by Microsoft. It is a superset of JavaScript. TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

- [Primitive types](/typescript/primitive-types.ts)
- [Type of Union](/typescript/type-of-union.ts)
- [Type of Collections](/typescript/collections.ts)
- [Interfaces and Types](/typescript/interface.ts)
- [Functions](/typescript/functions.ts)
- [Class](/typescript/class.ts)
- [Generic](/typescript/generic.ts)
- [Modules](/typescript/modules/import.ts)

<!-- ## _Server Side Rendering ( SSR )_ -->
<!-- ## _GraphQL_ -->
<!-- ## _Static Site Generators_ -->
<!-- ## _Progressive Web Apps_ -->
<!-- ## _Mobile Applications_ -->
<!-- ## _Desktop Applications_ -->
<!-- ## _Bonus Content_ -->
