let pessoa = {
    nome: 'João',
    idade: 9,
    peso: 40
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave,valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa,'dataNascimento',{
    enumerable: true,
    writable: false,
    value: '08/03/2009'
})

console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ES2015)
const dest = { a: 1}
const o1 = { b: 3}
const o2 = { c: 5, a: 7}
const obj = Object.assign(dest, o1, o2)
console.log(obj)

Object.freeze(obj)