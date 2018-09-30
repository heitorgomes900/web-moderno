const pilotos = ['Vettel', 'Hamilton', 'Bottas', 'Rosberg', 'Alonso']

pilotos.pop() // remove o último elemento do array
console.log(pilotos)

pilotos.push('Ricciardo') // empilha um novo elemento
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Raikkonen') // insere um elemento na primeira posição
console.log(pilotos)

pilotos.splice(0,1, 'Verstappen') // apaga certa qtde de elementos e insere novos nas posições 
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // novo array
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1,3) // parte de um array
console.log(algunsPilotos2)