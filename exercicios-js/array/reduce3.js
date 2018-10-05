Array.prototype.reduce2 = function (callback, valorInicial) {
    /*
    let acumulador = this[0]
    for (let i = 1; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
    */
    let indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for (let i = 1; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

let alunos = [
    { nome: 'joao', nota: 7.6, bolsa: false },
    { nome: 'maria', nota: 4.5, bolsa: true },
    { nome: 'ana', nota: 8.9, bolsa: false },
    { nome: 'joaquim', nota: 1.6, bolsa: true }
]

// Todos os alunos são bolsistas??
let bolsista = alunos.map(a => a.bolsa).reduce2((acumulador, atual) => {
    return acumulador && atual
})
console.log(bolsista)

// Algum dos alunos é bolsistas??
let bolsista2 = alunos.map(a => a.bolsa).reduce2((acumulador, atual) => {
    return acumulador || atual
})
console.log(bolsista2)

let soma = (a, b) => a + b
let nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma))