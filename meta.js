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
