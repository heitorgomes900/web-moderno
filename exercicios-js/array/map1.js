numeros = [1, 2, 3, 5, 6, 7, 8, 9, 10]

// for com propósito
console.log(numeros.map(n => n = n * 2))

let soma10 = e => e + 10
let triplo = e => e * 3
let paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = numeros.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)