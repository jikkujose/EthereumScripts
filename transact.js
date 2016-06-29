var transact = function(from, to, amount){
  var object = {
    payload: {
      from: from,
      to: to,
      amount: amount,
      charge: 2000000000000000,
      denomination: 'ether',
      value: function() {
        return parseInt(web3.toWei(
          this.amount,
          this.denomination
        ));
      }
    },
    availableBalance: function() {
      return eth.getBalance(from) - this.payload.charge;
    },
    transfer: function() {
      return eth.sendTransaction(this.payload);
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
