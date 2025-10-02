# Frontend Learning Path

<!-- color svg: #902CDD -->

<p align="center">
  <img 
    src="./assets/svg/frontend.svg" 
    alt="Frontend" 
    height="300" 
  />
</p>

The frontend is used to create the interface of a website, from its structure to the styles, such as the definition of colors, textures, typographies, sections, among others. Its use is crucial for the user to have a good experience within the site or application.

## Table of content

- [Introduction](#introduction)
- [Internet](#internet)
- [HTML](#html)
- [CSS](#css)
- [JavaScript](#javascript)
- [Version Control System](#version-control-systems)
- [Package Managers](#package-managers)
- [Framework](#framework)
- [Web Security Basic](#web-security-basics)
- [Type Checkers](#type-checkers)

## Introduction

This project is where i add what i learn about the technologies used in Frontend. Besides having a sort of record of what i've learned, it's a quick way to find information that I've forgotten.

## Internet

<p align="center">
  <img 
    src="./assets/svg/internet.svg" 
    alt="Internet" 
    height="250" 
  />
</p>

The Internet is a global network of computers connected to each other which communicate through a standardized set of protocols.

- [What is HTTP?](https://developer.mozilla.org/en-US/docs/Web/HTTP)

  HTTP is the TCP/IP based application layed communication protocol which standardizes how the client and server communicate with each other. HTTP follows a classical "Client-Server model" with a client opening a connection request, then waiting until it receives a response.

- [What is Domain Name?](https://developer.mozilla.org/en-US/docs/Glossary/Domain_name)

  A domain name is a unique, easy-to-remember address used to access website, such as 'google.com', and 'facebook.com'. Users can connect to websites using domain names thats to the Domain Name System (DNS).

- What is a hosting?

  It is a service that allows individuals and businesses to make their websites accessible on the internet. When a website is created, its files need to be stored on a server so that they can be accessed by visitors to the site.

- [DNS](https://developer.mozilla.org/en-US/docs/Glossary/DNS)

  The Domain Name System ( DNS ) translates domain names into IP addresses so that browsers can load internet resources.

- [Browser](https://developer.mozilla.org/en-US/docs/Glossary/Browser)

  It is a software application that enables a user to access and display web pages or other online content through its graphical user interface.

## [HTML](https://github.com/BryanGrandon/HTML-Notes)

<p align="center">
  <img 
    src="./assets/svg/html.svg" 
    alt="HTML" 
    height="250" 
  />
</p>

HTML stands for **HyperText Markup Language**. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.

- Accessibility

  Web accessibility means that websites, tools, and technologies are designed and developed in such a way that people with disabilities can use them easily.

- Basic of SEO

  SEO or Search Engine Optimization is the technique used to optimize your website for better rankings on search engines such as Google, Bing etc.

## [CSS](https://github.com/BryanGrandon/CSS-Notes)

<p align="center">
  <img 
    src="./assets/svg/css.svg" 
    alt="CSS" 
    height="250" 
  />
</p>

CSS or **Cascading Style Sheets** is the language used to style the frontend of any website. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.

- CSS Architecture

  Consists of managing CSS code with a set of rules and patterns to facilitate its readability, maintainability and scalability.

- CSS Preprocessor

  These are scripting languages that extend the default capabilities of CSS.

## [JavaScript](https://github.com/BryanGrandon/JavaScript-Notes)

<p align="center">
  <img 
    src="./assets/svg/js.svg" 
    alt="JavaScript" 
    height="250" 
  />
</p>

An interpreted programming language used on the client side (front-end) to provide dynamic and interactive enhancements to web pages.

- DOM Manipulation

  The Document Object Model (DOM) is a programming interface built for HTML and XML documents. It represents the page that allows programs and scripts to dynamically update the document structure, content, and style.

- APIs

  API is a piece of code that allows different applications to communicate with each other and share information and functionality.

## Version Control Systems

<p align="center">
  <img 
    src="./assets/svg/version-control-system.svg" 
    alt="Version control system" 
    height="250" 
  />
</p>

Version control systems allow you to track changes to your codebase/files over time. They allow you to go back to some previous version of the codebase without any issues. Also, they help in collaborating with people working on the same code.

- Git

  Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

  - [Git configuration](/docs/git-configuration.md)
  - [Best practices for writing commits in Git](/docs/git.md)

- Repo Hosting Services

  There are different repository hosting services, the most famous being GitHub, GitLab and BitBuck.

## Package Managers

<p align="center">
  <img 
    src="./assets/svg/package-managers.svg" 
    alt="Package managers" 
    height="250" 
  />
</p>

Package managers allow you to manage the dependencies ( external code written by you or someone else ) that your project needs to work correctly.

- npm

  npm is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js.

- pnpm

  The main purpose of PNPM is to hold all the packages at a global ( centralized ) store and use them if needed by other projects too by creating hard links to it.

- Yarn

  Yarn is a software packaging system developed in 2016 by Facebook for Node.js JavaScript runtime environment that provides speed, consistency, stability, and security as an alternative to npm ( package manager )

## Framework

<p align="center">
  <img 
    src="./assets/svg/framework.svg" 
    alt="Framework" 
    height="250" 
  />
</p>

Web frameworks are designed to write web applications. Frameworks are collections of libraries that aid in the development of a software product or website.

- [React](https://github.com/BryanGrandon/React-Notes)
- Angular
- Vue.js

<!-- ## _Testing your apps_ -->
<!-- ## _Authentication Strategies_ -->

## Web Security Basics

<p align="center">
  <img 
    src="./assets/svg/security.svg" 
    alt="Web security basics" 
    height="250" 
  />
</p>

Web security refers to the protective measures taken by the developers to protect the web applications from threats that could affect the business.

- HTTPS

  - HTTPS is a secure way to send data between a web server and a browser.
  - Hypertext transfer protocol secure (HTTPS) is the secure version of HTTP, which is the primary protocol used to send data between a web browser and a website.
  - [HTTP Cat](https://http.cat/)

- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)

  Content Security Policy is a computer security standard introduced to prevent cross-site scripting, click jacking and other code injection attacks resulting from execution of malicious content in the trusted web page context.

- [CORS](/https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

  Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.

- [Open Web Application Security](https://developer.mozilla.org/en-US/docs/Glossary/OWASP)

  Open Web Application Security Project is an online community that produces freely-available articles, methodologies, documentation, tools, and technologies in the field of web application security.

## Type Checkers

<p align="center">
  <img 
    src="./assets/svg/checkers.svg" 
    alt="Checkers" 
    height="250" 
  />
</p>

Type checker helps developers write code with fewer bugs by adding types to their code, trying to catch type errors within your code, and then removing them during compile time.

- TypeScript
