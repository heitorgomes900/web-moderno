let valor //não inicializada
console.log(valor) 
//console.log(valor2)

valor = null // não aponta para nenhum endereço de memória
console.log(valor)

let produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 2.9
console.log(produto)
console.log(!!produto.preco)

produto.preco = undefined // não fazer!!
console.log(!!produto.preco)

produto.preco = null
console.log(!!produto.preco)