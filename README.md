# Emacs VS Code
Emacs keybindings for VS Code.

# Usage
1. Open user keybindings file.
```
File -> Preferences -> Keyboard shortcuts
```
2. Copy text and paste.
3. Good luck!!

## Additional notes
Setting the mark(`extension.setMark`) is available by installing the `VS Code Mark/Point` extension (@ericmccarthy7).
```
ext install VS Code Mark/Point
```


# Build
- requirement
  - Node >= v4.x

```
npm run build
npm run build:windows
npm run build:linux
npm run build:osx
```

# Issues
- There may be key bindings that are not enough.
- It does not fix the key bindings that had been batting (ex. `ctrl+g`).
- <del>I want to move to the next match string using `ctrl+s` or `ctrl+r` during the search.<del>
- <del>If you define key bindings with the prefix that is not in the current environment, it is defined without prefix(ex. define `meta+x` in Windows or OSX then define as `x`).</del>
