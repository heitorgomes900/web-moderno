// Função em JS é First-Class Object (Citizens)
// Higher-Order Function

// criar de forma literal
function fun1(){ }

// armazenar em uma variavel
let fun2 = function() { }

// armazenar em um array
let array = [function() {}, fun1, fun2]

// armazenar em um atributo de um objeto
let obj = {}
obj.falar = function(){ return 'olá'}
console.log(obj.falar())

// passar funcao como parametro
function run(fun){
    fun()
}
run(function(){ console.log('executar...')})

// uma funcao pode conter outra
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2,3)(4)
let x = soma(2,3)
x(3)