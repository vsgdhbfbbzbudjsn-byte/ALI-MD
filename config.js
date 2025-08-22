
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA61V2Y6jRhT9lVG92hqzL5ZaCmAw2MbGC146ykMBBcasLgqwPfIn5G/yQ/mTCHd3ZqJJejrS8FTUcu85t8659QXkRVyhKbqC4RdQ4riBBHVDci0RGAK1DkOEQR8EkEAwBDuHOu8lee4p0TFMXKenIWaf2IwdieusDJveXhVutOFHevsE7n1Q1l4a++8ENKW6hheb8hJcGx79HFu8Wvg7lo1XZ3pb0Fkr5+ZW98fLwxO4dxFhjOM80ssjyhCG6RRdHRjjj8Ffm9IhmzdNc813dtBWHGVGgoJCRlkdJ4pioqDSjW1FcvfwMfiXhXPWuYt9SN1E1Oamm/ubunD3iVoIu/V4Rp92V2JEkWUWL/CrOMpRYAUoJzG5frju2oRqb0vVS8ZmbprX7fZay+XzJjxigRcmumv36LkpzdQ0pz4GXNkU6unW68n6NNJvi1JY4HTxPNOVkxJ5kLmlWjJpn6+sO/oHcAe/aSX5P3WP5mdnP0gOXJBtTuuZbfAzvWzTWKAu9XE2u5BzQKLpZCfn9sfgu62UXaO67pUoX1verjSK5XQ3OfGrc0uphqQWBm+hTbtct1/hQ1Lj91AK3tJWlTy6GeuIY5a8GdWHsqepppoum2fuMIVNqUdmTs0Ym6ssyDLm7GDsB7NkrbSO41eLdsmhw4TnZyu9Rji8SJmmPD0YJehqBWBI3/sAoyiuCIYkLvLHHMP1AQyaNfIxIo/yAnXhwGcxE8fZYeVt49uVng3SacI0pQFtGU/FdqTv8tZ0teIJ9EGJCx9VFQrMuCIFvtqoqmCEKjD89XFTHWmMsoKgSRyAIZBpgZEFnpY5kf2l+tweIalgWX7OEQF9EOIisxEYElyjPngcYDRZFkeqoVKcpDEjkaNomZVUWtdGoiQrfEcxe0m6iTNUEZiVYEiLPC9xkixz9/7PwWEwjKzSvMJqxkgRWFWSWN1gBErjFZESOfoHOPifhUNQR6puqLKsCSNJY8SRxnKaIouSqumGohjv4ZApSrz/1gc5upAXP3UqYOk+CGNcETevy7SAwZvZ3hah7xd1TtbX3Ne6AcJg+M00IiTOo6pjVucQ+8e4QVrHAwxDmFbob+EhjII3Lq/NVCuCzg/L0c6wl6IDOuxdoO9qM2S478uTPrbREsdKLM9TFMUz/GNnt9AHOeyCAfrTp09//vF7V5hXyF2GABEYp1XX4az1LSOWoVuiVtjueKwsI0WLFPCV4puFXywixz3LlfbPrjTTotOqJ0+iUItvdDn1PNmAXOINfFkxlrB7ir4PAoagEAimV9rMT6RJdD4gsSkXq7rakta+THZGmYcXb7CpAnhGhT9t2MbLY+bIZDBReV1MFsppM577Mwv5LucFzjzZhKYaPXXZAtTEPvo2mXTz9sKlNb2RMKdbchNtT1xo0/rm3dYEj8Vw7yRMPWBp0hQbOafU6WhkVUtTswenZDeNTwKLVN8bn49xIItzd5EWWHltLo/mlr4+KvGr7ePHbxijR49+vYUfXuYL8E5z1L3/TYzXrv8fnVMND01sOAazdbS2sKiwWR/MtqhkuM6YwWpXT8YD1lmq7vhog3sn/jKFJCxwBoYA5gEuHlLBRd2J2MrD4r23UIms0fKFeQoronw1xr94XpJedjm4KE1YHbsAXDiZdyK/KmW5JpC82Qwo3TdtcnD/C2qpQr0ZCQAA", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
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
