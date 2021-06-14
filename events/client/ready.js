const Dashboard = require("./../../dashboard/dashboard");

module.exports = async (client, message) => {
  console.log(`${client.user.tag} est co`);

  let status = [
    {name: '.help', type: 'PLAYING'},
    {name: 'Twit: SonMaximeAPX', type: 'WATCHING'},
    {name: "pfp by @ikadakat", type: "PLAYING"},
    {name: "Apex Games", type: "COMPETING"}
  ]
  function setStatus(){
    let randomStatus = status[Math.floor(Math.random()*status.length)]
    client.user.setPresence({activity: randomStatus});
  }
  setStatus();
  setInterval(() => setStatus(), 300000)

  for (let guild of client.guilds.cache.array()) {

    let lang = await client.db.fetch(`${guild.id}.language`);

    if (!lang) {
        lang = "fr";
        client.db.set(`${guild.id}.language`, "fr"); 
    }

    guild.language = require(`./../../locales/${lang}.json`);
  }
  
  Dashboard(client);
}
