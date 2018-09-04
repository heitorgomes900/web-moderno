// novo recurso do ES2015

function rand([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min]
    let valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

//let obj = {max:50, min:40}
console.log(rand([50,40]))
console.log(rand([950]))
console.log(rand([, 10]))
console.log(rand([]))
