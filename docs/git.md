# Git

## Table of content

- [Git configuration.](#git-configuration)
- [Command](#commands)
- [Best practices for writing commits in Git.](#best-practices-for-writing-commits-in-git)

## Git Configuration.

The `--global` assignment allows the configuration to be applied globally rather than per project.

```bash
# Assign user.
git config --global user.name "user name"
```

```bash
# Assign Email.
git config --global user.email user12@gmail.com
```

```bash
# Assign Editor
git config --global core.editor "code --wait"
```

```bash
# view configuration
git config --global -e
```

### Assign CR LF

Windows uses two special characters: CR (carriage return) and LF (line feed).

Linux/Mac only uses one special character, which is LF.

To avoid problems between different devices, the autocrlf setting allows Windows to add the CR character when downloading code and remove it when uploading code. On Linux and Mac, it only allows
the special LF character to be downloaded when downloading code.

```bash
# window
git config --global core.autocrlf true

# Linux / Mac
git config --global core.autocrlf input
```

## Commands

### The right workflow for uploading your project to GitHub

```bash
# Initialize the repository.
git init

# Add all files.
git add .

# Create the commit.
git commit -m “Initial commit”

# Add the remote repository (only the first time).
git remote add origin https://github.com/BryanGrandon/Project.git

# Push the changes.
git push -u origin main
```

### Update Git Remote URL

```bash
# Check the currently configured remote repository.
git remote -v

# Change the URL of the “origin” remote to the correct repository.
git remote set-url origin https://github.com/BryanGrandon/Project.git

# Verify that the change was applied correctly.
git remote -v
```

### Branch management in Git

```bash
# To create a new branch.
git branch new-branch

# To switch to the new work branch.
git checkout new-branch
# From now on, all local changes will belong to this new branch.

# To return to the main branch (master):
git checkout master

# Merge changes from a branch into the main branch.
git merge new-branch

# Delete the branch once it is no longer needed.
git branch -d new-branch
```

## Best practices for writing commits in Git.

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
