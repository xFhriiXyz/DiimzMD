let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'donasi'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.ovo
let numberowner = global.numberowner
let ye = `@${m.sender.split`@`[0]}`
let anu = `Hai Kak ${ye}👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
┌〔 Donasi • Emoney 〕
├ Dana : ${dana}
├ Pulsa : ${pulsa}
├ Ovo : ${ovo}
└────

Contact person Owner:
wa.me/${numberowner} (Owner)

*Follow Instagram Owner*`
  conn.sendButtonImg(m.chat, fla + teks, anu, instagram, 'Back', '.help', m) 
}
handler.help = ['donasi', 'donate']
handler.tags = ['xp']
handler.command = /^(donasi|donate)$/i

module.exports = handler