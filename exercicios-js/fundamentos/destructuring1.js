// novo recurso do ES2015

let pessoa = {
    nome: 'Heitor',
    idade: 23,
    endereco: {
        logradouro: 'Rua',
        numero: 10
    }
}

let { nome, idade } = pessoa
console.log(nome)
console.log(idade)

let { nome:n, idade:i } = pessoa
console.log(n)
console.log(i)

let { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

let { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

/* Vai dar erro: quando houver objeto não existente aninhado
let { conta: { ag, num } } = pessoa
console.log(ag, num)
*/