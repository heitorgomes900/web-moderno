const quaseArray = { 0: 'Ana', 1: 'Bia', 2: 'Cintia' }
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function () {
        return Object.values(this)
    },
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Ana', 'Bia', 'Cintia']
console.log(quaseArray.toString(), meuArray)