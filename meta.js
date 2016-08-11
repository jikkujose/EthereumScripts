var meta = {}
var contracts = {}
var wallets = []

var tmp = {}
tmp.info = admin.nodeInfo.name
tmp.username = "jikkujose"

if(/linux/.test(tmp.info)){
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
  'helpers',
  'contracts',
  'wallets',
  'meta/balances',
]

files.forEach(function(file) {
  loadScript(meta.scriptDirectory + file + '.js')
});

if(contracts.amIOnTheFork.instance().forked()) {
  meta.chain = "Forked"
} else {
  meta.chain = "Classic"
}
