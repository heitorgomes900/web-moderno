notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

nFil = notas.filter(n => n >= 7)
nMap = notas.map(n => n >= 7)
console.log(nFil)
console.log(nMap)

let produtos = [
    { nome: 'Notebook', preco: 2999.90, fragil: true },
    { nome: 'Tablet', preco: 999.90, fragil: true },
    { nome: 'Taça de cristal', preco: 49.90, fragil: true },
    { nome: 'Bola', preco: 99.90, fragil: false },
]

console.log(produtos.filter(p => {
    return p.preco >= 500 && p.fragil
}))