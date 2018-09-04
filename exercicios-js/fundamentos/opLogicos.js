function compras(trab1, trab2){
    let icecream = trab1 || trab2
    let tv50p = trab1 && trab2
    //let tv32p = !!(trab1 ^ trab2)
    let tv32p = trab1 != trab2
    let saudavel = !icecream
    return { icecream, tv50p, tv32p, saudavel }
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))