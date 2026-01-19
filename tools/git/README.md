# 🧩 Git

This document provides a practical overview of **Git**, covering configuration, essential commands, common workflows, and best practices for writing clear and meaningful commit messages.

---

## 📑 Table of Contents

- [Git configuration](#️-git-configuration)
- [Commands](#-commands)
- [Best practices](#-best-practices-for-writing-commits-in-git)

---

## ⚙️ Git Configuration

Git configuration defines global or project-specific settings that control Git’s behavior. \
Using `--global` applies the configuration to all repositories on your system.

---

### User configuration

```bash
# Assign username
git config --global user.name "Your Name"

# Assign Email.
git config --global user.email user@gmail.com

# Assign Editor
git config --global core.editor "code --wait"

# view configuration
git config --global -e
```

---

### Line Endings (CRLF / LF)

- Windows uses two characters:
  - CR (Carriage Return)
  - LF (Line Feed)

- Linux / macOS use only:
  - LF (Line Feed)

> [!NOTE]
> To avoid issues when working across different operating systems, Git provides the core.autocrlf setting.

```bash
# window
git config --global core.autocrlf true
```

```bash
# Linux / Mac
git config --global core.autocrlf input
```

---

## 📌 Commands

### Recommended Workflow to Upload a Project to GitHub

Basic steps to initialize a repository and push it to GitHub:

```bash
# Initialize the repository.
git init

# Add all files.
git add .

# Create the commit.
git commit -m “Initial commit”

# Add the remote repository (only once).
git remote add origin https://github.com/BryanGrandon/Project.git

# Push changes to the main branch.
git push -u origin main
```

---

### Update Git Remote URL

Useful when the repository URL changes or is incorrect:

```bash
# Check current remote repositories.
git remote -v

# Update the remote origin URL.
git remote set-url origin https://github.com/BryanGrandon/Project.git

# Verify changes.
git remote -v
```

---

### Branch management in Git

Common commands to work with branches:

```bash
#  Create a new branch.
git branch new-branch

# Switch to the new branch.
git checkout new-branch
#  From this point on, all local changes belong to this branch.

# Return to the main branch:
git checkout master

# Merge changes from another branch into the current branch.
git merge new-branch

# Delete a branch when it is no longer needed.
git branch -d new-branch
```

---

## ✅ Best Practices for Writing Commits in Git

Following good commit practices improves collaboration, traceability, and long-term maintainability of a project.

---

### General Rules

1. Use imperative verbs (add, change, fix, remove).
2. Do not use periods or ellipses.
3. Keep the commit title under 50 characters.
4. Add extra context in the commit body if necessary.
5. Use a semantic prefix to describe the type of change.

---

### Commit Massage Structure

```bash
<type-of-commit>(scope): <imperative verb> <description>
```

**Type-of-commit**

| Type         | Description                                          |
| ------------ | ---------------------------------------------------- |
| **feat**     | Adds a new feature for the user.                     |
| **fix**      | Fixes a bug that affects functionality.              |
| **perf**     | Improves performance.                                |
| **build**    | Changes to build tools, dependencies, or deployment. |
| **ci**       | Changes to CI configuration or scripts.              |
| **docs**     | Documentation-only changes.                          |
| **refactor** | Code changes that do not fix bugs or add features.   |
| **style**    | Formatting changes that do not affect logic.         |
| **test**     | Adds or updates tests.                               |

---

**Scope**

| Scope       | Description                                   |
| ----------- | --------------------------------------------- |
| **web**     | Frontend or UI-related changes.               |
| **backend** | Server-side logic, APIs, or database changes. |

---

**Imperative Verbs**

| Verb       | Description                              |
| ---------- | ---------------------------------------- |
| **add**    | Introduces a new feature or file.        |
| **change** | Modifies existing behavior or structure. |
| **fix**    | Resolves a bug.                          |
| **remove** | Deletes unused code or features.         |

```bash
  feat(backend): add filter for cars
  fix(web): remove wrong color
```

---

[🡨 Back](../../README.md)
