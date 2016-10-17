module.exports = function(el) {
  if (!el) {
    return null
  }
  var attrsObj = {}
  for (var i = 0, attrs = el.attributes; i < attrs.length; i++){
    var key = attrs[i].nodeName
    var val = attrs[i].nodeValue

    if (val && !isNaN(val)) {
      val = +val
    }

    attrsObj[key] = val ? val : true
  }
  return attrsObj
}
