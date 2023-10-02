# Web Application Packager

- [Create React App](https://create-react-app.dev/)
- [vite](https://vitejs.dev/)

## Vite

Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.

```bash
npm create vite@latest
# Project name: ?
# Select a framework: 'react'
# Select a variant: 'js + SWC' or 'ts + SWC'
cd name-project
npm install
npm run dev
```

## structuring a React project

| Files          | Function                                                                  |
| -------------- | ------------------------------------------------------------------------- |
| .gitignore     | Ignores for git the files that we do not want to upload to the repository |
| index.html     | An html structure where the application will be built                     |
| package.json   | Where are the dependencies located                                        |
| vite.config.js | The vite configuration to compile the whole project                       |
| src/           | Where are all the files with code                                         |
| main.jsx       | The entry point of our application                                        |
