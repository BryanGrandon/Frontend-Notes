# FrontEnd Notes

## Internet

The Internet is a global network of computers connected to each other which communicate through a standardized set of protocols.

A web browser is a software application that enables a user to access and display web pages or other online content through its graphical user interface.

### What is HTTP?

HTTP stands for Hypertext Transfer Protocol and it's the foundation of communication over the World Wide Web . It's an application layer protocol that defines how clients and servers communicate with each other.

### DNS

DNS, or Domain Name System, is a hierarchical and distributed naming system for computers , services, and other resources on the Internet.

It translates domain names, which are user-friendly names like google.com or facebook.com, into IP addresses, which are unique numerical identifiers that computers use to communicate with each other over the Internet.

DNS is an essential part of the web's infrastructure and is responsible for ensuring that web traffic is properly routed to the correct destination.

### Domain Name

A domain name is a unique name that identifies a website on the internet. It is what people type into their web browsers to access a particular website.

Typically, a domain name is composed of two parts, the actual name and the top-level domain (TLD).

The domain name system (DNS) translates domain names into IP addresses, which are used by computers to communicate over the internet.

It is a key part of the internet infrastructure , and is essential for accessing websites and other online resources.

### Hosting

Web hosting is a service that allows individuals and businesses to make their websites accessible on the internet.
When a website is created, its files need to be stored on a server so that they can be accessed by visitors to the site.

## [HTML](/HTML/README.md)

HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.

### [Semantic HTML](/HTML/Archives/semaintic.html)

Semantic element clearly describes its meaning to both the browser and the developer.

| Semantic Tags | Description                                |
| ------------- | ------------------------------------------ |
| `h1` - `h6`   | Header                                     |
| `main`        | Group the main content of a page           |
| `header`      | Header on a website or a section           |
| `nav`         | Represents a navigation                    |
| `section`     | Reprececnts a section of generic content   |
| `article`     | Self explanatory section                   |
| `footer`      | Footer of a website or a section           |
| `aside`       | Represents supplement or secundary content |
| `address`     | Reprecents a content information           |

### Forms and Validations

The form allows us to receive information provided by the user.

### Best Practices

Learn to follow the best practices for writing maintainable and scalable HTML documents.

### Accessibility

Web accessibility means that websites, tools, and technologies are designed and developed in such a way that people with disabilities can use them easily.

### Basics of SEO

SEO or Search Engine Optimization is the technique used to optimize your website for better rankings on search engines such as Google, Bing etc.

## [CSS](/CSS/README.md)

CSS or Cascading Style Sheets is the language used to style the frontend of any website. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.

- Making layouts
- Responsive Web Design

## [JavaScript](/JavaScript/README.md)

JavaScript allows you to add interactivity to your pages. Common examples that you may have seen on the websites are sliders, click interactions, popups and so on.

### [DOM](/JavaScript/Archives/DOM/README.md)

The Document Object Model (DOM) is a programming interface built for HTML and XML documents. It represents the page that allows programs and scripts to dynamically update the document structure, content, and style. With DOM, we can easily access and manipulate tags, IDs, classes, attributes, etc.

### [API](/JavaScript/Archives/Working-with-APIs/)

- AJAX
- API REST

## Version Control Systems

Version control systems allow you to track changes to your codebase/files over time. They allow you to go back to some previous version of the codebase without any issues. Also, they help in collaborating with people working on the same code – if you’ve ever collaborated with other people on a project, you might already know the frustration of copying and merging the changes from someone else into your codebase; version control systems allow you to get rid of this issue.

### Git

Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

### Repo Hosting Services

Existen diferentes servicios de alojamiento de repositorios, siendo los más famosos GitHub, GitLab y BitBuck

## Web Security Knowledge

Web security refers to the protective measures taken by the developers to protect the web applications from threats that could affect the business.

### HTTPS

- HTTPS is a secure way to send data between a web server and a browser. Hypertext transfer protocol secure (HTTPS) is the secure version of HTTP, which is the primary protocol used to send data between a web browser and a website. HTTPS is encrypted in order to increase security of data transfer. This is particularly important when users transmit sensitive data, such as by logging into a bank account, email service, or health insurance provider

- [HTTP Cat](https://http.cat/)

### Content Security Policy

- Content Security Policy is a computer security standard introduced to prevent cross-site scripting, clickjacking and other code injection attacks resulting from execution of malicious content in the trusted web page context.

### CORS

- Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.

### OWASP Security Risks

- OWASP or Open Web Application Security Project is an online community that produces freely-available articles, methodologies, documentation, tools, and technologies in the field of web application security.

## Package Managers

### npm

npm is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js.

### yam

Yarn es un sistema de empaquetado de software desarrollado en 2016 por Facebook para el entorno de ejecución JavaScript Node.js que proporciona velocidad, consistencia, estabilidad y seguridad como alternativa a npm (gestor de paquetes).

### pnpm

PNPM is an alternative package manager for Node. js which stands for “Performant NPM”. The main purpose of PNPM is to hold all the packages at a global (centralized) store and use them if needed by other projects too by creating hard links to it.

## CSS Architecture

### BEM

The Block, Element, Modifier methodology (commonly referred to as BEM) is a popular naming convention for classes in HTML and CSS.

## CSS preprocessors

### Sass

Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. It lets you write maintainable CSS and provides features like variable, nesting, mixins, extension, functions, loops, conditionals and so on.

## Build Tools

### Linters and Formatters

- Prettier
- ESLint

### Task Runners

- npm script

### Module Bundlers

- Vite
- Esbuid
- Wedpack
- Rollup
- Parce
