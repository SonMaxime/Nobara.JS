
# Common Errors

These are errors you might come across when running the bot, if there are any errors not included in this page, please let me know.

### ffmpeg/avconv not found

For the Music category, ffmpeg is required, to fix this issue, try the command `npm install ffmpeg-static`.

### Cannot find module <module_name>

Simple, install the module using `npm install <module_name>`

### Error w/ the bookman module

It's probably normal that you have this error. This happens in case of a version of module which are no longer compatible w/ the bot code in case of an implementation of mongoose directly in the module module.

So make sur that the module is in the 3.1.0 version and not the most recently.
