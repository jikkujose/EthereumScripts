helpers.newAccount = function(owner, label, type) {
  address = personal.newAccount();
  account = {
    address: address,
    owner: owner,
    type: type,
    label: label,
  }

  wallets.push(account)

  return(account);
}
