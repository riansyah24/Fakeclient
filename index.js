import { run } from "./utils/client.js"
import TelegramBot from "node-telegram-bot-api"

let bot = new TelegramBot(process.env.TOKEN,{
  polling:true
})

bot.on("message",(msg) => {
  const chatId = msg.chat.id;
  const text = msg.text
  run(text)
  .then(res => bot.sendMessage(chatId, res))
})