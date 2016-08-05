helpers.filterByProperty = function(propertyName) {
  return(
    function(propertyValue) {
      return(
        this
        .filter(function(wallet) {
          return(
            (new RegExp(propertyValue, 'i')).test(wallet[propertyName])
          );
        })
      );
    }
  );
}
