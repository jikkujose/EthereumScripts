helpers.rightJust = function(string, width, padder) {
  padder = padder || " "
  var done = width <= string.length

  return(
    done ? string : helpers.rightJust(padder + string, width, padder)
  );
}
