
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA61V2Y6jOBT9lZZfE3WxL5FKanCAkHQ2SEKS0TwQMEsFzGYCoZVPmL+ZH5o/GZGqmi6pe6prpOHJGHN9zvU5x98AzuIKzdAVjL6BvIwvLkH9kFxzBEZArYMAlWAIfJe4YASKyUIdH1vTofHAETuq84P6eJgIuwbNjExvqUJBUrela5Z6BLchyOtTEnvvFPT9ZblNUDputo1c7jtdqq5qcUwlasp162umL7e1Y0X8fFc9gltf0Y3LGIdaHqEUlW4yQ9eVG5cfgz9Y0OwSBSs5WNuMedwK+81TNXaoKxdm6FjtT91J7Qh1gvr2Y/A7SKnJTi5rwQp9dZbymHeiaRsMcIMPm1y8LOiQ2F8HbXd+hl/FIUa+6SNMYnL9cN+hMZsHhTFxnkwtVDB88jimnX7N6DTz9n4YHXEWrQ7Gjk+kjwFvT5FlhV1xSVM3EndFR6Bq7dTNJfSu41rNTtNBrAYYLvH8LfBV+aqV83/pu6Z3XARbPjSNqIOrVtmIZ8lxLLZl5HieHJ2QhkHHTcfnD8Jf6H6EuSCoRLtaXU1ooxIXKSe0oi1b6wndOA2nGVjk4Rv4LqnL91CmfsA4trDg2WYqUZEZSAme2BbbpVArs85KNngfjr8eYLyRF8fr9cFRpFry3BxSJz67rJdP0pgq9kWM2W56mdYmJ3jj8PHO6Iyupg9G9G0IShTGFSldEmf4PseIQ+D6Fxt5JSL39oK1POBMb+AUpKAy9mQRrGl0Mlto4lEo01lwYnBbeW3ehuYjGIK8zDxUVcifxBXJyuscVZUbogqMfrufVE+6RGlG0DT2wQjItEzJLCswHCt/qT43kUsqN88/Y0TAEARlls4RGJGyRkNw/0HhJEGmaIbXeV7jVV3UxjxNK7oicqIEVdhTTJ833cQpqoib5mBEi7wgCQIjirfh/4OD4jRWFUUdsiwtqjoLdU2CgqrKIsMyY53+BQ7p/8Kh8JzEjzlG0jhaU8ZjyHGSprKySPFQ5hXpfRwSf/t9CDBqybOfehWw9BAEcVmRLa7zJHP9V7O9fnQ9L6sxsa/Yg/0AlWD0ZhoREuOw6pnV2C29KL4g2PMAo8BNKvSP8FCJ/FcuL2EKM7/3gzU+CtwBSqDH3hf6oTcj6cfuJPdVNEvTFMcLnEDxFEePpC/9/BBgty8F2E+fPv315x99W14A9/V9RNw4qfp8M4suJaauLTYLttoahqKFCgwV8J3gq4GfDSLHA3Mr7Y9b6SsMn6yBPA0DGHd0PjudZN3lzqcHT1b0tas1jz8p0rvfPrSr5oEtjoZpzea+JrEFL7jzATU2OwpFpBwwy9y8GPWB3XLLvQehsnXWhpM1x/lGnp2XYbJXmsrkz5K6ExhpKyKoPPa7+egSe+jtZlSxoAzrpKf+pFDo4imyvZpKGhpFK4attK5Iq2YWGNEALhzbUWhiOUdHsTfn0yCn19zsIU44N1sYZcQh7uI8yZ2SKC/Rco+25OVKiV9MH99fgxjdE/rlFH51lM+4e8FRt+GbEi+R/y+xqQaHS6yvdGa3gk1mUsHFPkyarJJdO2UeLKeeGg/saq1ujWgObr3y88QlQVamYARc7JfZXSllVvcKNnGQvXcRKqH5SjxxK6J8d8XPDM8/r1qVWT5xq6hXYnBo4KyX+FXJc5u45NVkQOkfXcfg9jcFVDYBFwkAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
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
