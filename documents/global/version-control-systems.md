# Version Control Systems

Version control systems allow you to track changes to your codebase/files over time. They allow you to go back to some previous version of the codebase without any issues. Also, they help in collaborating with people working on the same code.

## Git

Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

### Best practices for writing commits in Git

1. Use the imperative verb (add, change, fix remove, ...).
   - `add`: Means that a new file is added.
   - `change`: Means that an existing file is modified.
   - `fix`: Means that a bug is fixed.
   - `remove`: Means that the file is removed.
2. Do not **use** periods or ellipses in **your messages**.
3. Use a maximum of **50** characters for your commit message.
4. Add any necessary **context** in the body of the commit message.
5. Use a **prefix** for your commits to make then more **semantic**.
   - `<type-of-commit>[scope]: <description>`
     - ```bash
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

## Repo Hosting Services

There are different repository hosting services, the most famous being GitHub, GitLab and BitBuck.
