//Variável fora do escopo de função será sobrescrita
var numero = 1
{
	var numero =2
	console.log('Dentro - ', numero)
}

console.log('Fora - ', numero)

