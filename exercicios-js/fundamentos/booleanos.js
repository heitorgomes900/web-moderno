let isAtive = false
console.log(isAtive)

isAtive = true
console.log(isAtive)

isAtive = 1
console.log(!!isAtive)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtive = 1))

console.log('os falsos...')
console.log(!!0)
console.log(!!(isAtive = 0))
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)