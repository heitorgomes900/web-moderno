// ES8 Object.values / Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na notação literal
const nome = 'Heitor'
const pessoa = {
    nome,
    ola() {
        console.log(`Olá ${this.nome}`)
    }
}
pessoa.ola()

// Class
class Animal{}
class Cachorro extends Animal {
    falar(){
        return 'Au'
    }
}
console.log(new Cachorro().falar())