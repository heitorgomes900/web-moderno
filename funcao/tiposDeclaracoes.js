console.log(soma(3,4)) // funciona por hoisting
/**
 * console.log(sub(2,1)) // não funciona (hoisting não age sobre esta funcao)
 * console.log(mult(2,2)) // não funciona (hoisting não age sobre esta funcao)
 */



// Function declaration
function soma(x, y){
    return x + y
}

// Function expression
let sub = function(x, y){
    return x - y
}

// Named function expression (pouco usada; benefícios no debug)
let mult = function mult(x, y){
    return x * y
}

