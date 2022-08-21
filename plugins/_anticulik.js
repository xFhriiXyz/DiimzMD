let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `Invite Group
• 7 Day = Rp 5k
• 14 Day = Rp 7k
• 30 Day = Rp 10k
• 60 Day = Rp 13k
• Permanent = Rp 15k

Jika berminat hubungi: wa.me/${global.owner[0]} untuk order:)
`
    this.reply(m.chat, teks, m)
    conn.sendContact(m.chat, numberowner, nameowner, m)
    }
}

module.exports = handler
