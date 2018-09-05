function passarAluno(aluno){
    if(aluno.nota >= 7){
        console.log(`O aluno ${aluno.nome} passou com a nota ${aluno.nota}`)
    }else{
        console.log(`O aluno ${aluno.nome} reprovou com a nota ${aluno.nota}`)
    }
}

passarAluno({nome: 'Heitor', nota: 10})