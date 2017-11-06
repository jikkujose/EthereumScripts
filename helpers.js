helpers = {}

tmp.helpers = [
  "p",
  "balance",
  "rightJust",
  "filterByProperty",
  "capitalize",
  "ls",
  "converters",
  "newAccount",
  "walletFilters",
  "status",
  "unlockAccountByIndex",
]

tmp.helpers.forEach(function(helper) {
  loadScript("./helpers/" + helper + ".js")
})
