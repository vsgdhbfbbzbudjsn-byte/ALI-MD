
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA61UW5KiSBTdSkf+ajTyUMCIihhAUERLfCDqxHykkGDKKytJROyoJfRuZkOzkwmsqumK6ZnumojhK8nHvefce+75AvICl8hBDRh+AYTiC2SoXbKGIDAEehVFiIIuCCGDYAiWI3M21vHWPQthzc5mbQsm90SvbC83c3jIsD8XtuM4jRLzATx3AamOKQ5+EFAWlux6OyRmZyuu6CgN9zPz0Z3mh+NCmqp0OY0XDX9otl4jPYDnNiLEFOexSU4oQxSmDmpciOnH4Hc0q48Xad0Zq5SH4VxrZtsDEWDxONhqme8RFZtJuUz8bf0x+Kv9kRJnOTFvW/q0FyU+l739Rh8nDqvN4PH8dEbTtHMwHW35Ar/EcY5CO0Q5w6z5eN2t28AWFGmx8W6SN+O4seRBdWS6TpzstmaP+U2S4Vg8TcqPAb+cpuTIHmUCJZeQlbaXkRRV+dOiTPKz2hwf1dlKeaqOPi7eA3fpm1aS/1J3uJB8cvRFx+MXtrmp5rmh2Ibs+YK2tS+yEtm70r7h+dRXPgbfOxnplcwETSXidYr6eukq1p6TT3ytKLPUFzZLlK1m1SZWvsGHrKI/Qom1EocKSSEXqM5q2qF8kmWxDplmDpI9ZzfYzUpSnhIbbinMWS8KasaJJmcSniwgsdZ5FLsCjmAaL9JBmlo7Y6Q93BklqLFDMOSfu4CiGJeMQoaLvN0TeLULYHhZo4Aidi8vMEZppWydWnQOk85tovRseh6zivOv9uJkYincRQ0SyZj36gfQBYQWASpLFE5wyQrazFFZwhiVYPjrvVMtaYqygqEpDsEQqLzaU0VxIEii+kv5uT5BVkJCPueIgS6IaJHNERgyWqEuuD8Y8aJmSKqoDUSpL+mGLPOqYViCIsmSLKmjlmL2knSDM1QymBEw5OW+zMsDpS8/d/8fHKI5EqWBIA8GvZ4hSqLW0yxLMC1N76uiakk/xfFbF+Toyl503FZf5LsgwrRkXl6RtIDhm8jfDmEQFFXO1k0eGO0CUTB8t40Yw3lctsyqHNLghC/IaHmAYQTTEv3VcERR+Mbl1cSMImx1uHZnB17lXdBibwN9V5shL35fnvR+jRd5vif1B9Kg1+9JfHuzPeiCHLbBgPjp06c/fv/aFuYVcpshRAzitGyVZle3jNmWaR9tJfDGY20Za0asgW8U30bnRZoq7tiesjt4ysyIz6uOOo0jA9944hyPqgWl5MgFqmYtoXmX5t+DgCGYc56+SnMPd8bX6fJxI6Fsduvzy1kfazNhYwnyihHN83s49qzxU3DxBK8cy2umBPuOKxPmuLo9c3R3Yca162TrQS7p9UObLUQXHKD3yUIGjcfBdldvKHcQCONskht5gPFkYsxnXFPLhn4aeNnkJgg32TlMd0/8yk3oeXIz9HA5uXK7Tm+z9KNMnzC/Fg84EfXXob6bSvpq5vh13PD9N8Lo7o2vXfhpM1+At5rrPXffxXh1239xLD3aX7DlWsLWNerC7kWX9X5SF6UK15nArfxqOuZEd6l749McPLfiJylkUUGz1pTzkBZ3qdCiakVs51Hxg2SGFtta/MI8hSXTvg3GP80a/3LLpQWZwPLUSjHa14bTqrzRCFkzyN7mDGjtZ2xi8PwnC3U3v5IIAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by ALI-MD", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "923003588997", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐀ɭīī 𝐈𝐍𝅦𝐗īī𝐃𝐄 ‹³策", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "6.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𓆩ု᪳𝐀ɭīī 𝐌Ɗှ᪳𓆪", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/2ka956.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ALI MD ALIVE",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
//not working for the moment do don't on it
GOODBYE: process.env.GOODBYE || "false", //not working for the moment do don't on it
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Asia/Karachi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
