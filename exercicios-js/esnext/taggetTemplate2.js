// TAGGET TEMPLATE: processar uma template string numa função
function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor: `R$ ${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}
const preco = 20.90
const precoParcela = 11
console.log(real `1x de ${preco} ou 2X ${precoParcela}`)