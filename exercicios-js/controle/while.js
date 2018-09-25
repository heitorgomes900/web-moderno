let i = 0
while(i < 10){
    console.log(i)
    i++
}

function gerarValorAleatorio(min, max){
    let valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = 0

while(opcao != -1){
    opcao = gerarValorAleatorio(-1, 10)
    console.log(`Opção escolhida foi o ${opcao}`)
}