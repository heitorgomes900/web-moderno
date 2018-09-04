// novo recurso do ES2015

function rand({min = 0, max = 1000}){
    let valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

//let obj = {max:50, min:40}
console.log(rand({max:50, min:40}))
console.log(rand({min:950}))
console.log(rand({}))
