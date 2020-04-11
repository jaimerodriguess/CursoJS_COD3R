console.log(typeof String)
console.log(typeof Function)
console.log(typeof Object)

String.prototype.reverse = function (){
    return this.split('').reverse().join('')
}

console.log('Jaime Rodrigues de Souza'.reverse())