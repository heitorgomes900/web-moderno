// Rest: juntar ; Spread: espalhar
// como usar rest como parametro de função

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 1000 }
const clone = { ativo: true, ...funcionario}
console.log(clone) // { ativo: true, nome: 'Maria', salario: 1000 }

// usar spread com array
const grupoA = ['JOAO','PEDRO','GLORIA']
const grupoFinal = ['MARIA', ...grupoA, 'RAFAEL']
console.log(grupoFinal) // [ 'MARIA', 'JOAO', 'PEDRO', 'GLORIA', 'RAFAEL' ]