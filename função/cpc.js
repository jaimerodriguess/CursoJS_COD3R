//função forma literal
function fun1() {}

const array = [function (a,b) {return a+b, fun1, fun2}]

console.log(array[0](3,5))