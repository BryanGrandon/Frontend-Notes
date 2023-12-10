# Frontend Learning Path

## _Index_

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

### What is HTTP ?

HTTP stands for Hypertext Transfer Protocol and it's the foundation of communication over the World Wide Web. It's an application layer protocol that defines how clients and servers communicate with each other.

### Domain Name

A domain name is a unique name that identifies a website on the internet. The domain name system (DNS) translates domain names into IP addresses, which are used by computers to communicate over the internet.

### Hosting

Web hosting is a service that allows individuals and businesses to make their websites accessible on the internet. When a website is created, its files need to be stored on a server so that they can be accessed by visitors to the site.

### DNS

Domain Name System, is a hierarchical and distributed naming system for computers, services, and other resources on the Internet.

### Browser

A web browser is a software application that enables a user to access and display web pages or other online content through its graphical user interface.

## _HTML_

HTML stands for **HyperText Markup Language**. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.

- [Structure Basic](/html/document.html)
- [Metadata](/html/metadata.html)
- [Group](/html/group.html)
- [Text](/html/text.html)
- [Multimedia](/html/multimedia.html)
- [Table](/html/table.html)
- [Form](/html/form.html)
- [Interactive](/html/interactive.html)
- [Semantic](/html/semaintic.html)

## _CSS_

CSS or **Cascading Style Sheets** is the language used to style the frontend of any website. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.

- [Basic Selector](/css/code/basic-selector.css)
- [Advanced Selector](/css/code/advanced-selector.css)
- [Pseudo Classes](/css/code/pseudo-classes.css)
- [Pseudo Element](/css/code/pseudo-element.css)
- [Fonts](/css/code/fonts.css)
- [Lengths](/css/code/length.css)
- [Colors](/css/code/colors.css)
- [Box Model](/css/code/box-model.css)
- [Position](/css/code/position.css)
- [Background](/css/code/background.css)
- [Display](/css/code/display.css)
- [Flex](/css/code/display-flex.css)
- [Variables](/css/code/variables.css)

### CSS Architecture

A CSS architecture brings reasoning to CSS authoring. Imagine it as a set of guidelines and best practices to help developers write code that's maintainable, flexible to scale and more reusable.

- [**_BEM_**](/css/bem.css)

### CSS Preprocessor

CSS preprocessor are scripting languages that extend the default capabilities of CSS. They enable us to use logic in our CSS code, such as variables, nesting, inherence, mixins, functions, and mathematical operations.

- **_[Sass](/css/sass.scss)_**

## _JavaScript_

An interpreted programming language used on the client side (front-end) to provide dynamic and interactive enhancements to web pages.

- [All About Variables](/javascript/language/all-about-variable.js)
- [Data Type](/javascript/language/data-types.js)
- [Type Casting](/javascript/language/type-casting.js)
- [Data Structure](/javascript/language/data-structure.js)
- [Equality Comparisons](/javascript/language/equality-comparisons.js)
- [Loops](/javascript/language/loops.js)
- [Control Flow](/javascript/language/control-flow.js)
- [Operators](/javascript/language/operators.js)
- [Functions](/javascript/language/functions.js)
- [Strict Mode](/javascript/language/strict-mode.js)
- [Using (`this`) keyword](/javascript/language/using-this-keyword.js)
- [Asynchronous JavaScript](/javascript/language/asynchronous.js)
- [Classes](/Documents/javascript/languages/classes.md)
- [Generator](/javascript/language/generator.js)
- [Modules](/Documents/javascript/languages/modules.md)

### Document Object Model ( DOM )

In Javascript, when we refer to the DOM we refer to this tree structure, through which we can access it and modify the HTML elements from Javascript, adding new tags, modifying or deleting others, changing their HTML attributes, adding classes, changing the text content, etc.

- [The Subject Document](/javascript/dom/subject-document.js)
- [Select DOM Elements](/javascript/dom/select-dom-elements.js)
- [Manage DOM Attributes](/javascript/dom/manage-dom-attributes.js)
- [CSS Management](/javascript/dom/css-management.js)
- [Content in DOM Elements](/javascript/dom/content-in-dom-element.js)
- [Navigate through DOM elements](/javascript/dom/navigate-through-dom-element.js)
- [Create elements in the DOM](/javascript/dom/create-element-in-the-dom.js)
- [Modifying Elements](/javascript/dom/modifying-elements.js)
- [Event Handler](/javascript/dom/event-handler.js)
- [Browser Object Model](/javascript/dom/browser-object-model.js)

### Application Programming Interface ( API )

An API is a piece of code that allows different applications to communicate with each other and share information and functionality

- Native APIs
- External APIs

#### Asynchronous JavaScript And XML ( [AJAX](/javascript/apis/ajax/script.js) )

The appeal of AJAX is its "asynchronous" nature, which means that it can communicate with the server, exchange data and update the page without having to reload the browser.

- XHR
- Fetch
- Axios

#### Representational State Transfer ( REST )

A REST service is a set of constraints with which we can create a software architecture style, which we can use to create web applications respecting the HTTP protocol.

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
