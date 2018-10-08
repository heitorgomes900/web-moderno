let escola = [{
    nome: 'Turma M1',
    alunos: [
        {
            nome: 'Gustavo',
            nota: 8.1
        },
        {
            nome: 'Rebeca',
            nota: 8.9
        }
    ]
}, {
    nome: 'Turma M2',
    alunos: [
        {
            nome: 'Roberto',
            nota: 6.1
        },
        {
            nome: 'Ana',
            nota: 9.2
        }
    ]
}]

let getNomeAluno = aluno => aluno.nota
let getNotasTurma = turma => turma.alunos.map(getNomeAluno)

let notas1 = escola.map(getNotasTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([],this.map(callback))
}

let notas2 = escola.flatMap(getNotasTurma)
console.log(notas2)