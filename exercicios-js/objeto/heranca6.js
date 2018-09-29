function Aula(nome, videoId){
    this.nome = nome
    this.videoId = videoId
}

let aula1 = new Aula('Bem vindo', 1)
let aula2 = new Aula('Até breve', 100)
console.log(aula1, aula2)

// simulando o operador new
function novo(f, ...params){
    let obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

let aula3 = novo(Aula, 'Bem vindo', 1)
let aula4 = novo(Aula, 'Até breve', 100)
console.log(aula3, aula4)