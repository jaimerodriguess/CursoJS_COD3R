{
	{
		{
			{
				var sera = 'Será???'//variável com var dentro de bloco de código tem escopo global
			}
		}
	}
}

console.log(sera)

function soma(){
	var local = '123'// variável com var dentro de função tem escopo local
}

console.log(local)
