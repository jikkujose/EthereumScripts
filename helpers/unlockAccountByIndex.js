helpers.unlockAccountByIndex = function(index) {
  return(
    personal.unlockAccount(eth.accounts[index])
  );
}
