
var has = Object.prototype.hasOwnProperty

module.exports = function (obj, property) {
  return has.call(obj, property)
}

