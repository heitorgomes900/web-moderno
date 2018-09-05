function teste1(n){
    if (n > 7)
        console.log(n)
        console.log('final')
}

teste1(6)
teste1(8)

function teste2(n){
    if (n > 7); { // cuidado! não usar o ; em estruturas de controle
        console.log(n)
    }
}

teste2(6)
teste2(8)
