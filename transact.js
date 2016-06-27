var transact = function(from, to, amount){
  var object = {
    from: from,
    to: to,
    amount: amount,
    charge: 2000000000000000,
    denomination: 'ether',
    value: function(){
      return web3.fromWei(this.amount, denomination);
    },
    availableBalance: function() {
      return eth.getBalance(from) - this.charge;
    },
    transfer: function() {
      return eth.sendTransaction({
            from: this.from,
            to: this.to,
            value: this.value()
          });
    },
    transferAll: function(){
      return eth.sendTransaction({
        from: this.from,
        to: this.to,
        value: this.availableBalance()
      });
    },
  }

  return object;
}
