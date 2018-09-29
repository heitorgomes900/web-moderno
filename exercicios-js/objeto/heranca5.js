console.log(typeof String) // function
console.log(typeof Array) // function
console.log(typeof Object) // function

String.prototype.reverse = function(){ return this.split('').reverse().join('')}

console.log('subi no onibus'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([1,2,3,4,5,6].first())
console.log(['a','b','c'].first())

String.prototype.toString = function(){
    return 'Lascou'
}
console.log('teste'.reverse())