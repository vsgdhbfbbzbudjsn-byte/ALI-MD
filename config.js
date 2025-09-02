
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA62V2Y6jOBSGX6Xl20Qd9kCkkpqwF1mopCDLaC4cMMRhDZhQ0MojzNvMC82bjEiqpkvqnu4aabgyxhx/5/j/j7+CLMcVslELJl9BUeILJKgfkrZAYAKmdRiiEgxBAAkEE7CZ7qdwYc/1pQF5ObQPzX6QnrOX8zYfB3FiLYXHWbOVZi/b3QO4DkFRHxLs/yTgsT2d827dPR4eOT5CsbHfly1tLS/aYBfzOE4d+pLsjedloj2Aax8R4hJnkVYcUYpKmNiodSAuP4avTV/EXOryyzG0uVjoBptgUV2M0GWSFaEZ93CuSB08nVgv/xi+gF+ex0aKDsFoIFhPiWMqltlF3VpezRvsjOtkXXErba9n4h2/wlGGAitAGcGk/XDdbWfAHDJqRE4nW03C8my5xO9iT5kZTq1Q3ikvntO1H6/N6mPgyrGZx56mPS928ciOtLbjuwg2lL5wwqZdJtjiSKdfwjCR34M75ZtW4v9S97Vmbytx78pydHYQCpfhzqR4ccQiGcu0V+qLPTs/dC7Z+B/DHx1ijhiePXuanwLPk+ao0NSy2w6MtrHcmtrTz8duEW5iM/qGD0ld/ozSlTeb9alxY+noMHwDVzQVRSerO6XSyowHSlIMBhtMtowlrKKOHFdNExaHpbBYMAvZ870Vr3HFIGL4gZVu2kzcGYWmPD3cMopRawVgQl+HoEQRrkgJCc6z2xzPDQEMLmvkl4jcygum6QCJ5mxpbdTTDNlULKo52iCvE/TZkjOfm+nJPctpfOTFBzAERZn7qKpQYOKK5GU7R1UFI1SByW+3k+qTLlGaE/SIAzABEi1REssKDMdKX6rPzRGSChbF5wwRMARhmadzBCakrNEQ3H7QNVaSWFakFYnmOYFSWFoTOZYfy1OVlXWpTzG9b/qMU1QRmBZgQo95QWSYMcVeh/8PB6uorC4znMKLKqXREi9Ox7QmjFmOEwSRp37Bwf1fHALH0qqmazrP8JKg8KpKKyIjULw2Hcuazv6cg+auvw9Bhl7I3U+9Clh6CEJcVsTN6iLJYfBmtreP0PfzOiPrNvOVfoBKMHk3jQjBWVT1mdUZLP0jviClzwNMQphU6B/hoRIFb7m8NlMlD3o/7G1aYwSeAT17H+i72kzG31cnua2iWZqmOF7gBIqnOHoy/tLPD0EG+1CA/fTp019//tGX5RW4jx8gAnFS9e3ISruUWLpmmzwjuoYhP0WyEsngW4JvBr4bRMIDyxW3e1ecKdFpNZAeo1DBHV3Yh4OkQy4+jHxJ1p+g1jz8IEiPpI5W1ZLnVpx/QFPOtS6+vY9CcXlk14yeCLxhnEj2SGcjBzuSq4+yJKuthTq+sDJ9NDxHRTXLNluDZgU+EXX5kMhq9NDvFqAL9tH7zTQvTrtYNTemV9cNrVcjLliMqbl6Hh+8eRFX0mIwjXbkLKxMLW9ceGEizzgtmtPMhG27HROJg47jZ+dNo5QeY/EwlJt7a7m1tuT1SsGvpse31xCjW4d+PYVfHeWduxccdR2+C/Ha8v+lbU7D3QXrjs54jtLkFhVe1juzySsJrlNmtNrUj8aIdZ6mrnGcg2uv/CKBJMzLFEwAzIIyvymlzOtewVYW5j+7t+TIkqN74gmsiPzNFT8yPHNf5ZR5YcLq2B97uGsUu5d4KxfFmkDyZjIg355LCq5/A10fmlUXCQAA", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
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
