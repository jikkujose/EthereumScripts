contracts.replaySafeSplit = {
  abi: [
    {
      "constant": false,
      "inputs": [
        {
          "name": "targetFork",
          "type": "address"
        },
        {
          "name": "targetNoFork",
          "type": "address"
        }
      ],
      "name": "split",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "type": "function"
    }
  ],
  address: '0xaa1a6e3e6ef20068f7f8d8c835d2d22fd5116444',
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
