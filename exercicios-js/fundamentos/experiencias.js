
// Declaração no escopo local => undefined no escopo global
let a = 3
console.log(this.a)
console.log(global.a) // no Node, global equivale ao window no browser

global.b = 123
this.c = 456
this.d = 'teste'
this.e = false

console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//module.exports = {e: 5456, f: true, g: 'Heitor'}
