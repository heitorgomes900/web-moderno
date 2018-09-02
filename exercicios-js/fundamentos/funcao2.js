// armazenando função em variável
let x = function(a,b){
    console.log(a + b)
}
x(1, 1)

// armazenando uma função arrow em uma variável
let soma = (a, b) => {
    return a + b
}
console.log(soma(2,2))

// retorno implícito
let subtracao = (a, b) => a - b
console.log(subtracao(2,1))

const imprimirA = a => console.log(a)
imprimirA('Opa')