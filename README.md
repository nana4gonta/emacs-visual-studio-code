# Emacs VS Code
Emacs keybindigs for VS Code.

# Usage
1. Open user keybindings file.
```
File -> Preferences -> Keyboard shortcuts
```
2. Copy text and paste.
3. Good luck!!

# Build
- requirement
  - Python >= 2.7

```
make build-windows
make build-linux
make build-osx
```

or

```
python build.py -p windows -t keybindings/cancel.json keybindings/cursors.json
```

# Issues
- There may be key bindings that are not enough.
- It does not fix the key bindings that had been batting (ex. `ctrl+g`).
- <del>I want to move to the next match string using `ctrl+s` or `ctrl+r` during the search.<del>
- <del>If you define key bindings with the prefix that is not in the current environment, it is defined without prefix(ex. define `meta+x` in Windows or OSX then define as `x`).</del>
