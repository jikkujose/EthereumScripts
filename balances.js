tmp.accountCollection = function(index) {
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
            (meta.chain == "Forked" ? " ETH" : " ETC")
          );
    },
    shortAddress: function() {
      return(
          this.address.slice(0, 8) +
          ".." +
          this.address.slice(-6, this.address.length)
          );
    },
    balanceInEther: function() {
      return web3.fromWei(this.balance(), 'ether').toFixed(2);
    },
  }

  return account;
}

meta.balances = function(type) {
  result = eth
    .accounts
    .forEach(function(_, index) {
      console.log(tmp.accountCollection(index).prettyBalance());
    })
};
