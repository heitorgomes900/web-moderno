Array.prototype.filter2 = function (callback) {
    let a = []
    for (let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            a.push(this[i])
        }
    }
    return a
}

let produtos = [
    { nome: 'Notebook', preco: 2999.90, fragil: true },
    { nome: 'Tablet', preco: 999.90, fragil: true },
    { nome: 'Taça de cristal', preco: 49.90, fragil: true },
    { nome: 'Bola', preco: 99.90, fragil: false },
]

console.log(produtos.filter2(p => {
    return p.preco >= 500 && p.fragil
}))