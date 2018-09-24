function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco *(1 - this.desc) * (1 + imposto)}`
}

let produto = {
    nome: 'Notebook',
    preco: 4000,
    desc: 0.05,
    getPreco
}

global.preco = 10
global.desc = 0.01
console.log(getPreco())
console.log(produto.getPreco())

let carro = {
    preco: 40000,
    desc: 0.07
}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.1, 'US$')) // contexto, forma de passagem de parametros (fora)
console.log(getPreco.apply(carro, [0.8, '£'])) // contexto, forma de passagem de parametros (dentro de array)