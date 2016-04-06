
var has = Object.prototype.hasOwnProperty

module.exports = function (obj, property) {

  // Array
  if(Object.prototype.toString.call(obj) === '[object Array]'){
    return !!Array.prototype.find.call(obj, function(item){
      return item === property 
    })
  }

  // String
  if(typeof obj == 'string') {
    return (obj.indexOf(property)  >= 0)
  }

  //object
  return has.call(obj, property)
}

