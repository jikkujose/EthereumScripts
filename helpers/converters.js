helpers.etherToWei = function(value) {
  return(
    web3.toWei(value, "ether")
  );
}

helpers.weiToEther = function(value) {
  return(
    web3.fromWei(value, "ether")
  );
}
