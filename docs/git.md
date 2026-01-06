# 🧠 Git Notes

This document provides a practical overview of **Git**, covering configuration, essential commands, common workflows, and best practices for writing clear and meaningful commit messages.

---

## 📑 Table of Contents

- [Git Configuration](#git-configuration)
- [Commands](#commands)
- [Best Practices for Writing Commits in Git](#best-practices-for-writing-commits-in-git)

---

## ⚙️ Git Configuration

Git configuration allows you to define global or project-specific settings.  
Using the `--global` flag applies the configuration to **all repositories** on your system.

### 👤 User Configuration

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

### Line Endings (CRLF / LF)

- Windows uses two characters:

  - CR (Carriage Return)
  - LF (Line Feed)

- Linux / macOS use only:

  - LF (Line Feed)

To avoid issues when working across different operating systems, Git provides the core.autocrlf setting.

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

### Update Git Remote URL

```bash
# Check current remote repositories.
git remote -v

# Update the remote origin URL.
git remote set-url origin https://github.com/BryanGrandon/Project.git

# Verify changes.
git remote -v
```

### Branch management in Git

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

Following good commit practices improves collaboration and project maintainability.

### General Rules

1. Use imperative verbs (add, change, fix, remove).

2. Do not use periods or ellipses.

3. Keep the commit title under 50 characters.

4. Add extra context in the commit body if necessary.

5.Use a semantic prefix to describe the type of change.

### Commit Massage Structure

```bash
<type-of-commit>(scope): <imperative verb> <description>
```

### Type of Commit

| Type         | Description                                                                           |
| ------------ | ------------------------------------------------------------------------------------- |
| **feat**     | A new feature for the user.                                                           |
| **fix**      | Fixed a bug that affects the user.                                                    |
| **perf**     | Changes that improve site performance.                                                |
| **build**    | Changes in the build system, deployment tasks, or installation.                       |
| **ci**       | Changes in continuous integration.                                                    |
| **docs**     | Changes in documentation.                                                             |
| **refactor** | Code refactoring such as variable or function name changes.                           |
| **style**    | Formatting changes (tabs, spaces, semicolons, etc.) that do not affect functionality. |
| **test**     | Add tests or refactor existing ones.                                                  |

### Scopes

| Scope       | Description                                               |
| ----------- | --------------------------------------------------------- |
| **web**     | Changes related to the frontend or user interface.        |
| **backend** | Changes related to server-side logic, APIs, or databases. |

### Imperative Verbs

| Verb       | Description                              |
| ---------- | ---------------------------------------- |
| **add**    | A new file or feature is added.          |
| **change** | An existing file or feature is modified. |
| **fix**    | A bug is fixed.                          |
| **remove** | A file or feature is removed.            |

```bash
  feat(backend): add filter for cars
  fix(web): remove wrong color
```

---
