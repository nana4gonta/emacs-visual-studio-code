var fs = require("fs");
var process = require("process");
var program = require("commander");
var package = require("./package.json");


function prepareCLIOptions() {
  program
    .version("1.0.0")
    .usage("[options] files")
    .option("-o, --output <output file>", "Specify output file")
    .option("-p, --platform <JSON file>", "Specify platform JSON file")
    .parse(process.argv)
}

function prepareFileList() {
  var fileList = package.keybindings;

  if (program.args.length) {
    fileList = fileList.concat(program.args);
  }

  return fileList;
}

function applyPlatformJSON(prev, platform) {
  var keybindings = prev;
  var length = keybindings.length;

  var unshiftKeybinds = [];
  for (pf of platform) {
    for (var i = 0; i < length; i++) {
      var k = keybindings[i];
      if (k.key === pf.key && k.command === pf.command && k.when === pf.when) {
        keybindings[i] = pf;
        break;
      }
    }

    unshiftKeybinds.push(pf);
  }

  keybindings = unshiftKeybinds.concat(keybindings);
  return keybindings;
}

function sortKeybindings(keybindings) {
  keybindings.sort((aKey, bKey) => {
    if ((!aKey.when && !bKey.when) || (aKey.when && bKey.when)) {
      return 0;
    } else if (!aKey.when) {
      return -1;
    } else {
      return 1;
    }
  });
}

function readJSONFiles(fileList, platformFile) {
  var keybindings = [];
  for (fileName of fileList) {
    var buffer = fs.readFileSync(fileName, "utf8");
    keybindings = keybindings.concat(JSON.parse(buffer));
  }

  if (platformFile !== undefined) {
    var buffer = fs.readFileSync(fileName, "utf8");
    keybindings = applyPlatformJSON(keybindings, JSON.parse(buffer));
  }

  sortKeybindings(keybindings);
  return keybindings;
}



function outputJSONFile(keybindings) {
  if (program.output !== undefined) {
    var stream = fs.createWriteStream(program.output);
    process.stdout.write = process.stderr.write = stream.write.bind(stream);
  }

  console.log(JSON.stringify(keybindings, null, 4));
}

prepareCLIOptions();
var fileList = prepareFileList();
var keybindings = readJSONFiles(fileList, program.platform);
outputJSONFile(keybindings);