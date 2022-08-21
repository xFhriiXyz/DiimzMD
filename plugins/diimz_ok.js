let fs = require('fs')
let handler = async (m) => {
let hellodiimz = fs.readFileSync('./mp3/iya.opus')
conn.sendFile(m.chat, hellodiimz, '', '', m, true)
}

handler.customPrefix = /^(ok)$/i
handler.command = new RegExp

handler.limit = false
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler