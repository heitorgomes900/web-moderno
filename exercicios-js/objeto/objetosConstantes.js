// pessoa aponta para um endereço de memória
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro' // não altera o endereço para qual o ponteiro aponta
console.log(pessoa)

// pessoa = {} // vai dar errado. O ponteiro não pode apontar para outro lugar

Object.freeze(pessoa) // O objeto não poderá ser alterado após este comando
pessoa.nome = 'José'
console.log(pessoa)