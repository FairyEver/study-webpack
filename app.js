// ES6
import sum from './src/sum'

// CommonJS
var minus = require('./src/minus')

// AMD
require(['./src/muti'], function (muti) {
    console.log('muti(1, 2) = ', muti(1, 2))
})

console.log('sum(1, 2) = ', sum(1, 2))
console.log('minus(1, 2) = ', minus(1, 2))