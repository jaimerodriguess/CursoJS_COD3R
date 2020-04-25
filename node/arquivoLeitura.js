const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//sincrono
const conteudo = fs.readFileSync(caminho, 'utf8')

console.log(conteudo)

//assincrona
fs.readFile(caminho, 'utf8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`Assicrona ${config.db.host} : ${config.db.port}`)
})

const config = require('./arquivo.json')
console.log("Final", config)

fs.readdir(__dirname, (err, arquivos) => {
    console.log(arquivos)
})