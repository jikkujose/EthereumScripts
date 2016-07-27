var ls = function(fileName) {
  scriptLocation = meta.home + "Ethereum/scripts/";
  return loadScript(scriptLocation + fileName + ".js");
}
