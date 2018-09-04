function tratarErroELancar(erro){
    //throw new Error('...')
    //throw 'Não deu certo...'
    throw 1

}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.nome.toUpperCase() + '!!!')
    } catch(e){
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

let obj = { nome: 'Heitor'}
imprimirNomeGritado(obj)