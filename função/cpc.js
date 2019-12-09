//funções em JS é First-Class Object (Citizens)
//Higher-order function

//função forma literal
function fun1(a, b) {
    return a - b

}

//Armazenar function em variável
const fun2 = function(a, b){
    console.log(a + b)
}

fun2(5, 6)
//Armazenar função em array
const array = [function (a,b) {return a+b}, fun1, fun2]

console.log(array[2](3,5))

//Armazenar em atributo de objeto
const obj = {}
obj.falar = function(){return "Falei!"}

console.log(obj.falar())

//Passar função como parametro
function run(fun){
    fun()
}
run(function(){console.log("Executando...")})

//Uma função pode retornar/conter outra função
function soma(a, b){
    return function(c){
        console.log(a + b -c)
    }
}
soma(5, 10)(8)