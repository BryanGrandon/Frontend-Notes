# Dev Tools

| DevTools      | Description                                                     |
| ------------- | --------------------------------------------------------------- |
| `Element`     | Allows you to view and manipulate the HTML and CSS of the page. |
| `Console`     | Allows you to execute JavaScript code.                          |
| `Source`      | Shows us the source code by domain.                             |
| `Network`     | Displays all requests made by the browser to remote servers.    |
| `Performance` | Overall site and CPU performance.                               |
| `Memory`      | Performance and memory allocation.                              |
| `Application` | application, storage, background service, frames.               |

## Debugging

- Source
  - The resource zone showing the list of files
  - The resource zone showing the file code
  - The information and control zone

### Breakpoints (interruption points)

A breakpoint is a code point where the `debugger` will automatically pause JavaScript execution.

While the code is paused, we can examine the current variables,
execute commands in the console, etc. In other words, we can debug.

### Pause and look around

- Watch
  - returns the current value of any expression.
- Call Stack
  - displays nested calls in the chain.
- Scope
  - active variables.

### Logging

To write something to the console, there is the console.log
function.

If we have enough logging in our code, we can then see what is
happening in our log, without the debugger.
