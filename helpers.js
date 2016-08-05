helpers = {}

tmp.helpers = [
  'filterByProperty',
  'capitalize',
  'ls',
  'converters',
  'newAccount',
]

tmp.helpers
  .forEach(function(helper) {
    loadScript('./helpers/' + helper + '.js')
  });
