let i = 0

do{
    console.log(i)
    i++
}while(i < 10)

function gerarValorAleatorio(min, max){
    let valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = 0
do{
    opcao = gerarValorAleatorio(-1, 10)
    console.log(`Opção escolhida foi o ${opcao}`)
} while(opcao != -1)