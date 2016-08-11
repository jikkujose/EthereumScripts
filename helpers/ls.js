helpers.ls = function(file) {
  tmp.loc = meta.scriptDirectory + file + ".js"
  console.log(meta.scriptDirectory)
  return loadScript(tmp.loc);
}
