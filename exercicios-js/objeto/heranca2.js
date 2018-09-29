// Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = 'Z'
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: 'X' } // Sobrescrita do attr3 no filho
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attr0)
console.log(filho.attr1)
console.log(filho.attr2)
console.log(filho.attr3)

const carro = {
    velAtual: 0, 
    velMax: 200, 
    acelerarMais(a){
        this.velAtual = this.velAtual + a < this.velMax? this.velAtual + a : this.velMax
    },
    status(){
        return `${this.velAtual}`
    }
}
carro.acelerarMais(4)
console.log(carro.status())

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    velMax: 200,
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

ferrari.acelerarMais(20)
console.log(ferrari.status())

volvo.acelerarMais(1000)
console.log(volvo.status())
