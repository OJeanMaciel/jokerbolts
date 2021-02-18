'use strict';
const TelegramBot = require('node-telegram-bot-api');

module.exports = function()
{
// replace the value below with the Telegram token you receive from @BotFather
const token = '1667510046:AAEczHA_CxpwH8zcxJECHjjHhXmxYK_3OO4';
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});
// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message
  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"
  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});
bot.onText(/\/oi/, (msg) => {

    bot.sendMessage(msg.chat.id,`Olá ${msg.chat.first_name}`);
 
 });
 bot.onText(/\/tudo/, (msg) => {
 
     bot.sendMessage(msg.chat.id,`Tudo bem ${msg.chat.first_name}`);
  
  });
  bot.onText(/\/idade/, (msg) => {
  
      bot.sendMessage(msg.chat.id,`Sou um robo ${msg.chat.first_name}`);
   
   });
   bot.onText(/\/solteiro/, (msg) => {
   
       bot.sendMessage(msg.chat.id,`Coneço uma tal de Siri! ${msg.chat.first_name}`);
    
    });
}