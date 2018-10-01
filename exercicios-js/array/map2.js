let carrinho = [
    '{"nome": "Borracha", "preco": 0.99}',
    '{"nome": "Caderno", "preco": 10.99}',
    '{"nome": "Kit Lápis", "preco": 30.99}',
    '{"nome": "Caneta", "preco": 1.99}'
]

// Retornar um array apenas com o preços
precos = carrinho.map((e) => {
    return JSON.parse(e).preco
})

console.log(precos)