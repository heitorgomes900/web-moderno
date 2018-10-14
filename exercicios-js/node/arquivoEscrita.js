const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 800,
    desconto: 0.05
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})