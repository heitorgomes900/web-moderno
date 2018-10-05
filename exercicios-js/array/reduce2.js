/**
 * Array.prototype.reduce2 = function(callback){}
 */



let alunos = [
    { nome: 'joao', nota: 7.6, bolsa: false },
    { nome: 'maria', nota: 4.5, bolsa: true },
    { nome: 'ana', nota: 8.9, bolsa: false },
    { nome: 'joaquim', nota: 1.6, bolsa: true }
]

// Todos os alunos são bolsistas??
let bolsista = alunos.map(a => a.bolsa).reduce((acumulador, atual) => {
    return acumulador && atual
})
console.log(bolsista)

// Algum dos alunos é bolsistas??
let bolsista2 = alunos.map(a => a.bolsa).reduce((acumulador, atual) => {
    return acumulador || atual
})
console.log(bolsista2)