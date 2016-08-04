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
  preForkAddress: null,
  ethAddress: null,
  etcAddress: null,
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
  setAddresses: function(preForkAddress, ethAddress, etcAddress) {
    this.preForkAddress = preForkAddress;
    this.ethAddress = ethAddress;
    this.etcAddress = etcAddress;
  },
  splitSafely: function(value) {
    if(
      !this.preForkAddress ||
        !this.ethAddress ||
        !this.etcAddress
    ) {
      throw('setAddresses(...) needs to be called before splitting!')
    }
    return(
      this
      .instance()
      .split
      .sendTransaction(
        this.ethAddress,
        this.etcAddress,
        this.getPayload(value)
      )
    );
  },
  getPayload: function(value) {
    return({
      from: this.preForkAddress,
      to: this.address,
      value: value
    });
  },
}
