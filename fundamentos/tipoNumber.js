const peso1 = 1.1 // com a função isInteger retorna false, pois o js considera string o número nesse formato
const peso2 = Number(2.0)

const avaliacao1 = 9.66
const avaliacao2 = 8.33

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 *+ peso2)

console.log("Média é igual a" + media.toFixed(2))
/*console.log(media.toFixed(2))// função toFixed formata o número com limite de casas decimais.
console.log(media.toString(2)) // função toString converte Number em string, parametro 2 converte em binário
*/
