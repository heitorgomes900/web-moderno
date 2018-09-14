// Estratégia 1 para gerar valor padrão
function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(), soma1(2), soma1(4,5,6), soma1(0,0,0))

function soma2(a, b, c){
    a = !!a ? a : 1
    b = !!b ? b : 1
    c = !!c ? c : 1
    return a + b + c
}
console.log(soma2(), soma2(2), soma2(4,5,6), soma2(0,0,0))

// Padrão no es2015
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}
console.log(soma3(), soma3(2), soma3(4,5,6), soma3(0,0,0))