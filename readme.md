## Simple music bot for discord

#### 1. Install ffmpeg
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
  "prefix": "smb!"
}
```
Prefix is used to identify message as a command, f.e:
```
smb!play
```

Token can be obtained here: https://discord.com/developers/applications.

#### 4. Start it!
```bash
npm start
# or
yarn start
```

#### TODO:
* search on youtube
* add support for plain media files
