# Installation Guide

## Before you begin

**1.** Ensure you have [Node.js](https://nodejs.org/en/download/) in v14.

**2.** Download the bot by clicking on the "Code" button and then unzip it w/ WinRar or 7-Zip

**3.** `cd` to the directory (PS/CMD/Linux console command)


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
 
 ## Launch the bot

Node
 - `node .`

PM2 (optional if u run the bot on a VPS)
 - `npm install pm2 -g`
 - `pm2 start index.js`

Nodemon (to auto restart the bot when a modification is made)
 - `npm install nodemon -g`
 - `nodemon index.js`
 
 > If there's an error or something else, please refer u to the common-errors.md file in the same folder.

