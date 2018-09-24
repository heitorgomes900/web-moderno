let valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    let valor = 'local'
    minhaFuncao()
}

exec()

/**
 * Por contexto lexico, achará global.
 * Uma função tem 'consciência' do contexto em que foi declarada.
 * 
*/