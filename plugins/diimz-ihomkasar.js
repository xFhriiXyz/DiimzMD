let fs = require('fs')
let handler = async (m) => {
let hellodiimz = fs.readFileSync('./mp3/ihomkasar.opus')
conn.sendFile(m.chat, hellodiimz, '', '', m, true)
}

handler.customPrefix = /^(ngentod|ngntd|kontol|memek|momok|ajg|anjing|asu|asw|ngontol|anjeng)$/i
handler.command = new RegExp

handler.limit = false
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler