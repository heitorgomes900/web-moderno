// let e const
{
    var a = 2 // escopo global e função
    let b = 3 // escopo global, função e bloco
    console.log(b)
}
console.log(a)

// Template string
let nome = 'Heitor'
console.log(`Oi ${nome}`)

// Destructuring
const [l, e, ...trans] = 'Teste'
console.log(l, e, trans)

const [x, , y] = trans
console.log(x, y)

const { idade: i, nome:n } = { nome: 'Heitor', idade: 23 }
console.log(i, n)