let alunos = [
    { nome: 'joao', nota: 7.6, bolsa: false },
    { nome: 'maria', nota: 4.5, bolsa: true },
    { nome: 'ana', nota: 8.9, bolsa: false },
    { nome: 'joaquim', nota: 1.6, bolsa: true }
]

// Imperativa (COMO deve ser feito)
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativa (O QUE deve ser feito)
let getNota = aluno => aluno.nota
let soma = (total, atual) => total + atual
let total2 = alunos.map(getNota).reduce(soma)
console.log(total2/alunos.length)