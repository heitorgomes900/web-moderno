function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma(1,2,5,4,7,0))
console.log(soma())
console.log(soma(1))
console.log(soma(1,'teste'))