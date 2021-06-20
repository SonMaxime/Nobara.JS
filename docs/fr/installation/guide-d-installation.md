# Installation Guide

## Before you begin

**1.** Faites attention à avoir [Node.js](https://nodejs.org/en/download/) dans la version 14 et/ou ultérieur.

**2.** Téléchargez le bot en cliquant sur le bouton "Code" et décompréssez le avec WinRar ou 7-Zip.

**3.** `cd` vers le répertoire du bot (commande de console PowerShell/CMD/Linux)


## Fill config.js file

Make sure to remove the `.example` extention from the `config.js.example` file.

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

PM2 (optional if u run the bot on a VPS)
 - `npm install pm2 -g`
 - `pm2 start index.js`

Nodemon (to auto restart the bot when a modification is made)
 - `npm install nodemon -g`
 - `nodemon index.js`
 
 > If there's an error or something else, please refer u to the common-errors.md file in the same folder.