# Discord bot Template

With this template you will be able to develop and maintain your own bots for Discord.

This template aims to be a good start and have already a command for testing and boilerplate.

As the bots I'll build get bigger and better, I'll try and update this repo to make it support a whole variety of database technologies right out of the box, but for now you'll have to adapt it yourself. PRs are always welcome!

*PS.: This project started because I wanted to develop bots using functional programming and the factory design pattern instead of OOP (like I was using to build the older bot). Additionally, the start of the repo may not be the best possible because I'm still trying to adapt to factory.*

## Setting up

* To set it up you need a bot application created on the [Discord Developer Portal](https://discord.com/developers/applications/) and the token of your bot.
* Then create a file named `bot.json` under the folder `configs`.
* Within the `bot.json` file, to start, you need to set up the bot prefix and the token such as the following model:

```json
{
  "prefix": "!",
  "token": "your-bot-token"
}
```

**And you should be good to go!**

*Happy coding!!*