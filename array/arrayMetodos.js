const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() //Exclui indice da última posição
pilotos.shift() //Exclui indice na primeira posição

pilotos.unshift('Airton') //Inclui indice na primeira posição
pilotos.push('Verstappen') //Inclui indice na ultima posição

pilotos.splice(1, 2, 'Schumacher', 'Mansell') //Inclui e exclui indices

pilotos.splice(4)//Remove todos os indices após a posição

const algunsPilotos1 = pilotos.slice(1, 3)//Cria novo array a partir da posição

console.log(pilotos)
console.log(algunsPilotos1)