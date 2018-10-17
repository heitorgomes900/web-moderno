// Estrutura de conjunto; não indexada e que não aceita repetição (semelhante ao do python)

const times = new Set()
times.add('vasco')
times.add('palmeiras')
times.add('coritiba')
times.add('sao paulo')
times.add('vasco')

console.log(times) // Set { 'vasco', 'palmeiras', 'coritiba', 'sao paulo' }
console.log(times.size) // 4
console.log(times.has('sao paulo')) // true
times.delete('palmeiras')
console.log(times) // Set { 'vasco', 'coritiba', 'sao paulo' }

let nums = [1, 2, 4, 5, 6, 1, 5]
let numsSet = new Set(nums)
console.log(numsSet) // Set { 1, 2, 4, 5, 6 }