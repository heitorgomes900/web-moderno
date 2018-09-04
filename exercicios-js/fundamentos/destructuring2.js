// novo recurso do ES2015

let [a] = [10]
console.log(a)

let [n1,,n3,,n5,n6= 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

let [,[,nota]] = [[,6,3],[3,8,0]]
console.log(nota)
