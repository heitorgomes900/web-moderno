let dobro = function(a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
} 

dobro = a => 2 * a // return implicito

console.log(dobro(2))

ola = () => 'Olá'
mundo = _ => 'Mundo'

console.log(ola())
console.log(mundo())