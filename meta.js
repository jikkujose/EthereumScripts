var info = admin.nodeInfo.name
var meta = {}


if(/linux/.test(info)){
  meta.OS = 'linux'
} else {
  meta.OS = 'mac'
}

if(meta.OS == 'linux') {
  meta.home = '/home/jikkujose/'
} else {
  meta.home = '/Users/jikkujose/'
}

meta.scriptDirectory = meta.home + "Ethereum/scripts/"

loadScript(meta.scriptDirectory + 'ls.js')

meta.ls = ls;

meta.lsAll = function(files) {
  files.forEach(function(file) {
    meta.ls(file)
    meta[file] = eval(file)
  });
}

meta.lsAll([
  'cab',
  'transact'
]);
