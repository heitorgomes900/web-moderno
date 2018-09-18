let notas = [4.3, 7.6, 8.9, 3.5, 6.5, 9.0]

// Sem callback
let notasBaixas = []
for (let i in notas){
    notas[i] < 7 ? notasBaixas.push(notas[i]):null
}

console.log(notasBaixas)

// Com callback
let notasBaixas2 = notas.filter((nota) => nota < 7)

console.log(notasBaixas2)