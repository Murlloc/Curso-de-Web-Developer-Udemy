console.log(module.exports === this)

this.a =1 //visivel
exports.b = 2 //visivel
module.exports.c = 3

exports = null

console.log(module.exports)