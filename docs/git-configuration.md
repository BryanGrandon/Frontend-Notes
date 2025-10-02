# Git Configuration.

The `--global` assignment allows the configuration to be applied globally rather than per project.

## Assign user.

When assigning a username, if it contains spaces, it must be enclosed in quotation marks.

```bash
git config --global user.name "user name"
```

## Assign Email.

```bash
git config --global user.email user12@gmail.com
```

## Assign Editor

We tell Git that VS Code is our default text editor.

```bash
git config --global core.editor "code --wait"
```

## view configuration

It allows you to view the settings that have been made and modify them.

```bash
git config --global -e
```

## Assign CRLF

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
