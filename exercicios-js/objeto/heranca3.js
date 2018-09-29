let pai = {
    nome: 'pedro',
    cabelo: 'castanho'
}

let filho1 = Object.create(pai)
filho1.nome = 'jose'
filho1.cabelo = 'loiro'
console.log(filho1.cabelo)

let filho2 = Object.create(pai, {
    nome: { value: 'joao', writable: false, enumerable: true}
})

console.log(filho2.nome)
filho2.nome = 'alex'
console.log(`${filho2.nome} tem cabelo ${filho2.cabelo}`)

console.log(Object.keys(filho2))
console.log(Object.keys(filho1))

for(let key in filho2){
    filho2.hasOwnProperty(key) ?
        console.log(key):console.log(`Por herança: ${key}`)
}