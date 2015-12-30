keybindings:=keybindings/cursors.json keybindings/cancel.json keybindings/editor.json 
keybindings+=keybindings/kill_delete.json keybindings/pallete_widget.json keybindings/query_replase.json 
keybindings+=keybindings/region.json keybindings/undo.json

all: build-windows build-linux build-osx

.PHONY: prepare
prepare:
	@mkdir -p release

build-windows: prepare keybindings-windows.json
build-linux: prepare keybindings-linux.json
build-osx: prepare keybindings-osx.json


keybindings-windows.json: keybindings/platform/windows.json $(keybindings)
	@python build.py -p windows -t $^

keybindings-linux.json: keybindings/platform/linux.json $(keybindings)
	@python build.py -p linux -t $^

keybindings-osx.json: keybindings/platform/osx.json $(keybindings)
	@python build.py -p osx -t $^
