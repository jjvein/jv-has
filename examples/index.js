var jvHas = require('../')
var log = console.log, ret

ret = jvHas({}, 'hasOwnProperty')
log(ret)

ret = jvHas([1, 2, 3, 4], 4)
log(ret)

ret = jvHas({foo: 'foo', bar: 'bar'}, 'bar')
log(ret)

ret = jvHas(Object.prototype, 'hasOwnProperty')
log(ret)

ret = jvHas('hello', 'e')
log(ret)


