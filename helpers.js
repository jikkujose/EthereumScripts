helpers = {}

tmp.helpers = [
  'p',
  'rightJust',
  'filterByProperty',
  'capitalize',
  'ls',
  'converters',
  'newAccount',
  'walletFilters',
]

tmp.helpers
  .forEach(function(helper) {
    loadScript('./helpers/' + helper + '.js')
  });
