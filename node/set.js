//estrutura não aceita repetição/ não indexada

const times = new Set()

times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

times.delete('Flamengo')
console.log(times)