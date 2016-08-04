contracts.amIOnTheFork = {
  abi: [
    {
      "constant": true,
      "inputs": [],
      "name": "forked",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "update",
      "outputs": [],
      "type": "function"
    }
  ],
  address: "0x2bd2326c993dfaef84f696526064ff22eba5b362",
  contract: function() {
    return(
      web3.eth.contract(this.abi)
    );
  },
  instance: function() {
    return(
      this.contract().at(this.address)
    );
  },
}
