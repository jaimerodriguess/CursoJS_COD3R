//Aula sobre string
 const escola = "cod3r"
 console.log(escola.charAt(3))//Exibe o caracter correspondente ao índice, índice começa na posição 0. Assemelhado ao substr do PHP
 console.log(escola.charCodeAt(3))//Exibe o código da tabela asc.
 console.log(escola.indexOf("o"))//Exibe a posição do caracter na string
 console.log(escola.substr(0, 2))
 console.log('Escala '.concat(escola).concat('!'))//concatena
 console.log(escola.replace(3, 2))//Substitui trecho da string ou caracter
 
 let texto = "Ana, Claudia, Pedro"
 
 console.log(texto.split(","))//converte em array

 console.log(texto.split(",")[1])