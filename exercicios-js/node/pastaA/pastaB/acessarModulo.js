const modA = require('../../moduloA')
const modB = require('/home/heitor/Documentos/Desenvolvimento/Javascript/exercicios-js/node/moduloB.js')

console.log(modA.ateLogo)
console.log(modB.bomDia)

const c = require('./pastaC/index') // o index no require pode ser suprimido
console.log(c.ola2)

const http = require('http')
http.createServer((req, res)=>{
    res.write('bom dia')
    res.end()
}).listen(8080)  