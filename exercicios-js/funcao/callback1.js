let fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)

/* O callback é a chamada de uma função após o acontecimento de um evento */
/* Neste cenário, cada evento é uma iteração no laço forEach */