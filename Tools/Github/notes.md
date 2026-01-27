# 🐙 GitHub

GitHub is a cloud-based platform that allows you to store, share, and collaborate on software projects using the Git version control system.\
By saving your code in a repository, you can showcase your work, collaborate with other developers, and manage changes to your project over time.

---

## 📑 Table of Contents

- [What is GitHub?](#-what-is-github)
- [Key Features](#-key-features)
- [Git vs GitHub](#git-vs-github)
- [Repository Structure](#-repository-structure)
- [Common workflows](#-common-workflows)
- [Best practices](#-best-practices)
- [Deploy Project to GitHub Pages](#-deploy-project-to-github-pages)

---

## ✨ What is GitHub?

GitHub works as a hosting service for Git repositories, allowing you to work both individually and in teams.
It is widely used in open-source projects and professional environments.

---

## 🧩 Key Features

- 📦 Public and private repositories
- 🕒 Complete change history (commits)
- 🔀 Branches for parallel development
- 🤝 Pull Requests for code review
- 🐞 Issues for bug and task tracking
- 📄 README files and documentation
- 🚀 GitHub Actions for automation (CI/CD)

---

## Git vs GitHub

| Git                       | GitHub                          |
| ------------------------- | ------------------------------- |
| Version control system    | Cloud platform                  |
| Works locally             | Works online                    |
| Manages code changes      | Hosts and shares repositories   |
| Does not require internet | Requires an internet connection |

---

## 📁 Repository Structure

A basic repository structure usually includes:

```text
project-name/
├── README.md
├── src/
├── docs/
├── tests/
└── .gitignore
```

---

## 🌱 Common Workflows

- Clone: copy a remote repository to your local machine
- Commit: save changes locally
- Push: send changes to the remote repository
- Pull: fetch changes from GitHub
- Pull Request: request the integration of changes

---

## 📌 Best Practices

- Use clear and descriptive commit messages
- Create branches for new features
- Keep the README up to date
- Review code before merging
- Use .gitignore properly

---

## 🚀 Deploy Project to GitHub Pages

GitHub Pages allows you to deploy static websites directly from a GitHub repository. One of the most recommended ways to do this is by using GitHub Actions, which automates the deployment process.

### 📁 Project Structure

First, you need to create a `.github` directory at the root of your project. Inside it, create a `workflows` folder that will contain the workflow configuration file (`.yml`):

```text
.github/
└── workflows/
    └── deploy.yml
```

> [!IMPORTANT]
> The **deploy.yml** file may change depending on the technology used, since each framework has a different build process and output directory.

- [For Astro](./code/astro.yml)

---

### ⚙️ GitHub Pages Configuration

Before running the workflow, you must configure GitHub Pages in your repository:

1. Go to your repository on GitHub
2. Click on Settings
3. Navigate to Pages
4. Under Build and deployment:
   - Select GitHub Actions as the source

This tells GitHub that your site will be deployed using workflows instead of a branch.

---

### 🧠 Workflow Explanation

The deploy.yml file defines the steps GitHub Actions will follow to build and deploy your project.
Typically, this workflow will:

- 📥 Download the repository code
- 📦 Install dependencies (if needed)
- 🏗️ Build the project
- 🌍 Deploy the output to GitHub Pages

---

[🡨 Back](/README.md)
