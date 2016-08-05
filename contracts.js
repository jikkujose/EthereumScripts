contracts = {}

tmp.contracts = [
  'amIOnTheFork',
  'replaySafeSplit'
]

tmp.contracts
  .forEach(function(contract) {
    loadScript('./contracts/' + contract + '.js')
  });
