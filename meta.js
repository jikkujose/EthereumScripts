var meta = {}
var tmp = {}
tmp.username = "jikkujose"

meta.info = admin.nodeInfo.name

if(/linux/.test(meta.info)){
  meta.OS = 'linux'
} else {
  meta.OS = 'mac'
}

if(meta.OS == 'linux') {
  meta.home = '/home/' + tmp.username + '/'
} else {
  meta.home = '/Users/' + tmp.username + '/'
}

meta.scriptDirectory = meta.home + "Ethereum/scripts/"

files = [
  'cab',
  'ls',
  'newAccount',
  'wallets',
  'contracts/amIOnTheFork'
]

files.forEach(function(file) {
  loadScript(meta.scriptDirectory + file + '.js')
});

if(meta.amIOnTheFork.instance().forked()) {
  meta.chain = "Forked"
} else {
  meta.chain = "Classic"
}
