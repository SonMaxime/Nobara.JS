
# Common Errors

These are errors you might come across when running the bot, if there are any errors not included in this page, please let me know.

### ffmpeg/avconv not found

For the Music category, ffmpeg is required, to fix this issue, try the command `npm install ffmpeg-static`.

### Cannot find module <module_name>

Simple, install the module using `npm install <module_name>`

### Error w/ the bookman module

It's probably normal that you have this error. This happens in case of a version of module which are no longer compatible w/ the bot code in case of an implementation of mongoose directly in the module module.

So make sur that the module is in the 3.1.0 version and not the most recently.

### Cannot read experience error

This error is due to several problems:
- The connection of your bot to your Mongo database was not done correctly.
- Your bot was turned off then a Discord user joined your server, which means that the user in question was not registered on your database and during the intervention of the XP module, the bot could not find the profile of the affected member on your server and provokes the crash of the bot.

To remedy :
- Check the rights you have granted to your Mongo database username.
- Check if the link you placed in your `config.js` file is correct.
- Make a backup of your database and make a new one under the same name then restore the backup of your old database.
- Find a way to leave your robot permanently on the road according to your possibilities.
