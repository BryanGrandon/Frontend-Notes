# Best practices for writing commits in Git:

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
