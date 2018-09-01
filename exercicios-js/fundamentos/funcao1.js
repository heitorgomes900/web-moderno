// função sem retorno  
function imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(1,2)
imprimirSoma(2) // vai retornar NaN
imprimirSoma(1,2,3,4,5,6) // pega os dois primeiros e ignora os outros
imprimirSoma() // vai retornar NaN

// função com retorno
function imprimirSoma2(a, b = 0){ // valores padrão caso não seja passado o argumento
    return a + b
}
console.log(imprimirSoma2(1,2))
console.log(imprimirSoma2(1))