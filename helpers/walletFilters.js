tmp.walletProperties = [
  'type',
  'owner',
  'address'
]

tmp
  .walletProperties
  .forEach(function(propertyName) {
    var functionName = 'by' + helpers.capitalize(propertyName)
    wallets[functionName] = helpers.filterByProperty(propertyName)
  });
