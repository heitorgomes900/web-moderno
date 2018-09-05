function imprimirLista(lista){
    for(i in lista){
        console.log(lista[i])
    }
}

imprimirLista([5,3,9,4,7])

let pessoa = {
    nome: 'Heitor',
    sobrenome:'Gomes',
    peso: 86
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}