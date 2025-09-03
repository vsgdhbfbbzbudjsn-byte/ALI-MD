
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA62VW46jOBSGt9Lya6IGwj1SSc01gYSEhNxH8+CAIRBuZUwIaWUJs5vZ0OxkRKpquqTp6a6RmidjzPF3jv/z+yvIi7hCE9SC4VdQ4vgCCeqGpC0RGAK1DkOEQR8EkEAwBCO1Es7yRqhswYwabcGuHNfwzd7oduU8L5ikMmUzIT4s8vMTuPdBWR/T2P9BwMGO88VCT6F5YOcrv7VaKxFHpGwl34v3VsIUaLVzxGQ58J/AvYsIYxznkVGeUIYwTCeodWGMP4a/ne0h00yvooAEGUqX6YH2FsdxarfwxMTImocrylHmKr+NPoafhDN6wh+nOd2rT2aYHfTI1ZYrn8vGozYPscLkZBpAnlX3L/hVHOUosAKUk5i0H657b5xgou727lGe2aco9dT9mU28WZIsld5EoHLpFCVuornbD9Y9dXNib3eWZUcePh68qJU4Gy2Z/dmAZbVLhFlSb+aeVefFe3AXv2nl/H/qrkzXpxt6bm7ZYjS16qUyp+a3PR4Vtrg0mnmcq3w2p0t7Zn4QP7pd1vmRFnqhno5314WcSVsUKLdLuwsFg3UzR5+TntQb7xbf8CGp8Y8oJdhKuXaZrRpKQhef80scBNnenp0mbnLkU7ZkrMt0Bj1+36wbs6HC87O2eT6Or8/ezS5C7dKga2nv6cWq2fDzSTvZ6LHy9MjojForAEPm3gcYRXFFMCRxkT/mOLEPYHDxkI8ReZQXPF+vVDZJsiXVWPTl2ipOj2glPC6D27wMTYgpIx+Nj+3x6jyBPihx4aOqQsE4rkiBWwdVFYxQBYa/PU6qSxqjrCDIjgMwBDIj0zLLCgOOlb9Un5sTJBUsy885IqAPQlxkDgJDgmvUB48fTGPAa4oh0rIuKvqAZU1J0mmdNzhVEiRO61LMXjZdxRmqCMxKMGREXpAZRhKle//XcIiyStOMYTKGIrOiqmkGR4sCrRmMYmqiZPyEQ/5VHJKms6rCKhKnibo4oAVZEDSaU3RVViTlJxwyzf4qjgFL8zRv0qLOioI20HRG5TTGZAxVZHWJV3/MMaDvv/dBjq7kpa87NbJMH4Qxrsg6r8u0gMFb0799hL5f1Dnx2tzXugHCYPhuGhES51HVZVbnEPun+IK0Lg8wDGFaoX8aAGEUvOXyaupaEXR96fDeljf0LejYu0D/qs3wO9VJH6sYlmFojhc4geZpjhnKX7r5PshhFwqwnz59+uvPP7qyvAJ38QNEYJxWYAg06/mWEcs03O2V89ejkWJFihYp4FuCb0by0qhy3LPW0u6wlqZalCx7sh2FWnxjysnxKJuQOx8pX1bMBTSap+8EAUNQWoasj6x0NTXD6Ord+KhiNWmeOYZDqOmWyht23TBmnRoxfXAdOb2p/AmlB3XXW0SuStepd8izzdbcSPUkHOFBrSpK5zp9EKBL7KP3m03Psbu2ZqcG2SPPQ4Yzoqjn03kP/bM0L/ZWM5idiwY57HJVzrcqVVwUIiuKxx8MXuoFJUE7108sfoknQTBxdz1+rSfRi8U9LDZ9vdriV/OJH69hjB43xesp/OwoX7g7wdH3/rsQr1fPf9i3Gu4vsemag42rNYVFhxdvP26KSoZeNqCW29oeUay7UNejkwPunfLLFJKwwBkYApgHuHgoBRd1p2ArD4sfbKYpkaW8Jp7CiijfuuJ7xsO/rHJxUY5hdeqUGO4bbdJJvFXK0iOQvDUZULrHNAtw/xsgiUYtnwkAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
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
