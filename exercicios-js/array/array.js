console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)
aprovados = ['João', 'José', 'Joaquim']
console.log(aprovados)
console.log(aprovados[1])
console.log(aprovados[3])

aprovados[3] = 'Jonas'
aprovados.push('Jonatas')
console.log(aprovados)
console.log('Tamanho do array:', aprovados.length)
aprovados.sort()
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1,1,'Ricardo')
console.log(aprovados)