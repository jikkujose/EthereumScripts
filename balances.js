tmp.accountCollection = function(index) {
  account = {
    address: eth.accounts[index],
    balance: function() {
      return eth.getBalance(this.address);
    },
    prettyBalance: function() {
      return(
        helpers.rightJust(index + " |", 7) +
          helpers.rightJust(this.shortAddress() + " |", 20) +
          helpers.rightJust(this.type() + " |", 7) +
          helpers.rightJust((this.balanceInEther()), 9)
      );
    },
    type: function() {
      return(wallets.byAddress(this.address)[0].type);
    },
    shortAddress: function() {
      return(
        this.address.slice(0, 9) +
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

tmp.header = function(){
  return(
    helpers.rightJust("Index | ", 8) +
      helpers.rightJust("Address | ", 20) +
      helpers.rightJust("Type | ", 7) +
      helpers.rightJust("Balance", 8) +
      "\n" +
      helpers.rightJust(" | ", 8, "-") +
      helpers.rightJust(" | ", 20, "-") +
      helpers.rightJust(" | ", 7, "-") +
      helpers.rightJust("  ", 10, "-")
  );
},

meta.balances = function(type) {
  helpers.p(tmp.header());

  result = eth
    .accounts
    .forEach(function(_, index) {
      helpers.p(tmp.accountCollection(index).prettyBalance());
    })
};
