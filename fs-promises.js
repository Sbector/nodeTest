const fs = require('node:fs/promises')

console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8')
    .then(text => {
        console.log(text)
    })

console.log('Mientras ejecuta otra cosa...')

console.log('Leyendo el primer archivo...')
fs.readFile('./archivo2.txt', 'utf-8')
    .then(text => {
        console.log(text)
    })