let fs = require('fs')

userbot = {
 Prem: JSON.parse(fs.readFileSync('./db/premium.json')),
 owner: [ "6281261324817", "6281916259786", "62857420881846","628812904283","6282328303332", "62822980698995", "436504463151666", "62823283033323" ],
  MONGO_URI: "mongodb+srv://<username>:<password>@cluster0.eyx0e.mongodb.net/<dbname>?retryWrites=true&w=majority",
   mess: {
   wait: "tunggu sedang di proses...",
   error: "errorr!!"
   },
   prefix: "_",
   limit: 100,
   eror: "Sepertinya Eror",
   waits: "Sedang di proses",
   butmag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQErkKtddKXFUJUGUwERrlnEKiCYqt3H013Q&usqp=CAU', // buat Image Button
   packname: "RIXLE-BOT OFFICIAL",
   author: '© 2021 - FearTeam',
    setting: {
    admin: "only admin",
    group: "only group",
    owner: "owner only pack",
    jadibot: "jadibot only",
    botadmin: "bot harus menjadi admin",
    userPlayer: "Anda Belum Daftar Dalam DB Gamer RIXLE-BOT", 
    nsfw: "FITUR BELUM DIAKTIFKAN!"
    }
}
module.exports = userbot

