let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `Hai Kak ${ye}👋\nJika ingin membeli script,silahkan chat owner.`
conn.sendBut(m.chat, esce, wm3, 'Ok', 'Ya', m) 
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler
