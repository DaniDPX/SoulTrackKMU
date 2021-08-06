const TelegramBot = require('node-telegram-bot-api');
const token = 'bot_token';
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



    
bot.onText(/\/echo (.+)/, (msg, match) => {
        // 'msg' is the received Message from Telegram
        // 'match' is the result of executing the regexp above on the text content
        // of the message
      
        const chatId = msg.chat.id;
        const resp = match[1]; // the captured "whatever"
      
        // send back the matched "whatever" to the chat
        bot.sendMessage(chatId, resp);
      });
      









    //   // Listen for any kind of message. There are different kinds of
    //   // messages.
    //   bot.on('message', (msg) => {
    //     const chatId = msg.chat.id;
      
    //     // send a message to the chat acknowledging receipt of their message
    //     bot.sendMessage(chatId, 'Received your message');
    //   });



    bot.on('message', (msg) => {

        // console.log(msg.chat.id);

        var hi = "hi";
        if (msg.text.toString().toLowerCase().indexOf(hi) === 0) {
            if (msg.chat.id == 393686507) {
                bot.sendMessage(msg.chat.id,"ሰላም Eyobed");
            }
            else
            {
                bot.sendMessage(msg.chat.id,"Hello dear user");
            }
       
        }
        
        var bye = "bye";
        if (msg.text.toString().toLowerCase().includes(bye)) {
        bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
        }
        

        // 393686507 Eyobed 
        // 322440361 Kirubel
        });




       
            bot.onText(/\/photo/, (msg) => {
            //     setInterval(() => {
            //     bot.sendPhoto(393686507,"https://picsum.photos/200/300" );
            // }, 3000);
                });
        