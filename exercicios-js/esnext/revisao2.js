// Arrow function
const soma = (a, b) => a + b // return implicito
const soma2 = (a, b) => {
    return a + b
} // return explicito

console.log(soma(1, 2))

// Arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind()
lexico1()
lexico2()

// Parâmetros default
function log(texto = 'node') {
    return texto
}
console.log(log(8))

// Operador rest
function total(...n) {
    let total = 0
    n.forEach(n => total += n)
    return total
}
console.log(total(1, 2, 3, 4, 4, 5, 6))