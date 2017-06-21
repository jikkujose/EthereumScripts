helpers = {}

tmp.helpers = [
  'p',
  'balance',
  'rightJust',
  'filterByProperty',
  'capitalize',
  'ls',
  'converters',
  'newAccount',
  'walletFilters',
  'unlockAccountByIndex',
]

tmp.helpers
  .forEach(function(helper) {
    loadScript('./helpers/' + helper + '.js')
  });
