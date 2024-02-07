const path = require('node:path')

console.log(path.sep)

const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename('tmp/sbector/password.txt')
console.log(base)

const fileName = path.basename(filePath, '.txt')
console.log(fileName)

const extension = path.extname('tmp/sbector/password.txt')
console.log(extension)