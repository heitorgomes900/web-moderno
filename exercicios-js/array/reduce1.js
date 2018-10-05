let alunos = [
    { nome: 'joao', nota: 7.6, bolsa: false },
    { nome: 'maria', nota: 4.5, bolsa: true },
    { nome: 'ana', nota: 8.9, bolsa: false },
    { nome: 'joaquim', nota: 1.6, bolsa: true }
]

let resultado = alunos.map(a => a.nota).reduce((acumulador, atual) => {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)