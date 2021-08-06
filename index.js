const TelegramBot = require('node-telegram-bot-api');
const token = '<bot_token>';
const bot = new TelegramBot(token, {polling: true});



const express = require('express')
const app = express()
const port = 3344

app.get('/api/v1', (req, res) => res.send('<h1>Hello World! SoulTrack API V1.0</h1>'))
app.get('/', (req, res) => res.send('<h1>This is the main page</h1>'))

app.listen(port, () => console.log(`Soultrack Live app listening at http://localhost:${3344}`))

app.get('/api/v1/welcome/:id', function (req, res) {
    const chatId = req.params.id; 
    bot.sendMessage(chatId, 'Welcome to SoultTrackˡⁱᵛᵉ from KMU');
    return res.json("Welcome message sent!");
});