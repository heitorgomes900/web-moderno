let soma = function(a,b){
    return a + b
}
let imprimirResultado= function(a,b,operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(1,2)
imprimirResultado(1,2, soma)
imprimirResultado(1,2, function(a,b){
    return a - b
})
imprimirResultado(1,2, (a,b) => a * b)

let pessoa = {
    falar: function(){
        console.log('opaa')
    },
    ouvir(){
        console.log('...')
    }
}