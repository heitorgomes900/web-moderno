const valores = [1.2,2.3,3.4,4.5]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 5.6
console.log(valores[4])

console.log(valores.length)

valores.push(6.7, {nome: 'heitor'})
console.log(valores)
valores.pop()
console.log(valores)

delete valores[0]
console.log(valores)

console.log(typeof valores)