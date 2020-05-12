# Simple music bot for discord

At some point, me and my mates were tired of lagginess of bots, caused by them serving shitload of channels, so I came with a brilliant idea to selfhost my own.

P.S: This is probably my first vanilla javascript project on node, so excuse me for crappy design. If you have any ideas how to refactor it, please, raise an issue.
##### I'm waiting for your issues and pool requests! 😊

## Commands

#### Available commands:
```<prefix>help``` Show the list of available commands\
```<prefix>leave``` Leave current channel\
```<prefix>pause``` Pause current track\
```<prefix>play``` Play a track by provided url\
```<prefix>resume``` Resume current track\
```<prefix>skip``` Skip current track\
```<prefix>stop``` Stop current track\
```<prefix>volume``` Set volume (0.0 -- 10.0)

## Installation

#### 1. Install ffmpeg
This piece of software is probably available in every modern distro's repo.\
https://www.ffmpeg.org/download.html

#### 2. Install node dependencies with a package manager of your choice
```bash
npm install
# or 
yarn install
```

#### 3. Create config.json
```json
{
  "token": "<bot_token>",
  "replies": "en",
  "prefix": "smb!"
}
```
* Prefix is used to identify message as a command, f.e:
```
smb!play
```

* Replies are json files with bot reply lines for different actions. They are located in ./replies. If you can create your a json file in with your own lines and provide it's filename without extension.

* Token can be obtained here:\
https://discord.com/developers/applications.

#### 4. Start it!
```bash
npm start
# or
yarn start
```

And you can also do:
```
node ./main.js
```

#### TODO:
* support for plain media files
* rewind and fast-forward
* l10n using json with strings
* search on youtube