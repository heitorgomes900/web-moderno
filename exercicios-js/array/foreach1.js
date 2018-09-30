const aprovados = ['Ana', 'Maria', 'Alda']
aprovados.forEach(function (nome, indice) {
    console.log(`${indice + 1}: ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

let exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
