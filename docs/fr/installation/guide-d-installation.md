# Installation Guide

## Avant de commencer

**1.** Faites attention à avoir [Node.js](https://nodejs.org/en/download/) dans la version 14 et/ou ultérieur.

**2.** Téléchargez le bot en cliquant sur le bouton "Code" et décompréssez le avec WinRar ou 7-Zip.

**3.** `cd` vers le répertoire du bot (commande de console PowerShell/CMD/Linux)


## Fill config.js file

Faites attention à retirer l'extention `.example` du fichier `config.js.example`.

```
module.exports = {
  TOKEN: "Discord Bot Token",
  MAX_PLAYLIST_SIZE: 25,
  STAY_TIME: 10,
  DEFAULT_VOLUME: 100,
  id: "client id",
  clientSecret: "client secret",
  domain: "http://localhost",
  port: 8080,
  SOUNDCLOUD_CLIENT_ID: "Client ID for Souncloud",
  DBCONNECTION: "database on MongoDb",
  DEFAULTSETTINGS: {
    prefix: "."
  }
}
```
 
 ## Démarrage du bot

Node
 - `node .`

PM2 (optionnel si vous hébergez votre bot)
 - `npm install pm2 -g`
 - `pm2 start index.js`

Nodemon (pour redémarrer le bot automatiquement en cas de changement dans le programme)
 - `npm install nodemon -g`
 - `nodemon index.js`
 
 > Si vous avez des problèmes pendant/après votre installation, référez vous au fichier `erreures-communes.md`