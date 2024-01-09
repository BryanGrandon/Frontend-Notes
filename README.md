<h1 align="center">Frontend Learning Path</h1>

<!-- color svg: #902CDD -->

<p align="center" >
  <img 
    src="./assets/svg/frontend.svg" 
    alt="Frontend Image" 
    height="300" 
  />
</p>

The frontend is used to create the interface of a website, from its structure to the styles, such as the definition of colors, textures, typographies, sections, among others. Its use is crucial for the user to have a good experience within the site or application.

## _Table of content_

1. _[Introduction](#introduction)_
2. _[Internet](#internet)_
3. _[HTML](#html)_
4. _[CSS](#css)_
5. _[JavaScript](#javascript)_
6. _[Version Control System](#version-control-systems)_
7. _[Package Managers](#package-managers)_
8. _[Framework](#framework)_
9. _[Type Checkers](#type-checkers)_

## _Introduction_

This project is where i add what i learn about the technologies used in Frontend. Besides having a sort of record of what i've learned, it's a quick way to find information that I've forgotten.

## _Internet_

<p align="center">
  <img 
    src="./assets/svg/internet.svg" 
    alt="Internet Image" 
    height="250" 
  />
</p>

The Internet is a global network of computers connected to each other which communicate through a standardized set of protocols.

### [What is HTTP?](https://developer.mozilla.org/en-US/docs/Web/HTTP)

HTTP is the TCP/IP based application layed communication protocol which standardizes how the client and server communicate with each other. HTTP follows a classical "Client-Server model" with a client opening a connection request, then waiting until it receives a response.

### [What is Domain Name?](https://developer.mozilla.org/en-US/docs/Glossary/Domain_name)

A domain name is a unique, easy-to-remember address used to access website, such as 'google.com', and 'facebook.com'. Users can connect to websites using domain names thats to the Domain Name System (DNS).

### What is a hosting?

It is a service that allows individuals and businesses to make their websites accessible on the internet. When a website is created, its files need to be stored on a server so that they can be accessed by visitors to the site.

### [DNS](https://developer.mozilla.org/en-US/docs/Glossary/DNS)

The Domain Name System ( DNS ) translates domain names into IP addresses so that browsers can load internet resources.

### [Browser](https://developer.mozilla.org/en-US/docs/Glossary/Browser)

It is a software application that enables a user to access and display web pages or other online content through its graphical user interface.

## _HTML_

<p align="center">
  <img 
    src="./assets/svg/html.svg" 
    alt="HTML Image" 
    height="250" 
  />
</p>

HTML stands for **HyperText Markup Language**. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.

### Accessibility

Web accessibility means that websites, tools, and technologies are designed and developed in such a way that people with disabilities can use them easily.

### Basic of SEO

SEO or Search Engine Optimization is the technique used to optimize your website for better rankings on search engines such as Google, Bing etc.

## _CSS_

<p align="center">
  <img 
    src="./assets/svg/css.svg" 
    alt="CSS Image" 
    height="250" 
  />
</p>

CSS or **Cascading Style Sheets** is the language used to style the frontend of any website. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.

### CSS Architecture

Consists of managing CSS code with a set of rules and patterns to facilitate its readability, maintainability and scalability.

<dl>
  <dt><a href="https://getbem.com/" >BEM</a></dt>
  <dd>
    The Block, Element, Modifier methodology (commonly referred to as BEM) is a popular naming convention for classes in HTML and CSS.
  </dd>
</dl>

### CSS Preprocessor

These are scripting languages that extend the default capabilities of CSS.

<dl>
  <dt><a href="https://sass-lang.com/documentation/" >SASS</a></dt>
  <dd>
    Sass is a stylesheet language that’s compiled to CSS.
  </dd>
</dl>

## _JavaScript_

<p align="center">
  <img 
    src="./assets/svg/js.svg" 
    alt="JS Image" 
    height="250" 
  />
</p>

An interpreted programming language used on the client side (front-end) to provide dynamic and interactive enhancements to web pages.

### DOM Manipulation

The Document Object Model (DOM) is a programming interface built for HTML and XML documents. It represents the page that allows programs and scripts to dynamically update the document structure, content, and style.

### APIs

API is a piece of code that allows different applications to communicate with each other and share information and functionality.

## _Version Control Systems_

<p align="center" >
  <img 
    src="./assets/svg/version-control-system.svg" 
    alt="Version-control-system Image" 
    height="250" 
  />
</p>

Version control systems allow you to track changes to your codebase/files over time. They allow you to go back to some previous version of the codebase without any issues. Also, they help in collaborating with people working on the same code.

### Git

Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

**_Best practices for writing commits in Git:_**

1. Use the imperative verb ( add, change, fix, remove).
2. Do not use periods or ellipses in your messages.
3. Use a maximum of 50 characters for your commit message.
4. Add any necessary context in the body of the commit message.
5. Use a prefix for your commits to make then more semantic.
   - `<type-of-commit>[scope]:<imperative verb> <description>`

- type-of-commit

  - `feat`: A new feature for the user.
  - `fix`: Fixed a bug that affects the user.
  - `pref`: Changes that improve site performance.
  - `build`: Changes in the build system, deployment tasks or installation.
  - `ci`: Changes in continuous integration.
  - `docs`: Changes in documentation.
  - `refactor`: Refactoring of code such as variable or function name changes.
  - `style`: Formatting changes, tabs, spaces or semicolons, etx; do not affect the use.
  - `test`: Add tests or refactor an existing one.

- Scopes

  - `web`
  - `backend`

- Imperative verb
  - `add`: Means that a new file is added.
  - `change`: Means that an existing file is modified.
  - `fix`: Means that a bug is fixed.
  - `remove`: Means that the file is removed.

```bash
  feat(backend): add filter for cars
  fix(web): remove wrong color
```

### Repo Hosting Services

There are different repository hosting services, the most famous being GitHub, GitLab and BitBuck.

## _Package Managers_

<p align="center" >
  <img 
    src="./assets/svg/package-managers.svg" 
    alt="Package-managers Image" 
    height="250" 
  />
</p>

Package managers allow you to manage the dependencies ( external code written by you or someone else ) that your project needs to work correctly.

### [npm](/https://docs.npmjs.com/)

npm is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js.

### [pnpm](https://pnpm.io/)

The main purpose of PNPM is to hold all the packages at a global ( centralized ) store and use them if needed by other projects too by creating hard links to it.

### [Yarn](https://classic.yarnpkg.com/en/docs/getting-started)

Yarn is a software packaging system developed in 2016 by Facebook for Node.js JavaScript runtime environment that provides speed, consistency, stability, and security as an alternative to npm ( package manager )

## _Framework_

<p align="center" >
  <img 
    src="./assets/svg/framework.svg" 
    alt="Framework Image" 
    height="250" 
  />
</p>

Web frameworks are designed to write web applications. Frameworks are collections of libraries that aid in the development of a software product or website.

- React
- Angular
- Vue.js

## _Type Checkers_

Type checker helps developers write code with fewer bugs by adding types to their code, trying to catch type errors within your code, and then removing them during compile time.

- TypeScript
