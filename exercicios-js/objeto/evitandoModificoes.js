// Object.preventExtensions (não poderá adicionar novos atributos ao objeto; deletar pode)
let produto = Object.preventExtensions({
    nome:'qualquer',
    preco: 1.99,
    tag: 'promocao'
})

console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal (não pode add ou delete atributos, mas pode modificar os existentes)
let pessoa = {
    nome: 'juliana',
    idade: 30
}
Object.seal(pessoa)
console.log(Object.isSealed(pessoa))
pessoa.sobrenome = 'silva' // não funciona
delete pessoa.nome // não funciona
pessoa.idade = 31 // funciona
console.log(pessoa)

// Object.freeze (seal + valores constantes)
Object.freeze(pessoa)
pessoa.idade = 32 // não funciona
console.log(pessoa)