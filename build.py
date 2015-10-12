# coding: utf-8

import sys
import json
import argparse
from collections import OrderedDict

def readKeybindings(filenames):
	sort_order = ['key', 'command', 'when']
	buffer = []

	for filename in filenames:
		with open(filename) as f:
			json_str = f.read()
			buffer.extend(json.loads(json_str))
		f.closed
	
	buffer = [OrderedDict(sorted(item.iteritems(), key=lambda (k, v): sort_order.index(k))) for item in buffer]
	
	return buffer

def writeKeybindings(platform, keybindigs):
	with open('release/keybindings-' + platform + '.json', 'wb') as f:
		f.write(json.dumps(keybindigs, indent=4))
	f.closed	


def main():
	parser = argparse.ArgumentParser(description='Build keybindings file.')
	parser.add_argument('-p', '--platform', action='store', type=str, help='target platform(windows/linux/osx)')
	parser.add_argument('-t', '--target', action='store', type=str, nargs='+', help='keybindings json files')
	args = parser.parse_args()
	
	json = readKeybindings(args.target)
	writeKeybindings(args.platform, json)

if __name__ == '__main__':
	main()