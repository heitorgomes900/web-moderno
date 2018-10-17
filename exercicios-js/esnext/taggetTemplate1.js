// TAGGET TEMPLATE: processar uma template string numa função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}
const aluno = 'Ivo'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}`)