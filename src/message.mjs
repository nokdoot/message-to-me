process.env.NTBA_FIX_319 = '1';
import TelegramBot from 'node-telegram-bot-api';
import env from 'env-var';

const TELEGRAM_BOT_TOKEN = env.get('TELEGRAM_BOT_TOKEN').required().asString();
const CHAT_IDS = env.get('CHAT_IDS').required().asArray();

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN);

export const send = (content) => {
    for (let chatId of CHAT_IDS) {
        bot.sendMessage(chatId, content).catch(console.log);
    }
}
