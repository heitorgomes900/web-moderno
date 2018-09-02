var numero = 1
{
    let numero = 2
    console.log('Dentro: ', numero) // busca no escopo local e depois no global
}
console.log('Fora: ',numero)

// var: escopo de função e global
// let: escopo de função, global e bloco