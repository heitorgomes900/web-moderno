// Usando notação liberal (não é JSON!!)
let obj1 = {}
console.log(obj1)

// Object em JS
let obj2 = new Object() //parênteses opcionais
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}
let p1 = new Produto('Caneta', 1, 0)
let p2 = new Produto('Notebook', 3000, 0.1)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory
function criarFunci(nome, VP, faltas){
    return {
        nome, 
        VP,
        faltas,
        getSalario(){
            return (VP / 30) * (30 - faltas)
        }
    }
}
let f1 = criarFunci('Heitor', 3000, 0)
let f2 = criarFunci('João', 3000, 5)
console.log(`Salário funci ${f1.nome}: ${f1.getSalario()}\nSalário funci ${f2.nome}: ${f2.getSalario()}`)

// Object.create
let filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna um objeto..
let fromJson = JSON.parse('{"info": "Eu sou um JSON"}')
console.log(fromJson.info)