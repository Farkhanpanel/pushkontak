const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['6285865915564'] // no own
global.packname = '© sticker by' // nama pack sticker
global.author = 'NoxzyXd'// nama author 


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})