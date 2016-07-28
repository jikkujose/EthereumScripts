var newAccount = function(label, type) {
  address = personal.newAccount();
  account = {
    address: address,
    label: label,
    type: type
  }

  meta.accounts.push(account);
}
