meta.etherToWei = function(value) {
  return(
    web3.toWei(value, "ether")
  );
}

meta.weiToEther = function(value) {
  return(
    web3.fromWei(value, "ether")
  );
}
