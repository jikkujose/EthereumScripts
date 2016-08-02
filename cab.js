accountCollection = function(index) {
  account = {
    address: eth.accounts[index],
    balance: function() {
      return eth.getBalance(this.address);
    },
    prettyBalance: function() {
      return(
            index +
            " | " +
            this.shortAddress() +
            " | " +
            this.balanceInEther() +
            " eth"
          );
    },
    shortAddress: function() {
      return(
          this.address.slice(0, 6) +
          ".." +
          this.address.slice(-4, this.address.length)
          );
    },
    balanceInEther: function() {
      return web3.fromWei(this.balance(), 'ether').toFixed(4);
    },
  }

  return account;
}

meta.cab = function cab() {
  result = eth
    .accounts
    .forEach(function(_, index) {
      console.log(accountCollection(index).prettyBalance());
    })
};
