
var has = require('../')

console.dir([
    has({}, 'hasOwnProperty'),
    has(Object.prototype, 'hasOwnProperty'),
    has([1, 2, 3], 4),
    has({name: 'Jjvein', age: 24}, 'name')
])
